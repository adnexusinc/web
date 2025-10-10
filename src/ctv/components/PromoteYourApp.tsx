import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { DollarSign, TrendingUp } from 'lucide-react';
import data from '../data/promote-your-app.json';
import { Link } from 'react-router-dom';

export default function PromoteYourApp() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-24">
        <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white bg-clip-text text-transparent">
                {data.hero.headline}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                {data.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a href="https://auth.ad.nexus" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-white text-black hover:bg-gray-100 transition-colors">
                  {data.hero.cta.text}
                </a>
                <a href="https://cal.com/adnexus" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border border-white text-white hover:bg-white/10 transition-colors">
                  Schedule a Demo
                </a>
              </div>
              {data.stats && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {Object.values(data.stats).map((stat: any, index) => (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                      <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-white">{stat.label}</div>
                      {stat.change && <div className="text-white text-sm mt-1">{stat.change}</div>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.main_heading}</h2>
              <p className="text-white text-lg max-w-3xl mx-auto">{data.customer_count}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.map((feature: any, index: number) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/20">
                  <div className="mb-4"><DollarSign className="h-10 w-10 text-white" /></div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold mb-4">Explore More Goals</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {data.related_goals.map((goal: any, index: number) => (
                <Link key={index} to={goal.url} className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-white hover:bg-gray-700 transition-all duration-300">
                  <div className="text-lg font-semibold">{goal.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 pb-32 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Promote Your App?</h2>
              <p className="text-xl text-white mb-12">Start reaching 120M households across 500+ premium CTV channels today</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://auth.ad.nexus" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-white text-black hover:bg-gray-100 transition-colors">Get Started Free</a>
                <a href="https://cal.com/adnexus" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border border-white text-white hover:bg-white/10 transition-colors">Talk to Sales</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
