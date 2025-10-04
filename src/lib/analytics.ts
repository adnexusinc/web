// Unified Analytics Utility for Google Analytics, Facebook Pixel, and future integrations

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Analytics Event Types
export type AnalyticsEvent =
  | 'page_view'
  | 'button_click'
  | 'form_submit'
  | 'newsletter_signup'
  | 'demo_request'
  | 'video_play'
  | 'video_complete'
  | 'case_study_view'
  | 'pricing_view'
  | 'download'
  | 'external_link'
  | 'contact_submit'
  | 'phone_click'
  | 'email_click'
  | 'calendar_add'
  | 'filter_apply'
  | 'search'
  | 'social_share';

export interface AnalyticsEventData {
  category?: string;
  label?: string;
  value?: number;
  page?: string;
  [key: string]: any;
}

class Analytics {
  private isInitialized = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.isInitialized = true;
    }
  }

  /**
   * Track custom event to Google Analytics
   */
  private trackGA(eventName: string, eventData: AnalyticsEventData = {}) {
    if (typeof window === 'undefined' || !window.gtag) return;

    try {
      window.gtag('event', eventName, {
        event_category: eventData.category || 'General',
        event_label: eventData.label || '',
        value: eventData.value || 0,
        ...eventData
      });
      console.log(`[GA] Event: ${eventName}`, eventData);
    } catch (error) {
      console.error('[GA] Tracking error:', error);
    }
  }

  /**
   * Track custom event to Facebook Pixel
   */
  private trackFB(eventName: string, eventData: AnalyticsEventData = {}) {
    if (typeof window === 'undefined' || !window.fbq) return;

    try {
      // Map custom events to Facebook standard events where possible
      const fbEventMap: Record<string, string> = {
        'demo_request': 'Lead',
        'contact_submit': 'Contact',
        'newsletter_signup': 'CompleteRegistration',
        'pricing_view': 'ViewContent',
        'case_study_view': 'ViewContent',
        'video_complete': 'ViewContent'
      };

      const fbEvent = fbEventMap[eventName] || 'CustomEvent';
      window.fbq('track', fbEvent, eventData);
      console.log(`[FB] Event: ${fbEvent}`, eventData);
    } catch (error) {
      console.error('[FB] Tracking error:', error);
    }
  }

  /**
   * Track a unified analytics event (sends to all platforms)
   */
  track(eventName: AnalyticsEvent, eventData: AnalyticsEventData = {}) {
    if (!this.isInitialized) return;

    this.trackGA(eventName, eventData);
    this.trackFB(eventName, eventData);
  }

  /**
   * Track page view (automatically handled by GA, but useful for SPAs)
   */
  pageView(page: string, title?: string) {
    if (!this.isInitialized) return;

    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: page,
        page_title: title || document.title
      });
    }

    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    console.log(`[Analytics] Page View: ${page}`);
  }

  /**
   * Track button clicks with context
   */
  trackButtonClick(buttonLabel: string, context?: string) {
    this.track('button_click', {
      category: 'Engagement',
      label: buttonLabel,
      context: context || window.location.pathname
    });
  }

  /**
   * Track form submissions
   */
  trackFormSubmit(formName: string, success: boolean = true) {
    this.track('form_submit', {
      category: 'Conversion',
      label: formName,
      success: success
    });
  }

  /**
   * Track newsletter signups
   */
  trackNewsletterSignup(source: string = 'footer') {
    this.track('newsletter_signup', {
      category: 'Lead Generation',
      label: source,
      value: 1
    });
  }

  /**
   * Track demo requests (high-value conversion)
   */
  trackDemoRequest(source: string = 'website') {
    this.track('demo_request', {
      category: 'Conversion',
      label: source,
      value: 100 // Assign value for conversion tracking
    });
  }

  /**
   * Track video interactions
   */
  trackVideoPlay(videoTitle: string) {
    this.track('video_play', {
      category: 'Engagement',
      label: videoTitle
    });
  }

  trackVideoComplete(videoTitle: string) {
    this.track('video_complete', {
      category: 'Engagement',
      label: videoTitle,
      value: 1
    });
  }

  /**
   * Track case study views
   */
  trackCaseStudyView(caseStudyTitle: string) {
    this.track('case_study_view', {
      category: 'Content',
      label: caseStudyTitle
    });
  }

  /**
   * Track pricing page interactions
   */
  trackPricingView(plan?: string) {
    this.track('pricing_view', {
      category: 'Conversion',
      label: plan || 'all_plans'
    });
  }

  /**
   * Track external link clicks
   */
  trackExternalLink(url: string, label?: string) {
    this.track('external_link', {
      category: 'Outbound',
      label: label || url,
      url: url
    });
  }

  /**
   * Track phone number clicks (click-to-call)
   */
  trackPhoneClick(phoneNumber: string) {
    this.track('phone_click', {
      category: 'Contact',
      label: phoneNumber,
      value: 50 // Assign value for lead quality
    });
  }

  /**
   * Track email clicks (mailto links)
   */
  trackEmailClick(email: string) {
    this.track('email_click', {
      category: 'Contact',
      label: email
    });
  }

  /**
   * Track calendar event additions
   */
  trackCalendarAdd(eventName: string) {
    this.track('calendar_add', {
      category: 'Engagement',
      label: eventName
    });
  }

  /**
   * Track search queries
   */
  trackSearch(query: string, resultsCount?: number) {
    this.track('search', {
      category: 'Engagement',
      label: query,
      results_count: resultsCount
    });
  }

  /**
   * Track filter applications
   */
  trackFilterApply(filterType: string, filterValue: string) {
    this.track('filter_apply', {
      category: 'Engagement',
      label: `${filterType}: ${filterValue}`
    });
  }

  /**
   * Track social sharing
   */
  trackSocialShare(platform: string, contentType: string) {
    this.track('social_share', {
      category: 'Engagement',
      label: `${platform} - ${contentType}`
    });
  }

  /**
   * Set user properties (for GA4)
   */
  setUserProperty(property: string, value: any) {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('set', 'user_properties', {
      [property]: value
    });
  }

  /**
   * Track ecommerce transaction (for future use)
   */
  trackPurchase(transactionId: string, value: number, currency: string = 'USD') {
    if (typeof window === 'undefined') return;

    if (window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: currency
      });
    }

    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: value,
        currency: currency
      });
    }
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Helper hook for React components
export const useAnalytics = () => analytics;

// Export for manual usage
export default analytics;
