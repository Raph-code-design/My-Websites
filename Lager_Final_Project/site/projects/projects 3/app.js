// Select elements for modal, form, and movie list
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.querySelector(".close-btn");

// Open the modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close the modal on 'x' click
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
document.getElementById("movie-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const rating = document.getElementById("rating").value;
    const genre = document.getElementById("genre").value;

    // Create a new movie item and add it to the grid
    const movieItem = document.createElement("div");
    movieItem.className = "movie-item";
    movieItem.innerHTML = `<h3>${title}</h3><p>Rating: ${rating}/10</p><p>Genre: ${genre}</p>`;
    document.getElementById("watched-movies-list").appendChild(movieItem);

    modal.style.display = "none"; // Close modal after adding
    document.getElementById("movie-form").reset(); // Clear form
});
