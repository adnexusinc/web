import React from 'react';
import { EmailCapture } from './EmailCapture';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <div className="text-3xl font-bold tracking-tight">
              ADXYZ
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            The Stripe of AdTech
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            250M+ monthly CTV impressions. 10X better conversion than video ads. 2ms response time.
          </p>

          {/* Email Capture */}
          <div className="mb-16">
            <EmailCapture />
            <p className="text-sm text-muted-foreground mt-4">
              No free trial • Premium inventory only
            </p>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">250M+</div>
              <div className="text-sm text-muted-foreground">Monthly impressions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10X</div>
              <div className="text-sm text-muted-foreground">Better conversion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2ms</div>
              <div className="text-sm text-muted-foreground">Response time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};