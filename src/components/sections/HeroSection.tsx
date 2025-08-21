import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <div className="text-2xl font-bold">
          AD<span className="text-gradient">XYZ</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 gradient-card rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-primary/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 230+ clients worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We add value connecting{' '}
            <span className="text-gradient">advertisers</span>{' '}
            and{' '}
            <span className="text-gradient">publishers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            through our white-label programmatic platforms!
          </p>

          {/* Platform Types */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-lg font-semibold">
            <span className="gradient-card px-6 py-3 rounded-lg backdrop-blur-sm border border-primary/20">
              Ad Exchange
            </span>
            <span className="gradient-card px-6 py-3 rounded-lg backdrop-blur-sm border border-primary/20">
              Demand-Side Platform
            </span>
            <span className="gradient-card px-6 py-3 rounded-lg backdrop-blur-sm border border-primary/20">
              Supply-Side Platform
            </span>
          </div>

          {/* CTA Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Looking for ways to make money with programmatic advertising?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out the contact form, and a personal manager will contact you promptly
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Connect to ADXYZ Ecosystem
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/about">
                <Button variant="outline" size="lg" className="group">
                  <Play size={20} className="group-hover:scale-110 transition-transform" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="gradient-card rounded-2xl p-8 backdrop-blur-sm border border-primary/20 max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              Together we will select a solutions package to meet your goals and sign a contract.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="font-semibold text-success">
                Connect to ADXYZ Ecosystem and earn more every day!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};