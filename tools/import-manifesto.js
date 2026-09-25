#!/usr/bin/env node
/**
 * Imports the Vakit Manifesto from the app into ../manifesto.js.
 *
 * The manifesto is the app's own text (VakitApp/app → ManifestoView.swift,
 * strings in vakit/Infrastructure/Localization/<lang>.lproj/Localizable.strings),
 * translated into all 25 app languages. The site shows it as it is in the app,
 * so it is imported, never retyped: run this after the manifesto changes in the app,
 * then `npm run build` and commit manifesto.js with the regenerated pages.
 *
 * Usage: node tools/import-manifesto.js [path/to/app]   (default: ../app, then ../VakitApp-Swift)
 */

const fs = require("fs");
const path = require("path");
const C = require("../content.js");

// Order and keys follow ManifestoPrinciple in ManifestoView.swift: what you notice
// when you open the app, then what you trust, then how it stays alive.
const PRINCIPLES = [
  ["offline", "manifesto_offline"],
  ["noAds", "manifesto_no_ads"],
  ["noPaywall", "manifesto_no_paywall"],
  ["accessible", "manifesto_accessible"],
  ["correct", "manifesto_correct"],
  ["worldwide", "manifesto_worldwide"],
  ["privacy", "manifesto_privacy"],
  ["calm", "manifesto_calm"],
  ["languages", "manifesto_languages"],
  ["together", "manifesto_together"],
];

const candidates = process.argv[2] ? [process.argv[2]] : ["../app", "../VakitApp-Swift"];
const root = candidates.map((p) => path.resolve(__dirname, "..", p)).find((p) => fs.existsSync(path.join(p, "vakit")));
if (!root) {
  console.error(`App repository not found (tried ${candidates.join(", ")}). Pass its path as the first argument.`);
  process.exit(1);
}

/** The few escapes Localizable.strings uses: \" \\ \n. */
function parseStrings(file) {
  const out = {};
  const re = /^"([^"]+)"\s*=\s*"((?:[^"\\]|\\.)*)";/gm;
  for (const m of fs.readFileSync(file, "utf8").matchAll(re)) {
    out[m[1]] = m[2].replace(/\\(["\\n])/g, (_, c) => (c === "n" ? "\n" : c));
  }
  return out;
}

const result = {};
for (const lang of Object.keys(C.LANGS)) {
  const file = path.join(root, "vakit", "Infrastructure", "Localization", `${lang}.lproj`, "Localizable.strings");
  const S = parseStrings(file);
  const need = (key) => {
    if (typeof S[key] !== "string" || !S[key].trim()) throw new Error(`${lang}: "${key}" missing in ${file}`);
    // %d is the language count in manifesto_languages_body; the site fills it at build time.
    return S[key].replace(/%(\d+\$)?d/g, "{languageCount}");
  };
  result[lang] = {
    title: need("manifesto_title"),
    intro: need("manifesto_intro"),
    principles: PRINCIPLES.map(([id, key]) => ({ id, title: need(`${key}_title`), body: need(`${key}_body`) })),
  };
}

const header = `/**
 * The Vakit Manifesto, in every language — GENERATED, do not edit.
 * Source: the app (ManifestoView.swift + Localizable.strings); re-import with
 *   node tools/import-manifesto.js [path/to/app]
 * {languageCount} is filled in by build.js.
 */
`;
fs.writeFileSync(path.join(__dirname, "..", "manifesto.js"), `${header}module.exports = ${JSON.stringify(result, null, 2)};\n`);
console.log(`manifesto.js: ${Object.keys(result).length} languages × ${PRINCIPLES.length} principles, from ${root}`);
