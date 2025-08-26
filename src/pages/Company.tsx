import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { 
  Users, 
  Target, 
  Trophy, 
  ArrowRight,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  MapPin,
  Mail,
  Linkedin
} from "lucide-react";

const Company = () => {
  const companyValues = [
    {
      icon: Target,
      title: "Performance First",
      description: "Every decision is driven by measurable results and client success. We don't just deliver impressions - we deliver outcomes."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Complete transparency in our technology, pricing, and performance. Building long-term partnerships based on trust."
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Pioneering the future of programmatic advertising with cutting-edge AI and machine learning technologies."
    },
    {
      icon: Heart,
      title: "Client Obsession",
      description: "Obsessively focused on client success. Your growth is our mission, and we'll go the extra mile to achieve it."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former VP of Programmatic at Google. Led billions in programmatic revenue.",
      location: "San Francisco, CA"
    },
    {
      name: "Marcus Rodriguez", 
      role: "CTO & Co-Founder",
      bio: "Ex-Amazon AWS. Built infrastructure handling 10B+ daily requests.",
      location: "Seattle, WA"
    },
    {
      name: "Emily Watson",
      role: "VP of Client Success",
      bio: "15+ years in AdTech. Former Director at The Trade Desk.",
      location: "New York, NY"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Machine Learning PhD from Stanford. Former Principal at Netflix.",
      location: "Los Angeles, CA"
    }
  ];

  const companyStats = [
    { metric: "Millions", label: "Ad Spend Managed" },
    { metric: "100+", label: "Enterprise Clients" },
    { metric: "5B+", label: "Daily Impressions" },
    { metric: "340%", label: "Average Client ROAS" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building the Future of <span className="performance-number">Programmatic Advertising</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're a team of AdTech veterans, engineers, and growth experts 
              obsessed with delivering impossible performance for enterprise advertisers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Join Our Mission
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Leadership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 px-4 border-y border-border bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {companyStats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold performance-number">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="performance-number">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                To democratize access to premium advertising inventory and 
                deliver enterprise-grade performance for brands of all sizes.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2020 by former executives from Google, Amazon, and The Trade Desk, 
                Adnexus was born from the frustration of enterprise advertisers being locked 
                out of premium inventory or paying excessive fees for mediocre performance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Global Reach</h4>
                    <p className="text-sm text-muted-foreground">
                      Serving clients across 80+ countries with localized expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Award-Winning</h4>
                    <p className="text-sm text-muted-foreground">
                      Recognized as "AdTech Innovation Leader" by Marketing Land 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Client-First</h4>
                    <p className="text-sm text-muted-foreground">
                      98% client retention rate with industry-leading support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold performance-number mb-2">2020</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold performance-number mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold performance-number mb-2">Substantial</div>
                <div className="text-sm text-muted-foreground">Series B Raised</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold performance-number mb-2">15</div>
                <div className="text-sm text-muted-foreground">Global Offices</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="performance-number">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do, from product development to client relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Leadership <span className="performance-number">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry veterans with decades of combined experience building and scaling AdTech platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {member.location}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work with <span className="performance-number">Industry Leaders</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the growing list of enterprise brands achieving impossible growth with Adnexus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Start Partnership
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;