import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Sparkles } from 'lucide-react';
import data from '../data/features-integrations-api.json';

export default function FeaturesIntegrationsApi() {
  // Extract hero section from sections array
  const heroSection = data.sections?.find(s => s.id === 'hero');
  const hero = {
    headline: heroSection?.heading || data.headings?.h1?.[0] || 'Integrations & API',
    description: heroSection?.content || data.paragraphs?.[0] || 'Connect with your favorite tools',
    cta: {
      text: 'Get Started Free'
    }
  };

  // Transform integration categories into features format
  const features = data.integrationCategories?.slice(0, 6).map(cat => ({
    title: cat.category,
    description: cat.description
  })) || [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-24">
        <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
                {hero.headline}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://auth.ad.nexus"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                  rel="noopener noreferrer"
                >
                  {hero.cta.text}
                </a>
                <a
                  href="https://cal.com/adnexus"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border border-white text-white hover:bg-white/10 transition-colors"
                  rel="noopener noreferrer"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Integration Partners</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">Connect with {data.platformConnections?.totalPartners || '20+'} trusted platforms</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={`${feature.title}-${index}`} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/20">
                  <div className="mb-4" aria-hidden="true"><Sparkles className="h-10 w-10 text-white" /></div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.apiDetails?.heading || 'API Access'}</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">{data.apiDetails?.description}</p>
            </div>
            {data.useCases && data.useCases.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.useCases.slice(0, 6).map((useCase, index) => (
                  <div key={`${useCase.title}-${index}`} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-white transition-all duration-300">
                    <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.platforms?.slice(0, 3).map((platform, i) => (
                        <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded">{platform}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-12">Start reaching 120M households across 500+ premium CTV channels today</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://auth.ad.nexus"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                  rel="noopener noreferrer"
                >
                  Get Started Free
                </a>
                <a
                  href="https://cal.com/adnexus"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border border-white text-white hover:bg-white/10 transition-colors"
                  rel="noopener noreferrer"
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
