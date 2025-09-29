import React from 'react';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { TrendingUp, Zap, Shield, Play, Monitor, Smartphone, Tv, DollarSign, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhiteLabelAdExchange = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-36 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center -mt-12 pt-12">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                White Label AdExchange
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Start your advertising business with minimal investment and maximum income
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact">
                  <Button variant="hero" size="xl">
                    Want to Connect?
                  </Button>
                </Link>
                <Button variant="outline" size="xl">
                  Explore Features
                </Button>
              </div>
            </div>
          </section>

          {/* Platform Description */}
          <div className="mb-16 text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              White Label AdExchange is a scalable, fault-tolerant solution that can handle high workloads and billions of operations per second using a progressive software and technology stack.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              It is a simple but professional tool to earn unlimited income in the AdTech industry!
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The Adnexus ecosystem's technical excellence helps customers increase their revenue compared to other solutions. With leading-edge programmatic technology, our partners are sure of the result!
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="gradient-card p-8 rounded-2xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">250+</div>
              <p className="text-muted-foreground">Active customers using our technology</p>
            </div>
            <div className="gradient-card p-8 rounded-2xl text-center">
              <div className="text-3xl font-bold text-accent mb-2">40+ account managers</div>
              <p className="text-muted-foreground">Professional support team</p>
            </div>
            <div className="gradient-card p-8 rounded-2xl text-center">
              <div className="text-3xl font-bold text-success mb-2">Massive</div>
              <p className="text-muted-foreground">Gross Revenue across our ecosystem yearly</p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">SAVE TIME AND MONEY WITH WHITE-LABEL ADEXCHANGE</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
              Instead of an expensive and lengthy process of in-house software development, the Adnexus White-Label AdExchange solution will save you money, time and gives you an ultimate package of tools to increase your revenue from day one!
            </p>
            
            {/* Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="gradient-card p-8 rounded-2xl border-2 border-primary/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Adnexus WHITE LABEL ADEXCHANGE</h3>
                  <p className="text-lg font-semibold">Fast and easy way to start making money in programmatic</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">More than 150 ecosystem partners are ready to trade with</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">10+ years of our team experience in advertising is your key to success</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Ecosystem and complex solution. You will get all you need!</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Efficient and reliable software without downtimes or interruptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Cost and time-saving solution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Constantly upgrading our platform with new technologies</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Affordable</div>
                  <p className="text-sm text-muted-foreground">Starting price for 1 AdServer</p>
                </div>
              </div>

              <div className="gradient-card p-8 rounded-2xl opacity-75">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-muted-foreground mb-2">IN-HOUSE SOFTWARE DEVELOPMENT</h3>
                  <p className="text-lg font-semibold text-muted-foreground">The hard and long journey to success. Without guarantees</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Hiring high-level Dev and AdTech specialists with competitive salaries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Time and money investments in product development, infrastructure, and architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Resources for constant upgrading and maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Custom development of the connection to every market player</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground">High Revenue</div>
                  <p className="text-sm text-muted-foreground">Starting cost of Ad software development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="gradient-card p-8 rounded-2xl">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Fault-tolerant technical solution</h3>
                <p className="text-muted-foreground">
                  Adnexus provides only proven solutions with the best reliability to maximize your profit! Our development team has invested much effort in providing the most reliable software without downtimes or interruptions.
                </p>
              </div>
              <div className="gradient-card p-8 rounded-2xl">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-4">Professional support team</h3>
                <p className="text-muted-foreground">
                  The best AdTech and MarkTech industry specialists are forming our technical staff and AdOps! We take over all the development and integration work, providing an individual approach for each client.
                </p>
              </div>
              <div className="gradient-card p-8 rounded-2xl">
                <TrendingUp className="w-12 h-12 text-success mb-4" />
                <h3 className="text-xl font-semibold mb-4">Access to Adnexus Community</h3>
                <p className="text-muted-foreground">
                  By trading exclusively within the secure Adnexus Community environment, you get the opportunity to work with top partners without additional fees and commissions to get even better results!
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Adnexus AdExchange features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "VAST / oRTB Integration",
                  description: "The platform supports all versions of VAST-to-VAST, oRTB-to-VAST & VAST-to-oRTB",
                  icon: Play
                },
                {
                  title: "GZip ENCODED Requests&Responses",
                  description: "Work with the reduced amount of data transferred in Bid Requests & Bid Responses",
                  icon: Zap
                },
                {
                  title: "User Sync option for WLS Partners",
                  description: "Improved targeting, higher transparency, and better results for all sides",
                  icon: Users
                },
                {
                  title: "BUILT-IN Issues Inspector",
                  description: "Quick troubleshooting on possible no-bid reasons and any other issues",
                  icon: Shield
                },
                {
                  title: "Optimization Toolset",
                  description: "Automated algorithms will help you to achieve your goals with the least effort!",
                  icon: TrendingUp
                },
                {
                  title: "REAL-TIME DATA AND REPORTS",
                  description: "Receive real-time data and control your inventory with the next-step level of efficiency",
                  icon: Monitor
                },
                {
                  title: "Bidstream Data access",
                  description: "Get all bidstream data and analyze or optimize it using your own algorithms",
                  icon: DollarSign
                },
                {
                  title: "Global Block List",
                  description: "Manage blacklists at the entire platform level without being distracted by micromanagement",
                  icon: Shield
                }
              ].map((feature, index) => (
                <div key={index} className="gradient-card p-6 rounded-2xl">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Formats */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">All possible formats & devices to work with</h2>
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

          {/* Community Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">With Adnexus AdExchange, you become a part of Adnexus's community!</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
              By trading exclusively within the secure Adnexus Community environment, you get the opportunity to work with top partners without additional fees and commissions to get even better results!
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
                <Clock className="w-12 h-12 text-success mx-auto mb-4" />
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

export default WhiteLabelAdExchange;