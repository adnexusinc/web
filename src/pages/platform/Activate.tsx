import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { 
  Zap,
  Globe,
  Cpu,
  Shield,
  Target,
  ArrowRight,
  Play,
  Settings,
  Sparkles
} from "lucide-react";

const PlatformActivate = () => {
  const activationFeatures = [
    {
      icon: Cpu,
      title: "AI-Powered Bidding",
      description: "Machine learning algorithms optimize every bid in real-time, ensuring maximum performance at minimum cost.",
      improvement: "+44% Conversions"
    },
    {
      icon: Globe,
      title: "Omnichannel Orchestration",
      description: "Seamlessly activate across display, video, CTV, audio, and native inventory from a single platform.",
      improvement: "All Channels"
    },
    {
      icon: Shield,
      title: "Brand Safety Controls",
      description: "Enterprise-grade brand safety with keyword blocking, site lists, and contextual alignment.",
      improvement: "99.9% Safe"
    },
    {
      icon: Target,
      title: "Dynamic Creative Optimization",
      description: "Automatically test and optimize creative elements to maximize engagement and conversions.",
      improvement: "2x CTR"
    }
  ];

  const channels = [
    { name: "Display", reach: "5B+ impressions/day", formats: "Banner, Rich Media, Native" },
    { name: "Video", reach: "500M+ views/day", formats: "In-stream, Out-stream, CTV" },
    { name: "Connected TV", reach: "100M+ households", formats: "Premium CTV, OTT" },
    { name: "Audio", reach: "50M+ listeners", formats: "Podcast, Streaming, Digital Radio" }
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
              Platform: Activate
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Activate <span className="performance-number">Enterprise-Scale Performance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Execute campaigns with unprecedented precision. Our AI-powered activation 
              engine delivers results you never thought possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  <Play className="mr-2 h-4 w-4" />
                  Launch Campaign
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/platform/measure">
                <Button variant="outline" size="lg">
                  Next: Measure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-12 px-4 border-y border-border bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-primary mb-2">Outperform Traditional DSPs</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold performance-number mb-2">50%</div>
              <div className="text-sm font-medium mb-1">Higher Conversion Rate</div>
              <div className="text-xs text-muted-foreground">vs. industry average</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold performance-number mb-2">30%</div>
              <div className="text-sm font-medium mb-1">Lower CPA</div>
              <div className="text-xs text-muted-foreground">with AI optimization</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold performance-number mb-2">2x</div>
              <div className="text-sm font-medium mb-1">Faster Optimization</div>
              <div className="text-xs text-muted-foreground">real-time learning</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Activation Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Precision Activation at <span className="performance-number">Enterprise Scale</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every impression counts. Our platform ensures each one delivers maximum impact 
              through AI-powered optimization and premium inventory access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activationFeatures.map((feature, index) => (
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
                      <Zap className="w-3 h-3" />
                      {feature.improvement}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Omnichannel Reach */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="performance-number">Omnichannel</span> Enterprise Reach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Activate across every channel from a single platform. Reach your audience 
              wherever they are with consistent messaging and unified optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold mb-4">{channel.name}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Reach</div>
                    <div className="font-medium">{channel.reach}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Formats</div>
                    <div className="text-sm">{channel.formats}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Optimization */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Real-time <span className="performance-number">AI Optimization</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our AI engine makes millions of optimization decisions per second, 
                continuously improving performance without manual intervention.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Settings className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Automatic Budget Allocation</h4>
                    <p className="text-muted-foreground">
                      AI dynamically shifts budget to highest-performing segments and channels
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Predictive Bid Optimization</h4>
                    <p className="text-muted-foreground">
                      Machine learning predicts optimal bid prices for every impression
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Creative Performance Analysis</h4>
                    <p className="text-muted-foreground">
                      Automatically identify and scale winning creative combinations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-card/50">
              <h3 className="text-xl font-bold mb-6">Live Optimization Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Bid Optimization Rate</span>
                    <span className="text-sm font-medium">12,847/sec</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '87%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Budget Efficiency</span>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '94%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Creative Performance</span>
                    <span className="text-sm font-medium">2.4x baseline</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '100%'}} />
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-center">
                    <div className="text-sm font-medium mb-1">Average Performance Lift</div>
                    <div className="text-3xl font-bold performance-number">+340%</div>
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
              Ready to <span className="performance-number">Activate Growth</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Launch your first campaign in minutes. See results in hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/platform/measure">
                <Button size="lg" className="group">
                  Continue to Measure
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg">
                  Start Activation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformActivate;