# Școala Complementară Web Application

## Overview
This full-stack web application, "Școala Complementară," is an experiential education platform focused on outdoor learning and character development. It serves as an informational website and a management system for educational programs. The platform includes student applications, newsletter subscriptions, contact forms, and a blog with educational resources, aiming to provide an accessible and engaging online presence for the initiative. The project's ambition is to offer an alternative educational approach and reach a wide audience interested in experiential learning.

## User Preferences
Preferred communication style: Simple, everyday language.
Site philosophy: Keep the site simple and publicly accessible without login requirements.

## System Architecture
The application is a static React 18 application built with TypeScript and Vite. It uses Tailwind CSS with shadcn/ui for styling, Wouter for client-side routing, and relies on pure React state. The UI components are built with Radix UI primitives. The architecture is designed for cost optimization, eliminating the need for a backend server, database, or API endpoints by redirecting all interactive forms (newsletter, contact, applications) to direct communication channels (email/phone).

**Key Features:**
*   **Educational Content Management**: Blog system for articles and dedicated content pages for various audiences (students, parents, institutions, mentors), optimized for SEO.
*   **User Interaction**: Newsletter subscription, contact forms, and student applications all redirect to direct contact information.
*   **UI/UX**: Responsive design with a mobile-first approach, comprehensive shadcn/ui component library, sticky navigation with smooth scrolling, and toast notifications.
*   **Analytics**: Google Analytics (GA4) integration for tracking page views and custom events.

**Technical Implementations:**
*   **Frontend Framework**: React 18 with TypeScript.
*   **Build Tool**: Vite.
*   **Styling**: Tailwind CSS, shadcn/ui, Radix UI.
*   **Routing**: Wouter.
*   **UI/UX Decisions**: Animated page transitions using `framer-motion`, responsive design, and accessible component library integration.
*   **System Design Choices**: Conversion to a completely static site to minimize hosting costs, with all interactive elements funneled to direct communication.

## External Dependencies

*   **Static Hosting**: Any CDN or static hosting service (e.g., Netlify, Vercel, GitHub Pages, Replit Static).
*   **Google Analytics**: Optional, configured via `VITE_GA_MEASUREMENT_ID`.
*   **NPM Dependencies**: React, TypeScript, Vite, Tailwind CSS, Radix UI, shadcn/ui components, Zod, date-fns, clsx, lucide-react.
*   **No Database or Email Service Required**: All communications are handled via direct email (`ggverb@gmail.com`) and phone (`+40 721 879 347`).