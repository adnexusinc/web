import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    client: "Hardware Innovation Company",
    industry: "Consumer Electronics",
    headline: "Record-Breaking Crowdfunding Success",
    description: "Achieved the highest successfully funded campaign in IndieGoGo history through strategic CTV advertising and community building.",
    metrics: [
      { label: "Funding Success", value: "$2.4M", icon: DollarSign },
      { label: "CPM", value: "$52", icon: DollarSign },
      { label: "Global Reach", value: "25M", icon: Users },
      { label: "Conversion Rate", value: "+450%", icon: TrendingUp }
    ],
    quote: "The precision targeting and premium inventory allowed us to reach exactly the right innovators and tech enthusiasts. We exceeded our funding goals by 300% and created a global community around our vision.",
    author: "Marcus Weller, Founder",
    image: "/case-studies/hardware.jpg"
  },
  {
    client: "Audio Technology Startup",
    industry: "Consumer Electronics",
    headline: "$1.5M Monthly Revenue Growth",
    description: "Scaled from startup to $1.5M monthly revenue through AI-powered audience targeting and premium CTV inventory optimization.",
    metrics: [
      { label: "Monthly Revenue", value: "$1.5M", icon: DollarSign },
      { label: "Growth Rate", value: "+400%", icon: TrendingUp },
      { label: "Customer LTV", value: "+85%", icon: BarChart3 },
      { label: "CPM", value: "$48", icon: DollarSign }
    ],
    quote: "Adnexus helped us identify and reach our ideal customers with surgical precision. The platform's AI optimization turned our advertising from an expense into our most profitable growth channel.",
    author: "Cival Van Der Lubbe, CEO", 
    image: "/case-studies/audio.jpg"
  },
  {
    client: "Creative Platform",
    industry: "Art & Technology",
    headline: "250% Community Engagement Growth",
    description: "Revolutionized digital art marketplace through targeted campaigns reaching collectors, artists, and creative professionals globally.",
    metrics: [
      { label: "Engagement Growth", value: "+250%", icon: TrendingUp },
      { label: "Active Artists", value: "50K+", icon: Users },
      { label: "Transaction Volume", value: "+300%", icon: BarChart3 },
      { label: "CPM", value: "$65", icon: DollarSign }
    ],
    quote: "The sophisticated targeting capabilities allowed us to connect artists with collectors in ways we never imagined. We built a thriving creative economy that benefits everyone in our ecosystem.",
    author: "Major Dream Williams, Founder",
    image: "/case-studies/creative.jpg"
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