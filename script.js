// Tagline Animation
const taglineElement = document.getElementById('tagline');
const taglines = [
    'I am Vibe Coder',
    'I am Developer',
    'I am Problem Solver'
];

let currentTaglineIndex = 0;

function updateTagline() {
    taglineElement.style.opacity = '0';
    taglineElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
        taglineElement.textContent = taglines[currentTaglineIndex];
        taglineElement.style.opacity = '1';
        taglineElement.style.transform = 'translateY(0)';
    }, 500);
}

// Start the tagline animation
setInterval(updateTagline, 3000);

// Smooth scroll for navigation (if needed)
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

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initialize first section visibility
const firstSection = document.querySelector('.section');
if (firstSection) {
    firstSection.style.opacity = '1';
    firstSection.style.transform = 'translateY(0)';
}

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
}

