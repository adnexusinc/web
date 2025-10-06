import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalComEmbed } from '@/components/CalComEmbed';
import { ArrowRight, Star, Calendar } from 'lucide-react';

export default function BookDemo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    industry: '',
    budget: '',
    name: ''
  });

  const industries = ['Ecommerce', 'Apps & Gaming', 'B2B/SaaS', 'Finance', 'Healthcare', 'Automotive', 'Education', 'Entertainment', 'Retail', 'Other'];
  const budgets = ['Under $1K/mo', '$1K-$5K/mo', '$5K-$10K/mo', '$10K-$25K/mo', '$25K-$50K/mo', '$50K+/mo'];
  const clientLogos = ['Microsoft', 'Google', 'NVIDIA', 'Damon Motorcycles', 'Bellabeat', 'Triller', 'Unikrn', 'Cover.Build', 'Casper Labs', 'Myle'];

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left - White Form */}
      <div className="bg-white text-black p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <img src="/logo.png" alt="Adnexus" className="h-8" />
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Enter your work email</h2>
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="What's your work email?"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pr-12 h-14 text-lg border-gray-300"
                    required
                  />
                  <Calendar className="absolute right-4 top-4 h-6 w-6 text-red-500" />
                </div>
                <Button
                  onClick={() => setStep(2)}
                  disabled={!formData.email}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  Submit
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Tell us about yourself</h2>
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 border-gray-300"
                />
                <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                  <SelectTrigger className="h-12 border-gray-300">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((ind) => <SelectItem key={ind} value={ind}>{ind}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!formData.name || !formData.industry}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Continue <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">What's your budget?</h2>
              <div className="space-y-4">
                <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger className="h-12 border-gray-300">
                    <SelectValue placeholder="Select monthly budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgets.map((bud) => <SelectItem key={bud} value={bud}>{bud}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Button
                  onClick={() => setStep(4)}
                  disabled={!formData.budget}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Book Your Demo <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="h-full">
              <CalComEmbed
                calLink="adnexus/15min"
                email={formData.email}
                name={formData.name}
                height="700px"
              />
            </div>
          )}
        </div>
      </div>

      {/* Right - Black Marketing Content */}
      <div className="bg-black text-white p-12 flex flex-col justify-center">
        <div className="max-w-xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Book a demo and launch your TV ads in 5 minutes.
          </h1>
          <p className="text-xl text-white/70 mb-12">
            Schedule a demo with our TV ad experts to learn how Adnexus can help you grow your business.
          </p>

          <div className="mb-12">
            <p className="text-sm text-white/40 uppercase tracking-wider mb-6">TRUSTED BY OVER 100 BRANDS</p>
            <div className="grid grid-cols-2 gap-6">
              {clientLogos.map((logo, i) => (
                <div key={i} className="text-white/60 font-semibold text-sm">{logo}</div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <span className="text-white/70">Rated 4.9 out of 5 on Trust Pilot</span>
          </div>
        </div>
      </div>
    </div>
  );
}
