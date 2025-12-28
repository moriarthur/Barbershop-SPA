import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

interface FloatingActionButtonProps {
  onBookNow: () => void;
}

export function FloatingActionButton({ onBookNow }: FloatingActionButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24); // default bottom-6 (24px)

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling down 300px
      setIsVisible(window.scrollY > 300);

      // Calculate footer position
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Footer vertical center from bottom of viewport
        const footerCenterFromBottom = windowHeight - footerRect.top - footerRect.height / 2;

        // If footer is visible, stop buttons at its center
        if (footerRect.top < windowHeight) {
          // The buttons should stop when their bottom reaches footer center
          const targetBottom = Math.max(24, footerCenterFromBottom);
          setBottomOffset(targetBottom);
        } else {
          setBottomOffset(24); // default position
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-6 z-40 flex flex-col space-y-3 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ bottom: `${bottomOffset}px` }}
    >
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
        className="w-14 h-14 rounded-full bg-primary backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 group cursor-pointer"
        aria-label="Termin buchen"
      >
        <span className="text-primary-foreground text-xs uppercase tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
          Book
        </span>
      </button>
    </div>
  );
}
