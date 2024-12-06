document.getElementById('filter').addEventListener('change', (e) => {
    const category = e.target.value;
    const cards = document.querySelectorAll('.project-cards .card');

    cards.forEach((card) => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filterDropdown = document.getElementById('filter');
    const projectCards = document.querySelectorAll('.project-cards .card');

    if (filterDropdown) {
        filterDropdown.addEventListener('change', () => {
            const selectedCategory = filterDropdown.value;

            projectCards.forEach((card) => {
                const category = card.getAttribute('data-category');

                if (selectedCategory === 'all' || selectedCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    } else {
        console.error('Dropdown menu not found in the DOM.');
    }
});



