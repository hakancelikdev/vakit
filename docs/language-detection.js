/**
 * Language routing.
 *
 * Every language is a real, separately indexable page: Turkish at "/"
 * (canonical), the others at "/<code>/". This script only handles two things:
 * sending legacy URLs to their new home, and pointing a visitor who lands on
 * "/" at the page in their language.
 *
 * Crawlers don't execute JavaScript, so they always see the URL they asked
 * for — no redirect ever interferes with indexing any language.
 */
(function () {
  // Must match LANGS in content.js.
  var supported = ['tr', 'en', 'ar', 'az', 'bn', 'da', 'de', 'es', 'fa', 'ff', 'fr', 'hi', 'id', 'it',
    'ja', 'ms', 'nl', 'pt', 'ru', 'sq', 'sw', 'th', 'ug', 'ur', 'zh'];
  var path = window.location.pathname;
  var pageFor = function (lang) { return lang === 'tr' ? '/' : '/' + lang + '/'; };

  /* ---- legacy URLs from the previous site structure ---- */
  var legacy = {
    '/en.html': '/en/',
    '/privacy-en.html': '/privacy.html',
    '/terms-en.html': '/terms.html'
  };
  for (var old in legacy) {
    if (path.endsWith(old)) {
      window.location.replace(legacy[old]);
      return;
    }
  }

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

  /* ---- the root: follow the visitor's choice, else the browser ----
     Only "/" is ever redirected. Landing on any /<code>/ page is always
     respected, so a search result or a shared link keeps the language it
     promised. A browser language we don't have goes to English (x-default). */
  var saved = store.get();
  var atRoot = path === '/' || path === '/index.html';

  if (atRoot) {
    var target = supported.indexOf(saved) !== -1 ? saved : null;
    if (!target) {
      var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'tr'];
      for (var i = 0; i < prefs.length && !target; i++) {
        var base = String(prefs[i]).toLowerCase().split('-')[0];
        if (supported.indexOf(base) !== -1) target = base;
      }
      target = target || 'en';
      store.set(target);
    }
    if (target !== 'tr') {
      window.location.replace(pageFor(target));
      return;
    }
  }

  /* Record the language of the page actually being viewed. */
  if (!saved) {
    store.set(document.documentElement.lang.toLowerCase().split('-')[0]);
  }
})();
