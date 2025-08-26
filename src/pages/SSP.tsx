import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, Zap, Shield, Play, Monitor, Smartphone, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';

const SSP = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center -mt-12 pt-12">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                Supply Side Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Run more formats, and earn more cash. Our white-label supply-side platform ships with a universal VAST adapter that connects every video player in minutes and keeps media management smooth.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl" className="mb-12">
                  Contact Us
                </Button>
              </Link>
            </div>
          </section>

          {/* Description */}
          <div className="mb-16 text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We built a future-ready supply-side platform software that hands full control to publishers. You watch bids flow in real time, set your own price floors, and redirect traffic with one click. The dashboard stays light, yet the engine clears 3.5 million requests per second without breaking a sweat. It is the best supply-side platform software for teams that need a truly customizable SSP solution.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="gradient-card p-8 rounded-2xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">85% to 100%</div>
              <p className="text-muted-foreground">The fill rate that we provide to publishers</p>
            </div>
            <div className="gradient-card p-8 rounded-2xl text-center">
              <div className="text-3xl font-bold text-accent mb-2">3,200,000</div>
              <p className="text-muted-foreground">Of users' impressions running</p>
            </div>
            <div className="gradient-card p-8 rounded-2xl text-center">
              <div className="text-3xl font-bold text-success mb-2">100%</div>
              <p className="text-muted-foreground">Of traffic checked by built-in scanners</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-16">
            <p className="text-lg mb-6">Experience enterprise-grade SSP technology with personalized support and implementation</p>
            <Link to="/#contact">
              <Button variant="cta" size="xl">
                Get Enterprise Access
              </Button>
            </Link>
          </div>

          {/* Ad Formats */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">All possible formats & devices to deliver ads</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {[
                { name: 'Banner', icon: Monitor },
                { name: 'Video', icon: Play },
                { name: 'Native', icon: TrendingUp },
                { name: 'Audio', icon: Zap },
                { name: 'Connected TV', icon: Tv },
                { name: 'Desktop', icon: Monitor },
                { name: 'Mobile', icon: Smartphone }
              ].map((format, index) => (
                <div key={index} className="gradient-card p-6 rounded-xl text-center">
                  <format.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-medium">{format.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Adnexus SSP features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "REAL-TIME DATA and reports",
                  description: "Receive real-time data and control your inventory with the next-step level of efficiency",
                  icon: TrendingUp
                },
                {
                  title: "BUILT-IN VAST ADAPTER",
                  description: "Increase your video advertising results with a built-in VAST Adapter",
                  icon: Play
                },
                {
                  title: "TRUSTED PARTNERS & AD QUALITY",
                  description: "We are carefully choosing demand channels among reputable advertisers",
                  icon: Shield
                },
                {
                  title: "SDK Integration option",
                  description: "Manage ad inventory in the most effortless and manageable manner possible",
                  icon: Zap
                }
              ].map((feature, index) => (
                <div key={index} className="gradient-card p-8 rounded-2xl">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Solutions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Easy & Stable integration solutions</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
              Adnexus provides only proven solutions to maximize your profit! Our development team has invested much effort in providing maximum coverage for various connection methods.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: 'MoPub [AppLovin]', feature: 'full ad format support' },
                { name: 'VAST tags', feature: 'for audio&video, CTV' },
                { name: 'JavaScript tags', feature: 'for banners' },
                { name: 'Header bidding', feature: 'full ad format support' },
                { name: 'Prebid SDK', feature: 'full ad format support' }
              ].map((integration, index) => (
                <div key={index} className="gradient-card p-6 rounded-xl text-center">
                  <h4 className="font-semibold mb-2">{integration.name}</h4>
                  <p className="text-sm text-muted-foreground">{integration.feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* White Label Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Monetize your publisher's supply even more efficiently with White-Label SSP</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
              White-Labeled SSP is the all-in-one platform that allows you to resell traffic from your publishers or own supply using the most wanted ad formats.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="gradient-card p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Save money and time with white-label SSP</h3>
                <p className="text-muted-foreground">
                  Instead of an expensive and lengthy process of in-house software development, the Adnexus white-label SSP solution will save you money and time and gives you an ultimate package of tools to increase your revenue from day one!
                </p>
              </div>
              <div className="gradient-card p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Trade with your monetization terms</h3>
                <p className="text-muted-foreground">
                  Take full control of your direct publishers or inventory management and monetizing process. With Adnexus SSP, you can establish your terms to maximize your revenue and create the most profitable cooperation with partners.
                </p>
              </div>
            </div>
          </div>

          {/* Community Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Become a white-label partner and join the Adnexus Community!</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
              By trading exclusively within the secure Adnexus Community environment, you can work with top partners without additional fees and commissions to get even better results!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="gradient-card p-8 rounded-2xl text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Financial security</h3>
                <p className="text-muted-foreground">100% secure space for all participants</p>
              </div>
              <div className="gradient-card p-8 rounded-2xl text-center">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Direct trading</h3>
                <p className="text-muted-foreground">+250 supply and demand partners</p>
              </div>
              <div className="gradient-card p-8 rounded-2xl text-center">
                <Zap className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">2ms response time</h3>
                <p className="text-muted-foreground">Trade at unthinkable speed</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started with Expert Consultation by Adnexus's customer success team!</h2>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSP;