# Adnexus Deployment Guide

## Quick Start with Docker

```bash
# 1. Set up environment variables
cp .env.example .env.production

# 2. Build and run with Docker Compose
cd docker
docker-compose up -d

# 3. Access the site
open http://localhost
```

## Environment Configuration

### Required Environment Variables

Create `.env.production` with:

```bash
# Supabase
VITE_SUPABASE_URL=https://cabgbiwjybwmvaekgkct.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here

# Stripe (Frontend - Public Keys Only)
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_51Qv57WJ03IK6WYmUum87SddG7ofxE9uACRSRUfsMSkfpeBCorljB0T99XV1D9OeYQsfVDBa19VwUmUik2cr4Osyw00DIPd0X92

# Analytics
VITE_GA_MEASUREMENT_ID=G-Y83927YWKG
VITE_FB_PIXEL_ID=936065919777713
```

### Supabase Secrets (Edge Functions Only)

Set these in Supabase Dashboard → Settings → Edge Functions:

```bash
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Supabase Edge Functions Deployment

### 1. Install Supabase CLI

```bash
npm install -g supabase
```

### 2. Login to Supabase

```bash
supabase login
```

### 3. Link Your Project

```bash
supabase link --project-ref cabgbiwjybwmvaekgkct
# Password: A7Unq#0*@0!nt&Nu
```

### 4. Deploy Edge Functions

```bash
# Deploy Stripe webhook handler
supabase functions deploy stripe-webhook --no-verify-jwt

# Deploy checkout session creator
supabase functions deploy create-checkout-session --no-verify-jwt
```

### 5. Set Secrets

```bash
supabase secrets set STRIPE_SECRET_KEY=sk_live_...
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...
```

### 6. Configure Stripe Webhook

In Stripe Dashboard → Webhooks, add:
```
https://cabgbiwjybwmvaekgkct.supabase.co/functions/v1/stripe-webhook
```

Events to subscribe:
- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`

## Docker Deployment

### Development

```bash
# Build and run
cd docker
docker-compose up --build

# View logs
docker-compose logs -f web

# Stop
docker-compose down
```

### Production

```bash
# Build optimized image
docker build -t adnexus-web:latest -f docker/Dockerfile .

# Run with production config
docker run -d \
  --name adnexus-web \
  -p 80:80 \
  -p 443:443 \
  --env-file .env.production \
  --restart unless-stopped \
  adnexus-web:latest

# View logs
docker logs -f adnexus-web
```

## Manual Build & Deploy

### Build for Production

```bash
# Install dependencies
pnpm install

# Build
pnpm run build

# Output in dist/ directory
```

### Deploy to Web Server

```bash
# Copy dist/ to your web server
rsync -avz dist/ user@server:/var/www/adnexus/

# Or use nginx to serve dist/
```

## Architecture

```
┌─────────────────┐
│   Client        │
│  (React SPA)    │
│  Port 80/443    │
└────────┬────────┘
         │
         ├─────────────┐
         │             │
         ▼             ▼
┌────────────┐  ┌──────────────────┐
│  Supabase  │  │  Stripe API      │
│  (Backend) │  │  (Payments)      │
└────────────┘  └──────────────────┘
     │
     ├─ Edge Functions:
     │  - stripe-webhook
     │  - create-checkout-session
     │
     └─ Database:
        - users
        - subscriptions
        - credits
```

## Stripe Integration

### Products to Create in Stripe Dashboard

1. **Agency Services Subscription**
   - Price: $9,999/month
   - Recurring: Monthly
   - Price ID: Store in `STRIPE_PRICE_IDS.AGENCY_MONTHLY`

2. **Credit Packs** (One-time purchases)
   - 100 Credits: $100
   - 500 Credits: $450
   - 2000 Credits: $1,500

### Update Price IDs

In `src/lib/stripe.ts`, update:

```typescript
export const STRIPE_PRICE_IDS = {
  STARTER_100_CREDITS: 'price_...', // From Stripe dashboard
  PROFESSIONAL_500_CREDITS: 'price_...',
  ENTERPRISE_2000_CREDITS: 'price_...',
  AGENCY_MONTHLY: 'price_...',
};
```

## Cal.com Integration

### Using CalComEmbed Component

```tsx
import { CalComEmbed } from '@/components/CalComEmbed';

function BookingPage() {
  return (
    <CalComEmbed
      calLink="adnexus/15min"
      email="user@example.com"
      name="John Doe"
      height="700px"
    />
  );
}
```

### Cal.com Event Types

Create these in cal.com dashboard:
- `/adnexus/15min` - Quick intro call
- `/adnexus/30min` - Strategy session
- `/adnexus/demo` - Platform demo

## Troubleshooting

### Docker Build Fails

```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache
```

### Supabase Functions Not Working

```bash
# Check function logs
supabase functions logs stripe-webhook

# Redeploy
supabase functions deploy stripe-webhook --no-verify-jwt
```

### Stripe Webhooks Failing

1. Check webhook signature in Stripe Dashboard
2. Verify `STRIPE_WEBHOOK_SECRET` is set in Supabase
3. Check Edge Function logs

## Monitoring

### Health Checks

```bash
# Check if site is up
curl http://localhost/

# Check Docker container
docker ps
docker logs adnexus-web
```

### Analytics

- Google Analytics: https://analytics.google.com (Measurement ID: G-Y83927YWKG)
- Facebook Pixel: https://business.facebook.com/events_manager (Pixel ID: 936065919777713)

## Support

For deployment issues:
- Supabase: https://supabase.com/docs
- Stripe: https://stripe.com/docs
- Docker: https://docs.docker.com

## Production Checklist

- [ ] Environment variables configured in `.env.production`
- [ ] Supabase project linked and Edge Functions deployed
- [ ] Stripe products and prices created
- [ ] Stripe webhook configured
- [ ] Supabase secrets set (STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET)
- [ ] Docker image built and tested
- [ ] SSL certificate configured (if using HTTPS)
- [ ] DNS pointed to server
- [ ] Analytics verified (GA4, FB Pixel)
- [ ] Cal.com events configured
