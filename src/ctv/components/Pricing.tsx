import React from 'react';
import { Container, Box, Link, Stack } from '@hanzo/ui/primitives';
import {
  HeroWithEmailCapture,
  PricingTierCard,
  FeatureGrid,
  FAQSection
} from '@hanzo/ui/blocks';
import pricingData from '../data/pricing.json';

export default function Pricing() {
  // Transform features into categorized feature grid format
  const featureCategories = [
    {
      title: 'Targeting',
      description: 'Reach your ideal audience with precision targeting options',
      details: pricingData.features.targeting
    },
    {
      title: 'Creative Tools',
      description: 'Professional creative tools and hosting solutions',
      details: pricingData.features.creatives
    },
    {
      title: 'Reporting & Analytics',
      description: 'Track performance with comprehensive reporting',
      details: pricingData.features.reporting
    },
    {
      title: 'Content Access',
      description: 'Reach viewers across premium streaming platforms',
      details: pricingData.features.content
    },
    {
      title: 'Optimization',
      description: 'Maximize campaign performance with smart bidding',
      details: pricingData.features.optimization
    },
    {
      title: 'Support & Billing',
      description: '24/7 support and flexible payment options',
      details: pricingData.features.support
    }
  ];

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    // TODO: Implement email capture logic
  };

  return (
    <Container maxWidth="7xl" className="vibe-page">
      <Box as="header" className="py-4 border-b">
        <Stack direction="row" spacing={6} align="center">
          <Link href="/" className="text-2xl font-bold">Vibe</Link>
        </Stack>
      </Box>

      <Box as="main">
        {/* Hero Section with Email Capture */}
        <HeroWithEmailCapture
          heading={pricingData.meta.headline}
          description={pricingData.meta.subheadline}
          emailPlaceholder="Enter your email to get started"
          buttonText="Get Started"
          onEmailSubmit={handleEmailSubmit}
          socialProof={{
            text: `Starts at ${pricingData.meta.minimum_budget} • ${pricingData.meta.commitment}`
          }}
          variant="centered"
        />

        {/* Pricing Tier Section */}
        <Box className="py-16 bg-muted/20">
          <Container maxWidth="6xl">
            <div className="max-w-4xl mx-auto">
              {pricingData.pricing_tiers.map((tier, index) => (
                <PricingTierCard
                  key={index}
                  name={tier.name}
                  price={tier.starting_price}
                  billingPeriod={tier.billing_period}
                  description={`${tier.description} • CPM: ${tier.cpm_range}`}
                  features={tier.features}
                  cta={{
                    text: "Get Started",
                    href: "/signup"
                  }}
                  variant="featured"
                  popular
                />
              ))}
            </div>
          </Container>
        </Box>

        {/* Feature Grid */}
        <FeatureGrid
          heading="Everything You Need to Succeed"
          subheading="Features"
          features={featureCategories}
          columns={3}
          variant="cards"
        />

        {/* FAQ Section - Using placeholder since data has empty array */}
        <FAQSection
          title="Have Questions?"
          description="Get in touch with our team to learn more about Vibe's Connected TV advertising platform"
          faqs={[
            {
              question: "What is the minimum budget to get started?",
              answer: `You can start advertising on Connected TV with as little as ${pricingData.meta.minimum_budget}. There's no long-term commitment required.`
            },
            {
              question: "What is CPM and how does it work?",
              answer: `CPM (Cost Per Mille) is the cost per thousand impressions. Our CPM ranges from ${pricingData.pricing_tiers[0].cpm_range}, depending on your targeting and campaign settings.`
            },
            {
              question: "What platforms and channels can I advertise on?",
              answer: "You can reach viewers across premium streaming apps, TV channels, live sports, and live shows & movies. We provide access to top-tier Connected TV inventory."
            },
            {
              question: "Do you provide creative services?",
              answer: "Yes! Vibe Studio provides creative tools, hosting, compression & resampling, and A/B testing to help you create and optimize your TV ads."
            },
            {
              question: "How do I track campaign performance?",
              answer: "We offer comprehensive delivery reporting, performance measurement, and tracking integrations with Google Analytics, MMPs, and custom pixels."
            }
          ]}
          variant="accordion"
        />
      </Box>

      <Box as="footer" className="py-8 border-t mt-16">
        <p className="text-sm text-gray-600 text-center">© 2025 Vibe, Inc.</p>
      </Box>
    </Container>
  );
}
