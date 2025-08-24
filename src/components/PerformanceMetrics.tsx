import React from 'react';

export const PerformanceMetrics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      <div className="text-center space-y-2">
        <div className="text-3xl md:text-4xl font-bold performance-number">&lt;1ms</div>
        <div className="text-sm text-muted-foreground">Response Time</div>
      </div>
      <div className="text-center space-y-2">
        <div className="text-3xl md:text-4xl font-bold performance-number">1M+</div>
        <div className="text-sm text-muted-foreground">QPS Capacity</div>
      </div>
      <div className="text-center space-y-2">
        <div className="text-3xl md:text-4xl font-bold performance-number">99.99%</div>
        <div className="text-sm text-muted-foreground">Uptime</div>
      </div>
      <div className="text-center space-y-2">
        <div className="text-3xl md:text-4xl font-bold performance-number">300%</div>
        <div className="text-sm text-muted-foreground">Revenue Increase</div>
      </div>
    </div>
  );
};