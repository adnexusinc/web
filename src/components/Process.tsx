import React from 'react';
import { Code, ArrowUpRight, BarChart3, Layers, Zap } from 'lucide-react';

const Process = () => {
  const platforms = [
    { name: 'DSP Platform', icon: <Code className="h-6 w-6" /> },
    { name: 'SSP Infrastructure', icon: <Zap className="h-6 w-6" /> },
    { name: 'Campaign Analytics', icon: <BarChart3 className="h-6 w-6" /> },
    { name: 'CTV Integration', icon: <Layers className="h-6 w-6" /> }
  ];

  return (
    <section id="process" className="section-padding bg-black relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Partnership Approach</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A seamless collaboration that combines enterprise expertise with programmatic advertising innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          <div className="bg-black/30 p-8 rounded-xl border border-white/10 reveal-slide-up">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mb-6">1</div>
            <h3 className="text-xl font-bold mb-3">Strategic Discovery</h3>
            <p className="text-white/70">
              We begin with in-depth analysis of your advertising objectives, market position, and programmatic needs to establish clear success metrics.
            </p>
          </div>

          <div className="bg-black/30 p-8 rounded-xl border border-white/10 reveal-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mb-6">2</div>
            <h3 className="text-xl font-bold mb-3">Platform Integration</h3>
            <p className="text-white/70">
              Our team combines industry expertise with cutting-edge technology to rapidly integrate and optimize your programmatic campaigns.
            </p>
          </div>

          <div className="bg-black/30 p-8 rounded-xl border border-white/10 reveal-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mb-6">3</div>
            <h3 className="text-xl font-bold mb-3">Seamless Deployment</h3>
            <p className="text-white/70">
              We deliver complete solutions with real-time reporting, training, and ongoing support, ensuring maximum ROI on your advertising spend.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black p-8 md:p-12 rounded-2xl mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Enterprise-Grade Programmatic Ecosystem</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center reveal-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mx-auto w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center mb-3 text-white/80">
                  {platform.icon}
                </div>
                <h4 className="font-medium">{platform.name}</h4>
                <p className="text-sm text-white/60 mt-1">Comprehensive solutions</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/70 mb-4">Our versatile platform capabilities extend across the full programmatic advertising spectrum</p>
            <a href="/platform/overview" className="inline-flex items-center text-primary hover:underline">
              View our platform features
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 md:p-12 rounded-2xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Unlock Premium CTV Inventory</h3>
              <p className="text-white/70 mb-6">
                Augment your advertising campaigns with premium Connected TV inventory that multiplies reach, enhances targeting, and drives performance at unprecedented scale.
              </p>
              <a href="/advertisers" className="inline-flex items-center bg-white text-black hover:bg-white/90 py-3 px-6 rounded-full font-medium transition-colors">
                Accelerate your campaigns
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-black/30 p-4 rounded-lg">
                <div className="bg-blue-600/20 text-blue-400 p-2 rounded-md">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Custom DSP Solutions</h4>
                  <p className="text-sm text-white/60">Tailored demand-side platforms for complex requirements</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-black/30 p-4 rounded-lg">
                <div className="bg-purple-600/20 text-purple-400 p-2 rounded-md">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Premium SSP Access</h4>
                  <p className="text-sm text-white/60">Supply-side platforms that scale with your inventory</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-black/30 p-4 rounded-lg">
                <div className="bg-emerald-600/20 text-emerald-400 p-2 rounded-md">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Advanced Ad Exchange</h4>
                  <p className="text-sm text-white/60">From concept to market-leading programmatic solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
