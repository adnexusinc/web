import React from 'react';

interface AnimatedWavesProps {
  className?: string;
}

export const AnimatedWaves: React.FC<AnimatedWavesProps> = ({ className = "" }) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 pointer-events-none overflow-hidden ${className}`} style={{height: '60vh'}}>
      <svg
        viewBox="0 0 1200 400"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="xMidYEnd slice"
      >
        
        {/* Wave 1 - Bottom line, thickest */}
        <path
          d="M0,350 C180,280 380,420 600,350 C820,280 1020,420 1200,350"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="3"
          opacity="0.6"
          className="animate-[wave1_22s_ease-in-out_infinite]"
        />
        
        {/* Wave 2 - Second line */}
        <path
          d="M0,320 C120,250 320,390 600,320 C880,250 1080,390 1200,320"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="2.5"
          opacity="0.5"
          className="animate-[wave2_18s_ease-in-out_infinite_reverse]"
        />
        
        {/* Wave 3 - Third line */}
        <path
          d="M0,290 C220,220 420,360 600,290 C780,220 980,360 1200,290"
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2"
          opacity="0.7"
          className="animate-[wave3_14s_ease-in-out_infinite]"
        />
        
        {/* Wave 4 - Fourth line */}
        <path
          d="M0,260 C160,190 360,330 600,260 C840,190 1040,330 1200,260"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
          opacity="0.4"
          className="animate-[wave4_16s_ease-in-out_infinite_reverse]"
        />
        
        {/* Wave 5 - Top line, thinnest */}
        <path
          d="M0,230 C200,160 400,300 600,230 C800,160 1000,300 1200,230"
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          opacity="0.8"
          className="animate-[wave5_12s_ease-in-out_infinite]"
        />
        
        {/* Minimal floating dots */}
        <circle cx="200" cy="200" r="1" fill="hsl(var(--foreground))" opacity="0.3" className="animate-[float1_8s_ease-in-out_infinite]" />
        <circle cx="800" cy="150" r="0.8" fill="hsl(var(--muted-foreground))" opacity="0.4" className="animate-[float2_12s_ease-in-out_infinite]" />
        <circle cx="1000" cy="300" r="1.2" fill="hsl(var(--foreground))" opacity="0.2" className="animate-[float3_6s_ease-in-out_infinite]" />
        <circle cx="400" cy="180" r="0.6" fill="hsl(var(--muted-foreground))" opacity="0.5" className="animate-[float1_10s_ease-in-out_infinite]" />
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