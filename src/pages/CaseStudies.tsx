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
      brand: "TrillerFest",
      industry: "Music & Entertainment",
      challenge: "Create the largest virtual music festival in history with global reach and engagement",
      solution: "AI-powered streaming platform with real-time audience interaction and premium ad placements",
      results: {
        reach: "50M+ viewers",
        engagement: "5x industry average",
        revenue: "500x ROI",
        satisfaction: "99% viewer retention"
      },
      quote: "TrillerFest revolutionized virtual events, reaching audiences we never thought possible while delivering unprecedented engagement metrics.",
      author: "TrillerFest Team",
      image: "/lovable-uploads/b81bd43c-c312-4c2d-b235-002b7bf718d1.png",
      videoUrl: "https://hanzo.agency/case-study/trillerfest",
      tags: ["Music", "Virtual Events", "Global Reach"]
    },
    {
      brand: "Damon Motorcycles",
      industry: "Automotive & Technology",
      challenge: "Launch innovative electric motorcycle brand with sophisticated targeting and conversion optimization",
      solution: "AI-enhanced creative campaigns with precision targeting across premium connected TV inventory",
      results: {
        roas: "500x ROI",
        conversion: "92% increase",
        cpm: "$45 average CPM",
        reach: "15M impressions"
      },
      quote: "The AI-powered approach delivered results beyond our expectations. We've never seen conversion rates like this in automotive advertising.",
      author: "Damon Motorcycles Marketing Team",
      image: "/lovable-uploads/ebba7dda-009e-4d3c-b5d4-06707a9a84ad.png",
      videoUrl: "https://hanzo.agency/case-study/damon-motorcycles",
      tags: ["Automotive", "Electric Vehicles", "AI-Enhanced"]
    },
    {
      brand: "Unikoin Gold",
      industry: "Blockchain & Gaming",
      challenge: "Pioneer blockchain-based esports betting platform with complex audience targeting requirements",
      solution: "Programmatic CTV campaigns with advanced audience segmentation and real-time optimization",
      results: {
        engagement: "3.5x improvement",
        acquisition: "275% user growth",
        retention: "85% user retention",
        volume: "10M+ transactions"
      },
      quote: "The sophisticated targeting capabilities helped us reach the exact gaming audiences we needed to build a thriving platform.",
      author: "Unikoin Gold Product Team",
      image: "/lovable-uploads/b6c119ca-2228-4f91-8cde-0c3abf83e9f7.png",
      videoUrl: "https://hanzo.agency/case-study/unikoin-gold",
      tags: ["Blockchain", "Gaming", "Esports"]
    }
  ];

  const researchReports = [
    {
      title: "AI-Enhanced Creative Performance Study 2025",
      description: "Comprehensive analysis of AI-powered creative campaigns and their impact on Connected TV advertising performance.",
      downloadUrl: "https://hanzo.agency/reports/ai-creative-performance-2025",
      type: "Performance Report",
      pages: 42,
      insights: ["AI-enhanced creatives show 92% higher conversion rates", "3.5x ROI improvement across all campaigns", "75% reduction in time to market for new campaigns"]
    },
    {
      title: "Connected TV Advertising Benchmarks", 
      description: "Industry benchmarks and performance metrics for premium CTV inventory across major streaming platforms.",
      downloadUrl: "https://hanzo.agency/reports/ctv-benchmarks",
      type: "Benchmark Report",
      pages: 35,
      insights: ["Premium CTV inventory commands $50+ CPMs", "90% of successful CTV advertisers use AI optimization", "Connected TV shows 45% higher engagement than traditional TV"]
    },
    {
      title: "The Future of Programmatic Advertising",
      description: "Strategic insights into emerging technologies and methodologies shaping the future of digital advertising.",
      downloadUrl: "https://hanzo.agency/reports/programmatic-future",
      type: "Strategy Guide",
      pages: 28,
      insights: ["Programmatic TV to represent 80% of all TV ad spend by 2026", "AI-driven targeting increases campaign efficiency by 60%", "Real-time optimization delivers 40% better performance"]
    }
  ];

  const industryValidation = [
    {
      source: "Hanzo Agency",
      title: "30+ Successful Exits Powered",
      year: "2024",
      description: "Track record of driving measurable outcomes with 92% conversion rate increases and 3.5x ROI improvements.",
      url: "https://hanzo.agency/"
    },
    {
      source: "Industry Awards",
      title: "24+ Industry Awards",
      year: "2023-2024", 
      description: "Recognition for breakthrough AI-powered advertising solutions and innovative approaches to Connected TV.",
      url: "https://hanzo.agency/"
    },
    {
      source: "Client Success",
      title: "Trusted by Industry Leaders",
      year: "Ongoing",
      description: "Partnerships with Coinbase, Casper, Triller, and other leading brands achieving unprecedented results.",
      url: "https://hanzo.agency/"
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
                  { icon: TrendingUp, stat: "92%", label: "Conversion Rate Increase", description: "Average across all campaigns" },
                  { icon: Users, stat: "3.5x", label: "ROI Improvement", description: "Powered by AI optimization" },
                  { icon: Target, stat: "75%", label: "Time to Market Reduction", description: "With AI-enhanced workflows" },
                  { icon: DollarSign, stat: "30+", label: "Successful Exits", description: "Driven by our platform" }
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