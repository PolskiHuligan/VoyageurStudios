// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth Scroll for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Server Status Checker (Simulated)
    const serverStatusElements = document.querySelectorAll('.server-status');
    serverStatusElements.forEach(element => {
        const status = Math.random() > 0.1 ? 'online' : 'offline';
        
        if (status === 'online') {
            element.textContent = '🟢 ONLINE';
            element.classList.add('text-green-500');
        } else {
            element.textContent = '🔴 OFFLINE';
            element.classList.add('text-red-500');
        }
    });

    // Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic form validation
            const nameInput = contactForm.querySelector('input[name="name"]');
            const emailInput = contactForm.querySelector('input[name="email"]');
            const messageInput = contactForm.querySelector('textarea[name="message"]');
            
            if (nameInput.value.trim() === '' || 
                emailInput.value.trim() === '' || 
                messageInput.value.trim() === '') {
                alert('Please fill out all fields.');
                return;
            }

            // Simulated form submission
            alert('Message sent! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

// Light/Dark Mode Toggle (Optional Enhancement)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check for saved dark mode preference
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

// script.js - Enhanced Animation Logic
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    function checkScroll() {
        const reveals = document.querySelectorAll('.scroll-reveal');
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('is-visible');
            } else {
                reveal.classList.remove('is-visible');
            }
        });

        // Stagger Items Animation
        const staggerItems = document.querySelectorAll('.stagger-item');
        staggerItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const itemPoint = 150;

            if (itemTop < windowHeight - itemPoint) {
                item.classList.add('is-visible');
            } else {
                item.classList.remove('is-visible');
            }
        });
    }

    // Initial check and add scroll listener
    checkScroll();
    window.addEventListener('scroll', checkScroll);

    // Hero Section Typing Effect
    const heroText = document.querySelector('.hero-typing-effect');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        
        let index = 0;
        function typeWriter() {
            if (index < text.length) {
                heroText.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter();
    }

    // Parallax Effect for Background
    window.addEventListener('mousemove', (e) => {
        const parallaxEls = document.querySelectorAll('.parallax-layer');
        parallaxEls.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.5;
            const x = (e.clientX * speed) / 250;
            const y = (e.clientY * speed) / 250;
            
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Navigation Animations
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.color = 'var(--vs-light-purple)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.color = '';
        });
    });

    // Button Pulse Animation
    const ctaButtons = document.querySelectorAll('.animate-pulse-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('animate-pulse');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('animate-pulse');
        });
    });
});