import React from 'react';
import GradientBackground from './GradientBackground';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { buttonModifiers } from '@/lib/button-utils';

const AICapabilities = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GradientBackground variant="secondary" intensity="medium" className="absolute inset-0 z-0" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Platform Solutions</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Transforming advertising challenges into programmatic opportunities with enterprise-grade CTV capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-8 hover:border-border/60 transition-all">
            <div className="flex items-center justify-center h-48 mb-6 overflow-hidden">
              <img
                src="/images/graphics/ai-nodes.svg"
                alt="Campaign network visualization"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Intelligent Targeting</h3>
            <p className="text-foreground/70 mb-4">
              Build data-driven campaigns that learn and evolve with your audience, creating smarter advertising operations and insights.
            </p>
            <p className="text-foreground/60 text-sm">Applications: Audience targeting, campaign optimization, performance prediction</p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-8 hover:border-border/60 transition-all">
            <div className="flex items-center justify-center h-48 mb-6 overflow-hidden">
              <img
                src="/images/graphics/data-wave.svg"
                alt="Analytics visualization"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
            <p className="text-foreground/70 mb-4">
              Transform campaign data into actionable insights and forecasts that help you anticipate trends and viewer preferences.
            </p>
            <p className="text-foreground/60 text-sm">Applications: Performance forecasting, inventory optimization, trend analysis</p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-8 hover:border-border/60 transition-all">
            <div className="flex items-center justify-center h-48 mb-6 overflow-hidden">
              <img
                src="/images/graphics/code-blocks.svg"
                alt="Platform integration"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Integration</h3>
            <p className="text-foreground/70 mb-4">
              Create bespoke programmatic solutions tailored to your specific advertising needs, with expert guidance every step.
            </p>
            <p className="text-foreground/60 text-sm">Applications: Custom DSP/SSP, specialized algorithms, platform integration</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <a href="https://cal.com/adnexus">
            <Button
              variant="primary"
              size="lg"
              className={buttonModifiers.interactive + " font-medium px-8"}
            >
              Explore our capabilities
              <ArrowUpRight size={16} className="ml-1" />
            </Button>
          </a>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-lg font-medium mb-8">We integrate with all leading CTV platforms and ad tech ecosystems</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
            {/* CTV Platforms */}
            <div className="flex flex-col items-center">
              <img src="/images/logo/roku.svg" alt="Roku" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Roku</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/amazon-fire.svg" alt="Fire TV" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Fire TV</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/apple-tv.svg" alt="Apple TV" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Apple TV</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/samsung.svg" alt="Samsung TV" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Samsung TV</span>
            </div>

            {/* Ad Tech */}
            <div className="flex flex-col items-center">
              <img src="/images/logo/ttd.svg" alt="The Trade Desk" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">The Trade Desk</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/magnite.svg" alt="Magnite" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Magnite</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/pubmatic.svg" alt="PubMatic" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">PubMatic</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/xandr.svg" alt="Xandr" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Xandr</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {/* Cloud & Data */}
            <div className="flex flex-col items-center">
              <img src="/images/logo/aws.svg" alt="AWS" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">AWS</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/gcp.svg" alt="Google Cloud" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Google Cloud</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/azure.svg" alt="Microsoft Azure" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Azure</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/snowflake.svg" alt="Snowflake" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Snowflake</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/databricks.svg" alt="Databricks" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Databricks</span>
            </div>

            <div className="flex flex-col items-center">
              <img src="/images/logo/segment.svg" alt="Segment" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-xs text-foreground/60 mt-2">Segment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
