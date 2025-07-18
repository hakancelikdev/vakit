// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
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

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
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

    // Mobile menu toggle (for future mobile menu implementation)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
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

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
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