import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { 
  Zap, 
  Target, 
  BarChart3, 
  ArrowRight,
  Brain,
  Cpu,
  TrendingUp,
  Shield
} from "lucide-react";

const DSP = () => {
  const dspFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Bidding",
      description: "Machine learning algorithms optimize bids in real-time across 100M+ daily auctions.",
      metric: "340% Better ROAS"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced audience segmentation with 250K+ targeting parameters and first-party data activation.",
      metric: "95% Match Rate"
    },
    {
      icon: Zap,
      title: "Real-Time Optimization",
      description: "Sub-millisecond decision making with continuous campaign optimization across all channels.",
      metric: "<1ms Response"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics", 
      description: "Executive dashboards with custom attribution modeling and cross-device tracking.",
      metric: "Real-Time Insights"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Demand-Side Platform for <span className="performance-number">Enterprise Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our AI-powered DSP delivers superior performance across premium inventory. 
              Built for enterprise advertisers who demand results, not just reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Start Enterprise Campaign
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/premium">
                <Button variant="outline" size="lg">
                  View Premium Inventory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-12 px-4 border-y border-border bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold performance-number">340%</div>
              <div className="text-sm text-muted-foreground">Average ROAS</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">67%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">50%</div>
              <div className="text-sm text-muted-foreground">Higher Conversions</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">100M+</div>
              <div className="text-sm text-muted-foreground">Daily Auctions</div>
            </div>
          </div>
        </div>
      </section>

      {/* DSP Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Enterprise DSP <span className="performance-number">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced programmatic buying technology designed for enterprise performance and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dspFeatures.map((feature, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary">
                      <TrendingUp className="w-3 h-3" />
                      {feature.metric}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Scale with <span className="performance-number">Enterprise DSP</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join enterprise advertisers achieving impossible growth with our AI-powered DSP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Book Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/platform/overview">
                <Button variant="outline" size="lg">
                  Platform Overview
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DSP;