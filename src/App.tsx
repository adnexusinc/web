import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleIndex from "./pages/SimpleIndex";
import Auth from "./pages/Auth";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SimpleIndex />} />
          <Route path="/auth" element={<Auth />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
