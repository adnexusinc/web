# CTV Goal Pages Status

## Current State: DISABLED

The CTV goal and feature pages exist in `src/ctv/components/` but are currently disabled because they depend on components that don't exist in @hanzo/ui:

### Missing Dependencies:
```
@hanzo/ui/primitives:
- Container
- Box
- Heading
- Text  
- Button (different from @hanzo/ui Button)
- Link
- Stack
- Grid

@hanzo/ui/blocks:
- HeroWithEmailCapture
- PricingTierCard
- FeatureGrid
- FAQSection
```

### Goal Pages Ready (37 components):
- BuildAwareness.tsx
- AttractTraffic.tsx
- GenerateLeads.tsx
- IncreaseSales.tsx
- RetargetProspects.tsx
- PromoteYourApp.tsx
- All feature pages (AI Creatives, Targeting, etc.)
- All industry pages (Ecommerce, B2B, Automotive, etc.)
- Help center pages

### Routes:
Currently commented out in `src/App.tsx` line 82-84

### To Enable:

**Option 1: Build Missing Primitives** (Recommended)
1. Create primitive components in ~/work/hanzo/ui/pkg/ui/primitives/
2. Export via package.json
3. Build @hanzo/ui
4. Uncomment ctvRoutes in App.tsx

**Option 2: Rewrite CTV Pages**
1. Replace @hanzo/ui imports with local components
2. Use existing @/components/ui components
3. Uncomment ctvRoutes in App.tsx

## Workaround:
Navigation dropdown links to /dsp?goal=awareness still work - they just redirect to /dsp page.

All goal-based targeting is functional via the DSP platform itself.
