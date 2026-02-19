/**
 * Vakit Landing Page Script
 * Clean, single-responsibility modules
 */

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initNavbarScroll();
    initScrollReveal();
    initMobileMenu();
    initFaqAccordion();
    initScrollProgress();
});

/* ==========================================================================
   Utilities
   ========================================================================== */

function throttle(fn, ms) {
    let throttled = false;
    return function (...args) {
        if (!throttled) {
            fn.apply(this, args);
            throttled = true;
            setTimeout(() => (throttled = false), ms);
        }
    };
}

/* ==========================================================================
   Smooth Scrolling
   ========================================================================== */

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            if (id === '#') return;

            const target = document.querySelector(id);
            if (target) {
                const offset = 64;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                history.pushState(null, null, id);

                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

/* ==========================================================================
   Navbar — scroll state + active link
   ========================================================================== */

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let isScrolled = false;

    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== isScrolled) {
            navbar.classList.toggle('scrolled', scrolled);
            isScrolled = scrolled;
        }
        updateActiveNavLink();
    }, 100));
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    const scrollY = window.scrollY + 100;

    let current = '';
    sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
            current = section.id;
        }
    });

    links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').substring(1) === current);
    });
}

/* ==========================================================================
   Scroll Reveal — single animation system
   Uses CSS class .reveal / .reveal-visible
   ========================================================================== */

function initScrollReveal() {
    const elements = document.querySelectorAll(
        '.hero-content-apple > *,' +
        '.feature-section-apple,' +
        '.feature-content-apple > *,' +
        '.feature-image-apple,' +
        '.testimonial-card,' +
        '.vision-card,' +
        '.download-content > *,' +
        '.faq-item'
    );

    // Add .reveal class to all target elements
    elements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));

    // Safety fallback — show everything after 4s
    setTimeout(() => {
        elements.forEach(el => el.classList.add('reveal-visible'));
    }, 4000);
}

/* ==========================================================================
   Mobile Menu
   ========================================================================== */

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const icon = document.querySelector('.mobile-menu-toggle i');
    if (!navLinks || !icon) return;

    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    icon.classList.replace(isOpen ? 'fa-bars' : 'fa-times', isOpen ? 'fa-times' : 'fa-bars');
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', toggleMobileMenu);

    document.addEventListener('click', (e) => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) && !toggle.contains(e.target)) {
            toggleMobileMenu();
        }
    });
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */

function initFaqAccordion() {
    const container = document.querySelector('.faq-container');
    if (!container) return;

    container.addEventListener('click', (e) => {
        const question = e.target.closest('.faq-question');
        if (!question) return;

        const faqItem = question.closest('.faq-item');
        if (!faqItem) return;

        const isOpen = faqItem.classList.contains('open');

        // Close all
        container.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('open');
            const q = item.querySelector('.faq-question');
            if (q) q.setAttribute('aria-expanded', 'false');
        });

        // Open clicked (if it was closed)
        if (!isOpen) {
            faqItem.classList.add('open');
            question.setAttribute('aria-expanded', 'true');
        }
    });
}

/* ==========================================================================
   Scroll Progress Bar
   ========================================================================== */

function initScrollProgress() {
    const bar = document.createElement('div');
    bar.style.cssText = `
        position: fixed; top: 0; left: 0; width: 0; height: 3px;
        background: var(--primary); z-index: 2000; transition: width 0.15s;
        pointer-events: none;
    `;
    document.body.appendChild(bar);

    window.addEventListener('scroll', throttle(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        bar.style.width = (scrollTop / scrollHeight) * 100 + '%';
    }, 50));
}
