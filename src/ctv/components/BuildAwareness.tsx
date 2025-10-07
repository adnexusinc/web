import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Check, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
import data from '../data/build-awareness.json';
import { Link } from 'react-router-dom';

export default function BuildAwareness() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {data.hero.headline}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                {data.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                  href="https://auth.ad.nexus"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                >
                  {data.hero.cta.text}
                </a>
                <a
                  href="https://cal.com/adnexus"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border border-white text-white hover:bg-white/10 transition-colors"
                >
                  Schedule a Demo
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {data.stats.social_media_reach.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {data.stats.social_media_reach.label}
                  </div>
                  <div className="text-green-400 text-sm mt-1">
                    {data.stats.social_media_reach.change}
                  </div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {data.stats.brand_mentions.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {data.stats.brand_mentions.label}
                  </div>
                  <div className="text-green-400 text-sm mt-1">
                    {data.stats.brand_mentions.change}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.main_heading}</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                {data.customer_count}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
                >
                  <div className="mb-4">
                    {feature.type === 'live_data' && <TrendingUp className="h-10 w-10 text-blue-400" />}
                    {feature.type === 'inventory' && <BarChart3 className="h-10 w-10 text-purple-400" />}
                    {feature.type === 'creative' && <Target className="h-10 w-10 text-green-400" />}
                    {feature.type === 'targeting' && <Users className="h-10 w-10 text-orange-400" />}
                    {feature.type === 'lookalike' && <Users className="h-10 w-10 text-pink-400" />}
                    {feature.type === 'reporting' && <BarChart3 className="h-10 w-10 text-cyan-400" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                  {feature.stat && (
                    <div className="mt-4 text-sm text-blue-400 font-semibold">
                      {feature.stat}
                    </div>
                  )}

                  {feature.highlight && (
                    <div className="mt-4 text-sm text-green-400 font-semibold">
                      ✓ {feature.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Inventory Showcase */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Premium CTV Inventory</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Access 120M households across 500+ premium apps and channels
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center max-w-6xl mx-auto">
              {data.features.find(f => f.type === 'inventory')?.channels?.slice(0, 24).map((channel, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 flex items-center justify-center h-20 hover:border-gray-600 transition-colors"
                >
                  <span className="text-sm text-gray-300 font-medium text-center">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Results</h2>
              <p className="text-gray-400 text-lg">Real brands, real growth</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.success_stories.slice(0, 9).map((story, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-600 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-blue-400 mb-2">
                    {story.metric}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {story.metric_label}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                    {story.title}
                  </h3>
                  <div className="text-sm text-gray-400">
                    {story.company}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Goals */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore More Goals</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {data.related_goals.map((goal, index) => (
                <Link
                  key={index}
                  to={goal.url}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="text-lg font-semibold">{goal.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Brand Awareness?
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Start reaching 120M households across 500+ premium CTV channels today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://auth.ad.nexus"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                >
                  Get Started Free
                </a>
                <a
                  href="https://cal.com/adnexus"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border border-white text-white hover:bg-white/10 transition-colors"
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
