// Modify DOM on button click
document.addEventListener('DOMContentLoaded', function () {
    const featuredText = document.querySelector('.highlighted-destination h2');
    const featuredSection = document.querySelector('.highlighted-destination');

    featuredSection.addEventListener('click', function () {
        featuredText.textContent = "Santorini - A Romantic Getaway!";
        featuredSection.style.backgroundColor = '#d4e157';
    });
});

const navItems = [
    { text: 'Home', url: '#home' },
    { text: 'About', url: '#about' },
    { text: 'Services', url: '#services' },
    { text: 'Contact', url: '#contact' }
];

