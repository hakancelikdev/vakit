# locales/

One module per language the app ships in, except Turkish and English — those two
live in `../content.js` and are the source every file here is translated from.
`content.js` requires `locales/<lang>.js` for every key of `LANGS` other than
`tr`/`en`, so adding a language means adding it to `LANGS` **and** creating its file.

## Shape

```js
module.exports = {
  META: { title, description, keywords },   // <head>; keywords comma-separated
  COPY: { ... },                             // exactly the keys of COPY.en
  PRAYERS: { Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha },
  CITIES: { istanbul, mecca, ... },          // exactly the keys of CITIES.en
  FEATURES: [{ n, d }, ...],                 // same length and order as FEATURES.en
  SHOWCASE: [{ t, d }, ...],                 // 10 entries, SHOWCASE.en order (no img)
  COMPARE: [{ f, o, v }, ...],               // same length and order as COMPARE.en
  REVIEWS: [{ t, b }, ...],                  // 12 entries, REVIEWS.en order (no reviewer name)
  FAQ: [{ q, a }, ...],                      // same length and order as FAQ.en
};
```

`build.js` fails the build if a language is missing a copy key or a list has the
wrong length, so a feature added to Turkish/English cannot silently skip a language.

## Rules

- **Keep `{featureCount}`, `{ratingCount}` and `{screenCount}`** exactly as written — they are replaced at build time.
- **Prayer names come from the app**, not from a dictionary:
  `PRAYERS.Fajr` = the app's `prayer_imsak` string (the clock's first time is the start
  of dawn), then `prayer_sunrise`, `prayer_dhuhr`, `prayer_asr`, `prayer_maghrib`,
  `prayer_isha` from `VakitApp-Swift/vakit/Infrastructure/Localization/<lang>.lproj/Localizable.strings`.
  The same file is the reference for every other app term (qada, dhikr, tasbihat, khatm…).
- **Content translations are Turkish and English only.** The interface is in 25 languages,
  but the Quran translation, word meanings, transliteration and hadith translations are
  not. Never imply a translation in the reader's language exists. (Arabic interface: an
  Arabic tafsir opens for part of the Quran. Friday sermon: Turkish, English, some weeks Arabic.)
- **"Free today", never "free forever".** The app is free now; the copy does not promise the future.
- **Vakit accompanies worship, it does not own it** — no "prayed with Vakit" style credit-taking.
- **Plain words.** No technical jargon in user-facing copy.
- **Apple terms** (Lock Screen, Home Screen, Control Center, StandBy, Live Activities,
  Dynamic Island, widget) use Apple's own localized names in that language's iOS.
  `Vakit`, `App Store`, `iPhone`, `iPad`, `Apple Watch`, `Mac`, `iCloud`, `Siri`
  stay as they are. `Diyanet` is written the way the app's strings write it (Диянет, Diyanət…).
- **Reviews** are real Turkish App Store reviews: translate faithfully, keep the voice, and
  set `COPY["r-note"]` to a sentence saying they are translated from the Turkish App Store.
- `SHOWCASE` titles/descriptions describe the screenshot they sit next to. For the
  languages that have one, the App Store captions in
  `app-store-toolkit/generator/src/domain/apps/vakit/headlines.ts` are already reviewed
  translations of the same screens — reuse their wording.
