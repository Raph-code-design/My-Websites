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
    const slides = document.querySelectorAll('.slide'); // Selects all slides in the carousel.
    let currentSlide = 0; // Tracks the index of the current slide.


    function showNextSlide() {
        slides[currentSlide].classList.remove('active'); // Removes 'active' class from the current slide.
        currentSlide = (currentSlide + 1) % slides.length; // Updates the index to the next slide.
        slides[currentSlide].classList.add('active'); // Adds 'active' class to the new slide.
    }

    setInterval(showNextSlide, 3000); // Automatically changes slides every 3 seconds.
});

window.addEventListener('beforeprint', () => {
    console.log('Preparing for print...');
});

window.addEventListener('afterprint', () => {
    console.log('Print process completed.');
});

