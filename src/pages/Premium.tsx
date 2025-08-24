import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { ClientLogoTicker } from "@/components/ClientLogoTicker";
import { 
  Tv,
  TrendingUp,
  Users,
  Shield,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Target,
  Sparkles,
  Award
} from "lucide-react";

const Premium = () => {
  const ctvBenefits = [
    {
      icon: Tv,
      title: "Premium CTV Inventory",
      description: "Access exclusive Connected TV inventory from top streaming platforms with 95% completion rates.",
      stat: "100M+ Households"
    },
    {
      icon: DollarSign,
      title: "Guaranteed $50+ CPMs",
      description: "Premium pricing for premium inventory. Our CTV campaigns consistently deliver $50-$85 CPMs.",
      stat: "$85 Avg CPM"
    },
    {
      icon: Users,
      title: "Engaged Audiences",
      description: "Reach highly engaged viewers in lean-back environments with 98% viewability rates.",
      stat: "98% Viewability"
    },
    {
      icon: Shield,
      title: "Brand-Safe Environments",
      description: "100% brand-safe, fraud-free inventory with human-verified content alignment.",
      stat: "100% Brand Safe"
    }
  ];

  const inventoryPartners = [
    "Netflix Ad-Supported", "Disney+", "Hulu", "HBO Max", 
    "Paramount+", "Peacock", "Amazon Prime Video", "Apple TV+",
    "Roku Channel", "Samsung TV Plus", "Pluto TV", "Tubi"
  ];

  const conversionStats = [
    { metric: "View-Through Rate", value: "95%", benchmark: "Industry: 65%" },
    { metric: "Completion Rate", value: "94%", benchmark: "Industry: 70%" },
    { metric: "Brand Recall", value: "87%", benchmark: "Industry: 45%" },
    { metric: "Purchase Intent", value: "73%", benchmark: "Industry: 32%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Premium Inventory
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium CTV Inventory That <span className="performance-number">Converts</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access the most valuable advertising real estate in digital media. 
              Our exclusive CTV inventory delivers unmatched engagement, completion rates, 
              and ROI for enterprise advertisers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Start Premium Campaign
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  View Inventory List
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Banner */}
      <section className="py-12 px-4 border-y border-border bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold performance-number">$50-85</div>
              <div className="text-sm text-muted-foreground">CPM Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">95%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">340%</div>
              <div className="text-sm text-muted-foreground">Average ROAS</div>
            </div>
            <div>
              <div className="text-3xl font-bold performance-number">100M+</div>
              <div className="text-sm text-muted-foreground">Households</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CTV Converts */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Premium CTV <span className="performance-number">Dominates Performance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connected TV combines the impact of television with the precision of digital advertising, 
              delivering results that traditional channels can't match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ctvBenefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary">
                      <Sparkles className="w-3 h-3" />
                      {benefit.stat}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Partners */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Exclusive Access to <span className="performance-number">Premium Publishers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Direct partnerships with the world's leading streaming platforms ensure 
              your ads appear in the most premium, brand-safe environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inventoryPartners.map((partner, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className="font-semibold">{partner}</div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              + 50 more premium streaming platforms and channels
            </p>
            <Link to="/inventory">
              <Button variant="outline">
                View Full Inventory List
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                CTV Performance <span className="performance-number">Crushes Traditional Media</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our premium CTV inventory consistently outperforms traditional digital 
                and linear TV advertising across every key metric.
              </p>
              
              <div className="space-y-6">
                {conversionStats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{stat.metric}</span>
                      <span className="text-2xl font-bold performance-number">{stat.value}</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-3 relative">
                      <div 
                        className="bg-primary h-3 rounded-full" 
                        style={{width: stat.value}}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.benchmark}</div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Real Client Results</h3>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-background/80">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Fortune 500 Retailer</span>
                  </div>
                  <div className="text-3xl font-bold performance-number mb-1">427% ROAS</div>
                  <div className="text-sm text-muted-foreground">
                    $2.3M revenue from $540K CTV spend
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-background/80">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold">B2B SaaS Platform</span>
                  </div>
                  <div className="text-3xl font-bold performance-number mb-1">67% Cost Reduction</div>
                  <div className="text-sm text-muted-foreground">
                    $31 CPL vs $93 on traditional channels
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-background/80">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Automotive Brand</span>
                  </div>
                  <div className="text-3xl font-bold performance-number mb-1">89% Brand Lift</div>
                  <div className="text-sm text-muted-foreground">
                    Highest recall rate in company history
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTV Formats */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="performance-number">Premium Ad Formats</span> That Engage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From non-skippable pre-roll to interactive overlays, our CTV formats 
              ensure maximum engagement and message delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Play className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Pre-Roll</h3>
              <p className="text-sm text-muted-foreground mb-4">
                15-30 second non-skippable ads before premium content
              </p>
              <div className="text-sm font-medium text-primary">95% Completion Rate</div>
            </Card>

            <Card className="p-6">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Mid-Roll</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Natural ad breaks within long-form content
              </p>
              <div className="text-sm font-medium text-primary">87% Viewability</div>
            </Card>

            <Card className="p-6">
              <Tv className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Interactive</h3>
              <p className="text-sm text-muted-foreground mb-4">
                QR codes and overlays for direct response
              </p>
              <div className="text-sm font-medium text-primary">12% Engagement Rate</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Audience Targeting */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Precision Targeting Meets <span className="performance-number">Premium Reach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combine the broad reach of TV with the precise targeting of digital. 
              Reach exactly who you want, when they're most engaged.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold performance-number mb-2">250K+</div>
              <div className="text-sm font-medium mb-1">Audience Segments</div>
              <div className="text-xs text-muted-foreground">Demographic, behavioral, intent</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold performance-number mb-2">95%</div>
              <div className="text-sm font-medium mb-1">Match Rate</div>
              <div className="text-xs text-muted-foreground">First-party data activation</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold performance-number mb-2">Real-time</div>
              <div className="text-sm font-medium mb-1">Optimization</div>
              <div className="text-xs text-muted-foreground">AI-powered bidding</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold performance-number mb-2">100%</div>
              <div className="text-sm font-medium mb-1">Addressable</div>
              <div className="text-xs text-muted-foreground">Household-level targeting</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Access <span className="performance-number">Premium CTV Inventory</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join enterprise advertisers achieving impossible growth with our 
              exclusive CTV inventory. $10K/month minimum with guaranteed performance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Exclusive Inventory</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Guaranteed CPMs</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">White-Glove Service</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Activate Premium Access
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
    </div>
  );
};

export default Premium;