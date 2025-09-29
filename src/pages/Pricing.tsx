import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import {
  Check,
  ArrowRight,
  Star,
  Zap,
  Target,
  BarChart3,
  Globe,
  Users,
  Shield,
  Sparkles,
  CreditCard,
  ChevronRight
} from 'lucide-react';

const PricingPage = () => {
  const [budget, setBudget] = useState([750]); // Start at $750/month ($25/day)

  // Calculate metrics based on budget
  const cpmMin = 15;
  const cpmMax = 35;
  const impressionsMin = Math.floor((budget[0] / cpmMax) * 1000);
  const impressionsMax = Math.floor((budget[0] / cpmMin) * 1000);
  const cpvMin = 0.01;
  const cpvMax = 0.04;
  const householdsMin = Math.floor(impressionsMin * 0.2);
  const householdsMax = Math.floor(impressionsMax * 0.32);
  const webVisitsMin = Math.floor(impressionsMin * 0.0067);
  const webVisitsMax = Math.floor(impressionsMax * 0.0147);
  const appInstallsMin = Math.floor(impressionsMin * 0.0034);
  const appInstallsMax = Math.floor(impressionsMax * 0.0063);
  const salesMin = Math.floor(impressionsMin * 0.00057);
  const salesMax = Math.floor(impressionsMax * 0.00062);
  const footTrafficMin = Math.floor(impressionsMin * 0.0011);
  const footTrafficMax = Math.floor(impressionsMax * 0.0025);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  const formatRange = (min: number, max: number) => {
    return `${formatNumber(min)}-${formatNumber(max)}`;
  };

  const testimonials = [
    {
      quote: "Adnexus has an easy-to-use platform - we initially started with a retargeting campaign and saw a 3% lift in returning web visitors. This was an exciting result to see. Would recommend Adnexus.",
      name: "Erik E.",
      role: "Marketing PM",
      company: "Mid-Market (51-1000 emp.)"
    },
    {
      quote: "Adnexus has completely changed the game for our marketing strategy! I love being able to self-service my campaign, and have full control over channels, targeting and budget. Plus, the campaign analytics are unmatched!",
      name: "Katherine W.",
      role: "Marketing Specialist",
      company: "Mid-Market (51-1000 emp.)"
    },
    {
      quote: "The platform has greatly increased my brand's visibility, which is helping our TOF traffic grow, resulting in larger sales, and an increased LTV. LOVE!!",
      name: "Jackson B.",
      role: "Small-Business Owner",
      company: "Small-Business (50 or fewer emp.)"
    },
    {
      quote: "It's incredibly simple, but very powerful in terms of ways to build your audiences. I can make faster changes than using my previous agency and also save on the agency fees.",
      name: "Bryce Y.",
      role: "VP of Growth",
      company: "Small-Business (50 or fewer emp.)"
    },
    {
      quote: "Love the customer service and attitude. Love the channel selections. Love the Audience Selection tools.",
      name: "Frank P.",
      role: "President",
      company: "Small-Business (50 or fewer emp.)"
    },
    {
      quote: "Adnexus is easy to use, and has all of the information and analytics readily available. Their customer service is top notch, and they can answer questions easily.",
      name: "Sarah R.",
      role: "Digital Marketing Specialist",
      company: "Small-Business (50 or fewer emp.)"
    }
  ];

  const features = {
    targeting: [
      "Interest Targeting",
      "Socio-Demo Targeting",
      "Geo Targeting",
      "Retargeting",
      "Email Targeting"
    ],
    creatives: [
      "Adnexus Studio",
      "Hosting",
      "Compression & Resampling",
      "A/B Testing"
    ],
    reporting: [
      "Delivery Reporting",
      "Performance Measurement",
      "Tracking (Google Analytics, MMPs, Pixel)",
      "Forecasting"
    ],
    content: [
      "Streaming Apps",
      "TV Channels",
      "Live Sports",
      "Live Shows & Movies"
    ],
    optimization: [
      "Automatic Bidding",
      "Manual Bidding",
      "Frequency Capping"
    ],
    support: [
      "24/7 Support",
      "Multi Account",
      "Credit Card & Wire Transfer Payment",
      "Campaign Management (On Demand)"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              TV Advertising Starting at $25/Day
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              The most affordable Streaming and Connected TV Advertising solution.<br />
              Start with as little as $25/day and scale up as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Budget Simulator */}
      <section className="py-20 px-4 -mt-10">
        <div className="container mx-auto max-w-6xl">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Self-Service TV Advertising</CardTitle>
              <CardDescription>
                Start buying ads instantly with our self-service DSP platform. No minimum spend required.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold">${budget[0].toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground ml-2">per month</span>
                  </div>
                  <span className="text-sm text-muted-foreground">≈ ${Math.floor(budget[0] / 30)}/day</span>
                </div>
                <Slider
                  value={budget}
                  onValueChange={setBudget}
                  min={750}
                  max={100000}
                  step={50}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$750/mo ($25/day)</span>
                  <span>$100,000/mo</span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">CPM</p>
                  <p className="text-2xl font-bold text-primary">${cpmMin}-${cpmMax}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Impressions</p>
                  <p className="text-2xl font-bold">{formatRange(impressionsMin, impressionsMax)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Cost per View</p>
                  <p className="text-2xl font-bold">${cpvMin}-${cpvMax}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Households</p>
                  <p className="text-2xl font-bold">{formatRange(householdsMin, householdsMax)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Web Visits</p>
                  <p className="text-2xl font-bold">{formatRange(webVisitsMin, webVisitsMax)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">App Installs</p>
                  <p className="text-2xl font-bold">{formatRange(appInstallsMin, appInstallsMax)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Sales</p>
                  <p className="text-2xl font-bold">{formatRange(salesMin, salesMax)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Foot Traffic</p>
                  <p className="text-2xl font-bold">{formatRange(footTrafficMin, footTrafficMax)}</p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <h3 className="font-semibold mb-2">Start advertising on TV in 5 minutes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Starts at only $25/day • No Commitment • Credit Card or Wire Payment
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://dsp.ad.nexus" target="_blank" rel="noopener noreferrer">
                    <Button size="lg">
                      Start Self-Service Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline">Book a demo</Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What's included</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(features).map(([category, items]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="capitalize">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Option - $9,999 Full Service */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                PREMIUM OFFERING
              </span>
              <h2 className="text-4xl font-bold mb-4">White Glove Full Service</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Boutique media buying experience backed by our full creative agency
              </p>
            </div>

            <Card className="border-2 border-primary shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-2 text-center">
                <span className="text-sm font-semibold">Most Popular for Enterprise</span>
              </div>
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl font-bold">$9,999</span>
                      <span className="text-xl text-muted-foreground">/month</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Complete Advertising Solution</h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      Experience the difference of having a dedicated team of experts managing
                      every aspect of your TV advertising campaigns.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg mt-1">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">Dedicated Creative Team</p>
                          <p className="text-sm text-muted-foreground">
                            Full creative agency services including video production, motion graphics, and campaign concepts
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg mt-1">
                          <Target className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">Boutique Media Buying</p>
                          <p className="text-sm text-muted-foreground">
                            Expert strategists optimize every dollar with precision targeting and real-time adjustments
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg mt-1">
                          <BarChart3 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">Performance Guarantee</p>
                          <p className="text-sm text-muted-foreground">
                            Weekly optimization calls, custom dashboards, and ROI-focused campaign management
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg mt-1">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">White Glove Service</p>
                          <p className="text-sm text-muted-foreground">
                            Direct access to executives, priority support, and custom integrations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-8">
                    <h4 className="font-semibold mb-4">Everything Included:</h4>
                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Unlimited creative revisions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Weekly strategy calls</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Custom audience building</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Cross-channel orchestration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Competitive analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Monthly executive reviews</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">24/7 dedicated support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">API & custom integrations</span>
                      </li>
                    </ul>

                    <Link to="/agency">
                      <Button size="lg" className="w-full">
                        Start Your Premium Experience
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>

                    <p className="text-center text-xs text-muted-foreground mt-4">
                      3-month minimum • Cancel anytime with 30 days notice
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm mb-4 line-clamp-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Get started with Adnexus in minutes.
          </h2>
          <div className="flex items-center justify-center gap-1 text-sm mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span>5.0 on Trustpilot</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/agency">
              <Button size="lg">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                Talk to a TV expert
              </Button>
            </a>
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
                <li><Link to="/industries" className="hover:text-foreground">Ecommerce</Link></li>
                <li><Link to="/industries" className="hover:text-foreground">Apps & Gaming</Link></li>
                <li><Link to="/industries" className="hover:text-foreground">B2B</Link></li>
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
                <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
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

export default PricingPage;