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
| `script.js` | All interactivity, i18n strings (COPY, REVIEWS, FAQ objects), prayer time calculations, and UI rendering |
| `language-detection.js` | Auto-detects browser language on first visit, redirects legacy URLs (en.html → index.html) |
| `privacy.html` | Privacy policy page |
| `terms.html` | Terms of service page |
| `assets/` | Favicons, app icons, localized screenshots (`assets/screenshots/en/`, `assets/screenshots/tr/`) |

### Localization System

Single-page approach — one `index.html` with dynamic content switching (no separate per-language HTML files).

**How it works:**
1. `language-detection.js` runs first (inline), detects browser language or reads `localStorage.preferredLanguage`
2. `script.js` contains all i18n strings in the `COPY` object (keyed by `en`/`tr`), plus `REVIEWS`, `FAQ`, and other data objects
3. `script.js` renders content dynamically using `data-i18n` attributes and DOM manipulation

**Adding/editing text:** Update both `tr` and `en` entries in the `COPY` object in `script.js`. For reviews/FAQ, update the `REVIEWS`/`FAQ` objects.

### CSS Theming

All colors, spacing, typography, and effects are defined as CSS custom properties (variables) at the top of `styles.css`. The design uses an Apple-inspired glassmorphism aesthetic with `backdrop-filter` and gradient overlays.

### JavaScript Patterns

`script.js` uses a `CONFIG` object for tuning thresholds and a `state` object for runtime state. Key patterns:
- `IntersectionObserver` for scroll-reveal animations with staggered delays
- `throttle()` utility for scroll event handlers
- Event delegation on the FAQ container for dynamically rendered items (from localization)

## Deployment

GitHub Pages via GitHub Actions. Push to `main` branch triggers automatic deployment. The served root is `docs/`.
