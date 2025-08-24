import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Integrate with your email service
      // For now, just show success message
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Thank you! We\'ll be in touch.');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
        disabled={isSubmitting}
      />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="group"
      >
        {isSubmitting ? 'Submitting...' : 'Get Access'}
        {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </Button>
    </form>
  );
};