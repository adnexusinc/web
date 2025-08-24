import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import nexusLogo from '@/assets/nexus-logo.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-primary">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img 
              src={nexusLogo} 
              alt="ADXYZ Nexus" 
              className="w-10 h-6 object-contain transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">AD</span><span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold">XYZ</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 gradient-card rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-primary/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 100+ clients worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium CTV ad inventory{' '}
            <span className="text-gradient">converts 10X over</span>{' '}
            normal video ads
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Access 250M+ monthly Connected TV impressions with 2ms response time. No free trial - serious advertisers only.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-medium">
            <span className="gradient-card px-4 py-2 rounded-full backdrop-blur-sm border border-primary/20">
              📺 250M+ CTV impressions/month
            </span>
            <span className="gradient-card px-4 py-2 rounded-full backdrop-blur-sm border border-primary/20">
              ⚡ 2ms response time
            </span>
            <span className="gradient-card px-4 py-2 rounded-full backdrop-blur-sm border border-primary/20">
              🚀 10X conversion vs video ads
            </span>
          </div>

          {/* CTA Section */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/auth">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group"
                >
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="group">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Book Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No free trial • Premium inventory only • Setup in 5 minutes
            </p>
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