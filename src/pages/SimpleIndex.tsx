import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { Toaster } from '@/components/ui/sonner';

const SimpleIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Simple About Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Built for serious advertisers
            </h2>
            <div className="grid md:grid-cols-3 gap-12 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Premium Inventory</h3>
                <p className="text-muted-foreground">
                  Connected TV impressions from tier-1 streaming platforms. No junk traffic.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  2ms response time ensures you never miss premium inventory opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                <p className="text-muted-foreground">
                  10X better conversion rates compared to standard video advertising.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="text-sm text-muted-foreground">
            Copyright 2025 ADXYZ Inc.
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

export default SimpleIndex;