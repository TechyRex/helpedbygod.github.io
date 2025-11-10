// This is a template for the EmailJS email that will be sent to guests
// You'll need to set this up in your EmailJS account

// Template ID: wedding_invitation
// Template Name: Wedding Invitation


Template Content:

Subject: Your Invitation to Boluwatife & Mosimileoluwa's Wedding

HTML Content:

<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #222222;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 2px solid #D4AF37;
      margin-bottom: 30px;
    }
    .couple-names {
      font-size: 2.5rem;
      font-weight: 300;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }
    .wedding-date {
      font-size: 1.2rem;
      color: #666;
    }
    .wedding-theme {
      font-size: 1rem;
      color: #D4AF37;
      font-style: italic;
      margin-top: 5px;
    }
    .invitation-body {
      background: #F9F9F9;
      padding: 30px;
      border-radius: 10px;
      margin: 20px 0;
    }
    .greeting {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
    .details {
      margin: 20px 0;
    }
    .detail-item {
      margin-bottom: 10px;
    }
    .rsvp-info {
      background: #D4AF37;
      color: white;
      padding: 15px;
      border-radius: 5px;
      text-align: center;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      font-size: 0.9rem;
      color: #666;
    }
    .btn {
      display: inline-block;
      background: #D4AF37;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      margin: 10px 5px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 class="couple-names">Boluwatife & Mosimileoluwa</h1>
    <p class="wedding-date">November 19th, 2025</p>
    <p class="wedding-theme">HelpedbyGod25</p>
  </div>
  
  <div class="invitation-body">
    <p class="greeting">Dear {{name}},</p>
    
    <p>We are delighted to invite you to celebrate our wedding day with us!</p>
    
    <div class="details">
      <div class="detail-item"><strong>Date:</strong> Wednesday 19th, November, 2025</div>
      <div class="detail-item"><strong>Time:</strong> 9:00 AM</div>
      <div class="detail-item"><strong>Location:</strong> Haven Hotel Ikorodu, Sawmill Bus Stops, <br> Okegbegun Adjacent Enyo Filling Station before Laspotech First Gate, Lagos</div>
    </div>
    
    <p>Your presence at our wedding means the world to us. We can't wait to share this special day with you.</p>
    
    <div class="rsvp-info">
      <p><strong>You have successfully RSVP'd for {{guests}} guest(s).</strong></p>
    </div>
    
    <p>For more information about our wedding, please visit our wedding website.</p>
    
    <div style="text-align: center; margin: 25px 0;">
      <a href="https://boluwatife28.pixieset.com/guestlogin/helpedbygod25/?return=%2Fhelpedbygod25%2F" class="btn">View Pre-Wedding Photos</a>
      <a href="https://paystack.shop/pay/helpedbygod25" class="btn">Send Gift</a>
    </div>
  </div>
  
  <div class="footer">
    <p>With love,</p>
    <p><strong>Boluwatife & Mosimileoluwa</strong></p>
    <p>November 19th, 2025 •  Haven Hotel Ikorodu, Sawmill Bus Stops, <br> Okegbegun Adjacent Enyo Filling Station before Laspotech First Gate, Lagos</p>
</div>
</body>
</html>

*/

// Note: You'll need to replace YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, and YOUR_TEMPLATE_ID 
// with your actual EmailJS credentials in the script.js file
