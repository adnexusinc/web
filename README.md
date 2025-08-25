# Adnexus - Enterprise Programmatic Advertising Platform

## 🚀 Production URL
**Live Site**: https://lovable.dev/projects/74ffa50d-c765-4188-8d31-34db3e546d99

## 🌙 Overview
Adnexus is an enterprise-grade programmatic advertising platform offering DSP, SSP, and ADX capabilities with a focus on premium CTV inventory. Built with Quantcast-level sophistication and AI-powered optimization.

### Key Features
- **Premium CTV Inventory**: $50-85 CPM premium pricing
- **Enterprise Platform**: DSP, SSP, ADX in one integrated solution  
- **AI-Powered**: Machine learning optimization for 340% average ROI
- **Monochrome Moon Branding**: Custom moon logo with animated stars
- **$10K/Month Subscription**: Enterprise-only model with white-glove service

## 🛠 Tech Stack
- **Frontend**: React, TypeScript, Vite
- **UI**: shadcn-ui, Tailwind CSS
- **Backend**: Supabase
- **Payments**: Stripe (Adnexus Enterprise subscription)
- **Deployment**: Lovable (auto-deploys on push to main)

## 💳 Stripe Configuration
The platform uses Stripe for the $10K/month Adnexus Enterprise subscription:

### Products
- **Product Name**: Adnexus Enterprise
- **Price**: $10,000/month
- **Billing**: Monthly subscription

### Environment Variables Required
```env
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

### Stripe Webhooks
Configure these webhooks in your Stripe dashboard:
- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`

## 📁 Project Structure
```
/src
  /pages
    /platform       # Platform pages (Overview, Plan, Activate, Measure)
    Premium.tsx     # Premium CTV inventory showcase
    Dashboard.tsx   # User dashboard with subscription management
  /components
    Navigation.tsx  # Main navigation with platform dropdown
    MoonLogo.tsx   # Custom moon logo with animated stars
    ClientLogoTicker.tsx
    CaseStudiesSection.tsx
    TestimonialsCarousel.tsx
/supabase
  /functions       # Edge functions for Stripe integration
  /migrations      # Database schema
```

## 🚀 Deployment

### Automatic Deployment
The site auto-deploys via Lovable when you push to the main branch:
```bash
git push origin main
```

### Manual Deployment
1. Open [Lovable Project](https://lovable.dev/projects/74ffa50d-c765-4188-8d31-34db3e546d99)
2. Click Share → Publish

### Custom Domain
To connect a custom domain:
1. Navigate to Project > Settings > Domains
2. Click "Connect Domain"
3. Follow the DNS configuration steps

## 🔧 Local Development

### Prerequisites
- Node.js & npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Git

### Setup
```bash
# Clone the repository
git clone git@github.com:adnexusinc/web.git

# Navigate to project
cd web

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 📄 Key Pages

### Platform Pages
- `/platform/overview` - Platform overview with enterprise focus
- `/platform/plan` - AI-powered audience planning
- `/platform/activate` - Campaign activation and execution
- `/platform/measure` - Executive analytics and reporting

### Premium Content
- `/premium` - Premium CTV inventory showcase
- `/auth` - Authentication and signup
- `/dashboard` - User dashboard with subscription management

### Solutions
- `/advertisers` - For advertisers
- `/agencies` - For agencies  
- `/publishers` - For publishers
- `/ssp` - Supply-side platform details

## 🎨 Design System

### Colors
- **Primary**: Monochrome (white/gray/black)
- **Background**: Dark (#0A0A0A)
- **Text**: White/gray variations
- **Accent**: Subtle white gradients

### Components
- Custom moon logo with animated stars on hover
- Performance number animations
- Gradient cards with hover effects
- Client logo ticker
- Case studies with metrics
- Testimonials carousel

## 📊 Performance Metrics
- **Build Size**: ~1.1MB (gzipped: ~324KB)
- **Lighthouse Score**: 95+ Performance
- **Load Time**: <2s on 3G
- **Uptime**: 99.99% SLA

## 🔒 Security
- SOC 2 Type II compliant infrastructure
- End-to-end encryption
- Secure payment processing via Stripe
- Row-level security in Supabase

## 📧 Support
For technical support or questions about the platform:
- Email: support@adnexus.com
- Dashboard: Access via `/dashboard` after authentication

## 🚦 Status
- **Production**: ✅ Live
- **Staging**: N/A (direct to production via Lovable)
- **Development**: Local only

## 📝 License
Proprietary - Adnexus Inc. All rights reserved.

---

**Last Updated**: August 24, 2025
**Version**: 1.0.0
**Repository**: github.com/adnexusinc/web