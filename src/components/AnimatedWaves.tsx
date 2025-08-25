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
          {/* Even lower opacity waves */}
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.12}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.08}} />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.12}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.08}} />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.12}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.08}} />
          </linearGradient>
          <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.12}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.08}} />
          </linearGradient>
          <linearGradient id="waveGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.12}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.08}} />
          </linearGradient>
        </defs>
        
        {/* Wave 1 - Deepest layer, starts lower */}
        <path
          d="M0,480 C180,400 380,580 600,480 C820,400 1020,580 1200,480 L1200,700 L0,700 Z"
          fill="url(#waveGradient1)"
          className="animate-[wave1_22s_ease-in-out_infinite]"
        />
        
        {/* Wave 2 - Second layer, also lower */}
        <path
          d="M0,450 C120,370 320,530 600,450 C880,370 1080,530 1200,450 L1200,700 L0,700 Z"
          fill="url(#waveGradient2)"
          className="animate-[wave2_18s_ease-in-out_infinite_reverse]"
        />
        
        {/* Wave 3 - Third layer, positioned lower */}
        <path
          d="M0,520 C220,440 420,600 600,520 C780,440 980,600 1200,520 L1200,700 L0,700 Z"
          fill="url(#waveGradient3)"
          className="animate-[wave3_14s_ease-in-out_infinite]"
        />
        
        {/* Wave 4 - Fourth layer, lower positioning */}
        <path
          d="M0,420 C160,340 360,500 600,420 C840,340 1040,500 1200,420 L1200,700 L0,700 Z"
          fill="url(#waveGradient4)"
          className="animate-[wave4_16s_ease-in-out_infinite_reverse]"
        />
        
        {/* Wave 5 - Top layer, still below fold */}
        <path
          d="M0,390 C200,310 400,470 600,390 C800,310 1000,470 1200,390 L1200,700 L0,700 Z"
          fill="url(#waveGradient5)"
          className="animate-[wave5_12s_ease-in-out_infinite]"
        />
        
        {/* Removed all floating particles to eliminate moving dots */}
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