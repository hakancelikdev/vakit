# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Landing page for VakitApp (iOS/macOS prayer times app), deployed to GitHub Pages at https://vakit.hakancelik.dev. Plain HTML/CSS/JS with one small Node generator — no framework, no bundler, no dependencies. **One page per app language — 25 of them** (the same set as `VakitApp-Swift/vakit/Infrastructure/Localization/*.lproj`).

## Commands

```bash
npm run build                    # regenerate the pages from content.js + locales/  (required after any copy change)
npm run dev                      # build, then serve docs/ at http://localhost:8000
npm test                         # build + checks on the generated pages (links, hreflang, assets)
node tools/check-locale.js de    # check one translation against English, even before the others exist
./tools/import-media.sh          # re-import screenshots + preview video from ../app-store-toolkit
node tools/import-manifesto.js   # re-import the Vakit Manifesto (all 25 languages) from the app repo → manifesto.js
node tools/make-og.js            # regenerate link-preview cards (docs/assets/og/<lang>.jpg) — needs Google Chrome
```

**Link-preview cards** (`og:image`, 1200×630) are rendered per language from the page's own hero copy and that language's prayer-screen screenshot. They still show the older eyebrow and serif type (last rendered before the 2026-09-26 eyebrow change) — re-run on a Mac to bring them in line. They are the one place web fonts are still used (Instrument Serif + Noto, `tools/fonts.js`) — the pages themselves use the system font. Re-run `make-og.js` after changing `h1a/h1b/h1c`/`eyebrow` or re-importing screenshots; `build.js` fails if a card is missing.

CI re-runs the build on a clean checkout and fails the deploy if the committed `docs/` doesn't match, so always commit the regenerated files alongside the `content.js` / `locales/` change.

## Architecture

Page copy lives in **`content.js`** (Turkish + English, page metadata, language table) and **`locales/<lang>.js`** (the other 23 languages, same shape — see `locales/README.md`). Long-form legal prose is in **`legal/*.js`**. **`build.js`** renders them into static files under `docs/`:

| Generated file | Contents |
|---|---|
| `docs/index.html` | Turkish landing page — canonical, served at `/` |
| `docs/<lang>/index.html` | every other language, served at `/<lang>/` (`LANGS[*].path`) |
| `docs/{privacy,terms,ads-policy}.html` | Turkish legal pages |
| `docs/<lang>/{privacy,terms,ads-policy}.html` | the same three documents in every other language |
| `docs/manifesto.html`, `docs/<lang>/manifesto.html` | the Vakit Manifesto in every language |
| `docs/sitemap.xml` | every page, cross-linked with hreflang |
| `docs/robots.txt` | search + AI crawler rules |
| `docs/llms.txt` | plain-text app summary for AI assistants |

**Never hand-edit those files** — the next build overwrites them, and CI fails the deploy if they don't match their source.

Hand-maintained files in `docs/`:

| File | Purpose |
|---|---|
| `styles.css` | All styles (CSS variables for theming, dark mode, responsive, RTL + non-Latin script rules) |
| `script.js` | Interactivity only: live prayer clock, hero preview video, the galleries' arrow buttons (iPhone, iPad, Mac, Watch), "show all" features, FAQ accordion, theme, language menu, mobile menu, phone-only download dock |
| `language-detection.js` | Sends `/` to a language the visitor explicitly chose before (menu/banner) and forwards old `?lang=` links. **Never redirects by browser language** — Googlebot renders JS with an English browser, and doing so made Google treat the Turkish home page as a copy of `/en/` (2026-09-10). First-time visitors get a suggestion banner instead (`script.js` → `suggestLanguage`). `npm test` guards this. |
| `en.html`, `privacy-en.html`, `terms-en.html` | Static redirects for old URLs Google still had indexed |
| `02e8a41e….txt` | IndexNow ownership key — **don't delete**. `tools/indexnow.js` (run by CI after each deploy) pings Bing/Yandex with the sitemap URLs; Bing feeds ChatGPT Search and Copilot. |
| `404.html` | Standalone page, not generated. Its App Store link is written by hand, so it must carry `pt` and `ct` like `storeLink()` (`npm test` checks) |

The live clock (the band under the hero) fetches times from the public Aladhan API. It keeps the last good answer per city in `localStorage` and hides itself if it has no times at all — never a row of `00:00:00`. **The app's own Diyanet calculator (`VakitCore/DiyanetPrayerTimeCalculator`) is never ported to the site** — client-side JS is public, and that calculator is the app's edge (owner's decision, 2026-09-10). City prayer-time pages are shelved for the same reason.

The site loads **no analytics or tracking scripts** (Google Analytics was removed 2026-09-10; `npm test` fails if it comes back). App Store campaign tokens (`storeLink`) are the only acquisition measurement.
| `assets/` | Favicons, app icons, showcase screenshots (`assets/screenshots/<lang>/<name>.webp`), preview video (`assets/video/`) |

### The Vakit Manifesto

The app's ten principles ("İbadet uygulaması nasıl olmalı?") have their own page in every language, and the hero headline links to it — as the same sentence does in the app's Support Center. **The text is the app's own, never retyped:** `manifesto.js` is generated by `tools/import-manifesto.js` from the app repo (`VakitApp/app` → `ManifestoView.swift` + `Localizable.strings`, all 25 languages). When the manifesto changes in the app, re-import, rebuild and commit. `{languageCount}` (the app's `%d`) is filled in by `build.js`.

### Why content is generated, not rendered client-side

Crawlers that don't execute JavaScript — Googlebot's first pass, GPTBot, ClaudeBot, PerplexityBot — previously saw empty `<div>`s where the features, comparison table, reviews and FAQ should have been. Everything is baked into the HTML now.

Two other things follow from the generator, and both are the point:

- The on-page FAQ and the `FAQPage` structured data come from the **same array**, so they can't drift apart.
- Each language is a real URL with its own `canonical` and a full hreflang set (`x-default` → English). There is no client-side language switching — the language menu is plain links.

### Languages

`LANGS` in `content.js` is the single list: URL, direction (`rtl`), writing system (`script` → typography rules in `styles.css`; `tools/fonts.js` `SCRIPTS` for the link-preview cards), screenshot and video source, the clock's home city and the currency next to the "0" price. Adding a language = a `LANGS` entry + `locales/<lang>.js` + its code in `docs/language-detection.js` (`npm test` checks the last one).

- **Every language has its own legal pages** (owner's decision, 2026-09-11 — the App Store listing links each language to its own privacy policy and terms). Turkish and English are the originals (`legal/*.js`); the other 23 are translations of the English text (`legal/i18n/<lang>.js`, all three documents + `<head>` metadata + a `notice`). Each translated page says the English version applies if they differ. **Changing a legal text means changing all 25** — `build.js` fails if a translation misses a document or has a different section count.
- **iPad, Mac and Apple Watch** (`DEVICES` in `content.js`, the section under the showcase): one gallery per device, the same component as the iPhone showcase (2026-09-25; they used to be tabs over a single frame). iPad captures follow the iPhone rule; the Mac and the Watch were captured in Turkish and English only, so every other page shows the English ones. Screen titles and descriptions reuse `FEATURES`/`SHOWCASE` copy, so the section needs no translations of its own. The Mac's menu bar extra sits over the first Mac window.
- **The showcase is a gallery** (2026-09-25): every iPhone screen — `SHOWCASE`, then `SHOWCASE_MORE` — in its own phone, side by side, each with its title and description; it scrolls sideways (swipe, trackpad, arrow keys, or the two round buttons). **More iPhone screens** (`SHOWCASE_MORE`) are labelled with `FEATURES` copy. `all: true` screens exist in every captured language; the rest only in tr/en, and other pages leave them out rather than mix English into their phone.
- **The hero shows the app**: a phone playing the preview video (the prayer screen's sky), next to the headline and the App Store button, which stays above the fold on a 1280×720 screen. The video waits for the page's `load` event and doesn't start by itself under reduced motion or data saving; a tap plays or pauses it (2026-09-24).
- **Download dock** (phones only): a fixed App Store button while neither the hero's nor the closing section's button is on screen. Never in iPhone Safari — the `apple-itunes-app` meta already shows Apple's Smart App Banner there, which also opens the app when it's installed.
- **The page never swaps a screen on its own.** Scroll-driven switching swapped the preview video out on phones before anyone saw it (2026-09-22); the video now plays in the hero, and every iPhone, iPad, Mac and Watch screen is shown at once in its gallery. `tools/import-media.sh` `KEEP` lists toolkit captures known to be broken, so a re-import doesn't bring them back.
- **Screenshots are the raw per-language app captures** from the toolkit, framed by the page's own phone mockup. A language without its own capture uses English (`shots: "en"`) — the App Store listing's rule. The preview video: Turkish has its own recording, everyone else gets English.
- **Content translations are Turkish and English only** — the app's interface is in 25 languages, its Quran/hadith translations are not. No page may imply otherwise (`locales/README.md`).

### Editing content

1. Landing page → `content.js` (`COPY`, `FEATURES`, `SHOWCASE`, `COMPARE`, `REVIEWS`, `FAQ`, `META`, `PRAYERS`, `CITIES`) **and the same entry in every `locales/*.js`**.
   Legal text → `legal/privacy.js`, `legal/terms.js`, `legal/ads-policy.js` (tr + en; `<head>` metadata → `LEGAL` in `content.js`) **and the same change in every `legal/i18n/*.js`**.
2. `build.js` throws if any language is missing a key or a list has a different length than English — a feature added to Turkish/English cannot silently skip a language.
3. Bump `SITE.updated` (drives sitemap `lastmod`).
4. Run `npm run build` and commit the regenerated files.

`{featureCount}`, `{ratingCount}` and `{screenCount}` (showcase tabs on that page) in copy strings are substituted at build time, so counts stated in prose can't fall out of sync with the lists.

**Features are shown in groups** (`FEATURE_GROUPS` in `content.js`, titles `fg-1`…`fg-5`), each showing its first `FEATURE_PREVIEW` entries until "show all" is tapped; every card is in the HTML either way. A new feature goes into `FEATURES` **and** one group — `build.js` fails if a feature is in no group or two.

**Only what is true today — no future (owner's decision, 2026-09-10).** No plans, no "coming", no "we can't promise forever", no future products or promised procedures, on any page including the legal ones. The ad policy once announced a future banner tier, a premium purchase, an in-app report button and quarterly reports; none existed.

**Every claim is checked against the app's code.** The 2026-09-10 audit found ~40 wrong or misleading claims (Siri, holy-day count, bookmark types, worship rings, "coordinates never leave your phone" while Apple geocoding and MapKit receive them, "worship records never reach our servers" while their counts do). When copy names a number, a platform, a privacy boundary or a capability, find the code that makes it true first.

**The feature list is a factual claim.** Every entry in `FEATURES` must correspond to something that ships in the current app. When a feature is removed from the app, remove it here in the same release — in every language. The site once advertised "Zikir Halkası" for months after it had been deleted from the app.

### Design language

Apple's product pages, applied to this app (redesign 2026-09-25):

- **One typeface — the system font** (SF Pro on Apple devices, Segoe/Roboto/Noto elsewhere). No web fonts: nothing is fetched from Google (the site's privacy promise), and the system covers all 25 scripts. `npm test` fails if a page loads Google Fonts again.
- **Hierarchy from size and weight.** Section titles are two-tone: `<span>` in ink, `<em>` in secondary grey on its own line. The hero's `<em>` carries the brand gradient. No italics, no uppercase labels, no running numbers.
- **Colour means "tap here" or "this is the app".** `--on-accent-*` for buttons and selected chips, `--accent-ink` for links and section eyebrows.
- **Surfaces, not rules**: rounded tiles (`--bg-2`, `--radius-tile`) instead of hairline grids. The trust section is the one dark section.
- **Touch targets** of at least 34–48 px; every phone mockup has a real bezel.

### CSS theming

All colors, spacing, typography and effects are CSS custom properties at the top of `styles.css`. Text on a filled accent (selected chips and tabs) uses `--on-accent-bg`/`--on-accent-fg`: `--accent` itself is too light for white text (3.3:1). Small `--ink-3` text needs 4.5:1, so sections on a darker surface (`.clock`, dark `.t-card`) redefine `--ink-3` locally. Dark mode is driven by `data-theme` on `<html>`. `<html>` also carries `dir="rtl"` for Arabic-script pages and a `script-<name>` class; non-Latin scripts drop letter-spacing (it breaks joined letters) and get taller line-heights; Urdu prefers Nastaliq where the device has it. Use logical properties (`inline-start`, `text-align: start`) for anything directional.

## Deployment

GitHub Pages via GitHub Actions. Push to `main` triggers the workflow, which first regenerates `docs/` and fails if the committed output is stale, then publishes `docs/` as the site root.

## Keeping the site in step with the app

The site describes `VakitApp-Swift`. After every App Store release, check `VakitApp-Swift/CHANGELOG.md` and update `content.js` + `locales/`:

- new user-facing features → `FEATURES` and a `FEATURE_GROUPS` group, and `FAQ` if they raise an obvious question
- removed features → delete from `FEATURES`
- `SITE.appVersion`, `SITE.minOS` (per platform: iOS · watchOS · macOS deployment targets), `SITE.operatingSystem` → match the release
- platform changes (e.g. Mac support) → `META` descriptions and the `fin-p` copy
- new App Store screenshots or preview video → `./tools/import-media.sh`, then rebuild
