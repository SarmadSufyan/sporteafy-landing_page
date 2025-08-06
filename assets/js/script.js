// ========================================
// SPORTEAFY LANDING PAGE JAVASCRIPT
// Interactive functionality matching the main app
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // HERO IMAGE CAROUSEL
    // ========================================
    
    const heroImages = document.querySelectorAll('.hero-image');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    // Function to show specific slide
    function showSlide(index) {
        // Remove active class from all images and indicators
        heroImages.forEach(img => img.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide
        if (heroImages[index]) {
            heroImages[index].classList.add('active');
        }
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        currentSlide = index;
    }

    // Function to go to next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % heroImages.length;
        showSlide(nextIndex);
    }

    // Auto-slide functionality
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Initialize carousel if hero images exist
    if (heroImages.length > 0) {
        startAutoSlide();
        
        // Add click handlers to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                stopAutoSlide();
                showSlide(index);
                setTimeout(startAutoSlide, 10000); // Restart auto-slide after 10 seconds
            });
        });

        // Pause auto-slide on hover
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopAutoSlide);
            heroSection.addEventListener('mouseleave', startAutoSlide);
        }
    }

    // ========================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ========================================
    
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
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

    // ========================================
    // MOBILE NAVIGATION TOGGLE
    // ========================================
    
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks_container = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks_container) {
        mobileToggle.addEventListener('click', function() {
            navLinks_container.classList.toggle('mobile-open');
            this.classList.toggle('active');
        });
    }

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .step, .pricing-card, .contact-item');
    animateElements.forEach(el => observer.observe(el));

    // ========================================
    // NAVBAR BACKGROUND ON SCROLL
    // ========================================
    
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ========================================
    // BUTTON INTERACTIONS
    // ========================================
    
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Add hover effect
        button.addEventListener('mouseenter', function() {
            this.classList.add('hover-lift');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('hover-lift');
        });
        
        // Add click effect
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ========================================
    // COMING SOON FUNCTIONALITY
    // ========================================
    
    const comingSoonButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    comingSoonButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show coming soon message
            showComingSoonMessage();
        });
    });

    function showComingSoonMessage() {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.className = 'coming-soon-modal-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        // Create modal content
        const modal = document.createElement('div');
        modal.className = 'coming-soon-modal';
        modal.style.cssText = `
            background: #1a1a1a;
            border: 1px solid #374151;
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        `;
        
        modal.innerHTML = `
            <h3 style="font-family: 'Bebas Neue', Arial, sans-serif; font-size: 2rem; color: #22c55e; margin-bottom: 20px; letter-spacing: 1px;">
                Coming Soon! 🚀
            </h3>
            <p style="color: #e5e7eb; margin-bottom: 15px; line-height: 1.6;">
                We're putting the finishing touches on our complete booking platform.
            </p>
            <p style="color: #e5e7eb; margin-bottom: 30px; line-height: 1.6;">
                Stay tuned for the launch! In the meantime, feel free to contact us directly.
            </p>
            <button class="close-modal" style="
                background: #22c55e;
                color: #000000;
                border: none;
                padding: 12px 30px;
                border-radius: 25px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            ">
                Got it!
            </button>
        `;
        
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        // Animate in
        setTimeout(() => {
            overlay.style.opacity = '1';
            modal.style.transform = 'scale(1)';
        }, 10);
        
        // Close modal functionality
        const closeModal = () => {
            overlay.style.opacity = '0';
            modal.style.transform = 'scale(0.9)';
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 300);
        };
        
        modal.querySelector('.close-modal').addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });
        
        // Close with Escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    // ========================================
    // PERFORMANCE OPTIMIZATIONS
    // ========================================
    
    // Lazy load images when they come into view
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));

    // ========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ========================================
    
    // Skip to main content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #22c55e;
        color: #000000;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
        font-weight: 600;
        transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // ========================================
    // ERROR HANDLING
    // ========================================
    
    window.addEventListener('error', function(e) {
        console.warn('Sporteafy Landing Page Error:', e.error);
        // Could add error reporting here in production
    });

    // ========================================
    // INITIALIZATION COMPLETE
    // ========================================
    
    console.log('🏟️ Sporteafy Landing Page Initialized Successfully!');
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
});

// ========================================
// CSS FOR DYNAMIC ELEMENTS
// ========================================

// Add ripple effect styles
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .navbar.scrolled {
        background: rgba(0, 0, 0, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }
    
    .nav-links.mobile-open {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.98);
        padding: 20px;
        gap: 15px;
    }
    
    .nav-mobile-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-mobile-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-mobile-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    body.loaded .hero-content {
        animation: fade-in-up 1s ease-out forwards;
    }
    
    body.loaded .feature-card {
        animation: fade-in-up 0.8s ease-out forwards;
        animation-delay: calc(var(--index, 0) * 0.1s);
    }
`;

document.head.appendChild(rippleStyles);