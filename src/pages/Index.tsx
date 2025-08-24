import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { FeatureCard } from "@/components/FeatureCard";
import { 
  Target, 
  Shield, 
  Zap, 
  Cpu, 
  ArrowRight, 
  Play,
  Globe,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import adnexusLogo from "@/assets/adnexus-logo.png";

const features = [
  {
    icon: Zap,
    title: "Sub-Millisecond Latency",
    description: "Revolutionary bidding engine with <1ms response times, optimized for real-time decisions at scale."
  },
  {
    icon: Shield,
    title: "Zero-Knowledge Privacy",
    description: "Privacy-preserving auctions that protect user data while maximizing advertiser reach and publisher revenue."
  },
  {
    icon: Cpu,
    title: "Distributed Mining Network",
    description: "Decentralized infrastructure ensuring 99.99% uptime with global edge computing for maximum performance."
  },
  {
    icon: Target,
    title: "Advanced Targeting",
    description: "AI-powered audience segmentation with real-time behavioral analysis and predictive modeling."
  },
  {
    icon: Globe,
    title: "CTV/OTT Optimized",
    description: "Purpose-built for Connected TV and Over-The-Top streaming with specialized video ad formats."
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Machine learning algorithms that maximize yield through dynamic pricing and demand prediction."
  }
];

const products = [
  {
    title: "SSP (Supply-Side Platform)",
    description: "Maximize publisher revenue with intelligent yield optimization and premium demand sources.",
    features: ["Header bidding", "Private marketplaces", "Real-time analytics", "Fraud protection"]
  },
  {
    title: "DSP (Demand-Side Platform)", 
    description: "Execute programmatic campaigns with precision targeting and real-time optimization.",
    features: ["Cross-device targeting", "Brand safety tools", "Creative optimization", "Attribution modeling"]
  },
  {
    title: "ADX (Ad Exchange)",
    description: "The fastest ad exchange in the industry with enterprise-grade infrastructure.",
    features: ["1M+ QPS capacity", "Global edge network", "Advanced algorithms", "API-first design"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <img src={adnexusLogo} alt="Adnexus Logo" className="w-16 h-16 md:w-20 md:h-20" />
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="performance-number">Adnexus</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                The fastest SSP, DSP & ADX in the industry
              </p>
              <p className="text-lg text-muted-foreground/80">
                Sub-millisecond latency • Privacy-first • CTV/OTT optimized
              </p>
            </div>

            <PerformanceMetrics />

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link to="/auth">
                <Button variant="hero" size="xl" className="group">
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="group">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete <span className="performance-number">Adnexus</span> Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unified platform combining all essential advertising technology components 
              for maximum efficiency and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <FeatureCard
                key={index}
                icon={Target}
                title={product.title}
                description={product.description}
                features={product.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="performance-number">Adnexus</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built from the ground up for maximum performance, privacy, and profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to revolutionize your <span className="performance-number">AdTech</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading publishers and advertisers who've increased revenue by 300%+ 
              with our next-generation platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/auth">
                <Button variant="hero" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                Schedule Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold performance-number">5 min</div>
                <div className="text-sm text-muted-foreground">Setup time</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold performance-number">24/7</div>
                <div className="text-sm text-muted-foreground">Expert support</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold performance-number">99.99%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold performance-number">30 days</div>
                <div className="text-sm text-muted-foreground">Free trial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-card/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={adnexusLogo} alt="Adnexus Logo" className="w-8 h-8" />
            <div className="performance-number text-2xl font-bold">Adnexus</div>
          </div>
          <p className="text-muted-foreground">
            The future of high-performance, privacy-first advertising technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;