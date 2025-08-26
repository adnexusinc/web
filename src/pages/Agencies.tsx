import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Users, Target, BarChart3, Zap, Globe, Shield, TrendingUp, Clock, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Agencies = () => {
  const features = [
    {
      icon: Users,
      title: "Multi-Client Management",
      description: "Manage multiple advertiser accounts from a single dashboard with advanced reporting and billing features"
    },
    {
      icon: Target,
      title: "Advanced Targeting",
      description: "Leverage our proprietary audience data and real-time bidding technology for precise campaign targeting"
    },
    {
      icon: BarChart3,
      title: "White-Label Reporting",
      description: "Customizable dashboards and reports with your agency branding for client presentations"
    },
    {
      icon: Zap,
      title: "Campaign Automation",
      description: "AI-powered optimization tools that automatically adjust bids and targeting for maximum performance"
    },
    {
      icon: Globe,
      title: "Cross-Channel Reach",
      description: "Access premium inventory across display, video, CTV, mobile, and native ad formats"
    },
    {
      icon: Shield,
      title: "Brand Safety",
      description: "Enterprise-grade fraud protection and brand safety tools to protect your clients' investments"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "340% Average ROI Increase",
      description: "Our agency partners see significant performance improvements within the first quarter"
    },
    {
      icon: Clock,
      title: "15-Minute Setup",
      description: "Get your agency account live and start running campaigns in under 15 minutes"
    },
    {
      icon: CheckCircle,
      title: "24/7 Dedicated Support",
      description: "Your dedicated account manager provides around-the-clock support for all your campaigns"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Director of Digital Strategy",
      company: "MediaFlow Agency",
      quote: "Adnexus has transformed how we deliver results for our clients. The platform's automation features alone have saved us 20+ hours per week.",
      metric: "+450% Client ROI"
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder & CEO",
      company: "Performance Marketing Co",
      quote: "The white-label reporting and multi-client management tools are exactly what our agency needed to scale efficiently.",
      metric: "15+ Active Clients"
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
            Scale Your Agency with <span className="text-gradient">Adnexus</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The complete programmatic advertising platform built for agencies. Manage multiple clients, 
            automate campaigns, and deliver exceptional results with our advanced DSP technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Start Agency Program
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
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">500+</div>
              <div className="text-sm text-muted-foreground">Agency Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">Millions</div>
              <div className="text-sm text-muted-foreground">Ad Spend Managed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">340%</div>
              <div className="text-sm text-muted-foreground">Avg ROI Increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient">24/7</div>
              <div className="text-sm text-muted-foreground">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything Your Agency Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From client management to campaign optimization, our platform provides all the tools 
              you need to scale your agency operations efficiently.
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Agencies Choose <span className="text-gradient">Adnexus</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join 500+ agencies already delivering exceptional results for their clients
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
              Agency Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              See how agencies are scaling with Adnexus
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
              Ready to Scale Your Agency?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ agencies already delivering exceptional results for their clients. 
              Get started today with enterprise platform access.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="xl" className="group">
                Start Agency Program
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="xl">
                  Schedule Demo
                </Button>
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              ✓ Enterprise access • ✓ Premium features • ✓ Dedicated account manager
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agencies;