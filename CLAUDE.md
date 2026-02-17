# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static landing page for VakitApp (iOS prayer times app), deployed to GitHub Pages at https://vakit.hakancelik.dev. Pure HTML/CSS/JS with no build step or framework dependencies.

## Commands

```bash
# Local development - serve from docs/
cd docs && python3 -m http.server 8000
# or
npm start
```

No build, test, or lint steps exist — this is a static site.

## Architecture

All served files live in `docs/`:

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `styles.css` | All styles (CSS variables for theming, glassmorphism, responsive) |
| `script.js` | Interactivity (scroll animations, mobile menu, FAQ accordion, typing effect) |
| `translations.js` | All UI strings for both languages (tr/en) as a `translations` object |
| `localization.js` | `LocalizationManager` — reads `translations.js`, applies strings via `data-i18n` attributes |
| `language-detection.js` | Auto-detects browser language on first visit, redirects legacy URLs (en.html → index.html) |
| `privacy.html` | Privacy policy page |
| `terms.html` | Terms of service page |
| `assets/` | Favicons, app icons, localized screenshots (`assets/screenshots/en/`, `assets/screenshots/tr/`) |

### Localization System

Single-page approach — one `index.html` with dynamic content switching (no separate per-language HTML files).

**How it works:**
1. `language-detection.js` runs first (inline), detects browser language or reads `localStorage.preferredLanguage`
2. `translations.js` defines all strings in a `translations` object keyed by locale (`tr`, `en`)
3. `LocalizationManager` in `localization.js` applies translations to DOM elements using `data-i18n` attributes

**Key data attributes on HTML elements:**
- `data-i18n="nav.features"` — sets text content from dot-notation key path
- `data-i18n-attr="placeholder"` — sets a specific attribute instead of text content
- `data-i18n-list="faq.items"` — renders array data (used for FAQ accordion)
- `data-i18n-img="screenshot1"` — swaps image `src` based on `screenshotPaths` in translations

**Adding/editing text:** Update both `tr` and `en` objects in `translations.js`. No regeneration step needed.

### CSS Theming

All colors, spacing, typography, and effects are defined as CSS custom properties (variables) at the top of `styles.css`. The design uses an Apple-inspired glassmorphism aesthetic with `backdrop-filter` and gradient overlays.

### JavaScript Patterns

`script.js` uses a `CONFIG` object for tuning thresholds and a `state` object for runtime state. Key patterns:
- `IntersectionObserver` for scroll-reveal animations with staggered delays
- `throttle()` utility for scroll event handlers
- Event delegation on the FAQ container for dynamically rendered items (from localization)

## Deployment

GitHub Pages via GitHub Actions. Push to `main` branch triggers automatic deployment. The served root is `docs/`.
