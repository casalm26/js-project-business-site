const hamburgerButton = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerButton.addEventListener('click', () => {
    console.log('Button clicked!'); // Debug line to verify click is registered
    navMenu.classList.toggle('active');
});

// Add this to verify elements are found
console.log('Hamburger button:', hamburgerButton);
console.log('Nav menu:', navMenu);