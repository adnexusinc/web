import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Tv, 
  DollarSign, 
  Shield, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowLeft,
  Star,
  Award
} from 'lucide-react';

const Inventory = () => {
  const premiumFeatures = [
    {
      icon: Tv,
      title: "250M+ Monthly CTV Impressions",
      description: "Massive Connected TV reach across premium streaming platforms, delivering unmatched scale for brand advertisers seeking maximum exposure."
    },
    {
      icon: TrendingUp,
      title: "10X Conversion Performance",
      description: "CTV ads convert 10X better than standard video ads due to engaged living room audiences and premium content environments."
    },
    {
      icon: Shield,
      title: "2ms Ultra-Fast Response",
      description: "Lightning-fast bid responses ensure you never miss premium inventory opportunities in competitive CTV auctions."
    },
    {
      icon: Target,
      title: "Premium CTV Targeting",
      description: "Advanced household-level targeting on big-screen environments where purchase decisions are made, not just consumed."
    }
  ];

  const inventoryStats = [
    { value: "250M+", label: "Monthly CTV Impressions", suffix: "" },
    { value: "2ms", label: "Response Time", suffix: "" },
    { value: "10X", label: "Conversion vs Video Ads", suffix: "" },
    { value: "98%", label: "Viewability Rate", suffix: "+" }
  ];

  const contentCategories = [
    "Premium Sports",
    "News & Information", 
    "Entertainment",
    "Lifestyle & Travel",
    "Documentary",
    "Kids & Family"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 -mt-24 pt-24">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The <span className="performance-number">exclusive inventory</span> that converts 10X over normal video
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Direct access to premium CTV inventory from Netflix, Disney+, HBO Max and other tier-1 platforms that don't sell publicly. Exceptional performance, zero junk traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/auth">
                <Button variant="hero" size="xl">
                  Access Inventory
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Stats */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {inventoryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold performance-number mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-24 px-6">
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

      {/* Premium Features */}
      <section className="py-24 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why CTV Ads <span className="performance-number">Convert 10X Better</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connected TV advertising delivers superior performance because viewers are actively engaged 
              in living room environments where major purchase decisions happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="gradient-card p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="gradient-secondary p-3 rounded-xl">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Premium <span className="performance-number">Content Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Brand-safe, high-quality content across diverse categories reaching engaged audiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contentCategories.map((category, index) => (
              <div key={index} className="gradient-card p-6 rounded-xl text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Premium <span className="performance-number">$50+ CPM</span> Performance
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our premium CTV inventory consistently delivers exceptional performance metrics 
              that justify premium pricing for brand advertisers.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="gradient-card p-6 rounded-xl">
                <Star className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Premium Publishers</h3>
                <p className="text-muted-foreground">Tier-1 streaming platforms and premium content providers</p>
              </div>
              <div className="gradient-card p-6 rounded-xl">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">High-Value Audiences</h3>
                <p className="text-muted-foreground">Affluent demographics with high purchasing power</p>
              </div>
              <div className="gradient-card p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">Consistent $50+ CPM performance with verified metrics</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button variant="hero" size="xl">
                  Get Access Now
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card/50">
        <div className="container mx-auto text-center">
          <div className="text-sm text-muted-foreground">
            © 2025 ADXYZ Inc. All rights reserved. | Terms of Service | Privacy Policy
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Inventory;