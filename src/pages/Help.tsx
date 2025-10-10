import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Phone,
  Mail,
  MessageCircle,
  Search,
  BookOpen,
  Video,
  FileText,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Help() {
  const faqs = [
    {
      q: "Where will my ads appear?",
      a: "Your ads run on 500+ premium streaming apps including Hulu, Roku, Apple TV+, Peacock, Paramount+, ESPN, CNN, and more. You choose which channels match your audience."
    },
    {
      q: "Can people skip my CTV ads?",
      a: "Most CTV ads are non-skippable. Premium inventory means viewers watch your complete message—unlike YouTube or social media."
    },
    {
      q: "How do I track results?",
      a: "Real-time dashboard shows impressions, reach, frequency, conversions, and ROAS. Track every impression to sale with pixel tracking and integrations."
    },
    {
      q: "Is CTV better than Facebook/Google?",
      a: "CTV complements digital. Key advantages: no ad blockers (100% viewability), non-skippable inventory, bigger screens (65\" vs 6\"), and premium brand-safe environment."
    },
    {
      q: "What's the minimum budget?",
      a: "Start for as little as $25/day. No long-term contracts. Scale up or pause anytime. Most advertisers see results starting at $100-500/day."
    },
    {
      q: "How quickly can I launch?",
      a: "Self-service: 5 minutes to go live. With sales support: 24-48 hours for custom campaigns. Upload creative or we'll generate it with AI."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Get answers fast. Contact our support team or browse frequently asked questions.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 bg-white/5 border-white/10 hover:border-white/30 transition-all">
              <Phone className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href="tel:+18442363987" className="text-white/70 hover:text-white block mb-4">
                +1 844-AD-NEXUS<br />
                (844-236-3987)
              </a>
              <p className="text-sm text-white/50">Mon-Fri, 9AM-6PM EST</p>
            </Card>

            <Card className="p-8 bg-white/5 border-white/10 hover:border-white/30 transition-all">
              <Mail className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <a href="mailto:support@ad.nexus" className="text-white/70 hover:text-white block mb-4">
                support@ad.nexus
              </a>
              <p className="text-sm text-white/50">24-hour response time</p>
            </Card>

            <Card className="p-8 bg-white/5 border-white/10 hover:border-white/30 transition-all">
              <MessageCircle className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <Button className="w-full bg-white text-black hover:bg-gray-100 mb-4">
                Start Chat
              </Button>
              <p className="text-sm text-white/50">Instant support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-8 bg-white/5 border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Self-Service Resources</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Link to="/faq">
              <Card className="p-6 bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer h-full">
                <BookOpen className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="font-bold mb-2">Knowledge Base</h3>
                <p className="text-sm text-white/60">Browse all help articles</p>
              </Card>
            </Link>

            <a href="https://www.youtube.com/@adnexusinc" target="_blank" rel="noopener noreferrer">
              <Card className="p-6 bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer h-full">
                <Video className="h-10 w-10 text-red-400 mb-4" />
                <h3 className="font-bold mb-2">Video Tutorials</h3>
                <p className="text-sm text-white/60">Watch step-by-step guides</p>
              </Card>
            </a>

            <Link to="/case-studies">
              <Card className="p-6 bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer h-full">
                <FileText className="h-10 w-10 text-green-400 mb-4" />
                <h3 className="font-bold mb-2">Case Studies</h3>
                <p className="text-sm text-white/60">See real success stories</p>
              </Card>
            </Link>

            <Link to="/contact">
              <Card className="p-6 bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer h-full">
                <Headphones className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="font-bold mb-2">Contact Us</h3>
                <p className="text-sm text-white/60">Get personalized help</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
