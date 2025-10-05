# Hanzo Agency → Adnexus Web Migration Plan

## Overview
Migrate all functionality, views, and content from ~/work/hanzo/agency to ~/work/adnexus/web with complete rebranding to Adnexus.

## Source Analysis

### From ~/work/hanzo/agency/src/

**Pages:**
- Index.tsx - Main landing page
- OurWork.tsx - Portfolio/case studies listing
- CaseStudy.tsx - Individual case study detail page
- ServicesPage.tsx - Services overview
- SolutionsPage.tsx - Solutions/capabilities
- Pricing.tsx - Pricing plans
- Contact.tsx - Contact form
- FAQ.tsx - FAQ page
- Enterprise.tsx - Enterprise offering
- Payment.tsx - Payment/checkout
- Onboarding.tsx - User onboarding flow
- OnboardingSuccess.tsx - Success state

**Key Components:**
- Hero.tsx - Hero sections
- Services.tsx - Services showcase
- BentoGrid.tsx - Feature grid layout
- ModernTestimonials.tsx - Testimonial carousel
- AICapabilities.tsx - AI features showcase
- Process.tsx - Process/workflow steps
- NewsletterSignup.tsx - Newsletter forms
- MainNavigation.tsx / Navbar.tsx - Navigation
- Footer.tsx - Site footer
- CaseStudy.tsx - Case study cards
- GlobalMuteButton.tsx - Video controls
- AnimatedGradient.tsx / GradientBackground.tsx - Visual effects

**Data:**
- case-studies/ - All case study data
- caseStudies.ts - Case study index

## Rebranding Requirements

### Text Replacements:
- "Hanzo" → "Adnexus"
- "Agency" → "Platform" or "Advertising"
- "Marketing Agency" → "CTV Advertising Platform"
- "Full-service agency" → "Enterprise programmatic platform"

### Case Study Anonymization:
- "Damon Motorcycles" → "Mobility Startup"
- "Bellabeat" → "HealthTech Startup"
- "TrillerFest" → "Entertainment Platform"
- "UnikoinGold" → "Gaming Platform"
- Keep metrics, remove specific branding

### Service Descriptions Update:
- CMO/CTO services → DSP/SSP platform features
- Web development → Campaign management
- Brand strategy → Programmatic strategy
- Content production → Creative services (Studio)

## Migration Steps

1. **Copy Case Studies** (anonymized)
   - Copy all case study data files
   - Rebrand client names
   - Adapt metrics for CTV context
   - Update images/videos

2. **Copy Key Components**
   - Hero.tsx
   - Services.tsx (rebrand to platform features)
   - BentoGrid.tsx
   - ModernTestimonials.tsx
   - Process.tsx
   - AICapabilities.tsx

3. **Copy Pages**
   - Update Index/landing page
   - OurWork → Case Studies
   - ServicesPage → Platform Features
   - Enterprise page
   - Payment/Onboarding flows

4. **Update Routing**
   - Merge routes from both apps
   - Ensure all paths work

5. **Rebrand All Content**
   - Find/replace Hanzo → Adnexus
   - Update service descriptions
   - Update contact info
   - Update branding elements

6. **Test & Deploy**
   - Verify all pages load
   - Test all forms
   - Check analytics
   - Deploy to production

## Commands

```bash
# Copy components
cp -r ~/work/hanzo/agency/src/components/* ~/work/adnexus/web/src/components/

# Copy pages (selective)
cp ~/work/hanzo/agency/src/pages/OurWork.tsx ~/work/adnexus/web/src/pages/
cp ~/work/hanzo/agency/src/pages/Enterprise.tsx ~/work/adnexus/web/src/pages/

# Copy case studies
cp -r ~/work/hanzo/agency/src/data/case-studies ~/work/adnexus/web/src/data/

# Then rebrand with find/replace
```

## Status: Ready to execute
