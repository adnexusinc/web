import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  useCase: z.enum(['brand', 'agency', 'creator', 'other'], {
    required_error: 'Please select a use case',
  }),
  message: z.string().max(500, 'Message must be less than 500 characters').optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface StudioLeadFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const StudioLeadForm: React.FC<StudioLeadFormProps> = ({
  onSuccess,
  onCancel,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      useCase: undefined,
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      // Submit to Supabase
      const { error } = await supabase.from('studio_leads').insert([
        {
          name: values.name,
          email: values.email,
          company: values.company || null,
          use_case: values.useCase,
          message: values.message || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      // Track event (can be connected to PostHog later)
      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.capture('studio_lead_form_submitted', {
          use_case: values.useCase,
          has_company: !!values.company,
          has_message: !!values.message,
        });
      }

      setIsSuccess(true);
      toast.success('Request submitted successfully!', {
        description: 'Our team will reach out to you within 24 hours.',
      });

      // Wait a moment before calling onSuccess to show the success state
      setTimeout(() => {
        form.reset();
        if (onSuccess) onSuccess();
      }, 2000);
    } catch (error) {
      console.error('Error submitting lead form:', error);
      toast.error('Failed to submit request', {
        description: 'Please try again or contact us directly at support@ad.nexus',
      });

      // Track error
      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.capture('studio_lead_form_error', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
        <p className="text-white/70 max-w-md">
          Thank you for your interest in Adnexus Studio. Our team will review your request
          and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Request Studio Access</h2>
        <p className="text-white/70">
          Fill out the form below and our team will set up your account and schedule an
          onboarding call.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-white/5 border-white/10 focus:border-white/30"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      {...field}
                      className="bg-white/5 border-white/10 focus:border-white/30"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Inc."
                    {...field}
                    className="bg-white/5 border-white/10 focus:border-white/30"
                  />
                </FormControl>
                <FormDescription className="text-white/50">Optional</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="useCase"
            render={({ field }) => (
              <FormItem>
                <FormLabel>I am a *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 focus:border-white/30">
                      <SelectValue placeholder="Select your use case" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="brand">Brand / Advertiser</SelectItem>
                    <SelectItem value="agency">Agency</SelectItem>
                    <SelectItem value="creator">Content Creator</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your needs, expected volume, timeline, etc."
                    className="bg-white/5 border-white/10 focus:border-white/30 resize-none"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-white/50">
                  Optional • Max 500 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-3 justify-end pt-4">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </Button>
          </div>
        </form>
      </Form>

      <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
        <p className="text-sm text-white/70">
          <strong className="text-white">Privacy Notice:</strong> Your information will
          only be used to contact you about Adnexus Studio. We never share your data with
          third parties.
        </p>
      </div>
    </div>
  );
};
