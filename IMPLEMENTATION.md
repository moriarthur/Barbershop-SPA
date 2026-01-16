# Implementation Guide: Schiersteiner Barbershop

## Changelog

### 2025-01-16
**Features & UX:**
- **Footer Developer Credit**: Added "Developed by Galart" with GitHub icon (github-mark.svg)
- **Copyright Year**: Updated from 2025 to 2026
- **Text Selection Standardization**: Implemented industry norms - content selectable, UI elements not
- **Card Styling**: Unified all info cards to use `py-4`, `text-sm text-muted-foreground`

**Assets & Content:**
- **Barber Images**: Replaced Unsplash URLs with local images (marco.webp, anna.webp, thomas.webp)
- **Barber Image Cropping**: Fixed with `object-top` class
- **Google Maps**: Fixed embed to show correct address (Reichsapfelstraße 12, 65201 Wiesbaden)
- **Navigation**: Added "Über uns" (About) to nav items and scroll tracking

**Bug Fixes:**
- **FAB Animations**: Fixed smooth fade-in/fade-out behavior
- **useScroll Hook**: Fixed footer offset calculation for FAB positioning

**Code Cleanup:**
- **Deleted 40+ unused UI components** (accordion, alert, avatar, badge, breadcrumb, carousel, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, input-otp, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, skeleton, slider, sonner, switch, sidebar, table, textarea, toggle, toggle-group, tooltip, chart, hover-card, use-mobile)
- **Removed 25+ unused dependencies** (@emotion/*, @popperjs/*, multiple @radix-ui packages, cmdk, embla-carousel-react, input-otp, motion, next-themes, react-resizable-panels, react-responsive-masonry, react-slick, recharts)
- **Deleted trash files**: package-lock.json, guidelines/, ATTRIBUTIONS.md
- **Updated .gitignore**: Added deployment platforms, lock files (commented), databases

**Documentation:**
- **Updated IMPLEMENTATION.md**: Added changelog, text selection policy, footer credit docs, useScroll hook docs, updated navigation section, added image assets catalog, added Google Maps embed docs
- **Updated PROJECT_MEMORY.md**: Added changelog, updated assets, updated navigation, added developer credit section, added known issues/TODO

---

## Technology Stack

### Core
- **React 18.3.1** - UI framework
- **TypeScript** - Type safety (.tsx files)
- **Vite 6.3.5** - Build tool & dev server
- **pnpm** - Package manager (uses hard links for efficient storage)

### Styling
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives (dialog, label, popover, slot, tabs)
- **class-variance-authority** - Variant utilities
- **tw-animate-css** - Animation utilities

### Form & Data
- **react-hook-form 7.55.0** - Form state management
- **date-fns 3.6.0** - Date utilities (with German locale)
- **react-day-picker 8.10.1** - Calendar component

### UI Components
- **lucide-react 0.487.0** - Icon library
- **vaul 1.1.2** - Drawer/sheet components
- **sonner 2.0.3** - Toast notifications

### Additional
- **clsx 2.1.1** + **tailwind-merge 3.2.0** - Class merging

---

## Project Structure

```
/
├── public/                          # Static assets
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── site.webmanifest
│
├── src/
│   ├── main.tsx                     # Entry point
│   ├── styles/
│   │   ├── index.css                # CSS entry point
│   │   ├── fonts.css                # Google Fonts import
│   │   ├── tailwind.css             # Tailwind config
│   │   └── theme.css                # Design tokens & @theme
│   │
│   └── app/
│       ├── App.tsx                  # Main app (routing, state)
│       │
│       └── components/
│           ├── ui/                  # Radix UI primitives (7 files - all used)
│           │   ├── button.tsx
│           │   ├── calendar.tsx
│           │   ├── card.tsx
│           │   ├── input.tsx
│           │   ├── label.tsx
│           │   ├── tabs.tsx
│           │   └── utils.ts
│           │
│           ├── About.tsx             # Story/About section
│           ├── Barbers.tsx          # Team showcase
│           ├── Booking.tsx          # 4-step booking wizard
│           ├── Contact.tsx          # Contact info & location
│           ├── FloatingActionButton.tsx
│           ├── Footer.tsx
│           ├── Gallery.tsx          # Image gallery
│           ├── Hero.tsx             # Landing section with parallax
│           ├── Legal.tsx            # Impressum/Datenschutz/AGB modal
│           ├── Navigation.tsx       # Fixed header with mobile menu
│           ├── PromoBanner.tsx
│           ├── Reviews.tsx          # Testimonials
│           └── Services.tsx         # Service pricing tabs
│
├── index.html                       # HTML template
├── vite.config.ts                   # Vite configuration
└── package.json                     # Dependencies & scripts
```

---

## Configuration Files

### package.json
```json
{
  "name": "schiersteiner-barbershop",
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

### vite.config.ts
```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### index.html
- `lang="de"` - German language attribute
- SEO meta tags (description, keywords, Open Graph, Twitter)
- Favicon links for all sizes
- Root div: `<div id="root"></div>`

---

## CSS Architecture

### Import Order (`src/styles/index.css`)
```css
@import './fonts.css';      /* Google Fonts */
@import './tailwind.css';   /* Tailwind base */
@import './theme.css';      /* Design tokens & @theme */
```

### Theme Variables (`src/styles/theme.css`)

**CSS Custom Properties (Dark Mode First):**
```css
:root {
  --background: #0D0C0A;
  --foreground: #F5F1E8;
  --primary: #D4AF37;
  --secondary: #2A2420;
  --muted: #3D362E;
  --card: #1A1410;
  --border: rgba(212, 175, 55, 0.2);
  --input-background: #2A2420;
  --destructive: #C14545;
  --ring: #D4AF37;
  --radius: 0.5rem;
}
```

**Tailwind v4 @theme directive:**
```css
@theme inline {
  --color-background: var(--background);
  --color-primary: var(--primary);
  /* ... maps all CSS vars to Tailwind utilities */
}
```

**Base Styles:**
```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  h1-h6, button, label {
    font-family: 'Playfair Display', serif;
  }
  input, body {
    font-family: 'Inter', sans-serif;
  }
}
```

---

## Component Architecture

### App.tsx (Main Controller)

**State Management:**
```typescript
const [currentSection, setCurrentSection] = useState('home');
const [isBookingOpen, setIsBookingOpen] = useState(false);
const [selectedService, setSelectedService] = useState<Service | null>(null);
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const [legalPage, setLegalPage] = useState<'impressum' | 'datenschutz' | 'agb' | null>(null);
```

**Navigation Handler:**
```typescript
const handleNavigate = (section: string) => {
  setCurrentSection(section);
  if (section === 'booking') {
    setIsBookingOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Close booking if open, then scroll
    scrollToSection(section);
  }
};
```

**Scroll Detection (useEffect):**
- Monitors scroll position to update `currentSection`
- Thresholds: Home (300px), Sections (150px)
- Disabled when booking is open

**Render Logic:**
```tsx
{isBookingOpen ? (
  <Booking preselectedService={selectedService} ... />
) : (
  <>
    <PromoBanner />
    <Hero />
    <About />
    <Services />
    <Barbers />
    <Gallery />
    <Contact />
    <Reviews />
    <Footer />
    <FloatingActionButton />
  </>
)}
```

---

### Navigation.tsx

**Features:**
- Fixed header with blur backdrop
- Desktop: Horizontal nav links
- Mobile: Hamburger menu with dropdown
- Active section highlighting
- Logo links to home

**Nav Items:**
```tsx
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Über uns' },      // Added 2025-01-16
  { id: 'services', label: 'Leistungen' },
  { id: 'barbers', label: 'Unser Team' },
  { id: 'gallery', label: 'Galerie' },
  { id: 'contact', label: 'Kontakt' },
];
```

**Scroll Tracking Sections:**
```typescript
const sections = ['home', 'about', 'services', 'barbers', 'gallery', 'contact'];
```

**Key Classes:**
- `fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80`
- `border-b border-border`

---

### Hero.tsx

**Features:**
- Parallax scroll effect on background image
- Bottom-center positioned logo_2
- CTA buttons (Book Now, Call)
- Responsive layout

**Key Elements:**
- Background: `Interior_3.webp`
- Logo: `logo_2.png`
- Animation: Parallax on scroll

---

### Services.tsx

**Data Structure:**
```typescript
interface Service {
  name: string;
  description?: string;
  price: string;
  duration: string;
}
```

**Component Structure:**
- Radix UI Tabs (Gentlemen/Ladies)
- Grid layout: `grid-cols-1 md:grid-cols-2`
- Each service in a Card with "Buchen" button
- Price note: "Alle Preise verstehen sich inklusive MwSt."

---

### Booking.tsx

**4-Step Wizard:**

| Step | Content | State |
|------|---------|-------|
| 1 | Service selection (tabs) | `selectedService` |
| 2 | Barber selection (cards) | `selectedBarber` |
| 3 | Calendar + time slots | `selectedDate`, `selectedTime` |
| 4 | Customer form + summary | `customerName`, `customerEmail`, `customerPhone`, `gdprConsent` |

**Validation Functions:**
```typescript
validateEmail(email: string): boolean  // Email regex
validatePhone(phone: string): boolean  // German format: /^(\+49|0)[0-9]{9,12}$/
validateForm(): boolean                // Returns true if all valid
```

**Time Slot Generation:**
```typescript
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 19; hour++) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }
  return slots;
};
```

**Calendar Props:**
```tsx
<Calendar
  mode="single"
  disabled={(date) => date < new Date() || date.getDay() === 0}
  locale={de}
/>
```

**Confirmation Screen:**
- Shows booking summary
- Checkmark icon with confirmation message
- "Zurück zur Startseite" button

---

### FloatingActionButton.tsx

**Behavior:**
- Fixed position right side
- Two buttons: Call (phone icon), Book (calendar icon)
- Stops scrolling at vertical center
- Fade-in animation on scroll

**Key Classes:**
- `fixed right-4 bottom-4 z-40`
- `transition-all duration-300`

---

### Legal.tsx

**Modal Types:**
- `'impressum'` - Legal disclosure
- `'datenschutz'` - Privacy policy (GDPR)
- `'agb'` - Terms & conditions

**UI:**
- Full-screen overlay
- Scrollable content
- Close button (X)
- Backdrop blur

---

## Key Patterns

### Section Headers
```tsx
<div className="text-center mb-16">
  <div className="inline-flex items-center justify-center mb-4">
    <div className="h-px w-12 bg-primary/50"></div>
    <span className="px-4 text-primary uppercase tracking-widest text-sm">Label</span>
    <div className="h-px w-12 bg-primary/50"></div>
  </div>
  <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Title</h2>
  <p className="text-foreground/70 max-w-2xl mx-auto">Description</p>
</div>
```

### Card Component
```tsx
<Card className="bg-card border-border hover:border-primary/50 transition-colors p-6">
  {/* Content */}
</Card>
```

### Button Variants
```tsx
<Button variant="default">   // bg-primary
<Button variant="outline">   // border-primary/30
<Button variant="ghost">     // transparent
<Button variant="destructive"> // bg-destructive
```

### Input with Error
```tsx
<Input
  className={errors.name ? 'border-destructive' : 'border-border'}
/>
{errors.name && (
  <p className="text-destructive text-xs flex items-center gap-1">
    <AlertCircle size={12} />
    {errors.name}
  </p>
)}
```

---

## Text Selection Policy

**Industry Standard Approach:**

| Element Type | Selectable | Example |
|--------------|------------|---------|
| **Content text** | ✅ Yes | Paragraphs, descriptions, bios, reviews |
| **Contact info** | ✅ Yes | Addresses, phone numbers, emails |
| **Service info** | ✅ Yes | Prices, durations, descriptions |
| **Buttons** | ❌ No | CTA buttons, nav items, tabs |
| **Labels** | ❌ No | Section headings, decorative text |
| **Copyright** | ❌ No | Legal footer text |

**Implementation:**
- Content: No `select-none` class (default selectable)
- UI elements: Add `select-none` class

---

## Footer Developer Credit

**Location:** `src/app/components/Footer.tsx` (bottom of footer)

**Structure:**
```tsx
<div className="border-t border-border/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
      <span>Developed by</span>
      <a href="https://github.com/moriarthur" target="_blank"
         className="hover:opacity-80 transition-opacity border-b border-[#D4AF37] pb-0.5"
         style={{ color: '#A89F8F' }}>
        Galart
      </a>
      <span className="inline-flex items-center justify-center">
        <img src={githubMark} alt="GitHub" width="16" height="16" />
      </span>
    </div>
  </div>
</div>
```

**Assets:**
- `src/assets/github-mark.svg` - GitHub logo icon
- Color: `#D4AF37` for underline, `#A89F8F` for "Galart" text

---

## useScroll Hook

**Location:** `src/app/hooks/useScroll.ts`

**Purpose:** Manages scroll position and calculates element visibility for FAB positioning

**Key Logic:**
```typescript
const footerOffset = Math.max(
  0,
  Math.min(
    document.documentElement.scrollHeight - window.scrollY - footerRef.current?.offsetHeight || 0,
    footerRef.current?.offsetHeight || 0
  )
);
```

**Usage:**
- FAB buttons stop at vertical center
- Calculates distance to footer
- Prevents buttons from overlapping footer content

---

## Import Patterns

### React
```typescript
import React, { useState, useEffect } from 'react';
```

### UI Components
```typescript
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
```

### Icons (Lucide)
```typescript
import { Check, ArrowLeft, Clock, AlertCircle } from 'lucide-react';
```

### Date Utilities
```typescript
import { format, addDays } from 'date-fns';
import { de } from 'date-fns/locale';
```

---

## German Localization

### Date Formatting
```typescript
format(date, 'PPP', { locale: de })
// Output: "Dienstag, 15. Januar 2026"
```

### UI Text Examples
| English | German |
|---------|--------|
| Book Now | Jetzt Buchen |
| Services | Unsere Leistungen |
| For Ladies & Gentlemen | Für Damen & Herren |
| Privacy Policy | Datenschutz |
| Terms & Conditions | AGB |
| Legal Notice | Impressum |

---

## Responsive Design Patterns

### Mobile/Desktop Navigation
```tsx
{/* Desktop: Show links */}
<div className="hidden md:flex items-center space-x-8">
  {/* Nav links */}
</div>

{/* Mobile: Hamburger menu */}
<button className="md:hidden">
  {/* Hamburger icon */}
</button>
```

### Grid Layouts
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

### Typography Scaling
```tsx
<h2 className="text-3xl sm:text-4xl md:text-5xl">
  {/* Scales from 3xl → 4xl → 5xl */}
</h2>
```

---

## Build & Development

### Start Dev Server
```bash
pnpm dev
# or
npm run dev
```

### Build for Production
```bash
pnpm build
# or
npm run build
```

### Output
- Default dist directory
- Vite handles optimization
- Tailwind v4 auto-purges unused styles

---

## Missing / TODO Items

1. **No tsconfig.json** - Should add TypeScript config
2. **No PostCSS config** - Tailwind v4 auto-configures (empty postcss.config.js)
3. **No testing framework** - Consider adding Vitest + React Testing Library
4. **No backend** - Booking currently logs to console
5. **No ESLint/Prettier** - Consider adding for code quality
6. **Gallery placeholder images** - Replace Unsplash URLs with real photos
7. **Large image sizes** - Consider compressing Interior_2.webp (3.3MB)

---

## Git History Notes

Recent commits indicate:
- Logo positioning and hero section redesign
- Image optimization (PNG → WebP)
- Navigation improvements (clickable buttons, logo links)
- Floating action button positioning
- Footer redesign (logo replacement, social media placement)
- Demo-pass feature removed

---

## Accessibility Features

- **ARIA labels** on interactive elements
- **Semantic HTML** (nav, section, header, footer)
- **Keyboard navigation** support (Radix UI)
- **Focus states** with ring color
- **High contrast** colors (dark theme)
- **Screen reader** friendly text

---

## Performance Considerations

1. **WebP format** for images (smaller file sizes)
2. **Tailwind purging** - only used styles included
3. **Lazy loading** - Consider adding for images
4. **Code splitting** - Vite handles automatically
5. **Image optimization** - Some large images (Interior_2.webp = 3.3MB)

---

## Common Tailwind Classes Used

| Purpose | Class |
|---------|-------|
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Section padding | `py-20` |
| Card background | `bg-card` |
| Border | `border-border` |
| Primary text | `text-primary` |
| Muted text | `text-muted-foreground` |
| Hover border | `hover:border-primary/50` |
| Transition | `transition-colors duration-300` |
| Select-none (UI elements) | `select-none` |
| Backdrop blur | `backdrop-blur-md` |
| Info card padding | `px-8 py-4` |
| Info card text | `text-sm text-muted-foreground` |

---

## Image Assets

**Logo Files:**
- `src/assets/logo.png` (905KB) - Navigation logo
- `src/assets/logo_2.webp` (313KB) - Hero section / footer logo

**Interior Photos:**
- `src/assets/Interior_2.webp` (3.3MB) - About section
- `src/assets/Interior_3.webp` (629KB) - Hero background with parallax

**Team Photos (Local):**
- `src/assets/barbers/marco.webp` - Marco Weber
- `src/assets/barbers/anna.webp` - Anna Schmidt
- `src/assets/barbers/thomas.webp` - Thomas Müller
- **Image positioning:** `object-top` class prevents head cropping

**Icon Assets:**
- `src/assets/github-mark.svg` - GitHub logo for footer developer credit

**Gallery Images:**
- Currently uses Unsplash placeholder URLs (to be replaced)

---

## Google Maps Embed

**Contact Section Location:**
`src/app/components/Contact.tsx`

**Embed URL:**
```tsx
src="https://maps.google.com/maps?q=Reichsapfelstra%C3%9Fe+12,+65201+Wiesbaden&t=&z=15&ie=UTF8&iwloc=&output=embed"
```

**Address Mapped:**
Reichsapfelstraße 12, 65201 Wiesbaden, Germany
