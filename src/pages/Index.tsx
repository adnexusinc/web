import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Star, Check, TrendingUp, Users, Target } from 'lucide-react';
import { CTVCalculator } from '@/components/CTVCalculator';

export default function Index() {
  const [selectedGoal, setSelectedGoal] = useState('sales');

  const goals = [
    { id: 'sales', title: 'Boost sales', desc: 'Generate more sales on your website' },
    { id: 'awareness', title: 'Build awareness', desc: 'Get more eyes on your brand' },
    { id: 'traffic', title: 'Drive traffic', desc: 'Attract customers to your website' },
    { id: 'retarget', title: 'Retarget visitors', desc: 'Re-engage website visitors' },
    { id: 'app', title: 'Drive app revenue', desc: 'Increase app downloads' },
  ];

  const channels = ['CNN', 'Fox News', 'ESPN', 'Hulu', 'Roku', 'Samsung TV+', 'Pluto TV', 'Paramount+', 'Peacock', 'Tubi', 'TLC', 'Comedy Central', 'fuboTV', 'BET', 'Food Network'];

  return (
    <div className="min-h-screen bg-white">
      <Navigation bannerVisible={false} />

      {/* Apple-Style Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-black">
            Set goals. Run TV ads.<br />Grow your brand.
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            Boost app downloads with TV ads
          </p>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600">Rated 4.9 out of 5 on Trustpilot</span>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 justify-center">
            <a href="https://cal.com/adnexus">
              <Button size="lg" className="text-lg px-8">
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://dsp.ad.nexus">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Get started
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 mb-8">
            100+ high growth startups have generated millions in revenue with Adnexus
          </p>
          <div className="flex justify-center gap-12 flex-wrap opacity-60">
            <span className="text-2xl font-bold text-gray-800">Damon</span>
            <span className="text-2xl font-bold text-gray-800">Bellabeat</span>
            <span className="text-2xl font-bold text-gray-800">Triller</span>
            <span className="text-2xl font-bold text-gray-800">Cover.Build</span>
          </div>
        </div>
      </section>

      {/* Step 1: Set Goals */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">Step 1</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Set your goals</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {goals.map((goal) => (
              <Card
                key={goal.id}
                className={`p-6 cursor-pointer transition-all ${
                  selectedGoal === goal.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'hover:border-gray-300'
                }`}
                onClick={() => setSelectedGoal(goal.id)}
              >
                <h3 className="font-semibold mb-2">{goal.title}</h3>
                <p className="text-sm text-gray-600">{goal.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2: Pick Channels */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">Step 2</span>
            <h2 className="text-4xl font-bold mt-2">Pick your channels</h2>
          </div>

          <div className="relative overflow-hidden h-32">
            <div className="flex animate-ticker gap-8">
              {[...channels, ...channels].map((channel, idx) => (
                <div key={idx} className="flex-shrink-0 px-6 py-4 bg-white rounded-lg border text-center min-w-[150px]">
                  <span className="font-semibold">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Target Audience */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">Step 3</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Target those who matter for your brand</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Choose from 20+ categories</h3>
              <p className="text-gray-600">Target your ICP in less than 10 clicks.</p>
            </Card>
            <Card className="p-8">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customized targeting</h3>
              <p className="text-gray-600">Build your audience as you please.</p>
            </Card>
            <Card className="p-8">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategic targeting</h3>
              <p className="text-gray-600">Meet your customers where they are.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Step 4: Budget Calculator */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">Step 4</span>
            <h2 className="text-4xl font-bold mt-2">Set your budget</h2>
          </div>

          <CTVCalculator />
        </div>
      </section>

      {/* Step 5: Creative */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-12">
            <span className="text-blue-600 font-semibold">Step 5</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Showcase your creativity</h2>
            <p className="text-xl text-gray-600">No Creative? No Problem.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">AI Studio</h3>
              <p className="text-gray-600 mb-6">
                Type your business name or URL—we'll create a TV ad in 30 seconds. 100% free.
              </p>
              <a href="/studio">
                <Button className="w-full">Try Adnexus Studio →</Button>
              </a>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Upload Creative</h3>
              <p className="text-gray-600 mb-6">
                Already have a TV ad? Upload and showcase on 500+ channels.
              </p>
              <Button variant="outline" className="w-full">Upload Video</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Step 6: Measure */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">Step 6</span>
            <h2 className="text-4xl font-bold mt-2">Measure your impact</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Check className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2">Trackable ROI</h3>
              <p className="text-sm text-gray-600">Track visitor action and re-engage viewers</p>
            </Card>
            <Card className="p-6">
              <Check className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2">Reliable attribution</h3>
              <p className="text-sm text-gray-600">Measure ROAS and ad effectiveness</p>
            </Card>
            <Card className="p-6">
              <Check className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2">Actionable insights</h3>
              <p className="text-sm text-gray-600">Optimize spend and iterate campaigns</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to advertise on TV?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Create your account and launch your first campaign in minutes.
          </p>
          <a href="https://dsp.ad.nexus">
            <Button size="lg" className="text-lg px-12">
              Get started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
