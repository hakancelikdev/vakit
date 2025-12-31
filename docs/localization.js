/**
 * Localization Manager
 * Handles dynamic content updates based on selected language
 */

const LocalizationManager = {
    currentLang: 'tr',

    init() {
        // Load saved language or default to TR
        this.currentLang = localStorage.getItem('preferredLanguage') || 'tr';

        // Initial translation
        this.setLanguage(this.currentLang);

        // Setup event listeners for language switchers
        this.setupEventListeners();
    },

    setupEventListeners() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                this.setLanguage(lang);

                // Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'language_switch', {
                        'event_category': 'engagement',
                        'event_label': lang,
                        'value': 1
                    });
                }
            });
        });
    },

    setLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLanguage', lang);

        // Update UI
        this.updateButtonsState();
        this.updateContent();
        this.updateImages();
        this.updateMetaTags();
    },

    updateButtonsState() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    },

    updateContent() {
        // Find all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = this.getValueFromKey(key);

            if (value) {
                // Check if we need to update a specific attribute or text
                const targetAttr = element.getAttribute('data-i18n-attr');

                if (targetAttr) {
                    element.setAttribute(targetAttr, value);
                } else {
                    // Start basic implementation - if value contains HTML tags, use innerHTML
                    if (typeof value === 'string' && value.includes('<') && value.includes('>')) {
                        element.innerHTML = value;
                    } else {
                        element.textContent = value;
                    }
                }
            }
        });

        // Handle lists (e.g., FAQ)
        const listElements = document.querySelectorAll('[data-i18n-list]');
        listElements.forEach(container => {
            const key = container.getAttribute('data-i18n-list');
            const items = this.getValueFromKey(key);

            if (Array.isArray(items)) {
                container.innerHTML = items.map(item => `
                    <div class="faq-item">
                        <div class="faq-question">
                            <h4>${item.q}</h4>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            <p>${item.a}</p>
                        </div>
                    </div>
                `).join('');
            }
        });
    },

    updateImages() {
        // Update standard images
        const imageElements = document.querySelectorAll('[data-i18n-img]');
        const langData = translations[this.currentLang] || translations['tr'];
        const paths = langData?.screenshotPaths;

        if (paths) {
            imageElements.forEach(img => {
                const key = img.getAttribute('data-i18n-img');
                if (paths[key]) {
                    img.src = paths[key];
                }
            });
        }
    },

    updateMetaTags() {
        const langData = translations[this.currentLang] || translations['tr'];
        const t = langData?.meta;
        if (!t) return;

        document.title = t.title;

        const setMeta = (name, content) => {
            const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
            if (meta) meta.setAttribute('content', content);
        };

        setMeta('description', t.description);
        setMeta('keywords', t.keywords);
        setMeta('og:title', t.title);
        setMeta('og:description', t.description);
        setMeta('twitter:title', t.title);
        setMeta('twitter:description', t.description);
    },

    getValueFromKey(key) {
        // Navigate through the translations object using the dot notation key
        // e.g., "nav.features" -> translations[lang].nav.features
        const keys = key.split('.');
        let value = translations[this.currentLang] || translations['tr'];

        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return null;
            }
        }

        return value;
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    LocalizationManager.init();
});
