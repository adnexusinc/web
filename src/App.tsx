import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/NewIndex";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Auth from "./pages/Auth";
import PasswordReset from "./pages/PasswordReset";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Publishers from "./pages/Publishers";
import Advertisers from "./pages/Advertisers";
import Partners from "./pages/Partners";
import About from "./pages/About";
import SSP from "./pages/SSP";
import WhiteLabelAdExchange from "./pages/WhiteLabelAdExchange";
import Agencies from "./pages/Agencies";
import Inventory from "./pages/Inventory";
// Platform pages
import PlatformOverview from "./pages/platform/Overview";
import PlatformPlan from "./pages/platform/Plan";
import PlatformActivate from "./pages/platform/Activate";
import PlatformMeasure from "./pages/platform/Measure";
import Premium from "./pages/Premium";
import DSP from "./pages/DSP";
import ADX from "./pages/ADX";
import Studio from "./pages/Studio";
import Resources from "./pages/Resources";
import Company from "./pages/Company";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import DataProcessingAddendum from "./pages/DataProcessingAddendum";
import GDPRCompliance from "./pages/GDPRCompliance";
import CaseStudies from "./pages/CaseStudies";
import OurWork from "./pages/OurWork";
import DamonMotorcycles from "./pages/case-study/DamonMotorcycles";
import TrillerFest from "./pages/case-study/TrillerFest";
import UnikoinGold from "./pages/case-study/UnikoinGold";
// Agency pages
import RetainerPage from "./pages/agency/Retainer";
import ServicesPage from "./pages/agency/Services";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/advertisers" element={<Advertisers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/ssp" element={<SSP />} />
          <Route path="/white-label-adexchange" element={<WhiteLabelAdExchange />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* Platform routes */}
          <Route path="/platform/overview" element={<PlatformOverview />} />
          <Route path="/platform/plan" element={<PlatformPlan />} />
          <Route path="/platform/activate" element={<PlatformActivate />} />
          <Route path="/platform/measure" element={<PlatformMeasure />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/dsp" element={<DSP />} />
          <Route path="/adx" element={<ADX />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/data-processing-addendum" element={<DataProcessingAddendum />} />
          <Route path="/gdpr-compliance" element={<GDPRCompliance />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/case-study/damon-motorcycles" element={<DamonMotorcycles />} />
          <Route path="/case-study/trillerfest" element={<TrillerFest />} />
          <Route path="/case-study/unikoin-gold" element={<UnikoinGold />} />
          {/* Agency Routes */}
          <Route path="/agency" element={<RetainerPage />} />
          <Route path="/agency/services" element={<ServicesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
