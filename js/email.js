// Initialize EmailJS
(function() {
    emailjs.init("xbOrzWtMFyWGMUxMQ"); // Replace 'YOUR_USER_ID' with your actual EmailJS User ID
})();

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Send the email using EmailJS
    emailjs.send('service_kzn1fhi', 'template_diylt8f', templateParams)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Optionally reset the form
        }, function(error) {
            console.error('Failed to send the message:', error);
            alert('Failed to send the message. Please try again.');
        });
});
