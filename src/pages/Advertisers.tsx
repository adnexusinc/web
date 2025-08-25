import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Target, BarChart3, Zap, Users, Globe, Shield, TrendingUp, Eye, MousePointer, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Advertisers = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced audience segmentation using first-party data, behavioral signals, and real-time intent data for maximum campaign relevance"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive reporting dashboard with granular insights, attribution modeling, and automated optimization recommendations"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Execution",
      description: "Sub-100ms bid responses ensure you never miss an opportunity. Our infrastructure processes 1M+ QPS globally"
    },
    {
      icon: Users,
      title: "Audience Intelligence",
      description: "Leverage our proprietary audience data covering 500M+ unique users with 1000+ demographic and behavioral attributes"
    },
    {
      icon: Globe,
      title: "Cross-Channel Reach",
      description: "Access premium inventory across display, video, CTV, mobile, and native formats from 10,000+ publishers worldwide"
    },
    {
      icon: Shield,
      title: "Brand Safety & Fraud Protection",
      description: "Enterprise-grade brand safety tools and fraud detection powered by machine learning to protect your investment"
    }
  ];

  const adFormats = [
    {
      title: "Display Advertising",
      description: "High-impact display ads across premium publishers",
      metrics: ["99.5% Viewability", "0.02% IVT Rate", "5M+ Sites"]
    },
    {
      title: "Video & CTV",
      description: "Premium video inventory including Connected TV",
      metrics: ["95% Completion Rate", "Premium Inventory", "4K Quality"]
    },
    {
      title: "Mobile & In-App",
      description: "Native mobile advertising for maximum engagement",
      metrics: ["2.3% CTR Average", "SDK Integration", "Location Targeting"]
    },
    {
      title: "Native Advertising",
      description: "Seamless content integration for authentic engagement",
      metrics: ["4x Higher Engagement", "Content Match", "Brand Safe"]
    }
  ];

  const results = [
    { metric: "340%", label: "Average ROI Increase", description: "Compared to traditional platforms" },
    { metric: "2ms", label: "Response Time", description: "Lightning-fast bid processing" },
    { metric: "98.5%", label: "Fill Rate", description: "Maximum inventory utilization" },
    { metric: "24/7", label: "Support", description: "Dedicated account management" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "VP of Marketing",
      company: "TechFlow Media",
      quote: "ADXYZ increased our programmatic ROI by 340% in just 3 months. The targeting precision is unmatched.",
      metric: "+340% ROI"
    },
    {
      name: "Marcus Rodriguez",
      title: "Head of Digital",
      company: "Growth Dynamics",
      quote: "The real-time optimization and fraud protection have transformed our campaign performance.",
      metric: "99.8% Brand Safety"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Programmatic Advertising <span className="text-gradient">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Reach your ideal customers with precision targeting, real-time optimization, 
            and enterprise-grade performance. Our DSP delivers 340% higher ROI than traditional platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Launch Your Campaign
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="xl">
                Schedule Demo
              </Button>
            </a>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {results.map((result, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-gradient">{result.metric}</div>
                <div className="text-sm font-medium text-foreground">{result.label}</div>
                <div className="text-xs text-muted-foreground">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced DSP Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage cutting-edge programmatic technology to reach your audience 
              with precision and maximize your advertising ROI.
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
              All Ad Formats, <span className="text-gradient">One Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access premium inventory across all major ad formats and devices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adFormats.map((format, index) => (
              <div key={index} className="text-center">
                <div className="gradient-card p-6 rounded-2xl mb-4 backdrop-blur-sm border border-primary/20">
                  <h3 className="text-xl font-semibold mb-3">{format.title}</h3>
                  <p className="text-muted-foreground mb-4">{format.description}</p>
                  <div className="space-y-2">
                    {format.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="text-sm font-medium text-primary">
                        ✓ {metric}
                      </div>
                    ))}
                  </div>
                </div>
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
              Advertiser Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              See how leading brands are achieving exceptional results
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Leading Brands Choose <span className="text-gradient">ADXYZ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">99.5% Viewability</h3>
              <p className="text-muted-foreground">Industry-leading viewability rates ensure your ads are seen by real users</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <MousePointer className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-Time Bidding</h3>
              <p className="text-muted-foreground">Millisecond-level bidding optimization for maximum campaign efficiency</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Campaign Transparency</h3>
              <p className="text-muted-foreground">Full visibility into where your ads run with detailed reporting and analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Advertising?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading brands who have increased their ROI by 340% with our 
              advanced programmatic advertising platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="xl" className="group">
                Start Your Campaign Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="xl">
                  Schedule Demo
                </Button>
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              ✓ No minimum spend • ✓ Setup in 15 minutes • ✓ Dedicated support
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertisers;