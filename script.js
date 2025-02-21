// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

const hamburgerButton = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburgerButton.classList.toggle('active');
    hamburgerButton.setAttribute('aria-expanded', 
        navLinks.classList.contains('active'));
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    hamburgerButton.classList.remove('active');
    hamburgerButton.setAttribute('aria-expanded', 'false');
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on user preference
if (prefersDarkScheme.matches) {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌜';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggle.textContent = '🌞';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌜';
    }
});

console.log('Hamburger button:', hamburgerButton);
console.log('Nav links:', navLinks);