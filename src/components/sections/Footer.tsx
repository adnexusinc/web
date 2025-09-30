import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail, Twitter, Linkedin, Facebook, Send, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = {
    platform: {
      title: "Platform",
      links: [
        { text: "Overview", href: "/platform/overview" },
        { text: "Plan", href: "/platform/plan" },
        { text: "Activate", href: "/platform/activate" },
        { text: "Measure", href: "/platform/measure" }
      ]
    },
    solutions: {
      title: "Solutions",
      links: [
        { text: "For Publishers", href: "/publishers" },
        { text: "For Advertisers", href: "/advertisers" }, 
        { text: "For Agencies", href: "/agencies" },
        { text: "Enterprise Partners", href: "/partners" }
      ]
    },
    products: {
      title: "Products",
      links: [
        { text: "Premium CTV Inventory", href: "/premium" },
        { text: "Supply Side Platform", href: "/ssp" }, 
        { text: "Demand Side Platform", href: "/dsp" },
        { text: "Ad Exchange", href: "/adx" },
        { text: "White Label AdExchange", href: "/white-label-adexchange" }
      ]
    },
    resources: {
      title: "Resources & Support",
      links: [
        { text: "FAQ", href: "/faq" },
        { text: "Contact Support", href: "/contact" },
        { text: "About Us", href: "/about" },
        { text: "Resources Hub", href: "/resources" },
        { text: "Pricing", href: "/pricing" }
      ]
    }
  };

  const certifications = [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy", 
    "Data Processing Addendum",
    "GDPR Compliance"
  ];

  return (
    <footer className="bg-card border-t border-border/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-primary/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Ahead of the <span className="performance-number">AdTech Revolution</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Get exclusive insights, industry reports, and platform updates delivered to your inbox. 
                Join 5,000+ AdTech professionals already subscribed.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Weekly industry insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Platform updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Exclusive reports</span>
                </div>
              </div>
            </div>
            
            <div className="gradient-card p-6 rounded-2xl">
              <form onSubmit={handleNewsletterSignup} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full group"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    'Successfully Subscribed!'
                  ) : (
                    <>
                      Subscribe to Newsletter
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gradient mb-4">Adnexus</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Adnexus provides a unified interface for AI-powered advertising across every channel. 
                  Our programmatic platform seamlessly integrates CTV, display, video, and emerging AI-driven 
                  environments to deliver comprehensive campaign management and optimization.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+18442363987" className="text-foreground hover:text-primary transition-colors">
                    +1 844 AD-NEXUS (844-236-3987)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:support@ad.nexus" className="text-foreground hover:text-primary transition-colors">
                    support@ad.nexus
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div className="text-muted-foreground">
                    <div>New York, NY</div>
                    <div>United States</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerSections).map(([key, section]) => (
                <div key={key}>
                  <h4 className="font-semibold mb-6 text-foreground">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <Link 
                          to={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group text-sm"
                        >
                          {link.text}
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Performance Stats */}
        <div className="border-t border-primary/10 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-6">
                Partnerships & Certifications
              </h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => {
                  const linkMap: { [key: string]: string } = {
                    "Terms of Service": "/terms-of-service",
                    "Privacy Policy": "/privacy-policy", 
                    "Cookie Policy": "/cookie-policy",
                    "Data Processing Addendum": "/data-processing-addendum",
                    "GDPR Compliance": "/gdpr-compliance"
                  };
                  
                  return (
                    <Link 
                      key={index}
                      to={linkMap[cert] || "#"}
                      className="px-3 py-2 gradient-secondary rounded-lg text-xs text-muted-foreground hover:text-primary transition-colors backdrop-blur-sm border border-primary/10"
                    >
                      {cert}
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Platform Performance</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold performance-number mb-1">250M+</div>
                  <div className="text-xs text-muted-foreground">Monthly CTV Impressions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold performance-number mb-1">99.8%</div>
                  <div className="text-xs text-muted-foreground">Fill Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold performance-number mb-1">2ms</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold performance-number mb-1">Premium</div>
                  <div className="text-xs text-muted-foreground">Avg CPM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 AdNexus Technology Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>🚀 Built for the programmatic advertising community</span>
              <span>•</span>
              <span>🌟 Trusted by 1,000+ enterprise clients</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};