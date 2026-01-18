// ============================================
// Clinix - Interactive Functionality
// ============================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    // === Navigation Functionality ===
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    // Scroll behavior for navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Run on load

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (window.innerWidth < 768) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // === Counter Animation (Hero Stats) ===
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    function checkCounters() {
        if (countersAnimated) return;

        const heroSection = document.querySelector('.hero');
        const heroPosition = heroSection.getBoundingClientRect();

        if (heroPosition.top < window.innerHeight && heroPosition.bottom > 0) {
            statNumbers.forEach(stat => animateCounter(stat));
            countersAnimated = true;
        }
    }

    window.addEventListener('scroll', checkCounters);
    checkCounters(); // Check on load

    // === Scroll Reveal Animation ===
    const revealElements = document.querySelectorAll('.service-card, .doctor-card, .testimonial-card, .contact-card');

    function reveal() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('reveal', 'active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Run on load

    // === Appointment Form Handling ===
    const appointmentForm = document.getElementById('appointmentForm');
    const appointmentMessage = document.getElementById('formMessage');

    if (appointmentForm) {
        // Set minimum date to today
        const dateInput = document.getElementById('preferredDate');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(appointmentForm);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.fullName || !data.email || !data.phone || !data.service || !data.preferredDate || !data.preferredTime) {
                showMessage(appointmentMessage, 'Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showMessage(appointmentMessage, 'Please enter a valid email address.', 'error');
                return;
            }

            // Phone validation (basic)
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(data.phone)) {
                showMessage(appointmentMessage, 'Please enter a valid phone number.', 'error');
                return;
            }

            // Simulate API call
            showMessage(appointmentMessage, 'Processing your appointment...', 'success');

            setTimeout(() => {
                showMessage(
                    appointmentMessage,
                    'Appointment request submitted successfully! We will contact you within 24 hours to confirm.',
                    'success'
                );

                // Reset form
                appointmentForm.reset();

                // Log data (in production, this would be sent to server)
                console.log('Appointment Data:', data);
            }, 1500);
        });
    }

    // === Contact Form Handling ===
    const contactForm = document.getElementById('contactForm');
    const contactMessage = document.getElementById('contactFormMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.contactName || !data.contactEmail || !data.subject || !data.message) {
                showMessage(contactMessage, 'Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.contactEmail)) {
                showMessage(contactMessage, 'Please enter a valid email address.', 'error');
                return;
            }

            // Simulate API call
            showMessage(contactMessage, 'Sending your message...', 'success');

            setTimeout(() => {
                showMessage(
                    contactMessage,
                    'Message sent successfully! We will get back to you soon.',
                    'success'
                );

                // Reset form
                contactForm.reset();

                // Log data (in production, this would be sent to server)
                console.log('Contact Data:', data);
            }, 1500);
        });
    }

    // === Helper Functions ===
    function showMessage(element, message, type) {
        if (!element) return;

        element.textContent = message;
        element.className = 'form-message ' + type;
        element.style.display = 'block';

        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                element.style.display = 'none';
            }, 5000);
        }
    }

    // === Load Doctor Images ===
    // Replace placeholder images with generated ones
    const doctorImages = {
        'doctorSarah': 'assets/doctor_sarah_1768695603748.png',
        'doctorMichael': 'assets/doctor_michael_1768695620650.png',
        'doctorEmily': 'assets/doctor_emily_1768695637116.png'
    };

    Object.keys(doctorImages).forEach(id => {
        const img = document.getElementById(id);
        if (img) {
            img.src = doctorImages[id];
            img.onerror = function () {
                // Fallback to gradient if image fails to load
                console.log(`Failed to load image for ${id}, using fallback`);
            };
        }
    });

    // === Phone Number Formatting ===
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = value;
                } else if (value.length <= 6) {
                    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
                } else {
                    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
                }
            }
            e.target.value = value;
        });
    });

    // === Smooth Scroll for All Internal Links ===
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // === Performance: Lazy Loading for Images ===
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // === Background: Update Hero Background ===
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        // Add subtle parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            if (scrolled < window.innerHeight) {
                heroBackground.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        });
    }

    // === Accessibility: Keyboard Navigation ===
    document.addEventListener('keydown', function (e) {
        // Close mobile menu on Escape
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // === Focus management for forms ===
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            this.parentElement.classList.remove('focused');
        });
    });

    // === Console Welcome Message ===
    console.log('%cClinix Medical Center', 'font-size: 24px; font-weight: bold; color: #0A4D8C;');
    console.log('%cQuality Care, Close to You', 'font-size: 14px; color: #1E88E5;');
    console.log('Website loaded successfully ✓');
});

// === Service Worker Registration (for future PWA support) ===
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}
