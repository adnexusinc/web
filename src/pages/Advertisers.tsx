import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Advertisers = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <div className="container mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            For Advertisers
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Scale your campaigns with our Demand-Side Platform (DSP)
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="gradient-card p-8 rounded-2xl">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Precise Targeting</h3>
              <p className="text-muted-foreground">
                Advanced audience segmentation and behavioral targeting
              </p>
            </div>
            <div className="gradient-card p-8 rounded-2xl">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
              <p className="text-muted-foreground">
                Comprehensive reporting and optimization insights
              </p>
            </div>
            <div className="gradient-card p-8 rounded-2xl">
              <Zap className="w-12 h-12 text-success mb-4" />
              <h3 className="text-xl font-semibold mb-4">Fast Execution</h3>
              <p className="text-muted-foreground">
                Sub-100ms bid responses for maximum efficiency
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Launch Your Campaign
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisers;