import React from "react";
import { cn } from "@/lib/utils";

// You would replace these with actual client logos
const clientLogos = [
  { name: "Netflix", url: "/logos/netflix.svg" },
  { name: "Disney+", url: "/logos/disney.svg" },
  { name: "Hulu", url: "/logos/hulu.svg" },
  { name: "Amazon Prime", url: "/logos/amazon.svg" },
  { name: "HBO Max", url: "/logos/hbo.svg" },
  { name: "Apple TV+", url: "/logos/apple.svg" },
  { name: "Paramount+", url: "/logos/paramount.svg" },
  { name: "Peacock", url: "/logos/peacock.svg" },
  { name: "Discovery+", url: "/logos/discovery.svg" },
  { name: "ESPN+", url: "/logos/espn.svg" },
];

// For now, we'll use placeholder text since logos aren't available
const placeholderLogos = [
  "Netflix", "Disney+", "Hulu", "Amazon Prime", "HBO Max",
  "Apple TV+", "Paramount+", "Peacock", "Discovery+", "ESPN+",
  "Samsung TV", "Roku", "Pluto TV", "Tubi", "Vudu"
];

export const ClientLogoTicker = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full overflow-hidden bg-background/50 py-8 border-y border-border/50", className)}>
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider">
          Trusted by Leading Brands
        </p>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-ticker">
              {[...placeholderLogos, ...placeholderLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[150px] px-8"
                >
                  <span className="text-lg font-semibold text-muted-foreground/70 hover:text-primary transition-colors whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};