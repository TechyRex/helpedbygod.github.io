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
            document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Handle form submission
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(registrationForm);
            const fullName = formData.get('fullName');
            const email = formData.get('email');
            
            confirmationMessage.style.display = 'block';
            document.getElementById('guestName').textContent = fullName;
            registrationForm.style.display = 'none';
            
            sendInvitationEmail(fullName, email);
            confirmationMessage.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Close modal
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

// Function to send invitation email (EmailJS integration)
function sendInvitationEmail(fullName, email) {
    const serviceID = "service_2yk461r";
    const templateID = "template_58m4l7f";

    // GOLD CLASSIC INVITATION TEMPLATE
    const emailHTML = `
    <div style="font-family: 'Georgia', serif; background: linear-gradient(135deg, #fffdf7 0%, #fdf8ec 100%); color: #3b2f2f; padding: 40px 30px; border-radius: 20px; max-width: 650px; margin: auto; border: 2px solid #e6cf91; box-shadow: 0 10px 25px rgba(0,0,0,0.08);">
      <div style="border: 3px double #d4af37; border-radius: 16px; padding: 35px 25px; background-color: #fffdf8;">
        <div style="text-align: center; margin-bottom: 25px;">
          <h1 style="color: #bfa14a; font-size: 36px; margin-bottom: 5px; letter-spacing: 1px;">Wedding Invitation</h1>
          <p style="font-size: 17px; color: #6b5c2d; margin: 0;">The honor of your presence is requested</p>
          <hr style="width: 80px; border: none; border-top: 2px solid #d4af37; margin: 20px auto;">
        </div>

        <div style="text-align: center;">
          <p style="font-size: 18px; margin-bottom: 10px;">As we,</p>
          <h2 style="font-size: 28px; color: #bfa14a; margin: 5px 0;">Bolu <span style="color:#8c7a3b;">&amp;</span> Samuel</h2>
          <p style="font-size: 18px; margin: 10px 0;">join our hearts and lives together</p>
        </div>

        <div style="text-align: center; margin-top: 25px;">
          <p style="font-size: 17px; line-height: 1.6; color: #4b3f27;">
            We warmly invite you, <strong>${fullName}</strong>, to celebrate this special day with us.
          </p>

          <div style="background-color: #fff8e1; border: 1px solid #e6cf91; border-radius: 10px; padding: 20px; display: inline-block; margin-top: 15px;">
            <p style="font-size: 17px; margin: 8px 0;"><strong>Date:</strong> November 19, 2025</p>
            <p style="font-size: 17px; margin: 8px 0;"><strong>Venue:</strong> Ikorodu, Lagos</p>
          </div>
        </div>

        <p style="font-size: 17px; line-height: 1.6; margin-top: 30px; text-align: center; color: #5b4a2b;">
          Your love, prayers, and presence will make our day truly golden ✨
        </p>

        <div style="text-align: center; margin-top: 35px;">
          <p style="font-size: 16px; font-style: italic; color: #7c6a3a;">
            With all our love,<br>
            <strong style="color: #bfa14a;">Bolu &amp; Samuel</strong>
          </p>
        </div>
      </div>

      <p style="margin-top: 25px; font-size: 12px; text-align: center; color: #9c8f6a;">
        Powered by CloudClaxx Technologies.
      </p>
    </div>`;

    const templateParams = {
        to_email: email,
        to_name: fullName,
       
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(response => {
            console.log("✅ Email sent successfully!", response.status, response.text);
            alert(`A beautiful invitation has been sent to ${fullName}!`);
        })
        .catch(error => {
            console.error("❌ Failed to send email:", error);
            alert("Something went wrong while sending your invitation. Please try again.");
        });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

