import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, DollarSign, Play, ExternalLink, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrillerFest = () => {
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
                      Entertainment & Music
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Triller<span className="text-gradient">Fest</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    The largest virtual music festival in history, growing from 169M+ monthly active users 
                    to doubling the user base to 85M engaged monthly viewers through innovative CTV advertising.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="https://triller.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Visit Triller
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
                    src="/lovable-uploads/b81bd43c-c312-4c2d-b235-002b7bf718d1.png" 
                    alt="TrillerFest"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 gradient-secondary rounded-lg">
                      <div className="text-2xl font-bold performance-number">169M+</div>
                      <div className="text-sm text-muted-foreground">Monthly Active Users</div>
                    </div>
                    <div className="text-center p-3 gradient-secondary rounded-lg">
                      <div className="text-2xl font-bold performance-number">85M</div>
                      <div className="text-sm text-muted-foreground">Doubled User Base</div>
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
                    TrillerFest needed to create the largest virtual music festival in history while maintaining 
                    engagement across a massive global audience. The challenge was scaling from an already large 
                    169M+ monthly active user base to create the most engaging virtual event experience ever produced.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Scale virtual event to unprecedented global audience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Maintain high engagement across diverse demographics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Create innovative virtual experience technology</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Solution</h2>
                  <p className="text-muted-foreground mb-6">
                    Adnexus developed a comprehensive Connected TV strategy targeting music enthusiasts, 
                    Gen Z and Millennial audiences across premium streaming platforms, while creating 
                    interactive ad experiences that drove massive engagement and user acquisition.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Multi-platform CTV campaign across premium inventory</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">Interactive ad experiences with real-time engagement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">AI-powered audience targeting and optimization</span>
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
              <h2 className="text-3xl font-bold text-center mb-12">Historic Results</h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {[
                  { icon: Users, stat: "169M+", label: "Monthly Active Users", description: "Platform growth foundation" },
                  { icon: TrendingUp, stat: "85M", label: "Doubled Engagement", description: "Monthly active viewers" },
                  { icon: Award, stat: "#1", label: "Largest Virtual Festival", description: "In entertainment history" },
                  { icon: DollarSign, stat: "500x", label: "ROI Achievement", description: "Campaign performance" }
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
                  "TrillerFest revolutionized virtual events, reaching audiences we never thought possible. The Connected TV advertising strategy delivered unprecedented engagement metrics and helped us create the largest virtual music festival in history."
                </blockquote>
                <cite className="text-muted-foreground font-semibold">— TrillerFest Production Team</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation & Technology */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Innovation & Technology</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="gradient-card p-6 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Virtual Event Technology</h3>
                  <p className="text-muted-foreground">
                    Cutting-edge streaming technology enabled real-time interaction with artists, 
                    multiple stage views, and social features that kept 85M users engaged throughout the event.
                  </p>
                </div>
                
                <div className="gradient-card p-6 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Global CTV Strategy</h3>
                  <p className="text-muted-foreground">
                    Strategic Connected TV placement across multiple regions and demographics, 
                    targeting music enthusiasts during peak engagement hours on premium platforms.
                  </p>
                </div>
                
                <div className="gradient-card p-6 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Interactive Advertising</h3>
                  <p className="text-muted-foreground">
                    Revolutionary interactive ad formats allowed viewers to engage directly with content, 
                    creating a seamless transition from advertisement to event participation.
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
                Ready to Create Your Own Historic Campaign?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                See how Adnexus can help you reach massive global audiences and create 
                breakthrough engagement through innovative Connected TV advertising.
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

export default TrillerFest;