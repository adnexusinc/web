import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { 
  Zap, 
  Globe, 
  Shield, 
  ArrowRight,
  Cpu,
  TrendingUp,
  DollarSign,
  BarChart3
} from "lucide-react";

const ADX = () => {
  const adxFeatures = [
    {
      icon: Zap,
      title: "Sub-Millisecond Latency",
      description: "The fastest ad exchange in the industry with <1ms response times and 99.99% uptime.",
      metric: "<1ms Response"
    },
    {
      icon: Shield,
      title: "Premium Brand Safety",
      description: "100% brand-safe inventory with AI-powered fraud detection and human content verification.",
      metric: "100% Brand Safe"
    },
    {
      icon: DollarSign,
      title: "Guaranteed Fill Rates",
      description: "99.8% fill rates with premium CPM floors and intelligent yield optimization.",
      metric: "99.8% Fill Rate"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "150+ data centers worldwide processing 5B+ daily impressions with enterprise reliability.",
      metric: "5B+ Daily Impressions"
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
              The Fastest Ad Exchange for <span className="performance-number">Premium Trading</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our enterprise ad exchange connects premium publishers with qualified demand partners. 
              Built for scale, security, and superior performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Join Exchange
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/partners">
                <Button variant="outline" size="lg">
                  Partnership Program
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
              <div className="text-3xl font-bold performance-number">5B+</div>
              <div className="text-sm text-muted-foreground">Daily Impressions</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">&lt;1ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">150+</div>
              <div className="text-sm text-muted-foreground">Data Centers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ADX Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Enterprise Ad Exchange <span className="performance-number">Infrastructure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built from the ground up for enterprise-grade performance, security, and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {adxFeatures.map((feature, index) => (
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
                      <Cpu className="w-3 h-3" />
                      {feature.metric}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Partners */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by <span className="performance-number">Global Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our exchange connects premium publishers with verified demand partners worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Publishers</h3>
              <p className="text-3xl font-bold performance-number mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Premium publishers and content creators</p>
            </Card>

            <Card className="p-8 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">DSPs</h3>
              <p className="text-3xl font-bold performance-number mb-2">150+</p>
              <p className="text-sm text-muted-foreground">Demand-side platforms and agencies</p>
            </Card>

            <Card className="p-8 text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Countries</h3>
              <p className="text-3xl font-bold performance-number mb-2">80+</p>
              <p className="text-sm text-muted-foreground">Global reach across all major markets</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join the <span className="performance-number">Premium Exchange</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with our enterprise ad exchange and access premium inventory with guaranteed performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Apply for Access
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/publishers">
                <Button variant="outline" size="lg">
                  Publisher Solutions
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

export default ADX;