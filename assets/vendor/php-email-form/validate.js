document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address');
        return;
    }

    // Phone number validation
    var phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
        alert('Please enter a valide phone number');
        return;
    }

    // If both email and phone are valid, show a success message
    alert('Form submitted successfully!');
});