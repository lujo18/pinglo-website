# Copilot Instructions for AI Coding Agents

## Project Overview
- **Type:** Expo React Native app with Firebase backend and serverless functions (see `/functions`)
- **Structure:**
  - `src/app/` — Main app code, file-based routing, onboarding, authentication, and tabs
  - `src/components/` — UI and app-specific components, organized by feature
  - `src/hooks/`, `src/lib/`, `src/store/`, `src/utils/` — Shared logic, schemas, and utilities
  - `/functions/` — Firebase Cloud Functions (TypeScript)
- **Routing:** Uses Expo Router (file-based, see [Expo docs](https://docs.expo.dev/router/introduction))

## Key Workflows
- **Install dependencies:** `npm install`
- **Start app:** `npx expo start`
- **Development build:**
  - Configure `app.config.ts` (name/slug)
  - `npm i -g eas-cli` (if needed)
  - `eas login` (if needed)
  - `eas build:configure`
  - `eas build --platform ios|android --profile development`
- **Firebase setup:**
  - Add config to `.env` (see README)
  - Enable providers in Firebase console (Email/Password, Google, Apple)
  - For functions: `cd functions && npm install`
  - Deploy: `firebase deploy --only functions`

## Project Conventions
- **Component structure:**
  - Feature folders (e.g., `components/app/contacts/Contact.tsx`)
  - UI primitives in `components/ui/`
  - Use `CustomPagerView` for multi-page flows (see README for usage)
- **TypeScript:**
  - Types in `src/types/`
  - Schemas in `src/lib/`
- **Firebase Functions:**
  - Use TypeScript, secrets via `defineSecret`
  - Lint with `eslint .` (not `eslint --ext`)
  - Delete `/functions/lib` after fixing deployment errors
- **Environment:**
  - Use `.env` for secrets (not in repo)
  - Use `dotenv` for local dev

## Integration & Patterns
- **Auth:**
  - Firebase Auth, logic in `src/lib/auth.ts`, state in `src/store/auth.ts`
- **Contacts:**
  - Schema in `src/lib/contactSchema.ts`, state in `src/store/contacts.ts`
- **Onboarding:**
  - Flows in `components/ui/onboarding/`, entry in `src/app/onboarding/`
- **UI:**
  - Tamagui for styling, see `tamagui.config.ts`

## Tips & Gotchas
- **Permissions:**
  - Firestore rules: avoid `request.auth.uid == uid` for deep paths, use explicit path rules
- **Functions:**
  - Always install packages from `/functions` dir
  - Use Firebase Secret Manager for sensitive keys
- **Reset project:** `npm run reset-project` (see README)

## References
- [README.md](../README.md) — Setup, build, and Firebase instructions
- [Expo Docs](https://docs.expo.dev/)
- [Firebase Docs](https://firebase.google.com/docs/)

---
_If any section is unclear or missing, please provide feedback for improvement._
