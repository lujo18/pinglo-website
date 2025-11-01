# Pinglo Marketing Website

A modern, high-converting marketing website for the Pinglo contact management mobile app. Built with Next.js, Tamagui, TypeScript, and Firebase.

## 🚀 Features

- **Dark Mode by Default** — Matches the Pinglo app aesthetic
- **Responsive Design** — Works on mobile (320px) through large desktops
- **DinRound Typography** — Custom fonts matching the app
- **Tamagui Components** — Consistent design system with the mobile app
- **Firebase Integration** — Waitlist and contact form storage in Firestore
- **SEO Ready** — Structured data, OG tags, sitemap, robots.txt
- **Blog System** — Easy-to-manage Markdown-based blog with no database
- **Accessible** — WCAG AA compliance, keyboard navigation, semantic HTML
- **Production Ready** — TypeScript, ESLint, Prettier, type-checked

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with TamaguiRoot provider
│   ├── globals.css         # Global styles & @font-face declarations
│   ├── page.tsx            # Home page (Hero + Features + How-it-works + CTA)
│   ├── blog/               # Blog routes
│   │   ├── page.tsx        # Blog index (all posts)
│   │   └── [slug]/page.tsx # Individual post pages
│   ├── contact/
│   │   └── page.tsx        # Contact form page
│   └── legal/
│       ├── privacy/
│       │   └── page.tsx    # Privacy Policy
│       └── terms/
│           └── page.tsx    # Terms of Service
├── content/
│   └── blog/               # Blog posts in Markdown
│       ├── build-stronger-relationships.md
│       ├── remembering-what-matters.md
│       └── consistency-beats-perfection.md
├── components/
│   ├── providers/
│   │   └── TamaguiRoot.tsx # Tamagui provider + Header + Footer
│   ├── ui/
│   │   └── ButtonA.tsx     # Web-adapted ButtonA
│   └── website/
│       ├── Hero.tsx
│       ├── FeaturesShowcase.tsx
│       ├── HowItWorks.tsx
│       ├── CTASection.tsx
│       ├── BlogCard.tsx    # Blog post card
│       └── BlogList.tsx    # Blog posts grid
├── lib/
│   ├── blog.ts             # Blog utilities (getAllBlogPosts, etc.)
│   ├── firebase.ts         # Firebase config & functions
│   └── validators.ts       # Form validation
├── tamagui-theme.ts        # Tamagui config
└── assets/
    ├── fonts/
    └── icons/
public/
├── fonts/
├── assets/icons/
├── sitemap.xml             # SEO sitemap
└── robots.txt              # SEO robots config
```

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Firebase config:

```bash
cp .env.local.example .env.local
```

**`.env.local`:**
```
NEXT_PUBLIC_FIREBASE_API_KEY=<your_api_key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your_auth_domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your_project_id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your_storage_bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your_messaging_sender_id>
NEXT_PUBLIC_FIREBASE_APP_ID=<your_app_id>
```

### 3. Set Up Firebase Firestore

Create two Firestore collections:
- `waitlist` — stores `{ email, timestamp, utm_source?, utm_medium?, utm_campaign? }`
- `contactMessages` — stores `{ name, email, message, timestamp }`

**Firestore Rules** (example for testing):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /waitlist/{document=**} {
      allow create: if request.resource.data.keys().hasAll(['email', 'timestamp']);
    }
    match /contactMessages/{document=**} {
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'message', 'timestamp']);
    }
  }
}
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, features, how-it-works, and CTAs |
| `/blog` | Blog index - grid of all blog posts |
| `/blog/[slug]` | Individual blog post pages with full Markdown content |
| `/contact` | Contact form (stores to Firestore) |
| `/legal/terms` | Terms of Service (16 sections) |
| `/legal/privacy` | Privacy Policy (15 sections) |

## 📚 Blog System

The website includes a **simple, file-based blog system**:

- Write blog posts in **Markdown** with YAML frontmatter
- No database needed — files are your source of truth
- Posts automatically appear on `/blog`
- Individual posts at `/blog/post-slug`
- 3 starter posts included (feel free to replace)

### Quick Start: Add a Blog Post

1. Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: Your Post Title
slug: your-post-slug
excerpt: One-line summary
author: Pinglo Team
date: 2025-10-31
tags: [Relationships, Tips]
featured: true
---

## Your Content Here

Write in Markdown...
```

2. Save and view at `/blog/your-post-slug` ✨

**Full documentation:** See `BLOG_GUIDE.md` and `BLOG_SYSTEM.md`

## 🎨 Styling & Theme

### Tamagui Configuration

The site uses a custom Tamagui theme configured in `src/tamagui-theme.ts`:

**Dark Mode Colors:**
- `accentPrimary`: `#a78bfa` (Purple)
- `accentSecondary`: `#6d28d9` (Deep Purple)
- `textPrimary`: `#f1f5f9` (Off-white)
- `textSecondary`: `#cbd5e1` (Light Slate)
- `color1`: `#0f172a` (Navy Background)
- `color2`: `#1e293b` (Slate)
- `color3`: `#334155` (Light Slate)

### Typography

**DinRound Font Weights:**
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 700 (Bold)
- 900 (Black)

Fonts are loaded via `@font-face` in `src/app/globals.css` and served from `public/fonts/`.

## 🔥 Firebase Integration

### Waitlist Form

```typescript
// src/components/website/WaitlistSection.tsx
import { addToWaitlist } from '@/lib/firebase'

await addToWaitlist({ email, utm_source: 'website', ... })
```

**Firestore Collection:** `waitlist`
**Document Fields:**
- `email` (string)
- `timestamp` (serverTimestamp)
- `utm_source`, `utm_medium`, `utm_campaign` (string, optional)

### Contact Form

```typescript
// src/app/contact/page.tsx
import { addContactMessage } from '@/lib/firebase'

await addContactMessage({ name, email, message })
```

**Firestore Collection:** `contactMessages`
**Document Fields:**
- `name` (string)
- `email` (string)
- `message` (string)
- `timestamp` (serverTimestamp)

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel (Recommended)

1. **Connect Repository:**
   ```bash
   npx vercel
   ```

2. **Configure Environment Variables:**
   - Add `.env.local` variables to Vercel project settings

3. **Deploy:**
   ```bash
   npm run build && npm start
   ```

Or simply push to main branch (if connected to Vercel).

## ✅ Type Checking & Linting

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Format code
npm run format
```

## 📋 Checklist Before Launch

- [ ] Replace placeholders in legal pages:
  - `[EFFECTIVE_DATE]` → Actual date
  - `hello@pinglo.app` → Your email
  - `San Francisco, CA 94105` → Your address
- [ ] Update Firebase Firestore rules for production
- [ ] Enable reCAPTCHA or honeypot on forms
- [ ] Add actual app screenshots to hero section
- [ ] Configure OG images in `public/og-image.png`
- [ ] Test on real devices (mobile, tablet, desktop)
- [ ] Run Lighthouse audit
- [ ] Review SEO (title, meta description, canonical URLs)
- [ ] Enable analytics (Firebase Analytics or Plausible)
- [ ] Test contact and waitlist forms end-to-end
- [ ] Verify legal pages are accessible on footer

## 🔐 Security & Best Practices

### Environment Variables
- Never commit `.env.local` to version control
- Use `.env.local.example` as a template
- For CI/CD, configure secrets in your platform (Vercel, GitHub Actions, etc.)

### Firestore Security Rules
- Implement proper rules before production
- Test rules using the Firebase Emulator
- Use `request.auth` for authenticated operations

### Rate Limiting
- Consider implementing rate limiting on Cloud Functions
- Use honeypot fields to catch bots
- Validate emails server-side

### CSP (Content Security Policy)
Add to `next.config.js` or headers:
```javascript
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline';"
  }
]
```

## 📱 Responsive Design

The site is fully responsive from **320px** (mobile) to large desktops. Key breakpoints:
- Mobile: 320–480px
- Tablet: 480–768px
- Desktop: 768px+

## 🧪 Testing

### Manual Testing

1. **Home Page:**
   - Scroll through all sections
   - Test CTA buttons
   - Submit waitlist form

2. **Mobile:**
   - Use Chrome DevTools device emulation
   - Test touch interactions
   - Verify sticky header

3. **Forms:**
   - Test validation (required fields, email format)
   - Submit with real data
   - Verify data appears in Firestore

4. **Dark Mode:**
   - Verify contrast ratios (WCAG AA: 4.5:1 for text)
   - Test in low-light conditions

### Automated Testing (Optional)

```bash
# Add Vitest for unit tests
npm install -D vitest @testing-library/react

# Run tests
npm run test
```

## 📚 Resources

- **Next.js**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tamagui**: [https://tamagui.dev](https://tamagui.dev)
- **Firebase**: [https://firebase.google.com/docs](https://firebase.google.com/docs)
- **TypeScript**: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

## 📝 License

Proprietary. All rights reserved by Pinglo.

---

## 🚀 Next Steps

1. **Customize Legal Pages** — Replace placeholder dates, emails, and addresses with your actual info
2. **Add Analytics** — Integrate Firebase Analytics or Plausible
3. **Create Additional Pages** — `/features`, `/how-it-works`, `/download`, `/blog`
4. **Set Up CI/CD** — Configure GitHub Actions or Vercel deployments
5. **Launch & Monitor** — Deploy to Vercel, monitor performance, gather feedback

---

**Questions?** Contact [hello@pinglo.app](mailto:hello@pinglo.app)
