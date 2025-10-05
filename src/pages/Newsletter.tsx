import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Mail, TrendingUp, FileText, Gift, Calendar } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Mailchimp
    setIsSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation bannerVisible={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CTV Smarts in Your Inbox
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Welcome to your inside track on CTV advertising—the kind of intel that fuels growth.
            </p>
          </div>

          {/* What You'll Get */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Here's what you'll get:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/5 border-white/10">
                <Mail className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Straight from the CEO</h3>
                <p className="text-white/70">
                  Bold takes and fresh perspectives on the industry.
                </p>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10">
                <TrendingUp className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Platform Drops</h3>
                <p className="text-white/70">
                  Hot-off-the-press updates to power your campaigns.
                </p>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10">
                <FileText className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Case Study Spotlights</h3>
                <p className="text-white/70">
                  Breakdowns of brands crushing it (and how you can, too).
                </p>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10">
                <Gift className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Exclusive Offers</h3>
                <p className="text-white/70">
                  Get first dibs on promos and perks.
                </p>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10 md:col-span-2">
                <Calendar className="h-8 w-8 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seasonal Playbooks</h3>
                <p className="text-white/70">
                  Tips to make the most of key moments all year long.
                </p>
              </Card>
            </div>

            <p className="text-center text-white/60 mt-8">
              We keep it twice a week—snappy, valuable, and never boring. And if it's not your speed? One click, and we're out of your inbox.
            </p>
          </div>

          {/* Newsletter Signup Form */}
          <div className="max-w-xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h2>
              <p className="text-white/70 text-center mb-6">
                Get the latest news about CTV, case studies, and how-to guides delivered to your inbox weekly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm font-medium mb-2">
                    Email address
                  </label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    'Successfully Subscribed!'
                  ) : (
                    <>
                      Subscribe
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-white/50 text-center mt-4">
                Join over 100 high-growth startups. Unsubscribe anytime.
              </p>
            </Card>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-white/60 mb-6">Trusted by performance marketers at:</p>
            <div className="flex flex-wrap justify-center gap-6 text-white/40 text-sm">
              <span>Mobility Startups</span>
              <span>•</span>
              <span>HealthTech</span>
              <span>•</span>
              <span>Entertainment Platforms</span>
              <span>•</span>
              <span>Gaming</span>
              <span>•</span>
              <span>Finance Apps</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
