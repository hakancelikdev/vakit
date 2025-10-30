// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Language switcher functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Analytics event for language switch
            if (typeof gtag !== 'undefined') {
                gtag('event', 'language_switch', {
                    'event_category': 'engagement',
                    'event_label': lang,
                    'value': 1
                });
            }
        });
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .screenshot-card, .vision-card, .developer-card, .project-info');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Screenshot carousel functionality
    const carousel = document.querySelector('.screenshot-carousel');
    let currentSlide = 0;
    let carouselInterval;

    if (carousel) {
        const screenshots = carousel.querySelectorAll('.app-screenshot');
        
        function showSlide(index) {
            // Add exiting animation to current slide
            const currentActive = carousel.querySelector('.app-screenshot.active');
            if (currentActive) {
                currentActive.classList.add('exiting');
                setTimeout(() => {
                    currentActive.classList.remove('active', 'exiting');
                }, 600);
            }
            
            // Show new slide with entering animation
            setTimeout(() => {
                if (screenshots[index]) {
                    screenshots[index].classList.add('active', 'entering');
                    setTimeout(() => {
                        screenshots[index].classList.remove('entering');
                    }, 1200);
                }
            }, 600);
            
            currentSlide = index;
        }
        
        function nextSlide() {
            const nextIndex = (currentSlide + 1) % screenshots.length;
            showSlide(nextIndex);
        }
        
        // Auto-rotate carousel every 4 seconds with random variations
        function startCarousel() {
            const baseInterval = 4000;
            const randomVariation = Math.random() * 1000 + 500; // 0.5-1.5 seconds variation
            
            carouselInterval = setTimeout(() => {
                nextSlide();
                startCarousel(); // Schedule next slide with new random interval
            }, baseInterval + randomVariation);
        }
        
        // Add some cool entrance effects
        function addEntranceEffects() {
            screenshots.forEach((screenshot, index) => {
                screenshot.style.animationDelay = `${index * 0.2}s`;
            });
        }
        
        // Start the carousel with a slight delay for dramatic effect
        setTimeout(() => {
            showSlide(0);
            startCarousel();
            addEntranceEffects();
        }, 1000);
    }

    // Phone mockup animation
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        const phoneObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.5 });

        phoneMockup.style.opacity = '0';
        phoneMockup.style.transform = 'translateY(50px) scale(0.9)';
        phoneMockup.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        phoneObserver.observe(phoneMockup);
    }

    // Prayer time cards animation in phone mockup
    const prayerCards = document.querySelectorAll('.prayer-card');
    prayerCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, 1000 + (index * 200));
    });

    // Feature icons animation
    const featureIcons = document.querySelectorAll('.feature-icon');
    featureIcons.forEach((icon, index) => {
        icon.style.transform = 'scale(0)';
        icon.style.transition = `transform 0.5s ease ${index * 0.1}s`;
        
        const iconObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'scale(1)';
                }
            });
        }, { threshold: 0.5 });
        
        iconObserver.observe(icon);
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Button hover effects and analytics tracking
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Analytics tracking for button clicks
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const buttonHref = this.getAttribute('href');
            
            if (typeof gtag !== 'undefined') {
                if (buttonHref && buttonHref.includes('apps.apple.com')) {
                    // App Store download tracking
                    gtag('event', 'app_download_click', {
                        'event_category': 'conversion',
                        'event_label': 'app_store',
                        'value': 1
                    });
                } else if (buttonText.includes('Özellikleri Gör') || buttonText.includes('View Features')) {
                    // Features button tracking
                    gtag('event', 'features_view_click', {
                        'event_category': 'engagement',
                        'event_label': 'features_button',
                        'value': 1
                    });
                } else {
                    // General button click tracking
                    gtag('event', 'button_click', {
                        'event_category': 'engagement',
                        'event_label': buttonText,
                        'value': 1
                    });
                }
            }
        });
    });

    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Screenshot cards hover effect
    const screenshotCards = document.querySelectorAll('.screenshot-card');
    screenshotCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Vision cards hover effect
    const visionCards = document.querySelectorAll('.vision-card');
    visionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Developer cards hover effect
    const developerCards = document.querySelectorAll('.developer-card, .project-info');
    developerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 500);
    }

    // Counter animation for features
    const counters = document.querySelectorAll('.feature-card h3');
    counters.forEach(counter => {
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.color = 'var(--primary)';
                    entry.target.style.transform = 'scale(1.05)';
                    entry.target.style.transition = 'color 0.3s ease, transform 0.3s ease';
                }
            });
        }, { threshold: 0.5 });
        
        counterObserver.observe(counter);
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');
            
            // Update aria-expanded for accessibility
            this.setAttribute('aria-expanded', isActive);
            
            // Change icon
            const icon = this.querySelector('i');
            if (isActive) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isActive ? 'hidden' : '';
        });
        
        // Close menu when clicking on nav links
        navLinks.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
                document.body.style.overflow = '';
            }
        });
    }

    // Add loading animation and page load tracking
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
        // Analytics tracking for page load
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load', {
                'event_category': 'engagement',
                'event_label': 'landing_page',
                'value': 1
            });
        }
    });

    // Mobile-specific improvements
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Improve touch interactions
    if (isMobile()) {
        // Add touch feedback for buttons
        const touchElements = document.querySelectorAll('.btn, .lang-btn, .mobile-menu-toggle, .carousel-btn, .dot');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Prevent zoom on double tap for buttons
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);

        // Improve scroll performance on mobile
        let ticking = false;
        function updateScrollPosition() {
            // Add any scroll-based animations here
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        });
    }

    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            // Recalculate layout after orientation change
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary), var(--secondary));
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    // Track scroll depth for analytics
    let scrollMilestones = [25, 50, 75, 100];
    let scrollMilestonesReached = [];
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
        
        // Analytics tracking for scroll depth
        if (typeof gtag !== 'undefined') {
            scrollMilestones.forEach(milestone => {
                if (scrollPercent >= milestone && !scrollMilestonesReached.includes(milestone)) {
                    scrollMilestonesReached.push(milestone);
                    gtag('event', 'scroll_depth', {
                        'event_category': 'engagement',
                        'event_label': milestone + '%',
                        'value': milestone
                    });
                }
            });
        }
    });
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

    // Add some interactive features
    document.addEventListener('DOMContentLoaded', function() {
        // Add click sound effect for buttons (optional)
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = event.clientX - rect.left - size / 2;
                const y = event.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Newsletter form functionality
        const newsletterForm = document.querySelector('.newsletter-form');
        const newsletterInput = document.querySelector('.newsletter-input');
        const newsletterBtn = document.querySelector('.newsletter-btn');
        
        if (newsletterForm && newsletterInput && newsletterBtn) {
            newsletterBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const email = newsletterInput.value.trim();
                
                if (email && isValidEmail(email)) {
                    // Show success message
                    newsletterBtn.innerHTML = '<i class="fas fa-check"></i>';
                    newsletterBtn.style.background = 'linear-gradient(135deg, #33B333, #28a745)';
                    newsletterInput.value = '';
                    
                    setTimeout(() => {
                        newsletterBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
                        newsletterBtn.style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
                    }, 2000);
                } else {
                    // Show error animation
                    newsletterInput.style.borderColor = '#CC3333';
                    newsletterInput.style.boxShadow = '0 0 0 3px rgba(204, 51, 51, 0.2)';
                    
                    setTimeout(() => {
                        newsletterInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        newsletterInput.style.boxShadow = 'none';
                    }, 2000);
                }
            });
            
            // Enter key support
            newsletterInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    newsletterBtn.click();
                }
            });
        }
        
        // Email validation function
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Carousel functionality
let currentSlideIndex = 0;
const totalSlides = 8;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.screenshot-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remove active class from current slide and dot
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    
    // Calculate new slide index
    currentSlideIndex += direction;
    
    // Handle wrap-around
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    // Add active class to new slide and dot
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
    
    // Analytics tracking for carousel navigation
    if (typeof gtag !== 'undefined') {
        gtag('event', 'carousel_navigation', {
            'event_category': 'engagement',
            'event_label': direction > 0 ? 'next' : 'previous',
            'value': currentSlideIndex + 1
        });
    }
}

function currentSlide(slideNumber) {
    const slides = document.querySelectorAll('.screenshot-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remove active class from current slide and dot
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    
    // Set new slide index
    currentSlideIndex = slideNumber - 1;
    
    // Add active class to new slide and dot
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
    
    // Analytics tracking for dot navigation
    if (typeof gtag !== 'undefined') {
        gtag('event', 'carousel_dot_click', {
            'event_category': 'engagement',
            'event_label': 'slide_' + slideNumber,
            'value': slideNumber
        });
    }
}

// Auto-rotate carousel
function startAutoCarousel() {
    setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

// Start auto carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start auto carousel after a delay
    setTimeout(startAutoCarousel, 3000);
    
    // Pause auto carousel on hover
    const carouselContainer = document.querySelector('.screenshot-carousel-container');
    if (carouselContainer) {
        let autoCarouselInterval;
        
        carouselContainer.addEventListener('mouseenter', function() {
            clearInterval(autoCarouselInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', function() {
            autoCarouselInterval = setInterval(() => {
                changeSlide(1);
            }, 5000);
        });
    }

    // Scroll-based screenshot functionality
    initScrollScreenshots();
    
    // Set active navigation link based on current page
    setActiveNavigationLink();
});

// Set active navigation link based on current page
function setActiveNavigationLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Set active class based on current page
    if (currentPath.includes('privacy')) {
        const privacyLink = document.querySelector('a[href*="privacy"]');
        if (privacyLink) privacyLink.classList.add('active');
    } else if (currentPath.includes('terms')) {
        const termsLink = document.querySelector('a[href*="terms"]');
        if (termsLink) termsLink.classList.add('active');
    } else if (currentPath.includes('en.html')) {
        // For English main page, no specific active link
    } else {
        // For Turkish main page, no specific active link
    }
}

// Scroll-based Screenshot Functionality
function initScrollScreenshots() {
    const screenshotItems = document.querySelectorAll('.screenshot-item');
    const scrollScreenshots = document.querySelectorAll('.scroll-screenshot');
    
    if (screenshotItems.length === 0 || scrollScreenshots.length === 0) {
        return; // Exit if elements don't exist
    }
    
    // Create intersection observer for screenshot items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slideNumber = entry.target.getAttribute('data-slide');
                updateActiveScreenshot(slideNumber);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
    });
    
    // Observe all screenshot items
    screenshotItems.forEach(item => {
        observer.observe(item);
    });
    
    // Set initial active state
    screenshotItems[0].classList.add('active');
}

function updateActiveScreenshot(slideNumber) {
    // Update screenshot images
    const scrollScreenshots = document.querySelectorAll('.scroll-screenshot');
    scrollScreenshots.forEach(img => {
        img.classList.remove('active');
        if (img.getAttribute('data-slide') === slideNumber) {
            img.classList.add('active');
        }
    });
    
    // Update screenshot items
    const screenshotItems = document.querySelectorAll('.screenshot-item');
    screenshotItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-slide') === slideNumber) {
            item.classList.add('active');
        }
    });
} 