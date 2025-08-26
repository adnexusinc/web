import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { 
  Zap, 
  Target, 
  BarChart3, 
  ArrowRight,
  Brain,
  Globe,
  Shield,
  Cpu
} from "lucide-react";

const PlatformOverview = () => {
  const platformFeatures = [
    {
      icon: Brain,
      title: "Plan with Intelligence",
      description: "Enterprise-grade audience intelligence powered by AI. Access real-time market insights from premium inventory with advanced demographic modeling for B2B campaigns.",
      link: "/platform/plan",
      metrics: ["100M+ Data Points", "Real-time Insights", "B2B Modeling"]
    },
    {
      icon: Zap,
      title: "Activate at Scale",
      description: "Execute enterprise campaigns with precision targeting. Our omnichannel DSP activates across premium inventory with B2B-optimized algorithms.",
      link: "/platform/activate",
      metrics: ["50% Higher Conversions", "30% Cost Efficiency", "Omnichannel Reach"]
    },
    {
      icon: BarChart3,
      title: "Measure Impact",
      description: "Executive-level analytics with C-suite dashboard visibility. Track ROI across complex enterprise touchpoints with advanced attribution modeling.",
      link: "/platform/measure",
      metrics: ["Real-time Analytics", "Custom Attribution", "Executive Dashboards"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              One Platform. <span className="performance-number">Infinite Connections</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The enterprise advertising platform that combines AI-powered intelligence, 
              premium inventory, and executive analytics to deliver impossible growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Book Enterprise Demo
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

      {/* Performance Metrics */}
      <section className="py-12 px-4 border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold performance-number">Enterprise</div>
              <div className="text-sm text-muted-foreground">Pricing Model</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">340%</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">&lt;1ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Built for <span className="performance-number">Enterprise Performance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three integrated modules working in perfect harmony to deliver 
              exponential growth for enterprise advertisers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden hover-lift">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={feature.link}>
                    <Button variant="outline" className="group w-full">
                      Explore {feature.title.split(' ')[0]}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Powered by <span className="performance-number">AI Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our proprietary AI engine processes billions of signals in real-time, 
                delivering insights and optimizations that drive unprecedented performance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Enterprise Security</h4>
                    <p className="text-muted-foreground">
                      SOC 2 Type II certified with end-to-end encryption and 
                      dedicated infrastructure for enterprise clients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Global Scale</h4>
                    <p className="text-muted-foreground">
                      150+ data centers worldwide processing over 1 million 
                      queries per second with sub-millisecond latency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Cpu className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Machine Learning</h4>
                    <p className="text-muted-foreground">
                      Advanced ML models continuously learning from campaign 
                      performance to optimize future results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="text-3xl font-bold performance-number mb-2">5B+</div>
                <div className="text-sm text-muted-foreground">Daily Impressions</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold performance-number mb-2">100M+</div>
                <div className="text-sm text-muted-foreground">Unique Users</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold performance-number mb-2">50TB</div>
                <div className="text-sm text-muted-foreground">Data Processed Daily</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold performance-number mb-2">1ms</div>
                <div className="text-sm text-muted-foreground">Matching Engine</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your <span className="performance-number">Enterprise Advertising</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Fortune 500 companies achieving impossible growth with Adnexus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Get Enterprise Access
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformOverview;