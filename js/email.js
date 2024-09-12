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
            showNotification('Message sent successfully!', 'success');
            document.getElementById('contact-form').reset(); // Optionally reset the form
        }, function(error) {
            showNotification('Failed to send the message. Please try again.', 'error');
            console.error('Failed to send the message:', error);
        });
});

// Function to show notifications
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification show'; // Show the notification

    // Change color based on notification type
    if (type === 'success') {
        notification.style.backgroundColor = '#4caf50'; // Green for success
    } else {
        notification.style.backgroundColor = '#f44336'; // Red for error
    }

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.className = 'notification hidden';
    }, 3000);
}
