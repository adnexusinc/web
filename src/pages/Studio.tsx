import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Play,
  Wand2,
  Zap,
  Target,
  Video,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Upload,
  Palette,
  Type,
  Image as ImageIcon,
  Music,
  Film
} from 'lucide-react';

const Studio = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: Video,
      title: '100+ Premium Templates',
      description: 'Professionally designed CTV ad templates optimized for every industry'
    },
    {
      icon: Wand2,
      title: 'AI-Powered Creation',
      description: 'Smart tools that automatically optimize your ads for performance'
    },
    {
      icon: Palette,
      title: 'Brand Customization',
      description: 'Easily add your logos, colors, fonts, and messaging'
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Launch to 500+ channels in minutes with our DSP integration'
    }
  ];

  const templates = [
    { name: 'E-commerce Hero', category: 'Product Launch', duration: '30s' },
    { name: 'App Install', category: 'Mobile Apps', duration: '15s' },
    { name: 'Brand Awareness', category: 'Lifestyle', duration: '30s' },
    { name: 'Limited Offer', category: 'Promotions', duration: '15s' },
    { name: 'Testimonial', category: 'Social Proof', duration: '30s' },
    { name: 'Event Promo', category: 'Entertainment', duration: '30s' }
  ];

  const steps = [
    {
      icon: Film,
      title: 'Choose Your Template',
      description: 'Browse 100+ professionally designed templates across all industries and select the perfect starting point for your campaign.'
    },
    {
      icon: Type,
      title: 'Customize Content',
      description: 'Add your brand assets, messaging, and call-to-action. Our AI ensures your content looks professional and performs well.'
    },
    {
      icon: ImageIcon,
      title: 'Preview & Refine',
      description: 'See your ad in real-time across different screen sizes and formats. Make adjustments until it\'s perfect.'
    },
    {
      icon: Zap,
      title: 'Launch Campaign',
      description: 'Deploy instantly to 500+ premium TV channels through our DSP. Start generating results in minutes, not weeks.'
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `https://dsp.ad.nexus?email=${encodeURIComponent(email)}&source=studio`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4" style={{
        background: 'radial-gradient(ellipse at center top, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 50%)'
      }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            {/* Adnexus Studio Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <img
                src="/lovable-uploads/ebba7dda-009e-4d3c-b5d4-06707a9a84ad.png"
                alt="Adnexus"
                className="h-10 filter invert brightness-0"
              />
              <span className="text-3xl font-light text-white/40">|</span>
              <span className="text-3xl font-light tracking-tight">Studio</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">No Production Costs • No Agency Fees</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Create Premium TV Ads<br />
              <span className="text-primary">in Minutes</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Adnexus Studio makes professional CTV advertising accessible to everyone.
              No expensive production crews or agencies required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <form onSubmit={handleEmailSubmit} className="flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-full"
                  required
                />
                <Button type="submit" size="lg" className="rounded-full">
                  Start Creating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Free templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Instant deployment</span>
              </div>
            </div>
          </div>

          {/* Video Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
              {/* Underlit glow */}
              <div className="absolute -inset-8 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-3xl opacity-40" />

              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-20 w-20 text-white mx-auto mb-4 opacity-80" />
                  <p className="text-white/80 font-medium">Watch Studio Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to Create Winning TV Ads
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional tools powered by AI, designed for performance marketers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              From Idea to Campaign in 4 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional TV advertising made simple
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Gallery */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              100+ Professional Templates
            </h2>
            <p className="text-xl text-muted-foreground">
              Designed for every industry and optimized for performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {templates.map((template, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{template.name}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{template.category}</span>
                    <span>{template.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              View All Templates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Create Your First TV Ad?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of brands creating professional CTV ads with Adnexus Studio
          </p>

          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white text-black"
                required
              />
              <Button size="lg" variant="secondary">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>

          <p className="text-sm opacity-75">
            No credit card required • 100+ free templates • Deploy to 500+ channels
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/platform/overview" className="hover:text-white transition-colors">Platform</Link></li>
                <li><Link to="/dsp" className="hover:text-white transition-colors">DSP</Link></li>
                <li><Link to="/ssp" className="hover:text-white transition-colors">SSP</Link></li>
                <li><Link to="/agency" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Blog</Link></li>
                <li><a href="https://cal.com/adnexus" className="hover:text-white transition-colors">Book Demo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/company" className="hover:text-white transition-colors">Newsroom</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-white/40">
            <p>© 2025 Adnexus Technology, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Studio;