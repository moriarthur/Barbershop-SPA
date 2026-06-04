<div align="center">

# Barbershop SPA

### Mobile-First Barbershop Template with Booking System

**[🌐 Live Demo](https://barbershop-spa.netlify.app)**

[![React](https://img.shields.io/badge/React_18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)

*A single-page application for barbershops — booking, services, team, gallery, reviews. Dark luxury theme, PWA-ready.*

</div>

---

## What it does

A complete barbershop website template. Customers browse services, view the team, check the gallery, read reviews, and book appointments — all in a fast, mobile-first SPA. The dark luxury theme with gold accents creates a premium salon feel.

Designed as a **reusable template**: swap the content, colors, and assets to deploy for any barbershop client.

## Key Features

- **Booking System** — Date picker, barber selection, service pre-selection, form validation
- **Service Catalog** — Categorized services with prices and durations
- **Team Showcase** — Barber profiles with photos and roles
- **Photo Gallery** — Instagram-style grid with lightbox
- **Customer Reviews** — Testimonials carousel section
- **Contact & Map** — Embedded Google Maps, contact form, social links
- **Legal Pages** — Impressum, Datenschutz, AGB (German compliance)
- **Floating Action Button** — Quick book access on mobile
- **PWA-Ready** — Web manifest, favicons, mobile status bar theming
- **Performance Optimized** — Lazy-loaded images, code splitting, critical CSS inlined
- **Mobile-First** — Touch-optimized, responsive layout, smooth custom scrolling

## Architecture

```
src/
├── app/
│   ├── App.tsx              # Root component, state management, navigation
│   ├── hooks/
│   │   └── useScroll.ts     # Optimized scroll state (RAF + shared listeners)
│   └── components/
│       ├── Hero.tsx          # Landing section with parallax background
│       ├── About.tsx         # About / trust section
│       ├── Services.tsx      # Service catalog with categories
│       ├── Barbers.tsx       # Team showcase
│       ├── Booking.tsx       # Full booking flow (date, barber, form)
│       ├── Gallery.tsx       # Photo grid
│       ├── Reviews.tsx       # Customer testimonials
│       ├── Contact.tsx       # Contact info + map
│       ├── Navigation.tsx    # Fixed top nav with active section detection
│       ├── FloatingActionButton.tsx
│       ├── PromoBanner.tsx
│       ├── Footer.tsx        # Footer with legal links
│       ├── Legal.tsx         # Impressum / Datenschutz / AGB
│       └── ui/               # Reusable primitives (button, card, input, etc.)
└── main.tsx                  # Entry point
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18, TypeScript |
| Styling | Tailwind CSS 4, CSS custom properties |
| Build | Vite 6 with code splitting |
| UI Primitives | Radix UI (headless components) |
| Forms | react-hook-form |
| Date Handling | date-fns, react-day-picker |
| Icons | Lucide React |
| Notifications | Sonner (toast) |
| Deployment | Netlify (SPA routing, security headers) |

## Getting Started

```bash
# Prerequisites: Node ≥20, pnpm ≥8

# Clone and install
git clone https://github.com/moriarthur/Barbershop-SPA.git
cd Barbershop-SPA
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Performance Highlights

- **Critical CSS inlined** in `index.html` for instant first paint
- **LCP preloaded** — hero logo image fetches with high priority
- **Code splitting** — React, UI, and date vendors in separate chunks
- **Lazy-loaded images** — background hero fades in after load
- **Google Fonts deferred** — non-blocking font loading with print media trick
- **Security headers** — X-Frame-Options, CSP, Referrer-Policy via Netlify config

## Customization

To adapt this template for a new barbershop client:

1. Replace assets in `src/assets/` and `public/` (logo, favicon, photos)
2. Update component content (services, barbers, reviews, contact info)
3. Adjust CSS custom properties in `src/app/globals.css` for brand colors
4. Update `site.webmanifest` and `index.html` meta tags
5. Deploy to Netlify (auto-detected from `netlify.toml`)

---

<div align="center">

*Built with [Claude Code](https://claude.ai/code) — AI-native development workflow*

</div>
