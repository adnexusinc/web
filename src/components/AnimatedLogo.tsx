import React from 'react';

export const AnimatedLogo = () => {
  return (
    <div className="relative group">
      <div className="text-3xl font-bold tracking-tight flex items-center gap-2">
        <div className="relative">
          {/* Animated cube/3D effect */}
          <div className="w-8 h-8 relative transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-300 rounded-lg shadow-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-gray-200 to-white rounded-lg transform translate-x-0.5 translate-y-0.5 opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-lg transform -translate-x-0.5 -translate-y-0.5"></div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 w-8 h-8 bg-white rounded-lg blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>
        
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          AdNexus
        </span>
      </div>
      
      {/* Floating particles */}
      <div className="absolute -inset-2 pointer-events-none">
        <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-2 right-0 w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-0 left-2 w-0.5 h-0.5 bg-white rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};