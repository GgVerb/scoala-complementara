# Școala Complementară Web Application

## Overview
A static React 18 application for "Școala Complementară," a Romanian experiential education platform. The site provides educational content, articles, and interactive self-assessment tools. All forms redirect to direct contact channels — no backend server or database required.

## User Preferences
Preferred communication style: Simple, everyday language.
Site philosophy: Keep the site simple and publicly accessible without login requirements.

## System Architecture
Pure static React 18 + Vite + TypeScript application. No backend, no database, no API server.

**Frontend Stack:**
- React 18 with TypeScript
- Vite (dev server and build tool)
- Tailwind CSS + shadcn/ui (Radix UI)
- Wouter (client-side routing)
- Framer Motion (page transitions)
- TanStack Query v5
- React Hook Form + Zod

**Key Features:**
- Educational articles on experiential learning, democratic schools, innovative education
- Interactive spiritual health self-assessment test (basic + refined versions)
- PDF download for theory schema
- Newsletter / contact / application forms → redirect to email/phone
- Google Analytics (GA4) via `VITE_GA_MEASUREMENT_ID`

## Project Structure
- `client/` — all React source code (do not add backend imports here)
- `shared/` — shared TypeScript types (schema.ts exists for type reuse; drizzle imports are unused by client)
- `attached_assets/` — static assets (images, PDFs)
- `public/` — Vite public folder

## Scripts
- `npm run dev` — start Vite dev server on port 5000
- `npm run build` — production build to `dist/public/`
- `npm run check` — TypeScript type check

## Deployment
- Deployment target: **static** (Replit static hosting)
- Build output: `dist/public/`
- Custom domain: `ggverb.ro` (configure in Replit deployment settings)
- GitHub: `https://github.com/GgVerb/scoala-complementara`

## Contact Info (used in forms)
- Email: ggverb@gmail.com
- Phone: +40 721 879 347
