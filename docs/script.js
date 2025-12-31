/**
 * Vakit Landing Page Script
 * Handles interactivity, animations, and UI/UX enhancements
 */

// Configuration
const CONFIG = {
    scrollThreshold: 50,
    animationThreshold: 0.1,
    typingSpeed: 100,
    typingDelay: 2000,
    carouselInterval: 3000
};

// State
const state = {
    isScrolled: false,
    currentScreenshot: 0,
    autoSlideInterval: null
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initNavbarScroll();
    initScrollAnimations();
    initMobileMenu();
    initTypingEffect();
    initScrollProgress();
    initButtonsEffects();
    initFaqAccordion();
    initNewsletterForm();
    initCarousel();

    // Check for saved language and apply (mostly handled by localization.js now)
    // But we might need to update UI specific things if any
});

/**
 * Performance optimized scroll and interaction handlers
 */

// Throttle helper Utility
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update URL without jump
                history.pushState(null, null, targetId);

                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

/**
 * Navbar background change on scroll (Throttled)
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    const handleScroll = throttle(() => {
        if (window.scrollY > CONFIG.scrollThreshold) {
            if (!state.isScrolled) {
                navbar.classList.add('scrolled');
                state.isScrolled = true;
            }
        } else {
            if (state.isScrolled) {
                navbar.classList.remove('scrolled');
                state.isScrolled = false;
            }
        }
        updateActiveNavLink();
    }, 100);

    window.addEventListener('scroll', handleScroll);
}

/**
 * Update active state of navigation links
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

/**
 * Scroll reveal animations (staggered)
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay for staggered effect
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll(
        '.hero-content-apple > *, .feature-content-apple > *, .vision-card, .download-content > *, .iphone-frame-apple, .faq-item'
    );

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        observer.observe(el);
    });

    // Fallback: If for some reason animations don't trigger, show everything after 3s
    setTimeout(() => {
        elements.forEach(el => {
            if (!el.classList.contains('animate-in')) {
                el.classList.add('animate-in');
            }
        });
    }, 3000);

    // CSS for staggered animation
    const style = document.createElement('style');
    style.innerHTML = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Mobile menu toggle helper
 */
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const icon = document.querySelector('.mobile-menu-toggle i');

    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
        document.body.style.overflow = '';
    }
}

/**
 * Mobile menu initialization
 */
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (toggle) {
        toggle.addEventListener('click', toggleMobileMenu);

        // Close on outside click
        document.addEventListener('click', (e) => {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !toggle.contains(e.target)) {
                toggleMobileMenu();
            }
        });
    }
}

/**
 * Typing effect for hero title
 */
function initTypingEffect() {
    const title = document.querySelector('.hero-title-apple');
    if (title) {
        // Simple subtle entrance for the title
        title.style.opacity = '0';
        title.style.transform = 'scale(0.95)';
        setTimeout(() => {
            title.style.transition = 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)';
            title.style.opacity = '1';
            title.style.transform = 'scale(1)';
        }, 100);
    }
}

/**
 * FAQ Accordion Implementation
 */
function initFaqAccordion() {
    const container = document.querySelector('.faq-container');
    if (!container) return;

    // Use event delegation for dynamic content
    container.addEventListener('click', (e) => {
        const question = e.target.closest('.faq-question');
        if (!question) return;

        const faqItem = question.closest('.faq-item');
        if (!faqItem) return;

        const isOpen = faqItem.classList.contains('open');

        // Close other FAQs in this container
        const allItems = container.querySelectorAll('.faq-item');
        allItems.forEach(item => item.classList.remove('open'));

        // Toggle current
        if (!isOpen) {
            faqItem.classList.add('open');
        }
    });
}

/**
 * Newsletter Form Simulation
 */
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        const btn = form.querySelector('button');

        if (input.value) {
            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-check"></i>';
            input.value = '';

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }, 3000);
        }
    });
}

/**
 * Throttled Scroll Progress
 */
function initScrollProgress() {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress-bar';
    progress.style.cssText = `
        position: fixed; top: 0; left: 0; width: 0; height: 3px;
        background: var(--primary); z-index: 2000; transition: width 0.1s;
    `;
    document.body.appendChild(progress);

    window.addEventListener('scroll', throttle(() => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progress.style.width = scrolled + '%';
    }, 50));
}

function initButtonsEffects() { }
function initCarousel() { }


// Helper to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}