import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, DollarSign, Play, ExternalLink, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const DamonMotorcycles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Automotive Innovation
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Damon <span className="text-gradient">Motorcycles</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    Revolutionary electric motorcycle launch achieving 500x ROI and $100M+ in pre-orders 
                    through AI-powered CTV advertising campaigns.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="https://damon.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Visit Damon Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/auth">Start Similar Campaign</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="gradient-card p-8 rounded-2xl border border-primary/20">
                  <img 
                    src="/lovable-uploads/ebba7dda-009e-4d3c-b5d4-06707a9a84ad.png" 
                    alt="Damon Motorcycles"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 gradient-secondary rounded-lg">
                      <div className="text-2xl font-bold performance-number">500x</div>
                      <div className="text-sm text-muted-foreground">ROI Achievement</div>
                    </div>
                    <div className="text-center p-3 gradient-secondary rounded-lg">
                      <div className="text-2xl font-bold performance-number">$100M+</div>
                      <div className="text-sm text-muted-foreground">Pre-Orders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                  <p className="text-muted-foreground mb-6">
                    Damon Motorcycles needed to launch their revolutionary electric motorcycle to a highly specific audience 
                    of motorcycle enthusiasts and early tech adopters. Traditional advertising channels weren't providing 
                    the precision targeting and performance metrics needed for such an innovative product launch.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Highly niche target audience requiring precision targeting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Need to educate market about new technology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Required measurable ROI for innovative product launch</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Solution</h2>
                  <p className="text-muted-foreground mb-6">
                    Adnexus deployed AI-enhanced Connected TV campaigns with sophisticated audience segmentation, 
                    targeting motorcycle enthusiasts, tech early adopters, and affluent males aged 25-54 across 
                    premium streaming platforms.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">AI-powered audience segmentation and targeting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Premium CTV inventory across major streaming platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Real-time campaign optimization and performance tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Exceptional Results</h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {[
                  { icon: TrendingUp, stat: "500x", label: "ROI Achievement", description: "Launch campaign performance" },
                  { icon: DollarSign, stat: "$100M+", label: "Pre-Orders Generated", description: "Direct campaign attribution" },
                  { icon: Users, stat: "92%", label: "Conversion Rate Increase", description: "Vs. previous campaigns" },
                  { icon: Award, stat: "75%", label: "Time to Market Reduction", description: "AI-powered efficiency" }
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="gradient-secondary p-4 rounded-xl w-fit mx-auto mb-4">
                      <metric.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold performance-number mb-2">{metric.stat}</div>
                    <div className="font-semibold mb-1">{metric.label}</div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </div>
                ))}
              </div>

              <div className="gradient-card p-8 rounded-2xl border border-primary/20 text-center">
                <blockquote className="text-xl md:text-2xl mb-6">
                  "The AI-powered targeting delivered results beyond our expectations. We've never seen conversion rates like this in automotive advertising. Adnexus helped us reach the exact audience that converted into $100M+ in pre-orders."
                </blockquote>
                <cite className="text-muted-foreground font-semibold">— Damon Motorcycles Marketing Team</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Innovation */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Technology & Innovation</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="gradient-card p-6 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">AI-Powered Targeting</h3>
                  <p className="text-muted-foreground">
                    Advanced machine learning algorithms analyzed 50+ behavioral and demographic signals 
                    to identify high-intent motorcycle enthusiasts and tech early adopters.
                  </p>
                </div>
                
                <div className="gradient-card p-6 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Premium CTV Placement</h3>
                  <p className="text-muted-foreground">
                    Strategic placement across premium streaming platforms ensured maximum visibility 
                    among affluent audiences during high-engagement viewing sessions.
                  </p>
                </div>
                
                <div className="gradient-card p-6 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Real-Time Optimization</h3>
                  <p className="text-muted-foreground">
                    Continuous campaign optimization using real-time performance data resulted in 
                    incrementally improving conversion rates throughout the campaign lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                See how Adnexus can help your innovative product achieve breakthrough performance 
                with AI-powered Connected TV advertising.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/auth" className="flex items-center gap-2">
                    Start Your Campaign
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/our-work">View More Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DamonMotorcycles;