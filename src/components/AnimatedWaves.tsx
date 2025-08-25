import React from 'react';

interface AnimatedWavesProps {
  className?: string;
}

export const AnimatedWaves: React.FC<AnimatedWavesProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 600"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Darker gradients for more visible waves */}
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.4}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.25}} />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.35}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.2}} />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.3}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.15}} />
          </linearGradient>
          <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.25}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.12}} />
          </linearGradient>
          <linearGradient id="waveGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.32}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.18}} />
          </linearGradient>
        </defs>
        
        {/* Wave 1 - Deepest layer, slowest */}
        <path
          d="M0,420 C180,320 380,520 600,420 C820,320 1020,520 1200,420 L1200,600 L0,600 Z"
          fill="url(#waveGradient1)"
          className="animate-[wave1_22s_ease-in-out_infinite]"
        />
        
        {/* Wave 2 - Second layer */}
        <path
          d="M0,380 C120,280 320,480 600,380 C880,280 1080,480 1200,380 L1200,600 L0,600 Z"
          fill="url(#waveGradient2)"
          className="animate-[wave2_18s_ease-in-out_infinite_reverse]"
        />
        
        {/* Wave 3 - Third layer */}
        <path
          d="M0,450 C220,350 420,550 600,450 C780,350 980,550 1200,450 L1200,600 L0,600 Z"
          fill="url(#waveGradient3)"
          className="animate-[wave3_14s_ease-in-out_infinite]"
        />
        
        {/* Wave 4 - Fourth layer, more dynamic */}
        <path
          d="M0,350 C160,250 360,450 600,350 C840,250 1040,450 1200,350 L1200,600 L0,600 Z"
          fill="url(#waveGradient4)"
          className="animate-[wave4_16s_ease-in-out_infinite_reverse]"
        />
        
        {/* Wave 5 - Top layer, fastest and most visible */}
        <path
          d="M0,320 C200,220 400,420 600,320 C800,220 1000,420 1200,320 L1200,600 L0,600 Z"
          fill="url(#waveGradient5)"
          className="animate-[wave5_12s_ease-in-out_infinite]"
        />
        
        {/* Enhanced floating particles for depth */}
        <circle cx="200" cy="200" r="2" fill="hsl(var(--primary))" opacity="0.6" className="animate-[float1_8s_ease-in-out_infinite]" />
        <circle cx="800" cy="150" r="1.5" fill="hsl(var(--accent))" opacity="0.7" className="animate-[float2_12s_ease-in-out_infinite]" />
        <circle cx="1000" cy="300" r="2.5" fill="hsl(var(--primary))" opacity="0.5" className="animate-[float3_6s_ease-in-out_infinite]" />
        <circle cx="400" cy="100" r="1" fill="hsl(var(--accent))" opacity="0.8" className="animate-[float1_10s_ease-in-out_infinite]" />
        <circle cx="600" cy="250" r="1.8" fill="hsl(var(--muted-foreground))" opacity="0.4" className="animate-[float2_9s_ease-in-out_infinite]" />
        <circle cx="300" cy="180" r="1.2" fill="hsl(var(--primary))" opacity="0.6" className="animate-[float3_11s_ease-in-out_infinite]" />
        <circle cx="900" cy="280" r="2.2" fill="hsl(var(--accent))" opacity="0.5" className="animate-[float1_7s_ease-in-out_infinite]" />
      </svg>
      
      <style>{`
        @keyframes wave1 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          25% { 
            transform: translateX(-30px) translateY(-12px);
          }
          50% { 
            transform: translateX(0) translateY(-25px);
          }
          75% { 
            transform: translateX(30px) translateY(-12px);
          }
        }
        
        @keyframes wave2 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          33% { 
            transform: translateX(35px) translateY(-18px);
          }
          66% { 
            transform: translateX(-25px) translateY(-30px);
          }
        }
        
        @keyframes wave3 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(-20px) translateY(-35px);
          }
        }
        
        @keyframes wave4 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          25% { 
            transform: translateX(40px) translateY(-20px);
          }
          50% { 
            transform: translateX(-10px) translateY(-40px);
          }
          75% { 
            transform: translateX(-30px) translateY(-15px);
          }
        }
        
        @keyframes wave5 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          20% { 
            transform: translateX(-35px) translateY(-25px);
          }
          40% { 
            transform: translateX(15px) translateY(-45px);
          }
          60% { 
            transform: translateX(25px) translateY(-30px);
          }
          80% { 
            transform: translateX(-15px) translateY(-20px);
          }
        }
        
        @keyframes float1 {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-40px) translateX(0);
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-20px) translateX(-10px);
            opacity: 0.7;
          }
        }
        
        @keyframes float2 {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          33% { 
            transform: translateY(-30px) translateX(-15px);
            opacity: 0.7;
          }
          66% { 
            transform: translateY(-60px) translateX(15px);
            opacity: 0.3;
          }
        }
        
        @keyframes float3 {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-50px) translateX(-20px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};