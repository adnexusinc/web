import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Separator } from '@/components/ui/separator';

const DataProcessingAddendum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Processing Addendum</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  This Data Processing Addendum ("DPA") supplements the Adnexus Terms of Service and applies to the processing of Personal Data (as defined below) by Adnexus on behalf of Customer in connection with the Services.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Controller:</strong> The entity that determines the purposes and means of processing Personal Data</li>
                  <li><strong>Processor:</strong> The entity that processes Personal Data on behalf of the Controller</li>
                  <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person</li>
                  <li><strong>Data Subject:</strong> The natural person to whom Personal Data relates</li>
                  <li><strong>Processing:</strong> Any operation performed on Personal Data</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Scope and Roles</h2>
                <p className="text-muted-foreground mb-4">
                  When providing Services to Customer, Adnexus acts as a Processor and Customer acts as the Controller of Personal Data. This DPA governs Adnexus's processing of Personal Data on Customer's behalf.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Processing Instructions</h2>
                <p className="text-muted-foreground mb-4">
                  Adnexus will process Personal Data only:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>In accordance with Customer's documented instructions</li>
                  <li>As necessary to provide the Services</li>
                  <li>As required by applicable law</li>
                  <li>For Adnexus's legitimate business interests where permitted</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Security Measures</h2>
                <p className="text-muted-foreground mb-4">
                  Adnexus implements appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Encryption of Personal Data in transit and at rest</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Sub-Processors</h2>
                <p className="text-muted-foreground mb-4">
                  Customer consents to Adnexus's engagement of sub-processors for specific processing activities. Adnexus maintains a list of current sub-processors and will notify Customer of any changes.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Data Subject Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Adnexus will assist Customer in responding to Data Subject requests, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access to Personal Data</li>
                  <li>Rectification of inaccurate data</li>
                  <li>Erasure of Personal Data</li>
                  <li>Data portability</li>
                  <li>Restriction of processing</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Data Transfers</h2>
                <p className="text-muted-foreground mb-4">
                  Personal Data may be processed in countries outside the European Economic Area. Adnexus ensures appropriate safeguards are in place for such transfers, including Standard Contractual Clauses where applicable.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about this Data Processing Addendum, please contact our Data Protection Officer at{' '}
                  <a href="mailto:dpo@ad.nexus" className="text-primary hover:underline">
                    dpo@ad.nexus
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

export default DataProcessingAddendum;