$(document).ready(function () {
    // Target the form elements
    const subscriptionForm = $('#subscription-form');

    // Add a click event listener to the submit button
    subscriptionForm.on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const emailInput = $('#email-input');
        const email = emailInput.val(); // Get the input value

        // Check if the email is not empty
        if (email.trim() !== '') {
            const formData = { email: email }; // Create form data object

            // Make a POST request using Axios
            axios.post('https://withinhere.mmoyoafrica.com/subscribe', formData)
                .then(response => {
                    alert("Email successfully subscribed");
                    // Clear the input field after successful submission
                    emailInput.val('');
                })
                .catch(error => {
                    alert("Error: Email not subscribed");
                    console.error('Error subscribing:', error);
                });
        } else {
            alert("Email field is empty");
        }
    });
});
