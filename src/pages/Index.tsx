import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { FeatureCard } from "@/components/FeatureCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ClientLogoTicker } from "@/components/ClientLogoTicker";
import { AnimatedWaves } from "@/components/AnimatedWaves";
import { 
  Target, 
  Shield, 
  Zap, 
  Cpu, 
  ArrowRight, 
  Play,
  Globe,
  TrendingUp,
  CheckCircle,
  Brain,
  Activity,
  Lock
} from "lucide-react";

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
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
        <AnimatedWaves />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="text-center mb-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                  Welcome to <span className="text-gradient">Adnexus</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                  Enterprise Programmatic Advertising Platform
                </p>
                <p className="text-lg text-muted-foreground/80">
                  AI-powered omnichannel DSP, SSP, and ADX delivering real-time optimization and maximum performance
                </p>
              </div>
            </div>

            <PerformanceMetrics />

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  Book a Demo
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/premium">
                <Button variant="outline" size="xl" className="group">
                  View Premium Inventory
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Ticker */}
      <ClientLogoTicker />

      {/* Products Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="performance-number">Omnichannel Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powered by AI, our integrated DSP, SSP, and ADX deliver unparalleled performance 
              across display, video, CTV, and audio inventory.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <FeatureCard
                key={index}
                icon={index === 0 ? Shield : index === 1 ? Brain : Zap}
                title={product.title}
                description={product.description}
                features={product.features}
              />
            ))}
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-background/50 rounded-2xl p-8 border border-border/50">
            <div className="space-y-2">
              <div className="text-3xl font-bold performance-number">1M+</div>
              <div className="text-sm text-muted-foreground">QPS Capacity</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold performance-number">&lt;1ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold performance-number">150+</div>
              <div className="text-sm text-muted-foreground">Data Centers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold performance-number">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The Premium Ad Experience.
                </h2>
                <p className="text-xl text-muted-foreground">
                  Adnexus serves ads exclusively on top-tier streaming networks and apps to deliver both the brand safety and performance you need to succeed.
                </p>
              </div>
              <div className="gradient-card p-8 rounded-2xl border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="gradient-secondary p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Did You Know?</h3>
                </div>
                <div className="mb-6">
                  <div className="text-5xl md:text-6xl font-bold performance-number mb-3">45%</div>
                  <p className="text-lg text-muted-foreground mb-4">
                    of ad impression fraud happens to Fortune 500 advertisers. That includes fraudulent CTV channels, unsafe brand environments, and fake or divisive content.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Source: <a href="https://www.adweek.com/adweek-wire/peer39-study-fortune-500-brands-account-for-half-of-ads-on-divisive-fake-ctv-channels/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Peer39 Study via Adweek</a>
                  </p>
                </div>
              </div>
            </div>
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
              Premium CTV inventory delivering exceptional performance with high CPM rates.
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
                  <div className="text-sm text-muted-foreground">Matching engine</div>
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
                  Get Enterprise Access
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="xl">
                  Schedule Demo
                </Button>
              </a>
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
                <div className="text-2xl font-bold performance-number">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;