# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Adnexus is an enterprise programmatic advertising platform offering DSP (Demand-Side Platform), SSP (Supply-Side Platform), and ADX (Ad Exchange) capabilities with focus on premium CTV (Connected TV) inventory. The web application is the marketing site showcasing the platform's capabilities.

**Live Site**: https://ad.nexus
**Repository**: github.com/adnexusinc/web

## Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui (Radix UI primitives + Tailwind CSS)
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query (React Query)
- **Backend**: Supabase
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: GitHub Pages with automated CI/CD

## Development Commands

```bash
# Start development server (runs on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build for development mode (with source maps)
npm run build:dev

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## Architecture

### Routing Structure

The app uses React Router with a comprehensive page hierarchy:

- **Root**: `/` - Main landing page (`NewIndex.tsx`)
- **Products**: `/dsp`, `/ssp`, `/adx`, `/studio`
- **Platform**: `/platform/overview`, `/platform/plan`, `/platform/activate`, `/platform/measure`
- **Solutions**: `/advertisers`, `/agencies`, `/publishers`
- **Agency Services**: `/agency` (retainer), `/agency/services`
- **Services**: `/services/ai`, `/services/creative`, `/services/marketing`, `/services/specialized-production`
- **Company**: `/about`, `/company`, `/contact`, `/faq`
- **Legal**: `/terms`, `/privacy`, `/cookies`, `/dpa`, `/gdpr`
- **Case Studies**: `/case-studies`, `/case-study/damon-motorcycles`, etc.

### Component Architecture

**Path Aliases**: `@/` resolves to `./src/`

```
src/
├── components/
│   ├── Navigation.tsx        # Main site navigation with dropdowns
│   ├── sections/             # Reusable page sections
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   └── ...
│   └── ui/                   # shadcn/ui components (DO NOT EDIT MANUALLY)
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── pages/
│   ├── NewIndex.tsx          # Main landing page with video hero
│   ├── platform/             # Platform-specific pages
│   ├── agency/               # Agency service pages
│   ├── services/             # Service offering pages
│   └── case-study/           # Individual case studies
├── lib/
│   └── utils.ts              # Utility functions (cn, etc.)
├── hooks/                    # Custom React hooks
├── integrations/
│   └── supabase/             # Supabase client config
└── data/
    └── case-studies/         # Case study data
```

### Key Components

**Navigation Component** (`Navigation.tsx`):
- Accepts `bannerVisible` prop to adjust top positioning
- Fixed positioning with dynamic offset based on banner visibility
- Dropdown menus for Products, Solutions, and Sign In
- Mobile-responsive with Sheet component

**Video Hero** (`NewIndex.tsx`):
- YouTube embed with custom controls (mute/unmute, fullscreen)
- Picture-in-Picture (PiP) mode with draggable repositioning
- Click-to-call functionality on PiP window (tel:+1-844-236-3987)
- Snap-to-edge positioning (corners and edges)
- LIVE indicator always visible
- Controls fade in/out on hover

### Design System

**Colors**:
- Pure black background: `#000000`
- Primary text: White/gray variations
- Accent colors: Subtle gradients for CTAs

**Typography**:
- Font: Inter (loaded from Google Fonts)
- Consistent use throughout with `font-family: 'Inter', sans-serif`

**Branding Assets**:
- Logo: `/lovable-uploads/ebba7dda-009e-4d3c-b5d4-06707a9a84ad.png`
- Favicon: `/favicon.ico` and `/favicon.png`
- OG Image: `/og-image.png` (1200x630)

## Deployment

**Automatic Deployment**:
- Pushes to `main` branch trigger GitHub Pages deployment
- Build artifacts deployed to `gh-pages` branch
- Custom domain: ad.nexus (configured via CNAME)

**GitHub Actions Workflow**:
```bash
git add .
git commit -m "Description"
git push origin main
# Automatically triggers deployment
```

**SPA Routing**: GitHub Pages SPA hack is implemented in `index.html` to handle client-side routing (lines 8-31).

## Important Patterns

### shadcn/ui Components

The `/components/ui/` directory contains shadcn/ui components. These are:
- Auto-generated from shadcn/ui CLI
- Should NOT be manually edited
- Use composition to customize (wrap in new components)
- Import from `@/components/ui/*`

### Utility Function

```typescript
import { cn } from "@/lib/utils"

// Combine Tailwind classes with conditional logic
<div className={cn("base-class", condition && "conditional-class")} />
```

### File Extensions

**Critical for Production Builds**:
- All imports in production must include explicit `.tsx` or `.ts` extensions
- Example: `export { Footer } from './sections/Footer.tsx'` (NOT `'./sections/Footer'`)
- Vite development mode is lenient, but production builds will fail without extensions

### Video Embed Implementation

The homepage video hero uses YouTube embed with custom overlay controls:
- Iframe has `pointerEvents: 'none'` to prevent direct interaction
- Transparent overlay div captures mouse events for dragging
- 5px movement threshold distinguishes click from drag
- Click without drag triggers phone call
- Drag triggers repositioning with snap-to-edge logic

## Common Tasks

### Adding a New Page

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update Navigation component if needed
4. Add to sitemap/SEO meta tags

### Updating Navigation Menu

Edit `src/components/Navigation.tsx`:
- `productItems` - Products dropdown
- `solutionItems` - Solutions dropdown
- Sign In dropdown has platform-specific login links

### Working with Forms

Use shadcn/ui form components with react-hook-form + zod:
```typescript
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
```

### Styling Conventions

- Use Tailwind utility classes first
- Custom CSS only when necessary
- Follow mobile-first responsive design
- Use `@/` path alias for imports

## Testing Locally

After changes to video components, navigation, or routing:
```bash
npm run build
npm run preview
```

This catches production-only issues (like missing file extensions).

## Supabase Integration

- Client initialized in `src/integrations/supabase/client.ts`
- Row-level security enabled
- Used for authentication and data storage

## Studio Integration

The `/studio` page links to external Studio application at `https://studio.ad.nexus`. This is a separate repository (`adnexusinc/studio`) with its own deployment pipeline.

## Brand Consistency

**Logo Usage**:
- Primary logo (inverted white): Use for dark backgrounds
- Always link logo to https://ad.nexus
- Maintain aspect ratio

**Phone Number**: 1-844-AD-NEXUS (1-844-236-3987)
- Click-to-call: `tel:+18442363987`
- Display format: "+1 844 AD-NEXUS (844-236-3987)"

**Color Palette**: Monochromatic black/white with subtle gradients
- Avoid introducing new colors without design approval
- Use pure black `#000000` for backgrounds

## Known Issues & Quirks

1. **GitHub Pages SPA**: The 404.html and SPA routing hack in index.html are required for client-side routing to work properly
2. **Video Controls**: Must use inline styles for hover states to avoid React state conflicts with CSS classes
3. **PiP Dragging**: 5px threshold prevents accidental calls when repositioning window
4. **Favicon**: Multiple formats for cross-browser/device compatibility (ico, png, apple-touch-icon)

## External Links

- Main site: https://ad.nexus
- Studio: https://studio.ad.nexus
- DSP login: https://dsp.ad.nexus
- SSP login: https://ssp.ad.nexus
- Calendar booking: https://cal.com/adnexus
