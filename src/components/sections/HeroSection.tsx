import React, { useState } from 'react';
import { Navigation } from '../Navigation';
import { PremiumSignUpForm } from '../PremiumSignUpForm';
import { AnimatedWaves } from '../AnimatedWaves';
import { Button } from '@/components/ui/button';
import { Play, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col">
      <Navigation />

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
              {/* Hero Content */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-border/50">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">
                    Live: $50M+ premium inventory available now
                  </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                  Access premium content{' '}
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    faster than anyone else
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                  Lightning-fast access to tier-1 CTV inventory from Netflix, Disney+, and HBO Max. 
                  <span className="text-white font-semibold">Direct connections</span> mean you reach premium audiences 
                  with <span className="text-white font-semibold">guaranteed $50+ CPMs</span> and zero lag time.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                  <Button 
                    onClick={() => navigate('/auth')}
                    className="premium-button text-lg px-8 py-4 group"
                  >
                    Access Premium Inventory
                    <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/premium')}
                    className="text-lg px-8 py-4 group border-border/50 hover:border-border"
                  >
                    <Play size={20} className="group-hover:scale-110 transition-transform" />
                    View Exclusive Inventory
                  </Button>
                </div>
              </div>

              {/* Premium Performance Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[
                  { value: "Exclusive", label: "Inventory access", sublabel: "Not on open exchanges" },
                  { value: "427%", label: "Average ROAS", sublabel: "Fortune 500 client" },
                  { value: "$50-85", label: "CPM range", sublabel: "Premium streaming only" },
                  { value: "Zero", label: "Junk traffic", sublabel: "Hand-curated inventory" }
                ].map((stat, i) => (
                  <div key={i} className="premium-card text-center">
                    <div className="text-3xl font-bold mb-2 performance-number">{stat.value}</div>
                    <div className="text-sm font-medium mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
        </div>
      </div>

      {/* Animated Waves Background - Hidden */}
      {/* <AnimatedWaves /> */}
    </section>
  );
};