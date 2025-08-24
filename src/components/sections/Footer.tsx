import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  const footerSections = {
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
        { text: "White Label AdExchange", href: "/white-label-adexchange" },
        { text: "Supply Side Platform", href: "/ssp" }, 
        { text: "Demand Side Platform", href: "/dsp" },
        { text: "Ad Exchange", href: "/adx" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Leadership Team", href: "/company" }, 
        { text: "Platform Overview", href: "/platform/overview" },
        { text: "Resources", href: "/resources" }
      ]
    },
    connect: {
      title: "Connect",
      links: [
        { text: "Inventory List", href: "/inventory" },
        { text: "Contact Us", href: "/auth" }
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
    <footer className="bg-background/80 backdrop-blur-sm border-t border-primary/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gradient mb-4">Adnexus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ADXYZ Inc. is a premium AdTech company specializing in high-value CTV/OTT inventory. 
                  Our programmatic platform delivers exclusive Connected TV advertising opportunities 
                  with guaranteed $50+ CPM rates for premium brand advertisers.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">contact@ad.nexus</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Twitter, label: "Twitter" },
                    { icon: Linkedin, label: "LinkedIn" }, 
                    { icon: Facebook, label: "Facebook" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="w-10 h-10 gradient-secondary rounded-lg flex items-center justify-center hover:shadow-primary transition-smooth group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerSections).map(([key, section]) => (
                <div key={key}>
                  <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <Link 
                          to={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                          {link.text}
                          <ArrowRight className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-primary/20 py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">
              Partnerships and certifications for our customers' success!
            </h4>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {certifications.map((cert, index) => (
              <a 
                key={index}
                href="#"
                className="px-4 py-2 gradient-secondary rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors backdrop-blur-sm border border-primary/10"
              >
                {cert}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 ADXYZ Inc. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Built with ❤️ for the programmatic advertising community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};