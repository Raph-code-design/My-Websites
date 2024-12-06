document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert('Thank you for your submission!');
    } else {
        alert('Please fill out all required fields.');
    }
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value || 'N/A';
    const qualities = document.getElementById('qualities').value || 'N/A';

    const summary = `
      Thank you, ${name}! Here are the details you submitted:
      - Email: ${email}
      - Company: ${company}
      - Qualities: ${qualities}
    `;

    alert(summary);
});
