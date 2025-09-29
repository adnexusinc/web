import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Tv,
  Smartphone,
  Monitor,
  ArrowRight,
  Check,
  Play,
  ChevronRight,
  Star
} from 'lucide-react';

const NewIndex = () => {
  const [email, setEmail] = useState('');

  const channels = [
    'CNN', 'Fox News', 'ESPN', 'Hulu', 'Roku', 'Samsung TV+', 'Pluto TV',
    'Paramount+', 'Peacock', 'Tubi', 'CBS Sports', 'NFL Network', 'NBA TV',
    'MLB Network', 'Discovery+', 'AMC+', 'Comedy Central', 'Bloomberg TV'
  ];

  const features = [
    {
      icon: Tv,
      title: '500+ Channels',
      description: 'Target viewers across premium streaming and broadcast channels'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Reach your exact audience with AI-powered demographic targeting'
    },
    {
      icon: Zap,
      title: 'AI Optimization',
      description: 'Machine learning continuously improves campaign performance'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track ROAS, conversions, and engagement across every screen'
    }
  ];

  const goals = [
    {
      title: 'Build Awareness',
      description: 'Stay top of mind',
      icon: Globe
    },
    {
      title: 'Drive Traffic',
      description: 'Attract convertible visitors',
      icon: TrendingUp
    },
    {
      title: 'Generate Leads',
      description: 'Turn viewers into buyers',
      icon: Users
    },
    {
      title: 'Increase Sales',
      description: 'Generate measurable revenue',
      icon: BarChart3
    }
  ];

  const testimonials = [
    {
      quote: "Adnexus transformed our advertising strategy. We achieved 728% ROAS in just 3 months.",
      author: "Sarah Chen",
      role: "CMO @ TechStart",
      rating: 5
    },
    {
      quote: "The easiest-to-use platform we've found. Cut our CPM by 80% while doubling conversions.",
      author: "Michael Roberts",
      role: "Marketing Director @ RetailPlus",
      rating: 5
    },
    {
      quote: "Finally, TV advertising that delivers performance marketing results. Game changer.",
      author: "Jessica Liu",
      role: "Growth Lead @ Fashion Brand",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/ebba7dda-009e-4d3c-b5d4-06707a9a84ad.png"
              alt="Adnexus"
              className="h-8 filter invert brightness-0"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/platform/overview" className="text-sm hover:text-primary transition">Product</Link>
            <Link to="/advertisers" className="text-sm hover:text-primary transition">Industries</Link>
            <Link to="/agency/retainer" className="text-sm hover:text-primary transition">Pricing</Link>
            <Link to="/case-studies" className="text-sm hover:text-primary transition">Testimonials</Link>
            <Link to="/resources" className="text-sm hover:text-primary transition">Resources</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">Book a Demo</Button>
            </a>
            <Button size="sm">Log in</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Grow your brand<br />
              <span className="text-primary">with TV Ads</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Generate business outcomes with the easiest-to-use Streaming TV Ad Platform.
              Built for brands of all sizes.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="What's your work email?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button size="lg" className="px-8">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-12">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span>Rated 4.8 out of 5 on G2</span>
            </div>

            {/* Channel logos ticker */}
            <div className="relative overflow-hidden py-8">
              <div className="flex animate-scroll gap-8">
                {[...channels, ...channels].map((channel, idx) => (
                  <div key={idx} className="flex-shrink-0 px-4 py-2 bg-muted rounded-lg">
                    <span className="text-sm font-medium">{channel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold">
              10,000+ performance marketers have generated millions in revenue with Adnexus
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Achieve your business goals with TV Ads
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <goal.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Made for marketers. Built for outcomes.
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to run successful TV advertising campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <Link to="/platform/overview" className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            For startups, large companies, and everyone in between
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button size="lg" variant="outline">
                View All Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Get started with Adnexus in minutes.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of brands already seeing results
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="What's your work email?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white text-black"
              />
              <Button size="lg" variant="secondary" className="px-8">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 text-sm mt-6 opacity-90">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-white" />
              ))}
            </div>
            <span>Rated 4.8 out of 5 on G2</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/advertisers" className="hover:text-foreground">Ecommerce</Link></li>
                <li><Link to="/advertisers" className="hover:text-foreground">Apps & Gaming</Link></li>
                <li><Link to="/advertisers" className="hover:text-foreground">B2B</Link></li>
                <li><Link to="/agencies" className="hover:text-foreground">Media & Agencies</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/platform/overview" className="hover:text-foreground">Apps & Channels</Link></li>
                <li><Link to="/platform/plan" className="hover:text-foreground">Audience Targeting</Link></li>
                <li><Link to="/platform/activate" className="hover:text-foreground">AI Optimization</Link></li>
                <li><Link to="/platform/measure" className="hover:text-foreground">Measurement</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/agency/retainer" className="hover:text-foreground">Pricing</Link></li>
                <li><Link to="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
                <li><Link to="/resources" className="hover:text-foreground">Blog</Link></li>
                <li><a href="https://cal.com/adnexus" className="hover:text-foreground">Book Demo</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link to="/company" className="hover:text-foreground">Newsroom</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Adnexus Technology, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewIndex;