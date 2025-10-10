import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { ArrowRight, Zap, Calendar, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your Path
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Launch CTV campaigns your way. Self-serve like Meta Ads, or work with our TV advertising experts.
            </p>
          </div>

          {/* Two Paths */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Self-Service Path */}
            <Card className="p-10 bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Self-Service</h2>
                  <p className="text-sm text-white/60">Launch in 5 minutes</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Start for $25/day</p>
                    <p className="text-sm text-white/60">No minimums, cancel anytime</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Launch in minutes</p>
                    <p className="text-sm text-white/60">Like Facebook Ads Manager for TV</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Full control</p>
                    <p className="text-sm text-white/60">Manage budgets, targeting, and creatives yourself</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Real-time dashboard</p>
                    <p className="text-sm text-white/60">Track impressions, clicks, conversions live</p>
                  </div>
                </div>
              </div>

              <a href="https://dsp.ad.nexus/signup" className="block">
                <Button size="lg" className="w-full bg-white text-black hover:bg-gray-100 group">
                  Launch Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <p className="text-xs text-white/40 text-center mt-4">
                Create account → Set budget → Go live
              </p>
            </Card>

            {/* Talk to Sales Path */}
            <Card className="p-10 bg-gradient-to-br from-white/5 to-transparent border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Talk to Sales</h2>
                  <p className="text-sm text-white/60">Custom solution</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Expert guidance</p>
                    <p className="text-sm text-white/60">TV ad specialists help you succeed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Custom strategy</p>
                    <p className="text-sm text-white/60">Tailored campaigns for your goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Hands-on support</p>
                    <p className="text-sm text-white/60">Dedicated account manager</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Enterprise features</p>
                    <p className="text-sm text-white/60">Advanced targeting, custom reporting, API access</p>
                  </div>
                </div>
              </div>

              <Link to="/book-demo/">
                <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black group">
                  Schedule a Demo
                  <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>

              <p className="text-xs text-white/40 text-center mt-4">
                15-min call → Custom plan → White-glove setup
              </p>
            </Card>
          </div>

          {/* Comparison */}
          <div className="text-center text-white/50 text-sm">
            <p>Not sure which path? <Link to="/book-demo/" className="text-white underline hover:text-white/80">Talk to us</Link> and we'll help you decide.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
