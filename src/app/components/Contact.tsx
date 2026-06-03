import React from 'react';
import { Card } from './ui/card';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-primary/50"></div>
            <span className="px-4 text-primary uppercase tracking-widest text-sm">
              Besuchen Sie uns
            </span>
            <div className="h-px w-12 bg-primary/50"></div>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Kontakt & Standort
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Besuchen Sie uns in Wiesbaden. Wir freuen uns auf Sie!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card border-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-foreground mb-2">Adresse</h3>
                  <p className="text-foreground/70">
                    Reichsapfelstraße 12<br />
                    65201 Wiesbaden
                  </p>
                  <a
                    href="https://maps.google.com/?q=Reichsapfelstraße+12,+65201+Wiesbaden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm mt-2 inline-block"
                  >
                    Route anzeigen →
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-foreground mb-2">Telefon</h3>
                  <a
                    href="tel:061120779"
                    className="text-primary hover:text-primary/80 text-lg"
                  >
                    0611 - 20 779
                  </a>
                  <p className="text-foreground/70 text-sm mt-2">
                    Rufen Sie uns an für eine Terminvereinbarung
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground mb-3">Öffnungszeiten</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Montag - Samstag</span>
                      <span className="text-foreground">9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Sonntag</span>
                      <span className="text-muted-foreground">Geschlossen</span>
                    </div>
                  </div>
                  <p className="text-primary text-sm mt-3">
                    Ohne Termin möglich – Termine bevorzugt
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="bg-card border-border p-6">
              <h3 className="text-foreground mb-4">Folgen Sie uns</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Besuchen Sie uns auf Instagram"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="text-primary" size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Besuchen Sie uns auf Facebook"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="text-primary" size={20} />
                </a>
              </div>
            </Card>
          </div>

          {/* Map */}
          <Card className="bg-card border-border overflow-hidden h-[600px]">
            <iframe
              src="https://maps.google.com/maps?q=Reichsapfelstra%C3%9Fe+12,+65201+Wiesbaden&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barbershop Location"
            ></iframe>
          </Card>
        </div>

        {/* Parking Info */}
        <div className="text-center">
          <Card className="inline-block bg-card/50 border-primary/30 px-8 py-4 select-none">
            <p className="text-sm text-muted-foreground">
              Parkplätze direkt vor dem Salon verfügbar
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
