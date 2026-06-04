# ArshGroup Website

## Project Overview
Luxury architecture, interior, and construction firm website. React SPA for ArshGroup, operating in Chennai and Bangalore (Tamil Nadu & Karnataka).

## Tech Stack
- **Framework**: React 18 + Vite 5
- **Routing**: React Router v6 (BrowserRouter in dev, HashRouter in prod)
- **Styling**: Tailwind CSS 3 with custom design tokens
- **Animation**: Framer Motion 11
- **Fonts**: Bodoni Moda (display) + Instrument Sans (body)

## Design System
- **Colors**: alabaster (#efebe3), bone (#d8d0c3), carbon (#111111), graphite (#2a2b29), wine (#5c2531), paper (#fbfaf7), bronze/gold (#b8976a / #a07d52)
- **Accent convention**: Bronze/gold for CTAs and estimator UI; wine for brand sections
- **Typography**: `font-display` = Bodoni Moda, `font-sans` = Instrument Sans

## File Structure
```
src/
  App.jsx              — Router, layout shell (Navbar + Footer + routes)
  main.jsx             — Entry point, HashRouter in prod
  index.css            — Tailwind layers, custom animations
  components/
    Navbar.jsx         — Fixed header, scroll-aware solid/transparent
    Hero.jsx           — Parallax hero with white text accents
    Footer.jsx         — 3-column: Brand | Contact | Studio
    ProjectCard.jsx    — Featured/secondary project cards
    SectionWrapper.jsx — Reusable section with eyebrow/title/description
    Testimonials.jsx   — Client quotes grid
    InstantEstimate.jsx — Multi-step cost calculator (bronze accents)
    ArchitecturalDesignPackages.jsx — 3-tier package comparison
    FloatingWhatsAppCTA.jsx — Floating WhatsApp bubble
    AnimatedRoute.jsx  — Page transition wrapper
  pages/
    Home.jsx           — Homepage (no estimator, CTA navigates to /estimator)
    Projects.jsx       — Projects gallery
    About.jsx          — Philosophy page
    Services.jsx       — Services + packages
    Estimator.jsx      — Dedicated estimate calculator page
    Process.jsx        — 4-phase process
    Contact.jsx        — Contact form
  data/
    siteData.js        — All structured content (projects, services, stats, etc.)
  hooks/
    useSmoothScroll.js — Custom smooth scroll (desktop only, fine pointer)
```

## Key Architecture Decisions
- Estimator lives on dedicated `/estimator` page, NOT on homepage
- Homepage CTA "Calculate Your Estimate" uses `useNavigate('/estimator')`
- All estimator accents are bronze (#b8976a), not wine/maroon
- GPU-accelerated animations: `will-change-transform`, targeted transition properties
- Project data uses real locations: Chennai, Bangalore, Coimbatore
- WhatsApp number: 919445330479
- Email: yameenmohammed537@gmail.com

## Contact Info
- Phone: +91 94453 30479
- WhatsApp: wa.me/919445330479
- Email: yameenmohammed537@gmail.com
- GSTIN: 33EDWPM9146N1Z1
- Locations: Chennai, Bangalore

## Build & Dev
```bash
npm run dev      # Vite dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Notes
- `deejos-home-construction.html` and `deejos-packages.html` in root are reference files from the original Deejos site, not part of the app
- Vite config has `optimizeDeps.entries: ["index.html"]` to exclude those reference HTML files
- Pre-existing React 18 warning: `fetchPriority` prop on `motion.img` in Hero — cosmetic only
- Uses `.claude/launch.json` for preview server config
