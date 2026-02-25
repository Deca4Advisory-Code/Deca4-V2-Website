# Deca4 V2 Website

**Official marketing website for DECA4 Advisory FZE** - A Dubai-based technology advisory firm specializing in blockchain, Web3, and digital transformation.

**Live Site:** [www.deca4.com](https://www.deca4.com)

---

## Project Overview

The Deca4 V2 Website is a modern, single-page marketing website built with Next.js 16, featuring a dark theme, animated background, and responsive design. The site showcases Deca4's blockchain advisory services and enterprise solutions.

### Key Information

| Property | Value |
|----------|-------|
| **Company** | DECA4 Advisory FZE |
| **Location** | Dubai World Trade Center, Dubai, UAE |
| **Version** | V2 |
| **Type** | Marketing/Landing Page |
| **License** | Private (Internal) |

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js | 16.1.6 |
| **React** | React | 19.2.3 |
| **React DOM** | React DOM | 19.2.3 |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | v4 |
| **Icons** | Iconify React | 6.0.2 |
| **Fonts** | Inter, Space Mono | Google Fonts |
| **Animation** | Unicorn Studio | v1.4.29 |

### Dependencies

```json
{
  "@iconify/react": "^6.0.2",
  "next": "16.1.6",
  "react": "19.2.3",
  "react-dom": "19.2.3"
}
```

---

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts and metadata
│   │   ├── page.tsx            # Main page component composition
│   │   └── globals.css         # Global styles and Tailwind config
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with scroll effect
│   │   ├── MenuOverlay.tsx     # Fullscreen menu overlay
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── CoreOfferings.tsx   # Services showcase
│   │   ├── ClientsPartners.tsx # Client/partner logos
│   │   ├── Contact.tsx         # Contact section with Calendly
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── CornerDecorations.tsx # Decorative corner elements
│   │   └── UnicornBackground.tsx # Animated background wrapper
│   └── hooks/
│       └── useScroll.ts        # Custom scroll position hook
├── public/
│   └── images/                 # Static assets
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── .env                        # Environment variables (gitignored)
```

---

## Components

### Page Structure (`src/app/page.tsx`)

The main page is a client component that composes all sections:

```typescript
<Header />           {/* Fixed navigation bar */}
<MenuOverlay />      {/* Fullscreen mobile menu */}
<Hero />             {/* Hero section with CTA */}
<About />            {/* Company overview */}
<ClientsPartners />  {/* Client/partner showcase */}
<CoreOfferings />    {/* Services grid */}
<Contact />          {/* Contact with Calendly embed */}
<Footer />           {/* Site footer */}
```

### Component Details

| Component | Description | Props |
|-----------|-------------|-------|
| `Header` | Fixed navigation with logo and menu button. Changes background on scroll (50px threshold). | `onMenuToggle: () => void` |
| `MenuOverlay` | Fullscreen menu overlay with navigation links. | `isOpen: boolean`, `onClose: () => void` |
| `Hero` | Main hero section with headline and CTA. | None |
| `About` | Company description and value proposition. | None |
| `CoreOfferings` | Grid of service offerings (Blockchain, Web3, Advisory). | None |
| `ClientsPartners` | Logo grid showcasing clients and partners. | None |
| `Contact` | Contact section with embedded Calendly widget. | None |
| `Footer` | Footer with copyright and navigation links. | None |
| `CornerDecorations` | SVG corner decorations for visual framing. | None |
| `UnicornBackground` | Wrapper for Unicorn Studio animated background. | None |

---

## Styling

### Design System

The site uses Tailwind CSS v4 with a custom theme defined in `globals.css`:

```css
@theme inline {
  --color-primary-dark: #050505;  /* Main background */
  --color-teal: #00A99D;           /* Accent color */
  --color-purple: #430098;         /* Secondary accent */
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'Space Mono', monospace;
}
```

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Dark | `#050505` | Background |
| Teal | `#00A99D` | Primary accent, CTAs, hover states |
| Purple | `#430098` | Secondary accent |
| White | `#FFFFFF` | Text, borders (with opacity) |

### Typography

| Font | Usage | Weights |
|------|-------|---------|
| Inter | Body text, headings | 200, 300, 400, 500, 600 |
| Space Mono | UI elements, labels, buttons | 400 |

### Custom Animations

- **Smooth Shake**: Applied to logo and interactive elements on hover
- **Scroll Transitions**: Header background blur and opacity changes
- **Unicorn Studio**: WebGL-based animated background

---

## Features

### 1. Animated Background (Unicorn Studio)

The site uses [Unicorn Studio](https://unicorn.studio/) for a WebGL-based animated background:

```typescript
// Auto-loaded on mount via useEffect
initUnicornStudio();
```

**Embed Script:** `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js`

### 2. Scroll-Aware Header

The header changes appearance when scrolled past 50px:

- **Top state:** Transparent background, more padding
- **Scrolled state:** Semi-transparent black background with blur, reduced padding

### 3. Smooth Scrolling

"Return to top" functionality on logo click:

```typescript
window.scrollTo({ top: 0, behavior: 'smooth' });
```

### 4. Custom Scroll Hook

The `useScroll` hook provides real-time scroll position for responsive UI changes:

```typescript
const scrollY = useScroll(); // Returns current scrollY position
```

### 5. Iconify Integration

Dynamic icon loading via Iconify:

```typescript
import { Icon } from '@iconify/react';
<Icon icon="solar:hamburger-menu-linear" width={20} />
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## External Services

### Calendly Integration

The Contact section embeds a Calendly scheduling widget:

```typescript
<iframe
  src="https://calendly.com/deca4 advisory/30min?background_color=050505&text_color=ffffff&primary_color=00A99D"
  // ...
/>
```

### Unicorn Studio

Animated WebGL background service. The script is loaded in `page.tsx`:

```html
<script src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js" />
```

### Image Hosting

Logo and assets hosted on Supabase Storage:
```
https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/
```

---

## Deployment

### Vercel (Recommended)

1. **Connect Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import `Deca4Advisory-Code/Deca4-V2-Website`

2. **Configure Settings:**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically deploy on push to `main` branch

### Environment Variables

Currently, the `.env` file contains only the GitHub token (not deployed):

```
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxx
```

No production environment variables are required for the website to function.

---

## Configuration Files

### `next.config.ts`

Standard Next.js configuration (currently empty, using defaults):

```typescript
const nextConfig: NextConfig = {
  /* config options here */
};
```

### `tsconfig.json`

TypeScript configuration with:
- Target: ES2017
- Strict mode enabled
- Path alias: `@/*` → `./src/*`
- JSX: react-jsx (Next.js default)

---

## Browser Support

- Modern browsers with ES2017+ support
- Mobile responsive (iOS Safari, Chrome Mobile)
- WebGL support required for Unicorn Studio background

---

## License

Internal project for DECA4 Advisory FZE. All rights reserved.

---

*Last Updated: 2026-02-25*
