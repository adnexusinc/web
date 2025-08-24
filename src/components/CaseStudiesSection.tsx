import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    client: "Global Streaming Platform",
    industry: "Entertainment",
    headline: "340% Increase in Conversions",
    description: "Leveraged AI-powered audience segmentation to dramatically improve campaign performance across CTV inventory.",
    metrics: [
      { label: "Conversion Rate", value: "+340%", icon: TrendingUp },
      { label: "CPM", value: "$85", icon: DollarSign },
      { label: "Reach", value: "45M", icon: Users },
      { label: "ROAS", value: "12.3x", icon: BarChart3 }
    ],
    quote: "Adnexus's AI optimization reduced our cost per acquisition by 67% while scaling our reach to previously untapped audiences.",
    author: "VP of Marketing",
    image: "/case-studies/streaming.jpg"
  },
  {
    client: "Fortune 500 Retailer",
    industry: "E-commerce",
    headline: "2x Revenue Growth in 90 Days",
    description: "Implemented omnichannel programmatic strategy with real-time optimization across display, video, and CTV.",
    metrics: [
      { label: "Revenue Growth", value: "+200%", icon: TrendingUp },
      { label: "CTR", value: "4.2%", icon: BarChart3 },
      { label: "Impressions", value: "850M", icon: Users },
      { label: "CPM", value: "$62", icon: DollarSign }
    ],
    quote: "The platform's real-time decisioning engine helped us identify and capture high-intent moments we were previously missing.",
    author: "Director of Digital Marketing",
    image: "/case-studies/retail.jpg"
  },
  {
    client: "Leading Auto Brand",
    industry: "Automotive",
    headline: "45% Reduction in CAC",
    description: "Advanced machine learning models optimized bidding strategies across premium CTV inventory for maximum efficiency.",
    metrics: [
      { label: "CAC Reduction", value: "-45%", icon: TrendingUp },
      { label: "Test Drives", value: "+230%", icon: Users },
      { label: "Brand Lift", value: "+67%", icon: BarChart3 },
      { label: "CPM", value: "$72", icon: DollarSign }
    ],
    quote: "Adnexus transformed our digital advertising from a cost center to a growth driver with measurable ROI.",
    author: "CMO",
    image: "/case-studies/auto.jpg"
  }
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven <span className="performance-number">Results</span> at Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading brands achieve impossible growth with our AI-powered platform
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-border/50 bg-card/50">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {study.client}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 performance-number">
                    {study.headline}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <metric.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-2 border-primary pl-4 mb-6">
                    <p className="text-lg italic text-muted-foreground mb-2">
                      "{study.quote}"
                    </p>
                    <footer className="text-sm font-medium">
                      — {study.author}
                    </footer>
                  </blockquote>

                  <Link to="/case-studies">
                    <Button variant="outline" className="group">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-6xl font-bold performance-number mb-2">
                      {study.metrics[0].value}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {study.metrics[0].label}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button size="lg" className="group">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};