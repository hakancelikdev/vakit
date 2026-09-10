/**
 * Shape checks for one language's copy against English. Shared by build.js
 * (fails the build) and tools/check-locale.js (translator feedback).
 */

const PLACEHOLDERS = ["{featureCount}", "{ratingCount}"];
const LISTS = { FEATURES: ["n", "d"], SHOWCASE: ["t", "d"], COMPARE: ["f", "o", "v"], REVIEWS: ["t", "b"], FAQ: ["q", "a"] };
// Copy keys that may legitimately be empty (Turkish has no "translated" note).
const MAY_BE_EMPTY = new Set(["r-note"]);

const nonEmpty = (v) => typeof v === "string" && v.trim().length > 0;

/**
 * @param C    content.js exports (source of the English reference)
 * @param lang language code
 * @param L    the language's copy: { META, COPY, PRAYERS, CITIES, FEATURES, SHOWCASE, COMPARE, REVIEWS, FAQ }
 */
function validateLocale(C, lang, L) {
  const errors = [];
  const warnings = [];
  const en = {
    META: C.META.en, COPY: C.COPY.en, PRAYERS: C.PRAYERS.en, CITIES: C.CITIES.en,
    FEATURES: C.FEATURES.en, SHOWCASE: C.SHOWCASE.en, COMPARE: C.COMPARE.en, REVIEWS: C.REVIEWS.en, FAQ: C.FAQ.en,
  };

  for (const k of ["title", "description", "keywords"]) {
    if (!nonEmpty(L.META && L.META[k])) errors.push(`META.${k} missing`);
  }

  for (const block of ["COPY", "PRAYERS", "CITIES"]) {
    const have = L[block] || {};
    for (const key of Object.keys(en[block])) {
      const v = have[key];
      if (typeof v !== "string") errors.push(`${block}["${key}"] missing`);
      else if (!v.trim() && !(block === "COPY" && MAY_BE_EMPTY.has(key) && lang === "tr")) errors.push(`${block}["${key}"] empty`);
      else if (block === "COPY") {
        for (const p of PLACEHOLDERS) {
          if (en.COPY[key].includes(p) && !v.includes(p)) errors.push(`COPY["${key}"] lost ${p}`);
        }
      }
    }
    for (const key of Object.keys(have)) {
      if (!(key in en[block])) errors.push(`${block}["${key}"] is not a key in English`);
    }
  }

  for (const [list, fields] of Object.entries(LISTS)) {
    const have = L[list] || [];
    if (have.length !== en[list].length) {
      errors.push(`${list} has ${have.length} entries, English has ${en[list].length}`);
      continue;
    }
    have.forEach((item, i) => {
      for (const f of fields) if (!nonEmpty(item && item[f])) errors.push(`${list}[${i}].${f} missing`);
    });
  }

  // Untranslated leftovers: identical to English in a sentence-length string.
  if (lang !== "en" && L.COPY) {
    const same = Object.keys(en.COPY).filter((k) => L.COPY[k] === en.COPY[k] && en.COPY[k].split(" ").length > 3);
    if (same.length) warnings.push(`identical to English: ${same.join(", ")}`);
  }

  return { errors, warnings };
}

module.exports = { validateLocale };
