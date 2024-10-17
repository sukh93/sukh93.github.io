// Main JavaScript file for interactive functionality

// Scroll animations using AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200,
        once: true  // Animations occur only once when scrolling down
    });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Basic form validation
        const name = document.querySelector('input[name="name"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();
        
        if (name && email && message) {
            alert('Thank you for reaching out! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
}

// Add hover effects to project cards
document.querySelectorAll('.project-cards .card').forEach(card => {
    card.addEventListener('mouseover', function() {
        card.style.transform = 'scale(1.1)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });
    card.addEventListener('mouseout', function() {
        card.style.transform = 'scale(1)';
    });
});
