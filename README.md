# AI Ideathon 2026 🚀

**National Level 48-Hour AI Hackathon**  
*Organized by CodeByt*

## Overview

AI Ideathon 2026 is a premier national-level hackathon focused on artificial intelligence and innovation. This 48-hour competition brings together talented students from across India to solve real-world challenges using cutting-edge AI technologies.

### Theme
**"AI for the Next Decade: Innovations Shaping the Future of Humanity"**

## Key Information

- **Duration:** 48 Hours
- **Format:** Hybrid (Online + Offline Finals)
- **Team Size:** 1-3 members
- **Eligibility:** Students aged 15-24 years
- **Registration:** Direct on website with Google Sheets integration

## Competition Tracks

1. **AI for Healthcare** - Revolutionize diagnostics and patient care
2. **AI for Sustainability** - Tackle climate change and environmental challenges
3. **Human-AI Collaboration** - Design seamless human-AI systems
4. **Smart Infrastructure** - Build intelligent cities and solutions
5. **Open Innovation** - Bring your own groundbreaking idea

## Prize Pool

- 🥇 **1st Place:** ₹25,000 + Certificate + Internship Opportunity
- 🥈 **2nd Place:** ₹15,000 + Certificate + Mentorship Program
- 🥉 **3rd Place:** ₹10,000 + Certificate + Swag Kit
- 🏅 **Special Mentions:** Exclusive Goodies + Certificates

## Timeline

- **Registration:** April 2-30, 2026
- **Round 1 (PPT Submission):** May 5, 2026
- **Round 2 (Google Meet Presentations):** May 15, 2026
- **Round 3 (Finals - 48hr Build):** June 1-2, 2026

## Tech Stack

### Frontend
- **Framework:** React 18.3 with TypeScript
- **Build Tool:** Vite 5.4
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Radix UI + shadcn/ui
- **Routing:** React Router DOM 6.30
- **State Management:** TanStack Query 5.83
- **Forms:** React Hook Form 7.61 + Zod validation
- **Icons:** Lucide React

### Backend Integration
- **Data Storage:** Google Sheets API
- **Email Service:** EmailJS (optional)
- **Deployment:** Vercel / Netlify

### Development
- **Package Manager:** npm/Bun
- **Testing:** Vitest + Playwright
- **Linting:** ESLint 9.32
- **TypeScript:** 5.8.3

## Project Structure

```
ai-ideathon-nexus/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (shadcn/ui)
│   │   ├── Layout/         # Layout components
│   │   ├── Navigation/     # Navigation components
│   │   ├── SEO/            # SEO meta components
│   │   └── RegistrationForm.tsx  # Custom registration form
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Register.tsx    # Registration page
│   │   └── event/          # Event-specific pages
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   ├── assets/             # Static assets
│   └── test/               # Test files
├── public/                 # Public static files
├── .env                    # Environment variables (not in git)
├── .env.example            # Environment template
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+ or Bun 1.0+
- npm or Bun package manager
- Google Cloud account (for Sheets API)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ai-ideathon-nexus

# Install dependencies
npm install
# or
bun install
```

### Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env and add your credentials:
# VITE_GOOGLE_SHEET_ID=your_sheet_id
# VITE_GOOGLE_API_KEY=your_api_key
```

### Development

```bash
# Start development server
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npx playwright test
```

### Linting

```bash
npm run lint
```

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ Performance optimized (<3s load time)
- ✅ Modern glass-morphism UI design
- ✅ Dark mode support
- ✅ Smooth animations and transitions
- ✅ Custom registration form with Google Sheets integration
- ✅ Real-time form validation
- ✅ Email confirmations (optional)

## Pages

- **Homepage** - Hero section, stats counter, featured themes
- **About** - CodeByt company information and team
- **Event Overview** - Central hub for event details
- **Themes** - Detailed competition tracks
- **Timeline** - Event schedule and milestones
- **Rounds** - Competition structure breakdown
- **Rules** - Guidelines and code of conduct
- **Prizes** - Prize pool and rewards
- **Registration** - Custom form with Google Sheets integration ⭐ NEW!
- **Resources** - Learning materials and tools
- **Judges & Mentors** - Expert profiles
- **Contact** - Contact form and information
- **Privacy Policy** - Data protection guidelines
- **Terms & Conditions** - Participation terms

## Registration System

### Features:
- ✨ Beautiful custom form matching website design
- 🔒 Direct Google Sheets API integration
- ✅ Real-time validation with Zod
- 📧 Optional email confirmations via EmailJS
- 🎯 Unique registration ID generation
- 📊 All data stored in your Google Sheet
- 🚀 No backend required!

### Setup Time: ~15 minutes

1. Create Google Sheet with column headers
2. Get Google Cloud API credentials
3. Add credentials to `.env` file
4. Share Google Sheet publicly
5. Test and deploy!

📖 **Full documentation:** See `REGISTRATION_FORM_IMPLEMENTATION.md`

## Organized By

**CodeByt** - Innovating Education Through Technology

- Website: [codebyt.com](https://codebyt.com)
- Email: aiideathon2026@gmail.com
- Phone: +91 98765 43210

## Registration

**Direct on Website** - Custom registration form with Google Sheets integration

Register now at `/register` or visit [your-domain.com/register](#)

### Features:
- ✅ Instant registration confirmation
- ✅ Data stored directly in Google Sheets
- ✅ Email confirmations (optional)
- ✅ No external platform redirects
- ✅ Secure and validated submissions

---

## Connect With Us

- [Instagram](#)
- [LinkedIn](#)
- [Twitter](#)

## Documentation

- `GOOGLE_SHEET_API_SETUP.md` - Step-by-step Google Sheets setup guide
- `REGISTRATION_FORM_IMPLEMENTATION.md` - Complete registration implementation guide
- `IMPLEMENTATION_SUMMARY.md` - Summary of all features and deployment instructions

## License

This project is proprietary and confidential. All rights reserved © 2026 CodeByt.

---

**Built with ❤️ by CodeByt Team**
