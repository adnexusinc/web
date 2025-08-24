import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Building, TrendingUp, Users, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface SignUpFormData {
  email: string;
  company: string;
  employeeCount: string;
  fundingStage: string;
  role: string;
}

export const PremiumSignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    company: '',
    employeeCount: '',
    fundingStage: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.company || !formData.employeeCount || !formData.fundingStage) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Integrate with your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Welcome to AdNexus! Our team will be in touch within 24 hours.');
      setFormData({
        email: '',
        company: '',
        employeeCount: '',
        fundingStage: '',
        role: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="premium-card">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Get Started with AdNexus</h3>
          <p className="text-muted-foreground">
            Join the next generation of programmatic advertising
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="founder@yourcompany.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Company Size</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, employeeCount: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      1-10 employees
                    </div>
                  </SelectItem>
                  <SelectItem value="11-50">
                    <div className="flex items-center gap-2">
                      <Building size={16} />
                      11-50 employees
                    </div>
                  </SelectItem>
                  <SelectItem value="51-200">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} />
                      51-200 employees
                    </div>
                  </SelectItem>
                  <SelectItem value="200+">
                    <div className="flex items-center gap-2">
                      <Zap size={16} />
                      200+ employees
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Funding Stage</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, fundingStage: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select funding stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bootstrapped">Bootstrapped</SelectItem>
                  <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                  <SelectItem value="seed">Seed</SelectItem>
                  <SelectItem value="series-a">Series A</SelectItem>
                  <SelectItem value="series-b+">Series B+</SelectItem>
                  <SelectItem value="public">Public Company</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Your Role</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="founder">Founder/CEO</SelectItem>
                <SelectItem value="cto">CTO/Technical Lead</SelectItem>
                <SelectItem value="marketing">Marketing Director</SelectItem>
                <SelectItem value="adops">Ad Operations</SelectItem>
                <SelectItem value="business-dev">Business Development</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="premium-button w-full group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Processing...'
            ) : (
              <>
                Get Premium Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By signing up, you agree to our Terms of Service and Privacy Policy.
            <br />
            Premium inventory • Enterprise support • Custom integrations
          </p>
        </form>
      </div>
    </div>
  );
};