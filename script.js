// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

const hamburgerButton = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburgerButton.setAttribute('aria-expanded', 
        navLinks.classList.contains('active'));
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    hamburgerButton.setAttribute('aria-expanded', 'false');
});


console.log('Hamburger button:', hamburgerButton);
console.log('Nav links:', navLinks);