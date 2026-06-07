document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Header Scroll Effect
       ========================================================================== */
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially on load

    /* ==========================================================================
       Mobile Navigation Menu
       ========================================================================== */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('open')) {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            }
        });
    }

    /* ==========================================================================
       Active Link Highlighting on Scroll
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNav = () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120; // offset for sticky header
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-list a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-list a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    };
    
    window.addEventListener('scroll', highlightNav);

    /* ==========================================================================
       Services Tab Switcher
       ========================================================================== */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding pane
            const targetId = button.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       Reviews Slider (Carousel)
       ========================================================================== */
    const slides = document.querySelectorAll('.review-slide');
    const prevBtn = document.getElementById('prev-review');
    const nextBtn = document.getElementById('next-review');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentSlide = 0;
    let autoSlideInterval;

    const showSlide = (index) => {
        // Handle boundary conditions
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to the selected slide and dot
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    // Auto-slide setup
    const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, 7000); // changes slides every 7 seconds
    };

    const stopAutoSlide = () => {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    };

    // Controls Event Listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoSlide(); // Reset timer on click
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoSlide(); // Reset timer on click
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            startAutoSlide(); // Reset timer on click
        });
    });

    // Start auto slide initially
    startAutoSlide();

    // Pause auto-sliding on hover
    const sliderContainer = document.querySelector('.reviews-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    /* ==========================================================================
       Contact Form Submission Mock-up
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Retrieve values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            
            // Validate basic inputs
            if (!name || !email || !message) {
                formFeedback.textContent = "Please fill in all required fields.";
                formFeedback.className = "form-feedback error";
                return;
            }
            
            // Show sending feedback
            formFeedback.textContent = "Sending your inquiry...";
            formFeedback.className = "form-feedback success";
            formFeedback.style.color = "#DFA54E";
            
            // Simulate API request delay
            setTimeout(() => {
                formFeedback.textContent = `Thank you, ${name}! Your inquiry has been received. We'll contact you shortly.`;
                formFeedback.style.color = "#4BB543";
                formFeedback.className = "form-feedback success";
                contactForm.reset();
            }, 1500);
        });
    }
});
