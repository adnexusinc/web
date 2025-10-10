import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UnifiedPage } from "@/components/UnifiedPage";
import { pageConfigs } from "@/lib/page-config";
import { usePageTracking } from "@/hooks/usePageTracking";

// Lazy load special/unique page components that need custom handling
const Index = lazy(() => import("./pages/Home")); // Video hero + 6-step flow
const Auth = lazy(() => import("./pages/Auth"));
const PasswordReset = lazy(() => import("./pages/PasswordReset"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Pricing = lazy(() => import("./pages/Pricing"));
const StudioPage = lazy(() => import("./pages/StudioPage"));
// Case Studies page removed - redirect to agency case studies
const Company = lazy(() => import("./pages/Company"));
const About = lazy(() => import("./pages/About"));
const Resources = lazy(() => import("./pages/Resources"));
const Enterprise = lazy(() => import("./pages/Enterprise"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const BookDemo = lazy(() => import("./pages/BookDemo"));
const GetStarted = lazy(() => import("./pages/GetStarted"));

// Agency pages (full Hanzo Agency site under /agency)
const AgencyIndex = lazy(() => import("./agency/pages/Index"));
const AgencyOurWork = lazy(() => import("./agency/pages/OurWork"));
const AgencyCaseStudy = lazy(() => import("./agency/pages/CaseStudy"));
const AgencyPricing = lazy(() => import("./agency/pages/Pricing"));
const AgencyContact = lazy(() => import("./agency/pages/Contact"));
const AgencyFAQ = lazy(() => import("./agency/pages/FAQ"));
const AgencyEnterprise = lazy(() => import("./agency/pages/Enterprise"));
const AgencyOnboarding = lazy(() => import("./agency/pages/Onboarding"));
const AgencyOnboardingSuccess = lazy(() => import("./agency/pages/OnboardingSuccess"));
const AgencyPayment = lazy(() => import("./agency/pages/Payment"));
const AgencyServicesPage = lazy(() => import("./agency/pages/ServicesPage"));
const AgencySolutionsPage = lazy(() => import("./agency/pages/SolutionsPage"));
const AgencyLogin = lazy(() => import("./agency/pages/Login"));
const AgencySignup = lazy(() => import("./agency/pages/Signup"));
const AgencyDashboard = lazy(() => import("./agency/pages/Dashboard"));

// CTV Platform pages - Goal-based landing pages
const BuildAwareness = lazy(() => import("./ctv/components/BuildAwareness"));
const AttractTraffic = lazy(() => import("./ctv/components/AttractTraffic"));
const GenerateLeads = lazy(() => import("./ctv/components/GenerateLeads"));
const IncreaseSales = lazy(() => import("./ctv/components/IncreaseSales"));
const RetargetProspects = lazy(() => import("./ctv/components/RetargetProspects"));
const PromoteYourApp = lazy(() => import("./ctv/components/PromoteYourApp"));

// CTV Platform pages - Feature-based landing pages
const FeaturesAppsChannels = lazy(() => import("./ctv/components/FeaturesAppsChannels"));
const FeaturesAudienceTargeting = lazy(() => import("./ctv/components/FeaturesAudienceTargeting"));
const FeaturesAiOptimization = lazy(() => import("./ctv/components/FeaturesAiOptimization"));
const FeaturesMeasurementReporting = lazy(() => import("./ctv/components/FeaturesMeasurementReporting"));
const FeaturesAiCreatives = lazy(() => import("./ctv/components/FeaturesAiCreatives"));
const FeaturesIntegrationsApi = lazy(() => import("./ctv/components/FeaturesIntegrationsApi"));

// Case study pages (unique layouts) - CTV advertising
const DamonMotorcycles = lazy(() => import("./pages/case-study/DamonMotorcycles"));
const TrillerFest = lazy(() => import("./pages/case-study/TrillerFest"));
const UnikoinGold = lazy(() => import("./pages/case-study/UnikoinGold"));

const queryClient = new QueryClient();

// Minimal loading - black screen, no flash
const LoadingFallback = () => (
  <div style={{
    height: '100vh',
    backgroundColor: '#000'
  }} />
);

// Page tracking component
const PageTracker = () => {
  usePageTracking();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTracker />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* CTV Goal Pages */}
            <Route path="/goals/build-awareness" element={<BuildAwareness />} />
            <Route path="/goals/attract-traffic" element={<AttractTraffic />} />
            <Route path="/goals/generate-leads" element={<GenerateLeads />} />
            <Route path="/goals/increase-sales" element={<IncreaseSales />} />
            <Route path="/goals/retarget-prospects" element={<RetargetProspects />} />
            <Route path="/goals/promote-your-app" element={<PromoteYourApp />} />

            {/* CTV Feature Pages */}
            <Route path="/features/apps-channels" element={<FeaturesAppsChannels />} />
            <Route path="/features/audience-targeting" element={<FeaturesAudienceTargeting />} />
            <Route path="/features/ai-optimization" element={<FeaturesAiOptimization />} />
            <Route path="/features/measurement-reporting" element={<FeaturesMeasurementReporting />} />
            <Route path="/features/ai-creatives" element={<FeaturesAiCreatives />} />
            <Route path="/features/integrations-api" element={<FeaturesIntegrationsApi />} />

            {/* Special pages with unique layouts */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Case study pages with unique layouts */}
            <Route path="/case-study/damon-motorcycles" element={<DamonMotorcycles />} />
            <Route path="/case-study/trillerfest" element={<TrillerFest />} />
            <Route path="/case-study/unikoin-gold" element={<UnikoinGold />} />

            {/* Unified pages using configuration */}
            {/* Products */}
            <Route path="/dsp" element={<UnifiedPage config={pageConfigs['/dsp']} />} />
            <Route path="/ssp" element={<UnifiedPage config={pageConfigs['/ssp']} />} />
            <Route path="/adx" element={<UnifiedPage config={pageConfigs['/adx']} />} />
            <Route path="/studio" element={<StudioPage />} />

            {/* Platform */}
            <Route path="/platform/overview" element={<UnifiedPage config={pageConfigs['/platform/overview']} />} />
            <Route path="/platform/plan" element={<UnifiedPage config={pageConfigs['/platform/plan']} />} />
            <Route path="/platform/activate" element={<UnifiedPage config={pageConfigs['/platform/activate']} />} />
            <Route path="/platform/measure" element={<UnifiedPage config={pageConfigs['/platform/measure']} />} />

            {/* Solutions */}
            <Route path="/advertisers" element={<UnifiedPage config={pageConfigs['/advertisers']} />} />
            <Route path="/agencies" element={<UnifiedPage config={pageConfigs['/agencies']} />} />
            <Route path="/publishers" element={<UnifiedPage config={pageConfigs['/publishers']} />} />

            {/* Company */}
            <Route path="/company" element={<Company />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<UnifiedPage config={pageConfigs['/partners']} />} />
            <Route path="/inventory" element={<UnifiedPage config={pageConfigs['/inventory']} />} />
            <Route path="/industries" element={<UnifiedPage config={pageConfigs['/industries']} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/premium" element={<UnifiedPage config={pageConfigs['/premium']} />} />
            <Route path="/ctv" element={<UnifiedPage config={pageConfigs['/ctv']} />} />

            {/* Agency - Full Hanzo Agency site */}
            <Route path="/agency" element={<AgencyIndex />} />
            <Route path="/agency/our-work" element={<AgencyOurWork />} />
            <Route path="/agency/case-study/:id" element={<AgencyCaseStudy />} />
            <Route path="/agency/pricing" element={<AgencyPricing />} />
            <Route path="/agency/contact" element={<AgencyContact />} />
            <Route path="/agency/faq" element={<AgencyFAQ />} />
            <Route path="/agency/enterprise" element={<AgencyEnterprise />} />
            <Route path="/agency/onboarding" element={<AgencyOnboarding />} />
            <Route path="/agency/onboarding-success" element={<AgencyOnboardingSuccess />} />
            <Route path="/agency/payment" element={<AgencyPayment />} />
            <Route path="/agency/services" element={<AgencyServicesPage />} />
            <Route path="/agency/services/*" element={<AgencyServicesPage />} />
            <Route path="/agency/solutions" element={<AgencySolutionsPage />} />
            <Route path="/agency/capabilities/*" element={<AgencySolutionsPage />} />

            {/* Agency Authentication */}
            <Route path="/agency/login" element={<AgencyLogin />} />
            <Route path="/agency/signup" element={<AgencySignup />} />
            <Route path="/agency/dashboard" element={<AgencyDashboard />} />

            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Services & Solutions - Redirect to Agency */}
            <Route path="/services" element={<Navigate to="/agency/services" replace />} />
            <Route path="/solutions" element={<Navigate to="/agency/solutions" replace />} />
            <Route path="/services/ai" element={<UnifiedPage config={pageConfigs['/services/ai']} />} />
            <Route path="/services/ai-services" element={<UnifiedPage config={pageConfigs['/services/ai']} />} />
            <Route path="/services/creative" element={<UnifiedPage config={pageConfigs['/services/creative']} />} />
            <Route path="/services/creative-design" element={<UnifiedPage config={pageConfigs['/services/creative']} />} />
            <Route path="/services/marketing" element={<UnifiedPage config={pageConfigs['/services/marketing']} />} />
            <Route path="/services/production" element={<UnifiedPage config={pageConfigs['/services/production']} />} />
            <Route path="/services/specialized-production" element={<UnifiedPage config={pageConfigs['/services/production']} />} />

            {/* Legal */}
            <Route path="/terms-of-service" element={<UnifiedPage config={pageConfigs['/terms-of-service']} />} />
            <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
            <Route path="/privacy-policy" element={<UnifiedPage config={pageConfigs['/privacy-policy']} />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/cookie-policy" element={<UnifiedPage config={pageConfigs['/cookie-policy']} />} />
            <Route path="/cookies" element={<Navigate to="/cookie-policy" replace />} />
            <Route path="/data-processing-addendum" element={<UnifiedPage config={pageConfigs['/data-processing-addendum']} />} />
            <Route path="/dpa" element={<Navigate to="/data-processing-addendum" replace />} />
            <Route path="/gdpr-compliance" element={<UnifiedPage config={pageConfigs['/gdpr-compliance']} />} />
            <Route path="/gdpr" element={<Navigate to="/gdpr-compliance" replace />} />

            {/* Other */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/our-work" element={<UnifiedPage config={pageConfigs['/our-work']} />} />
            <Route path="/case-studies" element={<Navigate to="/agency/our-work" replace />} />

            {/* 404 - Must be last */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
