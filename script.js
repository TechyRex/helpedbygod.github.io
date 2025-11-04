// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('November 19, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector('.countdown-timer').innerHTML = '<h3>The Wedding Has Arrived!</h3>';
    }
}

// Initialize countdown
const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// Registration Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    const registrationForm = document.getElementById('registrationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const modal = document.getElementById('registrationModal');
    const closeModal = document.getElementById('closeModal');

    // Open modal when register button is clicked
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            // Scroll to registration section
            document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Handle form submission
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(registrationForm);
            const fullName = formData.get('fullName');
            const email = formData.get('email');
            
            // Show confirmation message
            confirmationMessage.style.display = 'block';
            document.getElementById('guestName').textContent = fullName;
            
            // Hide the form
            registrationForm.style.display = 'none';
            
            // In a real implementation, you would send this data to Resend API
            sendInvitationEmail(fullName, email);
            
            // Scroll to confirmation message
            confirmationMessage.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Close modal when close button is clicked
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Function to send invitation email (placeholder for Resend integration)
function sendInvitationEmail(fullName, email) {
    // This is where you would integrate with Resend API
    // For now, we'll just log the data
    console.log(`Sending invitation to: ${fullName} (${email})`);
    
    // Example of what the Resend API call might look like:
    
    fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 're_ZwcRgxEr_QCs2MdzrQFTQoMN599ECraha'
        },
        body: JSON.stringify({
            from: 'cloudclaxxafrica@gmail.com',
            to: email,
            subject: `Your Personalized Invitation - Bolu & Samuel's Wedding`,
            html: `
                <h1>You're Invited!</h1>
                <p>Dear ${fullName},</p>
                <p>We're delighted to invite you to our wedding celebration!</p>
                <p><strong>Bolu & Samuel</strong></p>
                <p><strong>November 19, 2025</strong></p>
                <p>We can't wait to celebrate with you!</p>
                <p>With love,<br>Bolu & Samuel</p>
            `
        })
    })
    .then(response => response.json())
    .then(data => console.log('Email sent:', data))
    .catch(error => console.error('Error sending email:', error));
    
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});