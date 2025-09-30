import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ChevronDown, ChevronUp, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is CTV advertising and how does it work?",
        answer: "Connected TV (CTV) advertising allows you to show video ads on streaming services like Hulu, Roku, Samsung TV+, and 500+ premium channels. Your ads appear during content breaks, just like traditional TV, but with precise targeting and real-time analytics. You only pay when your ad is viewed."
      },
      {
        question: "How much does it cost to advertise on Adnexus?",
        answer: "Self-service CTV advertising starts at just $25/day ($750/month minimum). CPM rates range from $15-35 depending on targeting and inventory. For full-service agency support with creative production and campaign management, our premium tier is $9,999/month."
      },
      {
        question: "What's the minimum commitment?",
        answer: "For self-service DSP: No commitment required - start and stop anytime. For the $9,999/month premium agency service: 3-month minimum, then cancel with 30 days notice."
      },
      {
        question: "How quickly can I launch a campaign?",
        answer: "You can launch a CTV campaign in as little as 5 minutes using our self-service DSP. Simply sign up, upload your video creative (or create one in our Studio), set your targeting, and go live. Our team can help you get started within 24 hours."
      }
    ]
  },
  {
    category: "Platform & Features",
    questions: [
      {
        question: "What channels and streaming services do you support?",
        answer: "We have direct integrations with 500+ premium channels including CNN, Fox News, ESPN, Hulu, Roku, Samsung TV+, Paramount+, Peacock, Tubi, Discovery+, and all major streaming platforms. Your ads appear on actual TV screens and streaming devices."
      },
      {
        question: "What targeting options are available?",
        answer: "We offer comprehensive targeting including: Geographic (zip code, DMA, radius), Demographic (age, gender, income, household size), Interest & Behavioral, Retargeting (website visitors, app users), Custom audiences (email lists, CRM data), and Contextual targeting (content categories, genres)."
      },
      {
        question: "Do I need my own video creative?",
        answer: "No! Use our Adnexus Studio to create professional TV ads in minutes with AI assistance. Or choose our $9,999/month premium service for full video production, including concept development, scripting, filming, and post-production."
      },
      {
        question: "What analytics and reporting do you provide?",
        answer: "Real-time dashboard with: Impressions & reach, View completion rates, Cost per view (CPV) & CPM, Geographic performance, Device & channel breakdown, Website visits & conversions, ROAS & attribution tracking, and Custom reports & exports."
      }
    ]
  },
  {
    category: "Premium Agency Service ($9,999/mo)",
    questions: [
      {
        question: "What's included in the $9,999/month premium tier?",
        answer: "Full-service programmatic advertising with: Dedicated account manager, Professional video production (unlimited), Campaign strategy & optimization, Creative design services, Media buying across DSP/SSP/ADX, Performance reporting & analysis, 24/7 priority support, and Custom audience development."
      },
      {
        question: "How many campaigns can I run?",
        answer: "Unlimited campaigns across all channels and platforms. Your dedicated team will manage campaign strategy, optimization, creative rotation, and budget allocation to maximize your results."
      },
      {
        question: "Do you provide video production?",
        answer: "Yes! Includes unlimited video production: concept development, scriptwriting, professional filming (or stock footage), motion graphics & animation, sound design & music, and all formats (15s, 30s, 60s) optimized for CTV."
      },
      {
        question: "What's your onboarding process?",
        answer: "After signing up: Day 1: Kickoff call with your dedicated team, brand discovery & asset collection. Days 2-3: Campaign strategy development, audience research. Week 1: First creative concepts delivered. Week 2: Campaign launch with optimization. Ongoing: Weekly reporting and continuous optimization."
      }
    ]
  },
  {
    category: "Billing & Support",
    questions: [
      {
        question: "How do you bill for services?",
        answer: "Self-service: Media spend billed monthly via credit card or wire transfer. Premium agency: $9,999/month + media spend, billed monthly. Quarterly and annual payment options available with discounts."
      },
      {
        question: "What's your support availability?",
        answer: "Self-service: 24/7 platform access with email support (response within 24 hours). Premium agency: Dedicated account manager available Monday-Friday 9am-6pm EST, with 24/7 emergency support for critical issues."
      },
      {
        question: "How do I contact support?",
        answer: "Multiple ways to reach us: Phone: +1 844 AD-NEXUS (844-236-3987), Email: support@ad.nexus, WhatsApp: Live chat available, Portal: In-platform messaging, or Book a demo: cal.com/adnexus"
      },
      {
        question: "Can I upgrade or change my plan?",
        answer: "Yes! Upgrade from self-service to premium anytime - your dedicated team will be assigned within 24 hours. Downgrades can be processed at the end of your billing cycle."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What video formats do you accept?",
        answer: "We accept MP4, MOV, and other standard formats. Recommended specs: 1920x1080 (16:9), H.264 codec, 15-60 seconds duration. Our platform automatically optimizes for different streaming services and devices."
      },
      {
        question: "How do you track conversions and ROAS?",
        answer: "Multiple tracking methods: Website pixel tracking, Google Analytics integration, Mobile measurement partners (MMPs), Server-to-server postbacks, CRM integration, Phone call tracking, and Store visit attribution."
      },
      {
        question: "Is there a minimum media spend?",
        answer: "Self-service: $750/month ($25/day minimum). Premium agency: Typically $5,000-10,000/month media spend, but flexible based on your goals."
      },
      {
        question: "Do you support programmatic guaranteed deals?",
        answer: "Yes! We support PMP (Private Marketplace) deals, programmatic guaranteed, and direct deals with premium publishers. Contact your account manager to set up private inventory deals."
      }
    ]
  }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about CTV advertising with Adnexus
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqData.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const id = `${catIndex}-${qIndex}`;
                    const isOpen = openIndex === id;
                    return (
                      <Card key={id} className="p-6 hover:shadow-lg transition-shadow">
                        <button
                          className="w-full flex justify-between items-start text-left gap-4"
                          onClick={() => toggleFAQ(id)}
                        >
                          <h3 className="text-lg font-semibold">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="mt-4 text-muted-foreground leading-relaxed">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is here to help 24/7
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a href="tel:+18442363987" className="text-primary hover:underline">
                  +1 844 AD-NEXUS
                </a>
                <p className="text-sm text-muted-foreground mt-1">(844-236-3987)</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a href="mailto:support@ad.nexus" className="text-primary hover:underline">
                  support@ad.nexus
                </a>
                <p className="text-sm text-muted-foreground mt-1">24hr response time</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/18442363987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Chat with us
                </a>
                <p className="text-sm text-muted-foreground mt-1">Instant messaging</p>
              </Card>
            </div>

            <div className="mt-8">
              <a href="https://cal.com/adnexus" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Book a Demo Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;