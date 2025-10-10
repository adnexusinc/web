import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Hero from '@/agency/components/Hero';
import Services from '@/agency/components/Services';
import WhyAdnexus from '@/agency/components/WhyAdnexus';
import CaseStudy from '@/agency/components/CaseStudy';
import Testimonials from '@/agency/components/Testimonials';
import Process from '@/agency/components/Process';
import Pricing from '@/agency/components/Pricing';
import FAQ from '@/agency/components/FAQ';
import { Footer } from '@/components/sections/Footer';
import ScrollReveal from '@/agency/utils/ScrollReveal';
import AICapabilities from '@/agency/components/AICapabilities';
// import ModernTestimonials from '@/agency/components/ModernTestimonials';
import StatsSection from '@/agency/components/StatsSection';

const Index = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true); // Set to true by default

  useEffect(() => {
    // Check if trial was used - in that case don't show the banner
    const trialUsed = localStorage.getItem('trialUsed');
    if (trialUsed === 'true') {
      setIsBannerVisible(false);
    }

    // Listen for banner visibility changes
    const handleBannerVisibilityChanged = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsBannerVisible(customEvent.detail.visible);
    };

    window.addEventListener('bannerVisibilityChanged', handleBannerVisibilityChanged);

    // Listen for storage changes to update banner visibility
    const handleStorageChange = () => {
      const trialUsed = localStorage.getItem('trialUsed');
      if (trialUsed === 'true') {
        setIsBannerVisible(false);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href) return;

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      });
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('bannerVisibilityChanged', handleBannerVisibilityChanged);
    };
  }, []);

  return (
    <ScrollReveal>
      <div className="min-h-screen flex flex-col">
        <Navigation bannerVisible={isBannerVisible} />
        <Hero />
        <Services />
        <AICapabilities />
        <WhyAdnexus />
        <CaseStudy />
        <StatsSection />
        <Process />
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default Index;
