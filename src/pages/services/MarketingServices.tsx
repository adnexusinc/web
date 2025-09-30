import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { BarChart3, TrendingUp, Target, Users, LineChart, BarChart, Megaphone, MessageSquare } from 'lucide-react';

const MarketingServices = () => {
  return (
    <ServiceTemplate
      title="Marketing Services"
      description="Drive sustainable growth with data-driven marketing strategies that connect your brand with your target audience and deliver measurable results."
      icon={<BarChart3 className="h-6 w-6" />}
      services={[
        {
          name: "Marketing Strategy",
          description: "Comprehensive strategic planning to achieve your business goals",
          icon: <TrendingUp className="h-8 w-8 text-primary" />
        },
        {
          name: "Digital Marketing",
          description: "Integrated digital campaigns across multiple channels",
          icon: <Target className="h-8 w-8 text-primary" />
        },
        {
          name: "Content Marketing",
          description: "Engaging content that resonates with your audience",
          icon: <MessageSquare className="h-8 w-8 text-primary" />
        },
        {
          name: "Growth Marketing",
          description: "Data-driven approach to scale your business efficiently",
          icon: <LineChart className="h-8 w-8 text-primary" />
        },
        {
          name: "Performance Marketing",
          description: "Results-focused campaigns with measurable ROI",
          icon: <BarChart className="h-8 w-8 text-primary" />
        },
        {
          name: "Social Media Marketing",
          description: "Strategic social presence that builds community and drives engagement",
          icon: <Users className="h-8 w-8 text-primary" />
        },
        {
          name: "Brand Marketing",
          description: "Cohesive brand experiences that create lasting connections",
          icon: <Megaphone className="h-8 w-8 text-primary" />
        }
      ]}
      features={[
        "Data-driven approach to maximize marketing ROI",
        "Integrated strategies across all relevant channels",
        "AI-powered audience targeting and optimization",
        "Continuous performance monitoring and optimization",
        "Transparent reporting with clear KPIs and metrics",
        "Brand consistency across all marketing touchpoints",
        "Agile methodology to quickly adapt to market changes",
        "Expert team with specialized knowledge across industries",
        "Scalable solutions that grow with your business"
      ]}
    />
  );
};

export default MarketingServices;