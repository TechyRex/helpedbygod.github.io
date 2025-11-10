// Initialize EmailJS with your public key
(function() {
    // Replace with your actual EmailJS public key
    emailjs.init("mWwIf-4oY-PAx48ZY");
})();

document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvp-form');
    const successMessage = document.getElementById('success-message');
    
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            guests: document.getElementById('guests').value,
            message: document.getElementById('message').value
        };
        
        // Send email using EmailJS
        emailjs.send('service_2yk461r', 'template_58m4l7f', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Show success message
                rsvpForm.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Reset form
                rsvpForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('There was an error submitting your RSVP. Please try again.');
            });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
