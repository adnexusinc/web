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
      title: "Premium CTV/OTT Inventory",
      description: "Exclusive access to high-quality Connected TV and Over-The-Top streaming inventory from top-tier publishers."
    },
    {
      icon: DollarSign,
      title: "Guaranteed $50+ CPM",
      description: "Premium inventory commanding $50+ CPM rates with verified performance metrics and brand-safe environments."
    },
    {
      icon: Shield,
      title: "Brand Safety Certified",
      description: "All inventory is pre-screened and certified for brand safety with comprehensive content verification."
    },
    {
      icon: Target,
      title: "Premium Audience Targeting",
      description: "Reach high-value demographics with advanced targeting capabilities and first-party data integration."
    }
  ];

  const inventoryStats = [
    { value: "$75", label: "Average CPM", suffix: "+" },
    { value: "2M+", label: "Monthly Impressions", suffix: "" },
    { value: "98%", label: "Viewability Rate", suffix: "" },
    { value: "95%", label: "Completion Rate", suffix: "+" }
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
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Premium <span className="performance-number">CTV Inventory</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Exclusive Connected TV advertising opportunities with guaranteed $50+ CPM rates
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

      {/* Premium Features */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Our <span className="performance-number">Inventory</span> Commands Premium Rates
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our carefully curated Connected TV inventory delivers exceptional performance 
              for brand advertisers seeking premium placements.
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
      <section className="py-24 px-6 bg-card/30">
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
              Guaranteed <span className="performance-number">$50+ CPM</span> Performance
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