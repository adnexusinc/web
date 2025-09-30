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
  Film,
  Scissors,
  Layers,
  Sparkle,
  Users,
  Shuffle
} from 'lucide-react';

const Studio = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: Scissors,
      title: 'Professional Editing',
      description: 'Trim, split, and arrange video, audio, images, and text with precision timeline controls'
    },
    {
      icon: Sparkle,
      title: '7 Animations',
      description: 'Bring your content to life with smooth, professional animations for any element'
    },
    {
      icon: Layers,
      title: '30+ Filters',
      description: 'Mix and match from 30+ GPU-accelerated filters for stunning visual effects'
    },
    {
      icon: Shuffle,
      title: '60+ Transitions',
      description: 'Community-driven GLSL transitions powered by GL Transitions for seamless scene changes'
    },
    {
      icon: Users,
      title: 'Real-Time Collaboration',
      description: 'Edit together with your team - see changes instantly across all devices'
    },
    {
      icon: Zap,
      title: 'Export up to 4K',
      description: 'Blazing-fast exports with WebCodecs API - choose your bitrate and aspect ratio'
    },
    {
      icon: Type,
      title: 'Local Font Support',
      description: 'Auto-load fonts from your device for seamless typography'
    },
    {
      icon: Palette,
      title: 'Resizable Panels',
      description: 'Customize your workspace exactly how you want it with adjustable panels'
    }
  ];

  const comingSoon = [
    {
      title: 'QR Code Integration',
      description: 'Dynamic QR codes that track scans and conversions directly in your ads'
    },
    {
      title: 'Call Tracking (Twilio)',
      description: '800 numbers, SMS, and phone call tracking for direct response campaigns'
    },
    {
      title: 'Attribution Analytics',
      description: 'Built-in analytics to measure ad performance and ROI across CTV/OTT platforms'
    },
    {
      title: 'Dynamic Product Feeds',
      description: 'Auto-generate ads from product catalogs with real-time pricing and inventory'
    },
    {
      title: 'Brand Safety Controls',
      description: 'Automated compliance checks and approval workflows for regulated industries'
    },
    {
      title: 'A/B Testing Studio',
      description: 'Create and test multiple ad variations to optimize performance'
    }
  ];

  const steps = [
    {
      icon: Upload,
      title: 'Upload Your Assets',
      description: 'Drag and drop video clips, images, audio, and brand assets directly into the browser-based editor'
    },
    {
      icon: Scissors,
      title: 'Edit on Timeline',
      description: 'Trim, split, and arrange content on the multi-track timeline. Add text, apply filters, and insert transitions'
    },
    {
      icon: Users,
      title: 'Collaborate in Real-Time',
      description: 'Invite team members to edit together. See changes instantly with WebRTC-powered collaboration'
    },
    {
      icon: Zap,
      title: 'Export & Deploy',
      description: 'Export in 4K with custom bitrate. Deploy to CTV/OTT platforms through Adnexus DSP integration'
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect directly to Studio app
    window.location.href = 'https://studio.ad.nexus';
  };

  const handleStartCreating = () => {
    window.location.href = 'https://studio.ad.nexus';
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
              Powerful Video Editor<br />
              <span className="text-primary">Right in Your Browser</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Professional CTV ad creation with real-time collaboration, 60+ transitions, 30+ filters, and 4K export.
              Open-source, privacy-focused, runs everywhere. All your data stays on your device.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={handleStartCreating} size="lg" className="rounded-full">
                Start Creating Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>100% Free & Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Privacy-Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Export up to 4K</span>
              </div>
            </div>
          </div>

          {/* Video Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-[30px] overflow-hidden border-2 border-primary/20 shadow-2xl">
              {/* Underlit glow */}
              <div className="absolute -inset-8 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-3xl opacity-40" />

              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="p-6 bg-black/60 backdrop-blur-md rounded-full mb-4 inline-block">
                    <Play className="h-16 w-16 text-white" />
                  </div>
                  <p className="text-white/90 font-medium text-lg">Watch Studio Demo</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
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
              Create CTV Ads in 4 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional browser-based video editing workflow
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

      {/* Coming Soon - CTV Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              CTV/OTT Advertising Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Advanced tools built specifically for direct response TV advertising
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoon.map((feature, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

          <div className="mb-8">
            <Button onClick={handleStartCreating} size="lg" variant="secondary">
              Launch Studio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm opacity-75">
            100% Free & Open Source • Export up to 4K • Real-Time Collaboration
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