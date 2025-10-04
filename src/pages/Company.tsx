import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ArrowRight, Download } from 'lucide-react';

const upcomingEvents = [
  {
    name: "CES 2025",
    date: "January 7-10, 2025",
    location: "Las Vegas, NV",
    booth: "Booth #45678, North Hall",
    description: "Join us at the world's most influential tech event showcasing the future of CTV advertising.",
    topics: ["AI-Powered Optimization", "CTV Trends 2025", "Live Platform Demo"]
  },
  {
    name: "NAB Show 2025",
    date: "April 6-9, 2025",
    location: "Las Vegas Convention Center",
    booth: "Booth #SU3421",
    description: "Discover how broadcasters and content creators are leveraging our programmatic solutions.",
    topics: ["Broadcaster Solutions", "Content Monetization", "Advanced Analytics"]
  },
  {
    name: "Advertising Week 2025",
    date: "May 12-15, 2025",
    location: "New York, NY",
    speaker: "Main Stage Speaker",
    description: "Our CEO presents 'The Future of Programmatic CTV' on the main stage.",
    topics: ["Industry Keynote", "Platform Showcase", "Networking Events"]
  },
  {
    name: "Cannes Lions 2025",
    date: "June 17-21, 2025",
    location: "Cannes, France",
    sponsor: "Platinum Sponsor",
    description: "Meet us at the intersection of creativity and technology at advertising's biggest festival.",
    topics: ["Creative Excellence", "CTV Innovation", "Global Partnerships"]
  },
  {
    name: "DMEXCO 2025",
    date: "September 10-11, 2025",
    location: "Cologne, Germany",
    booth: "Booth #A-234",
    description: "Europe's leading digital marketing expo - showcasing our global expansion.",
    topics: ["European Market Insights", "GDPR-Compliant Solutions", "Partnership Opportunities"]
  },
  {
    name: "Ad:Tech 2025",
    date: "October 22-23, 2025",
    location: "San Francisco, CA",
    speaker: "Keynote Speaker",
    description: "Our CTO delivers keynote on 'AI's Role in the Future of Programmatic Advertising'.",
    topics: ["AI & Machine Learning", "Technology Deep-Dive", "Product Roadmap"]
  }
];

const pastEvents = [
  "CES 2024", "NAB Show 2024", "Advertising Week 2024", "Cannes Lions 2024", "DMEXCO 2024", "Ad:Tech 2024"
];

export default function Company() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation bannerVisible={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Us at Industry Events
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Connect with the Adnexus team at leading advertising and technology conferences worldwide. Book a meeting to discuss how we can help grow your business.
            </p>
          </div>

          {/* Company Info */}
          <div className="mb-16 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-white/10 text-center">
            <h2 className="text-2xl font-bold mb-2">Adnexus Technology Inc</h2>
            <div className="flex items-center justify-center gap-2 text-white/70 mb-4">
              <MapPin className="h-5 w-5" />
              <span>Headquarters: Los Angeles, California</span>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto">
              Additional offices in San Francisco and New York City. Serving 230+ clients globally with $500M+ in managed ad spend.
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events 2025</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:border-white/30 transition-all p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{event.name}</h3>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    {event.speaker && (
                      <Badge className="bg-gradient-to-r from-yellow-600 to-orange-600">
                        {event.speaker}
                      </Badge>
                    )}
                    {event.sponsor && (
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                        {event.sponsor}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-white/70 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>

                  {event.booth && (
                    <div className="text-white/60 mb-3 text-sm">{event.booth}</div>
                  )}

                  <p className="text-white/70 mb-4">{event.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.topics.map((topic, i) => (
                      <Badge key={i} variant="outline" className="border-white/20">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full">
                        <Users className="mr-2 h-4 w-4" />
                        Book a Meeting
                      </Button>
                    </a>
                    <Button variant="outline" className="bg-transparent">
                      <Download className="mr-2 h-4 w-4" />
                      Add to Calendar
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Past Events 2024</h2>
            <div className="flex flex-wrap gap-3">
              {pastEvents.map((event, index) => (
                <Badge key={index} variant="outline" className="border-white/20 text-base py-2 px-4">
                  {event}
                </Badge>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="text-center p-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-bold mb-4">
              Get Event Updates
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for event announcements, booth locations, and exclusive meeting opportunities.
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
