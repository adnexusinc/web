import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, DollarSign, Target, ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurWork = () => {
  const caseStudies = [
    {
      brand: "TrillerFest",
      subtitle: "Largest Virtual Music Festival in History",
      image: "/lovable-uploads/b81bd43c-c312-4c2d-b235-002b7bf718d1.png",
      metrics: ["169M+ Monthly Active Users", "85M Doubled User Base", "500x ROI"],
      category: "Entertainment",
      url: "/case-study/trillerfest"
    },
    {
      brand: "Damon Motorcycles", 
      subtitle: "100M+ in Pre-Orders Achievement",
      image: "/lovable-uploads/ebba7dda-009e-4d3c-b5d4-06707a9a84ad.png",
      metrics: ["500x ROI Launch Campaign", "$100M+ Pre-Orders", "92% Conversion Increase"],
      category: "Automotive",
      url: "/case-study/damon-motorcycles"
    },
    {
      brand: "Unikoin Gold",
      subtitle: "Blockchain Esports Revolution",
      image: "/lovable-uploads/b6c119ca-2228-4f91-8cde-0c3abf83e9f7.png", 
      metrics: ["120,000 ETH Raised", "2017 ICO Success", "3.5x Engagement"],
      category: "Blockchain",
      url: "/case-study/unikoin-gold"
    },
    {
      brand: "Bellabeat",
      subtitle: "Wellness Technology Growth",
      image: "/lovable-uploads/b81bd43c-c312-4c2d-b235-002b7bf718d1.png",
      metrics: ["300% User Growth", "85% Retention Rate", "2.5x Revenue"],
      category: "HealthTech", 
      url: "/case-study/bellabeat"
    },
    {
      brand: "Cover Build",
      subtitle: "Construction Tech Innovation",
      image: "/lovable-uploads/ebba7dda-009e-4d3c-b5d4-06707a9a84ad.png",
      metrics: ["450% Lead Generation", "60% Cost Reduction", "95% Accuracy"],
      category: "Construction",
      url: "/case-study/cover-build"
    },
    {
      brand: "Casper Blockchain",
      subtitle: "Enterprise Blockchain Solutions",
      image: "/lovable-uploads/b6c119ca-2228-4f91-8cde-0c3abf83e9f7.png",
      metrics: ["$50M+ Transaction Volume", "99.9% Uptime", "200+ Enterprise Clients"],
      category: "Blockchain",
      url: "/case-study/casper-blockchain"
    },
    {
      brand: "Myle Tap",
      subtitle: "Mobile Payment Innovation",
      image: "/lovable-uploads/b81bd43c-c312-4c2d-b235-002b7bf718d1.png",
      metrics: ["5M+ Transactions", "40% Market Share", "15s Average Processing"],
      category: "FinTech",
      url: "/case-study/myle-tap"
    },
    {
      brand: "KANOA",
      subtitle: "Growing to $1.5M Monthly Revenue",
      image: "/lovable-uploads/ebba7dda-009e-4d3c-b5d4-06707a9a84ad.png",
      metrics: ["$1.5M Monthly Revenue", "400% Growth Rate", "85% Customer LTV"],
      category: "E-commerce",
      url: "/case-study/kanoa"
    },
    {
      brand: "SKULLY",
      subtitle: "Highest Funded IndieGoGo Campaign",
      image: "/lovable-uploads/b6c119ca-2228-4f91-8cde-0c3abf83e9f7.png",
      metrics: ["$2.4M IndieGoGo Record", "Historic Campaign Success", "Global Media Coverage"],
      category: "Hardware",
      url: "/case-study/skully"
    }
  ];

  const categories = ["All", "Entertainment", "Automotive", "Blockchain", "HealthTech", "Construction", "FinTech", "E-commerce", "Hardware"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredCaseStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Growth-Driven <span className="text-gradient">Innovation</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Award-winning strategies that transform businesses through AI-powered solutions. 
                From 500x ROI campaigns to record-breaking funding successes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/auth">Start Your Campaign</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies">View All Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Overview */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Platform Performance</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { icon: TrendingUp, stat: "30+", label: "Successful Exits", description: "Companies scaled to exit" },
                  { icon: Users, stat: "92%", label: "Conversion Rate Increase", description: "Average across campaigns" },
                  { icon: Target, stat: "3.5x", label: "ROI Improvement", description: "AI-powered optimization" },
                  { icon: DollarSign, stat: "24+", label: "Industry Awards", description: "Recognition for innovation" }
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="gradient-secondary p-4 rounded-xl w-fit mx-auto mb-4">
                      <metric.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold performance-number mb-2">{metric.stat}</div>
                    <div className="font-semibold mb-1">{metric.label}</div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((study, index) => (
                  <Card key={index} className="overflow-hidden gradient-card border border-primary/20 group hover:scale-105 transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.brand}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                          {study.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Play className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{study.brand}</h3>
                      <p className="text-muted-foreground mb-4">{study.subtitle}</p>
                      
                      <div className="space-y-2 mb-6">
                        {study.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{metric}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button asChild className="w-full group">
                        <Link to={study.url} className="flex items-center gap-2">
                          View Case Study
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join These Success Stories?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                From record-breaking crowdfunding campaigns to 500x ROI achievements, 
                see how Adnexus drives exceptional results for innovative companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/auth" className="flex items-center gap-2">
                    Start Your Campaign
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/premium">Explore Premium Inventory</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurWork;