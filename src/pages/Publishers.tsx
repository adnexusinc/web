import React from 'react';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { ArrowRight, TrendingUp, DollarSign, Shield, BarChart3, Zap, Globe, Users, CheckCircle, Star, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Publishers = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "AI-powered yield optimization that automatically adjusts floor prices and demand sources to maximize your revenue potential"
    },
    {
      icon: DollarSign,
      title: "Premium Demand",
      description: "Access to 500+ premium advertisers and demand sources ensuring consistently high CPMs and fill rates across all formats"
    },
    {
      icon: Shield,
      title: "Brand Safety & Quality",
      description: "Advanced filtering technology and human review processes ensure only high-quality, brand-safe ads appear on your property"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive revenue analytics with granular reporting, forecasting tools, and actionable optimization insights"
    },
    {
      icon: Zap,
      title: "Header Bidding",
      description: "Advanced header bidding technology with server-side optimization to maximize competition and reduce latency impact"
    },
    {
      icon: Globe,
      title: "Global Monetization",
      description: "Monetize traffic from 195+ countries with localized demand sources and currency optimization for maximum global revenue"
    }
  ];

  const adFormats = [
    {
      title: "Display & Native",
      description: "High-performing display and native ad units",
      revenue: "High RPM",
      features: ["Responsive Design", "Lazy Loading", "A/B Testing"]
    },
    {
      title: "Video & CTV",
      description: "Premium video advertising with high completion rates",
      revenue: "Premium RPM", 
      features: ["VAST 4.0", "Autoplay Options", "Viewability Tracking"]
    },
    {
      title: "Mobile & AMP",
      description: "Mobile-optimized ads with AMP support",
      revenue: "Strong RPM",
      features: ["AMP Compatible", "Fast Loading", "Touch Optimized"]
    },
    {
      title: "Audio & Podcast",
      description: "Innovative audio advertising solutions",
      revenue: "Top RPM",
      features: ["Dynamic Insertion", "Contextual Targeting", "Skip Protection"]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "85% Revenue Increase",
      description: "Average revenue uplift within first 90 days of implementation"
    },
    {
      icon: Zap,
      title: "99.2% Fill Rate",
      description: "Industry-leading fill rates across all ad formats and geos"
    },
    {
      icon: CheckCircle,
      title: "15-Minute Integration",
      description: "Quick setup with our lightweight SDK or simple header tag"
    }
  ];

  const testimonials = [
    {
      name: "Emily Watson",
      title: "Chief Revenue Officer",
      company: "StreamlineAds",
      quote: "Adnexus increased our ad revenue by 85% in the first quarter. The header bidding setup was seamless.",
      metric: "+85% Revenue"
    },
    {
      name: "David Park",
      title: "VP of Monetization", 
      company: "ContentHub Media",
      quote: "The fill rates and CPMs are consistently higher than any other SSP we've used. Excellent partner.",
      metric: "99.2% Fill Rate"
    }
  ];

  const integrationSteps = [
    {
      step: "1",
      title: "Account Setup",
      description: "Create your publisher account and verify your properties in under 5 minutes"
    },
    {
      step: "2", 
      title: "Ad Unit Creation",
      description: "Our team helps you create optimized ad units for maximum performance"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Simple tag implementation or SDK integration with full technical support"
    },
    {
      step: "4",
      title: "Optimization",
      description: "Ongoing yield optimization and performance monitoring by dedicated account managers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Maximize Your <span className="text-gradient">Ad Revenue</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join 1,000+ publishers earning 85% more revenue with our advanced SSP technology. 
            Premium demand, real-time optimization, and 99.2% fill rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Start Monetizing Today
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Calculate Revenue
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">1,000+</div>
              <div className="text-sm text-muted-foreground">Active Publishers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">Millions</div>
              <div className="text-sm text-muted-foreground">Revenue Paid Out</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">99.2%</div>
              <div className="text-sm text-muted-foreground">Fill Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">15min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced SSP Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage cutting-edge supply-side platform technology to maximize 
              your ad revenue and provide the best user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="gradient-card p-8 rounded-2xl backdrop-blur-sm border border-primary/20">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Monetize Every <span className="text-gradient">Ad Format</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive ad format support with industry-leading RPMs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adFormats.map((format, index) => (
              <div key={index} className="gradient-card p-6 rounded-2xl backdrop-blur-sm border border-primary/20">
                <h3 className="text-xl font-semibold mb-2">{format.title}</h3>
                <p className="text-muted-foreground mb-4">{format.description}</p>
                <div className="text-2xl font-bold text-gradient mb-4">{format.revenue}</div>
                <div className="space-y-2">
                  {format.features.map((feature, fIndex) => (
                    <div key={fIndex} className="text-sm font-medium text-primary">
                      ✓ {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started in <span className="text-gradient">4 Simple Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From signup to revenue generation in under 24 hours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-2xl mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Publishers Choose <span className="text-gradient">Adnexus</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join 1,000+ publishers already maximizing their revenue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Publisher Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              See how publishers are maximizing revenue with Adnexus
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="gradient-card p-8 rounded-2xl backdrop-blur-sm border border-primary/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient">{testimonial.metric}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Maximize Your Revenue?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 1,000+ publishers who have increased their ad revenue by 85% 
              with our advanced SSP technology. Get started today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/auth">
                <Button variant="hero" size="xl" className="group">
                  Start Monetizing Today
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/platform/overview">
                <Button variant="outline" size="xl">
                  Calculate Your Revenue
                </Button>
              </Link>
            </div>

            <div className="text-sm text-muted-foreground">
              ✓ No minimum traffic • ✓ 15-minute setup • ✓ Dedicated account manager
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publishers;