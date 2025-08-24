import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Adnexus's AI-powered platform transformed our programmatic advertising. We saw a 340% increase in conversions while reducing costs by 45%. The real-time optimization is unlike anything we've used before.",
    author: "Sarah Chen",
    title: "VP of Digital Marketing",
    company: "Fortune 500 Retailer",
    metric: "340% ROI Increase"
  },
  {
    quote: "The platform's ability to interpret audience patterns in real-time has been game-changing. Our CTV campaigns now consistently achieve $85+ CPMs with exceptional viewer engagement rates.",
    author: "Michael Rodriguez",
    title: "Head of Programmatic",
    company: "Global Media Agency",
    metric: "$85+ CPM Average"
  },
  {
    quote: "We reduced our customer acquisition cost by 67% in just 3 months. The AI's predictive capabilities help us reach the right audience at the perfect moment, every single time.",
    author: "Emily Thompson",
    title: "CMO",
    company: "Leading Streaming Service",
    metric: "67% CAC Reduction"
  },
  {
    quote: "Adnexus doesn't just provide technology; they provide a competitive advantage. Our programmatic campaigns now outperform traditional channels by 2x with half the effort.",
    author: "David Park",
    title: "Director of Growth",
    company: "Tech Unicorn",
    metric: "2x Performance Boost"
  },
  {
    quote: "The sub-millisecond latency and AI optimization have revolutionized our yield. We're seeing 45% higher fill rates and premium CPMs across our entire inventory.",
    author: "Jessica Martinez",
    title: "Head of Revenue",
    company: "Premium Publisher Network",
    metric: "45% Higher Fill Rate"
  }
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="performance-number">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join industry leaders who've achieved impossible growth with our platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="bg-card/50 border-border/50 p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-8">
                <Quote className="w-12 h-12 text-primary/20 flex-shrink-0" />
                <div>
                  <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 mb-6">
                    {testimonials[currentIndex].quote}
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="font-semibold text-lg">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold performance-number">
                        {testimonials[currentIndex].metric}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        Key Result
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};