import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
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
  Star,
  Phone,
  X,
  Volume2,
  VolumeX,
  Minimize2,
  Maximize2
} from 'lucide-react';

const NewIndex = () => {
  const [email, setEmail] = useState('');
  const [showStatic, setShowStatic] = useState(false);
  const [showPhoneBanner, setShowPhoneBanner] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPiP, setIsPiP] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const videoRef = useRef<HTMLIFrameElement>(null);
  const pipContainerRef = useRef<HTMLDivElement>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // For now, just redirect to DSP with email as param
      window.location.href = `https://dsp.ad.nexus?email=${encodeURIComponent(email)}`;
    }
  };

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
      quote: "Adnexus transformed our advertising strategy. We achieved remarkable ROAS improvements in just 3 months.",
      author: "Michael Keling",
      role: "CMO @ Hanzo AI Inc",
      rating: 5
    },
    {
      quote: "Adnexus made us a cult hit in LA! Their TV advertising platform helped Karma become the must-have fashion brand on the West Coast.",
      author: "Antje Worring",
      role: "Founder @ Karma Fashion",
      rating: 5
    },
    {
      quote: "Finally, TV advertising that delivers performance marketing results. Game changer for our industry.",
      author: "Cyrus Pahlavi",
      role: "CEO @ Lux Industries Inc",
      rating: 5
    }
  ];

  // TV static effect on loop
  useEffect(() => {
    const interval = setInterval(() => {
      setShowStatic(true);
      setTimeout(() => setShowStatic(false), 200);
    }, 30000); // Show static every 30 seconds (video loop)

    return () => clearInterval(interval);
  }, []);

  // Handle scroll for PiP
  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById('video-section');
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        const shouldShowPiP = rect.bottom < 100;
        setIsPiP(shouldShowPiP);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update video source based on mute state
  useEffect(() => {
    const muteParam = isMuted ? '1' : '0';
    setVideoSrc(`https://www.youtube.com/embed/o_McZxpeaEc?autoplay=1&loop=1&playlist=o_McZxpeaEc&mute=${muteParam}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`);
  }, [isMuted]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Phone Number Banner - Dismissible and Fixed */}
      {showPhoneBanner && (
        <div className="fixed top-16 left-0 right-0 bg-primary text-primary-foreground py-2 z-40 shadow-lg">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <a href="tel:1-844-236-3987" className="flex items-center gap-2 hover:opacity-90 transition mx-auto">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Call us: +1 844 AD-NEXUS (844-236-3987)</span>
            </a>
            <button
              onClick={() => setShowPhoneBanner(false)}
              className="p-1 hover:bg-white/20 rounded-full transition"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Video Hero Section - Clean Modern Design */}
      <section id="video-section" className={`relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden ${showPhoneBanner ? 'pt-10' : ''}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Video Container - Clean, Modern Frame */}
        <div className="relative w-full max-w-7xl mx-auto px-8 py-16">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* Static Effect Overlay - Subtle */}
            {showStatic && (
              <div className="absolute inset-0 z-50 pointer-events-none">
                <div className="h-full w-full bg-white/5 animate-pulse" />
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' seed='5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            )}

            {/* YouTube Video */}
            <iframe
              ref={videoRef}
              className="absolute inset-0 w-full h-full"
              src={videoSrc || `https://www.youtube.com/embed/o_McZxpeaEc?autoplay=1&loop=1&playlist=o_McZxpeaEc&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              title="Adnexus Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Subtle Scan Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <div className="h-full w-full" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)',
              }} />
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-black/70 transition"
              >
                {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
                <span className="text-xs text-white/80 font-medium">{isMuted ? 'Unmute' : 'Mute'}</span>
              </button>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs text-white/80 font-medium">LIVE DEMO</span>
            </div>
          </div>

          {/* Clean Caption Below Video */}
          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold text-white mb-2">See Adnexus in Action</h2>
            <p className="text-white/70">Experience the future of TV advertising</p>
          </div>
        </div>

        {/* Elegant Scroll Indicator - Darker */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <ChevronRight className="h-5 w-5 rotate-90 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Picture-in-Picture Video */}
      {isPiP && (
        <div className="fixed bottom-4 right-4 z-50 shadow-2xl" ref={pipContainerRef}>
          <div className="relative w-80 aspect-video bg-black rounded-lg overflow-hidden ring-1 ring-white/10">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={videoSrc || `https://www.youtube.com/embed/o_McZxpeaEc?autoplay=1&loop=1&playlist=o_McZxpeaEc&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              title="Adnexus Demo PiP"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* PiP Controls */}
            <div className="absolute bottom-2 left-2 flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition"
              >
                {isMuted ? <VolumeX className="h-3 w-3 text-white" /> : <Volume2 className="h-3 w-3 text-white" />}
              </button>
              <button
                onClick={() => {
                  setIsPiP(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-1.5 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition"
              >
                <Maximize2 className="h-3 w-3 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

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
              <form onSubmit={handleEmailSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="What's your work email?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" size="lg" className="px-8">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-12">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span>5.0 on Trustpilot</span>
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
            <span>5.0 on Trustpilot</span>
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
                <li><Link to="/agency" className="hover:text-foreground">Pricing</Link></li>
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