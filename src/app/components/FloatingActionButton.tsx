import React from 'react';
import { Phone, ChevronUp, Calendar } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';

interface FloatingActionButtonProps {
  onBookNow: () => void;
}

export function FloatingActionButton({ onBookNow }: FloatingActionButtonProps) {
  const { isScrolled, footerOffset } = useScroll();

  return (
    <div
      className={`fixed right-6 z-40 flex flex-col gap-3 ${
        isScrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        bottom: `${footerOffset}px`,
        transition: 'opacity 0.4s ease-in-out, bottom 0.3s ease-out'
      }}
    >
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center shadow-lg hover:bg-card transition-all duration-200 hover:scale-105 cursor-pointer"
        aria-label="Nach oben"
      >
        <ChevronUp className="text-primary" size={20} />
      </button>

      {/* Call Button - Desktop only */}
      <a
        href="tel:061120779"
        className="hidden md:flex w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm items-center justify-center shadow-lg hover:bg-primary transition-all duration-200 hover:scale-105"
        aria-label="Anrufen"
      >
        <Phone className="text-primary-foreground" size={20} />
      </a>

      {/* Book Button - Desktop only */}
      <button
        onClick={onBookNow}
        className="hidden md:flex w-12 h-12 rounded-full bg-primary backdrop-blur-sm items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 cursor-pointer"
        aria-label="Termin buchen"
      >
        <Calendar className="text-primary-foreground" size={20} />
      </button>
    </div>
  );
}
