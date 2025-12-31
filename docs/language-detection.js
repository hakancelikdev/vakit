/**
 * Simple language detection and redirection
 */
(function () {
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
    const defaultLang = 'tr';
    const supportedLangs = ['tr', 'en'];

    // Choose the best language
    let lang = savedLang || (supportedLangs.includes(browserLang) ? browserLang : defaultLang);

    // Store it
    if (!localStorage.getItem('preferredLanguage')) {
        localStorage.setItem('preferredLanguage', lang);
    }

    // The previous logic redirected to en.html or privacy-en.html.
    // Now we use a single file with data-i18n, so we don't need redirects.
    // However, if the user navigates to the old URLs, we should redirect to the new ones.

    const currentPath = window.location.pathname;

    if (currentPath.endsWith('/en.html')) {
        window.location.replace('index.html');
    } else if (currentPath.endsWith('/privacy-en.html')) {
        window.location.replace('privacy.html');
    } else if (currentPath.endsWith('/terms-en.html')) {
        window.location.replace('terms.html');
    }
})();