import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, DollarSign, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Publishers = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            For Publishers
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Maximize your ad revenue with our Supply-Side Platform (SSP)
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="gradient-card p-8 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">High Fill Rates</h3>
              <p className="text-muted-foreground">
                99%+ fill rates across all ad formats and inventory types
              </p>
            </div>
            <div className="gradient-card p-8 rounded-2xl">
              <DollarSign className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-4">Premium CPMs</h3>
              <p className="text-muted-foreground">
                Access to premium demand sources for maximum revenue
              </p>
            </div>
            <div className="gradient-card p-8 rounded-2xl">
              <Shield className="w-12 h-12 text-success mb-4" />
              <h3 className="text-xl font-semibold mb-4">Brand Safety</h3>
              <p className="text-muted-foreground">
                Advanced filtering to protect your site's reputation
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Start Monetizing Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publishers;