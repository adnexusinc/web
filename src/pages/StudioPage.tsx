import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StudioDemo } from '@/components/StudioDemo';
import { StudioOnboarding } from '@/components/StudioOnboarding';
import { StudioLeadForm } from '@/components/StudioLeadForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const StudioPage = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  // Check if user has completed onboarding
  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('studio_onboarding_completed');
    if (!hasCompletedOnboarding) {
      // Show onboarding after a brief delay for better UX
      setTimeout(() => setShowOnboarding(true), 500);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('studio_onboarding_completed', 'true');
    setShowOnboarding(false);
  };

  const handleOnboardingSkip = () => {
    localStorage.setItem('studio_onboarding_completed', 'true');
    setShowOnboarding(false);
  };

  const handleTakeTour = () => {
    setShowOnboarding(true);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero/Demo Section */}
      <StudioDemo />

      {/* Take a Tour Button - Fixed position */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button
          onClick={handleTakeTour}
          variant="outline"
          className="shadow-lg"
        >
          Take a Tour
        </Button>
      </div>

      {/* Onboarding Modal */}
      <Dialog open={showOnboarding} onOpenChange={setShowOnboarding}>
        <DialogContent className="max-w-4xl bg-black border-white/20">
          <StudioOnboarding
            onComplete={handleOnboardingComplete}
            onSkip={handleOnboardingSkip}
          />
        </DialogContent>
      </Dialog>

      {/* Lead Form Modal */}
      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="max-w-2xl bg-black border-white/20">
          <StudioLeadForm
            onSuccess={() => setShowLeadForm(false)}
            onCancel={() => setShowLeadForm(false)}
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default StudioPage;
