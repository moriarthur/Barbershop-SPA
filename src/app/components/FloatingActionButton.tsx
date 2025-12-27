import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

interface FloatingActionButtonProps {
  onBookNow: () => void;
}

export function FloatingActionButton({ onBookNow }: FloatingActionButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Call Button */}
      <a
        href="tel:061120779"
        className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-primary transition-all duration-300 hover:scale-110 group"
        aria-label="Anrufen"
      >
        <Phone className="text-primary-foreground" size={24} />
      </a>

      {/* Book Button */}
      <button
        onClick={onBookNow}
        className="w-14 h-14 rounded-full bg-primary backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 group"
        aria-label="Termin buchen"
      >
        <span className="text-primary-foreground text-xs uppercase tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
          Book
        </span>
      </button>
    </div>
  );
}
