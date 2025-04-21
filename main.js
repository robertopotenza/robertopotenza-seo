/* Main JavaScript with enhanced interactions */
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    const scrollTop = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            scrollTop.classList.add('active');
        } else {
            header.classList.remove('scrolled');
            scrollTop.classList.remove('active');
        }
    });
    
    // Mobile menu toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (mobileNavToggle) {
                        mobileNavToggle.querySelector('i').classList.add('fa-bars');
                        mobileNavToggle.querySelector('i').classList.remove('fa-times');
                    }
                }
            }
        });
    });
    
    // Active menu item on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Testimonials slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelector('.testimonial-dots');
    const testimonialPrev = document.querySelector('.testimonial-nav.prev');
    const testimonialNext = document.querySelector('.testimonial-nav.next');
    
    if (testimonialSlides.length > 0) {
        let currentSlide = 0;
        
        // Create dots
        if (testimonialDots) {
            testimonialSlides.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('testimonial-dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => showSlide(index));
                testimonialDots.appendChild(dot);
            });
        }
        
        // Show slide function
        function showSlide(index) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            document.querySelectorAll('.testimonial-dot').forEach(dot => dot.classList.remove('active'));
            
            testimonialSlides[index].classList.add('active');
            if (testimonialDots) {
                document.querySelectorAll('.testimonial-dot')[index].classList.add('active');
            }
            currentSlide = index;
        }
        
        // Next slide
        if (testimonialNext) {
            testimonialNext.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % testimonialSlides.length;
                showSlide(currentSlide);
            });
        }
        
        // Previous slide
        if (testimonialPrev) {
            testimonialPrev.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
                showSlide(currentSlide);
            });
        }
        
        // Auto slide
        setInterval(() => {
            if (document.hasFocus()) {
                currentSlide = (currentSlide + 1) % testimonialSlides.length;
                showSlide(currentSlide);
            }
        }, 5000);
    }
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroSection && heroBg) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const heroHeight = heroSection.offsetHeight;
            
            if (scrollPosition <= heroHeight) {
                const parallaxOffset = scrollPosition * 0.4;
                heroBg.style.transform = `translateY(${parallaxOffset}px)`;
            }
        });
    }
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animateElements.length > 0) {
        const animateElementsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    animateElementsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(element => {
            animateElementsObserver.observe(element);
        });
    }
    
    // Micro-interactions for buttons and links
    const interactiveElements = document.querySelectorAll('a, button, .achievement-card, .project-item, .media-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('hover-effect');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('hover-effect');
        });
        
        element.addEventListener('click', function() {
            this.classList.add('click-effect');
            setTimeout(() => {
                this.classList.remove('click-effect');
            }, 300);
        });
    });
    
    // Lazy loading images
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        lazyImages.forEach(function(img) {
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
        });
    }
    
    // Contact form submission with validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const formElements = contactForm.elements;
            
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].hasAttribute('required') && !formElements[i].value.trim()) {
                    isValid = false;
                    formElements[i].classList.add('error');
                } else {
                    formElements[i].classList.remove('error');
                }
            }
            
            if (isValid) {
                // Here you would typically send the form data to a server
                // For now, we'll just show a success message
                
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };
                
                console.log('Form submitted:', formData);
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'form-success';
                successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message. I will get back to you soon!';
                
                contactForm.reset();
                contactForm.appendChild(successMessage);
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
    
    // CV download tracking
    const cvDownloadButton = document.getElementById('cvDownload');
    
    if (cvDownloadButton) {
        cvDownloadButton.addEventListener('click', function() {
            console.log('CV downloaded');
            // Here you could add analytics tracking code
        });
    }
    
    // Scroll to top button
    const scrollTopButton = document.querySelector('.scroll-top');
    
    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add fade-in animations to sections
    const fadeInSections = document.querySelectorAll('.section');
    
    fadeInSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
