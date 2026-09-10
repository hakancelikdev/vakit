#!/usr/bin/env node
/**
 * Checks locales/<lang>.js against the English source in content.js.
 *
 *   node tools/check-locale.js de fr ar     # specific languages
 *   node tools/check-locale.js              # every language in LANGS except tr/en
 *
 * Works while other locale files are still missing (they load as empty stubs),
 * so a translator can verify one file before the rest exist. build.js runs the
 * same checks on a full build.
 */
const fs = require("fs");
const path = require("path");
const Module = require("module");

const SITE = path.join(__dirname, "..");
const EMPTY = { META: {}, COPY: {}, PRAYERS: {}, CITIES: {}, FEATURES: [], SHOWCASE: [], COMPARE: [], REVIEWS: [], FAQ: [] };

const load = Module._load;
Module._load = function (request, parent, isMain) {
  if (/^\.\/locales\/[a-z]+\.js$/.test(request) && !fs.existsSync(path.join(SITE, request))) return EMPTY;
  return load.call(this, request, parent, isMain);
};

const C = require(path.join(SITE, "content.js"));
const { validateLocale } = require(path.join(SITE, "tools", "validate.js"));

const langs = process.argv.slice(2).length
  ? process.argv.slice(2)
  : Object.keys(C.LANGS).filter((l) => l !== "tr" && l !== "en");

let failed = false;
for (const lang of langs) {
  const file = path.join(SITE, "locales", `${lang}.js`);
  if (!fs.existsSync(file)) {
    console.log(`${lang}: MISSING ${path.relative(SITE, file)}`);
    failed = true;
    continue;
  }
  delete require.cache[file];
  const { errors, warnings } = validateLocale(C, lang, require(file));
  for (const w of warnings) console.log(`${lang}: warning — ${w}`);
  if (errors.length) {
    failed = true;
    for (const e of errors) console.log(`${lang}: ERROR — ${e}`);
  } else {
    console.log(`${lang}: OK`);
  }
}
process.exit(failed ? 1 : 0);
