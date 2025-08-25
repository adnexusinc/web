import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Separator } from '@/components/ui/separator';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our platform.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.
                </p>

                <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  We use analytics cookies to understand how visitors interact with our website, helping us improve user experience and platform performance.
                </p>

                <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies remember your preferences and settings to provide a more personalized experience.
                </p>

                <h3 className="text-xl font-semibold mb-3">Advertising Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  As an advertising technology platform, we use cookies to deliver relevant ads and measure campaign effectiveness while respecting privacy regulations.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Third-Party Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Our platform may include cookies from third-party services such as:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Advertising partners for campaign measurement</li>
                  <li>Customer support tools</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Browser settings: Most browsers allow you to refuse cookies or delete existing ones</li>
                  <li>Cookie consent tools: Use our cookie preference center when available</li>
                  <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
                  <li>Privacy settings: Adjust privacy settings in your browser</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Cookie Retention</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are retained for different periods depending on their purpose:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Session cookies: Deleted when you close your browser</li>
                  <li>Persistent cookies: Remain until expiration or manual deletion</li>
                  <li>Analytics cookies: Typically retained for 24 months</li>
                  <li>Advertising cookies: Retention varies by partner and regulation</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about our Cookie Policy, please contact us at{' '}
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

export default CookiePolicy;