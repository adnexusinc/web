import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Target, Users, DollarSign, Play, ExternalLink, Award, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      brand: "Princess Polly",
      industry: "Fashion & Retail",
      challenge: "Scale digital campaigns to TV while maintaining performance metrics",
      solution: "Adnexus Premium CTV inventory with advanced audience targeting",
      results: {
        roas: "+320% ROAS",
        reach: "12M impressions",
        cpm: "$45 average CPM",
        conversion: "+180% conversion rate"
      },
      quote: "Adnexus transformed our advertising strategy. We've never seen TV perform like this - it's actually outperforming our social campaigns.",
      author: "Sarah Kim, VP of Marketing",
      image: "/lovable-uploads/b81bd43c-c312-4c2d-b235-002b7bf718d1.png",
      videoUrl: "https://mountain.com/case-studies/princess-polly",
      tags: ["Fashion", "E-commerce", "First-time TV Advertiser"]
    },
    {
      brand: "Feeding America",
      industry: "Non-Profit",
      challenge: "Maximize donation impact with limited advertising budget",
      solution: "Performance-driven CTV campaigns with real-time optimization",
      results: {
        roas: "+450% donation lift",
        reach: "25M impressions",
        cpm: "$35 average CPM",
        conversion: "+200% online donations"
      },
      quote: "The precision targeting allowed us to reach the right donors at the right time. Every dollar spent generated real impact.",
      author: "Michael Chen, Director of Digital Strategy",
      image: "/lovable-uploads/ebba7dda-009e-4d3c-b5d4-06707a9a84ad.png",
      videoUrl: "https://mountain.com/case-studies/feeding-america",
      tags: ["Non-Profit", "Social Impact", "Donation Optimization"]
    },
    {
      brand: "Tarte Cosmetics",
      industry: "Beauty & Cosmetics",
      challenge: "Launch new product line with brand awareness and sales goals",
      solution: "Multi-format CTV campaigns across premium streaming platforms",
      results: {
        roas: "+280% ROAS",
        reach: "18M impressions",
        cpm: "$52 average CPM",
        conversion: "+165% product sales"
      },
      quote: "The creative flexibility and targeting precision helped us launch our biggest product success story yet.",
      author: "Amanda Rodriguez, CMO",
      image: "/lovable-uploads/b6c119ca-2228-4f91-8cde-0c3abf83e9f7.png",
      videoUrl: "https://mountain.com/case-studies/tarte",
      tags: ["Beauty", "Product Launch", "Brand Awareness"]
    }
  ];

  const researchReports = [
    {
      title: "The State of CTV Advertising 2025",
      description: "Comprehensive analysis of Connected TV trends, viewership patterns, and advertiser performance metrics.",
      downloadUrl: "https://mountain.com/reports/ctv-state-2025",
      type: "Industry Report",
      pages: 45,
      insights: ["87% of viewers prefer ad-supported streaming", "CTV ad spending to reach $40B in 2025", "Premium inventory commands 300% higher engagement"]
    },
    {
      title: "Performance TV Benchmark Study", 
      description: "Cross-industry analysis of TV advertising performance compared to traditional digital channels.",
      downloadUrl: "https://mountain.com/reports/performance-tv-benchmarks",
      type: "Benchmark Report",
      pages: 32,
      insights: ["TV campaigns average 3.2x higher brand recall", "40% lower cost per acquisition vs. social", "2.5x higher lifetime value for TV-acquired customers"]
    },
    {
      title: "Audience Targeting in the Cookie-Free Era",
      description: "Strategic guide to privacy-first advertising and advanced targeting methodologies.",
      downloadUrl: "https://mountain.com/reports/cookieless-targeting",
      type: "Strategy Guide",
      pages: 28,
      insights: ["First-party data drives 85% of targeting success", "Contextual targeting sees 60% better performance", "Privacy-compliant methods show 25% higher engagement"]
    }
  ];

  const industryValidation = [
    {
      source: "Ad Age",
      title: "Best in Addressable TV Solutions",
      year: "2024 & 2025",
      description: "Back-to-back winner recognizing innovation in addressable TV advertising technology.",
      url: "https://adage.com/adweek-readers-choice-2024"
    },
    {
      source: "Fast Company",
      title: "Most Innovative Companies",
      year: "2023",
      description: "Recognized for democratizing TV advertising and making it accessible to all businesses.",
      url: "https://fastcompany.com/most-innovative-companies/2023"
    },
    {
      source: "Adweek",
      title: "B2B Innovation Awards",
      year: "2024",
      description: "Honored for breakthrough B2B advertising solutions on Connected TV platforms.",
      url: "https://adweek.com/b2b-innovation-awards-2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Real Results from <span className="text-gradient">Real Brands</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Discover how leading brands achieve exceptional performance with Adnexus Premium CTV advertising. 
                From first-time TV advertisers to Fortune 500 companies - see the results that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/auth">Start Your Campaign</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/premium">View Premium Inventory</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Platform Performance Overview</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { icon: TrendingUp, stat: "320%", label: "Average ROAS Increase", description: "Across all campaigns" },
                  { icon: Users, stat: "90%", label: "First-Time TV Advertisers", description: "Successfully onboarded" },
                  { icon: Target, stat: "45%", label: "Higher Engagement", description: "vs traditional TV" },
                  { icon: DollarSign, stat: "$50+", label: "Average CPM", description: "Premium inventory rates" }
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

        {/* Case Studies */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Featured Case Studies</h2>
              <div className="space-y-12">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="p-8 gradient-card border border-primary/20">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{study.brand}</h3>
                        <p className="text-muted-foreground mb-4">{study.industry}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">Challenge:</h4>
                          <p className="text-muted-foreground mb-4">{study.challenge}</p>
                          
                          <h4 className="font-semibold mb-2">Solution:</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {Object.entries(study.results).map(([key, value], resultIndex) => (
                            <div key={resultIndex} className="text-center p-3 gradient-secondary rounded-lg">
                              <div className="font-bold text-lg performance-number">{value}</div>
                              <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                            </div>
                          ))}
                        </div>

                        <blockquote className="border-l-4 border-primary pl-4 mb-4">
                          <p className="text-muted-foreground italic">"{study.quote}"</p>
                          <cite className="text-sm font-semibold">— {study.author}</cite>
                        </blockquote>

                        <div className="flex gap-4">
                          <Button asChild>
                            <a href={study.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <Play className="w-4 h-4" />
                              Watch Case Study
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link to="/auth">Start Similar Campaign</Link>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="gradient-secondary p-6 rounded-xl">
                        <img 
                          src={study.image} 
                          alt={`${study.brand} case study`}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research & Reports */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Industry Research & Reports</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {researchReports.map((report, index) => (
                  <Card key={index} className="p-6 gradient-card border border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                      <BarChart3 className="w-6 h-6 text-primary" />
                      <span className="text-sm text-primary font-medium">{report.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{report.title}</h3>
                    <p className="text-muted-foreground mb-4">{report.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground mb-2">{report.pages} pages • Key Insights:</div>
                      <ul className="space-y-1">
                        {report.insights.map((insight, insightIndex) => (
                          <li key={insightIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild className="w-full">
                      <a href={report.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Download Report
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Validation */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Industry Recognition</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {industryValidation.map((award, index) => (
                  <Card key={index} className="p-6 text-center gradient-card border border-primary/20">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                    <div className="text-primary font-semibold mb-2">{award.source} • {award.year}</div>
                    <p className="text-muted-foreground mb-4">{award.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={award.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Learn More
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
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
                90% of our customers are first-time TV advertisers who achieve exceptional results. 
                Start your premium CTV campaign today and see why leading brands choose Adnexus.
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

export default CaseStudies;