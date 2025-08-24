import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { 
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  FileText,
  ArrowRight,
  Download,
  Eye,
  Sparkles
} from "lucide-react";

const PlatformMeasure = () => {
  const measurementFeatures = [
    {
      icon: BarChart3,
      title: "Executive Dashboards",
      description: "C-suite ready reporting with customizable KPIs, automated insights, and predictive analytics.",
      metric: "Real-time Updates"
    },
    {
      icon: TrendingUp,
      title: "Advanced Attribution",
      description: "Multi-touch attribution modeling for complex B2B sales cycles with custom conversion windows.",
      metric: "Full Journey Tracking"
    },
    {
      icon: Activity,
      title: "Performance Analytics",
      description: "Deep-dive analytics across campaigns, audiences, creatives, and channels with AI-powered insights.",
      metric: "1000+ Metrics"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Schedule and distribute custom reports to stakeholders with executive summaries and recommendations.",
      metric: "White-label Ready"
    }
  ];

  const metrics = [
    { category: "Efficiency", metrics: ["CPA", "CPM", "CPC", "ROAS", "ROI"] },
    { category: "Engagement", metrics: ["CTR", "VTR", "Viewability", "Attention", "Dwell Time"] },
    { category: "Conversion", metrics: ["CVR", "View-through", "Click-through", "Assisted", "Direct"] },
    { category: "Attribution", metrics: ["First-touch", "Last-touch", "Linear", "Time-decay", "Custom"] }
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
              Platform: Measure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Measure <span className="performance-number">Enterprise Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Executive-level analytics that transform data into strategic decisions. 
              See the full impact of your advertising investment with unprecedented clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  <Eye className="mr-2 h-4 w-4" />
                  View Demo Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Sample Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12 px-4 border-y border-border bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-primary mb-2">Client Success Metrics</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold performance-number">340%</div>
              <div className="text-sm text-muted-foreground">Avg. ROI Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">67%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">2.4x</div>
              <div className="text-sm text-muted-foreground">Conversion Lift</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">95%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurement Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Analytics Built for <span className="performance-number">Enterprise Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform raw data into actionable insights with our comprehensive 
              measurement suite designed for enterprise decision-makers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {measurementFeatures.map((feature, index) => (
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
                      <Activity className="w-4 h-4" />
                      {feature.metric}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Library */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="performance-number">1000+</span> Metrics at Your Fingertips
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track every aspect of campaign performance with our comprehensive metrics library.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold mb-4 text-primary">{category.category}</h3>
                <div className="space-y-2">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Dashboard Preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="performance-number">Executive Dashboard</span> Experience
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Purpose-built for C-suite visibility. Get instant access to high-level 
                insights and drill down into granular details when needed.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Eye className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Real-time Visibility</h4>
                    <p className="text-muted-foreground">
                      Live campaign performance updates with predictive forecasting
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PieChart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Custom KPIs</h4>
                    <p className="text-muted-foreground">
                      Define and track metrics that matter to your business
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Automated Insights</h4>
                    <p className="text-muted-foreground">
                      AI-generated recommendations and anomaly detection
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/auth">
                <Button className="mt-8 group">
                  Access Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <Card className="p-8 bg-card/50">
              <h3 className="text-xl font-bold mb-6">Executive Summary</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/50 border border-border">
                    <div className="text-sm text-muted-foreground mb-1">Total Spend</div>
                    <div className="text-2xl font-bold">$847,293</div>
                    <div className="text-xs text-green-500">-23% vs target</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-border">
                    <div className="text-sm text-muted-foreground mb-1">ROAS</div>
                    <div className="text-2xl font-bold performance-number">12.3x</div>
                    <div className="text-xs text-green-500">+340% vs baseline</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <div className="text-sm text-muted-foreground mb-3">Performance Trend</div>
                  <div className="h-32 flex items-end justify-between gap-1">
                    {[40, 45, 35, 50, 55, 65, 60, 70, 75, 80, 85, 90].map((height, i) => (
                      <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{height: `${height}%`}}>
                        <div className="bg-primary rounded-t h-full" style={{height: i > 8 ? '100%' : '70%'}} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">AI Recommendation</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Shift 20% budget to CTV for 45% efficiency gain
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Apply</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reporting Capabilities */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Reporting That <span className="performance-number">Drives Decisions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From automated daily updates to comprehensive quarterly reviews, 
              our reporting suite adapts to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Daily Pulse</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automated morning briefings with key metrics and anomalies
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Sample Report
              </Button>
            </Card>
            <Card className="p-6 text-center">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Weekly Performance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive analysis with trends and recommendations
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Sample Report
              </Button>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Executive Review</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Board-ready presentations with strategic insights
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Sample Report
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Turn Data Into <span className="performance-number">Strategic Advantage</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how enterprise leaders use Adnexus to drive impossible growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformMeasure;