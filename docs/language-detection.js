/**
 * Language routing.
 *
 * Every language is a real page ("/" Turkish, "/<code>/" the others) with a full
 * hreflang set, so search engines send each visitor to the right one. This
 * script only redirects the root when the visitor has CHOSEN a language before
 * (the language menu and the suggestion banner store it), and it forwards the
 * old ?lang=xx links.
 *
 * ⚠️ Never redirect by browser language. Googlebot renders JavaScript with an
 * English browser and no storage: redirecting "/" by browser language made
 * Google read the Turkish home page as a copy of /en/ — Search Console
 * (2026-09-10): "/" had user canonical /en/, and /en/ was "Duplicate, Google
 * chose different canonical". A first-time visitor whose browser speaks another
 * language gets a suggestion banner instead (script.js → suggestLanguage).
 *
 * Old page names (/en.html, /privacy-en.html, /terms-en.html) are static
 * redirect pages in docs/, not handled here.
 */
(function () {
  // Must match LANGS in content.js.
  var supported = ['tr', 'en', 'ar', 'az', 'bn', 'da', 'de', 'es', 'fa', 'ff', 'fr', 'hi', 'id', 'it',
    'ja', 'ms', 'nl', 'pt', 'ru', 'sq', 'sw', 'th', 'ug', 'ur', 'zh'];
  var pageFor = function (lang) { return lang === 'tr' ? '/' : '/' + lang + '/'; };

  var store = {
    get: function () { try { return localStorage.getItem('preferredLanguage'); } catch (e) { return null; } },
    set: function (v) { try { localStorage.setItem('preferredLanguage', v); } catch (e) { /* private mode */ } }
  };

  /* ---- legacy ?lang=xx query param (old hreflang target) ---- */
  var queryLang = new URLSearchParams(window.location.search).get('lang');
  if (queryLang && supported.indexOf(queryLang) !== -1) {
    store.set(queryLang);
    window.location.replace(pageFor(queryLang));
    return;
  }

  /* ---- the root: only an explicit earlier choice redirects ---- */
  var path = window.location.pathname;
  var saved = store.get();
  var atRoot = path === '/' || path === '/index.html';
  if (atRoot && saved && saved !== 'tr' && supported.indexOf(saved) !== -1) {
    window.location.replace(pageFor(saved));
  }
})();
