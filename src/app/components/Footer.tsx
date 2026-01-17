import React from 'react';
import { Instagram, Facebook, Phone, MapPin, ChevronUp } from 'lucide-react';
import logo2 from '../../assets/logo_2.webp';
import githubMark from '../../assets/github-mark.svg';

interface FooterProps {
  onOpenLegal?: (type: 'impressum' | 'datenschutz' | 'agb') => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand - Full width on mobile, 2 columns on desktop */}
          <div className="col-span-2 md:col-span-2 text-center md:text-left">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group mx-auto md:mx-0 flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-3 mb-4 hover:opacity-80 transition-opacity cursor-pointer w-fit"
              aria-label="Zurück nach oben"
            >
              <ChevronUp className="text-primary animate-bounce md:hidden" size={24} />
              <img
                src={logo2}
                alt="Schiersteiner Barbershop"
                loading="lazy"
                className="w-28 h-28 object-contain"
              />
              <div className="text-center md:text-left">
                <div className="tracking-wider select-none" style={{ fontSize: '1.25rem', fontFamily: 'Playfair Display, serif' }}>Schiersteiner</div>
                <div className="text-primary text-foreground select-none" style={{ fontSize: '1.25rem', fontFamily: 'Playfair Display, serif' }}>Barbershop</div>
              </div>
              <ChevronUp className="text-primary animate-bounce hidden md:block" size={24} />
            </button>
            <p className="text-foreground/70 text-sm max-w-md mb-4 mx-auto md:mx-0">
              Klassisches Barbier-Handwerk in stilvollem Ambiente.
              For Ladies & Gentlemen – seit Jahren Ihre Adresse für perfekte Schnitte in Wiesbaden.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-foreground mb-4">Schnellzugriff</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#barbers" className="text-foreground/70 hover:text-primary transition-colors">
                  Unser Team
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-foreground/70 hover:text-primary transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start justify-center md:justify-start space-x-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/70">
                  Reichsapfelstraße 12<br />
                  65201 Wiesbaden
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:061120779" className="text-foreground/70 hover:text-primary transition-colors">
                  0611 - 20 779
                </a>
              </li>
              <li className="flex justify-center md:justify-start space-x-3 pt-2">
                <a
                  href="https://instagram.com/Schiersteiner_Barbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="text-primary" size={18} />
                </a>
                <a
                  href="https://www.facebook.com/people/Schiersteiner-Barbershop/pfbid025iAjKc2YozoKGvXb3ui2SJzdeDXnNzNhJT8qDzS4BbCkjWKZCJSu7ErNcdJaJPn8l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="text-primary" size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-sm text-muted-foreground select-none">
              © 2026 Schiersteiner Barbershop. Alle Rechte vorbehalten.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 text-sm">
              <button
                onClick={() => onOpenLegal?.('impressum')}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-none"
              >
                Impressum
              </button>
              <button
                onClick={() => onOpenLegal?.('datenschutz')}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-none"
              >
                Datenschutz
              </button>
              <button
                onClick={() => onOpenLegal?.('agb')}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer select-none"
              >
                AGB
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Developed by</span>
            <a
              href="https://github.com/moriarthur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity border-b border-[#D4AF37] pb-0.5"
              style={{ color: '#A89F8F' }}
            >
              Galart
            </a>
            <span className="inline-flex items-center justify-center">
              <img src={githubMark} alt="GitHub" width="16" height="16" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
