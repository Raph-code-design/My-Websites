document.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    const greeting = document.createElement('p');

    if (hour < 12) {
        greeting.textContent = 'Good Morning! Explore my work.';
    } else if (hour < 18) {
        greeting.textContent = 'Good Afternoon! Explore my work.';
    } else {
        greeting.textContent = 'Good Evening! Explore my work.';
    }

    document.querySelector('.hero').appendChild(greeting);
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 3000);
});

window.addEventListener('beforeprint', () => {
    console.log('Preparing for print...');
});

window.addEventListener('afterprint', () => {
    console.log('Print process completed.');
});

