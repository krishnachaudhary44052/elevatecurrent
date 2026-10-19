# FDHS Elevate Website

React + Vite multi-page website for FDHS Elevate. The project uses a shared header and expanded four-row footer, responsive destination pages, course filtering, registration/sign-in pages, contact enquiry, career desk and Vercel rewrites for direct route access.

## Local development

Use Node.js 20.19+ (or 22.12+) and npm:

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` rewrites all routes to `index.html` so direct visits to React routes work.
- Build scripts invoke Vite through Node directly to avoid reliance on the executable bit on `node_modules/.bin/vite`.

## Main routes

- `/` — Home
- `/destinations/` — All destinations
- `/destination/germany/`, `/destination/japan/`, `/destination/uae/`, `/destination/india/` — Country pathways
- `/courses/` — Course catalogue
- `/career-desk/` and `/career-desk/germany/` — Career desk and Germany guide
- `/for-hospitals/` — Hospital partnerships
- `/contact_us/` — Contact enquiry
- `/register/`, `/register/college/` — Registration
- `/signin/` — Sign in for nurses, hospitals and colleges
- `/privacy-policy/`, `/terms/`, `/cookies/`, `/disclaimer/` — Policy placeholders

## Important notes

- Forms and authentication are front-end demonstrations until connected to a secure backend.
- The policy pages are placeholders and should be reviewed and replaced with approved legal text before launch.
- Social links currently point to platform homepages; replace them with official FDHS Elevate profile URLs when available.
