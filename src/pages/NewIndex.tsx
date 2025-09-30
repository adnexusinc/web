import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import {
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Tv,
  Smartphone,
  Monitor,
  ArrowRight,
  Check,
  Play,
  ChevronRight,
  ChevronDown,
  Star,
  Phone,
  X,
  Volume2,
  VolumeX,
  Minimize2,
  Maximize2,
  Move,
  Maximize
} from 'lucide-react';

const NewIndex = () => {
  const [email, setEmail] = useState('');
  const [showStatic, setShowStatic] = useState(false);
  const [showPhoneBanner, setShowPhoneBanner] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default muted - user must click to unmute
  const [isPiP, setIsPiP] = useState(false);
  const [showPiP, setShowPiP] = useState(true); // Control PiP visibility
  const [pipSize, setPipSize] = useState<'normal' | 'double' | 'fullscreen'>('normal'); // PiP size mode
  // Initialize PiP position to bottom-right
  const [pipPosition, setPipPosition] = useState(() => {
    const pipWidth = 384; // w-96 base width
    const pipHeight = pipWidth * 9 / 16;
    const margin = 24;
    return {
      x: typeof window !== 'undefined' ? window.innerWidth - pipWidth - margin : 0,
      y: typeof window !== 'undefined' ? window.innerHeight - pipHeight - margin : 0
    };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0, time: 0 });
  const [hasDragged, setHasDragged] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [heroVideoPlaying, setHeroVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const heroVideoRef = useRef<HTMLIFrameElement>(null);
  const pipContainerRef = useRef<HTMLDivElement>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // For now, just redirect to DSP with email as param
      window.location.href = `https://dsp.ad.nexus?email=${encodeURIComponent(email)}`;
    }
  };

  const channels = [
    'CNN', 'Fox News', 'ESPN', 'Hulu', 'Roku', 'Samsung TV+', 'Pluto TV',
    'Paramount+', 'Peacock', 'Tubi', 'CBS Sports', 'NFL Network', 'NBA TV',
    'MLB Network', 'Discovery+', 'AMC+', 'Comedy Central', 'Bloomberg TV'
  ];

  const features = [
    {
      icon: Tv,
      title: '500+ Channels',
      description: 'Target viewers across premium streaming and broadcast channels'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Reach your exact audience with AI-powered demographic targeting'
    },
    {
      icon: Zap,
      title: 'AI Optimization',
      description: 'Machine learning continuously improves campaign performance'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track ROAS, conversions, and engagement across every screen'
    }
  ];

  const goals = [
    {
      title: 'Build Awareness',
      description: 'Stay top of mind',
      icon: Globe
    },
    {
      title: 'Drive Traffic',
      description: 'Attract convertible visitors',
      icon: TrendingUp
    },
    {
      title: 'Generate Leads',
      description: 'Turn viewers into buyers',
      icon: Users
    },
    {
      title: 'Increase Sales',
      description: 'Generate measurable revenue',
      icon: BarChart3
    }
  ];

  const testimonials = [
    {
      quote: "Adnexus transformed our advertising strategy. We achieved remarkable ROAS improvements in just 3 months.",
      author: "Michael Keling",
      role: "CMO @ Hanzo AI Inc",
      rating: 5
    },
    {
      quote: "Adnexus made us a cult hit in LA! Their TV advertising platform helped Karma become the must-have fashion brand on the West Coast.",
      author: "Antje Worring",
      role: "Founder @ Karma Fashion",
      rating: 5
    },
    {
      quote: "Finally, TV advertising that delivers performance marketing results. Game changer for our industry.",
      author: "Cyrus Pahlavi",
      role: "CEO @ Lux Industries Inc",
      rating: 5
    }
  ];

  // Scroll detection for translucent effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // TV static effect on loop
  useEffect(() => {
    const interval = setInterval(() => {
      setShowStatic(true);
      setTimeout(() => setShowStatic(false), 200);
    }, 30000); // Show static every 30 seconds (video loop)

    return () => clearInterval(interval);
  }, []);

  // Handle scroll for PiP and video sync
  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById('video-section');
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        const shouldShowPiP = rect.bottom < 100;
        const wasInPiP = isPiP;

        setIsPiP(shouldShowPiP);

        // When entering PiP mode, unmute PiP and ensure hero stays muted
        // When exiting PiP mode (scrolling back to hero), hero can be unmuted manually
        if (shouldShowPiP !== wasInPiP) {
          setHeroVideoPlaying(!shouldShowPiP);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPiP]);

  // Update video source based on mute state
  useEffect(() => {
    const muteParam = isMuted ? '1' : '0';
    setVideoSrc(`https://www.youtube.com/embed/o_McZxpeaEc?autoplay=1&loop=1&playlist=o_McZxpeaEc&mute=${muteParam}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`);
  }, [isMuted]);

  // Grid-based snapping for PiP
  const GRID_SIZE = 40; // 40px grid cells
  const PIP_WIDTH_BASE = 384; // w-96 = 384px
  const PIP_MARGIN = 24; // Minimum margin from edges
  const EDGE_SNAP_THRESHOLD = 100; // Distance from edge to trigger edge snapping
  const VELOCITY_THRESHOLD = 0.5; // Minimum velocity to trigger throw snap

  // Calculate current PiP width based on size mode
  const getCurrentPipWidth = () => {
    return pipSize === 'double' ? PIP_WIDTH_BASE * 2 : PIP_WIDTH_BASE;
  };

  const snapToGrid = (x: number, y: number) => {
    // Snap to grid
    const snappedX = Math.round(x / GRID_SIZE) * GRID_SIZE;
    const snappedY = Math.round(y / GRID_SIZE) * GRID_SIZE;

    // Ensure minimum margin from edges and keep visible
    const pipWidth = getCurrentPipWidth();
    const maxX = window.innerWidth - pipWidth - PIP_MARGIN;
    const maxY = window.innerHeight - (pipWidth * 9 / 16) - PIP_MARGIN; // aspect-video height

    return {
      x: Math.max(PIP_MARGIN, Math.min(snappedX, maxX)),
      y: Math.max(PIP_MARGIN, Math.min(snappedY, maxY))
    };
  };

  const snapToEdgeOrCorner = (x: number, y: number, velocityX: number, velocityY: number) => {
    const pipWidth = getCurrentPipWidth();
    const pipHeight = pipWidth * 9 / 16;
    const maxX = window.innerWidth - pipWidth - PIP_MARGIN;
    const maxY = window.innerHeight - pipHeight - PIP_MARGIN;

    // Calculate distances to edges
    const distToLeft = x - PIP_MARGIN;
    const distToRight = maxX - x;
    const distToTop = y - PIP_MARGIN;
    const distToBottom = maxY - y;

    // Check if thrown with velocity
    const hasVelocity = Math.abs(velocityX) > VELOCITY_THRESHOLD || Math.abs(velocityY) > VELOCITY_THRESHOLD;

    // Determine if near edge/corner
    const nearLeft = distToLeft < EDGE_SNAP_THRESHOLD;
    const nearRight = distToRight < EDGE_SNAP_THRESHOLD;
    const nearTop = distToTop < EDGE_SNAP_THRESHOLD;
    const nearBottom = distToBottom < EDGE_SNAP_THRESHOLD;

    let targetX = x;
    let targetY = y;

    if (hasVelocity) {
      // Snap based on throw direction
      if (Math.abs(velocityX) > Math.abs(velocityY)) {
        // Horizontal throw
        targetX = velocityX < 0 ? PIP_MARGIN : maxX;
        // Check if also near top/bottom
        if (nearTop) targetY = PIP_MARGIN;
        else if (nearBottom) targetY = maxY;
      } else {
        // Vertical throw
        targetY = velocityY < 0 ? PIP_MARGIN : maxY;
        // Check if also near left/right
        if (nearLeft) targetX = PIP_MARGIN;
        else if (nearRight) targetX = maxX;
      }
    } else {
      // Static snap to nearest corner/edge when near threshold
      if ((nearLeft || nearRight) && (nearTop || nearBottom)) {
        // Snap to corner
        targetX = nearLeft ? PIP_MARGIN : maxX;
        targetY = nearTop ? PIP_MARGIN : maxY;
      } else if (nearLeft || nearRight) {
        // Snap to left/right edge
        targetX = nearLeft ? PIP_MARGIN : maxX;
      } else if (nearTop || nearBottom) {
        // Snap to top/bottom edge
        targetY = nearTop ? PIP_MARGIN : maxY;
      } else {
        // Use grid snap if not near edge
        return snapToGrid(x, y);
      }
    }

    return { x: targetX, y: targetY };
  };

  // Handle PiP dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (pipSize === 'fullscreen') return;
    setIsDragging(true);
    setHasDragged(false);
    setDragStart({
      x: e.clientX - pipPosition.x,
      y: e.clientY - pipPosition.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || pipSize === 'fullscreen') return;

    const currentTime = Date.now();
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Mark as dragged if moved more than 5px
    const distanceMoved = Math.sqrt(Math.pow(newX - pipPosition.x, 2) + Math.pow(newY - pipPosition.y, 2));
    if (distanceMoved > 5) {
      setHasDragged(true);
    }

    // Track position and time for velocity calculation
    setLastMousePosition({
      x: e.clientX,
      y: e.clientY,
      time: currentTime
    });

    // Update position while dragging (no snap yet)
    const pipWidth = getCurrentPipWidth();
    const maxX = window.innerWidth - pipWidth - PIP_MARGIN;
    const maxY = window.innerHeight - (pipWidth * 9 / 16) - PIP_MARGIN;

    setPipPosition({
      x: Math.max(PIP_MARGIN, Math.min(newX, maxX)),
      y: Math.max(PIP_MARGIN, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (isDragging) {
      // If not dragged (just clicked), open phone call
      if (!hasDragged) {
        window.location.href = 'tel:+18442363987';
      } else {
        // Calculate velocity
        const currentTime = Date.now();
        const timeDelta = currentTime - lastMousePosition.time;
        const velocityX = timeDelta > 0 ? (e.clientX - lastMousePosition.x) / timeDelta : 0;
        const velocityY = timeDelta > 0 ? (e.clientY - lastMousePosition.y) / timeDelta : 0;

        // Snap to edge/corner or grid based on velocity and position
        const snapped = snapToEdgeOrCorner(pipPosition.x, pipPosition.y, velocityX, velocityY);
        setPipPosition(snapped);
      }
    }
    setIsDragging(false);
    setHasDragged(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, pipPosition, pipSize, lastMousePosition]);

  // Initialize PiP position to bottom-right corner
  useEffect(() => {
    const pipWidth = getCurrentPipWidth();
    const pipHeight = pipWidth * 9 / 16;
    const defaultX = window.innerWidth - pipWidth - PIP_MARGIN;
    const defaultY = window.innerHeight - pipHeight - PIP_MARGIN;
    setPipPosition({ x: defaultX, y: defaultY });
  }, []);

  // Recalculate position when size changes
  useEffect(() => {
    if (pipSize !== 'fullscreen') {
      const snapped = snapToEdgeOrCorner(pipPosition.x, pipPosition.y, 0, 0);
      setPipPosition(snapped);
    }
  }, [pipSize]);

  return (
    <div className="min-h-screen bg-background">
      {/* Phone Number Banner - At Very Top */}
      {showPhoneBanner && (
        <div
          className={`fixed top-0 left-0 right-0 text-white py-2 z-50 shadow-lg backdrop-blur-md transition-all duration-500`}
          style={{
            backgroundColor: isScrolled ? 'rgba(34, 34, 34, 0.6)' : 'rgba(34, 34, 34, 0.95)'
          }}
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            <a href="tel:1-844-236-3987" className="flex items-center gap-2 hover:opacity-80 transition mx-auto">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Call us: +1 844 AD-NEXUS (844-236-3987)</span>
            </a>
            <button
              onClick={() => setShowPhoneBanner(false)}
              className="p-1 hover:bg-white/10 rounded-full transition"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Navigation - Below Banner */}
      <div className={showPhoneBanner ? 'mt-10' : ''}>
        <Navigation />
      </div>

      {/* Video Hero Section - Pure Black Cinematic with Gradient */}
      <section id="video-section" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${showPhoneBanner ? 'pt-16' : 'pt-6'}`} style={{
        background: 'radial-gradient(ellipse at center center, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 50%)'
      }}>
        {/* Hollywood-style Cinematic Container */}
        <div className="relative w-full max-w-7xl mx-auto px-4 py-8 animate-fadeInUp">
          {/* 16:9 Aspect Ratio for YouTube Video + Underlit Glow */}
          <div className="relative aspect-video bg-black rounded-[30px] overflow-hidden">
            {/* Underlit glow effect behind video - extended beyond edges */}
            <div className="absolute -inset-16 bg-gradient-radial from-white/30 via-white/10 to-transparent blur-3xl opacity-60" />

            {/* Outer glow ring - enhanced */}
            <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-white/60 via-white/40 to-white/60 opacity-90 blur-xl animate-pulse" />

            {/* Border glow frame */}
            <div className="absolute inset-0 rounded-[30px] border-2 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.3)]" />

            {/* Inner frame with glass effect */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute inset-0 rounded-[30px] border-2 border-white/10 bg-gradient-to-b from-white/5 to-transparent"
                style={{
                  boxShadow: 'inset 0 2px 20px rgba(255,255,255,0.1), inset 0 -2px 20px rgba(0,0,0,0.5)',
                }}
              />
            </div>

            {/* Cinematic Vignette Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 120px 60px rgba(0,0,0,0.8)',
              }}
            />

            {/* Static Effect Overlay - Film Grain */}
            {showStatic && (
              <div className="absolute inset-0 z-40 pointer-events-none">
                <div className="h-full w-full bg-white/3 animate-pulse" />
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            )}

            {/* YouTube Video - Matches exact video dimensions, no cropping except rounded corners */}
            <iframe
              ref={heroVideoRef}
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/o_McZxpeaEc?autoplay=1&loop=1&playlist=o_McZxpeaEc&mute=${isPiP || isMuted ? '1' : '0'}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              title="Adnexus Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Subtle Film Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-10">
              <div className="h-full w-full" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
              }} />
            </div>

            {/* Minimalist Video Controls */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3 z-30">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="group flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white transition-all border border-white/10"
              >
                {isMuted ? <VolumeX className="h-4 w-4 text-white group-hover:text-black transition-colors" /> : <Volume2 className="h-4 w-4 text-white group-hover:text-black transition-colors" />}
                <span className="text-xs text-white/90 group-hover:text-black font-medium tracking-wider uppercase transition-colors">{isMuted ? 'Unmute' : 'Mute'}</span>
              </button>

              <button
                onClick={() => {
                  const elem = document.getElementById('video-section');
                  if (elem) {
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    } else {
                      elem.requestFullscreen();
                    }
                  }
                }}
                className="group flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white transition-all border border-white/10"
              >
                <Maximize className="h-4 w-4 text-white group-hover:text-black transition-colors" />
                <span className="text-xs text-white/90 group-hover:text-black font-medium tracking-wider uppercase transition-colors">Fullscreen</span>
              </button>
            </div>

            {/* Cinematic Live Indicator */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-30">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              <span className="text-xs text-white/90 font-medium tracking-widest uppercase">Live</span>
            </div>
          </div>

          {/* Cinematic Caption - Bottom Right Fade-In */}
          <div className="text-right mt-8 animate-slideInRight">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-2 tracking-wide">See AI Ads in Action</h2>
            <p className="text-white/50 text-sm md:text-base tracking-wider uppercase">Experience the future of TV advertising</p>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center gap-3 text-white/30">
            <span className="text-[10px] uppercase tracking-[0.2em] font-light">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce opacity-60" />
          </div>
        </div>
      </section>

      {/* Picture-in-Picture Video - Enhanced Draggable TV */}
      {isPiP && showPiP && (
        <div
          ref={pipContainerRef}
          className={`fixed z-50 transition-all ease-out ${
            pipSize === 'fullscreen' ? 'inset-0 bg-black/98 backdrop-blur-xl duration-500' : isDragging ? 'duration-75' : 'duration-300'
          } ${isDragging ? 'cursor-grabbing scale-105 shadow-2xl' : pipSize === 'fullscreen' ? '' : 'cursor-grab hover:scale-105'}`}
          style={
            pipSize !== 'fullscreen'
              ? {
                  left: `${pipPosition.x}px`,
                  top: `${pipPosition.y}px`,
                  filter: isDragging ? 'brightness(1.1) drop-shadow(0 20px 40px rgba(0,0,0,0.5))' : 'brightness(1)',
                }
              : {}
          }
          onMouseDown={handleMouseDown}
        >
          <div
            className={`relative bg-black overflow-hidden transition-all duration-500 ${
              pipSize === 'fullscreen'
                ? 'w-full h-full'
                : pipSize === 'double'
                ? 'aspect-video rounded-2xl'
                : 'w-96 aspect-video rounded-2xl'
            }`}
            style={pipSize === 'double' ? { width: '768px' } : {}}
          >
            {/* Premium TV Frame Effect with Underlit Glow */}
            {pipSize !== 'fullscreen' && (
              <>
                {/* Underlit radial glow behind PiP - simulates backlight */}
                <div className="absolute -inset-12 rounded-full bg-gradient-radial from-white/30 via-white/10 to-transparent blur-3xl opacity-60" />

                {/* Outer glow ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/40 via-white/20 to-white/40 opacity-75 blur-xl animate-pulse" />

                {/* Inner frame with glass effect */}
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/10 bg-gradient-to-b from-white/5 to-transparent"
                    style={{
                      boxShadow: 'inset 0 2px 20px rgba(255,255,255,0.1), inset 0 -2px 20px rgba(0,0,0,0.5)',
                    }}
                  />
                </div>

                {/* Scan line effect */}
                <div className="absolute inset-0 pointer-events-none z-10 opacity-10">
                  <div className="h-full w-full animate-scan"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                    }}
                  />
                </div>
              </>
            )}

            {/* YouTube Video - Proper 16:9 Aspect Ratio */}
            <div className="absolute inset-0 overflow-hidden">
              <iframe
                ref={videoRef}
                className={`absolute top-0 left-0 w-full h-full object-cover ${pipSize !== 'fullscreen' ? 'rounded-2xl' : ''}`}
                style={{
                  aspectRatio: '16 / 9',
                  pointerEvents: 'none', // Disable iframe clicks to allow dragging
                }}
                src={`https://www.youtube.com/embed/o_McZxpeaEc?autoplay=1&loop=1&playlist=o_McZxpeaEc&mute=${!isPiP || isMuted ? '1' : '0'}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                title="Adnexus Demo PiP"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Transparent overlay for easier clicking and dragging */}
              <div className="absolute inset-0 z-5" />
            </div>

            {/* Enhanced PiP Controls - Clean and minimal */}
            <div className={`absolute ${pipSize === 'fullscreen' ? 'bottom-10' : 'bottom-3'} ${pipSize === 'fullscreen' ? 'right-10' : 'right-3'} flex items-center gap-2 z-30`}>
              {/* Sound Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="group relative p-2.5 bg-black/90 backdrop-blur-md rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 border border-white/10"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="h-4 w-4 text-white group-hover:text-black transition-colors" /> : <Volume2 className="h-4 w-4 text-white group-hover:text-black transition-colors" />}
              </button>

              {/* Size Toggle - cycles through normal -> double -> fullscreen -> normal */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (pipSize === 'normal') {
                    setPipSize('double');
                  } else if (pipSize === 'double') {
                    setPipSize('fullscreen');
                  } else {
                    setPipSize('normal');
                  }
                }}
                className="group relative p-2.5 bg-black/90 backdrop-blur-md rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 border border-white/10"
                title={pipSize === 'fullscreen' ? 'Normal Size' : pipSize === 'double' ? 'Fullscreen' : 'Double Size'}
              >
                {pipSize === 'fullscreen' ? (
                  <Minimize2 className="h-4 w-4 text-white group-hover:text-black transition-colors" />
                ) : (
                  <Maximize2 className="h-4 w-4 text-white group-hover:text-black transition-colors" />
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPiP(false);
                }}
                className="group relative p-2.5 bg-black/90 backdrop-blur-md rounded-full hover:bg-red-600 transition-all duration-300 shadow-lg hover:scale-110 border border-white/10"
                title="Close"
              >
                <X className="h-4 w-4 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Live indicator on PiP */}
            {pipSize !== 'fullscreen' && (
              <div className="absolute top-3 right-3 z-20">
                <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                  <span className="text-[10px] text-white/80 font-medium tracking-widest uppercase">Live</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Grow your brand<br />
              <span className="text-primary">with TV Ads</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Generate business outcomes with the easiest-to-use Streaming TV Ad Platform.
              Built for brands of all sizes.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleEmailSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="What's your work email?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" size="lg" className="px-8">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-12">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span>5.0 on Trustpilot</span>
            </div>

            {/* Premium TV Platforms Ticker */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                  Available on Premium TV Platforms
                </h3>
              </div>

              <div className="relative overflow-hidden py-4">
                <div className="flex animate-scroll gap-6">
                  {[...channels, ...channels].map((channel, idx) => (
                    <div key={idx} className="flex-shrink-0 px-5 py-2.5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 hover:shadow-lg">
                      <span className="text-sm font-semibold text-foreground">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Link to="/platform/overview" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline">
                  View all 500+ channels
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold">
              10,000+ performance marketers have generated millions in revenue with Adnexus
            </p>
          </div>
        </div>
      </section>

      {/* Ad Exchange Network Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Adnexus Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-performance programmatic advertising infrastructure connecting premium publishers with performance-driven advertisers
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100M+</div>
                <p className="text-sm text-muted-foreground">Monthly Impressions<br />Available in US</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Premium<br />TV Channels</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">&lt;50ms</div>
                <p className="text-sm text-muted-foreground">Average Bid<br />Response Time</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Platform<br />Uptime SLA</p>
              </CardContent>
            </Card>
          </div>

          {/* Two Products */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* SSP Product */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Tv className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Supply-Side Platform (SSP)</h3>
                    <p className="text-sm text-muted-foreground">For Publishers & Content Owners</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Monetize your CTV/OTT inventory with our enterprise-grade SSP. Connect to hundreds of demand partners and maximize your ad revenue.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Real-time bidding with 100+ DSP integrations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced header bidding & waterfall optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Floor price optimization with AI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Brand safety & fraud prevention built-in</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Real-time analytics & revenue reporting</span>
                  </div>
                </div>

                <Link to="/ssp">
                  <Button className="w-full" size="lg">
                    Explore SSP
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* DSP Product */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Demand-Side Platform (DSP)</h3>
                    <p className="text-sm text-muted-foreground">For Advertisers & Agencies</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Launch high-performance CTV/OTT campaigns across 500+ premium channels. AI-powered optimization delivers measurable results.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Access to 100M+ monthly US impressions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Precision audience targeting with 1st party data</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">AI-powered bid optimization & pacing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multi-touch attribution & conversion tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Self-service platform with white-glove support</span>
                  </div>
                </div>

                <Link to="/dsp">
                  <Button className="w-full" size="lg">
                    Explore DSP
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Technical Excellence */}
          <div className="mt-16 p-8 bg-black/5 dark:bg-white/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-center mb-8">Built for Performance at Scale</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Enterprise Security</h4>
                <p className="text-sm text-muted-foreground">SOC 2 Type II certified with end-to-end encryption and fraud detection</p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Ultra-Low Latency</h4>
                <p className="text-sm text-muted-foreground">Sub-50ms bid responses with globally distributed infrastructure</p>
              </div>
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Real-Time Analytics</h4>
                <p className="text-sm text-muted-foreground">Live dashboards with granular reporting and actionable insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Achieve your business goals with TV Ads
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <goal.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Adnexus Studio - Ad Creation Made Easy */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Create Premium TV Ads in Minutes
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Adnexus Studio makes professional TV ad creation simple. No expensive production crews or agencies required.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Your Template</h3>
                    <p className="text-sm text-muted-foreground">Select from 100+ professionally designed CTV ad templates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Customize Your Message</h3>
                    <p className="text-sm text-muted-foreground">Add your brand assets, messaging, and call-to-action</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Launch Your Campaign</h3>
                    <p className="text-sm text-muted-foreground">Deploy to 500+ channels instantly with our DSP</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/studio">
                  <Button size="lg">
                    Try Adnexus Studio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://cal.com/adnexus">
                  <Button size="lg" variant="outline">
                    Book a Demo
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-20 w-20 text-white mx-auto mb-4 opacity-80" />
                    <p className="text-white/80 font-medium">Studio Preview</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
                <p className="text-sm font-bold">No production costs!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & White Paper Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              The State of CTV Advertising 2025
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading research on the value of premium Connected TV advertising
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">87%</div>
                <p className="text-sm text-muted-foreground">of consumers trust CTV ads more than social media ads</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">3.2x</div>
                <p className="text-sm text-muted-foreground">higher brand recall compared to traditional linear TV</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">65%</div>
                <p className="text-sm text-muted-foreground">of CTV viewers take action after seeing relevant ads</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Download Our Free White Paper
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the complete research report on CTV advertising effectiveness, audience insights, and ROI benchmarks from 10,000+ campaigns.
              </p>

              <div className="max-w-md mx-auto mb-6">
                <form onSubmit={handleEmailSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit" size="lg">
                    Download PDF
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>35-page report</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Industry benchmarks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Case studies</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Made for marketers. Built for outcomes.
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to run successful TV advertising campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <Link to="/platform/overview" className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            For startups, large companies, and everyone in between
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button size="lg" variant="outline">
                View All Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Get started with Adnexus in minutes.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of brands already seeing results
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="What's your work email?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white text-black"
              />
              <Button size="lg" variant="secondary" className="px-8">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 text-sm mt-6 opacity-90">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-white" />
              ))}
            </div>
            <span>5.0 on Trustpilot</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          {/* TV Platform Logos with Glow */}
          <div className="mb-16">
            <h3 className="text-center text-white/40 text-xs uppercase tracking-widest mb-8">Available on Premium TV Platforms</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
              {['Apple TV+', 'Hulu', 'Roku', 'Paramount+', 'Peacock', 'Pluto TV'].map((platform, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <span className="text-white/80 text-sm font-medium tracking-wide group-hover:text-white transition-colors">{platform}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mt-6">
              {['Tubi', 'Samsung TV+', 'ESPN', 'Discovery+', 'AMC+', 'Fox News'].map((platform, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <span className="text-white/80 text-sm font-medium tracking-wide group-hover:text-white transition-colors">{platform}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mt-6">
              {['CNN', 'Bloomberg TV', 'NBC Sports', 'CBS Sports', 'NFL Network', 'NBA TV'].map((platform, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <span className="text-white/80 text-sm font-medium tracking-wide group-hover:text-white transition-colors">{platform}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4 text-white">Industries</h3>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/advertisers" className="hover:text-white transition-colors">Ecommerce</Link></li>
                <li><Link to="/advertisers" className="hover:text-white transition-colors">Apps & Gaming</Link></li>
                <li><Link to="/advertisers" className="hover:text-white transition-colors">B2B</Link></li>
                <li><Link to="/agencies" className="hover:text-white transition-colors">Media & Agencies</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Features</h3>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/platform/overview" className="hover:text-white transition-colors">Apps & Channels</Link></li>
                <li><Link to="/platform/plan" className="hover:text-white transition-colors">Audience Targeting</Link></li>
                <li><Link to="/platform/activate" className="hover:text-white transition-colors">AI Optimization</Link></li>
                <li><Link to="/platform/measure" className="hover:text-white transition-colors">Measurement</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Blog</Link></li>
                <li><a href="https://cal.com/adnexus" className="hover:text-white transition-colors">Book Demo</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/company" className="hover:text-white transition-colors">Newsroom</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-sm text-white/40">
            <p>© 2025 Adnexus Technology, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewIndex;