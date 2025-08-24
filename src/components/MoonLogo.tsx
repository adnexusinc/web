import React from "react";
import { cn } from "@/lib/utils";

interface MoonLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const MoonLogo: React.FC<MoonLogoProps> = ({ className, size = "md" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-10 h-10"
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Main moon disc */}
      <div className={cn(
        sizeClasses[size],
        "relative bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-inner transition-all duration-500",
        "group-hover:scale-110 group-hover:from-white group-hover:to-gray-200 group-hover:shadow-lg"
      )}>
        {/* Moon craters/texture */}
        <div className="absolute inset-0 rounded-full opacity-20">
          <div className="absolute top-2 left-2 w-2 h-2 bg-gray-400 rounded-full" />
          <div className="absolute bottom-3 right-2 w-1.5 h-1.5 bg-gray-400 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-gray-400 rounded-full" />
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md" />
      </div>

      {/* Animated stars */}
      <svg className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] pointer-events-none">
        {/* Star 1 - top right */}
        <g className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
          <circle 
            cx="85%" 
            cy="20%" 
            r="1.5" 
            fill="white"
            className="animate-pulse"
          >
            <animate 
              attributeName="r" 
              values="1.5;2;1.5" 
              dur="2s" 
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Star 2 - bottom left */}
        <g className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
          <circle 
            cx="15%" 
            cy="75%" 
            r="1" 
            fill="white"
            className="animate-pulse"
          >
            <animate 
              attributeName="r" 
              values="1;1.5;1" 
              dur="2.5s" 
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Star 3 - top left */}
        <g className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
          <circle 
            cx="25%" 
            cy="15%" 
            r="0.8" 
            fill="white"
          >
            <animate 
              attributeName="opacity" 
              values="0.5;1;0.5" 
              dur="3s" 
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Star 4 - right middle */}
        <g className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400">
          <circle 
            cx="90%" 
            cy="50%" 
            r="1.2" 
            fill="white"
          >
            <animate 
              attributeName="opacity" 
              values="0.3;1;0.3" 
              dur="2.2s" 
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Sparkle lines for stars */}
        <g className="opacity-0 group-hover:opacity-100 transition-all duration-700">
          {/* Top right star sparkles */}
          <path 
            d="M 85% 18% L 85% 22%" 
            stroke="white" 
            strokeWidth="0.5" 
            opacity="0.6"
            className="animate-pulse"
          />
          <path 
            d="M 83% 20% L 87% 20%" 
            stroke="white" 
            strokeWidth="0.5" 
            opacity="0.6"
            className="animate-pulse"
          />
        </g>
      </svg>

      {/* Orbital ring animation on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-full border border-white animate-ping" />
      </div>
    </div>
  );
};

export default MoonLogo;