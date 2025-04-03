// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Loader Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    
    gsap.to('.loader-content h1', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.loader-content p', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        delay: 2,
        onComplete: () => {
            loader.style.display = 'none';
            animateHero();
        }
    });
});

// Hero Section Animation
function animateHero() {
    gsap.to('.animate-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.animate-text-delay', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
}

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Scroll Animations
function initScrollAnimations() {
    // About Section
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%'
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Services Section
    // Services Section Animation Fix
    document.addEventListener('DOMContentLoaded', function() {
        // Make sure service cards are visible by default
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.style.opacity = '1';
        });
        
        // Modify the existing service card animation to be less aggressive
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services',
                start: 'top 80%',
                once: true
            },
            opacity: 0.5, // Start from partial opacity instead of 0
            y: 20, // Smaller y-offset
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        });
    });
    
    // Gallery Section
    gsap.from('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery',
            start: 'top 80%'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // Contact Section
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%'
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Section Headers Animation
    gsap.from('.section-header', {
        scrollTrigger: {
            trigger: '.section-header',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
}

// Initialize scroll animations
initScrollAnimations();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Image hover effect for gallery
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('img'), {
            scale: 1.05,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('img'), {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// Form animation and validation
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

formInputs.forEach(input => {
    // Initial check for pre-filled inputs
    if (input.value) {
        input.parentElement.classList.add('active');
    }
    
    // Focus and blur events
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('active');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('active');
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        let isValid = true;
        const formInputs = this.querySelectorAll('input, textarea, select');
        
        formInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        if (isValid) {
            // Show success message
            const formGroups = this.querySelectorAll('.form-group');
            const submitBtn = this.querySelector('button[type="submit"]');
            
            gsap.to(formGroups, {
                opacity: 0,
                y: -20,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power2.out'
            });
            
            gsap.to(submitBtn, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => {
                    // Replace form with success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = `
                        <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                        <h3>Thank You!</h3>
                        <p>Your appointment request has been received. We'll contact you shortly to confirm your booking.</p>
                    `;
                    
                    this.innerHTML = '';
                    this.appendChild(successMessage);
                    
                    gsap.from('.success-message', {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        ease: 'power3.out'
                    });
                }
            });
            
            // In a real application, you would send the form data to a server here
            console.log('Form submitted successfully');
        }
    });
}

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        const scrollPosition = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
});

// Testimonials carousel (if you decide to add testimonials section later)
function initTestimonialsCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    if (testimonials.length === 0) return;
    
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            if (i === index) {
                gsap.to(item, {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            } else {
                gsap.to(item, {
                    opacity: 0,
                    x: i < index ? -50 : 50,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            }
        });
    }
    
    // Initialize first testimonial
    showTestimonial(currentIndex);
    
    // Next and previous buttons
    const nextBtn = document.querySelector('.testimonial-next');
    const prevBtn = document.querySelector('.testimonial-prev');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });
    }
    
    // Auto-play
    let interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
    
    // Pause auto-play on hover
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        
        testimonialsContainer.addEventListener('mouseleave', () => {
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(currentIndex);
            }, 5000);
        });
    }
}

// Call the function in case you add testimonials later
document.addEventListener('DOMContentLoaded', () => {
    initTestimonialsCarousel();
});

// Reveal animations for sections
function revealSections() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => {
                section.classList.add('revealed');
            }
        });
    });
}

revealSections();

// Add CSS styles for the revealed class in your CSS file
// .revealed { animation: revealSection 1s forwards; }
// @keyframes revealSection { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

// Image lazy loading
const lazyImages = document.querySelectorAll('img[data-src]');
if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => {
                    img.removeAttribute('data-src');
                    gsap.to(img, {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                };
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// Back to top button
const createBackToTopButton = () => {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createBackToTopButton();

// Add CSS for back to top button in your CSS file
// .back-to-top { position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px; border-radius: 50%; background: var(--primary-color); color: white; border: none; cursor: pointer; opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 99; }
// .back-to-top.visible { opacity: 1; visibility: visible; }
// .back-to-top:hover { background: var(--secondary-color); transform: translateY(-5px); }

// Service hover effects
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Add cursor effects (optional)
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    document.addEventListener('mousemove', e => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        gsap.to(cursorDot, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
    });
    
    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .gallery-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorDot.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorDot.classList.remove('active');
        });
    });
}

// Uncomment to enable custom cursor
// createCustomCursor();

// Add CSS for custom cursor in your CSS file
// .custom-cursor { position: fixed; width: 30px; height: 30px; border: 1px solid var(--primary-color); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); z-index: 9999; transition: width 0.3s, height 0.3s; }
// .cursor-dot { position: fixed; width: 5px; height: 5px; background-color: var(--primary-color); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); z-index: 9999; }
// .custom-cursor.active { width: 50px; height: 50px; background-color: rgba(201, 169, 143, 0.1); }
// .cursor-dot.active { background-color: var(--primary-color); }

// Initialize AOS (Animate On Scroll) alternative with GSAP
function initAOSAlternative() {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-up, .fade-left, .fade-right');
    
    animatedElements.forEach(element => {
        let animation = {};
        
        if (element.classList.contains('fade-in')) {
            animation = {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            };
        } else if (element.classList.contains('fade-up')) {
            animation = {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power2.out'
            };
        } else if (element.classList.contains('fade-left')) {
            animation = {
                opacity: 0,
                x: -50,
                duration: 0.8,
                ease: 'power2.out'
            };
        } else if (element.classList.contains('fade-right')) {
            animation = {
                opacity: 0,
                x: 50,
                duration: 0.8,
                ease: 'power2.out'
            };
        }
        
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            ...animation
        });
    });
}

initAOSAlternative();