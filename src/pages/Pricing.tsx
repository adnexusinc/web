import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { CTVCalculator } from '@/components/CTVCalculator';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation bannerVisible={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-2">
              Affordable TV Advertising. For everyone.
            </p>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              The most affordable Streaming and Connected TV Advertising solution built for brands and businesses of all sizes.
            </p>
          </div>

          {/* CTV Calculator */}
          <div className="mb-24">
            <CTVCalculator />
          </div>

          {/* CTA Sections */}
          <div className="mb-24">
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Get Started CTA */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800')] bg-cover bg-center opacity-40"></div>
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                    Get started with<br />Adnexus<br />in minutes.
                  </h3>
                  <div className="flex gap-4 items-center">
                    <input
                      type="email"
                      placeholder="What's your work email?"
                      className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 w-64"
                    />
                    <a
                      href="/auth"
                      className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>

              {/* Talk to Expert CTA */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800')] bg-cover bg-center opacity-40"></div>
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Need help<br />defining your<br />budget?
                  </h3>
                  <p className="text-white/80 mb-8 text-lg">
                    Talk to our experts for detailed and accurate<br />information.
                  </p>
                  <a
                    href="https://cal.com/adnexus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
                  >
                    Talk to a TV expert
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">What's included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Targeting */}
              <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/20">
                <h3 className="text-xl font-semibold mb-4">Targeting</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Interest Targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Socio-Demo Targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Geo Targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Retargeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Email Targeting</span>
                  </li>
                </ul>
              </Card>

              {/* Creatives */}
              <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/20">
                <h3 className="text-xl font-semibold mb-4">Creatives</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Adnexus Studio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Hosting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Compression & Resampling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">A/B Testing</span>
                  </li>
                </ul>
              </Card>

              {/* Reporting */}
              <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/20">
                <h3 className="text-xl font-semibold mb-4">Reporting</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Delivery Reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Performance Measurement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Tracking (Google Analytics, MMPs, Pixel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Forecasting</span>
                  </li>
                </ul>
              </Card>

              {/* Content */}
              <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/20">
                <h3 className="text-xl font-semibold mb-4">Content</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Streaming Apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">TV Channels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Live Sports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Live Shows & Movies</span>
                  </li>
                </ul>
              </Card>

              {/* Optimization */}
              <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/20">
                <h3 className="text-xl font-semibold mb-4">Optimization</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Automatic Bidding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Manual Bidding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Frequency Capping</span>
                  </li>
                </ul>
              </Card>

              {/* Support */}
              <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/20">
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">24/7 Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Multi Account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Credit Card & Wire Transfer Payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Campaign Management (On Demand)</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* CTV Self-Serve Platform */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-center mb-4">CTV Self-Serve Platform</h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              Launch and manage your own Connected TV advertising campaigns with our self-serve DSP platform.
            </p>

            <div className="max-w-md mx-auto">
              <Card className="p-8 bg-white/5 border-white/10 hover:border-white/30 transition-all">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Self-Serve DSP</h3>
                  <p className="text-white/60">
                    Full platform access with flexible pay-as-you-go pricing
                  </p>
                </div>
                <div className="mb-8">
                  <div className="text-sm text-white/60 mb-1">Starting at</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-bold">$9</span>
                    <span className="text-white/60">minimum</span>
                  </div>
                  <div className="text-xs text-white/50">Pay only for what you use • No monthly fees</div>
                </div>

                <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-xs text-white/60 mb-1">CPM Pricing</div>
                  <div className="text-2xl font-bold text-blue-400">$15-$40</div>
                  <div className="text-xs text-white/50 mt-1">Based on targeting and inventory selection</div>
                </div>

                <div className="mb-8">
                  <div className="text-sm font-semibold text-white/80 mb-4">Platform Features</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">500+ Premium CTV channels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Advanced targeting & audiences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Real-time analytics dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Studio creative tools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">24/7 platform support</span>
                    </li>
                  </ul>
                </div>

                <a href="/auth">
                  <Button className="w-full" size="lg">
                    Start Campaign
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </Card>
            </div>
          </div>

          {/* Enterprise Agency Plan */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-4">Full-Service Agency</h2>
            <p className="text-center text-white/60 mb-2 max-w-2xl mx-auto">
              Full-service creative agency support for premium TV advertising with unlimited video production.
            </p>
            <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto font-semibold">
              💎 White-glove service with dedicated creative team • $9 minimum for CTV ads
            </p>

            <div className="max-w-lg mx-auto">
              {/* Enterprise Agency Plan */}
              <Card className="p-8 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/40 hover:border-white/60 transition-all relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  🎬 Full Creative Agency
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Plus</h3>
                  <p className="text-white/60">
                    Premium TV advertising with full creative production
                  </p>
                </div>
                <div className="mb-8">
                  <div className="text-sm text-white/60 mb-1">Starting at</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-bold">$9,999</span>
                    <span className="text-white/60">/month</span>
                  </div>
                  <div className="text-xs text-white/50">3-month minimum commitment</div>
                  <div className="text-xs text-green-400 font-semibold mt-1">💎 Credits rollover until used</div>
                </div>

                <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-xs text-white/60 mb-1">CTV Advertising Minimum</div>
                  <div className="text-2xl font-bold text-green-400">$9 minimum</div>
                  <div className="text-xs text-white/50 mt-1">Premium inventory access with enterprise rates</div>
                </div>

                <div className="mb-8">
                  <div className="text-sm font-semibold text-white/80 mb-4">Creative Agency Services</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Unlimited Video Production</div>
                        <div className="text-white/60 text-xs">Concept, scripting, filming & editing for TV</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Dedicated Creative Team</div>
                        <div className="text-white/60 text-xs">Art directors, copywriters, video producers</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Campaign Strategy & Planning</div>
                        <div className="text-white/60 text-xs">Media planning, audience research, optimization</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">White-Label Solutions</div>
                        <div className="text-white/60 text-xs">Custom branding & white-label platform access</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="text-sm font-semibold text-white/80 mb-4">Platform Features</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Unlimited staff accounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Custom integrations & API access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Premium CTV inventory access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Priority 24/7 support</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://cal.com/adnexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-full px-6 py-3.5 text-base font-semibold bg-white text-black hover:bg-white/90 transition-colors"
                >
                  Book a Strategy Call
                </a>
                <p className="text-xs text-center text-white/50 mt-3">Speak with our creative team to get started</p>
              </Card>
            </div>

            {/* Benefits note */}
            <div className="text-center mt-8 p-6 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-lg border border-yellow-600/20 max-w-3xl mx-auto">
              <p className="text-lg font-semibold text-white mb-2">
                🎯 Why Choose Enterprise Agency Services?
              </p>
              <p className="text-sm text-white/70 mb-3">
                Skip the hassle of hiring a full creative team. Get <span className="font-bold text-yellow-400">unlimited TV ad production</span> with professional quality at a fraction of the cost. Perfect for brands running continuous CTV campaigns.
              </p>
              <p className="text-xs text-white/60">
                ✨ <span className="font-semibold">Bonus:</span> All unused credits rollover until fully utilized—no waste, maximum value. Plus, $9 minimum for CTV ads gives you unbeatable flexibility.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What is the price to advertise on top channels?</h3>
                <p className="text-white/70">
                  Our cost per thousand impressions (CPM) ranges from $15 to $40, depending on the channel and time of placement.
                  This competitive pricing ensures affordable access to premium audiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Is there a minimum spending requirement?</h3>
                <p className="text-white/70">
                  For our Enterprise Agency tier at $9,999/month, the minimum for CTV ads is just $9. This gives you maximum
                  flexibility to test campaigns and scale as needed while receiving full creative agency support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What's included in the $9,999/month plan?</h3>
                <p className="text-white/70">
                  Everything you need for premium CTV advertising: unlimited video production, dedicated creative team,
                  campaign strategy & planning, white-label solutions, unlimited staff accounts, and 24/7 priority support.
                  Plus, just $9 minimum for CTV ads with credits that rollover until used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the AdTech Revolution</h2>
          <p className="text-white/70 mb-8">
            Get exclusive insights, industry reports, and platform updates delivered to your inbox.
            Join over 100 high-growth startups.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <button className="px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-white/50 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
