import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using the Adnexus platform, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Platform Services</h2>
                <p className="text-muted-foreground mb-4">
                  Adnexus provides programmatic advertising technology including Supply Side Platform (SSP), Demand Side Platform (DSP), and Ad Exchange (ADX) services for premium CTV/OTT inventory.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Real-time bidding capabilities</li>
                  <li>Premium inventory access</li>
                  <li>White-label solutions</li>
                  <li>Analytics and reporting tools</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  Users are responsible for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Maintaining account security</li>
                  <li>Providing accurate information</li>
                  <li>Compliance with applicable laws and regulations</li>
                  <li>Responsible use of platform resources</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms are established based on individual agreements. Standard terms include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Net 30 payment terms for qualified accounts</li>
                  <li>Minimum spend requirements may apply</li>
                  <li>Revenue sharing models for publishers</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Adnexus shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@ad.nexus" className="text-primary hover:underline">
                    legal@ad.nexus
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;