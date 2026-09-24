#!/usr/bin/env node
/**
 * Vakit landing page generator.
 *
 * Reads content.js (+ locales/*.js through it) and writes fully static pages
 * into docs/:
 *
 *   docs/index.html          Turkish, canonical root
 *   docs/<lang>/index.html   every other language in LANGS, each its own indexable URL
 *   docs/{,en/}{privacy,terms}.html          legal pages (Turkish + English only)
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

const { SITE, LANGS, LEGAL_LANGS, META, COPY, PRAYERS, FEATURES, SHOWCASE, SHOWCASE_MORE, FEATURE_GROUPS, FEATURE_PREVIEW, DEVICES, COMPARE, REVIEWS, FAQ, LEGAL, storeLink, clockCities } = C;

// Long-form legal prose: the Turkish + English originals, one module per document.
const PRESS = require("./press.js");

const LEGAL_COPY = {
  privacy: require("./legal/privacy.js"),
  terms: require("./legal/terms.js"),
};

const DOCS = path.join(__dirname, "docs");
const BUILD_DATE = SITE.updated;
const ALL = Object.keys(LANGS);

// Every other language: all three documents translated from English, one module
// per language (legal/i18n/<lang>.js). A missing file is reported by check().
const LEGAL_ORIGINAL_LANGS = ["tr", "en"];
// The press kit is written for editors and journalists: Turkish and English only.
const PRESS_LANGS = ["tr", "en"];
const LEGAL_I18N = Object.fromEntries(
  LEGAL_LANGS.filter((l) => !LEGAL_ORIGINAL_LANGS.includes(l)).map((l) => {
    const file = path.join(__dirname, "legal", "i18n", `${l}.js`);
    return [l, fs.existsSync(file) ? require(file) : null];
  })
);
const legalCopy = (key, lang) => LEGAL_COPY[key][lang] || LEGAL_I18N[lang]?.[key];
const legalMeta = (key, lang) => LEGAL[key][lang] || LEGAL_I18N[lang]?.[key]?.meta;

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

/** Resolve {featureCount} / {ratingCount} / {screenCount} placeholders in copy strings. */
function t(lang, key) {
  const raw = COPY[lang][key];
  if (raw === undefined) throw new Error(`Missing copy key "${key}" for "${lang}"`);
  return raw
    .replace(/\{featureCount\}/g, String(FEATURES[lang].length))
    .replace(/\{ratingCount\}/g, SITE.rating.count)
    .replace(/\{screenCount\}/g, String(SHOWCASE[lang].length + showcaseMore(lang).length));
}

/** A number in the page's own notation ("4,8" in Turkish), always in Latin digits like the rest of the page. */
const num = (lang, v) =>
  new Intl.NumberFormat(`${LANGS[lang].htmlLang}-u-nu-latn`, { maximumFractionDigits: 1 }).format(Number(v));

/** JSON embedded in HTML: "<" must never close the script early. */
const jsonLd = (obj) => JSON.stringify(obj, null, 2).replace(/</g, "\\u003c");

const pad2 = (n) => String(n).padStart(2, "0");

/** Language-aware path for a page. */
const localUrl = (lang, file = "") => LANGS[lang].path + file;

/** Legal pages exist in Turkish and English only; everyone else reads English. */
const legalLang = (lang) => (LEGAL_LANGS.includes(lang) ? lang : "en");

/** Same rule for the press kit: Turkish and English, everyone else the English page. */
const pressLang = (lang) => (PRESS_LANGS.includes(lang) ? lang : "en");

const shotUrl = (lang, img) => `/assets/screenshots/${LANGS[lang].shots}/${img}.webp`;

/** iPad captures follow the iPhone ones; the Mac and the Watch were captured in Turkish and English only. */
const deviceUrl = (lang, device, img) =>
  `/assets/screenshots/${device === "ipad" ? LANGS[lang].shots : lang === "tr" ? "tr" : "en"}/${device}/${img}.webp`;

const moreUrl = (lang, img) => `/assets/screenshots/${LANGS[lang].shots}/more/${img}.webp`;

/** SHOWCASE_MORE entries this language has a capture for (the `all` ones are required, see check()). */
const showcaseMore = (lang) =>
  SHOWCASE_MORE.filter((m) => m.all || fs.existsSync(path.join(DOCS, moreUrl(lang, m.img))))
    .map((m) => ({ ...m, f: deviceCopy(lang, { feature: m.label }) }));

/** A DEVICES label → copy that already exists in every language (see content.js). */
function deviceCopy(lang, ref) {
  if (ref.feature) {
    const i = FEATURES.en.findIndex((f) => f.n === ref.feature);
    if (i < 0) throw new Error(`DEVICES: no feature named "${ref.feature}"`);
    return FEATURES[lang][i];
  }
  const s = SHOWCASE[lang].find((x) => x.img === ref.showcase);
  if (!s) throw new Error(`DEVICES: no showcase entry "${ref.showcase}"`);
  // Showcase titles are sentences ("Every tool, in one place."); a tab label drops the stop.
  return { n: s.t.replace(/[.。۔]$/u, ""), d: s.d };
}

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

/**
 * No aggregateRating and no review here. The rating and the quotes come from the
 * App Store, and Google's review-snippet rules say "Don't aggregate reviews or
 * ratings from other websites" — marking them up risks a structured-data manual
 * action (2026-09-11). They stay on the page as plain text.
 */
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
    operatingSystemVersion: minOSText(),
    softwareVersion: SITE.appVersion,
    inLanguage: ALL.map((l) => LANGS[l].htmlLang),
    author: { "@type": "Person", name: SITE.author, url: SITE.authorUrl },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: FEATURES[lang].map((f) => f.n),
    screenshot: SHOWCASE[lang].map((s) => SITE.origin + shotUrl(lang, s.img)),
    sameAs: [storeLink()],
  };
}

/** "iOS 16.4+, watchOS 9+, macOS 13+" — one platform's minimum is not the others'. */
function minOSText() {
  const m = SITE.minOS;
  return `iOS ${m.ios}+, watchOS ${m.watchos}+, macOS ${m.macos}+`;
}

/** `name` is the short brand Google shows as the site name; the page title is the alternate. */
function siteSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.appName,
    alternateName: META[lang].title,
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
  return `<details class="lang-menu" data-close-label="${esc(t(lang, "closeLabel"))}">
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

/** Screenshots in the page's language; the preview video plays in the hero instead. */
function showcaseScreens(lang) {
  return SHOWCASE[lang]
    .map((item, i) =>
      `        <img class="phone-screenshot${i === 0 ? " on" : ""}" data-i="${i}" src="${shotUrl(lang, item.img)}" alt="${esc(item.t)}"` +
      ` width="390" height="844" loading="lazy">`
    )
    .concat(showcaseMore(lang).map((m, k) =>
      `        <img class="phone-screenshot" data-i="${SHOWCASE[lang].length + k}" src="${moreUrl(lang, m.img)}" alt="${esc(m.f.n)}"` +
      ` width="390" height="844" loading="lazy">`))
    .join("\n");
}

/** More screens for the same phone: tabs under the showcase list, labelled with feature names. */
function showcaseChips(lang) {
  const base = SHOWCASE[lang].length;
  return showcaseMore(lang)
    .map((m, k) =>
      `      <button class="dv-tab sc-chip" data-index="${base + k}" aria-pressed="false" data-desc="${esc(m.f.d)}">${esc(m.f.n)}</button>`)
    .join("\n");
}

/** One device column of the iPad/Mac section: the screens, their tabs, and the caption. */
function deviceColumn(lang, device) {
  const D = DEVICES[device];
  const cap = deviceCopy(lang, D.caption);
  const size = { ipad: 'width="900" height="1200"', mac: 'width="1200" height="914"', watch: 'width="396" height="484"' }[device];
  const shots = D.shots
    .map((s, i) =>
      `          <img class="dv-shot${i === 0 ? " on" : ""}" src="${deviceUrl(lang, device, s.img)}"` +
      ` alt="${esc(`${cap.n} · ${deviceCopy(lang, s.label).n}`)}" ${size} loading="lazy">`)
    .join("\n");
  const tabs = D.shots
    .map((s, i) =>
      `        <button class="dv-tab${i === 0 ? " on" : ""}" aria-pressed="${i === 0}">${esc(deviceCopy(lang, s.label).n)}</button>`)
    .join("\n");
  const menuBar = device === "mac"
    ? `\n        <img class="mac-menubar" src="${deviceUrl(lang, "mac", "menu-bar")}" alt="" width="360" height="389" loading="lazy">`
    : "";
  return `    <div class="dv-col dv-${device}">
      <div class="dv-frame ${device}">
        <div class="dv-screen">
${shots}
        </div>${menuBar}
      </div>
      <h3 class="dv-name">${esc(cap.n)}</h3>
      <p class="dv-desc">${esc(cap.d)}</p>
      <div class="dv-tabs" role="group" aria-label="${esc(cap.n)}">
${tabs}
      </div>
    </div>`;
}

/** FEATURE_GROUPS as indexes into FEATURES; every feature in exactly one group. */
function featureGroupIndexes() {
  const seen = new Set();
  const groups = FEATURE_GROUPS.map((names) =>
    names.map((name) => {
      const i = FEATURES.en.findIndex((f) => f.n === name);
      if (i < 0) throw new Error(`FEATURE_GROUPS: no feature named "${name}"`);
      if (seen.has(i)) throw new Error(`FEATURE_GROUPS: "${name}" is in more than one group`);
      seen.add(i);
      return i;
    }));
  const missing = FEATURES.en.filter((_, i) => !seen.has(i)).map((f) => f.n);
  if (missing.length) throw new Error(`FEATURE_GROUPS: not in any group: ${missing.join(", ")}`);
  return groups;
}

/**
 * Features in groups. Until "show all" is tapped, each group shows its first
 * FEATURE_PREVIEW entries (one fewer where the grid has three columns or one);
 * the rest are still in the HTML, so crawlers read every feature.
 */
function featureGroups(lang) {
  const list = FEATURES[lang];
  const total = pad2(list.length);
  let n = 0;
  return featureGroupIndexes()
    .map((idxs, g) => {
      const cells = idxs
        .map((i, k) => {
          const f = list[i];
          const cls = k >= FEATURE_PREVIEW ? " f-extra" : k === FEATURE_PREVIEW - 1 ? " f-last" : "";
          n += 1;
          return (
            `          <div class="f-cell${cls}">` +
            `<div class="f-num">${pad2(n)} / ${total}</div>` +
            // A heading, not a div: these names are the page's keyword-bearing
            // headings (the showcase titles are poetic).
            `<h4 class="f-name">${esc(f.n)}</h4>` +
            `<div class="f-desc">${esc(f.d)}</div></div>`
          );
        })
        .join("\n");
      return `      <div class="f-group">
        <h3 class="f-group-title">${esc(t(lang, `fg-${g + 1}`))}<span class="f-group-count">${idxs.length}</span></h3>
        <div class="f-grid">
${cells}
        </div>
      </div>`;
    })
    .join("\n");
}

/** The six prayer rows, rendered with placeholder times so the band doesn't jump when real ones arrive. */
function clockRows(lang) {
  return ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"]
    .map((k) => `        <div class="clock-row"><span class="clock-name"><span class="dot"></span>${esc(PRAYERS[lang][k])}</span><span class="clock-t">--:--</span></div>`)
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
        `<div class="compare-cell other">${esc(r.o)}</div>` +
        `<div class="compare-cell vakit">${esc(r.v)}</div></div>`
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
    <meta property="og:site_name" content="${esc(SITE.appName)}">
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
        <div class="proof-val">${num(lang, SITE.rating.value)}<span class="star"> ★</span></div>
        <div class="proof-lbl">${esc(t(lang, "p1"))}</div>
      </div>
      <div class="proof">
        <div class="proof-val">0 <span class="proof-cur">${esc(L.currency)}</span></div>
        <div class="proof-lbl">${esc(t(lang, "p2"))}</div>
      </div>
      <div class="proof">
        <div class="proof-val">${SITE.calcMethods}</div>
        <div class="proof-lbl">${esc(t(lang, "p3"))}</div>
      </div>
      <div class="proof">
        <div class="proof-val">${ALL.length}</div>
        <div class="proof-lbl">${esc(t(lang, "p4"))}</div>
      </div>
    </div>
  </div>

  <!-- The app itself, first thing on the page: the prayer screen's sky. It starts
       after the page has loaded (script.js), so it never competes with the text. -->
  <div class="hero-phone">
    <div class="phone">
      <div class="phone-screen">
        <video class="phone-video" id="heroVideo" src="/assets/video/sky-${L.video}.mp4" poster="/assets/video/sky-${L.video}-poster.webp" width="390" height="844" muted loop playsinline preload="none" aria-label="${esc(t(lang, "videoLabel"))}"></video>
      </div>
    </div>
  </div>
</section>

<!-- ========== LIVE CLOCK ========== -->
<section class="clock" id="clock" data-state="loading" aria-label="${esc(t(lang, "nextPrayer"))}">
  <div class="clock-inner">
    <div class="clock-top">
      <span class="clock-loc" id="loc">${esc(C.CITIES[lang][L.city])}</span>
      <span class="clock-date" id="date">&nbsp;</span>
    </div>
    <div class="city-selector" id="citySelector"></div>
    <div class="clock-next">
      <div class="clock-next-lbl">${esc(t(lang, "nextPrayer"))}</div>
      <div class="clock-next-name" id="nextName">&nbsp;</div>
      <div class="clock-countdown" id="countdown">00<span class="sep">:</span>00<span class="sep">:</span>00</div>
      <div class="clock-bar-wrap"><div class="clock-bar" id="clockBar" style="width:0%"></div></div>
    </div>
    <div class="clock-list" id="clockList">
${clockRows(lang)}
    </div>
  </div>
</section>

<!-- ========== SHOWCASE ========== -->
<section class="showcase" id="showcase">
  <div class="sc-copy">
    <div class="sc-head">${esc(t(lang, "sc-head"))}</div>
    <h2 class="sc-h2"><span>${esc(t(lang, "sc-h2a"))}</span><br><em>${esc(t(lang, "sc-h2b"))}</em></h2>
    <p class="sc-lede">${esc(t(lang, "sc-lede"))}</p>
    <div class="sc-list" id="scList">
${showcaseList(lang)}
    </div>
    <div class="sc-more dv-tabs" id="scMore">
${showcaseChips(lang)}
    </div>
    <p class="sc-caption" id="scCaption" aria-live="polite"></p>
  </div>
  <div class="sc-phone-wrap">
    <div class="phone">
      <div class="phone-screen" id="phoneScreen">
${showcaseScreens(lang)}
      </div>
    </div>
  </div>
</section>

<!-- ========== IPAD + MAC ========== -->
<section class="devices" id="devices">
  <div class="dv-inner">
    <div class="dv-eye">iPad · Mac · Apple Watch</div>
${deviceColumn(lang, "ipad")}
${deviceColumn(lang, "mac")}
${deviceColumn(lang, "watch")}
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
${[1, 2, 3, 4].map((i) => `      <div class="trust-cell">
        <div class="trust-cell-num">${pad2(i)}</div>
        <h3>${esc(t(lang, `t-${i}a`))}</h3>
        <p>${esc(t(lang, `t-${i}b`))}</p>
      </div>`).join("\n")}
    </div>

    <!-- What other prayer apps get wrong, line by line. Part of the trust section:
         privacy is its first answer, the rest follow. -->
    <div class="compare" id="compare">
      <p class="compare-lede">${esc(t(lang, "c-lede"))}</p>
      <div class="compare-table" id="compareTable">
${compareTable(lang)}
      </div>
    </div>
  </div>
</section>

<!-- ========== FEATURES ========== -->
<section class="feats" id="features">
  <div class="f-inner">
    <div class="f-head">
      <div class="f-eye">${esc(t(lang, "f-eye"))}</div>
      <h2><span>${esc(t(lang, "f-h1"))}</span><br><em>${esc(t(lang, "f-h2"))}</em></h2>
    </div>
    <div class="f-groups is-collapsed" id="featGroups">
${featureGroups(lang)}
    </div>
    <button class="f-all" id="featAll" aria-controls="featGroups" aria-expanded="false">${esc(t(lang, "f-all"))}</button>
  </div>
</section>

<!-- ========== TESTIMONIALS ========== -->
<section class="testimonials" id="reviews">
  <div class="t-inner">
    <div class="t-head">
      <h2><span>${esc(t(lang, "r-h1"))}</span><br><em>${esc(t(lang, "r-h2"))}</em></h2>
      <div class="t-meta">
        <span>${esc(t(lang, "r-m1"))}</span>
        <b>${num(lang, SITE.rating.value)} ★</b>
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
    <a href="${localUrl(pressLang(lang), "press.html")}"${pressLang(lang) !== lang ? ' hreflang="en"' : ""}>${esc(t(lang, "footPress"))}</a>
    <a href="${SITE.repoUrl}">GitHub</a>
    <a href="mailto:${SITE.email}">${esc(t(lang, "footContact"))}</a>
    <a href="${SITE.feedbackUrl}" target="_blank" rel="noopener">${esc(t(lang, "footFeedback"))}</a>
  </div>
  <div class="foot-sig">${esc(t(lang, "footSig"))}</div>
</footer>

<!-- Phones only: a download button that stays in reach on a long page. Hidden
     while the hero's or the closing section's own button is on screen (script.js). -->
<div class="dock" id="dock">
  <a href="${storeLink(`site-dock-${lang}`)}" class="btn-primary">
    ${APPLE_LOGO}
    <span>${esc(t(lang, "downloadCta"))}</span>
  </a>
</div>

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
      .legal-notice { font-size: 14px; line-height: 1.6; color: var(--ink-3); border-inline-start: 2px solid var(--accent-ink); padding-inline-start: 14px; margin-bottom: 28px }
      .legal-notice a { color: var(--accent-ink); text-decoration: underline }
      .legal-desc { font-size: 17px; line-height: 1.7; color: var(--ink-2); font-weight: 300; margin-bottom: 48px; white-space: pre-line }
      .legal-card { background: var(--paper); border: 1px solid var(--rule); border-radius: 16px; padding: 32px; margin-bottom: 20px }
      .legal-card h3 { font-family: var(--serif); font-size: 22px; color: var(--accent-ink); margin-bottom: 14px; font-weight: 400 }
      .legal-card p { font-size: 15px; line-height: 1.7; color: var(--ink-2); white-space: pre-line }
      .legal-contact { margin-top: 48px; text-align: center; font-family: var(--mono); font-size: 13px; color: var(--ink-3) }
      .legal-contact a { color: var(--accent-ink); transition: color .2s }
      .legal-contact a:hover { color: var(--ink) }
      :where(html:not(.script-latin):not(.script-cyrillic)) .legal-page h1 { line-height: 1.25 }
      @media (max-width: 768px) { .legal-page { padding: 100px 20px 60px } }`;

/** Heading markup: documents ship it as HTML; some as two parts. */
function legalHeading(doc) {
  if (doc.title) return doc.title; // trusted authored HTML, contains <em>
  return esc(doc.titleBefore) + "<em>" + esc(doc.titleEm) + "</em>";
}

function legalPage(key, lang) {
  const L = LANGS[lang];
  const meta = legalMeta(key, lang);
  const doc = legalCopy(key, lang);
  const file = LEGAL[key].file;
  const nav = doc.nav || {};
  const canonical = SITE.origin + localUrl(lang, file);
  const home = localUrl(lang);
  const isOriginal = LEGAL_ORIGINAL_LANGS.includes(lang);
  // A translation says so, and points at the English text that applies.
  const notice = isOriginal
    ? ""
    : `\n  <p class="legal-notice">${esc(LEGAL_I18N[lang].notice)} <a href="${localUrl("en", file)}" hreflang="en" lang="en">English</a></p>`;
  const alternates = LEGAL_LANGS.map(
    (l) => `<link rel="alternate" hreflang="${LANGS[l].htmlLang}" href="${SITE.origin}${localUrl(l, file)}">`
  ).join("\n    ");
  const currentLang = isOriginal ? "" : `<a class="on" aria-current="page">${esc(lang.toUpperCase())}</a>\n      `;

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
    ${alternates}
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
      ${currentLang}<a href="${localUrl("en", file)}" data-lang="en"${lang === "en" ? ' class="on" aria-current="page"' : ' hreflang="en"'}>EN</a>
      <a href="${localUrl("tr", file)}" data-lang="tr"${lang === "tr" ? ' class="on" aria-current="page"' : ' hreflang="tr"'}>TR</a>
    </div>
    <a href="${storeLink(`site-nav-${lang}`)}" class="nav-dl">${esc(nav.download || t(lang, "download"))}</a>
  </div>
  <button class="nav-toggle" aria-label="${esc(t(lang, "menuLabel"))}">&#8801;</button>
</nav>

<main class="legal-page">
  <h1>${legalHeading(doc)}</h1>${notice}
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
    <a href="${localUrl(pressLang(lang), "press.html")}">${esc(t(lang, "footPress"))}</a>
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

/* ------------------------------------------------------------- press kit */

/* Press kit exists in Turkish and English only, like the legal pages; it reuses
   their page frame and adds two blocks of its own — the fact table and the
   asset list (the only place on the site that links raw media files). */
const PRESS_STYLE = `      .press-block { background: var(--paper); border: 1px solid var(--rule); border-radius: 16px; padding: 32px; margin-bottom: 20px }
      .press-block h3 { font-family: var(--serif); font-size: 22px; color: var(--accent-ink); margin-bottom: 14px; font-weight: 400 }
      .press-block p { font-size: 15px; line-height: 1.7; color: var(--ink-2); white-space: pre-line }
      .press-boiler { margin-bottom: 18px }
      .press-boiler:last-child { margin-bottom: 0 }
      .press-boiler span { display: block; font-family: var(--mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 6px }
      .press-facts { width: 100%; border-collapse: collapse; font-size: 15px }
      .press-facts td { padding: 10px 0; border-bottom: 1px solid var(--rule); color: var(--ink-2); line-height: 1.6; vertical-align: top }
      .press-facts tr:last-child td { border-bottom: 0 }
      .press-facts td:first-child { width: 38%; color: var(--ink-3); padding-inline-end: 16px }
      .press-video { width: 100%; max-width: 320px; display: block; margin: 0 auto; border-radius: 22px; background: #0b1020 }
      .press-assets { list-style: none; padding: 0; margin: 0 }
      .press-assets li { padding: 10px 0; border-bottom: 1px solid var(--rule); font-size: 15px }
      .press-assets li:last-child { border-bottom: 0 }
      .press-assets a { color: var(--accent-ink); text-decoration: underline }
      .press-note { font-size: 13px; color: var(--ink-3); margin-top: 14px; line-height: 1.6 }
      @media (max-width: 768px) { .press-facts td:first-child { width: 46% } }`;

function pressPage(lang) {
  const L = LANGS[lang];
  const doc = PRESS[lang];
  const file = "press.html";
  const canonical = SITE.origin + localUrl(lang, file);
  const home = localUrl(lang);
  const alternates = PRESS_LANGS.map(
    (l) => `<link rel="alternate" hreflang="${LANGS[l].htmlLang}" href="${SITE.origin}${localUrl(l, file)}">`
  ).join("\n    ");

  const facts = doc.facts
    .map(([k, v]) => `      <tr><td>${esc(k)}</td><td>${esc(String(v))}</td></tr>`)
    .join("\n");
  const assets = PRESS.assets
    .map((a) => `    <li><a href="${a.href}" download>${esc(a[lang])}</a></li>`)
    .join("\n");
  const sections = doc.sections
    .map((s) => `  <div class="press-block"><h3>${esc(s.t)}</h3><p>${esc(s.b)}</p></div>`)
    .join("\n");

  return `<!DOCTYPE html>
<html ${htmlAttrs(lang)}>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(doc.meta.title)}</title>
    <meta name="description" content="${esc(doc.meta.description)}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="${esc(SITE.author)}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${esc(doc.meta.title)}">
    <meta property="og:description" content="${esc(doc.meta.description)}">
    <meta property="og:image" content="${SITE.origin}${ogUrl(lang)}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="${L.ogLocale}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(doc.meta.title)}">
    <meta name="twitter:description" content="${esc(doc.meta.description)}">
    <link rel="canonical" href="${canonical}">
    ${alternates}
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
${PRESS_STYLE}
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
    <a href="${home}#showcase">${esc(t(lang, "features"))}</a>
    <a href="${home}#trust">${esc(t(lang, "trust"))}</a>
    <a href="${home}#faq">${esc(t(lang, "faq"))}</a>
  </div>
  <div class="nav-cta">
    <div class="nav-lang">
      <a href="${localUrl("en", file)}" data-lang="en"${lang === "en" ? ' class="on" aria-current="page"' : ' hreflang="en"'}>EN</a>
      <a href="${localUrl("tr", file)}" data-lang="tr"${lang === "tr" ? ' class="on" aria-current="page"' : ' hreflang="tr"'}>TR</a>
    </div>
    <a href="${storeLink(`site-press-${lang}`)}" class="nav-dl">${esc(t(lang, "download"))}</a>
  </div>
  <button class="nav-toggle" aria-label="${esc(t(lang, "menuLabel"))}">&#8801;</button>
</nav>

<main class="legal-page">
  <h1>${doc.title}</h1>
  <p class="legal-desc">${esc(doc.desc)}</p>

  <div class="press-block">
    <h3>${esc(doc.oneLiner.t)}</h3>
    <p>${esc(doc.oneLiner.b)}</p>
  </div>

  <div class="press-block">
    <h3>${esc(doc.videoTitle)}</h3>
    <video class="press-video" controls preload="none" playsinline
           poster="/assets/video/walkthrough-poster.jpg">
      <source src="/assets/video/walkthrough.mp4" type="video/mp4">
    </video>
    <p class="press-note">${esc(doc.videoNote)}</p>
  </div>

  <div class="press-block">
    <h3>${esc(doc.boiler.t)}</h3>
    <div class="press-boiler"><span>25</span><p>${esc(doc.boiler.short)}</p></div>
    <div class="press-boiler"><span>50</span><p>${esc(doc.boiler.medium)}</p></div>
    <div class="press-boiler"><span>100</span><p>${esc(doc.boiler.long)}</p></div>
  </div>

  <div class="press-block">
    <h3>${esc(doc.factsTitle)}</h3>
    <table class="press-facts">
${facts}
    </table>
  </div>

${sections}

  <div class="press-block">
    <h3>${esc(doc.assetsTitle)}</h3>
    <ul class="press-assets">
${assets}
    </ul>
    <p class="press-note">${esc(doc.assetsNote)}</p>
  </div>

  <div class="press-block">
    <h3>${esc(doc.contactTitle)}</h3>
    <p>${esc(doc.contactNote)} <a href="mailto:${SITE.email}">${SITE.email}</a></p>
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
    <a href="${localUrl(pressLang(lang), "press.html")}">${esc(t(lang, "footPress"))}</a>
    <a href="${SITE.repoUrl}">GitHub</a>
  </div>
  <div class="foot-sig">${esc(t(lang, "footSig"))}</div>
</footer>

<script>
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

  const pressUrl = (l) => SITE.origin + localUrl(l, "press.html");
  const press = PRESS_LANGS.map((l) => block(pressUrl(l), PRESS_LANGS, pressUrl, "monthly", "0.4")).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${home}
${legal}
${press}
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

  return `# ${META.en.title}

> ${META.en.description}

Vakit is a free, ad-free Islamic prayer times and worship app for iPhone, iPad,
Apple Watch and Mac, built by ${SITE.author}. Current release: ${SITE.appVersion}; requires
${minOSText()}. App Store rating ${SITE.rating.value} from
${SITE.rating.count} ratings. Download: ${storeLink('llms-txt')}

## What makes it different

- **Free, with no paywall.** No subscription, no "premium" tier, no locked features.
- **Completely ad-free.** No screen shows an ad, and there is no opt-in ad either.
- **Offline-first.** Prayer times are calculated on the device from your coordinates
  using one of 12 calculation methods — not fetched from a server. Quran, qibla,
  dhikr and the calendar all work with no connection.
- **Private by design.** Coordinates never reach Vakit's servers — only country, city
  and district do. To show the place name and nearby mosques, the device sends
  coordinates to Apple (its place-name service and MapKit). Worship tracking, qada
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
    for (const m of SHOWCASE_MORE.filter((x) => x.all)) {
      if (!fs.existsSync(path.join(DOCS, moreUrl(lang, m.img)))) errors.push(`${lang}: missing ${moreUrl(lang, m.img)}`);
    }
    for (const device of Object.keys(DEVICES)) {
      const imgs = [...DEVICES[device].shots.map((s) => s.img), ...(device === "mac" ? ["menu-bar"] : [])];
      for (const img of imgs) {
        if (!fs.existsSync(path.join(DOCS, deviceUrl(lang, device, img)))) errors.push(`${lang}: missing ${deviceUrl(lang, device, img)}`);
      }
    }
    for (const f of [`sky-${L.video}.mp4`, `sky-${L.video}-poster.webp`]) {
      if (!fs.existsSync(path.join(DOCS, "assets", "video", f))) errors.push(`${lang}: missing /assets/video/${f}`);
    }
    if (!fs.existsSync(path.join(DOCS, ogUrl(lang)))) errors.push(`${lang}: missing ${ogUrl(lang)} — run node tools/make-og.js`);
    if (!SCRIPTS[L.script]) errors.push(`${lang}: unknown script "${L.script}"`);
  }
  for (const [lang, mod] of Object.entries(LEGAL_I18N)) {
    if (!mod) errors.push(`legal/i18n/${lang}.js is missing`);
    else if (!mod.notice) errors.push(`legal/i18n/${lang}.js has no "notice"`);
  }
  for (const key of Object.keys(LEGAL)) {
    const copy = LEGAL_COPY[key];
    if (!copy) errors.push(`No legal copy module for "${key}"`);
    for (const lang of LEGAL_LANGS) {
      const doc = legalCopy(key, lang);
      const src = LEGAL_ORIGINAL_LANGS.includes(lang) ? `legal/${key}.js` : `legal/i18n/${lang}.js`;
      if (!doc) errors.push(`${src} is missing "${key}" for "${lang}"`);
      else if (doc.sections.length !== copy.tr.sections.length) {
        errors.push(`${src}: ${key} has ${doc.sections.length} sections, tr has ${copy.tr.sections.length}`);
      }
      const meta = legalMeta(key, lang);
      if (!meta || !meta.title || !meta.description) errors.push(`${src}: ${key} has no <head> title/description`);
    }
  }
  for (const a of PRESS.assets) {
    if (!fs.existsSync(path.join(DOCS, a.href.replace(/^\//, "")))) errors.push(`press: missing ${a.href}`);
  }
  for (const lang of PRESS_LANGS) {
    const doc = PRESS[lang];
    if (!doc || !doc.meta || !doc.meta.title) errors.push(`press.js has no "${lang}" metadata`);
    else if (doc.facts.length !== PRESS.tr.facts.length) errors.push(`press.js: ${lang} has ${doc.facts.length} facts, tr has ${PRESS.tr.facts.length}`);
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

  for (const lang of PRESS_LANGS) write(path.join(LANGS[lang].dir, "press.html"), pressPage(lang));

  write("sitemap.xml", sitemap());
  write("robots.txt", robots());
  write("llms.txt", llms());
  console.log(
    `Done — ${ALL.length} languages, ${FEATURES.tr.length} features, ${FAQ.tr.length} FAQ entries, ` +
      `${Object.keys(LEGAL).length} legal documents.`
  );
}

main();
