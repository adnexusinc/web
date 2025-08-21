import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProductsSection = () => {
  const products = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "White Label AdExchange",
      description: "Launch an advertising business and earn money from day one with our comprehensive ad exchange platform.",
      features: ["Real-time bidding", "Multi-format support", "Advanced analytics", "Fraud protection"],
      color: "from-blue-500 to-cyan-500",
      link: "/white-label-adexchange"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Demand-Side Platform", 
      description: "Grow your brand's performance with proven advertising software and advanced targeting capabilities.",
      features: ["Audience targeting", "Campaign optimization", "Cross-channel reach", "Performance tracking"],
      color: "from-purple-500 to-pink-500",
      link: "/advertisers"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Supply-Side Platform",
      description: "Monetize your websites and applications with our advanced SSP technology and premium demand sources.",
      features: ["Header bidding", "Yield optimization", "Premium advertisers", "Revenue analytics"],
      color: "from-green-500 to-emerald-500",
      link: "/ssp"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "ADXYZ Community",
      description: "Connect to our ecosystem and start trading with 250+ verified partners in our exclusive network.",
      features: ["250+ partners", "Direct deals", "Community support", "Exclusive opportunities"],
      color: "from-orange-500 to-red-500",
      link: "/partners"
    }
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 gradient-card rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Our Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete{' '}
            <span className="text-gradient">Programmatic</span>{' '}
            Advertising Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our suite of white-label solutions designed to maximize your revenue 
            and streamline your advertising operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className="gradient-card rounded-2xl p-8 backdrop-blur-sm border border-primary/20 hover:shadow-primary transition-smooth group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(product.icon, { className: "w-8 h-8 text-white" })}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              <div className="space-y-2 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link to={product.link}>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};