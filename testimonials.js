// Testimonials carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load the testimonials from the JSON file
    fetch('js/recommendations_translated.json')
        .then(response => response.json())
        .then(data => {
            const testimonialsContainer = document.getElementById('testimonials-container');
            
            // Clear any existing content
            testimonialsContainer.innerHTML = '';
            
            // Create testimonial slides
            data.forEach((testimonial, index) => {
                const slide = document.createElement('div');
                slide.className = 'testimonial-slide';
                if (index === 0) {
                    slide.classList.add('active');
                }
                
                const content = `
                    <div class="testimonial-content">
                        <div class="testimonial-text">
                            <p>"${testimonial.translatedText}"</p>
                        </div>
                        <div class="testimonial-author">
                            <h4>${testimonial.firstName} ${testimonial.lastName}</h4>
                            <p>${testimonial.jobTitle}</p>
                            <p>${testimonial.company}</p>
                        </div>
                    </div>
                `;
                
                slide.innerHTML = content;
                testimonialsContainer.appendChild(slide);
            });
            
            // Initialize the carousel
            initTestimonialCarousel();
        })
        .catch(error => console.error('Error loading testimonials:', error));
});

function initTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    
    // Create navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'testimonial-dots';
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'testimonial-dot';
        if (i === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }
    
    document.querySelector('.testimonials-section').appendChild(dotsContainer);
    
    // Create navigation arrows
    const prevButton = document.createElement('button');
    prevButton.className = 'testimonial-nav prev';
    prevButton.innerHTML = '&#10094;';
    prevButton.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    const nextButton = document.createElement('button');
    nextButton.className = 'testimonial-nav next';
    nextButton.innerHTML = '&#10095;';
    nextButton.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    
    document.querySelector('.testimonials-section').appendChild(prevButton);
    document.querySelector('.testimonials-section').appendChild(nextButton);
    
    // Auto-advance the carousel
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 10000);
    
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        document.querySelectorAll('.testimonial-dot')[currentSlide].classList.remove('active');
        
        currentSlide = (n + totalSlides) % totalSlides;
        
        slides[currentSlide].classList.add('active');
        document.querySelectorAll('.testimonial-dot')[currentSlide].classList.add('active');
    }
}
