import React from 'react';
import GradientBackground from './GradientBackground';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Adnexus transformed our CTV advertising strategy, delivering premium inventory access and insights we'd never seen before. Their platform bridged our business knowledge with cutting-edge programmatic technology.",
    author: "Sarah Chen",
    title: "CMO, Digital Media Group",
    image: "/images/placeholder.svg"
  },
  {
    quote: "Working with Adnexus feels like having an enterprise ad exchange that actually understands our campaign goals. They don't just provide inventory—they solve real advertising challenges.",
    author: "Marcus Johnson",
    title: "VP of Advertising, Streaming Platform",
    image: "/images/placeholder.svg"
  },
  {
    quote: "The Adnexus team delivered premium CTV inventory access in half the time we expected, with better results than we imagined possible. They're the perfect blend of technical excellence and practical advertising expertise.",
    author: "Alicia Rodriguez",
    title: "Director of Media Buying, Agency Network",
    image: "/images/placeholder.svg"
  }
];

const ModernTestimonials = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GradientBackground variant="tertiary" intensity="medium" className="absolute inset-0 z-0" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0"></div>

      <div className="container-custom relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Partner Success Stories</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Hear from organizations that have transformed their advertising campaigns with our platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-border/40 bg-background/30 backdrop-blur-sm p-8 relative hover:border-border/60 transition-all"
            >
              <Quote className="text-primary/20 w-10 h-10 absolute top-4 right-4" />
              <p className="text-foreground/80 mb-6 relative z-10">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full overflow-hidden border border-border/60">
                  <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;
