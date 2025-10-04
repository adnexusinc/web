import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Lightbulb, BookOpen, Search, ArrowRight, Newspaper } from 'lucide-react';

const resources = [
  { id: 1, category: "What's New", icon: Sparkles, title: "AI-Powered Campaign Optimization Now Live", date: "January 2025", description: "Introducing our revolutionary AI optimization engine that automatically adjusts bids, creative rotation, and audience targeting in real-time for maximum ROI." },
  { id: 2, category: "What's New", icon: Sparkles, title: "50+ New Premium CTV Channels Added", date: "December 2024", description: "Expanded inventory includes top streaming services and premium content partners, giving you access to highly engaged audiences across all demographics." },
  { id: 3, category: "What's New", icon: Sparkles, title: "Studio 2.0: Create TV Ads in 60 Seconds", date: "November 2024", description: "Our AI-powered creative studio now generates broadcast-quality TV ads from just a product URL or brief description. No production team needed." },
  { id: 4, category: "What's New", icon: Sparkles, title: "Sub-Millisecond Bidding on ADX", date: "October 2024", description: "Industry-leading bidding speed ensures you never miss premium inventory. Our ADX now processes bids in under 1 millisecond." },
  { id: 5, category: "How To", icon: Lightbulb, title: "Launch Your First CTV Campaign in 5 Minutes", date: "Guide", description: "Step-by-step tutorial for setting up your first Connected TV campaign, from account creation to going live with optimized targeting." },
  { id: 6, category: "How To", icon: Lightbulb, title: "Targeting Best Practices for Maximum ROI", date: "Guide", description: "Learn advanced targeting strategies used by our top-performing clients to achieve 300%+ ROI consistently." },
  { id: 7, category: "How To", icon: Lightbulb, title: "Creative Guidelines for High-Performing TV Ads", date: "Guide", description: "Proven creative frameworks and best practices for CTV ads that drive conversions and build brand awareness." },
  { id: 8, category: "How To", icon: Lightbulb, title: "Setting Up Conversion Tracking & Attribution", date: "Guide", description: "Complete guide to implementing pixel tracking, integrating with analytics platforms, and measuring true campaign ROI." },
  { id: 9, category: "How To", icon: Lightbulb, title: "Advanced Audience Segmentation Strategies", date: "Guide", description: "Master lookalike audiences, behavioral targeting, and custom segments to reach your ideal customers at scale." },
  { id: 10, category: "Product Updates", icon: BookOpen, title: "Q1 2025 Platform Roadmap", date: "December 2024", description: "Preview upcoming features including enhanced AI capabilities, new creative tools, and expanded global inventory." },
  { id: 11, category: "Product Updates", icon: BookOpen, title: "New Dashboard Features Released", date: "November 2024", description: "Redesigned analytics dashboard with real-time reporting, custom visualizations, and automated insights." },
  { id: 12, category: "Product Updates", icon: BookOpen, title: "API v2.0 Documentation Now Available", date: "October 2024", description: "Comprehensive API documentation for developers building custom integrations and automated workflows." },
  { id: 13, category: "Product Updates", icon: BookOpen, title: "Mobile App Beta Program", date: "September 2024", description: "Join our beta program to manage campaigns, monitor performance, and receive alerts on-the-go." }
];

const categories = ["All", "What's New", "How To", "Product Updates"];

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation bannerVisible={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Everything you need to master CTV advertising - from platform updates to expert guides and how-to tutorials.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? '' : 'bg-transparent'}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="group bg-white/5 border-white/10 hover:border-white/30 transition-all p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-600/20">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-white/20 text-xs">
                          {resource.category}
                        </Badge>
                        <span className="text-xs text-white/50">{resource.date}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    {resource.description}
                  </p>
                  <Button variant="ghost" className="group-hover:bg-white/10 p-0 h-auto text-blue-400">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Newsletter CTA */}
          <div className="text-center p-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-white/10">
            <Newspaper className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Subscribe for Updates
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Get the latest platform updates, how-to guides, and industry insights delivered to your inbox weekly.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
              />
              <Button className="px-8">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-white/50 mt-4">
              Join 5,000+ AdTech professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
