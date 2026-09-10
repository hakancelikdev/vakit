#!/usr/bin/env node
/**
 * Vakit landing page generator.
 *
 * Reads content.js (+ locales/*.js through it) and writes fully static pages
 * into docs/:
 *
 *   docs/index.html          Turkish, canonical root
 *   docs/<lang>/index.html   every other language in LANGS, each its own indexable URL
 *   docs/{,en/}{privacy,terms,ads-policy}.html   legal pages (Turkish + English only)
 *   docs/sitemap.xml         every page, cross-linked with hreflang
 *   docs/robots.txt          search + AI crawlers
 *   docs/llms.txt            plain-text summary for AI assistants
 *
 * Why a generator: crawlers that don't execute JavaScript — Googlebot's first
 * pass, GPTBot, ClaudeBot, PerplexityBot — used to see empty <div>s where the
 * features, comparison, reviews and FAQ should be. Everything is baked in now,
 * and the on-page FAQ and the FAQPage structured data come from one array, so
 * they cannot disagree.
 *
 * Usage: npm run build   (from site/)
 */

const fs = require("fs");
const path = require("path");
const C = require("./content.js");
const { validateLocale } = require("./tools/validate.js");

const { SITE, LANGS, LEGAL_LANGS, META, COPY, PRAYERS, FEATURES, SHOWCASE, COMPARE, REVIEWS, FAQ, LEGAL, storeLink, clockCities } = C;

// Long-form legal prose, one module per document, each with tr + en.
const LEGAL_COPY = {
  privacy: require("./legal/privacy.js"),
  terms: require("./legal/terms.js"),
  "ads-policy": require("./legal/ads-policy.js"),
};

const DOCS = path.join(__dirname, "docs");
const BUILD_DATE = SITE.updated;
const ALL = Object.keys(LANGS);

const { SCRIPTS, fontHref, joinsWithoutSpace } = require("./tools/fonts.js");

/* Runs before first paint so a dark-mode visitor never sees a white flash;
   script.js takes over the toggle once the page has loaded. */
const THEME_BOOT = `<script>
      (function () {
        try {
          var t = localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
          document.documentElement.setAttribute('data-theme', t);
        } catch (e) { /* storage blocked: stay on the light default */ }
      })();
    </script>`;

/* ---------------------------------------------------------------- helpers */

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Resolve {featureCount} / {ratingCount} placeholders in copy strings. */
function t(lang, key) {
  const raw = COPY[lang][key];
  if (raw === undefined) throw new Error(`Missing copy key "${key}" for "${lang}"`);
  return raw
    .replace(/\{featureCount\}/g, String(FEATURES[lang].length))
    .replace(/\{ratingCount\}/g, SITE.rating.count);
}

/** JSON embedded in HTML: "<" must never close the script early. */
const jsonLd = (obj) => JSON.stringify(obj, null, 2).replace(/</g, "\\u003c");

const pad2 = (n) => String(n).padStart(2, "0");

/** Language-aware path for a page. */
const localUrl = (lang, file = "") => LANGS[lang].path + file;

/** Legal pages exist in Turkish and English only; everyone else reads English. */
const legalLang = (lang) => (LEGAL_LANGS.includes(lang) ? lang : "en");

const shotUrl = (lang, img) => `/assets/screenshots/${LANGS[lang].shots}/${img}.webp`;

/** Link-preview card, rendered per language by tools/make-og.js. */
const ogUrl = (lang) => `/assets/og/${lang}.jpg`;

function fontHead(lang) {
  const s = SCRIPTS[LANGS[lang].script];
  const link = `<link href="${fontHref(LANGS[lang].script)}" rel="stylesheet">`;
  const vars = [s.serif && `--serif: ${s.serif}`, s.sans && `--sans: ${s.sans}`].filter(Boolean);
  return vars.length ? `${link}\n    <style>:root { ${vars.join("; ")} }</style>` : link;
}

/** <html> attributes: language, direction, and a script class for typography. */
function htmlAttrs(lang) {
  const L = LANGS[lang];
  return `lang="${L.htmlLang}"${L.rtl ? ' dir="rtl"' : ""} class="script-${L.script}"`;
}

/* ------------------------------------------------------------ structured data */

function appSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: META[lang].title,
    description: META[lang].description,
    url: SITE.origin + LANGS[lang].path,
    downloadUrl: storeLink(),
    installUrl: storeLink(),
    applicationCategory: "LifestyleApplication",
    operatingSystem: SITE.operatingSystem,
    operatingSystemVersion: SITE.minOS,
    softwareVersion: SITE.appVersion,
    inLanguage: ALL.map((l) => LANGS[l].htmlLang),
    author: { "@type": "Person", name: SITE.author, url: SITE.authorUrl },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      ratingCount: SITE.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    featureList: FEATURES[lang].map((f) => f.n),
    screenshot: SHOWCASE[lang].map((s) => SITE.origin + shotUrl(lang, s.img)),
    review: REVIEWS[lang].map((r) => ({
      "@type": "Review",
      name: r.t,
      author: { "@type": "Person", name: r.n },
      reviewBody: r.b,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    })),
  };
}

function siteSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: META[lang].title,
    url: SITE.origin + LANGS[lang].path,
    inLanguage: LANGS[lang].htmlLang,
    publisher: { "@type": "Person", name: SITE.author, url: SITE.authorUrl },
  };
}

function faqSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ[lang].map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Everything script.js needs for the live clock, in the page's language. */
function clockData(lang) {
  return {
    lang,
    dateLocale: `${LANGS[lang].htmlLang}-u-ca-gregory-nu-latn`,
    prayers: PRAYERS[lang],
    cities: clockCities(lang).map(({ id, name, lat, lon, method }) => ({ id, name, lat, lon, method })),
  };
}

/* ----------------------------------------------------------------- sections */

function hreflangLinks(urlFor) {
  return (
    ALL.map((l) => `<link rel="alternate" hreflang="${LANGS[l].htmlLang}" href="${urlFor(l)}">`).join("\n    ") +
    `\n    <link rel="alternate" hreflang="x-default" href="${urlFor("en")}">`
  );
}

const GLOBE =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.6 2.8 3.9 6 3.9 9.5s-1.3 6.7-3.9 9.5c-2.6-2.8-3.9-6-3.9-9.5s1.3-6.7 3.9-9.5z"/></svg>';

/** Language picker: plain links, so crawlers can reach every language from every page. */
function langMenu(lang) {
  const items = ALL.map((l) => {
    const L = LANGS[l];
    const attrs = l === lang ? ' aria-current="page"' : ` hreflang="${L.htmlLang}"`;
    return `<li><a href="${L.path}" data-lang="${l}" lang="${L.htmlLang}" dir="${L.rtl ? "rtl" : "ltr"}"${attrs}>${esc(L.name)}</a></li>`;
  }).join("\n        ");
  return `<details class="lang-menu">
      <summary aria-label="${esc(t(lang, "langLabel"))}">${GLOBE}<span>${esc(LANGS[lang].name)}</span></summary>
      <ul class="lang-list">
        ${items}
      </ul>
    </details>`;
}

function showcaseList(lang) {
  return SHOWCASE[lang]
    .map(
      (item, i) =>
        `        <button class="sc-item${i === 0 ? " on" : ""}" data-index="${i}">` +
        `<span class="sc-num">${pad2(i + 1)}</span>` +
        `<div class="sc-body"><h3>${esc(item.t)}</h3><p>${esc(item.d)}</p></div>` +
        `<span class="sc-tag">${esc(t(lang, "preview"))}</span></button>`
    )
    .join("\n");
}

/** Slot 0 is the preview video; the rest are screenshots in the page's language. */
function showcaseScreens(lang) {
  const v = LANGS[lang].video;
  return SHOWCASE[lang]
    .map((item, i) =>
      i === 0
        ? `        <video class="phone-screenshot phone-video on" data-i="0" src="/assets/video/sky-${v}.mp4"` +
          ` poster="/assets/video/sky-${v}-poster.webp" width="390" height="844"` +
          ` muted loop playsinline autoplay preload="metadata" aria-label="${esc(t(lang, "videoLabel"))}"></video>`
        : `        <img class="phone-screenshot" data-i="${i}" src="${shotUrl(lang, item.img)}" alt="${esc(item.t)}"` +
          ` width="390" height="844" loading="lazy">`
    )
    .join("\n");
}

function featureGrid(lang) {
  const list = FEATURES[lang];
  const total = pad2(list.length);
  return list
    .map(
      (f, i) =>
        `        <div class="f-cell">` +
        `<div class="f-num">${pad2(i + 1)} / ${total}</div>` +
        `<div class="f-name">${esc(f.n)}</div>` +
        `<div class="f-desc">${esc(f.d)}</div></div>`
    )
    .join("\n");
}

function compareTable(lang) {
  const head =
    `        <div class="compare-row head">` +
    `<div class="compare-cell">${esc(t(lang, "c-head-f"))}</div>` +
    `<div class="compare-cell">${esc(t(lang, "c-head-o"))}</div>` +
    `<div class="compare-cell">${esc(t(lang, "c-head-v"))}</div></div>`;
  const rows = COMPARE[lang]
    .map(
      (r) =>
        `        <div class="compare-row">` +
        `<div class="compare-cell feat">${esc(r.f)}</div>` +
        `<div class="compare-cell other"><span class="cmark no">${esc(t(lang, "c-no"))}</span><br><br>${esc(r.o)}</div>` +
        `<div class="compare-cell vakit"><span class="cmark yes">${esc(t(lang, "c-yes"))}</span><br><br>${esc(r.v)}</div></div>`
    )
    .join("\n");
  return head + "\n" + rows;
}

function reviewGrid(lang) {
  return REVIEWS[lang]
    .map(
      (r) =>
        `        <article class="t-card">` +
        `<div class="t-stars">★★★★★</div>` +
        `<div class="t-title">${esc(r.t)}</div>` +
        `<p class="t-body">${esc(r.b)}</p>` +
        `<div class="t-author"><span>${esc(r.n)}</span><span>App Store</span></div></article>`
    )
    .join("\n");
}

function faqList(lang) {
  return FAQ[lang]
    .map(
      (f, i) =>
        `        <div class="faq-item${i === 0 ? " on" : ""}">` +
        `<button class="faq-q" aria-expanded="${i === 0}">${esc(f.q)}<span class="faq-icon">+</span></button>` +
        `<div class="faq-a"><div class="faq-a-inner">${esc(f.a)}</div></div></div>`
    )
    .join("\n");
}

function marquee(lang) {
  const p = PRAYERS[lang];
  const names = [p.Fajr, p.Sunrise, p.Dhuhr, p.Asr, p.Maghrib, p.Isha];
  const line = Array(3).fill(names.join(" · ")).join(" · ");
  return `<span>${esc(line)}</span><span>${esc(line)}</span>`;
}

const APPLE_LOGO =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.6 13.4c0-2.4 2-3.5 2.1-3.6-1.1-1.6-2.8-1.8-3.4-1.9-1.5-.1-2.8.9-3.6.9-.7 0-1.9-.9-3.1-.9-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.7 2.4 3 2.4 1.2 0 1.6-.8 3-.8s1.8.8 3.1.8c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.6-1-2.6-3.8zm-2.5-7.1c.6-.8 1.1-1.9 1-3-.9.1-2 .6-2.7 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2-.5 2.7-1.3z"/></svg>';

/* -------------------------------------------------------------------- page */

function page(lang) {
  const L = LANGS[lang];
  const m = META[lang];
  const canonical = SITE.origin + L.path;
  const ogImage = SITE.origin + ogUrl(lang);
  const legal = legalLang(lang);
  const note = t(lang, "r-note");
  // Split headings join with a space — except in Chinese and Japanese, which don't space words.
  const gap = joinsWithoutSpace(L.script) ? "" : " ";

  return `<!DOCTYPE html>
<html ${htmlAttrs(lang)}>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${THEME_BOOT}

    <!-- Primary Meta Tags -->
    <title>${esc(m.title)}</title>
    <meta name="description" content="${esc(m.description)}">
    <meta name="keywords" content="${esc(m.keywords)}">
    <meta name="author" content="${esc(SITE.author)}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${esc(m.title)}">
    <meta property="og:description" content="${esc(m.description)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${esc(m.title)}">
    <meta property="og:site_name" content="${esc(m.title)}">
    <meta property="og:locale" content="${L.ogLocale}">
${ALL.filter((l) => l !== lang).map((l) => `    <meta property="og:locale:alternate" content="${LANGS[l].ogLocale}">`).join("\n")}

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${canonical}">
    <meta name="twitter:title" content="${esc(m.title)}">
    <meta name="twitter:description" content="${esc(m.description)}">
    <meta name="twitter:image" content="${ogImage}">
    <meta name="twitter:creator" content="@hakancelikdev">

    <!-- Apple / theme -->
    <meta name="theme-color" content="${SITE.themeColor}">
    <meta name="msapplication-TileColor" content="${SITE.themeColor}">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="light-content">
    <meta name="apple-mobile-web-app-title" content="${esc(SITE.appName)}">
    <meta name="application-name" content="${esc(SITE.appName)}">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-itunes-app" content="app-id=6748356813">

    <!-- Canonical + hreflang -->
    <link rel="canonical" href="${canonical}">
    ${hreflangLinks((l) => SITE.origin + LANGS[l].path)}

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/assets/android-chrome-512x512.png">
    <link rel="manifest" href="/assets/site.webmanifest">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="/styles.css">
    ${fontHead(lang)}

    <!-- Structured Data -->
    <script type="application/ld+json">
${jsonLd(appSchema(lang))}
    </script>
    <script type="application/ld+json">
${jsonLd(siteSchema(lang))}
    </script>
    <script type="application/ld+json">
${jsonLd(faqSchema(lang))}
    </script>

    <script src="/language-detection.js"></script>
</head>
<body>

<!-- ========== NAV ========== -->
<nav class="nav">
  <div class="nav-brand">
    <img src="/assets/app-icon-32.png" alt="${esc(SITE.appName)}" class="nav-mark-img" width="28" height="28">
    <div class="nav-brand-text">${esc(SITE.appName)}</div>
  </div>
  <div class="nav-links">
    <a href="#showcase">${esc(t(lang, "features"))}</a>
    <a href="#trust">${esc(t(lang, "trust"))}</a>
    <a href="#compare">${esc(t(lang, "compare"))}</a>
    <a href="#reviews">${esc(t(lang, "reviews"))}</a>
    <a href="#faq">${esc(t(lang, "faq"))}</a>
  </div>
  <div class="nav-cta">
    <button class="nav-theme" id="themeToggle" aria-label="${esc(t(lang, "themeLabel"))}">☀</button>
    ${langMenu(lang)}
    <a href="${storeLink(`site-nav-${lang}`)}" class="nav-dl">${esc(t(lang, "download"))}</a>
  </div>
  <button class="nav-toggle" aria-label="${esc(t(lang, "menuLabel"))}">&#8801;</button>
</nav>

<!-- ========== HERO ========== -->
<section class="hero">
  <div class="hero-left">
    <div class="eyebrow">${esc(t(lang, "eyebrow"))}</div>
    <h1>
      <span>${esc(t(lang, "h1a"))}</span><br>
      <span>${esc(t(lang, "h1b"))}</span>${gap}<em>${esc(t(lang, "h1c"))}</em>
    </h1>
    <p class="hero-sub">${esc(t(lang, "heroSub"))}</p>
    <div class="hero-actions">
      <a href="${storeLink(`site-hero-${lang}`)}" class="btn-primary">
        ${APPLE_LOGO}
        <span>${esc(t(lang, "downloadCta"))}</span>
      </a>
      <a href="#showcase" class="btn-ghost">${esc(t(lang, "watchTour"))}</a>
    </div>

    <div class="hero-proof">
      <div class="proof">
        <div class="proof-val">${SITE.rating.value}<span class="star"> ★</span></div>
        <div class="proof-lbl">${esc(t(lang, "p1"))}</div>
      </div>
      <div class="proof">
        <div class="proof-val">0 <span class="proof-cur">${esc(L.currency)}</span></div>
        <div class="proof-lbl">${esc(t(lang, "p2"))}</div>
      </div>
      <div class="proof">
        <div class="proof-val">13</div>
        <div class="proof-lbl">${esc(t(lang, "p3"))}</div>
      </div>
      <div class="proof">
        <div class="proof-val">100%</div>
        <div class="proof-lbl">${esc(t(lang, "p4"))}</div>
      </div>
    </div>
  </div>

  <aside class="clock-card">
    <div class="clock-top">
      <span class="clock-loc" id="loc">${esc(C.CITIES[lang][L.city])}</span>
      <span class="clock-date" id="date">—</span>
    </div>
    <div class="city-selector" id="citySelector"></div>
    <div class="clock-next-lbl">${esc(t(lang, "nextPrayer"))}</div>
    <div class="clock-next-name" id="nextName">—</div>
    <div class="clock-countdown" id="countdown">00<span class="sep">:</span>00<span class="sep">:</span>00</div>
    <div class="clock-bar-wrap"><div class="clock-bar" id="clockBar" style="width:0%"></div></div>
    <div class="clock-list" id="clockList"></div>
  </aside>
</section>

<!-- ========== MARQUEE ========== -->
<div class="marquee">
  <div class="marquee-track" id="marquee" aria-hidden="true">${marquee(lang)}</div>
</div>

<!-- ========== SHOWCASE ========== -->
<section class="showcase" id="showcase">
  <div>
    <div class="sc-head">${esc(t(lang, "sc-head"))}</div>
    <h2 class="sc-h2"><span>${esc(t(lang, "sc-h2a"))}</span><br><em>${esc(t(lang, "sc-h2b"))}</em></h2>
    <p class="sc-lede">${esc(t(lang, "sc-lede"))}</p>
    <div class="sc-list" id="scList">
${showcaseList(lang)}
    </div>
  </div>
  <div class="sc-phone-wrap">
    <div class="phone">
      <div class="phone-screen" id="phoneScreen">
${showcaseScreens(lang)}
      </div>
    </div>
  </div>
</section>

<!-- ========== TRUST / EMANET ========== -->
<section class="trust" id="trust">
  <div class="trust-inner">
    <div class="trust-eyebrow">${esc(t(lang, "trust-eye"))}</div>
    <h2>
      <span>${esc(t(lang, "trust-h1"))}</span>${gap}<em>${esc(t(lang, "trust-h2"))}</em><br>
      <span>${esc(t(lang, "trust-h3"))}</span>
    </h2>
    <p class="trust-lede">${esc(t(lang, "trust-lede"))}</p>
    <div class="trust-grid">
      <div class="trust-cell">
        <div class="trust-cell-num">01 / no account</div>
        <h3>${esc(t(lang, "t-1a"))}</h3>
        <p>${esc(t(lang, "t-1b"))}</p>
      </div>
      <div class="trust-cell">
        <div class="trust-cell-num">02 / on-device</div>
        <h3>${esc(t(lang, "t-2a"))}</h3>
        <p>${esc(t(lang, "t-2b"))}</p>
      </div>
      <div class="trust-cell">
        <div class="trust-cell-num">03 / no tracking</div>
        <h3>${esc(t(lang, "t-3a"))}</h3>
        <p>${esc(t(lang, "t-3b"))}</p>
      </div>
      <div class="trust-cell">
        <div class="trust-cell-num">04 / transparent</div>
        <h3>${esc(t(lang, "t-4a"))}</h3>
        <p>${esc(t(lang, "t-4b"))}</p>
      </div>
    </div>
  </div>
</section>

<!-- ========== FEATURES GRID ========== -->
<section class="feats" id="features">
  <div class="f-inner">
    <div class="f-head">
      <div class="f-eye">${esc(t(lang, "f-eye"))}</div>
      <h2><span>${esc(t(lang, "f-h1"))}</span><br><em>${esc(t(lang, "f-h2"))}</em></h2>
    </div>
    <div class="f-grid" id="featGrid">
${featureGrid(lang)}
    </div>
  </div>
</section>

<!-- ========== COMPARE ========== -->
<section class="compare" id="compare">
  <div class="compare-inner">
    <h2><span>${esc(t(lang, "c-h1"))}</span><br><em>${esc(t(lang, "c-h2"))}</em></h2>
    <p class="compare-lede">${esc(t(lang, "c-lede"))}</p>
    <div class="compare-table" id="compareTable">
${compareTable(lang)}
    </div>
  </div>
</section>

<!-- ========== TESTIMONIALS ========== -->
<section class="testimonials" id="reviews">
  <div class="t-inner">
    <div class="t-head">
      <h2><span>${esc(t(lang, "r-h1"))}</span><br><em>${esc(t(lang, "r-h2"))}</em></h2>
      <div class="t-meta">
        <span>${esc(t(lang, "r-m1"))}</span>
        <b>${SITE.rating.value} ★</b>
        <span>${esc(t(lang, "r-m2"))}</span>
      </div>
    </div>
${note ? `    <p class="t-note">${esc(note)}</p>\n` : ""}    <div class="t-grid" id="testGrid">
${reviewGrid(lang)}
    </div>
  </div>
</section>

<!-- ========== FAQ ========== -->
<section class="faq" id="faq">
  <div class="faq-inner">
    <h2><span>${esc(t(lang, "q-h1"))}</span><br><em>${esc(t(lang, "q-h2"))}</em></h2>
    <div class="faq-list" id="faqList">
${faqList(lang)}
    </div>
  </div>
</section>

<!-- ========== FINAL CTA ========== -->
<section class="final" id="download">
  <div class="final-mark"><img src="/assets/app-icon.png" alt="${esc(SITE.appName)}" width="88" height="88"></div>
  <h2><span>${esc(t(lang, "fin-h1"))}</span>${gap}<em>${esc(t(lang, "fin-h2"))}</em></h2>
  <p>${esc(t(lang, "fin-p"))}</p>
  <div class="final-actions">
    <a href="${storeLink(`site-final-${lang}`)}" class="btn-primary">
      ${APPLE_LOGO}
      <span>${esc(t(lang, "downloadCta2"))}</span>
    </a>
    <a href="#showcase" class="btn-ghost">${esc(t(lang, "explore"))}</a>
  </div>
</section>

<footer>
  <div class="foot-brand">
    <img src="/assets/app-icon-24.png" alt="${esc(SITE.appName)}" class="foot-mark-img" width="26" height="26">
    ${esc(SITE.appName)}
  </div>
  <div class="foot-links">
    <a href="${localUrl(legal, "privacy.html")}"${legal !== lang ? ' hreflang="en"' : ""}>${esc(t(lang, "footPrivacy"))}</a>
    <a href="${localUrl(legal, "terms.html")}"${legal !== lang ? ' hreflang="en"' : ""}>${esc(t(lang, "footTerms"))}</a>
    <a href="${localUrl(legal, "ads-policy.html")}"${legal !== lang ? ' hreflang="en"' : ""}>${esc(t(lang, "footAds"))}</a>
    <a href="${SITE.repoUrl}">GitHub</a>
    <a href="mailto:${SITE.email}">${esc(t(lang, "footContact"))}</a>
    <a href="${SITE.feedbackUrl}" target="_blank" rel="noopener">${esc(t(lang, "footFeedback"))}</a>
  </div>
  <div class="foot-sig">${esc(t(lang, "footSig"))}</div>
</footer>

<script id="vakit-data" type="application/json">${jsonLd(clockData(lang))}</script>
<script src="/script.js"></script>
</body>
</html>
`;
}

/* ------------------------------------------------------------- legal pages */

/* Shared by all three legal documents — kept identical to the inline block the
   hand-written pages used, so their appearance is unchanged. */
const LEGAL_STYLE = `      .legal-page { padding: 120px 48px 80px; max-width: 860px; margin: 0 auto }
      .legal-page h1 { font-family: var(--serif); font-size: clamp(40px, 6vw, 72px); line-height: 1.02; letter-spacing: -0.02em; margin-bottom: 16px }
      .legal-page h1 em { font-style: italic; color: var(--accent-ink) }
      .legal-desc { font-size: 17px; line-height: 1.7; color: var(--ink-2); font-weight: 300; margin-bottom: 48px; white-space: pre-line }
      .legal-card { background: var(--paper); border: 1px solid var(--rule); border-radius: 16px; padding: 32px; margin-bottom: 20px }
      .legal-card h3 { font-family: var(--serif); font-size: 22px; color: var(--accent-ink); margin-bottom: 14px; font-weight: 400 }
      .legal-card p { font-size: 15px; line-height: 1.7; color: var(--ink-2); white-space: pre-line }
      .legal-contact { margin-top: 48px; text-align: center; font-family: var(--mono); font-size: 13px; color: var(--ink-3) }
      .legal-contact a { color: var(--accent-ink); transition: color .2s }
      .legal-contact a:hover { color: var(--ink) }
      @media (max-width: 768px) { .legal-page { padding: 100px 20px 60px } }`;

/** Heading markup: most documents ship it as HTML, ads-policy as two parts. */
function legalHeading(doc) {
  if (doc.title) return doc.title; // trusted authored HTML, contains <em>
  return esc(doc.titleBefore) + "<em>" + esc(doc.titleEm) + "</em>";
}

function legalPage(key, lang) {
  const L = LANGS[lang];
  const meta = LEGAL[key][lang];
  const doc = LEGAL_COPY[key][lang];
  const file = LEGAL[key].file;
  const nav = doc.nav || {};
  const canonical = SITE.origin + localUrl(lang, file);
  const home = localUrl(lang);

  const sections = doc.sections
    .map((s) => `  <div class="legal-card"><h3>${esc(s.t)}</h3><p>${esc(s.b)}</p></div>`)
    .join("\n");

  return `<!DOCTYPE html>
<html ${htmlAttrs(lang)}>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(meta.title)}</title>
    <meta name="description" content="${esc(meta.description)}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="${esc(SITE.author)}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${esc(meta.title)}">
    <meta property="og:description" content="${esc(meta.description)}">
    <meta property="og:image" content="${SITE.origin}${ogUrl(lang)}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="${L.ogLocale}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(meta.title)}">
    <meta name="twitter:description" content="${esc(meta.description)}">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="tr" href="${SITE.origin}${localUrl("tr", file)}">
    <link rel="alternate" hreflang="en" href="${SITE.origin}${localUrl("en", file)}">
    <link rel="alternate" hreflang="x-default" href="${SITE.origin}${localUrl("en", file)}">
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="/styles.css">
    ${fontHead(lang)}
    <style>
${LEGAL_STYLE}
    </style>
    ${THEME_BOOT}
</head>
<body>

<nav class="nav">
  <a href="${home}" class="nav-brand">
    <img src="/assets/app-icon-32.png" alt="${esc(SITE.appName)}" class="nav-mark-img" width="28" height="28">
    <div class="nav-brand-text">${esc(SITE.appName)}</div>
  </a>
  <div class="nav-links">
    <a href="${home}#showcase">${esc(nav.features || t(lang, "features"))}</a>
    <a href="${home}#trust">${esc(nav.trust || t(lang, "trust"))}</a>
    <a href="${home}#faq">${esc(nav.faq || t(lang, "faq"))}</a>
  </div>
  <div class="nav-cta">
    <div class="nav-lang">
      <a href="${localUrl("en", file)}" data-lang="en"${lang === "en" ? ' class="on" aria-current="page"' : ' hreflang="en"'}>EN</a>
      <a href="${localUrl("tr", file)}" data-lang="tr"${lang === "tr" ? ' class="on" aria-current="page"' : ' hreflang="tr"'}>TR</a>
    </div>
    <a href="${storeLink(`site-nav-${lang}`)}" class="nav-dl">${esc(nav.download || t(lang, "download"))}</a>
  </div>
  <button class="nav-toggle" aria-label="${esc(t(lang, "menuLabel"))}">&#8801;</button>
</nav>

<main class="legal-page">
  <h1>${legalHeading(doc)}</h1>
  <p class="legal-desc">${esc(doc.desc)}</p>
${sections}
  <div class="legal-contact">
    <a href="mailto:${SITE.email}">${SITE.email}</a>
  </div>
</main>

<footer>
  <div class="foot-brand">
    <img src="/assets/app-icon-24.png" alt="${esc(SITE.appName)}" class="foot-mark-img" width="26" height="26">
    ${esc(SITE.appName)}
  </div>
  <div class="foot-links">
    <a href="${localUrl(lang, "privacy.html")}">${esc(t(lang, "footPrivacy"))}</a>
    <a href="${localUrl(lang, "terms.html")}">${esc(t(lang, "footTerms"))}</a>
    <a href="${localUrl(lang, "ads-policy.html")}">${esc(t(lang, "footAds"))}</a>
    <a href="${SITE.repoUrl}">GitHub</a>
  </div>
  <div class="foot-sig">${esc(t(lang, "footSig"))}</div>
</footer>

<script>
  // Remember the chosen language, and drive the mobile menu.
  document.querySelectorAll('.nav-lang a[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () { localStorage.setItem('preferredLanguage', a.dataset.lang); });
  });
  (function () {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '\\u00D7' : '\\u2261';
    });
  })();
</script>
</body>
</html>
`;
}

/* ------------------------------------------------------------ sitemap/robots */

function sitemap() {
  const block = (loc, langs, urlFor, changefreq, priority) => `  <url>
    <loc>${loc}</loc>
${langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${LANGS[l].htmlLang}" href="${urlFor(l)}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor("en")}"/>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

  const homeUrl = (l) => SITE.origin + LANGS[l].path;
  const home = ALL.map((l) => block(homeUrl(l), ALL, homeUrl, "weekly", l === "tr" ? "1.0" : l === "en" ? "0.9" : "0.8")).join("\n");

  const legal = Object.values(LEGAL)
    .map((d) => {
      const url = (l) => SITE.origin + localUrl(l, d.file);
      return LEGAL_LANGS.map((l) => block(url(l), LEGAL_LANGS, url, d.changefreq, d.priority)).join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${home}
${legal}
</urlset>
`;
}

function robots() {
  // AI assistants are welcome: the app gets real referrals from them, and the
  // page is now readable without JavaScript. Listed explicitly so the intent
  // is on the record rather than merely implied by "User-agent: *".
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-User",
    "Claude-SearchBot",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
    "Bingbot",
    "Googlebot",
  ];

  return `# https://vakit.hakancelik.dev
User-agent: *
Allow: /

# Search and AI assistants are explicitly welcome to read and cite this page.
${aiBots.map((b) => `User-agent: ${b}\nAllow: /`).join("\n\n")}

# Nothing useful to crawl here
Disallow: /assets/favicon*

Sitemap: ${SITE.origin}/sitemap.xml
`;
}

function llms() {
  const feats = FEATURES.en.map((f) => `- **${f.n}** — ${f.d}`).join("\n");
  const faqs = FAQ.en.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n");
  const langs = ALL.map((l) => `- [${LANGS[l].name}](${SITE.origin}${LANGS[l].path})`).join("\n");

  return `# Vakit — ${META.en.title}

> ${META.en.description}

Vakit is a free, ad-free Islamic prayer times and worship app for iPhone, Apple
Watch and Mac, built by ${SITE.author}. Current release: ${SITE.appVersion}, requires
iOS/macOS ${SITE.minOS} or later. App Store rating ${SITE.rating.value} from
${SITE.rating.count} ratings. Download: ${storeLink('llms-txt')}

## What makes it different

- **Free, with no paywall today.** No subscription, no "premium" tier, no locked features.
- **Completely ad-free.** No screen shows an ad. The one exception is opt-in: a user who
  wants to support the app can choose to watch an ad.
- **Offline-first.** Prayer times are calculated on the device from your coordinates
  using one of 13 calculation methods — not fetched from a server. Quran, qibla,
  dhikr and the calendar all work with no connection.
- **Private by design.** Coordinates never leave the device. Worship tracking, qada
  and hatim progress, bookmarks and favourite mosques stay on-device and in the
  user's own private iCloud. What reaches the server is usage statistics, the dhikr list
  and in-app search terms, tied to a persistent code that carries no identity (a
  pseudonym, not anonymous) — see the privacy policy.
- **No account.** Nothing to sign up for.
- **${ALL.length} interface languages**, right-to-left in Arabic, Urdu, Persian and Uyghur.
  Content translations (Quran translation, hadith translations) are Turkish and English.

## Features

${feats}

## Frequently asked questions

${faqs}

## Pages

The home page exists in every interface language:

${langs}

- [Privacy policy](${SITE.origin}${localUrl("en", "privacy.html")}) ([Turkish](${SITE.origin}${localUrl("tr", "privacy.html")}))
- [Terms of use](${SITE.origin}${localUrl("en", "terms.html")}) ([Turkish](${SITE.origin}${localUrl("tr", "terms.html")}))
- [Advertising policy](${SITE.origin}${localUrl("en", "ads-policy.html")}) ([Turkish](${SITE.origin}${localUrl("tr", "ads-policy.html")}))
- [Source](${SITE.repoUrl})

Last updated: ${BUILD_DATE}
`;
}

/* -------------------------------------------------------------------- main */

function write(rel, body) {
  const file = path.join(DOCS, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, body, "utf8");
  console.log(`  ${rel.padEnd(24)} ${String(Buffer.byteLength(body, "utf8")).padStart(7)} bytes`);
}

/** Fail loudly rather than shipping a page with a missing string, feature or image. */
function check() {
  const errors = [];
  for (const lang of ALL) {
    if (lang === "en") continue;
    const copy = { META: META[lang], COPY: COPY[lang], PRAYERS: PRAYERS[lang], CITIES: C.CITIES[lang],
      FEATURES: FEATURES[lang], SHOWCASE: SHOWCASE[lang], COMPARE: COMPARE[lang], REVIEWS: REVIEWS[lang], FAQ: FAQ[lang] };
    const { errors: e, warnings } = validateLocale(C, lang, copy);
    errors.push(...e.map((x) => `${lang}: ${x}`));
    warnings.forEach((w) => console.warn(`  warning ${lang}: ${w}`));
  }
  for (const lang of ALL) {
    const L = LANGS[lang];
    for (const s of SHOWCASE[lang].slice(1)) {
      if (!fs.existsSync(path.join(DOCS, shotUrl(lang, s.img)))) errors.push(`${lang}: missing ${shotUrl(lang, s.img)}`);
    }
    for (const f of [`sky-${L.video}.mp4`, `sky-${L.video}-poster.webp`]) {
      if (!fs.existsSync(path.join(DOCS, "assets", "video", f))) errors.push(`${lang}: missing /assets/video/${f}`);
    }
    if (!fs.existsSync(path.join(DOCS, ogUrl(lang)))) errors.push(`${lang}: missing ${ogUrl(lang)} — run node tools/make-og.js`);
    if (!SCRIPTS[L.script]) errors.push(`${lang}: unknown script "${L.script}"`);
  }
  for (const key of Object.keys(LEGAL)) {
    const copy = LEGAL_COPY[key];
    if (!copy) errors.push(`No legal copy module for "${key}"`);
    for (const lang of LEGAL_LANGS) {
      if (!copy[lang]) errors.push(`legal/${key}.js is missing "${lang}"`);
      else if (copy[lang].sections.length !== copy.tr.sections.length) {
        errors.push(`legal/${key}.js: ${lang} has ${copy[lang].sections.length} sections, tr has ${copy.tr.sections.length}`);
      }
    }
  }
  if (errors.length) throw new Error("Build check failed:\n  " + errors.join("\n  "));
}

function main() {
  check();

  console.log("Building Vakit landing page...");
  for (const lang of ALL) write(path.join(LANGS[lang].dir, "index.html"), page(lang));

  for (const key of Object.keys(LEGAL)) {
    for (const lang of LEGAL_LANGS) write(path.join(LANGS[lang].dir, LEGAL[key].file), legalPage(key, lang));
  }

  write("sitemap.xml", sitemap());
  write("robots.txt", robots());
  write("llms.txt", llms());
  console.log(
    `Done — ${ALL.length} languages, ${FEATURES.tr.length} features, ${FAQ.tr.length} FAQ entries, ` +
      `${Object.keys(LEGAL).length} legal documents.`
  );
}

main();
