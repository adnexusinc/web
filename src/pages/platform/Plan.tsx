import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { 
  Brain,
  Target,
  Users,
  TrendingUp,
  Database,
  ArrowRight,
  BarChart3,
  Globe,
  Sparkles
} from "lucide-react";

const PlatformPlan = () => {
  const planningFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Audience Intelligence",
      description: "Machine learning algorithms analyze billions of signals to identify high-value audiences before campaigns launch.",
      stats: "100M+ data points analyzed daily"
    },
    {
      icon: Target,
      title: "Enterprise Segmentation",
      description: "Build custom B2B segments with firmographic, technographic, and intent data for precise enterprise targeting.",
      stats: "10,000+ enterprise attributes"
    },
    {
      icon: Database,
      title: "First-Party Data Integration",
      description: "Seamlessly integrate your CRM, CDP, and analytics platforms for unified audience planning.",
      stats: "50+ native integrations"
    },
    {
      icon: TrendingUp,
      title: "Predictive Performance Modeling",
      description: "Forecast campaign outcomes with AI models trained on millions of historical campaigns.",
      stats: "95% forecast accuracy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Platform: Plan
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Plan with <span className="performance-number">Enterprise Precision</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Strategic campaign planning powered by real-time market intelligence and 
              AI-driven audience insights. See your entire market opportunity before spending a dollar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Try Planning Tools
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/platform/activate">
                <Button variant="outline" size="lg">
                  Next: Activate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Metrics Dashboard */}
      <section className="py-12 px-4 border-y border-border bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-primary mb-2">Live Platform Metrics</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold performance-number">2.3M</div>
              <div className="text-sm text-muted-foreground">Active Audiences</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">847K</div>
              <div className="text-sm text-muted-foreground">B2B Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">12ms</div>
              <div className="text-sm text-muted-foreground">Query Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">99.9%</div>
              <div className="text-sm text-muted-foreground">Match Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Strategic Intelligence for <span className="performance-number">Enterprise Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our planning suite combines real-time data, predictive analytics, and 
              enterprise-grade tools to ensure campaign success before launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {planningFeatures.map((feature, index) => (
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
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <BarChart3 className="w-4 h-4" />
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Builder Preview */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Build <span className="performance-number">Impossible Audiences</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our enterprise audience builder combines deterministic B2B data with 
                probabilistic consumer insights for unmatched targeting precision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Account-Based Targeting</h4>
                    <p className="text-sm text-muted-foreground">
                      Target specific companies, industries, or job functions
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Intent Signals</h4>
                    <p className="text-sm text-muted-foreground">
                      Identify in-market buyers based on real-time behavior
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lookalike Modeling</h4>
                    <p className="text-sm text-muted-foreground">
                      Expand reach with AI-powered similar audience discovery
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/auth">
                <Button className="mt-8 group">
                  Access Audience Builder
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <Card className="p-8 bg-card/50">
              <h3 className="text-xl font-bold mb-6">Example B2B Audience</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <div className="text-sm font-medium text-primary mb-1">Company Size</div>
                  <div className="text-sm text-muted-foreground">1,000-10,000 employees</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <div className="text-sm font-medium text-primary mb-1">Industries</div>
                  <div className="text-sm text-muted-foreground">SaaS, FinTech, Healthcare Tech</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <div className="text-sm font-medium text-primary mb-1">Job Functions</div>
                  <div className="text-sm text-muted-foreground">VP Marketing, CMO, Director of Growth</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <div className="text-sm font-medium text-primary mb-1">Intent Signals</div>
                  <div className="text-sm text-muted-foreground">Researching "enterprise advertising platforms"</div>
                </div>
                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-medium">Estimated Reach</div>
                      <div className="text-2xl font-bold performance-number">47,300</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">Match Rate</div>
                      <div className="text-2xl font-bold performance-number">94%</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Plan <span className="performance-number">Smarter Campaigns</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start with strategic intelligence. Execute with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/platform/activate">
                <Button size="lg" className="group">
                  Continue to Activate
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPlan;