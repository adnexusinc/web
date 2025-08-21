import React from 'react';
import { TrendingUp } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    { number: "300%", label: "ROI", description: "our customers have achieved over the past 3 years with ADXYZ Ecosystem solutions and products" },
    { number: "150M+", label: "imps / mo", description: "Total capacity across all ad formats" },
    { number: "55+", label: "Available campaign settings", description: "Complete control over targeting and optimization" },
    { number: "100%", label: "Of verified traffic", description: "using leading scanners" },
    { number: "15+", label: "years of experience", description: "in the digital programmatic advertising industry" },
    { number: "2ms", label: "response time", description: "Trade at unthinkable speed" }
  ];

  return (
    <section className="py-20 bg-background/80 backdrop-blur-sm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ROI Highlight */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="gradient-card rounded-3xl p-12 backdrop-blur-sm border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-success/10 via-transparent to-success/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <TrendingUp className="w-12 h-12 text-success" />
                <div className="text-8xl font-bold text-gradient">300%</div>
                <span className="text-2xl font-semibold text-success">ROI</span>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                our customers have achieved over the past 3 years with ADXYZ Ecosystem solutions and products
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Here are some more numbers about{' '}
              <span className="text-gradient">ADXYZ</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stats.slice(1).map((stat, index) => (
              <div 
                key={index}
                className="gradient-card rounded-xl p-6 backdrop-blur-sm border border-primary/20 text-center hover:shadow-primary transition-smooth group"
              >
                <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};