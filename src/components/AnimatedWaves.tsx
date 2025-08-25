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
          {/* 2x darker waves */}
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.24}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.16}} />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.24}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.16}} />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.24}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.16}} />
          </linearGradient>
          <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.24}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.16}} />
          </linearGradient>
          <linearGradient id="waveGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.24}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.16}} />
          </linearGradient>
        </defs>
        
        {/* Wave 1 - Deepest layer, pushed lower */}
        <path
          d="M0,540 C180,460 380,640 600,540 C820,460 1020,640 1200,540 L1200,700 L0,700 Z"
          fill="url(#waveGradient1)"
          className="animate-[wave1_22s_ease-in-out_infinite]"
        />
        
        {/* Wave 2 - Second layer, pushed lower */}
        <path
          d="M0,510 C120,430 320,590 600,510 C880,430 1080,590 1200,510 L1200,700 L0,700 Z"
          fill="url(#waveGradient2)"
          className="animate-[wave2_18s_ease-in-out_infinite_reverse]"
        />
        
        {/* Wave 3 - Third layer, pushed lower */}
        <path
          d="M0,580 C220,500 420,660 600,580 C780,500 980,660 1200,580 L1200,700 L0,700 Z"
          fill="url(#waveGradient3)"
          className="animate-[wave3_14s_ease-in-out_infinite]"
        />
        
        {/* Wave 4 - Fourth layer, pushed lower */}
        <path
          d="M0,480 C160,400 360,560 600,480 C840,400 1040,560 1200,480 L1200,700 L0,700 Z"
          fill="url(#waveGradient4)"
          className="animate-[wave4_16s_ease-in-out_infinite_reverse]"
        />
        
        {/* Wave 5 - Top layer, pushed lower */}
        <path
          d="M0,450 C200,370 400,530 600,450 C800,370 1000,530 1200,450 L1200,700 L0,700 Z"
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