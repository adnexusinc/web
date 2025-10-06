import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalComEmbed } from '@/components/CalComEmbed';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';

export default function BookDemo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    industry: '',
    budget: '',
    company: '',
    name: ''
  });

  const industries = [
    'Ecommerce', 'Apps & Gaming', 'B2B/SaaS', 'Finance', 'Healthcare',
    'Automotive', 'Education', 'Entertainment', 'Retail', 'Other'
  ];

  const budgets = [
    'Under $1,000/month', '$1,000 - $5,000/month', '$5,000 - $10,000/month',
    '$10,000 - $25,000/month', '$25,000 - $50,000/month', '$50,000+/month'
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation bannerVisible={false} />

      <div className="container mx-auto px-4 pt-32 pb-20 max-w-2xl">
        {step < 4 ? (
          <Card className="bg-white/5 border-white/10 p-8">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 w-16 rounded-full transition-all ${
                    s <= step ? 'bg-blue-600' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Email */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">Let's get started</h1>
                  <p className="text-white/60">What's your work email?</p>
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    required
                  />
                </div>
                <Button
                  onClick={handleNext}
                  disabled={!formData.email}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Step 2: Industry + Name */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">Tell us about yourself</h1>
                  <p className="text-white/60">This helps us personalize your demo</p>
                </div>
                <div>
                  <Label htmlFor="name" className="text-white">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="industry" className="text-white">Industry</Label>
                  <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => (
                        <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleBack} variant="outline" className="flex-1 border-white/20 text-white">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!formData.name || !formData.industry}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Budget */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">What's your monthly ad budget?</h1>
                  <p className="text-white/60">This helps us tailor the demo to your needs</p>
                </div>
                <div>
                  <Label htmlFor="budget" className="text-white">Monthly Ad Budget</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((bud) => (
                        <SelectItem key={bud} value={bud}>{bud}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="company" className="text-white">Company (Optional)</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleBack} variant="outline" className="flex-1 border-white/20 text-white">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!formData.budget}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Book Your Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </Card>
        ) : (
          /* Step 4: Cal.com Embed with Pre-filled Data */
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full mb-4">
                <Check className="h-4 w-4" />
                <span className="font-semibold">Almost there!</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">Pick your time</h1>
              <p className="text-white/60">Choose a time that works best for you</p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <CalComEmbed
                calLink="adnexus/15min"
                email={formData.email}
                name={formData.name}
                height="700px"
              />
            </div>

            <div className="text-center mt-6">
              <Button onClick={() => setStep(1)} variant="ghost" className="text-white/60">
                <ArrowLeft className="mr-2 h-4 w-4" /> Start Over
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
