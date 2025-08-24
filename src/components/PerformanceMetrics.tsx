import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ value, suffix = '' }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < value) {
        setCount(prev => Math.min(prev + Math.ceil(value / 20), value));
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [count, value]);
  
  return <>{count}{suffix}</>;
};

export const PerformanceMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      <div className="text-center space-y-2 group cursor-pointer">
        <div className="text-3xl md:text-4xl font-bold performance-number transition-transform group-hover:scale-110">
          {isVisible && <AnimatedNumber value={1} suffix="ms" />}
          {!isVisible && "0ms"}
        </div>
        <div className="text-sm text-muted-foreground">Matching Engine</div>
      </div>
      <div className="text-center space-y-2 group cursor-pointer">
        <div className="text-3xl md:text-4xl font-bold performance-number transition-transform group-hover:scale-110">
          {isVisible && <AnimatedNumber value={44} suffix="%" />}
          {!isVisible && "0%"}
        </div>
        <div className="text-sm text-muted-foreground">More Conversions</div>
      </div>
      <div className="text-center space-y-2 group cursor-pointer">
        <div className="text-3xl md:text-4xl font-bold performance-number transition-transform group-hover:scale-110">
          {isVisible && <AnimatedNumber value={2} suffix="x" />}
          {!isVisible && "0x"}
        </div>
        <div className="text-sm text-muted-foreground">Faster Results</div>
      </div>
      <div className="text-center space-y-2 group cursor-pointer">
        <div className="text-3xl md:text-4xl font-bold performance-number transition-transform group-hover:scale-110">
          {isVisible && <AnimatedNumber value={340} suffix="%" />}
          {!isVisible && "0%"}
        </div>
        <div className="text-sm text-muted-foreground">ROI Increase</div>
      </div>
    </div>
  );
};