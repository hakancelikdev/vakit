/**
 * Language routing.
 *
 * Turkish lives at "/" (canonical), English at "/en/". Each is a real,
 * separately indexable page, so this script only handles two things:
 * sending legacy URLs to their new home, and pointing a first-time
 * English-speaking visitor at the English page.
 *
 * Crawlers don't execute JavaScript, so they always see the URL they asked
 * for — no redirect ever interferes with indexing either language.
 */
(function () {
  var supported = ['tr', 'en'];
  var path = window.location.pathname;

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

  /* ---- legacy ?lang=en query param (old hreflang target) ---- */
  var query = new URLSearchParams(window.location.search);
  var queryLang = query.get('lang');
  if (queryLang && supported.indexOf(queryLang) !== -1) {
    localStorage.setItem('preferredLanguage', queryLang);
    window.location.replace(queryLang === 'en' ? '/en/' : '/');
    return;
  }

  var saved = localStorage.getItem('preferredLanguage');

  /* ---- first visit to the root: follow the browser's language ----
     Only ever redirects "/" → "/en/", and only when the visitor has made no
     choice yet. Landing on /en/ is always respected, so a search result or a
     shared link keeps the language it promised. */
  var inEnglishDir = path === '/en/' || path === '/en/index.html';
  var atRoot = !inEnglishDir && (path === '/' || path.endsWith('/index.html'));

  if (!saved && atRoot) {
    var browserLang = (navigator.language || navigator.userLanguage || 'tr').split('-')[0];
    if (browserLang === 'en') {
      localStorage.setItem('preferredLanguage', 'en');
      window.location.replace('/en/');
      return;
    }
  }

  /* Record the language of the page actually being viewed. */
  if (!saved) {
    localStorage.setItem('preferredLanguage', document.documentElement.lang === 'en' ? 'en' : 'tr');
  }
})();
