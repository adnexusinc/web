import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Separator } from '@/components/ui/separator';
import { Shield, CheckCircle, Lock, Users, FileText, Settings } from 'lucide-react';

const GDPRCompliance = () => {
  const complianceFeatures = [
    {
      icon: Shield,
      title: "Data Protection by Design",
      description: "Privacy considerations integrated into every aspect of our platform development and operations."
    },
    {
      icon: Lock,
      title: "Secure Data Processing",
      description: "Advanced encryption and security measures to protect personal data throughout its lifecycle."
    },
    {
      icon: Users,
      title: "Data Subject Rights",
      description: "Comprehensive tools to support individual rights including access, rectification, and erasure."
    },
    {
      icon: FileText,
      title: "Transparent Documentation",
      description: "Clear privacy policies and processing documentation available to all stakeholders."
    },
    {
      icon: Settings,
      title: "Consent Management",
      description: "Robust consent mechanisms and preference management for data processing activities."
    },
    {
      icon: CheckCircle,
      title: "Regular Auditing",
      description: "Continuous monitoring and auditing of data protection practices and compliance measures."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">GDPR Compliance</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Adnexus is committed to protecting your privacy and ensuring full compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>GDPR Compliant Since May 2018</span>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our GDPR Compliance Framework</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="gradient-card p-6 rounded-xl border border-primary/20">
                    <div className="gradient-secondary p-3 rounded-lg w-fit mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Legal Basis for Processing</h2>
                  <p className="text-muted-foreground mb-4">
                    Adnexus processes personal data based on various legal grounds under GDPR, including:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong>Consent:</strong> Where you have given clear consent for specific processing activities</li>
                    <li><strong>Contract:</strong> Processing necessary for contract performance or pre-contractual measures</li>
                    <li><strong>Legal Obligation:</strong> Processing required to comply with legal requirements</li>
                    <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
                  </ul>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Your Rights Under GDPR</h2>
                  <p className="text-muted-foreground mb-4">
                    As a data subject, you have the following rights:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong>Right of Access:</strong> Request information about your personal data processing</li>
                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal data under certain conditions</li>
                    <li><strong>Right to Restrict Processing:</strong> Request limitation of processing activities</li>
                    <li><strong>Right to Data Portability:</strong> Request transfer of your data in a structured format</li>
                    <li><strong>Right to Object:</strong> Object to certain types of processing</li>
                    <li><strong>Rights Related to Automated Decision-Making:</strong> Rights regarding automated profiling</li>
                  </ul>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Data Protection Measures</h2>
                  <p className="text-muted-foreground mb-4">
                    We implement comprehensive technical and organizational measures:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>End-to-end encryption for data in transit and at rest</li>
                    <li>Regular security assessments and penetration testing</li>
                    <li>Access controls with role-based permissions</li>
                    <li>Data minimization and purpose limitation principles</li>
                    <li>Secure data centers with physical security controls</li>
                    <li>Employee training on data protection and privacy</li>
                  </ul>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
                  <p className="text-muted-foreground mb-4">
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was collected:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Account data: Retained while account is active plus 3 years</li>
                    <li>Transaction data: Retained for 7 years for legal compliance</li>
                    <li>Marketing data: Retained until consent is withdrawn</li>
                    <li>Analytics data: Aggregated and anonymized after 26 months</li>
                  </ul>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. International Data Transfers</h2>
                  <p className="text-muted-foreground mb-4">
                    When transferring personal data outside the EEA, we ensure appropriate safeguards:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Standard Contractual Clauses approved by the European Commission</li>
                    <li>Adequacy decisions for certain countries</li>
                    <li>Additional security measures for high-risk transfers</li>
                    <li>Regular review of transfer mechanisms and requirements</li>
                  </ul>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Contact Our Data Protection Officer</h2>
                  <p className="text-muted-foreground mb-4">
                    For any questions about GDPR compliance or to exercise your rights, contact our Data Protection Officer:
                  </p>
                  <div className="bg-card p-4 rounded-lg border">
                    <p className="text-muted-foreground">
                      Email: <a href="mailto:dpo@ad.nexus" className="text-primary hover:underline">dpo@ad.nexus</a><br />
                      Address: Adnexus Data Protection Officer<br />
                      123 Privacy Street, London, UK<br />
                      Response time: Within 30 days of receipt
                    </p>
                  </div>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Supervisory Authority</h2>
                  <p className="text-muted-foreground">
                    You have the right to lodge a complaint with a supervisory authority if you believe your data protection rights have been violated. Our lead supervisory authority is the UK Information Commissioner's Office (ICO).
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GDPRCompliance;