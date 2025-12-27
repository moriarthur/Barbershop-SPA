import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface PromoBannerProps {
  onBookNow: () => void;
}

export function PromoBanner({ onBookNow }: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-primary/95 to-primary/80 backdrop-blur-sm border-b border-primary/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm">
              <span className="text-primary-foreground text-xl">%</span>
            </div>
            <div className="flex-1">
              <p className="text-primary-foreground text-sm sm:text-base">
                <span className="font-semibold">Neujahrs-Special:</span> Jetzt bis zu 25% sparen auf ausgewählte Services
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              onClick={onBookNow}
              size="sm"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hidden sm:inline-flex"
            >
              Jetzt buchen
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-1"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
