import React from 'react';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenLegal?: (type: 'impressum' | 'datenschutz' | 'agb') => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-primary/10">
                <span className="text-primary font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>SB</span>
              </div>
              <div>
                <div className="text-primary uppercase tracking-wider" style={{ fontSize: '0.75rem', fontFamily: 'Playfair Display, serif' }}>Schiersteiner</div>
                <div className="text-foreground" style={{ fontSize: '0.875rem', fontFamily: 'Playfair Display, serif' }}>Barbershop</div>
              </div>
            </div>
            <p className="text-foreground/70 text-sm max-w-md mb-4">
              Klassisches Barbier-Handwerk in stilvollem Ambiente. 
              For Ladies & Gentlemen – seit Jahren Ihre Adresse für perfekte Schnitte in Wiesbaden.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/Schiersteiner_Barbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="text-primary" size={18} />
              </a>
              <a
                href="https://facebook.com/Schiersteiner_Barbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="text-primary" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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
          <div>
            <h4 className="text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/70">
                  Reichsapfelstraße 12<br />
                  65201 Wiesbaden
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:061120779" className="text-foreground/70 hover:text-primary transition-colors">
                  0611 - 20 779
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Schiersteiner Barbershop. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => onOpenLegal?.('impressum')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => onOpenLegal?.('datenschutz')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Datenschutz
              </button>
              <button
                onClick={() => onOpenLegal?.('agb')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                AGB
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
