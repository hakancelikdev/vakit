#!/usr/bin/env node
/**
 * Imports the Android app's privacy policy into ../legal/android-privacy.js.
 *
 * Google Play needs a privacy-policy URL that describes the Android app; the
 * iOS policy (legal/privacy.js) talks about iCloud, MapKit and StoreKit, which
 * the Android app does not use. The Android policy is the app's own in-app text
 * (VakitApp-Android → interface_/feature/settings/PrivacyPolicyScreen.kt, strings
 * `privacy_policy_*` in app/src/main/res/values-<lang>/strings.xml), in all 25 app
 * languages. Like the manifesto it is imported, never retyped: run this after the
 * policy changes in the app, then `npm run build` and commit
 * legal/android-privacy.js with the regenerated pages.
 *
 * Usage: node tools/import-android-privacy.js [path/to/VakitApp-Android]   (default: ../VakitApp-Android)
 */

const fs = require("fs");
const path = require("path");
const C = require("../content.js");

const arg = process.argv[2] || "../VakitApp-Android";
const root = path.resolve(__dirname, "..", arg);
const res = path.join(root, "app", "src", "main", "res");
if (!fs.existsSync(path.join(res, "values", "strings.xml"))) {
  console.error(`Android repository not found at ${root}. Pass its path as the first argument.`);
  process.exit(1);
}

// Android resource folders that differ from the site's language code.
const RES_DIR = { en: "values", id: "values-in" };

/**
 * <string> values as Android resolves them: XML entities, then whitespace
 * collapsing (outside double quotes), then backslash escapes.
 */
function parseStrings(file) {
  const out = {};
  const xml = fs.readFileSync(file, "utf8");
  for (const m of xml.matchAll(/<string\s+name="(privacy_policy_[^"]+)"[^>]*>([\s\S]*?)<\/string>/g)) {
    if (/<(?!\/)/.test(m[2])) throw new Error(`${file}: "${m[1]}" contains markup — teach the importer about it`);
    let v = m[2]
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
      .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
      .replace(/&amp;/g, "&");
    // Unescaped double quotes delimit verbatim runs; everywhere else whitespace collapses.
    let s = "";
    let quoted = false;
    for (let i = 0; i < v.length; i++) {
      const c = v[i];
      if (c === "\\" && i + 1 < v.length) {
        const n = v[++i];
        if (n === "u") {
          s += String.fromCharCode(parseInt(v.slice(i + 1, i + 5), 16));
          i += 4;
        } else s += n === "n" ? "\n" : n === "t" ? "\t" : n;
      } else if (c === '"') {
        quoted = !quoted;
      } else if (!quoted && /\s/.test(c)) {
        if (!/ $/.test(s)) s += " ";
      } else s += c;
    }
    out[m[1]] = s.replace(/^ +| +$/g, "");
  }
  return out;
}

/** The leading sentences of the description, about one search-snippet long — for <meta name="description">. */
function snippet(text, lang) {
  const seg = new Intl.Segmenter(C.LANGS[lang].htmlLang, { granularity: "sentence" });
  let out = "";
  for (const { segment } of seg.segment(text)) {
    out += segment;
    if (out.trim().length >= (["ja", "zh"].includes(lang) ? 50 : 120)) break;
  }
  return out.trim();
}

// Order and grouping follow PrivacyPolicyScreen.kt: header, "Information We Collect"
// (six data items + a closing paragraph), "How We Use Your Data" (+ its footnote),
// then eleven plain sections.
const ITEMS = ["location", "heading", "motion", "notifications", "settings", "analytics"];
const PLAIN = ["backup", "third_party", "advertising", "donations", "sharing", "retention", "security", "choices", "children", "changes", "contact"];

const result = {};
for (const lang of Object.keys(C.LANGS)) {
  const file = path.join(res, RES_DIR[lang] || `values-${lang}`, "strings.xml");
  const S = parseStrings(file);
  const need = (key) => {
    const v = S[`privacy_policy_${key}`];
    if (typeof v !== "string" || !v.trim()) throw new Error(`${lang}: "privacy_policy_${key}" missing in ${file}`);
    if (/%(\d+\$)?[sd]/.test(v)) throw new Error(`${lang}: "privacy_policy_${key}" has a format placeholder — fill it as the app does`);
    return v;
  };
  const title = need("navigation_title");
  const description = need("description");
  result[lang] = {
    meta: { title: `Vakit — ${title} (Android)`, description: snippet(description, lang) },
    titleBefore: `${title} `,
    titleEm: "Android",
    // The app shows "<prefix> <value>" above the description (LegalHeaderSection).
    desc: `${need("last_updated_prefix")} ${need("last_updated_value")}\n\n${description}`,
    sections: [
      {
        t: need("information_title"),
        items: ITEMS.map((k) => ({
          name: need(`${k}_data`),
          lines: [
            `${need("item_purpose_prefix")} ${need(`${k}_purpose`)}`,
            `${need("item_processed_prefix")} ${need(`${k}_processed`)}`,
            `${need("item_retention_prefix")} ${need(`${k}_retention`)}`,
          ],
        })),
        b: need("no_personal_data"),
      },
      { t: need("usage_title"), b: `${need("usage_details")}\n\n${need("no_analytics")}` },
      ...PLAIN.map((k) => ({ t: need(`${k}_title`), b: need(`${k}_body`) })),
    ],
  };
}

const header = `/**
 * The Android app's privacy policy, in every language — GENERATED, do not edit.
 * Source: VakitApp-Android (PrivacyPolicyScreen.kt + res/values-<lang>/strings.xml,
 * keys privacy_policy_*); re-import with
 *   node tools/import-android-privacy.js [path/to/VakitApp-Android]
 */
`;
fs.writeFileSync(path.join(__dirname, "..", "legal", "android-privacy.js"), `${header}module.exports = ${JSON.stringify(result, null, 2)};\n`);
console.log(`legal/android-privacy.js: ${Object.keys(result).length} languages × ${result.tr.sections.length} sections, from ${root}`);
