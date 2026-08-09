#!/usr/bin/env node
/**
 * Vakit landing page generator.
 *
 * Reads content.js and writes fully static pages into docs/:
 *
 *   docs/index.html      Turkish, canonical root
 *   docs/en/index.html   English, its own indexable URL
 *   docs/sitemap.xml     both languages, cross-linked with hreflang
 *   docs/robots.txt      search + AI crawlers
 *   docs/llms.txt        plain-text summary for AI assistants
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

const { SITE, LANGS, META, COPY, FEATURES, SHOWCASE, COMPARE, REVIEWS, FAQ, LEGAL } = C;

// Long-form legal prose, one module per document, each with tr + en.
const LEGAL_COPY = {
  privacy: require("./legal/privacy.js"),
  terms: require("./legal/terms.js"),
  "ads-policy": require("./legal/ads-policy.js"),
};

const DOCS = path.join(__dirname, "docs");
const BUILD_DATE = SITE.updated;

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

/** JSON-LD is embedded in HTML, so "<" must never close the script early. */
const jsonLd = (obj) => JSON.stringify(obj, null, 2).replace(/</g, "\\u003c");

const pad2 = (n) => String(n).padStart(2, "0");

/** Language-aware path for a page that exists in both languages. */
const localUrl = (lang, file = "") => LANGS[lang].path + file;

/* ------------------------------------------------------------ structured data */

function appSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: META[lang].title,
    description: META[lang].description,
    url: SITE.origin + LANGS[lang].path,
    downloadUrl: SITE.appStoreUrl,
    installUrl: SITE.appStoreUrl,
    applicationCategory: "LifestyleApplication",
    operatingSystem: SITE.operatingSystem,
    operatingSystemVersion: SITE.minOS,
    softwareVersion: SITE.appVersion,
    inLanguage: [lang === "tr" ? "tr-TR" : "en-US"],
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
    screenshot: SHOWCASE[lang].map((s) => `${SITE.origin}/assets/screenshots/${lang}/${s.img}.webp`),
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
    inLanguage: lang === "tr" ? "tr-TR" : "en-US",
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

/* ----------------------------------------------------------------- sections */

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

function showcaseScreens(lang) {
  return SHOWCASE[lang]
    .map(
      (item, i) =>
        `        <img class="phone-screenshot${i === 0 ? " on" : ""}" data-i="${i}"` +
        ` src="/assets/screenshots/${lang}/${item.img}.webp" alt="${esc(item.t)}"` +
        ` width="390" height="844" loading="${i === 0 ? "eager" : "lazy"}">`
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
  const names =
    lang === "tr"
      ? ["İmsak", "Güneş", "Öğle", "İkindi", "Akşam", "Yatsı"]
      : ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
  const line = Array(3).fill(names.join(" · ")).join(" · ");
  return `<span>${esc(line)}</span><span>${esc(line)}</span>`;
}

const APPLE_LOGO =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.6 13.4c0-2.4 2-3.5 2.1-3.6-1.1-1.6-2.8-1.8-3.4-1.9-1.5-.1-2.8.9-3.6.9-.7 0-1.9-.9-3.1-.9-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.7 2.4 3 2.4 1.2 0 1.6-.8 3-.8s1.8.8 3.1.8c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.6-1-2.6-3.8zm-2.5-7.1c.6-.8 1.1-1.9 1-3-.9.1-2 .6-2.7 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2-.5 2.7-1.3z"/></svg>';

/* -------------------------------------------------------------------- page */

function page(lang) {
  const L = LANGS[lang];
  const m = META[lang];
  const other = lang === "tr" ? "en" : "tr";
  const canonical = SITE.origin + L.path;
  const ogImage = `${SITE.origin}/assets/app-icon-512x512.png`;

  return `<!DOCTYPE html>
<html lang="${L.htmlLang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', '${SITE.gaId}');
    </script>

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
    <meta property="og:image:width" content="512">
    <meta property="og:image:height" content="512">
    <meta property="og:image:alt" content="${esc(SITE.appName)}">
    <meta property="og:site_name" content="${esc(m.title)}">
    <meta property="og:locale" content="${L.ogLocale}">
    <meta property="og:locale:alternate" content="${LANGS[other].ogLocale}">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
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
    <link rel="alternate" hreflang="tr" href="${SITE.origin}${LANGS.tr.path}">
    <link rel="alternate" hreflang="en" href="${SITE.origin}${LANGS.en.path}">
    <link rel="alternate" hreflang="x-default" href="${SITE.origin}${LANGS.tr.path}">

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
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Stylesheet -->
    <link rel="stylesheet" href="/styles.css">

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
    <div class="nav-lang">
      <a href="${LANGS.en.path}" data-lang="en"${lang === "en" ? ' class="on" aria-current="page"' : ' hreflang="en"'}>EN</a>
      <a href="${LANGS.tr.path}" data-lang="tr"${lang === "tr" ? ' class="on" aria-current="page"' : ' hreflang="tr"'}>TR</a>
    </div>
    <a href="${SITE.appStoreUrl}" class="nav-dl">${esc(t(lang, "download"))}</a>
  </div>
  <button class="nav-toggle" aria-label="${esc(t(lang, "menuLabel"))}">&#8801;</button>
</nav>

<!-- ========== HERO ========== -->
<section class="hero">
  <div class="hero-left">
    <div class="eyebrow">${esc(t(lang, "eyebrow"))}</div>
    <h1>
      <span>${esc(t(lang, "h1a"))}</span><br>
      <span>${esc(t(lang, "h1b"))}</span> <em>${esc(t(lang, "h1c"))}</em>
    </h1>
    <p class="hero-sub">${esc(t(lang, "heroSub"))}</p>
    <div class="hero-actions">
      <a href="${SITE.appStoreUrl}" class="btn-primary">
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
        <div class="proof-val">0 <span style="font-family:var(--sans); font-size:16px; color:var(--ink-3); font-weight:400">₺</span></div>
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
      <span class="clock-loc" id="loc">${lang === "tr" ? "İstanbul" : "Istanbul"}</span>
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
      <span>${esc(t(lang, "trust-h1"))}</span> <em>${esc(t(lang, "trust-h2"))}</em><br>
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
    <div class="t-grid" id="testGrid">
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
  <h2><span>${esc(t(lang, "fin-h1"))}</span> <em>${esc(t(lang, "fin-h2"))}</em></h2>
  <p>${esc(t(lang, "fin-p"))}</p>
  <div class="final-actions">
    <a href="${SITE.appStoreUrl}" class="btn-primary">
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
    <a href="${localUrl(lang, "privacy.html")}">${esc(t(lang, "footPrivacy"))}</a>
    <a href="${localUrl(lang, "terms.html")}">${esc(t(lang, "footTerms"))}</a>
    <a href="${localUrl(lang, "ads-policy.html")}">${esc(t(lang, "footAds"))}</a>
    <a href="${SITE.repoUrl}">GitHub</a>
    <a href="/presentation.html">${esc(t(lang, "footDeck"))}</a>
    <a href="mailto:${SITE.email}">${esc(t(lang, "footContact"))}</a>
    <a href="${SITE.feedbackUrl}" target="_blank" rel="noopener">${esc(t(lang, "footFeedback"))}</a>
  </div>
  <div class="foot-sig">${esc(t(lang, "footSig"))}</div>
</footer>

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
<html lang="${L.htmlLang}">
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
    <meta property="og:image" content="${SITE.origin}/assets/app-icon-512x512.png">
    <meta property="og:locale" content="${L.ogLocale}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${esc(meta.title)}">
    <meta name="twitter:description" content="${esc(meta.description)}">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="tr" href="${SITE.origin}${localUrl("tr", file)}">
    <link rel="alternate" hreflang="en" href="${SITE.origin}${localUrl("en", file)}">
    <link rel="alternate" hreflang="x-default" href="${SITE.origin}${localUrl("tr", file)}">
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">
    <style>
${LEGAL_STYLE}
    </style>
    <script>
      // Apply the saved theme before paint so the page doesn't flash.
      (function () {
        var t = localStorage.getItem('theme') ||
          (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', t);
      })();
    </script>
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
    <a href="${SITE.appStoreUrl}" class="nav-dl">${esc(nav.download || t(lang, "download"))}</a>
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
  /** One <url> block per language, each listing both languages as alternates. */
  const entry = (file, changefreq, priority) =>
    ["tr", "en"]
      .map(
        (l) => `  <url>
    <loc>${SITE.origin}${localUrl(l, file)}</loc>
    <xhtml:link rel="alternate" hreflang="tr" href="${SITE.origin}${localUrl("tr", file)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE.origin}${localUrl("en", file)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.origin}${localUrl("tr", file)}"/>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${l === "tr" ? priority.tr : priority.en}</priority>
  </url>`
      )
      .join("\n");

  const home = entry("", "weekly", { tr: "1.0", en: "0.9" });
  const legal = Object.values(LEGAL)
    .map((d) => entry(d.file, d.changefreq, { tr: d.priority, en: d.priority }))
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

  return `# Vakit — ${META.en.title}

> ${META.en.description}

Vakit is a free, ad-free Islamic prayer times and worship app for iPhone, Apple
Watch and Mac, built by ${SITE.author}. Current release: ${SITE.appVersion}, requires
iOS/macOS ${SITE.minOS} or later. App Store rating ${SITE.rating.value} from
${SITE.rating.count} ratings. Download: ${SITE.appStoreUrl}

## What makes it different

- **Free, with no paywall today.** No subscription, no "premium" tier, no locked features.
- **No ads.** Nothing is sold beside religious content.
- **Offline-first.** Prayer times are calculated on the device from your coordinates
  using one of 13 calculation methods — not fetched from a server. Quran, qibla,
  dhikr and the calendar all work with no connection.
- **Private by design.** Coordinates never leave the device. Worship tracking, qada
  and hatim progress, bookmarks and favourite mosques stay on-device and in the
  user's own private iCloud. Only anonymous, non-identifying usage counts are sent.
- **No account.** Nothing to sign up for.

## Features

${feats}

## Frequently asked questions

${faqs}

## Pages

- [Turkish home page](${SITE.origin}${LANGS.tr.path}) — canonical
- [English home page](${SITE.origin}${LANGS.en.path})
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
  console.log(`  ${rel.padEnd(20)} ${String(Buffer.byteLength(body, "utf8")).padStart(7)} bytes`);
}

function main() {
  // Fail loudly rather than shipping a page that claims a removed feature.
  for (const lang of Object.keys(LANGS)) {
    if (FEATURES[lang].length !== FEATURES.tr.length) {
      throw new Error(`FEATURES.${lang} has ${FEATURES[lang].length} entries, tr has ${FEATURES.tr.length}`);
    }
    if (FAQ[lang].length !== FAQ.tr.length) {
      throw new Error(`FAQ.${lang} has ${FAQ[lang].length} entries, tr has ${FAQ.tr.length}`);
    }
    if (SHOWCASE[lang].length !== 9) {
      throw new Error(`SHOWCASE.${lang} must have 9 entries (screenshots 1-9)`);
    }
  }

  for (const key of Object.keys(LEGAL)) {
    const copy = LEGAL_COPY[key];
    if (!copy) throw new Error(`No legal copy module for "${key}"`);
    for (const lang of Object.keys(LANGS)) {
      if (!copy[lang]) throw new Error(`legal/${key}.js is missing "${lang}"`);
      if (copy[lang].sections.length !== copy.tr.sections.length) {
        throw new Error(`legal/${key}.js: ${lang} has ${copy[lang].sections.length} sections, tr has ${copy.tr.sections.length}`);
      }
    }
  }

  console.log("Building Vakit landing page...");
  write("index.html", page("tr"));
  write(path.join(LANGS.en.dir, "index.html"), page("en"));

  for (const key of Object.keys(LEGAL)) {
    write(LEGAL[key].file, legalPage(key, "tr"));
    write(path.join(LANGS.en.dir, LEGAL[key].file), legalPage(key, "en"));
  }

  write("sitemap.xml", sitemap());
  write("robots.txt", robots());
  write("llms.txt", llms());
  console.log(
    `Done — ${FEATURES.tr.length} features, ${FAQ.tr.length} FAQ entries, ` +
      `${Object.keys(LEGAL).length} legal documents, 2 languages.`
  );
}

main();
