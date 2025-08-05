// Language detection and redirection
(function() {
    // Get user's preferred language from browser
    function getUserLanguage() {
        // Check if user has a saved preference
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang) {
            return savedLang;
        }
        
        // Get browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Check if it's Turkish
        if (langCode === 'tr') {
            return 'tr';
        }
        
        // Default to English for other languages
        return 'en';
    }
    
    // Redirect to appropriate language version
    function redirectToLanguage() {
        const lang = getUserLanguage();
        const currentPath = window.location.pathname;
        
        // Handle privacy pages
        if (currentPath.includes('privacy')) {
            if (lang === 'tr' && currentPath.includes('privacy-en.html')) {
                window.location.href = '/privacy.html';
            } else if (lang === 'en' && currentPath.includes('privacy.html') && !currentPath.includes('privacy-en.html')) {
                window.location.href = '/privacy-en.html';
            }
        }
        // Handle main pages
        else {
            // If we're on the root page and language is English, redirect to en.html
            if (lang === 'en' && (currentPath === '/' || currentPath === '/index.html')) {
                window.location.href = '/en.html';
            }
            // If we're on en.html and language is Turkish, redirect to root
            else if (lang === 'tr' && currentPath.includes('/en.html')) {
                window.location.href = '/';
            }
        }
    }
    
    // Only redirect if we're on the main pages or privacy pages
    const currentPath = window.location.pathname;
    if (currentPath === '/' || currentPath === '/index.html' || currentPath.includes('/en.html') || currentPath.includes('privacy')) {
        redirectToLanguage();
    }
})(); 