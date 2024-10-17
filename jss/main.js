// main.js - JavaScript for Interactive Features

document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // Close menu when link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    // Navbar scroll background change
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Floating effect for hero circles
    const circles = document.querySelectorAll('.hero-bg-animation .circle');
    circles.forEach(circle => {
        circle.style.animationDuration = `${Math.random() * 4 + 4}s`;
        circle.style.animationDelay = `${Math.random() * 2}s`;
    });

    // Expertise card hover effect with animation
    const expertiseCards = document.querySelectorAll('.expertise-cards .card');
    expertiseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const heroContent = document.querySelector('.hero-content');
        const scrollPos = window.scrollY;
        heroContent.style.transform = `translateY(${scrollPos * 0.5}px)`;
    });

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imgObserver.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px 300px 0px"
    });

    lazyImages.forEach(img => {
        imgObserver.observe(img);
    });

    // Animated scroll indicator
    const scrollDown = document.querySelector('.scroll-down a');
    scrollDown.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Contact form submission (enhanced)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });

    // Scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
});
