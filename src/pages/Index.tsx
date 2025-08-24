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

const features = [
  {
    icon: Zap,
    title: "Sub-Millisecond Latency",
    description: "Revolutionary bidding engine with <1ms response times, optimized for real-time decisions at scale."
  },
  {
    icon: Shield,
    title: "AI-Powered Privacy",
    description: "Advanced machine learning algorithms that optimize ad targeting while maintaining strict user privacy and data protection standards."
  },
  {
    icon: Cpu,
    title: "Smart Infrastructure",
    description: "AI-driven cloud infrastructure with intelligent load balancing and predictive scaling for optimal performance and reliability."
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
              <div className="text-center mb-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="performance-number">Adnexus</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                Premium CTV Inventory with Guaranteed $50+ CPM
              </p>
              <p className="text-lg text-muted-foreground/80">
                Exclusive Connected TV • Brand-safe environments • Premium audiences
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
              Premium <span className="performance-number">CTV Inventory</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access exclusive Connected TV advertising inventory with guaranteed $50+ CPM rates. 
              Premium brand-safe environments reaching high-value audiences.
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
              Premium CTV inventory delivering exceptional performance with guaranteed high CPM rates.
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

      {/* AI-Optimized Advertising Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="performance-number">AI-Optimized</span> Advertising for the LLM Era
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              While others worry about AI disruption, we've built advertising technology that thrives in 
              the AI-driven marketplace. Our ads are optimized for discovery, engagement, and conversion 
              in both traditional and LLM-powered environments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Built for <span className="performance-number">Answer Engine Optimization</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="gradient-secondary p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">LLM-Ready Ad Formats</h4>
                    <p className="text-muted-foreground">
                      Our ads are structured with semantic markup and contextual data that make them 
                      easily discoverable and recommendable by AI systems like ChatGPT and Claude.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="gradient-secondary p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI-Enhanced Targeting</h4>
                    <p className="text-muted-foreground">
                      Machine learning algorithms analyze user behavior across platforms to predict 
                      intent and deliver ads at the optimal moment in the customer journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="gradient-secondary p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cross-Platform Intelligence</h4>
                    <p className="text-muted-foreground">
                      Our AI tracks user interactions across traditional web, mobile apps, and 
                      AI-powered search experiences for unified campaign optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-card p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-6 text-center">AI Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold performance-number mb-2">340%</div>
                  <div className="text-sm text-muted-foreground">Higher CTR with AI optimization</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold performance-number mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">LLM recommendation rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold performance-number mb-2">12ms</div>
                  <div className="text-sm text-muted-foreground">AI decision time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold performance-number mb-2">200%</div>
                  <div className="text-sm text-muted-foreground">ROAS improvement</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="gradient-card p-6 rounded-xl text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-3">Predictive Targeting</h4>
              <p className="text-muted-foreground">
                AI predicts user intent before they even search, positioning your ads 
                for maximum relevance and engagement.
              </p>
            </div>
            <div className="gradient-card p-6 rounded-xl text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-3">Real-Time Optimization</h4>
              <p className="text-muted-foreground">
                Millisecond bidding decisions powered by machine learning ensure 
                optimal ad placement and pricing in every auction.
              </p>
            </div>
            <div className="gradient-card p-6 rounded-xl text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-3">Adaptive Learning</h4>
              <p className="text-muted-foreground">
                Our AI continuously learns from campaign performance, automatically 
                adjusting strategies for improving ROI over time.
              </p>
            </div>
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
            <div className="performance-number text-2xl font-bold">Adnexus</div>
          </div>
          <p className="text-muted-foreground">
            Copyright 2025 ADXYZ Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;