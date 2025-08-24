import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background/50 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 gradient-card rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              What is Adnexus?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Adnexus is a team of{' '}
            <span className="text-gradient">industry-proven experts</span>{' '}
            with 10+ years of track record
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            developing a cutting-edge AdTech ecosystem that connects advertisers and publishers 
            through advanced programmatic platforms and white-label solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* White Label AdExchange */}
            <div className="gradient-card rounded-xl p-6 backdrop-blur-sm border border-primary/20 hover:shadow-primary transition-smooth group">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">White Label AdExchange</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Launch an advertising business and earn money from day one
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* White Label DSP Platform */}
            <div className="gradient-card rounded-xl p-6 backdrop-blur-sm border border-primary/20 hover:shadow-primary transition-smooth group">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">White Label DSP Platform</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Grow your brand's performance with proven advertising software
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* White Label SSP Platform */}
            <div className="gradient-card rounded-xl p-6 backdrop-blur-sm border border-primary/20 hover:shadow-primary transition-smooth group">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">White Label SSP Platform</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you want to make money by placing ads on your websites and applications
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Adnexus Community */}
            <div className="gradient-card rounded-xl p-6 backdrop-blur-sm border border-primary/20 hover:shadow-primary transition-smooth group">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Adnexus Community</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect to the Community and start trading with 250+ partners
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};