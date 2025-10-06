import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Footer from '@/agency/components/Footer';
import { Navigation } from '@/components/Navigation';
import { services } from '@/agency/data/services';
import ServiceTemplate from './services/ServiceTemplate';

// Service category interface
interface ServiceCategory {
  title: string;
  color: string;
  services: Service[];
}

// Service interface
interface Service {
  name: string;
  description: string;
  icon: string;
  link: string;
}

// ServicesPage component
const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('creative');

  // Service categories data
  const serviceCategories: ServiceCategory[] = [
    // ... existing code ...
  ];

  // Filter services based on active category
  const filteredServices = serviceCategories.find(category =>
    category.title.toLowerCase().includes(activeCategory.toLowerCase())
  )?.services || [];

  // Get the service param from the URL
  const { "*": serviceParam } = useParams<{ "*": string }>();

  // If a specific service is requested, render the ServiceTemplate component
  if (serviceParam) {
    // Extract the service ID from the URL path
    const serviceId = serviceParam;
    const service = services[serviceId];

    if (service) {
      return <ServiceTemplate service={service} />;
    } else {
      // Return a 404 page for unknown service
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-400 mb-8">The service "{serviceId}" could not be found.</p>
            <Link to="/services" className="text-blue-400 hover:underline">
              ← Back to Services
            </Link>
          </div>
        </div>
      );
    }
  }

  // Otherwise render the main services overview page
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <div className="pt-32 pb-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">AI-ENABLED CREATIVE SOLUTIONS</h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Transforming traditional creative paradigms with an AI-enhanced approach that delivers measurable outcomes.
              </p>

              <Link to="/agency/payment?plan=enterprise" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 inline-flex items-center text-lg">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-40 bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-xl text-gray-300">
                All services available in our simple monthly subscription. Scale up or down as needed.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden">
                <div className="p-8 bg-blue-600 text-center">
                  <h3 className="text-3xl font-bold mb-2">Enterprise Plan</h3>
                  <div className="text-5xl font-bold my-6">$9,999<span className="text-xl font-normal">/month</span></div>
                  <p className="text-lg opacity-90">Billed monthly. Cancel anytime.</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Access to all creative services with unlimited revisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Dedicated creative team for your projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>AI-powered creative solutions and optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Priority support and fast turnaround times</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Regular strategy meetings and performance reports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" />
                      <span>Complete asset ownership and source files</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Link to="/agency/payment?plan=enterprise" className="block w-full bg-white text-black py-4 rounded-full text-center font-medium hover:bg-white/90 transition-colors text-lg">
                      Sign Up Now
                    </Link>
                    <p className="text-center mt-4 text-gray-400">Start with credit card payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20 bg-gray-900 border-t border-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-300">
                Our solutions have helped companies achieve remarkable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Casper</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  "Adnexus's AI-enhanced creative approach helped us increase our conversion rates by 65% while maintaining our brand identity."
                </p>
                <p className="font-medium">Marketing Director, Casper</p>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Triller</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  "The team at Adnexus delivered exceptional creative assets that helped us stand out in a crowded marketplace."
                </p>
                <p className="font-medium">CMO, Triller</p>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Damon Motorcycles</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  "Adnexus's work on our brand and marketing materials directly contributed to our successful launch and funding rounds."
                </p>
                <p className="font-medium">CEO, Damon Motorcycles</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-black">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Creative Process?</h2>
              <p className="text-xl text-gray-300 mb-12">
                Join innovative companies leveraging AI-powered creative solutions for measurable results.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/agency/payment?plan=enterprise" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 inline-flex items-center text-lg">
                  Sign Up for $9,999/month <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="https://cal.com/adnexus/z1YsZQrqR4s6jQqD8" className="border border-white px-8 py-4 rounded-full font-medium hover:bg-white/10 inline-flex items-center text-lg">
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;