# Google Sheets API Integration Setup Guide

## Quick Start (15 minutes)

Follow these steps to set up custom registration with Google Sheets integration.

---

## Part 1: Google Cloud Console Setup

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click "Select a project" → "New Project"
3. Name: **AI Ideathon 2026**
4. Click "Create"

### Step 2: Enable Google Sheets API

1. In your project, go to "APIs & Services" → "Library"
2. Search for **"Google Sheets API"**
3. Click on it and press **"Enable"**

### Step 3: Create API Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "+ CREATE CREDENTIALS" → "API Key"
3. Copy your **API Key**
4. Click "Edit API Key" → Set restrictions:
   - Application: HTTP referrers
   - Add your domain: `yourdomain.com`
   - API restrictions: Limit to "Google Sheets API"
5. Save

---

## Part 2: Create Google Sheet

### Step 1: Create the Spreadsheet

1. Go to [sheets.new](https://sheets.new)
2. Name it: **"AI Ideathon 2026 - Registrations"**
3. Create columns in Row 1:

```
A1: Timestamp
B1: Full Name
C1: Email
D1: Phone
E1: Age
F1: College/School
G1: Course/Stream
H1: Year of Study
I1: Team Size
J1: Team Members
K1: Theme Preference
L1: AI Experience
M2: How Did You Hear
N1: Requirements
O1: Registration ID
```

### Step 2: Get Sheet ID

1. Look at the URL: `https://docs.google.com/spreadsheets/d/THIS_LONG_STRING/edit`
2. Copy **THIS_LONG_STRING** - this is your **Sheet ID**

### Step 3: Share Sheet with API

1. Click "Share" button (top-right)
2. Under "General access", select **"Anyone with the link"**
3. Set role to **"Editor"**
4. Click "Done"

⚠️ **Important**: For production, use Service Account instead of API Key for better security.

---

## Part 3: Configure Environment Variables

### Step 1: Create .env File

In your project root, create `.env`:

```bash
cp .env.example .env
```

### Step 2: Add Your Credentials

Edit `.env` file:

```env
VITE_GOOGLE_SHEET_ID=your_actual_sheet_id_here
VITE_GOOGLE_API_KEY=your_actual_api_key_here
```

⚠️ **Never commit .env to Git!** It's already in .gitignore

---

## Part 4: Install Dependencies

```bash
npm install google-spreadsheet axios react-hook-form zod @hookform/resolvers emailjs-com
```

Or with Bun:
```bash
bun add google-spreadsheet axios react-hook-form zod @hookform/resolvers emailjs-com
```

---

## Part 5: Test Integration

1. Run development server: `npm run dev`
2. Go to `/register` page
3. Fill out the form
4. Submit
5. Check your Google Sheet - data should appear!

---

## Part 6: Email Confirmations (Optional)

### Setup EmailJS

1. Go to [EmailJS](https://www.emailjs.com)
2. Create free account
3. Add Email Service (Gmail, Outlook, etc.)
4. Create Email Template:
   - Subject: "Registration Confirmed - AI Ideathon 2026"
   - Body: Include participant name, event details, next steps
5. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

### Add to .env

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=user_xxxxx
```

---

## Security Best Practices

### For Production:

1. **Use Service Account** instead of API Key
2. **Add reCAPTCHA** to prevent spam
3. **Rate limiting** on form submissions
4. **Input validation** on all fields
5. **HTTPS only** in production

### Optional: Backend Proxy

For enhanced security, create a simple backend function:

```javascript
// Vercel Serverless Function example
export default async function handler(req, res) {
  // Validate input
  // Add to Google Sheets
  // Send confirmation email
  res.status(200).json({ success: true });
}
```

---

## Troubleshooting

### Form submission fails:
- ✅ Check API Key is correct
- ✅ Verify Sheet is shared publicly
- ✅ Check browser console for errors
- ✅ Ensure .env file exists

### Data not appearing in Sheet:
- ✅ Check Sheet ID is correct
- ✅ Verify column headers match form fields
- ✅ Check API has write permissions

### CORS errors:
- ✅ Use Vercel/Netlify serverless functions
- ✅ Or use Service Account with backend

---

## Next Steps

After setup:
1. ✅ Test thoroughly with sample data
2. ✅ Customize email template
3. ✅ Add admin dashboard to view registrations
4. ✅ Set up automatic email responses
5. ✅ Deploy to production

---

## Support

Issues? Contact: mukesh.mmp1234@gmail.com
