import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, Users, Zap } from 'lucide-react';

export const WhyUsSection = () => {
  const reasons = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Personal Support",
      description: "In the digital world of programmatic advertising, we offer the most live contact: your manager is available for any questions 7 days a week.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Exclusive Premium Inventory",
      description: "Access to tier-1 CTV inventory that Netflix, Disney+, and HBO Max don't sell publicly. Direct partnerships mean zero junk traffic and exceptional performance.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Industry Expertise",
      description: "10+ years of experience with a team of proven experts who understand the complexities of programmatic advertising.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Immediate Results",
      description: "Launch your advertising business and start earning from day one with our white-label solutions and established partnerships.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 gradient-card rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why{' '}
            <span className="text-gradient">Adnexus</span>{' '}
            is Your Best Choice
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver 
            exceptional results for our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="gradient-card rounded-2xl p-8 backdrop-blur-sm border border-primary/20 hover:shadow-primary transition-smooth group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(reason.icon, { className: "w-8 h-8 text-white" })}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="gradient-card rounded-3xl p-12 backdrop-blur-sm border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Earning More?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of successful partners who have transformed their advertising operations with Adnexus.
              </p>
              <Button 
                variant="cta" 
                size="xl" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Want to Join?
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};