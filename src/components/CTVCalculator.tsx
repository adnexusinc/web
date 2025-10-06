import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';

export function CTVCalculator() {
  const [budget, setBudget] = useState(5000);

  // CPM range $15-$35
  const minCPM = 15;
  const maxCPM = 35;

  // Calculate metrics
  const minImpressions = Math.floor((budget / maxCPM) * 1000);
  const maxImpressions = Math.floor((budget / minCPM) * 1000);

  const minCostPerView = (budget / maxImpressions).toFixed(2);
  const maxCostPerView = (budget / minImpressions).toFixed(2);

  // Households (assuming 3-8 impressions per household)
  const minHouseholds = Math.floor(minImpressions / 8);
  const maxHouseholds = Math.floor(maxImpressions / 3);

  // Web Visits (assuming 0.3-1.5% CTR)
  const minWebVisits = Math.floor(minImpressions * 0.003);
  const maxWebVisits = Math.floor(maxImpressions * 0.015);

  // App Installs (assuming 0.2-0.65% conversion)
  const minAppInstalls = Math.floor(minImpressions * 0.002);
  const maxAppInstalls = Math.floor(maxImpressions * 0.0065);

  // Sales (assuming 0.06-0.2% conversion)
  const minSales = Math.floor(minImpressions * 0.0006);
  const maxSales = Math.floor(maxImpressions * 0.002);

  // Foot Traffic (assuming 0.11-0.25% conversion)
  const minFootTraffic = Math.floor(minImpressions * 0.0011);
  const maxFootTraffic = Math.floor(maxImpressions * 0.0025);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  const formatRange = (min: number, max: number) => {
    return `${formatNumber(min)}-${formatNumber(max)}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left side - Budget input */}
        <div className="bg-white rounded-3xl p-12 text-black">
          <h3 className="text-3xl font-bold mb-4 text-black">Test your budget</h3>
          <p className="text-gray-600 mb-8">
            Simulate your campaign results by entering your future campaign budgets.
          </p>

          <div className="mb-8">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-2xl">$</span>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="text-5xl font-normal border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent w-full"
              />
              <span className="text-gray-500 text-sm">USD</span>
            </div>

            <div className="relative mb-4">
              <Slider
                value={[budget]}
                onValueChange={(value) => setBudget(value[0])}
                min={50}
                max={100000}
                step={50}
                className="w-full [&_[role=slider]]:bg-blue-600 [&_[role=slider]]:border-4 [&_[role=slider]]:border-white [&_[role=slider]]:shadow-lg [&_[role=slider]]:w-6 [&_[role=slider]]:h-6"
              />
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>$50</span>
              <span>$100,000</span>
            </div>
          </div>
        </div>

        {/* Right side - Metrics */}
        <div className="bg-white rounded-3xl p-12 text-black">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">CPM</div>
              <div className="text-4xl font-bold text-black">${minCPM}-${maxCPM}</div>
            </div>

            <div>
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">Impressions</div>
              <div className="text-4xl font-bold text-black">{formatRange(minImpressions, maxImpressions)}</div>
            </div>

            <div>
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">Cost per View</div>
              <div className="text-4xl font-bold text-black">${minCostPerView}-${maxCostPerView}</div>
            </div>

            <div>
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">Households</div>
              <div className="text-4xl font-bold text-black">{formatRange(minHouseholds, maxHouseholds)}</div>
            </div>

            <div>
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">Web Visits</div>
              <div className="text-4xl font-bold text-black">{formatRange(minWebVisits, maxWebVisits)}</div>
            </div>

            <div>
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">App Installs</div>
              <div className="text-4xl font-bold text-black">{formatRange(minAppInstalls, maxAppInstalls)}</div>
            </div>

            <div>
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">Sales</div>
              <div className="text-4xl font-bold text-black">{formatRange(minSales, maxSales)}</div>
            </div>

            <div>
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">Foot Traffic</div>
              <div className="text-4xl font-bold text-black">{formatRange(minFootTraffic, maxFootTraffic)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <h4 className="text-2xl font-bold mb-4 text-white">Start advertising on TV in 5 minutes</h4>
        <p className="text-white/70 mb-8">
          Starts at only $50/d - No Commitment - Credit Card or Wire Payment
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://cal.com/adnexus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Book a demo
          </a>
          <span className="text-white/60 self-center">OR</span>
          <a
            href="/auth"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
