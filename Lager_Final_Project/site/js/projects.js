document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        // Remove the 'active' class from the current slide
        slides[currentSlide].classList.remove('active');

        // Increment the current slide index
        currentSlide = (currentSlide + 1) % slides.length;

        // Add the 'active' class to the new current slide
        slides[currentSlide].classList.add('active');
    }

    // Automatically change slides every 3 seconds
    setInterval(showNextSlide, 3000);
});


document.addEventListener('DOMContentLoaded', () => {
    const filterDropdown = document.getElementById('filter'); // Selects the dropdown menu.
    const projectCards = document.querySelectorAll('.project-cards .card'); // Selects all project cards.

    filterDropdown.addEventListener('change', () => { // Event listener for dropdown changes.
        const selectedCategory = filterDropdown.value; // Gets the selected category.

        projectCards.forEach((card) => { // Loops through each project card.
            const category = card.getAttribute('data-category'); // Gets the category of the card.

            if (selectedCategory === 'all' || selectedCategory === category) {
                card.style.display = 'block'; // Shows the card if it matches the selected category.
            } else {
                card.style.display = 'none'; // Hides the card if it doesn't match.
            }
        });
    });
});




