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
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Test your budget</h3>
        <p className="text-foreground/70">
          Simulate your campaign results by entering your future campaign budgets.
        </p>
      </div>

      {/* Budget Slider */}
      <div className="mb-12">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold">${budget.toLocaleString()}</span>
          <span className="text-foreground/60">USD</span>
        </div>
        <Slider
          value={[budget]}
          onValueChange={(value) => setBudget(value[0])}
          min={50}
          max={100000}
          step={50}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-foreground/60 mt-2">
          <span>$50</span>
          <span>$100,000</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 bg-card/40 backdrop-blur-sm border-border/20">
          <div className="text-sm text-foreground/60 mb-1">CPM</div>
          <div className="text-xl font-bold">${minCPM}-${maxCPM}</div>
        </Card>

        <Card className="p-4 bg-card/40 backdrop-blur-sm border-border/20">
          <div className="text-sm text-foreground/60 mb-1">Impressions</div>
          <div className="text-xl font-bold">{formatRange(minImpressions, maxImpressions)}</div>
        </Card>

        <Card className="p-4 bg-card/40 backdrop-blur-sm border-border/20">
          <div className="text-sm text-foreground/60 mb-1">Cost per View</div>
          <div className="text-xl font-bold">${minCostPerView}-${maxCostPerView}</div>
        </Card>

        <Card className="p-4 bg-card/40 backdrop-blur-sm border-border/20">
          <div className="text-sm text-foreground/60 mb-1">Households</div>
          <div className="text-xl font-bold">{formatRange(minHouseholds, maxHouseholds)}</div>
        </Card>

        <Card className="p-4 bg-card/40 backdrop-blur-sm border-border/20">
          <div className="text-sm text-foreground/60 mb-1">Web Visits</div>
          <div className="text-xl font-bold">{formatRange(minWebVisits, maxWebVisits)}</div>
        </Card>

        <Card className="p-4 bg-card/40 backdrop-blur-sm border-border/20">
          <div className="text-sm text-foreground/60 mb-1">App Installs</div>
          <div className="text-xl font-bold">{formatRange(minAppInstalls, maxAppInstalls)}</div>
        </Card>

        <Card className="p-4 bg-card/40 backdrop-blur-sm border-border/20">
          <div className="text-sm text-foreground/60 mb-1">Sales</div>
          <div className="text-xl font-bold">{formatRange(minSales, maxSales)}</div>
        </Card>

        <Card className="p-4 bg-card/40 backdrop-blur-sm border-border/20">
          <div className="text-sm text-foreground/60 mb-1">Foot Traffic</div>
          <div className="text-xl font-bold">{formatRange(minFootTraffic, maxFootTraffic)}</div>
        </Card>
      </div>

      <div className="text-center">
        <p className="text-sm text-foreground/60 mb-4">
          Start advertising on TV in 5 minutes
        </p>
        <p className="text-sm text-foreground/70 mb-6">
          Starts at only $50/day - No Commitment - Credit Card or Wire Payment
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://cal.com/adnexus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-white text-black hover:bg-white/90 transition-colors"
          >
            Book a demo
          </a>
          <a
            href="/auth"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium border border-white/20 hover:bg-white/10 transition-colors"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
