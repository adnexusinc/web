# Analytics Integration Guide

## Overview
Comprehensive analytics tracking with Google Analytics 4 (GA4) and Facebook Pixel integration.

## Installed Tracking

### Google Analytics (GA4)
- **Tracking ID**: `G-Y83927YWKG`
- **Location**: `/index.html` (lines 16-26)
- **Features**:
  - Automatic page view tracking
  - Custom event tracking
  - User properties
  - Anonymized IP tracking (GDPR compliant)

### Facebook Pixel
- **Status**: Placeholder added in `/index.html` (lines 28-31)
- **Action Required**: Replace placeholder with actual Facebook Pixel code when provided

## Usage

### Automatic Page Tracking
Page views are automatically tracked on route changes via `usePageTracking` hook in `App.tsx`.

### Manual Event Tracking
Import the analytics utility in any component:

```typescript
import { analytics } from '@/lib/analytics';

// Track button clicks
analytics.trackButtonClick('Book Demo', 'hero-section');

// Track form submissions
analytics.trackFormSubmit('contact-form', true);

// Track demo requests
analytics.trackDemoRequest('pricing-page');

// Track newsletter signups
analytics.trackNewsletterSignup('footer');

// Track video interactions
analytics.trackVideoPlay('Product Demo');
analytics.trackVideoComplete('Product Demo');

// Track case study views
analytics.trackCaseStudyView('Damon Motorcycles');

// Track pricing views
analytics.trackPricingView('enterprise');

// Track phone clicks
analytics.trackPhoneClick('+1-844-236-3987');

// Track external links
analytics.trackExternalLink('https://cal.com/adnexus', 'Book Meeting');

// Track calendar adds
analytics.trackCalendarAdd('CES 2025');

// Track search
analytics.trackSearch('ctv advertising', 12);

// Track filters
analytics.trackFilterApply('industry', 'automotive');
```

### Available Tracking Methods

#### Core Events
- `track(eventName, eventData)` - Track any custom event
- `pageView(page, title)` - Track page views
- `trackButtonClick(label, context)` - Track button clicks
- `trackFormSubmit(formName, success)` - Track form submissions

#### Conversions
- `trackDemoRequest(source)` - High-value lead event
- `trackNewsletterSignup(source)` - Email capture
- `trackPricingView(plan)` - Pricing page engagement

#### Engagement
- `trackVideoPlay(title)` - Video start
- `trackVideoComplete(title)` - Video completion
- `trackCaseStudyView(title)` - Content engagement
- `trackSearch(query, resultsCount)` - Search usage
- `trackFilterApply(type, value)` - Filter usage

#### Contact Events
- `trackPhoneClick(number)` - Click-to-call
- `trackEmailClick(email)` - Mailto clicks
- `trackExternalLink(url, label)` - Outbound links
- `trackCalendarAdd(eventName)` - Calendar additions

#### Social
- `trackSocialShare(platform, contentType)` - Social sharing

## Event Data Structure

All events support custom data:

```typescript
analytics.track('custom_event', {
  category: 'Category Name',
  label: 'Event Label',
  value: 100,
  customField: 'custom value'
});
```

## Facebook Pixel Integration

### Standard Event Mapping
The analytics utility automatically maps custom events to Facebook Standard Events:

- `demo_request` → `Lead`
- `contact_submit` → `Contact`
- `newsletter_signup` → `CompleteRegistration`
- `pricing_view` → `ViewContent`
- `case_study_view` → `ViewContent`
- `video_complete` → `ViewContent`

### Adding Facebook Pixel

1. Get your Facebook Pixel ID
2. Replace the placeholder in `/index.html`:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
```

## Implementation Checklist

### Completed ✅
- [x] Google Analytics GA4 installed
- [x] Automatic page view tracking
- [x] Unified analytics utility created
- [x] Facebook Pixel placeholder added
- [x] TypeScript types defined
- [x] React hook for page tracking
- [x] Console logging for debugging

### Pending ⏳
- [ ] Add Facebook Pixel ID
- [ ] Implement event tracking on key CTAs
- [ ] Add conversion tracking for forms
- [ ] Set up enhanced ecommerce (if needed)
- [ ] Configure custom dimensions in GA4
- [ ] Set up conversion goals in GA4 dashboard
- [ ] Test all tracking in production

## Key Pages to Instrument

### High Priority
1. **Pricing Page** - Track plan views, CTA clicks
2. **Case Studies** - Track views, filter usage
3. **Contact/Demo Forms** - Track submissions, success/failure
4. **Company/Events** - Track meeting bookings, calendar adds
5. **Resources** - Track content engagement, downloads

### Medium Priority
6. **Homepage** - Track video plays, hero CTA clicks
7. **About Us** - Track engagement, careers clicks
8. **Product Pages** - Track feature engagement

## Testing

### Development
Check browser console for analytics logs:
```
[GA] Event: button_click {category: "Engagement", label: "Book Demo"}
[FB] Event: Lead {value: 100}
[Analytics] Page View: /pricing
```

### Production
1. Install Google Analytics Debugger extension
2. Install Facebook Pixel Helper extension
3. Verify events in GA4 Realtime reports
4. Verify events in Facebook Events Manager

## GDPR Compliance

The integration includes:
- IP anonymization enabled
- No PII tracking by default
- Cookie consent ready (add banner if needed)

To add cookie consent, integrate with a service like OneTrust or CookieBot.

## Files Modified

- `/index.html` - GA4 and FB Pixel scripts
- `/src/lib/analytics.ts` - Unified analytics utility
- `/src/hooks/usePageTracking.ts` - Page view tracking hook
- `/src/App.tsx` - PageTracker component integration

## Support

For questions or issues:
- Google Analytics: https://support.google.com/analytics
- Facebook Pixel: https://www.facebook.com/business/help/952192354843755
