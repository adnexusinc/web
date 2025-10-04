import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UnifiedPage } from "@/components/UnifiedPage";
import { pageConfigs } from "@/lib/page-config";

// Lazy load special/unique page components that need custom handling
const Index = lazy(() => import("./pages/NewIndex"));
const Auth = lazy(() => import("./pages/Auth"));
const PasswordReset = lazy(() => import("./pages/PasswordReset"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Pricing = lazy(() => import("./pages/Pricing"));

// Case study pages (unique layouts)
const DamonMotorcycles = lazy(() => import("./pages/case-study/DamonMotorcycles"));
const TrillerFest = lazy(() => import("./pages/case-study/TrillerFest"));
const UnikoinGold = lazy(() => import("./pages/case-study/UnikoinGold"));

const queryClient = new QueryClient();

// Simple loading component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000',
    color: '#fff'
  }}>
    <div>Loading...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Special pages with unique layouts */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/help" element={<FAQ />} />
            <Route path="/support" element={<Contact />} />

            {/* Case study pages with unique layouts */}
            <Route path="/case-study/damon-motorcycles" element={<DamonMotorcycles />} />
            <Route path="/case-study/trillerfest" element={<TrillerFest />} />
            <Route path="/case-study/unikoin-gold" element={<UnikoinGold />} />

            {/* Unified pages using configuration */}
            {/* Products */}
            <Route path="/dsp" element={<UnifiedPage config={pageConfigs['/dsp']} />} />
            <Route path="/ssp" element={<UnifiedPage config={pageConfigs['/ssp']} />} />
            <Route path="/adx" element={<UnifiedPage config={pageConfigs['/adx']} />} />
            <Route path="/studio" element={<UnifiedPage config={pageConfigs['/studio']} />} />

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
            <Route path="/company" element={<UnifiedPage config={pageConfigs['/company']} />} />
            <Route path="/about" element={<UnifiedPage config={pageConfigs['/about']} />} />
            <Route path="/partners" element={<UnifiedPage config={pageConfigs['/partners']} />} />
            <Route path="/inventory" element={<UnifiedPage config={pageConfigs['/inventory']} />} />
            <Route path="/industries" element={<UnifiedPage config={pageConfigs['/industries']} />} />
            <Route path="/resources" element={<UnifiedPage config={pageConfigs['/resources']} />} />
            <Route path="/premium" element={<UnifiedPage config={pageConfigs['/premium']} />} />
            <Route path="/ctv" element={<UnifiedPage config={pageConfigs['/ctv']} />} />

            {/* Agency */}
            <Route path="/agency" element={<UnifiedPage config={pageConfigs['/agency']} />} />
            <Route path="/agency/services" element={<UnifiedPage config={pageConfigs['/agency/services']} />} />

            {/* Services */}
            <Route path="/services/ai" element={<UnifiedPage config={pageConfigs['/services/ai']} />} />
            <Route path="/services/creative" element={<UnifiedPage config={pageConfigs['/services/creative']} />} />
            <Route path="/services/marketing" element={<UnifiedPage config={pageConfigs['/services/marketing']} />} />
            <Route path="/services/production" element={<UnifiedPage config={pageConfigs['/services/production']} />} />

            {/* Legal */}
            <Route path="/terms-of-service" element={<UnifiedPage config={pageConfigs['/terms-of-service']} />} />
            <Route path="/privacy-policy" element={<UnifiedPage config={pageConfigs['/privacy-policy']} />} />
            <Route path="/cookie-policy" element={<UnifiedPage config={pageConfigs['/cookie-policy']} />} />
            <Route path="/data-processing-addendum" element={<UnifiedPage config={pageConfigs['/data-processing-addendum']} />} />
            <Route path="/gdpr-compliance" element={<UnifiedPage config={pageConfigs['/gdpr-compliance']} />} />

            {/* Other */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/our-work" element={<UnifiedPage config={pageConfigs['/our-work']} />} />
            <Route path="/case-studies" element={<UnifiedPage config={pageConfigs['/case-studies']} />} />

            {/* 404 - Must be last */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
