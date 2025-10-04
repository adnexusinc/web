import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Upload,
  Film,
  Sparkles,
  Download,
  Code,
  ArrowRight,
  ArrowLeft,
  X
} from 'lucide-react';

interface StudioOnboardingProps {
  onComplete?: () => void;
  onSkip?: () => void;
}

const steps = [
  {
    id: 'welcome',
    title: 'Welcome to Adnexus Studio',
    description: 'Create professional TV ads in minutes with AI-powered video editing',
    icon: Sparkles,
    image: '/studio/assets/demo1.png',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Adnexus Studio is a browser-based professional video editor designed specifically
          for creating 15s and 30s CTV/OTT advertisements.
        </p>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>No downloads or installs required - works entirely in your browser</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Professional-grade video effects and transitions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>AI-powered automation and templates</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Export in 4K quality for premium CTV inventory</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'import',
    title: 'Import & Organize Media',
    description: 'Drag and drop videos, images, and audio files',
    icon: Upload,
    image: '/studio/assets/demo2.png',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Start by importing your media files. Adnexus Studio supports:
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h4 className="font-semibold mb-2">Video Formats</h4>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• MP4, MOV, AVI</li>
              <li>• WebM, MKV</li>
              <li>• Up to 4K resolution</li>
            </ul>
          </div>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h4 className="font-semibold mb-2">Image & Audio</h4>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• PNG, JPG, GIF</li>
              <li>• MP3, WAV, AAC</li>
              <li>• Unlimited uploads</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-white/60">
          💡 Tip: All files are processed locally in your browser for privacy
        </p>
      </div>
    ),
  },
  {
    id: 'edit',
    title: 'Timeline Editing',
    description: 'Powerful multi-track timeline with effects',
    icon: Film,
    image: '/studio/assets/landingpage.png',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Our intuitive timeline makes professional editing accessible:
        </p>
        <ul className="space-y-3 text-white/70">
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-green-400 text-sm font-bold">1</span>
            </div>
            <div>
              <strong className="text-white">Multi-track timeline</strong>
              <p className="text-sm">Layer videos, images, text, and audio tracks</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-green-400 text-sm font-bold">2</span>
            </div>
            <div>
              <strong className="text-white">Real-time preview</strong>
              <p className="text-sm">See changes instantly with hardware-accelerated rendering</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-green-400 text-sm font-bold">3</span>
            </div>
            <div>
              <strong className="text-white">Precision editing</strong>
              <p className="text-sm">Frame-accurate cuts and transitions</p>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'effects',
    title: 'Effects & Transitions',
    description: '60+ professional transitions and filters',
    icon: Sparkles,
    image: '/studio/assets/filter-preview.webp',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Make your ads stand out with professional effects:
        </p>
        <div className="grid grid-cols-3 gap-2">
          {['Fade', 'Dissolve', 'Wipe', 'Zoom', 'Rotate', 'Blur', 'Color Grade', 'Vignette', 'Glitch'].map((effect) => (
            <div key={effect} className="bg-white/5 p-3 rounded text-center text-sm border border-white/10 hover:border-white/30 transition-colors">
              {effect}
            </div>
          ))}
        </div>
        <p className="text-sm text-white/60">
          ⚡ All effects are GPU-accelerated for smooth 60fps playback
        </p>
      </div>
    ),
  },
  {
    id: 'code',
    title: 'Code-Based Composition',
    description: 'For advanced users: programmatic video editing',
    icon: Code,
    image: '/studio/assets/codesample1.png',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Advanced users can use our Omni API for programmatic video composition:
        </p>
        <div className="bg-black/50 p-4 rounded-lg border border-white/20 font-mono text-sm">
          <pre className="text-green-400/90">
{`import * as Omni from "@omni/video"

const video = new Omni.Video()
const watermark = subtitle("omniclip")
const xfade = crossfade(500)

const timeline = sequence(
  video("opening.mp4"),
  xfade,
  stack(
    video("product.mp4"),
    watermark,
  ),
)`}
          </pre>
        </div>
        <p className="text-sm text-white/60">
          💻 Full TypeScript support with autocomplete and type checking
        </p>
      </div>
    ),
  },
  {
    id: 'export',
    title: 'Export & Share',
    description: 'Export in multiple formats and resolutions',
    icon: Download,
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Export your finished ads in broadcast quality:
        </p>
        <div className="space-y-3">
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-2xl">🎬</span>
              Video Formats
            </h4>
            <p className="text-sm text-white/70">
              MP4 (H.264), WebM (VP9), or MOV - optimized for CTV platforms
            </p>
          </div>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-2xl">📐</span>
              Resolutions
            </h4>
            <p className="text-sm text-white/70">
              720p, 1080p, or 4K - ready for premium inventory
            </p>
          </div>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Fast Export
            </h4>
            <p className="text-sm text-white/70">
              Hardware-accelerated encoding using WebCodecs API
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export const StudioOnboarding: React.FC<StudioOnboardingProps> = ({
  onComplete,
  onSkip
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  const handleSkipTour = () => {
    if (onSkip) {
      onSkip();
    }
  };

  const Icon = step.icon;

  return (
    <div className="relative bg-black text-white max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{step.title}</h2>
            <p className="text-sm text-white/60">{step.description}</p>
          </div>
        </div>
        <button
          onClick={handleSkipTour}
          className="text-white/60 hover:text-white transition-colors"
          aria-label="Close tour"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="px-6 pt-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-white/60">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-white/60">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Content */}
      <div className="p-6 min-h-[400px]">
        {step.image && (
          <div className="mb-6 rounded-lg overflow-hidden border border-white/10">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-auto"
            />
          </div>
        )}
        {step.content}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between p-6 border-t border-white/10">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </Button>

        <div className="flex gap-2">
          {currentStep < steps.length - 1 && (
            <Button
              variant="ghost"
              onClick={handleSkipTour}
              className="text-white/60 hover:text-white"
            >
              Skip Tour
            </Button>
          )}
          <Button
            onClick={handleNext}
            className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Step indicators */}
      <div className="flex justify-center gap-2 pb-6">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentStep
                ? 'bg-blue-500 w-8'
                : index < currentStep
                ? 'bg-green-500'
                : 'bg-white/20'
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
