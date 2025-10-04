import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Pause, Maximize, Upload, Film, Sparkles, Download } from 'lucide-react';

export const StudioDemo: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          See Adnexus Studio in Action
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
          Professional TV ad creation in your browser.
        </p>
        <Button size="lg" asChild>
          <a href="https://studio.ad.nexus" target="_blank" rel="noopener noreferrer">
            Launch Studio
          </a>
        </Button>
      </div>
    </div>
  );
};