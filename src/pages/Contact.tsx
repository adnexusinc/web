import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageSquare, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is standing by to help you transform your advertising strategy.
              Call, email, or visit us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>
                  Speak with our team directly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="tel:+18442363987" className="text-2xl font-bold hover:text-primary transition-colors">
                  +1 844 AD-NEXUS
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  (844-236-3987)
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>
                  Get a response within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:support@ad.nexus" className="text-xl font-bold hover:text-primary transition-colors">
                  support@ad.nexus
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  For support and inquiries
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>
                  Instant messaging support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://wa.me/18442363987" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Chat on WhatsApp
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Fast response guaranteed
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Get Started</CardTitle>
                <CardDescription>
                  Schedule a personalized walkthrough
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Schedule Now
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  30-minute consultation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Hours & Support */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9AM - 6PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday - Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-4">
                    Emergency support available 24/7 for enterprise clients
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Headquarters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    Adnexus Technologies Inc.
                  </p>
                  <p className="text-muted-foreground mb-2">
                    New York, NY
                  </p>
                  <p className="text-muted-foreground">
                    United States
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Quick Help?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our support resources or contact us directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18442363987">
              <Button size="lg">
                Call: +1 844 AD-NEXUS
              </Button>
            </a>
            <a href="mailto:support@ad.nexus">
              <Button size="lg" variant="outline">
                Email: support@ad.nexus
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;