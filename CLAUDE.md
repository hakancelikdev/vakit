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
node tools/make-og.js            # regenerate link-preview cards (docs/assets/og/<lang>.jpg) — needs Google Chrome
```

**Link-preview cards** (`og:image`, 1200×630) are rendered per language from the page's own hero copy and that language's prayer-screen screenshot. Re-run `make-og.js` after changing `h1a/h1b/h1c`/`eyebrow` or re-importing screenshots; `build.js` fails if a card is missing.

CI re-runs the build on a clean checkout and fails the deploy if the committed `docs/` doesn't match, so always commit the regenerated files alongside the `content.js` / `locales/` change.

## Architecture

Page copy lives in **`content.js`** (Turkish + English, page metadata, language table) and **`locales/<lang>.js`** (the other 23 languages, same shape — see `locales/README.md`). Long-form legal prose is in **`legal/*.js`**. **`build.js`** renders them into static files under `docs/`:

| Generated file | Contents |
|---|---|
| `docs/index.html` | Turkish landing page — canonical, served at `/` |
| `docs/<lang>/index.html` | every other language, served at `/<lang>/` (`LANGS[*].path`) |
| `docs/{privacy,terms,ads-policy}.html` | Turkish legal pages |
| `docs/<lang>/{privacy,terms,ads-policy}.html` | the same three documents in every other language |
| `docs/sitemap.xml` | every page, cross-linked with hreflang |
| `docs/robots.txt` | search + AI crawler rules |
| `docs/llms.txt` | plain-text app summary for AI assistants |

**Never hand-edit those files** — the next build overwrites them, and CI fails the deploy if they don't match their source.

Hand-maintained files in `docs/`:

| File | Purpose |
|---|---|
| `styles.css` | All styles (CSS variables for theming, dark mode, responsive, RTL + non-Latin script rules) |
| `script.js` | Interactivity only: live prayer clock, showcase switching + video, iPad/Mac screen tabs, FAQ accordion, theme, language menu, mobile menu |
| `language-detection.js` | Sends `/` to a language the visitor explicitly chose before (menu/banner) and forwards old `?lang=` links. **Never redirects by browser language** — Googlebot renders JS with an English browser, and doing so made Google treat the Turkish home page as a copy of `/en/` (2026-09-10). First-time visitors get a suggestion banner instead (`script.js` → `suggestLanguage`). `npm test` guards this. |
| `en.html`, `privacy-en.html`, `terms-en.html` | Static redirects for old URLs Google still had indexed |
| `02e8a41e….txt` | IndexNow ownership key — **don't delete**. `tools/indexnow.js` (run by CI after each deploy) pings Bing/Yandex with the sitemap URLs; Bing feeds ChatGPT Search and Copilot. |
| `404.html` | Standalone page, not generated |

The hero's live clock fetches times from the public Aladhan API. **The app's own Diyanet calculator (`VakitCore/DiyanetPrayerTimeCalculator`) is never ported to the site** — client-side JS is public, and that calculator is the app's edge (owner's decision, 2026-09-10). City prayer-time pages are shelved for the same reason.

The site loads **no analytics or tracking scripts** (Google Analytics was removed 2026-09-10; `npm test` fails if it comes back). App Store campaign tokens (`storeLink`) are the only acquisition measurement.
| `assets/` | Favicons, app icons, showcase screenshots (`assets/screenshots/<lang>/<name>.webp`), preview video (`assets/video/`) |

### Why content is generated, not rendered client-side

Crawlers that don't execute JavaScript — Googlebot's first pass, GPTBot, ClaudeBot, PerplexityBot — previously saw empty `<div>`s where the features, comparison table, reviews and FAQ should have been. Everything is baked into the HTML now.

Two other things follow from the generator, and both are the point:

- The on-page FAQ and the `FAQPage` structured data come from the **same array**, so they can't drift apart.
- Each language is a real URL with its own `canonical` and a full hreflang set (`x-default` → English). There is no client-side language switching — the language menu is plain links.

### Languages

`LANGS` in `content.js` is the single list: URL, direction (`rtl`), writing system (`script` → web fonts in `build.js` `SCRIPTS`), screenshot and video source, the clock's home city and the currency next to the "0" price. Adding a language = a `LANGS` entry + `locales/<lang>.js` + its code in `docs/language-detection.js` (`npm test` checks the last one).

- **Every language has its own legal pages** (owner's decision, 2026-09-11 — the App Store listing links each language to its own privacy policy and terms). Turkish and English are the originals (`legal/*.js`); the other 23 are translations of the English text (`legal/i18n/<lang>.js`, all three documents + `<head>` metadata + a `notice`). Each translated page says the English version applies if they differ. **Changing a legal text means changing all 25** — `build.js` fails if a translation misses a document or has a different section count.
- **iPad and Mac** (`DEVICES` in `content.js`, the section under the showcase): iPad captures follow the iPhone rule; the Mac was captured in Turkish and English only, so every other page shows the English windows. Tab labels and captions reuse `FEATURES`/`SHOWCASE` copy, so the section needs no translations of its own.
- **Screenshots are the raw per-language app captures** from the toolkit, framed by the page's own phone mockup. A language without its own capture uses English (`shots: "en"`) — the App Store listing's rule. The preview video: Turkish has its own recording, everyone else gets English.
- **Content translations are Turkish and English only** — the app's interface is in 25 languages, its Quran/hadith translations are not. No page may imply otherwise (`locales/README.md`).

### Editing content

1. Landing page → `content.js` (`COPY`, `FEATURES`, `SHOWCASE`, `COMPARE`, `REVIEWS`, `FAQ`, `META`, `PRAYERS`, `CITIES`) **and the same entry in every `locales/*.js`**.
   Legal text → `legal/privacy.js`, `legal/terms.js`, `legal/ads-policy.js` (tr + en; `<head>` metadata → `LEGAL` in `content.js`) **and the same change in every `legal/i18n/*.js`**.
2. `build.js` throws if any language is missing a key or a list has a different length than English — a feature added to Turkish/English cannot silently skip a language.
3. Bump `SITE.updated` (drives sitemap `lastmod`).
4. Run `npm run build` and commit the regenerated files.

`{featureCount}` and `{ratingCount}` in copy strings are substituted at build time, so counts stated in prose can't fall out of sync with the lists.

**Only what is true today — no future (owner's decision, 2026-09-10).** No plans, no "coming", no "we can't promise forever", no future products or promised procedures, on any page including the legal ones. The ad policy once announced a future banner tier, a premium purchase, an in-app report button and quarterly reports; none existed.

**Every claim is checked against the app's code.** The 2026-09-10 audit found ~40 wrong or misleading claims (Siri, holy-day count, bookmark types, worship rings, "coordinates never leave your phone" while Apple geocoding and MapKit receive them, "worship records never reach our servers" while their counts do). When copy names a number, a platform, a privacy boundary or a capability, find the code that makes it true first.

**The feature list is a factual claim.** Every entry in `FEATURES` must correspond to something that ships in the current app. When a feature is removed from the app, remove it here in the same release — in every language. The site once advertised "Zikir Halkası" for months after it had been deleted from the app.

### CSS theming

All colors, spacing, typography and effects are CSS custom properties at the top of `styles.css`. Dark mode is driven by `data-theme` on `<html>`. `<html>` also carries `dir="rtl"` for Arabic-script pages and a `script-<name>` class; non-Latin scripts drop italics and letter-spacing (they break joined letters) and get taller line-heights. Use logical properties (`inline-start`, `text-align: start`) for anything directional.

## Deployment

GitHub Pages via GitHub Actions. Push to `main` triggers the workflow, which first regenerates `docs/` and fails if the committed output is stale, then publishes `docs/` as the site root.

## Keeping the site in step with the app

The site describes `VakitApp-Swift`. After every App Store release, check `VakitApp-Swift/CHANGELOG.md` and update `content.js` + `locales/`:

- new user-facing features → `FEATURES`, and `FAQ` if they raise an obvious question
- removed features → delete from `FEATURES`
- `SITE.appVersion`, `SITE.minOS` (per platform: iOS · watchOS · macOS deployment targets), `SITE.operatingSystem` → match the release
- platform changes (e.g. Mac support) → `META` descriptions and the `fin-p` copy
- new App Store screenshots or preview video → `./tools/import-media.sh`, then rebuild
