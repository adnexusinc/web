import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { Palette, Video, Sparkles, Layout, Image, Wand2 } from 'lucide-react';

const CreativeServices = () => {
  return (
    <ServiceTemplate
      title="Creative Services"
      description="Premium creative production that captures attention and drives conversions across all digital channels."
      icon={<Palette className="h-6 w-6" />}
      services={[
        {
          name: "Display Ad Design",
          description: "Eye-catching display creatives optimized for performance",
          icon: <Layout className="h-8 w-8 text-primary" />
        },
        {
          name: "Video Production",
          description: "Professional video ads from concept to final delivery",
          icon: <Video className="h-8 w-8 text-primary" />
        },
        {
          name: "Dynamic Creative Optimization",
          description: "AI-powered creative variations that adapt to your audience",
          icon: <Sparkles className="h-8 w-8 text-primary" />
        },
        {
          name: "Rich Media & Interactive",
          description: "Engaging interactive ad formats that drive engagement",
          icon: <Wand2 className="h-8 w-8 text-primary" />
        },
        {
          name: "Brand Design",
          description: "Comprehensive brand identity and creative strategy",
          icon: <Image className="h-8 w-8 text-primary" />
        },
        {
          name: "Native Ad Creative",
          description: "Seamlessly integrated native advertising content",
          icon: <Layout className="h-8 w-8 text-primary" />
        }
      ]}
      features={[
        "Award-winning creative team with programmatic expertise",
        "Fast turnaround with unlimited revisions",
        "Multi-format support (display, video, native, rich media)",
        "A/B testing and performance optimization",
        "Brand-safe creative that aligns with your guidelines",
        "Platform-specific optimization for DSP, social, and video",
        "Creative analytics and performance reporting",
        "Scalable production for high-volume campaigns"
      ]}
    />
  );
};

export default CreativeServices;