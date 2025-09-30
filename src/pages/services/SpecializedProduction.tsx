import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { Video, FileVideo, Sparkles, Box, MonitorPlay, Clapperboard } from 'lucide-react';

const SpecializedProduction = () => {
  return (
    <ServiceTemplate
      title="Specialized Production Services"
      description="Elevate your brand with cutting-edge video, motion, and 3D content that engages audiences and drives results."
      icon={<Video className="h-6 w-6" />}
      services={[
        {
          name: "Video Production",
          description: "Professional video production at scale for any platform",
          icon: <FileVideo className="h-8 w-8 text-primary" />
        },
        {
          name: "Motion Design",
          description: "Dynamic animations for websites, ads, and presentations",
          icon: <Sparkles className="h-8 w-8 text-primary" />
        },
        {
          name: "3D & AR Design",
          description: "Innovative solutions for immersive digital experiences",
          icon: <Box className="h-8 w-8 text-primary" />
        },
        {
          name: "CTV Ad Production",
          description: "Premium Connected TV ads optimized for streaming platforms",
          icon: <MonitorPlay className="h-8 w-8 text-primary" />
        },
        {
          name: "Interactive Content",
          description: "Engaging interactive elements for digital platforms",
          icon: <Clapperboard className="h-8 w-8 text-primary" />
        },
        {
          name: "Live Production",
          description: "Professional live streaming and event production",
          icon: <Video className="h-8 w-8 text-primary" />
        }
      ]}
      features={[
        "End-to-end production management from concept to delivery",
        "Industry-leading equipment and production techniques",
        "Expert team with backgrounds in film, animation, and digital media",
        "Seamless integration with your existing brand assets",
        "Optimized for engagement across all platforms and devices",
        "AI-enhanced workflows for faster turnaround times",
        "Comprehensive quality control and review processes",
        "Full rights to all delivered content",
        "Strategic guidance to maximize ROI on production investments"
      ]}
    />
  );
};

export default SpecializedProduction;