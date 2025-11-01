# ⚡ Quick Start Guide

Your marketing website is ready! Here's what to do:

## 📍 Project Location
```
C:\Users\asplo\Documents\GitHub\pinglo-website\website-marketing\
```

## 🚀 Getting Started

### 1. Open the Project
```powershell
cd C:\Users\asplo\Documents\GitHub\pinglo-website\website-marketing
```

### 2. Verify Installation
```powershell
npm --version
```

### 3. Start Development Server
```powershell
npm run dev
```

Then open: **http://localhost:3000**

---

## 🔧 Setup Steps

### Step 1: Configure Environment Variables

1. Open `.env.local.example` in the project
2. Copy the content
3. Create a new file `.env.local`
4. Add your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Step 2: Create Firestore Collections

In Firebase Console:

1. Go to **Firestore Database**
2. Create collection: `waitlist`
   - Document structure: `{ email: string, referralSource: string, timestamp: Date }`
3. Create collection: `contactMessages`
   - Document structure: `{ name: string, email: string, message: string, timestamp: Date }`

### Step 3: Replace Placeholders

Search and replace in your codebase:

- `[APP_NAME]` → Your app name
- `[COMPANY_NAME]` → Your company name
- `[CONTACT_EMAIL]` → Your contact email
- `[PHONE_NUMBER]` → Your phone
- `[ADDRESS]` → Your address
- `[SOCIAL_MEDIA_LINKS]` → Your links

---

## 📁 Project Structure

```
website-marketing/
├── src/
│   ├── app/                      # Pages
│   │   ├── page.tsx              # Home
│   │   ├── features/page.tsx      # Features
│   │   ├── how-it-works/page.tsx  # Process
│   │   ├── download/page.tsx      # Downloads
│   │   ├── contact/page.tsx       # Contact
│   │   ├── blog/page.tsx          # Blog
│   │   ├── legal/
│   │   │   ├── terms/page.tsx     # Terms of Service
│   │   │   └── privacy/page.tsx   # Privacy Policy
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/               # Reusable components
│   │   ├── ButtonA.tsx           # Button component
│   │   ├── WaitlistForm.tsx       # Newsletter signup
│   │   ├── ContactForm.tsx        # Contact form
│   │   ├── Header.tsx            # Navigation
│   │   └── Footer.tsx            # Footer
│   └── lib/                      # Utilities
│       ├── firebase.ts           # Firebase config
│       ├── services.ts           # Firestore operations
│       └── validation.ts         # Form validation
├── tamagui.config.ts            # Design system
├── next.config.ts               # Next.js config
├── tailwind.config.ts           # Tailwind config
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
└── .env.local.example           # Environment template
```

---

## 🎨 Design System (Tamagui)

All components use Tamagui tokens:

**Colors:**
- `$blue10` - Primary color
- `$gray1-$gray11` - Grayscale
- `$white`, `$black` - Mono

**Spacing:**
- `$2`, `$3`, `$4`, `$6`, `$8` - Padding/margin

**Typography:**
- `$3` to `$12` - Font sizes

**Layout Components:**
- `YStack` - Vertical stack
- `XStack` - Horizontal stack
- `SizableText` - Responsive text

---

## 🧪 Available Commands

```powershell
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

---

## 🐛 Troubleshooting

### Command: `npm run build` fails

**Check TypeScript errors:**
```powershell
npm run type-check
```

**Most common issue:** File corruption from Windows sync
- Solution: Copy clean code from `PRODUCTION_CODE.md`
- Replace the problematic file

### Form submissions not working

1. Check `.env.local` has Firebase credentials
2. Verify Firestore collections exist
3. Check browser console for errors (F12)
4. Verify Firebase rules allow writes

### Styles not loading

1. Verify Tamagui config is imported in `layout.tsx`
2. Check `TamaguiProvider` wraps all content
3. Restart dev server: `npm run dev`

---

## 🚀 Deployment

### To Vercel (Recommended)

```powershell
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### To Other Platforms

Works with any platform supporting Next.js 14:
- Netlify
- AWS Amplify
- Railway
- Fly.io
- Self-hosted server

---

## ✅ Pre-Launch Checklist

- [ ] Environment variables configured
- [ ] Firebase collections created
- [ ] All placeholders replaced
- [ ] Test forms locally
- [ ] `npm run build` succeeds
- [ ] Mobile responsive tested
- [ ] SEO meta tags updated
- [ ] Legal pages reviewed
- [ ] Rate limiting configured
- [ ] Analytics integrated (optional)

---

## 📚 Documentation Files

Read these for more details:
- `README.md` - Project overview
- `README_SETUP.md` - Detailed setup guide
- `PRODUCTION_CODE.md` - Copy-paste ready code
- `DELIVERY_SUMMARY.md` - Complete feature summary

---

## 💡 Tips

1. **Change colors:** Edit `tamagui.config.ts`
2. **Add pages:** Create new folder in `src/app/` with `page.tsx`
3. **Update header:** Edit `src/components/Header.tsx`
4. **Update footer:** Edit `src/components/Footer.tsx`
5. **Modify forms:** Edit `WaitlistForm.tsx` or `ContactForm.tsx`

---

## 🎯 Next Steps

1. ✅ Configure Firebase
2. ✅ Replace placeholders
3. ✅ Test locally: `npm run dev`
4. ✅ Build: `npm run build`
5. ✅ Deploy: `vercel` or your hosting
6. ✅ Test in production
7. ✅ Setup analytics
8. ✅ Monitor form submissions

---

**You're all set! 🎉**

Questions? Check the documentation files or test locally first.

Happy building! 🚀
