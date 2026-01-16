# Project Memory: Schiersteiner Barbershop

## Changelog

### 2025-01-16
**Features & UX:**
- **Footer**: Added developer credit "Developed by Galart" with GitHub icon link
- **Footer**: Updated copyright year from 2025 to 2026
- **UX**: Standardized text selection - content selectable, UI elements not
- **Styling**: Unified info card styling across Contact, Services, and Barbers sections

**Assets & Content:**
- **Barber Photos**: Replaced Unsplash URLs with local files (marco.webp, anna.webp, thomas.webp)
- **Contact**: Fixed Google Maps embed to show correct address
- **Navigation**: Added "Über uns" (About) section to nav

**Bug Fixes:**
- **FAB**: Fixed smooth fade-in/fade-out animations, improved footer offset calculation

**Code Cleanup:**
- **Deleted 40+ unused UI components** - Reduced from 48 to 7 files (only button, calendar, card, input, label, tabs, utils remain)
- **Removed 25+ unused dependencies** - Reduced from ~50 to ~15 packages
- **Deleted trash files**: package-lock.json, guidelines/, ATTRIBUTIONS.md
- **Updated .gitignore**: Added deployment platforms (.vercel, .netlify), databases

**Documentation:**
- **Updated .gitignore** with deployment platforms, lock files (commented), databases
- **Updated IMPLEMENTATION.md** with changelog, text selection policy, footer credit docs, useScroll hook docs, navigation updates, image assets catalog, Google Maps embed docs
- **Updated PROJECT_MEMORY.md** with changelog, assets update, navigation update, developer credit, known issues/TODO

---

## Business Overview

**Business Name:** Schiersteiner Barbershop
**Location:** Reichsapfelstraße 12, Wiesbaden-Schierstein, Germany
**Phone:** 0611 - 20 779
**Website:** https://schiersteiner-barbershop.de/
**Language:** German (de)
**Tagline:** "For Ladies & Gentlemen"

### Business Type
Premium hair salon serving both men and women with luxury barbershop aesthetic. Combines traditional barber craftsmanship with modern perfection.

### Operating Hours
- Monday - Saturday: 9:00 - 19:00
- Sunday: Closed

---

## Design System

### Typography

**Primary Font (Headings):** Playfair Display (Serif)
- Source: Google Fonts
- Weights: 400, 500, 600, 700
- Used for: h1-h6, buttons, labels, section titles
- URL: `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700`

**Secondary Font (Body):** Inter (Sans-serif)
- Source: Google Fonts
- Weights: 300, 400, 500, 600, 700
- Used for: Body text, inputs, UI elements
- URL: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`

**Typography Scale (Tailwind):**
- `text-2xl` → h1 default
- `text-xl` → h2 default
- `text-lg` → h3 default
- `text-base` → h4 default

---

### Color Palette

**Theme:** Luxury Dark Mode (Warm Brown/Brass Tones)

| Variable | Value | Usage |
|----------|-------|-------|
| `--background` | `#0D0C0A` | Main background (dark brown) |
| `--foreground` | `#F5F1E8` | Main text (cream white) |
| `--primary` | `#D4AF37` | Primary actions (gold/brass) |
| `--primary-foreground` | `#0D0C0A` | Text on primary |
| `--secondary` | `#2A2420` | Secondary elements |
| `--secondary-foreground` | `#F5F1E8` | Text on secondary |
| `--muted` | `#3D362E` | Muted/disabled elements |
| `--muted-foreground` | `#A89F8F` | Muted text |
| `--accent` | `#D4AF37` | Accent/highlights |
| `--card` | `#1A1410` | Card backgrounds |
| `--border` | `rgba(212, 175, 55, 0.2)` | Borders (transparent gold) |
| `--input-background` | `#2A2420` | Input field backgrounds |
| `--destructive` | `#C14545` | Error states |
| `--ring` | `#D4AF37` | Focus rings |

**Design Philosophy:**
- Dark, warm tones for luxury feel
- Gold/brass (#D4AF37) as signature accent color
- High contrast for accessibility
- Subtle transparent borders for depth

---

### Spacing & Layout

**Border Radius:**
- Base: `0.5rem` (8px)
- sm: `4px`
- md: `6px`
- lg: `8px`
- xl: `12px`

**Responsive Breakpoints:**
- Mobile: Default (base styles)
- `md:` - 768px (tablet/desktop)
- `lg:` - 1024px (large screens)

---

### Component Patterns

**Button Styles:**
- Primary: `bg-primary text-primary-foreground hover:bg-primary/90`
- Outline: `border-primary/30 text-primary hover:bg-primary/10`
- Destructive: Uses `--destructive` color

**Card Style:**
```tsx
className="bg-card border-border hover:border-primary/50 transition-colors"
```

**Section Headers:**
```tsx
<div className="h-px w-12 bg-primary/50"></div>
<span className="px-4 text-primary uppercase tracking-widest text-sm">Label</span>
<div className="h-px w-12 bg-primary/50"></div>
```

---

## Services & Pricing

### Gentlemen (Herren)
| Service | Price | Duration |
|---------|-------|----------|
| Trockenhaarschnitt | 18€ | 30 Min |
| Waschen, Schneiden, Föhnen & Stylen | 20€ | 45 Min |
| Schneiden, Rasieren, Föhnen & Stylen | 30€ | 60 Min |
| Bartformrasur / Nassrasur | 15€ | 30 Min |
| Kinder bis 12 Jahre | 15€ | 30 Min |
| Augenbrauen zupfen | 12€ | 15 Min |
| Heißwachs Ohren u. Nase | 8€ | 15 Min |
| Kopfmassage | 15€ | 20 Min |
| Gesichtskur (Maske, Dampfbad, Massage) | 20€ | 30 Min |
| Premium-Paket (Waschen, Schneiden, Bartrasur, Augenbrauen, Föhnen) | 40€ | 90 Min |

### Ladies (Damen)
| Service | Price | Duration |
|---------|-------|----------|
| Waschen/Föhnen | ab 21€ | 30 Min |
| Waschen/Schneiden/Föhnen | ab 36,75€ | 60 Min |
| Coloration | ab 31,50€ | 90 Min |
| Gloss | ab 20,25€ | 45 Min |
| Neufärbung | ab 35,25€ | 90 Min |
| Effektsträhnen | ab 21,75€ | 60 Min |
| Strähnen am Oberkopf | ab 33€ | 75 Min |
| Strähnen komplett | ab 44,25€ | 120 Min |
| Balayage mittellänges Haar (inkl. Pflege und Gloss) | ab 105€ | 150 Min |
| Balayage langes Haar (inkl. Pflege und Gloss) | ab 120€ | 180 Min |
| Intensivpflege | 12,38€ | 20 Min |
| Dauerwelle | ab 49,50€ | 120 Min |
| Hochsteckfrisur | ab 35,25€ | 60 Min |
| Flechtfrisur | ab 13,50€ | 30 Min |
| Augenbrauen zupfen | 7,50€ | 15 Min |

**Note:** All prices include VAT (MwSt). Appointment recommended.

---

## Team (Barbers)

| Name | Specialization |
|------|----------------|
| Marco Weber | Klassische Herrenschnitte & Bartpflege |
| Anna Schmidt | Damenfrisuren & Colorationen |
| Thomas Müller | Moderne Styles & Trends |

---

## Booking System

**4-Step Wizard:**
1. **Service Selection** - Choose from Gentlemen/Ladies services
2. **Barber Selection** - Choose specific barber or "any available"
3. **Date & Time** - Calendar + time slots (9:00-19:00, closed Sundays)
4. **Customer Details** - Name, email, phone, GDPR consent

**Business Hours for Booking:**
- Monday - Saturday: 9:00 - 19:00
- Time slots: Every 30 minutes
- Sunday: Disabled

**Validation:**
- Name: Min 2 characters
- Email: Valid email format
- Phone: German format (starts with +49 or 0, 10-13 digits)
- GDPR: Must be checked

---

## Legal Pages

### 1. Impressum
Legal disclosure required by German law (§ 5 TMG) containing:
- Business information
- Contact details
- VAT ID (if applicable)

### 2. Datenschutz (Privacy Policy)
GDPR-compliant privacy policy covering:
- Data collection (name, email, phone for bookings)
- Data usage (appointment management only)
- Data storage/deletion policies
- User rights under GDPR

### 3. AGB (Terms & Conditions)
Business terms including:
- Cancellation policy
- Payment terms
- Liability limitations

---

## UI Text (German)

**Navigation:**
- Home → Scroll to top
- Über uns → About section (added 2025-01-16)
- Leistungen → Services section
- Unser Team → Barbers section
- Galerie → Gallery section
- Kontakt → Contact section
- Termin buchen → Booking wizard

**CTA Buttons:**
- "Jetzt Termin buchen" (Book appointment now)
- "Buchen" (Book)
- "Anrufen" (Call) - Phone: 0611-20779

**Promo Banner:**
- "Neu hier? 10% Rabatt auf deinen ersten Termin!"

---

## Assets

### Images
- `logo.png` (905KB) - Navigation logo
- `logo_2.webp` (313KB) - Hero section logo
- `Interior_2.webp` (3.3MB) - About section interior photo
- `Interior_3.webp` (629KB) - Hero background with parallax

### Team Photos (Barbers)
- `src/assets/barbers/marco.webp` - Marco Weber (Master Barber)
- `src/assets/barbers/anna.webp` - Anna Schmidt (Senior Stylist)
- `src/assets/barbers/thomas.webp` - Thomas Müller (Barber & Stylist)
- **Note:** Use `object-top` class to prevent head cropping

### Icons
- `src/assets/github-mark.svg` - GitHub logo for footer developer credit

### Gallery Images
- Currently uses Unsplash placeholder URLs (to be replaced with real photos)

### Favicon Set
- `/favicon.ico`
- `/favicon-16x16.png`
- `/favicon-32x32.png`
- `/apple-touch-icon.png` (180x180)
- `/android-chrome-192x192.png`
- `/android-chrome-512x512.png`
- `/site.webmanifest`

---

## Key Features

1. **Parallax Hero Effect** - Scroll-based background animation
2. **Smooth Scroll Navigation** - With active section highlighting
3. **Mobile-First Design** - Hamburger menu, floating action buttons
4. **Floating Action Buttons** - Call/Book buttons that stop at vertical center
5. **Fade-in Animations** - For visual polish
6. **Modal Legal Pages** - Impressum, Datenschutz, AGB
7. **Click-to-Call** - Phone number integration
8. **Instagram Integration** - Social media links
9. **4-Step Booking Wizard** - With validation and confirmation
10. **Dark Mode First Design** - Luxury aesthetic

---

## Content Language & SEO

**HTML Language:** `lang="de"`

**Meta Description (German):**
"Schiersteiner Barbershop in Wiesbaden-Schierstein. Klassisches Barbier-Handwerk für Damen und Herren. Jetzt Termin buchen!"

**Keywords:**
Barbershop, Wiesbaden, Schierstein, Herrenfrisur, Damenfrisur, Bartpflege, Haarschnitt, Barbers

**Title Tag:**
"Schiersteiner Barbershop - For Ladies & Gentlemen | Demo"

---

## Development Notes

- **CSS Architecture:** `index.css` → imports `fonts.css`, `tailwind.css`, `theme.css`
- **Text Selection Policy:** Content is selectable, UI elements have `select-none`
- **Scroll offset:** 80px for fixed navigation
- **Section detection threshold:** 150px from top
- **Home section threshold:** 300px from top
- **Phone validation:** German format only
- **All dates:** German locale (date-fns with `de` locale)

---

## Developer Credit

**Footer Implementation:**
- Located at bottom of footer, above copyright
- Shows "Developed by Galart" with gold underline (#D4AF37)
- GitHub icon (no link) displayed next to name
- Text color: `#A89F8F` (muted-foreground)
- GitHub Profile: https://github.com/moriarthur
- Asset: `src/assets/github-mark.svg`

---

## Known Issues / TODO

1. **Unsplash placeholder images** - Gallery section uses placeholder URLs
2. **Large image sizes** - Interior_2.webp is 3.3MB (consider compression)
3. **No backend** - Booking system logs to console only
