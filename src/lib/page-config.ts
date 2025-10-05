import { LucideIcon, Brain, Target, Zap, BarChart3, Shield, Globe, Users, TrendingUp, Cpu, ArrowRight, Monitor, Tv, Smartphone, DollarSign, Eye, MousePointer } from 'lucide-react';

// Types for page configuration
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
  link?: string;
  metrics?: string[];
}

export interface Stat {
  value: string;
  label: string;
  color?: 'primary' | 'accent' | 'success';
}

export interface PageConfig {
  title: string;
  subtitle?: string;
  description?: string;
  heroButtonText?: string;
  heroButtonLink?: string;
  features?: Feature[];
  stats?: Stat[];
  showFooter?: boolean;
}

// Complete page configurations for all routes
export const pageConfigs: Record<string, PageConfig> = {
  // Product pages
  '/dsp': {
    title: 'Demand Side Platform',
    subtitle: 'Enterprise-grade programmatic buying platform powered by AI ✨',
    description: 'Execute campaigns with precision targeting across 100M+ daily auctions. Our DSP combines machine learning with real-time optimization for superior performance.',
    heroButtonText: 'Contact Sales',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: Brain,
        title: 'AI-Powered Bidding',
        description: 'Machine learning algorithms optimize bids in real-time across 100M+ daily auctions.',
        metric: '340% Better ROAS'
      },
      {
        icon: Target,
        title: 'Precision Targeting',
        description: 'Advanced audience segmentation with 250K+ targeting parameters and first-party data activation.',
        metric: '95% Match Rate'
      },
      {
        icon: Zap,
        title: 'Instant Optimization',
        description: 'Sub-millisecond decision making with continuous campaign optimization across all channels.',
        metric: '<1ms Response'
      },
      {
        icon: BarChart3,
        title: 'Advanced Analytics',
        description: 'Executive dashboards with dynamic attribution modeling and unified cross-device tracking.',
        metric: 'Real-Time Insights'
      }
    ],
    showFooter: true
  },

  '/ssp': {
    title: 'Supply Side Platform',
    subtitle: 'Run more formats, and earn more cash',
    description: 'Our supply-side platform ships with a universal VAST adapter that connects every video player in minutes and keeps media management smooth. We built a future-ready SSP that hands full control to publishers.',
    heroButtonText: 'Contact Us',
    heroButtonLink: '/#contact',
    stats: [
      {
        value: '85% to 100%',
        label: 'The fill rate that we provide to publishers',
        color: 'primary'
      },
      {
        value: '3,200,000',
        label: "Of users' impressions running",
        color: 'accent'
      },
      {
        value: '100%',
        label: 'Of traffic checked by built-in scanners',
        color: 'success'
      }
    ],
    features: [
      {
        icon: TrendingUp,
        title: 'Maximize Revenue',
        description: 'Advanced yield optimization with header bidding and real-time floor price adjustment.',
        metric: '45% Revenue Lift'
      },
      {
        icon: Shield,
        title: 'Fraud Protection',
        description: 'Built-in IVT detection and brand safety controls protect your inventory.',
        metric: '0.01% Fraud Rate'
      },
      {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Handle 3.5M requests per second with sub-10ms latency.',
        metric: '3.5M QPS'
      }
    ],
    showFooter: true
  },

  '/adx': {
    title: 'Ad Exchange',
    subtitle: 'Connect buyers and sellers at scale',
    description: 'Premium programmatic marketplace connecting thousands of advertisers with premium publishers. Real-time bidding with full transparency.',
    heroButtonText: 'Get Started',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Access to 10,000+ premium publishers and millions of advertisers worldwide.',
        metric: '180+ Countries'
      },
      {
        icon: Shield,
        title: 'Quality Assurance',
        description: 'Multi-layer fraud detection and brand safety controls.',
        metric: '99.9% Clean Traffic'
      },
      {
        icon: BarChart3,
        title: 'Full Transparency',
        description: 'Complete visibility into auction dynamics and pricing.',
        metric: 'Real-Time Reporting'
      }
    ],
    showFooter: true
  },

  '/studio': {
    title: 'Creative Studio',
    subtitle: 'Professional ad creative production',
    description: 'End-to-end creative services from concept to production. Our studio delivers high-impact campaigns that drive results.',
    heroButtonText: 'View Portfolio',
    heroButtonLink: '/our-work',
    features: [
      {
        icon: Monitor,
        title: 'Display Creative',
        description: 'Rich media and interactive display ads optimized for performance.',
        metric: '2x CTR'
      },
      {
        icon: Tv,
        title: 'Video & CTV',
        description: 'Premium video production for Connected TV and streaming platforms.',
        metric: '95% Completion'
      },
      {
        icon: Smartphone,
        title: 'Mobile First',
        description: 'Native mobile experiences designed for engagement.',
        metric: '3x Engagement'
      }
    ],
    showFooter: true
  },

  // Platform pages
  '/platform/overview': {
    title: 'Unified Advertising Platform',
    subtitle: 'Enterprise-grade programmatic infrastructure',
    description: 'Complete advertising technology stack with DSP, SSP, and Ad Exchange. Built for scale, powered by AI.',
    heroButtonText: 'Request Demo',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: Brain,
        title: 'Plan with Intelligence',
        description: 'Enterprise-grade audience intelligence powered by AI. Access real-time market insights from premium inventory.',
        link: '/platform/plan',
        metrics: ['100M+ Data Points', 'Real-time Insights', 'B2B Modeling']
      },
      {
        icon: Zap,
        title: 'Activate at Scale',
        description: 'Execute enterprise campaigns with precision targeting. Our omnichannel DSP activates across premium inventory.',
        link: '/platform/activate',
        metrics: ['50% Higher Conversions', '30% Cost Efficiency', 'Omnichannel Reach']
      },
      {
        icon: BarChart3,
        title: 'Measure Impact',
        description: 'Executive-level analytics with C-suite dashboard visibility. Track ROI across complex enterprise touchpoints.',
        link: '/platform/measure',
        metrics: ['Real-time Analytics', 'Custom Attribution', 'Executive Dashboards']
      }
    ],
    showFooter: true
  },

  '/platform/plan': {
    title: 'Strategic Planning',
    subtitle: 'Data-driven campaign planning',
    description: 'Leverage AI-powered insights to plan campaigns that deliver results. Access audience intelligence, competitive analysis, and market trends.',
    heroButtonText: 'Learn More',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: Brain,
        title: 'Audience Intelligence',
        description: 'Deep insights into your target audience with behavioral and demographic data.',
        metric: '500M+ Profiles'
      },
      {
        icon: Target,
        title: 'Market Analysis',
        description: 'Real-time competitive intelligence and market opportunity identification.',
        metric: 'Real-Time Data'
      },
      {
        icon: BarChart3,
        title: 'Predictive Modeling',
        description: 'AI-powered forecasting for campaign performance and budget optimization.',
        metric: '95% Accuracy'
      }
    ],
    showFooter: true
  },

  '/platform/activate': {
    title: 'Campaign Activation',
    subtitle: 'Execute at scale across all channels',
    description: 'Activate campaigns across display, video, CTV, mobile, and audio. Real-time optimization ensures maximum performance.',
    heroButtonText: 'Start Campaign',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: Zap,
        title: 'Omnichannel Execution',
        description: 'Seamless activation across all digital channels and devices.',
        metric: 'All Channels'
      },
      {
        icon: Brain,
        title: 'AI Optimization',
        description: 'Machine learning continuously optimizes for your KPIs.',
        metric: '24/7 Optimization'
      },
      {
        icon: Target,
        title: 'Precision Targeting',
        description: 'Reach the right audience at the right moment with contextual signals.',
        metric: '250K+ Parameters'
      }
    ],
    showFooter: true
  },

  '/platform/measure': {
    title: 'Performance Measurement',
    subtitle: 'Executive analytics and attribution',
    description: 'Comprehensive measurement suite with real-time reporting, custom attribution models, and executive dashboards.',
    heroButtonText: 'See Dashboard',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: BarChart3,
        title: 'Real-Time Analytics',
        description: 'Live campaign performance data with drill-down capabilities.',
        metric: '<1s Latency'
      },
      {
        icon: Brain,
        title: 'Custom Attribution',
        description: 'Multi-touch attribution models tailored to your business.',
        metric: 'Full Journey'
      },
      {
        icon: TrendingUp,
        title: 'ROI Optimization',
        description: 'Automated insights and recommendations to maximize return.',
        metric: '3x ROI'
      }
    ],
    showFooter: true
  },

  // Solution pages
  '/advertisers': {
    title: 'Solutions for Advertisers',
    subtitle: 'Reach your audience with precision',
    description: 'Advanced programmatic advertising platform designed for brands and advertisers. Drive results with AI-powered optimization.',
    heroButtonText: 'Get Started',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: Target,
        title: 'Precision Targeting',
        description: 'Advanced audience segmentation using first-party data and behavioral signals.',
        metric: 'Pinpoint Accuracy'
      },
      {
        icon: BarChart3,
        title: 'Real-Time Analytics',
        description: 'Comprehensive reporting dashboard with granular insights and attribution.',
        metric: 'Live Reporting'
      },
      {
        icon: Zap,
        title: 'Lightning-Fast Execution',
        description: 'Sub-100ms bid responses ensure you never miss an opportunity.',
        metric: '<100ms Response'
      },
      {
        icon: Users,
        title: 'Audience Intelligence',
        description: 'Leverage proprietary audience data covering 500M+ unique users.',
        metric: '500M+ Users'
      },
      {
        icon: Globe,
        title: 'Cross-Channel Reach',
        description: 'Access premium inventory across all formats and devices.',
        metric: '10K+ Publishers'
      },
      {
        icon: Shield,
        title: 'Brand Safety',
        description: 'Enterprise-grade brand safety and fraud protection.',
        metric: '99.9% Safe'
      }
    ],
    showFooter: true
  },

  '/agencies': {
    title: 'Solutions for Agencies',
    subtitle: 'Scale your agency with enterprise tools',
    description: 'Programmatic platform designed for agencies. Manage multiple clients with advanced tools and dedicated support.',
    heroButtonText: 'Partner With Us',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: Users,
        title: 'Multi-Client Management',
        description: 'Efficiently manage campaigns across all your clients from one platform.',
        metric: 'Unlimited Clients'
      },
      {
        icon: DollarSign,
        title: 'Transparent Pricing',
        description: 'Clear, competitive pricing with no hidden fees. Volume discounts available.',
        metric: 'Best Rates'
      },
      {
        icon: BarChart3,
        title: 'Branded Reports',
        description: 'Branded reporting dashboards for your clients with custom KPIs.',
        metric: 'Your Brand'
      },
      {
        icon: Shield,
        title: 'Dedicated Support',
        description: '24/7 technical support with dedicated account management.',
        metric: '24/7 Support'
      }
    ],
    showFooter: true
  },

  '/publishers': {
    title: 'Solutions for Publishers',
    subtitle: 'Maximize your revenue potential',
    description: 'Advanced yield optimization platform for publishers. Increase fill rates, maximize CPMs, and protect your inventory.',
    heroButtonText: 'Start Monetizing',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: TrendingUp,
        title: 'Yield Optimization',
        description: 'AI-powered algorithms maximize revenue across all inventory.',
        metric: '45% Revenue Lift'
      },
      {
        icon: Shield,
        title: 'Fraud Protection',
        description: 'Multi-layer IVT detection protects your reputation.',
        metric: '0.01% IVT'
      },
      {
        icon: Zap,
        title: 'Header Bidding',
        description: 'Advanced header bidding with 50+ demand partners.',
        metric: '50+ Partners'
      },
      {
        icon: BarChart3,
        title: 'Real-Time Analytics',
        description: 'Granular reporting on revenue, fill rates, and performance.',
        metric: 'Live Data'
      }
    ],
    showFooter: true
  },

  // Company pages
  '/company': {
    title: 'About Ad Nexus',
    subtitle: 'Leading the future of programmatic advertising',
    description: 'We are building the next generation of advertising technology. Our mission is to make programmatic advertising accessible, transparent, and effective for everyone.',
    heroButtonText: 'Join Our Team',
    heroButtonLink: '/#contact',
    stats: [
      {
        value: '$10B+',
        label: 'Annual Ad Spend Processed',
        color: 'primary'
      },
      {
        value: '180+',
        label: 'Countries Served',
        color: 'accent'
      },
      {
        value: '99.99%',
        label: 'Platform Uptime',
        color: 'success'
      }
    ],
    showFooter: true
  },

  '/about': {
    title: 'Our Story',
    subtitle: 'Pioneering programmatic excellence',
    description: 'Founded by industry veterans, Ad Nexus is transforming how brands connect with audiences through innovative technology and unmatched expertise.',
    heroButtonText: 'Learn More',
    heroButtonLink: '/#contact',
    showFooter: true
  },

  '/partners': {
    title: 'Technology Partners',
    subtitle: 'Powering the ecosystem together',
    description: 'We partner with leading technology providers to deliver best-in-class solutions for our clients.',
    heroButtonText: 'Become a Partner',
    heroButtonLink: '/#contact',
    showFooter: true
  },

  '/inventory': {
    title: 'Premium Inventory',
    subtitle: 'Quality placements across all channels',
    description: 'Access premium inventory from top publishers worldwide. CTV, display, video, mobile, and audio - all brand-safe and viewable.',
    heroButtonText: 'View Inventory',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: Tv,
        title: 'Connected TV',
        description: 'Premium CTV inventory from major streaming platforms.',
        metric: '85% Completion'
      },
      {
        icon: Monitor,
        title: 'Display',
        description: 'High-impact display placements on premium sites.',
        metric: '99% Viewable'
      },
      {
        icon: Smartphone,
        title: 'Mobile',
        description: 'In-app and mobile web inventory at scale.',
        metric: '2B+ Daily'
      }
    ],
    showFooter: true
  },

  '/industries': {
    title: 'Industry Solutions',
    subtitle: 'Tailored for your vertical',
    description: 'Specialized solutions for automotive, retail, finance, healthcare, and more. Industry-specific targeting and compliance.',
    heroButtonText: 'Explore Solutions',
    heroButtonLink: '/#contact',
    showFooter: true
  },

  '/resources': {
    title: 'Resources & Insights',
    subtitle: 'Stay ahead with industry knowledge',
    description: 'Whitepapers, case studies, webinars, and guides to help you succeed in programmatic advertising.',
    heroButtonText: 'Browse Resources',
    heroButtonLink: '/#contact',
    showFooter: true
  },

  '/premium': {
    title: 'Premium Solutions',
    subtitle: 'Enterprise-grade advertising platform',
    description: 'Custom solutions for large advertisers and publishers. Dedicated infrastructure, SLAs, and white-glove service.',
    heroButtonText: 'Contact Enterprise Sales',
    heroButtonLink: '/#contact',
    showFooter: true
  },

  '/ctv': {
    title: 'Premium CTV Advertising',
    subtitle: 'The platform for performance marketers to run CTV ads',
    description: 'Access premium Connected TV inventory with AI-powered optimization. Reach engaged audiences on the biggest streaming platforms with Adnexus.',
    heroButtonText: 'Request Demo',
    heroButtonLink: '/#contact',
    features: [
      {
        icon: Tv,
        title: 'Premium Inventory',
        description: 'Access tier-1 CTV inventory from major streaming platforms.',
        metric: '85% Completion'
      },
      {
        icon: Zap,
        title: 'Real-Time Optimization',
        description: 'AI-powered bidding optimizes performance across all CTV inventory.',
        metric: '<1ms Response'
      },
      {
        icon: BarChart3,
        title: 'Performance Analytics',
        description: 'Comprehensive reporting with real-time insights and attribution.',
        metric: 'Real-Time Data'
      }
    ],
    showFooter: true
  },

  // Agency pages
  '/agency': {
    title: 'Agency Retainer Services',
    subtitle: 'Dedicated programmatic expertise for your agency',
    description: 'Monthly retainer services providing dedicated campaign management, optimization, and strategic consulting.',
    heroButtonText: 'Get Proposal',
    heroButtonLink: '/#contact',
    showFooter: true
  },

  '/agency/services': {
    title: 'Agency Services',
    subtitle: 'Full-service programmatic solutions',
    description: 'From strategy to execution, we handle every aspect of your programmatic campaigns.',
    heroButtonText: 'Learn More',
    heroButtonLink: '/#contact',
    showFooter: true
  },

  // Service pages
  '/services/ai': {
    title: 'AI-Powered Services',
    subtitle: 'Next-gen optimization with artificial intelligence',
    description: 'Leverage cutting-edge AI for campaign optimization, audience insights, and predictive analytics.',
    heroButtonText: 'Explore AI Solutions',
    heroButtonLink: '/#contact',
    showFooter: true
  },

  '/services/creative': {
    title: 'Creative Services',
    subtitle: 'High-impact ad creative that converts',
    description: 'Full-service creative studio specializing in display, video, and rich media advertising.',
    heroButtonText: 'View Portfolio',
    heroButtonLink: '/our-work',
    showFooter: true
  },

  '/services/marketing': {
    title: 'Marketing Services',
    subtitle: 'Strategic marketing solutions',
    description: 'Comprehensive marketing services from strategy to execution. SEO, content, social, and more.',
    heroButtonText: 'Get Started',
    heroButtonLink: '/#contact',
    showFooter: true
  },

  '/services/production': {
    title: 'Specialized Production',
    subtitle: 'Premium content creation',
    description: 'Video production, motion graphics, and interactive content for advertising campaigns.',
    heroButtonText: 'See Our Work',
    heroButtonLink: '/our-work',
    showFooter: true
  },

  // Legal pages
  '/terms-of-service': {
    title: 'Terms of Service',
    subtitle: 'Legal terms and conditions',
    description: 'Please read these terms carefully before using our services.',
    showFooter: true
  },

  '/privacy-policy': {
    title: 'Privacy Policy',
    subtitle: 'How we protect your data',
    description: 'Our commitment to data privacy and security.',
    showFooter: true
  },

  '/cookie-policy': {
    title: 'Cookie Policy',
    subtitle: 'How we use cookies',
    description: 'Information about cookies and similar technologies.',
    showFooter: true
  },

  '/data-processing-addendum': {
    title: 'Data Processing Addendum',
    subtitle: 'GDPR compliance documentation',
    description: 'Data processing terms for enterprise clients.',
    showFooter: true
  },

  '/gdpr-compliance': {
    title: 'GDPR Compliance',
    subtitle: 'European data protection',
    description: 'Our compliance with European data protection regulations.',
    showFooter: true
  },

  // Other pages
  // Note: /pricing uses a custom Pricing.tsx page component, not UnifiedPage

  '/our-work': {
    title: 'Our Work',
    subtitle: 'Campaigns that deliver results',
    description: 'See how we have helped brands achieve their goals through innovative programmatic campaigns.',
    heroButtonText: 'View Case Studies',
    heroButtonLink: '/case-studies',
    showFooter: true
  },

  '/case-studies': {
    title: 'Case Studies',
    subtitle: 'Success stories from our clients',
    description: 'Real results from real campaigns. See how we drive performance for leading brands.',
    heroButtonText: 'Contact Us',
    heroButtonLink: '/#contact',
    showFooter: true
  }
};