# EmailJS Email Templates for AI Ideathon 2026

## 📧 Template Configuration Guide

This document contains ready-to-use email templates for EmailJS integration.

---

## 1️⃣ Registration Confirmation (Participant)

**Template ID:** `registration_confirmation`  
**Subject:** `Registration Confirmed! 🎉 - AI Ideathon 2026`

### HTML Template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 3px solid #6366f1;
    }
    .logo {
      font-size: 32px;
      font-weight: bold;
      color: #6366f1;
    }
    .title {
      font-size: 24px;
      color: #1a1a1a;
      margin: 20px 0;
    }
    .content {
      padding: 20px 0;
    }
    .highlight-box {
      background-color: #f0f0ff;
      border-left: 4px solid #6366f1;
      padding: 15px;
      margin: 20px 0;
      border-radius: 5px;
    }
    .info-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    .info-table td {
      padding: 10px;
      border-bottom: 1px solid #e0e0e0;
    }
    .label {
      font-weight: bold;
      color: #555;
      width: 40%;
    }
    .cta-button {
      display: inline-block;
      background-color: #6366f1;
      color: #ffffff;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 5px;
      margin: 20px 0;
      font-weight: bold;
    }
    .footer {
      text-align: center;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
      font-size: 14px;
      color: #777;
    }
    .social-links {
      margin: 15px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #6366f1;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">🚀 AI Ideathon 2026</div>
      <p style="color: #777; margin-top: 5px;">Innovating Education Through Technology</p>
    </div>

    <div class="content">
      <h1 class="title">Welcome to AI Ideathon 2026! 🎉</h1>
      
      <p>Dear {{full_name}},</p>
      
      <p>Congratulations! Your registration for <strong>AI Ideathon 2026</strong> has been successfully confirmed.</p>
      
      <div class="highlight-box">
        <strong>🎫 Registration ID:</strong> {{registration_id}}<br>
        <strong>📅 Event Dates:</strong> June 1-2, 2026<br>
        <strong>📍 Venue:</strong> [Your College Name], [City]
      </div>

      <h3>Your Registration Details:</h3>
      <table class="info-table">
        <tr>
          <td class="label">Name:</td>
          <td>{{full_name}}</td>
        </tr>
        <tr>
          <td class="label">Email:</td>
          <td>{{email}}</td>
        </tr>
        <tr>
          <td class="label">Phone:</td>
          <td>{{phone}}</td>
        </tr>
        <tr>
          <td class="label">College/School:</td>
          <td>{{college}}</td>
        </tr>
        <tr>
          <td class="label">Team Size:</td>
          <td>{{team_size}} {{team_size > '1' ? '(Including you)' : '(Solo Participant)'}}</td>
        </tr>
        <tr>
          <td class="label">Theme Preference:</td>
          <td>{{theme_preference}}</td>
        </tr>
        <tr>
          <td class="label">AI Experience Level:</td>
          <td>{{ai_experience}}</td>
        </tr>
      </table>

      <h3>Next Steps:</h3>
      <ol>
        <li><strong>Join our WhatsApp group</strong> for real-time updates</li>
        <li><strong>Form your team</strong> if you haven't already (max 3 members)</li>
        <li><strong>Start brainstorming</strong> innovative ideas based on the themes</li>
        <li><strong>Review the event rules</strong> and guidelines</li>
        <li><strong>Prepare your prerequisites</strong> (laptop, IDE setup, etc.)</li>
      </ol>

      <div style="text-align: center;">
        <a href="https://aiideathon2026.com/resources" class="cta-button">Access Resources & Prep Materials</a>
      </div>

      <div class="highlight-box">
        <strong>📞 Emergency Contact:</strong><br>
        Email: mukesh.mmp1234@gmail.com<br>
        Phone: +91 84169 82676
      </div>

      <p><strong>Important:</strong> Please save this email for future reference. You'll need your Registration ID for event check-in.</p>
    </div>

    <div class="footer">
      <div class="social-links">
        <a href="#">Instagram</a> • 
        <a href="#">LinkedIn</a> • 
        <a href="#">Twitter</a> • 
        <a href="#">Website</a>
      </div>
      <p>Organized by <strong>CodeByt</strong></p>
      <p>&copy; 2026 AI Ideathon. All rights reserved.</p>
      <p style="font-size: 12px; margin-top: 10px;">
        If you have any questions, please reply to this email or contact us at mukesh.mmp1234@gmail.com
      </p>
    </div>
  </div>
</body>
</html>
```

### EmailJS Variables:
```javascript
{
  full_name: "John Doe",
  email: "john@example.com",
  phone: "+91 98765 43210",
  college: "Indian Institute of Technology",
  team_size: "3",
  theme_preference: "Healthcare",
  ai_experience: "Intermediate",
  registration_id: "AII2026-1234567890-abc123"
}
```

---

## 2️⃣ Team Formation Reminder

**Template ID:** `team_formation_reminder`  
**Subject:** `⏰ Form Your Team for AI Ideathon 2026!`

### HTML Template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Same base styles as above */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .warning-box {
      background-color: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 15px;
      margin: 20px 0;
      border-radius: 5px;
    }
    .cta-button {
      display: inline-block;
      background-color: #6366f1;
      color: #ffffff;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 5px;
      margin: 20px 0;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">🚀 AI Ideathon 2026</div>
    </div>

    <div class="content">
      <h1 class="title">Time to Build Your Team! 👥</h1>
      
      <p>Hi {{full_name}},</p>
      
      <p>We noticed you registered as a <strong>solo participant</strong> for AI Ideathon 2026.</p>
      
      <div class="warning-box">
        <strong>💡 Did you know?</strong><br>
        Teams of 2-3 members often perform better in hackathons! Collaboration brings diverse perspectives and skills.
      </div>

      <h3>Why Form a Team?</h3>
      <ul>
        <li>✅ Combine different skill sets (coding, design, presentation)</li>
        <li>✅ Share workload and brainstorm ideas together</li>
        <li>✅ Learn from each other during the 48-hour challenge</li>
        <li>✅ Build lasting friendships and professional networks</li>
      </ul>

      <p><strong>Deadline to form your team:</strong> May 25, 2026</p>

      <div style="text-align: center;">
        <a href="https://aiideathon2026.com/team-finder" class="cta-button">Find Team Members</a>
      </div>

      <p>Need help finding teammates? Join our Discord server and use the #team-finder channel!</p>
    </div>

    <div class="footer">
      <p>Questions? Contact: mukesh.mmp1234@gmail.com | +91 84169 82676</p>
    </div>
  </div>
</body>
</html>
```

---

## 3️⃣ Event Reminder (48 Hours Before)

**Template ID:** `event_reminder_48h`  
**Subject:** `⏰ 48 Hours to Go! Final Preparations for AI Ideathon 2026`

### HTML Template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .checklist {
      background-color: #f0fff4;
      border: 2px solid #48bb78;
      padding: 20px;
      margin: 20px 0;
      border-radius: 8px;
    }
    .checklist-item {
      margin: 10px 0;
      padding-left: 25px;
      position: relative;
    }
    .checklist-item:before {
      content: "☐";
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">🚀 AI Ideathon 2026</div>
    </div>

    <div class="content">
      <h1 class="title">48 Hours to Go! 🎯</h1>
      
      <p>Dear {{full_name}},</p>
      
      <p>The wait is almost over! AI Ideathon 2026 starts in <strong>48 hours</strong>.</p>

      <div class="checklist">
        <h3>✅ Pre-Event Checklist:</h3>
        <div class="checklist-item">Laptop with charger</div>
        <div class="checklist-item">IDE and development environment set up</div>
        <div class="checklist-item">GitHub account created</div>
        <div class="checklist-item">Team members confirmed (if applicable)</div>
        <div class="checklist-item">Good night's sleep before the event!</div>
      </div>

      <h3>📋 Important Information:</h3>
      <p><strong>Reporting Time:</strong> 9:00 AM, June 1, 2026</p>
      <p><strong>Venue:</strong> [College Address]</p>
      <p><strong>What to Bring:</strong> Laptop, charger, notepad, pens, water bottle</p>
      <p><strong>Meals:</strong> All meals and refreshments will be provided</p>

      <p>We can't wait to see your innovative ideas come to life!</p>
    </div>

    <div class="footer">
      <p>See you soon!<br>The AI Ideathon 2026 Team</p>
    </div>
  </div>
</body>
</html>
```

---

## 4️⃣ Role-Specific Confirmation (Mentor/Judge/Speaker)

**Template ID:** `role_confirmation`  
**Subject:** `Thank You for Joining AI Ideathon 2026 as a {{role}}!`

### HTML Template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    /* Base styles */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">🚀 AI Ideathon 2026</div>
    </div>

    <div class="content">
      <h1 class="title">Welcome Aboard, {{full_name}}! 🌟</h1>
      
      <p>Dear {{full_name}},</p>
      
      <p>Thank you for agreeing to serve as a <strong>{{role}}</strong> for AI Ideathon 2026!</p>
      
      <p>Your expertise and guidance will be invaluable to our participants.</p>

      <h3>Your Role Details:</h3>
      <table class="info-table">
        <tr>
          <td class="label">Name:</td>
          <td>{{full_name}}</td>
        </tr>
        <tr>
          <td class="label">Role:</td>
          <td>{{role}}</td>
        </tr>
        <tr>
          <td class="label">Organization:</td>
          <td>{{organization}}</td>
        </tr>
        <tr>
          <td class="label">Designation:</td>
          <td>{{designation}}</td>
        </tr>
        <tr>
          <td class="label">Session Type:</td>
          <td>{{session_type}}</td>
        </tr>
      </table>

      <h3>Next Steps:</h3>
      <ol>
        <li>You'll receive a detailed schedule within 48 hours</li>
        <li>Access to participant profiles and project submissions</li>
        <li>Orientation session invitation (optional)</li>
        <li>Communication channel access (Discord/WhatsApp)</li>
      </ol>

      <p>If you have any specific requirements or questions, please don't hesitate to reach out.</p>
    </div>

    <div class="footer">
      <p>Contact: mukesh.mmp1234@gmail.com | +91 84169 82676</p>
    </div>
  </div>
</body>
</html>
```

---

## 5️⃣ Password Reset

**Template ID:** `password_reset`  
**Subject:** `Reset Your Password - AI Ideathon 2026`

### HTML Template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .reset-button {
      display: inline-block;
      background-color: #6366f1;
      color: #ffffff;
      padding: 15px 40px;
      text-decoration: none;
      border-radius: 5px;
      margin: 20px 0;
      font-weight: bold;
      font-size: 16px;
    }
    .warning {
      background-color: #fee;
      border: 1px solid #fcc;
      padding: 15px;
      border-radius: 5px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="content">
      <h1 class="title">Password Reset Request</h1>
      
      <p>Hi {{full_name}},</p>
      
      <p>We received a request to reset your password for AI Ideathon 2026 portal.</p>
      
      <div style="text-align: center;">
        <a href="{{reset_link}}" class="reset-button">Reset Password</a>
      </div>
      
      <p>This link will expire in 24 hours.</p>
      
      <div class="warning">
        <strong>⚠️ Security Notice:</strong><br>
        If you didn't request this password reset, please ignore this email or contact support immediately.
      </div>
    </div>

    <div class="footer">
      <p>Support: mukesh.mmp1234@gmail.com | +91 84169 82676</p>
    </div>
  </div>
</body>
</html>
```

---

## 🔧 EmailJS Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com)
2. Sign up for free account
3. Create new Email Service (Gmail recommended)

### Step 2: Add Email Templates
1. Go to "Email Templates" section
2. Click "Create New Template"
3. Copy paste the HTML code above
4. Set the template ID as specified
5. Save template

### Step 3: Configure Variables
Each template uses these variables:
- `{{full_name}}` - Recipient's name
- `{{email}}` - Recipient's email
- `{{phone}}` - Phone number
- `{{registration_id}}` - Unique ID
- Other role-specific variables

### Step 4: Get Your Credentials
Go to Account → API Keys and copy:
- **Public Key** (for frontend)
- **Service ID**
- **Template IDs**

### Step 5: Add to .env
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=user_xxxxx
```

---

## 📊 Usage Statistics

Track email performance:
- Open rates
- Click-through rates
- Bounce rates
- Delivery success

---

## ✨ Best Practices

1. **Personalization**: Always use recipient's name
2. **Clear CTA**: One primary call-to-action per email
3. **Mobile Responsive**: Test on mobile devices
4. **Plain Text Fallback**: Include text version
5. **Unsubscribe Option**: Add opt-out link
6. **Testing**: Send test emails before going live

---

**Contact:** mukesh.mmp1234@gmail.com | +91 84169 82676
