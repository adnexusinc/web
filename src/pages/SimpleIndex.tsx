import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { Toaster } from '@/components/ui/sonner';

const SimpleIndex = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      
      {/* Premium Features Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Built for the modern advertising era
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Web3-native payments, premium inventory, and performance that scales with your ambitions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium CTV Inventory",
                  description: "250M+ monthly Connected TV impressions from tier-1 streaming platforms. Zero junk traffic."
                },
                {
                  title: "Web3 Native Payments", 
                  description: "Seamless crypto payments without the complexity. Traditional rails supported too."
                },
                {
                  title: "Enterprise Performance",
                  description: "2ms response time, 99.99% uptime, and 10X better conversion rates than standard video ads."
                }
              ].map((feature, i) => (
                <div key={i} className="premium-card group hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <div className="text-sm text-muted-foreground">
            © 2025 AdNexus Inc. • The future of programmatic advertising.
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

export default SimpleIndex;