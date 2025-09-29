import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, ArrowLeft, CreditCard, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const RetainerPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const features = [
    'Dedicated programmatic advertising team',
    'Full access to DSP, SSP, and ADX platforms',
    'Custom AI-powered campaign optimization',
    'Real-time performance analytics',
    'Priority support and account management',
    'Unlimited campaign requests',
    'Advanced audience targeting',
    'Cross-channel advertising management',
    'Monthly strategy sessions',
    'Custom reporting dashboards',
    'API access for integration',
    'White-label solutions available'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Here you would integrate with your Stripe account for Adnexus
    // For now, we'll simulate the process
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "Our team will contact you within 24 hours to finalize your retainer.",
      });
      setIsProcessing(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Information */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Enterprise Programmatic Advertising
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Unlock the full potential of programmatic advertising with our premium retainer service.
            </p>

            <div className="mb-8">
              <div className="text-3xl font-bold mb-2">$9,999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              <p className="text-muted-foreground">Minimum 3-month commitment</p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">Sub-millisecond latency for real-time bidding</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Enterprise Security</h3>
                  <p className="text-sm text-muted-foreground">SOC 2 certified with end-to-end encryption</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">White Glove Service</h3>
                <p className="text-sm text-muted-foreground">
                  Your dedicated team includes strategists, data scientists, and creative experts
                  working exclusively on maximizing your advertising ROI.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Start Your Retainer</CardTitle>
                <CardDescription>
                  Complete the form below and our team will contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">Tell us about your advertising goals</Label>
                    <textarea
                      id="message"
                      name="message"
                      className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Current monthly ad spend, target audience, campaign objectives..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Start $9,999/mo Retainer
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-center text-sm text-muted-foreground">
                <p>By submitting, you agree to our terms and conditions. No setup fees. Cancel anytime with 30 days notice.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetainerPage;