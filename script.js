// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Destroy existing typed instance if it exists
if (typeof typed !== 'undefined') {
    typed.destroy();
}

// Initialize Typed.js with new configuration
document.addEventListener('DOMContentLoaded', function() {
    typed = new Typed('.typed-text', {
        strings: [
            'Backend Developer',
            'Ethical Hacker',
            'Cybersecurity Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        startDelay: 300
    });
});

// Initialize Tippy.js
tippy('[data-tippy-content]');

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize Particles.js
particlesJS('particles-container', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#2563eb'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#2563eb',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Simple function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Update CSS variables for dark mode
    if (body.classList.contains('dark-mode')) {
        document.documentElement.style.setProperty('--background', '#0f172a');
        document.documentElement.style.setProperty('--text', '#f8fafc');
        document.documentElement.style.setProperty('--light-text', '#94a3b8');
        document.documentElement.style.setProperty('--border', '#334155');
        document.documentElement.style.setProperty('--card-bg', '#1e293b');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.style.setProperty('--background', '#ffffff');
        document.documentElement.style.setProperty('--text', '#1e293b');
        document.documentElement.style.setProperty('--light-text', '#64748b');
        document.documentElement.style.setProperty('--border', '#e2e8f0');
        document.documentElement.style.setProperty('--card-bg', '#f8fafc');
        localStorage.setItem('darkMode', 'false');
    }
    
    // Update moon/sun icon
    const themeToggle = document.getElementById('fixed-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = body.classList.contains('dark-mode') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    }
}

// Add click listeners to theme toggle and fixed toggle button
document.addEventListener('DOMContentLoaded', function() {
    const fixedToggle = document.getElementById('fixed-toggle');
    
    if (fixedToggle) {
        fixedToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Check for dark mode preference in localStorage and system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode === 'true' || (savedDarkMode === null && prefersDark)) {
        toggleDarkMode();
    }
    
    // Add keyboard shortcut (Shift+D)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'D' && e.shiftKey) {
            toggleDarkMode();
        }
    });
});

// Form handling without animation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formDataObj = Object.fromEntries(formData);
        
        // Log form data (in a real app, you would send this to the server)
        console.log('Form submitted:', formDataObj);
        
        // Just reset the form without showing success message
        contactForm.reset();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}); 