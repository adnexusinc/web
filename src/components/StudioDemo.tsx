import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Pause, Maximize, Upload, Film, Sparkles, Download } from 'lucide-react';

export const StudioDemo: React.FC = () => {
  return (
    <div className="w-full bg-black text-white pt-64 pb-30">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-medium mb-4 leading-tight">
          See Adnexus<br />Studio in Action
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
          Professional TV ad creation in your browser.
        </p>
        <Button size="lg" className="border-2 border-white/20" asChild>
          <a href="https://studio.ad.nexus" target="_blank" rel="noopener noreferrer">
            Launch Studio
          </a>
        </Button>
      </div>
    </div>
  );
};