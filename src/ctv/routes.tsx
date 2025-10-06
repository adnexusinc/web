import { lazy } from 'react';

// Main pages
const Home = lazy(() => import('./components/Home'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const About = lazy(() => import('./components/About'));
const Studio = lazy(() => import('./components/Studio'));
const AppsAndChannels = lazy(() => import('./components/AppsAndChannels'));
const Integrations = lazy(() => import('./components/Integrations'));
const Contact = lazy(() => import('./components/Contact'));
const Careers = lazy(() => import('./components/Careers'));

// Goals
const BuildAwareness = lazy(() => import('./components/BuildAwareness'));
const AttractTraffic = lazy(() => import('./components/AttractTraffic'));
const GenerateLeads = lazy(() => import('./components/GenerateLeads'));
const IncreaseSales = lazy(() => import('./components/IncreaseSales'));
const RetargetProspects = lazy(() => import('./components/RetargetProspects'));
const PromoteYourApp = lazy(() => import('./components/PromoteYourApp'));

// Features
const FeaturesAppsChannels = lazy(() => import('./components/FeaturesAppsChannels'));
const FeaturesAudienceTargeting = lazy(() => import('./components/FeaturesAudienceTargeting'));
const FeaturesAiOptimization = lazy(() => import('./components/FeaturesAiOptimization'));
const FeaturesMeasurementReporting = lazy(() => import('./components/FeaturesMeasurementReporting'));
const FeaturesAiCreatives = lazy(() => import('./components/FeaturesAiCreatives'));
const FeaturesIntegrationsApi = lazy(() => import('./components/FeaturesIntegrationsApi'));

// Industries
const IndustryAppsGaming = lazy(() => import('./components/IndustryAppsGaming'));
const IndustryEcommerce = lazy(() => import('./components/IndustryEcommerce'));
const IndustryEducation = lazy(() => import('./components/IndustryEducation'));
const IndustryAutomotive = lazy(() => import('./components/IndustryAutomotive'));
const IndustryMediaAgencies = lazy(() => import('./components/IndustryMediaAgencies'));
const IndustryLegal = lazy(() => import('./components/IndustryLegal'));
const IndustryPolitics = lazy(() => import('./components/IndustryPolitics'));
const IndustryHomeImprovement = lazy(() => import('./components/IndustryHomeImprovement'));
const IndustryRetail = lazy(() => import('./components/IndustryRetail'));
const IndustryB2b = lazy(() => import('./components/IndustryB2b'));
const IndustryEntertainment = lazy(() => import('./components/IndustryEntertainment'));

// Help Center
const HelpCenterHome = lazy(() => import('./components/HelpCenterHome'));
const HelpGettingStarted = lazy(() => import('./components/HelpGettingStarted'));
const HelpMeasurement = lazy(() => import('./components/HelpMeasurement'));
const HelpAccount = lazy(() => import('./components/HelpAccount'));
const HelpTroubleshooting = lazy(() => import('./components/HelpTroubleshooting'));
const HelpFaq = lazy(() => import('./components/HelpFaq'));
const HelpTips = lazy(() => import('./components/HelpTips'));

// Legal
const LegalTerms = lazy(() => import('./components/LegalTerms'));
const LegalPrivacy = lazy(() => import('./components/LegalPrivacy'));
const LegalCookies = lazy(() => import('./components/LegalCookies'));
const LegalAcceptableUse = lazy(() => import('./components/LegalAcceptableUse'));

// Blog
const BlogHome = lazy(() => import('./components/BlogHome'));
const BlogWhatsNew = lazy(() => import('./components/BlogWhatsNew'));
const BlogCaseStudies = lazy(() => import('./components/BlogCaseStudies'));

// Route configuration - all at root level
export const ctvRoutes = [
  // Main pages - override existing routes
  { path: '/', element: Home, override: true },
  { path: '/pricing', element: Pricing, override: true },
  { path: '/testimonials', element: Testimonials },
  { path: '/about', element: About, override: true },
  { path: '/studio', element: Studio, override: true },
  { path: '/apps-and-channels', element: AppsAndChannels },
  { path: '/integrations', element: Integrations },
  { path: '/contact', element: Contact, override: true },
  { path: '/careers', element: Careers },

  // Goals
  { path: '/goals/build-awareness', element: BuildAwareness },
  { path: '/goals/attract-traffic', element: AttractTraffic },
  { path: '/goals/generate-leads', element: GenerateLeads },
  { path: '/goals/increase-sales', element: IncreaseSales },
  { path: '/goals/retarget-prospects', element: RetargetProspects },
  { path: '/goals/promote-your-app', element: PromoteYourApp },

  // Features
  { path: '/features/apps-channels', element: FeaturesAppsChannels },
  { path: '/features/audience-targeting', element: FeaturesAudienceTargeting },
  { path: '/features/ai-optimization', element: FeaturesAiOptimization },
  { path: '/features/measurement-reporting', element: FeaturesMeasurementReporting },
  { path: '/features/ai-creatives', element: FeaturesAiCreatives },
  { path: '/features/integrations-api', element: FeaturesIntegrationsApi },

  // Industries
  { path: '/industry/apps-gaming', element: IndustryAppsGaming },
  { path: '/industry/ecommerce', element: IndustryEcommerce },
  { path: '/industry/education-non-profit', element: IndustryEducation },
  { path: '/industry/automotive', element: IndustryAutomotive },
  { path: '/industry/media-agencies', element: IndustryMediaAgencies },
  { path: '/industry/legal', element: IndustryLegal },
  { path: '/industry/politics', element: IndustryPolitics },
  { path: '/industry/home-improvement', element: IndustryHomeImprovement },
  { path: '/industry/retail', element: IndustryRetail },
  { path: '/industry/b2b', element: IndustryB2b },
  { path: '/industry/entertainment', element: IndustryEntertainment },

  // Help Center
  { path: '/help', element: HelpCenterHome, override: true },
  { path: '/help/getting-started', element: HelpGettingStarted },
  { path: '/help/measurement', element: HelpMeasurement },
  { path: '/help/account', element: HelpAccount },
  { path: '/help/troubleshooting', element: HelpTroubleshooting },
  { path: '/help/faq', element: HelpFaq },
  { path: '/help/tips', element: HelpTips },

  // Legal - override existing routes
  { path: '/legal/terms-of-service', element: LegalTerms },
  { path: '/terms-of-service', element: LegalTerms, override: true },
  { path: '/legal/privacy-policy', element: LegalPrivacy },
  { path: '/privacy-policy', element: LegalPrivacy, override: true },
  { path: '/legal/cookie-policy', element: LegalCookies },
  { path: '/cookie-policy', element: LegalCookies, override: true },
  { path: '/legal/acceptable-use', element: LegalAcceptableUse },

  // Blog
  { path: '/blog', element: BlogHome },
  { path: '/blog/whats-new', element: BlogWhatsNew },
  { path: '/blog/case-studies', element: BlogCaseStudies },
];
