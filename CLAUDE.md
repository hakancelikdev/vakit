# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Landing page for VakitApp (iOS/macOS prayer times app), deployed to GitHub Pages at https://vakit.hakancelik.dev. Plain HTML/CSS/JS with one small Node generator — no framework, no bundler, no dependencies.

## Commands

```bash
npm run build     # regenerate the pages from content.js  (required after any copy change)
npm run dev       # build, then serve docs/ at http://localhost:8000
```

CI re-runs the build on a clean checkout and fails the deploy if the committed `docs/` doesn't match, so always commit the regenerated files alongside the `content.js` change.

## Architecture

Page copy lives in **`content.js`** (landing page + page metadata) and **`legal/*.js`** (long-form legal prose, both languages). **`build.js`** renders them into static files under `docs/`:

| Generated file | Contents |
|---|---|
| `docs/index.html` | Turkish landing page — canonical, served at `/` |
| `docs/en/index.html` | English landing page — served at `/en/` |
| `docs/{privacy,terms,ads-policy}.html` | Turkish legal pages |
| `docs/en/{privacy,terms,ads-policy}.html` | English legal pages |
| `docs/sitemap.xml` | every page in both languages, cross-linked with hreflang |
| `docs/robots.txt` | search + AI crawler rules |
| `docs/llms.txt` | plain-text app summary for AI assistants |

**Never hand-edit those files** — the next build overwrites them, and CI fails the deploy if they don't match their source.

Hand-maintained files in `docs/`:

| File | Purpose |
|---|---|
| `styles.css` | All styles (CSS variables for theming, dark mode, responsive) |
| `script.js` | Interactivity only: live prayer clock, showcase switching, FAQ accordion, theme, mobile menu |
| `language-detection.js` | Legacy URL redirects; sends first-time English visitors from `/` to `/en/` |
| `presentation.html`, `404.html` | Standalone pages, not generated |
| `assets/` | Favicons, app icons, localized screenshots (`assets/screenshots/{en,tr}/1-9.webp`) |

### Why content is generated, not rendered client-side

Crawlers that don't execute JavaScript — Googlebot's first pass, GPTBot, ClaudeBot, PerplexityBot — previously saw empty `<div>`s where the features, comparison table, reviews and FAQ should have been. Everything is baked into the HTML now.

Two other things follow from the generator, and both are the point:

- The on-page FAQ and the `FAQPage` structured data come from the **same array**, so they can't drift apart.
- Each language is a real URL with its own `canonical`, so English can be indexed on its own. There is no client-side language switching — the EN/TR control is a plain link.

### Editing content

1. Landing page → `content.js` (`COPY`, `FEATURES`, `SHOWCASE`, `COMPARE`, `REVIEWS`, `FAQ`, `META`).
   Legal text → `legal/privacy.js`, `legal/terms.js`, `legal/ads-policy.js`; their `<head>` metadata → `LEGAL` in `content.js`.
2. Keep `tr` and `en` arrays the same length; `build.js` throws if they diverge.
3. Bump `SITE.updated` (drives sitemap `lastmod`).
4. Run `npm run build` and commit the regenerated files.

`{featureCount}` and `{ratingCount}` in copy strings are substituted at build time, so counts stated in prose can't fall out of sync with the lists.

**The feature list is a factual claim.** Every entry in `FEATURES` must correspond to something that ships in the current app. When a feature is removed from the app, remove it here in the same release — the site once advertised "Zikir Halkası" for months after it had been deleted from the app.

### CSS theming

All colors, spacing, typography and effects are CSS custom properties at the top of `styles.css`. Dark mode is driven by `data-theme` on `<html>`.

## Deployment

GitHub Pages via GitHub Actions. Push to `main` triggers the workflow, which first regenerates `docs/` and fails if the committed output is stale, then publishes `docs/` as the site root.

## Keeping the site in step with the app

The site describes `VakitApp-Swift`. After every App Store release, check `VakitApp-Swift/CHANGELOG.md` and update `content.js`:

- new user-facing features → `FEATURES`, and `FAQ` if they raise an obvious question
- removed features → delete from `FEATURES`
- `SITE.appVersion`, `SITE.minOS`, `SITE.operatingSystem` → match the release
- platform changes (e.g. Mac support) → `META` descriptions and the `fin-p` copy
