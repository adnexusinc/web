import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { BrainCircuit, Sparkles, LineChart, Cpu, Database, Webhook, Bot } from 'lucide-react';

const AIServices = () => {
  return (
    <ServiceTemplate
      title="AI Services"
      description="Harness artificial intelligence to transform your advertising campaigns with cutting-edge solutions designed for measurable results."
      icon={<BrainCircuit className="h-6 w-6" />}
      services={[
        {
          name: "AI-Enhanced Creative",
          description: "Human creativity amplified by AI for unprecedented campaign performance",
          icon: <Sparkles className="h-8 w-8 text-primary" />
        },
        {
          name: "AI Consulting",
          description: "Strategic guidance to maximize AI impact across your advertising stack",
          icon: <LineChart className="h-8 w-8 text-primary" />
        },
        {
          name: "Custom AI Development",
          description: "Bespoke AI systems built for your specific advertising needs",
          icon: <Cpu className="h-8 w-8 text-primary" />
        },
        {
          name: "AI Optimization",
          description: "Machine learning models for bid optimization and audience targeting",
          icon: <Database className="h-8 w-8 text-primary" />
        },
        {
          name: "AI Integration",
          description: "Seamless incorporation of AI into your existing ad tech stack",
          icon: <Webhook className="h-8 w-8 text-primary" />
        },
        {
          name: "AI Model Training",
          description: "Custom model fine-tuning for your specific campaigns and audiences",
          icon: <Bot className="h-8 w-8 text-primary" />
        }
      ]}
      features={[
        "Cutting-edge AI models for optimal campaign performance",
        "Seamless integration with DSP, SSP, and ADX platforms",
        "Ethical AI implementation with brand safety protocols",
        "Comprehensive training and support for your team",
        "Ongoing optimization and performance monitoring",
        "Custom solutions tailored to your industry and goals",
        "Data privacy and security compliance (GDPR, CCPA)",
        "Measurable ROI with clear performance metrics"
      ]}
    />
  );
};

export default AIServices;