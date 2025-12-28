import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import interiorImage from '../../assets/interior_3.png';
import logo2 from '../../assets/logo_2.png';

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={interiorImage}
          alt="Interior_3"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-foreground select-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Schiersteiner<br />
            <span className="text-primary">Barbershop</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-primary/90 mb-6 select-none" style={{ fontFamily: 'Playfair Display, serif' }}>
            For Ladies & Gentlemen
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed select-none">
            Erleben Sie klassisches Barbier-Handwerk in stilvollem Ambiente.
            Tradition trifft auf moderne Perfektion – für anspruchsvolle Damen und Herren.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={onBookNow}
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg select-none relative z-30"
            >
              Jetzt Termin buchen
            </Button>
            <a href="tel:061120779">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg select-none"
              >
                0611 - 20 779
              </Button>
            </a>
          </div>

          {/* Hours Badge */}
          <div className="mt-16 inline-flex flex-col items-center justify-center px-8 py-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg select-none">
            <div className="text-primary uppercase tracking-wider text-xs mb-1">
              Öffnungszeiten
            </div>
            <div className="text-foreground">
              MO-SA: 9:00 - 19:00
            </div>
            <div className="text-muted-foreground text-sm">
              SO: Geschlossen
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <img
          src={logo2}
          alt="Schiersteiner Barbershop"
          className="w-48 h-48 sm:w-56 sm:h-56 object-contain brightness-95 drop-shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent blur-sm rounded-full"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
