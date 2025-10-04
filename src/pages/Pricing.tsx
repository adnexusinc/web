import { useState } from 'react';
import { Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { CTVCalculator } from '@/components/CTVCalculator';
import { Card } from '@/components/ui/card';

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

          {/* Subscription Plans */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-4">Monthly Subscription Plans</h2>
            <p className="text-center text-white/60 mb-2 max-w-2xl mx-auto">
              Flexible monthly plans for every business.
            </p>
            <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto font-semibold">
              💎 Save 10-20% per tier • Up to 30% with Plus • Up to 50% with annual commitment
            </p>

            <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Basic Plan */}
              <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/20 hover:border-white/40 transition-all">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Basic</h3>
                    <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded-full font-semibold">Save 10%</span>
                  </div>
                  <p className="text-sm text-white/60">For solo entrepreneurs</p>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-white/60 mb-1">Starting at</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold">$299</span>
                    <span className="text-white/60">/month</span>
                  </div>
                  <div className="text-xs text-white/50">billed monthly</div>
                </div>
                <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-xs text-white/60 mb-1">CPM rates starting at</div>
                  <div className="text-sm font-semibold">$15 - $25 USD</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm font-semibold text-white/80 mb-3">Platform features</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Dashboard & campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Creatives library</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Basic targeting filters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">General reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Email support</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="/auth"
                  className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-medium border border-white/20 hover:bg-white/10 transition-colors"
                >
                  Try for free
                </a>
                <p className="text-xs text-center text-white/50 mt-3">$25 for your first month</p>
              </Card>

              {/* Grow Plan - Most Popular */}
              <Card className="p-6 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/40 hover:border-white/60 transition-all relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Grow</h3>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full font-semibold">Save 15%</span>
                  </div>
                  <p className="text-sm text-white/60">For small teams</p>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-white/60 mb-1">Starting at</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold">$799</span>
                    <span className="text-white/60">/month</span>
                  </div>
                  <div className="text-xs text-white/50">billed monthly</div>
                </div>
                <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-xs text-white/60 mb-1">CPM rates starting at</div>
                  <div className="text-sm font-semibold">$18 - $28 USD</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm font-semibold text-white/80 mb-3">Platform features</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Everything in Basic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Advanced targeting & audiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Media planning tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">AI optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">5 staff accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">24/7 chat support</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="/auth"
                  className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors"
                >
                  Try for free
                </a>
                <p className="text-xs text-center text-white/50 mt-3">$25 for your first month</p>
              </Card>

              {/* Advanced Plan */}
              <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/20 hover:border-white/40 transition-all">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Advanced</h3>
                    <span className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full font-semibold">Save 20%</span>
                  </div>
                  <p className="text-sm text-white/60">As your business scales</p>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-white/60 mb-1">Starting at</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold">$2,999</span>
                    <span className="text-white/60">/month</span>
                  </div>
                  <div className="text-xs text-white/50">billed monthly</div>
                </div>
                <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-xs text-white/60 mb-1">CPM rates starting at</div>
                  <div className="text-sm font-semibold">$20 - $30 USD</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm font-semibold text-white/80 mb-3">Platform features</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Everything in Grow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Profit dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Discrepancy monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">System monitoring tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">15 staff accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Enhanced 24/7 support</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="/auth"
                  className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-medium border border-white/20 hover:bg-white/10 transition-colors"
                >
                  Try for free
                </a>
                <p className="text-xs text-center text-white/50 mt-3">$399 for your first month</p>
              </Card>

              {/* Plus/Enterprise Plan */}
              <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/20 hover:border-white/40 transition-all relative">
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  50% OFF Annual
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Plus</h3>
                    <span className="text-xs bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded-full font-semibold">Save 30%</span>
                  </div>
                  <p className="text-sm text-white/60">For complex businesses</p>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-white/60 mb-1">Starting at</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold">$9,999</span>
                    <span className="text-white/60">/month</span>
                  </div>
                  <div className="text-xs text-white/50">on a 3-year term</div>
                  <div className="text-xs text-green-400 font-semibold mt-1">💎 Credits rollover until used</div>
                </div>
                <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-xs text-white/60 mb-1">CPM rates</div>
                  <div className="text-sm font-semibold">Competitive rates for high-volume</div>
                  <div className="text-xs text-yellow-400 mt-1">Up to 50% off with annual pricing</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm font-semibold text-white/80 mb-3">Platform features</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Everything in Advanced</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Unlimited staff accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Custom integrations & API</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">White-label options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Dedicated account team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Priority 24/7 phone support</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="https://cal.com/adnexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-medium border border-white/20 hover:bg-white/10 transition-colors"
                >
                  Try Plus
                </a>
                <p className="text-xs text-center text-white/50 mt-3">Learn more</p>
              </Card>
            </div>

            {/* Annual savings note */}
            <div className="text-center mt-8 p-6 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-lg border border-yellow-600/20">
              <p className="text-lg font-semibold text-white mb-2">
                🎯 Maximum Savings with Annual Commitment
              </p>
              <p className="text-sm text-white/70 mb-3">
                Lock in your rate and save up to <span className="font-bold text-yellow-400">50% annually</span> on enterprise plans.
                Contact sales for custom bundle pricing and volume discounts.
              </p>
              <p className="text-xs text-white/60">
                ✨ <span className="font-semibold">Bonus:</span> All unused credits rollover until fully utilized—no waste, maximum value.
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
                  Pricing varies by channel and inventory quality. Our platform provides access to premium CTV inventory
                  with CPMs typically ranging from $15-$35. The calculator above shows estimated costs based on your budget.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Is there a minimum spending requirement?</h3>
                <p className="text-white/70">
                  You can start with as little as $25 for your first month on any plan. Monthly subscriptions range from $299/month (Basic)
                  to $9,999/month (Plus). We also offer pay-as-you-go options with no monthly commitment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I switch between plans?</h3>
                <p className="text-white/70">
                  Yes! You can upgrade or downgrade between plans at any time. Annual commitments offer up to 50% savings.
                  Contact our sales team to discuss custom enterprise solutions and bundle pricing.
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
            Join 5,000+ AdTech professionals already subscribed.
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
