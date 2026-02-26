import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import interiorImage from '../../assets/optimized/Interior_3.webp';
import logo2 from '../../assets/optimized/logo_placaholder.png';
import { useScroll } from '../hooks/useScroll';

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { scrollY } = useScroll();

  // Detect desktop on mount and resize
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Fix mobile viewport height - handle resize and orientation changes
  useEffect(() => {
    if (isDesktop || !sectionRef.current) return;

    const setMobileHeight = () => {
      sectionRef.current!.style.height = `${window.innerHeight}px`;
    };

    // Set initial height
    setMobileHeight();

    // Handle resize and orientation changes
    window.addEventListener('resize', setMobileHeight);
    window.addEventListener('orientationchange', setMobileHeight);

    return () => {
      window.removeEventListener('resize', setMobileHeight);
      window.removeEventListener('orientationchange', setMobileHeight);
    };
  }, [isDesktop]);

  // Only run parallax effect on desktop
  useEffect(() => {
    if (!isDesktop || !bgRef.current) return;
    bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
  }, [scrollY, isDesktop]);

  return (
    <section ref={sectionRef} className="relative md:min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Image - Desktop with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 hidden md:block will-change-transform"
      >
        <img
          src={interiorImage}
          alt="[Ihr Friseursalon Name] elegantes Interieur mit vintage Dekor und warmem Ambiente"
          width="1920"
          height="1080"
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-500 blur-sm ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background"></div>
      </div>
      {/* Mobile static background */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src={interiorImage}
          alt="[Ihr Friseursalon Name] elegantes Interieur mit vintage Dekor und warmem Ambiente"
          width="1920"
          height="1080"
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-500 blur-sm ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          style={{ transform: 'translateZ(0)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-20 text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {/* Main Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            [Ihr Friseursalon{' '}
            <span className="text-primary">Name]</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary/90" style={{ fontFamily: 'Playfair Display, serif' }}>
            For Ladies & Gentlemen
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Erleben Sie klassisches Barbier-Handwerk in stilvollem Ambiente.
            Tradition trifft auf moderne Perfektion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={onBookNow}
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 text-base select-none relative z-30"
            >
              Jetzt Termin buchen
            </Button>
            <a href="tel:[Ihre Telefonnummer ohne Leerzeichen]">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-6 py-4 text-base select-none"
              >
                [Ihre Telefonnummer]
              </Button>
            </a>
          </div>

          {/* Hours Badge */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="inline-flex flex-col items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl shadow-lg">
              <div className="text-primary uppercase tracking-wider text-[10px] sm:text-xs mb-1">
                Öffnungszeiten
              </div>
              <div className="text-foreground font-medium text-base sm:text-lg">
                [Ihre Öffnungszeiten Kurzform]
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">
                SO: Geschlossen
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-10">
        <div className="relative w-28 h-28 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <img
            src={logo2}
            alt="[Ihr Friseursalon Name]"
            width="512"
            height="512"
            loading="eager"
            fetchpriority="high"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent blur-md rounded-full"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent z-0"></div>
    </section>
  );
}
