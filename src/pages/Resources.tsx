import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { 
  BookOpen, 
  Video, 
  FileText, 
  ArrowRight,
  Download,
  Calendar,
  Lightbulb,
  TrendingUp
} from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "AdTech Guides",
      description: "Comprehensive guides on programmatic advertising, CTV, and industry best practices.",
      count: "25+ Guides",
      items: [
        "Complete Guide to CTV Advertising",
        "Programmatic Buying Best Practices", 
        "Attribution Modeling for Enterprise",
        "Brand Safety in Digital Advertising"
      ]
    },
    {
      icon: Video,
      title: "Webinars & Videos",
      description: "Expert insights, platform demos, and industry trend analysis from our team.",
      count: "50+ Videos",
      items: [
        "Platform Demo Series",
        "Industry Trend Webinars",
        "Customer Success Stories",
        "Technical Integration Guides"
      ]
    },
    {
      icon: FileText,
      title: "Whitepapers",
      description: "In-depth research and analysis on programmatic advertising trends and performance.",
      count: "15+ Papers",
      items: [
        "State of CTV Advertising 2025",
        "Enterprise Programmatic ROI Study",
        "Premium Inventory Performance Analysis",
        "AI in Advertising Technology"
      ]
    },
    {
      icon: TrendingUp,
      title: "Case Studies",
      description: "Real-world success stories from enterprise clients achieving exceptional results.",
      count: "30+ Studies",
      items: [
        "Fortune 500 Retailer: 427% ROAS",
        "B2B SaaS: 67% Cost Reduction",
        "Automotive Brand: 89% Brand Lift",
        "Enterprise Media: 340% Growth"
      ]
    }
  ];

  const latestResources = [
    {
      type: "Whitepaper",
      title: "The Future of Connected TV Advertising",
      description: "Comprehensive analysis of CTV trends, performance metrics, and growth opportunities for 2025.",
      date: "January 15, 2025",
      readTime: "12 min read",
      featured: true
    },
    {
      type: "Guide",
      title: "Enterprise Programmatic Strategy Guide",
      description: "Step-by-step guide for enterprise teams implementing programmatic advertising at scale.",
      date: "January 10, 2025", 
      readTime: "8 min read",
      featured: false
    },
    {
      type: "Case Study",
      title: "How Retailer X Achieved 400% ROAS with Premium CTV",
      description: "Detailed breakdown of campaign strategy, execution, and results.",
      date: "January 5, 2025",
      readTime: "6 min read",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Resources for <span className="performance-number">Enterprise Success</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights, comprehensive guides, and proven strategies to help you 
              master programmatic advertising and achieve exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Access Premium Content
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Latest Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="performance-number">Knowledge Library</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about programmatic advertising, CTV, and enterprise marketing technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <span className="text-sm font-medium text-primary">{category.count}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group">
                  Browse {category.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Resources */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Latest <span className="performance-number">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest research, trends, and best practices in programmatic advertising.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {latestResources.map((resource, index) => (
              <Card key={index} className={`p-6 hover-lift ${resource.featured ? 'ring-2 ring-primary/20' : ''}`}>
                {resource.featured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">
                    <Lightbulb className="w-3 h-3" />
                    Featured
                  </div>
                )}
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                    {resource.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-3">{resource.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {resource.date}
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-4 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Stay Ahead with <span className="performance-number">Expert Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest research, trends, and best practices delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/platform/overview">
                <Button variant="outline" size="lg">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;