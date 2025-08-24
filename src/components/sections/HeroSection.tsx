import React, { useState } from 'react';
import { AnimatedLogo } from '../AnimatedLogo';
import { PremiumSignUpForm } from '../PremiumSignUpForm';
import { Button } from '@/components/ui/button';
import { Play, ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <section className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-6">
        <AnimatedLogo />
      </header>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          {!showSignUp ? (
            <>
              {/* Hero Content */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-border/50">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">
                    Live: 250M+ monthly impressions available
                  </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                  Access premium inventory{' '}
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    before everyone else
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join 100+ enterprise advertisers accessing 250M+ monthly premium CTV impressions. 
                  Fastest settlement, highest fill rates, and inventory that actually converts at scale.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                  <Button 
                    onClick={() => setShowSignUp(true)}
                    className="premium-button text-lg px-8 py-4 group"
                  >
                    Get Started
                    <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </Button>
                  
                  <Button variant="outline" className="text-lg px-8 py-4 group border-border/50 hover:border-border">
                    <Play size={20} className="group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { value: "250M+", label: "Monthly impressions available" },
                  { value: "99.8%", label: "Fill rate guarantee" },
                  { value: "2ms", label: "Response time" },
                  { value: "Same-day", label: "Settlement" }
                ].map((stat, i) => (
                  <div key={i} className="premium-card text-center">
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Sign Up Form */
            <div className="animate-fade-in">
              <PremiumSignUpForm />
              <Button 
                variant="ghost" 
                onClick={() => setShowSignUp(false)}
                className="mt-6"
              >
                ← Back to overview
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </section>
  );
};