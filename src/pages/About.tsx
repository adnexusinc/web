import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 -mt-24 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            About Adnexus
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            A team of industry-proven experts with 10+ years of track record developing cutting-edge AdTech ecosystem
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="gradient-card p-8 rounded-2xl text-center">
              <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-4xl font-bold text-gradient mb-2">10+</h3>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="gradient-card p-8 rounded-2xl text-center">
              <Users className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-4xl font-bold text-gradient mb-2">230+</h3>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </div>
            <div className="gradient-card p-8 rounded-2xl text-center">
              <Award className="w-12 h-12 text-success mb-4 mx-auto" />
              <h3 className="text-4xl font-bold text-gradient mb-2">300%</h3>
              <p className="text-muted-foreground">Average ROI</p>
            </div>
          </div>

          <div className="gradient-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              We bridge the gap between advertisers and publishers through innovative programmatic advertising solutions. 
              Our white-label platforms empower businesses to launch their own advertising ecosystems and maximize revenue 
              from day one.
            </p>
          </div>

          <div className="text-center">
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;