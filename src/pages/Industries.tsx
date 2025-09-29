import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Gamepad2,
  GraduationCap,
  Car,
  Users,
  Scale,
  Landmark,
  Home,
  Store,
  Building,
  Music,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      title: "Apps & Gaming",
      icon: Gamepad2,
      description: "Drive app installs and in-app purchases with precision targeting",
      metrics: ["2x+ D7 ROI", "450% ROAS Average", "$0.85 Cost Per Install"],
      features: ["App install tracking", "Deep linking", "Retargeting campaigns", "LTV optimization"]
    },
    {
      title: "Ecommerce",
      icon: ShoppingCart,
      description: "Transform TV into a performance marketing channel for online stores",
      metrics: ["728% ROAS", "3.2x AOV Increase", "$0.70 CPPV"],
      features: ["Shopify integration", "Dynamic product ads", "Cart abandonment", "Conversion tracking"]
    },
    {
      title: "Education & Non-profit",
      icon: GraduationCap,
      description: "Reach donors and students with compelling video storytelling",
      metrics: ["<$2 Cost Per Session", "85% Engagement Rate", "30% Acquisition Lift"],
      features: ["Geo-targeting", "Demographic filters", "Event promotion", "Donation tracking"]
    },
    {
      title: "Automotive",
      icon: Car,
      description: "Drive dealership visits and vehicle sales with local targeting",
      metrics: ["800% Traffic Increase", "192% Favorability Score", "$28 CPM"],
      features: ["Dealer locator", "Inventory ads", "Test drive booking", "Local targeting"]
    },
    {
      title: "Media & Agencies",
      icon: Users,
      description: "White-label solutions and API access for agencies",
      metrics: ["70% Traffic Increase", "100% Coverage", "458% Reach"],
      features: ["Multi-client dashboard", "API access", "Custom reporting", "Bulk management"]
    },
    {
      title: "Legal",
      icon: Scale,
      description: "Generate qualified leads for law firms and legal services",
      metrics: ["$0.85 Cost Per Lead", "165% ROAS", "80% CPS Reduction"],
      features: ["Case type targeting", "Geo-fencing", "Lead forms", "Call tracking"]
    },
    {
      title: "Politics",
      icon: Landmark,
      description: "Win elections with targeted political advertising",
      metrics: ["192% Favorability", "100% Coverage", "85% Engagement"],
      features: ["Voter targeting", "Issue-based ads", "District targeting", "Compliance tools"]
    },
    {
      title: "Home Improvement",
      icon: Home,
      description: "Connect with homeowners ready to renovate",
      metrics: ["275% ROAS", "70% Traffic Boost", "<$2 CPS"],
      features: ["Homeowner targeting", "Seasonal campaigns", "Local contractors", "Quote requests"]
    },
    {
      title: "Retail",
      icon: Store,
      description: "Drive foot traffic and in-store sales for retail locations",
      metrics: ["458% Reach", "409% ROAS", "$0.93 CPS"],
      features: ["Store locator", "Proximity targeting", "Promotion ads", "Foot traffic measurement"]
    },
    {
      title: "B2B",
      icon: Building,
      description: "Reach decision-makers and generate enterprise leads",
      metrics: ["600% ROAS", "30% Lift", "1,635% ROAS Peak"],
      features: ["Job title targeting", "Company size filters", "LinkedIn integration", "ABM campaigns"]
    },
    {
      title: "Entertainment",
      icon: Music,
      description: "Promote shows, events, and streaming content",
      metrics: ["85% Engagement", "100% Coverage", "458% Reach"],
      features: ["Event promotion", "Ticket sales tracking", "Audience matching", "Retargeting"]
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
              TV Advertising for Every Industry
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              No matter your vertical, Adnexus delivers measurable results with
              industry-specific targeting and optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agency/retainer">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Book a Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </div>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {industry.metrics.map((metric, metricIdx) => (
                      <span
                        key={metricIdx}
                        className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1">
                    {industry.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <TrendingUp className="h-3 w-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/agency/retainer">
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Proven Results Across Industries
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-sm text-muted-foreground">Active Advertisers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">TV Channels</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">728%</div>
              <p className="text-sm text-muted-foreground">Average ROAS</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$0.85</div>
              <p className="text-sm text-muted-foreground">Avg Cost Per Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Advertising?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of brands across every industry achieving breakthrough
            results with Adnexus TV advertising.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/agency/retainer">
              <Button size="lg">
                Start Your Campaign
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;