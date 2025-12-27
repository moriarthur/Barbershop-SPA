import React from 'react';
import { Button } from './ui/button';

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1763669029167-fe7a6619219d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYmFyYmVyc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc2Njg2MTY2NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Schiersteiner Barbershop Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-primary flex items-center justify-center bg-card/80 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-primary text-xs sm:text-sm uppercase tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Premium
                </div>
                <div className="text-primary text-2xl sm:text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  SB
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-foreground"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Schiersteiner<br />
            <span className="text-primary">Barbershop</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-primary/90 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            For Ladies & Gentlemen
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Erleben Sie klassisches Barbier-Handwerk in stilvollem Ambiente. 
            Tradition trifft auf moderne Perfektion – für anspruchsvolle Damen und Herren.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={onBookNow}
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            >
              Jetzt Termin buchen
            </Button>
            <a href="tel:061120779">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              >
                0611 - 20 779
              </Button>
            </a>
          </div>

          {/* Hours Badge */}
          <div className="mt-12 inline-flex flex-col items-center justify-center px-8 py-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg">
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

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
