/**
 * Web fonts per writing system — shared by build.js (pages) and make-og.js
 * (link-preview cards), so both render a language in the same faces.
 *
 * Instrument Serif and Inter only cover Latin, so other scripts add a Noto
 * family behind them: Latin runs inside the text (the name "Vakit", digits)
 * keep the brand faces, the script itself falls through to Noto. `families`
 * is appended to the Google Fonts css2 URL.
 */
const SCRIPTS = {
  latin: {},
  cyrillic: {
    families: "Noto+Serif:ital@0;1",
    serif: "'Instrument Serif', 'Noto Serif', Georgia, serif",
  },
  arabic: {
    families: "Noto+Naskh+Arabic:wght@400;500;600&family=Noto+Sans+Arabic:wght@300;400;500;600",
    serif: "'Instrument Serif', 'Noto Naskh Arabic', 'Geeza Pro', serif",
    sans: "'Inter', 'Noto Sans Arabic', 'Geeza Pro', system-ui, sans-serif",
  },
  urdu: {
    families: "Noto+Nastaliq+Urdu:wght@400;600&family=Noto+Naskh+Arabic:wght@400;500;600",
    serif: "'Instrument Serif', 'Noto Nastaliq Urdu', serif",
    sans: "'Inter', 'Noto Naskh Arabic', system-ui, sans-serif",
  },
  devanagari: {
    families: "Noto+Serif+Devanagari:wght@400;500&family=Noto+Sans+Devanagari:wght@300;400;500;600",
    serif: "'Instrument Serif', 'Noto Serif Devanagari', serif",
    sans: "'Inter', 'Noto Sans Devanagari', system-ui, sans-serif",
  },
  bengali: {
    families: "Noto+Serif+Bengali:wght@400;500&family=Noto+Sans+Bengali:wght@300;400;500;600",
    serif: "'Instrument Serif', 'Noto Serif Bengali', serif",
    sans: "'Inter', 'Noto Sans Bengali', system-ui, sans-serif",
  },
  thai: {
    families: "Noto+Serif+Thai:wght@400;500&family=Noto+Sans+Thai:wght@300;400;500;600",
    serif: "'Instrument Serif', 'Noto Serif Thai', serif",
    sans: "'Inter', 'Noto Sans Thai', system-ui, sans-serif",
  },
  chinese: {
    families: "Noto+Serif+SC:wght@400;500&family=Noto+Sans+SC:wght@300;400;500;600",
    serif: "'Instrument Serif', 'Noto Serif SC', 'Songti SC', serif",
    sans: "'Inter', 'Noto Sans SC', 'PingFang SC', system-ui, sans-serif",
  },
  japanese: {
    families: "Noto+Serif+JP:wght@400;500&family=Noto+Sans+JP:wght@300;400;500;600",
    serif: "'Instrument Serif', 'Noto Serif JP', 'Hiragino Mincho ProN', serif",
    sans: "'Inter', 'Noto Sans JP', 'Hiragino Sans', system-ui, sans-serif",
  },
};

/** Google Fonts stylesheet URL for a script: the brand faces plus its Noto family. */
function fontHref(script) {
  const extra = SCRIPTS[script].families ? `&family=${SCRIPTS[script].families}` : "";
  return `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700${extra}&display=swap`;
}

/** Scripts without spaces between words: split headings join with no gap. */
const joinsWithoutSpace = (script) => script === "chinese" || script === "japanese";

module.exports = { SCRIPTS, fontHref, joinsWithoutSpace };
