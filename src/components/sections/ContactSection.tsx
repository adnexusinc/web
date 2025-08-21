import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interestArea: '',
    companySize: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert({
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message || null,
          interest_area: formData.interestArea || null,
          company_size: formData.companySize || null
        });

      if (error) {
        console.error('Error submitting contact form:', error);
        toast({
          title: "Error",
          description: "Failed to send your message. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          interestArea: '',
          companySize: ''
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error", 
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 gradient-card rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Let's Be in Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to{' '}
            <span className="text-gradient">Connect Now?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fill out the contact form, and a personal manager will contact you promptly to discuss 
            your programmatic advertising needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="gradient-card rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
            <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Interest Area
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('interestArea', value)} value={formData.interestArea}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ADX">ADX</SelectItem>
                      <SelectItem value="SSP">SSP</SelectItem>
                      <SelectItem value="DSP">DSP</SelectItem>
                      <SelectItem value="Network">Network</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company Size
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('companySize', value)} value={formData.companySize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 people</SelectItem>
                      <SelectItem value="10-100">10-100 people</SelectItem>
                      <SelectItem value="100+">100+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your advertising goals and how we can help..."
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full group" 
                disabled={isSubmitting}
              >
                <Send className="group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="gradient-card rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Support</h4>
                    <p className="text-muted-foreground">support@ad.xyz</p>
                    <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">24/7 Manager Support</h4>
                    <p className="text-muted-foreground">Available 7 days a week</p>
                    <p className="text-sm text-muted-foreground">Personal manager assigned after signup</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Presence</h4>
                    <p className="text-muted-foreground">Serving clients worldwide</p>
                    <p className="text-sm text-muted-foreground">250+ partners in our network</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="gradient-card rounded-2xl p-8 backdrop-blur-sm border border-primary/20 text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-xl font-bold mb-2">Ready to Join?</h4>
              <p className="text-muted-foreground mb-4">
                Start earning with ADXYZ ecosystem today
              </p>
              <div className="text-sm text-success font-semibold">
                ✓ Free consultation<br />
                ✓ Custom solution package<br />
                ✓ Same-day response
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};