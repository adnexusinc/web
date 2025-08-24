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
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.1}} />
            <stop offset="50%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.05}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.08}} />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.08}} />
            <stop offset="50%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.03}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.06}} />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--muted-foreground))', stopOpacity: 0.03}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.05}} />
          </linearGradient>
        </defs>
        
        {/* Wave 1 - Slowest, most prominent */}
        <path
          d="M0,400 C150,300 350,500 600,400 C850,300 1050,500 1200,400 L1200,600 L0,600 Z"
          fill="url(#waveGradient1)"
          className="animate-[wave1_20s_ease-in-out_infinite]"
        />
        
        {/* Wave 2 - Medium speed */}
        <path
          d="M0,450 C200,350 400,550 600,450 C800,350 1000,550 1200,450 L1200,600 L0,600 Z"
          fill="url(#waveGradient2)"
          className="animate-[wave2_15s_ease-in-out_infinite_reverse]"
        />
        
        {/* Wave 3 - Fastest, most subtle */}
        <path
          d="M0,500 C250,400 450,600 600,500 C750,400 950,600 1200,500 L1200,600 L0,600 Z"
          fill="url(#waveGradient3)"
          className="animate-[wave3_10s_ease-in-out_infinite]"
        />
        
        {/* Floating particles */}
        <circle cx="200" cy="200" r="2" fill="hsl(var(--primary))" opacity="0.3" className="animate-[float1_8s_ease-in-out_infinite]" />
        <circle cx="800" cy="150" r="1.5" fill="hsl(var(--accent))" opacity="0.4" className="animate-[float2_12s_ease-in-out_infinite]" />
        <circle cx="1000" cy="300" r="2.5" fill="hsl(var(--primary))" opacity="0.2" className="animate-[float3_6s_ease-in-out_infinite]" />
        <circle cx="400" cy="100" r="1" fill="hsl(var(--accent))" opacity="0.5" className="animate-[float1_10s_ease-in-out_infinite]" />
      </svg>
      
      <style>{`
        @keyframes wave1 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          25% { 
            transform: translateX(-25px) translateY(-10px);
          }
          50% { 
            transform: translateX(0) translateY(-20px);
          }
          75% { 
            transform: translateX(25px) translateY(-10px);
          }
        }
        
        @keyframes wave2 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          33% { 
            transform: translateX(30px) translateY(-15px);
          }
          66% { 
            transform: translateX(-20px) translateY(-25px);
          }
        }
        
        @keyframes wave3 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(-15px) translateY(-30px);
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