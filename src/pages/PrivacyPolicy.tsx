import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, information we obtain automatically when you use our services, and information from third parties.
                </p>
                <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Account registration information</li>
                  <li>Contact information and communications</li>
                  <li>Payment and billing information</li>
                  <li>Campaign and advertising data</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Device and browser information</li>
                  <li>IP addresses and location data</li>
                  <li>Usage patterns and analytics</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide and improve our advertising platform services</li>
                  <li>Process transactions and manage accounts</li>
                  <li>Communicate with you about our services</li>
                  <li>Analyze usage patterns and optimize performance</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With service providers and business partners</li>
                  <li>For legal compliance and law enforcement</li>
                  <li>In connection with business transfers</li>
                  <li>With your consent or at your direction</li>
                  <li>Aggregate, non-identifying information for business purposes</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights and Choices</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your personal information</li>
                  <li>Data portability</li>
                  <li>Opt-out of certain data processing</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@ad.nexus" className="text-primary hover:underline">
                    privacy@ad.nexus
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

export default PrivacyPolicy;