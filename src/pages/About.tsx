import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, TrendingUp, Zap, Shield, Heart, ArrowRight } from 'lucide-react';

const timeline = [
  { year: "2020", event: "Founded by programmatic advertising veterans in Los Angeles" },
  { year: "2021", event: "Launched DSP platform, first $1M in ad spend managed" },
  { year: "2022", event: "Added SSP and ADX, reached $50M ad spend milestone" },
  { year: "2023", event: "Studio creative platform launched, surpassed 100 enterprise clients" },
  { year: "2024", event: "$500M+ ad spend managed, 230+ clients, 300% average ROI" },
  { year: "2025", event: "Global expansion with advanced AI optimization" }
];

const values = [
  {
    icon: Shield,
    title: "Transparency First",
    description: "Complete visibility into campaign performance and costs"
  },
  {
    icon: TrendingUp,
    title: "Client Success",
    description: "Your ROI is our #1 priority"
  },
  {
    icon: Zap,
    title: "Innovation & AI",
    description: "Cutting-edge technology for maximum performance"
  },
  {
    icon: Users,
    title: "Data-Driven Decisions",
    description: "Every recommendation backed by real-time analytics"
  },
  {
    icon: Heart,
    title: "Inclusive Culture",
    description: "Diverse team, diverse perspectives, better solutions"
  }
];

const stats = [
  { value: "$500M+", label: "Ad Spend Managed" },
  { value: "230+", label: "Active Clients" },
  { value: "300%", label: "Average ROI" },
  { value: "500+", label: "Premium CTV Channels" },
  { value: "50+", label: "Team Members" },
  { value: "3", label: "Global Offices" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation bannerVisible={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Adnexus
            </h1>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-4">
              Democratizing premium CTV advertising through AI-powered technology
            </p>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We're on a mission to make programmatic CTV advertising accessible, transparent, and highly effective for brands of all sizes.
            </p>
          </div>

          {/* Company Info */}
          <div className="mb-20 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-white/10">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Adnexus Technology Inc</h2>
              <div className="flex items-center justify-center gap-2 text-white/70">
                <MapPin className="h-5 w-5" />
                <span>Headquarters: Los Angeles, California</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-white/60 text-sm mb-1">Offices</div>
                <div className="text-white font-semibold">Los Angeles (HQ) • San Francisco • New York City</div>
              </div>
            </div>
          </div>

          {/* By the Numbers */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 bg-white/5 border-white/10 text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Story Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-400">{item.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-px bg-gradient-to-b from-blue-400 to-purple-400 relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400" />
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-white/80">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6 bg-white/5 border-white/10">
                    <Icon className="h-10 w-10 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-white/70">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Join Our Team CTA */}
          <div className="text-center p-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about programmatic advertising and cutting-edge technology.
            </p>
            <a href="/contact">
              <Button size="lg" className="text-lg px-8">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-white/50 mt-4">We're hiring across all departments</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
