import React from 'react';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Network, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            For AdNetworks & RTB Partners
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Connect to our ecosystem and expand your reach
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="gradient-card p-8 rounded-2xl">
              <Network className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
              <p className="text-muted-foreground">
                Easy API integration with comprehensive documentation
              </p>
            </div>
            <div className="gradient-card p-8 rounded-2xl">
              <Globe className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
              <p className="text-muted-foreground">
                Access to worldwide inventory and demand sources
              </p>
            </div>
            <div className="gradient-card p-8 rounded-2xl">
              <Users className="w-12 h-12 text-success mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-muted-foreground">
                Join 250+ partners in our thriving ecosystem
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;