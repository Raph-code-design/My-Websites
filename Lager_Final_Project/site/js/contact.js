document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the form from submitting normally.
    const name = document.getElementById('name').value; // Gets the value of the name input.
    const email = document.getElementById('email').value; // Gets the value of the email input.

    if (name && email) {
        alert('Thank you for your submission!');
    } else {
        alert('Please fill out all required fields.');
    }
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value; // Gets the value of the name input.
    const email = document.getElementById('email').value; // Gets the value of the email inpu
    const company = document.getElementById('company').value || 'N/A'; // Gets the value of the company input or defaults to 'N/A'.
    const qualities = document.getElementById('qualities').value || 'N/A'; // Gets the value of the qualities textarea or defaults to 'N/A'.


    const summary = `
      Thank you, ${name}! Here are the details you submitted:
      - Email: ${email}
      - Company: ${company}
      - Qualities: ${qualities}
    `;

    alert(summary); // Displays a summary of the user's input in an alert box.
});
