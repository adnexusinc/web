import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Target,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Users,
  Globe,
  Sparkles,
  Palette,
  Video,
  PenTool
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      category: "Programmatic Advertising",
      icon: Cpu,
      services: [
        {
          title: "Demand-Side Platform (DSP)",
          description: "AI-powered media buying across all channels with real-time optimization",
          features: ["Cross-channel campaigns", "AI bidding strategies", "Audience targeting", "Real-time analytics"]
        },
        {
          title: "Supply-Side Platform (SSP)",
          description: "Maximize your inventory revenue with intelligent yield optimization",
          features: ["Dynamic floor pricing", "Header bidding", "Demand path optimization", "Quality controls"]
        },
        {
          title: "Ad Exchange (ADX)",
          description: "Sub-millisecond latency exchange connecting premium buyers and sellers",
          features: ["Real-time bidding", "Fraud prevention", "Deal management", "Transparent reporting"]
        }
      ]
    },
    {
      category: "Creative & Design",
      icon: Palette,
      services: [
        {
          title: "Dynamic Creative Optimization",
          description: "AI-powered creative variations that adapt to audience segments",
          features: ["A/B testing", "Personalization", "Multi-format support", "Performance tracking"]
        },
        {
          title: "Rich Media Production",
          description: "Interactive and engaging ad formats that drive results",
          features: ["HTML5 ads", "Video production", "3D/AR experiences", "Native formats"]
        },
        {
          title: "Brand Strategy & Design",
          description: "Comprehensive brand development and creative strategy",
          features: ["Brand identity", "Campaign concepts", "Visual systems", "Creative guidelines"]
        }
      ]
    },
    {
      category: "Data & Analytics",
      icon: BarChart3,
      services: [
        {
          title: "Advanced Analytics",
          description: "Deep insights into campaign performance and audience behavior",
          features: ["Attribution modeling", "Predictive analytics", "Custom dashboards", "ROI analysis"]
        },
        {
          title: "Audience Intelligence",
          description: "First-party data activation and audience segmentation",
          features: ["DMP integration", "Lookalike modeling", "Behavioral targeting", "CRM matching"]
        },
        {
          title: "Performance Optimization",
          description: "Continuous improvement through machine learning",
          features: ["Bid optimization", "Budget allocation", "Creative testing", "Conversion tracking"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Creative Services & Programmatic Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From strategy to execution, we deliver end-to-end advertising solutions
              powered by AI and backed by human expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agency">
                <Button size="lg" className="w-full sm:w-auto">
                  Start with $9,999/mo Retainer
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((category, idx) => (
            <div key={idx} className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <category.icon className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIdx) => (
                  <Card key={serviceIdx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-2">
                            <Sparkles className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Advertising?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading brands who trust Adnexus to deliver exceptional results through
            programmatic excellence.
          </p>
          <Link to="/agency">
            <Button size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;