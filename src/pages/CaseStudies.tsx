import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { caseStudies, aggregateMetrics, industries } from '@/data/caseStudiesData';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredCaseStudies = selectedIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation bannerVisible={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Real results from real CTV advertising campaigns. See how we've helped brands achieve exceptional ROI through premium Connected TV inventory.
            </p>

            {/* Aggregate Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
              <Card className="p-6 bg-white/5 border-white/10">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-400">{aggregateMetrics.totalAdSpend}</div>
                <div className="text-sm text-white/60 mt-1">Total Ad Spend</div>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10">
                <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-400">{aggregateMetrics.averageROI}</div>
                <div className="text-sm text-white/60 mt-1">Average ROI</div>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10">
                <Users className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-400">{aggregateMetrics.totalImpressions}</div>
                <div className="text-sm text-white/60 mt-1">Total Impressions</div>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10">
                <Users className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-yellow-400">{aggregateMetrics.totalClients}</div>
                <div className="text-sm text-white/60 mt-1">Clients Served</div>
              </Card>
            </div>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? 'default' : 'outline'}
                onClick={() => setSelectedIndustry(industry)}
                className={selectedIndustry === industry ? '' : 'bg-transparent'}
              >
                {industry}
              </Button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="group bg-white/5 border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  {study.featured && (
                    <Badge className="mb-4 bg-gradient-to-r from-yellow-600 to-orange-600">
                      Featured
                    </Badge>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{study.client}</h3>
                    <Badge variant="outline" className="border-white/20">
                      {study.industry}
                    </Badge>
                  </div>

                  <p className="text-white/70 mb-6 line-clamp-2">
                    {study.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-black/30 rounded-lg">
                    <div>
                      <div className="text-2xl font-bold text-green-400">{study.metrics.roi}</div>
                      <div className="text-xs text-white/50">ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{study.metrics.impressions}</div>
                      <div className="text-xs text-white/50">Impressions</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-xl font-bold text-purple-400">{study.metrics.primaryMetricValue}</div>
                      <div className="text-xs text-white/50">{study.metrics.primaryMetric}</div>
                    </div>
                  </div>

                  <Button
                    className="w-full group-hover:bg-white group-hover:text-black transition-all"
                    onClick={() => window.location.href = `/case-study/${study.id}`}
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center p-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve exceptional ROI with premium CTV advertising.
            </p>
            <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
