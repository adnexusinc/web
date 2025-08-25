import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, DollarSign, ExternalLink, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnikoinGold = () => {
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
                      Blockchain & Gaming
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Unikoin <span className="text-gradient">Gold</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    Revolutionary blockchain-based esports betting platform that raised 120,000 ETH in 2017, 
                    pioneering the intersection of esports, cryptocurrency, and entertainment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="https://unikrn.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Visit Platform
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
                    src="/lovable-uploads/b6c119ca-2228-4f91-8cde-0c3abf83e9f7.png" 
                    alt="Unikoin Gold"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 gradient-secondary rounded-lg">
                      <div className="text-2xl font-bold performance-number">120K</div>
                      <div className="text-sm text-muted-foreground">ETH Raised (2017)</div>
                    </div>
                    <div className="text-center p-3 gradient-secondary rounded-lg">
                      <div className="text-2xl font-bold performance-number">3.5x</div>
                      <div className="text-sm text-muted-foreground">Engagement Increase</div>
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
                    Unikoin Gold needed to reach three distinct but overlapping audiences: esports enthusiasts, 
                    cryptocurrency investors, and gaming communities. The platform required sophisticated targeting 
                    to navigate complex regulatory requirements while building trust in a new technology ecosystem.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Target multiple niche but passionate communities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Navigate complex regulatory landscape</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Build trust in emerging blockchain technology</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Solution</h2>
                  <p className="text-muted-foreground mb-6">
                    Adnexus created targeted Connected TV campaigns reaching gaming and crypto enthusiasts through 
                    premium streaming platforms, while developing educational content that built trust and 
                    understanding of the innovative blockchain-esports intersection.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Multi-audience targeting across gaming and crypto communities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Educational content strategy building blockchain trust</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Premium CTV placement during esports viewing sessions</span>
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
              <h2 className="text-3xl font-bold text-center mb-12">Groundbreaking Results</h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {[
                  { icon: DollarSign, stat: "120K", label: "ETH Raised", description: "2017 ICO Success" },
                  { icon: TrendingUp, stat: "3.5x", label: "Engagement Improvement", description: "Community interaction" },
                  { icon: Users, stat: "10M+", label: "Transactions Processed", description: "Platform activity" },
                  { icon: Target, stat: "275%", label: "User Growth", description: "Active participants" }
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
                  "The sophisticated targeting capabilities helped us reach the exact gaming and crypto audiences we needed to build a thriving platform. Raising 120,000 ETH was just the beginning of our blockchain esports revolution."
                </blockquote>
                <cite className="text-muted-foreground font-semibold">— Unikoin Gold Development Team</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation & Technology */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Blockchain Innovation</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="gradient-card p-6 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Esports Integration</h3>
                  <p className="text-muted-foreground">
                    First-of-its-kind platform combining blockchain technology with competitive gaming, 
                    creating new opportunities for fan engagement and monetization in esports.
                  </p>
                </div>
                
                <div className="gradient-card p-6 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Cryptocurrency Innovation</h3>
                  <p className="text-muted-foreground">
                    Pioneered the use of blockchain tokens for esports betting and rewards, 
                    establishing early standards for cryptocurrency in the gaming industry.
                  </p>
                </div>
                
                <div className="gradient-card p-6 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Community Building</h3>
                  <p className="text-muted-foreground">
                    Created a thriving ecosystem connecting esports fans, gamers, and crypto enthusiasts 
                    through innovative engagement mechanisms and reward systems.
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
                Ready to Pioneer Your Own Innovation?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                See how Adnexus can help you reach specialized communities and build trust 
                for groundbreaking technology through targeted Connected TV advertising.
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

export default UnikoinGold;