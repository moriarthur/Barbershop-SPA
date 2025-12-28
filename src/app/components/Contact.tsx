import React from 'react';
import { Card } from './ui/card';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 select-none">
            <div className="h-px w-12 bg-primary/50"></div>
            <span className="px-4 text-primary uppercase tracking-widest text-sm">
              Besuchen Sie uns
            </span>
            <div className="h-px w-12 bg-primary/50"></div>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground select-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Kontakt & Standort
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto select-none">
            Besuchen Sie uns in Wiesbaden-Schierstein. Wir freuen uns auf Sie!
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
                  <h3 className="text-foreground mb-2 select-none">Adresse</h3>
                  <p className="text-foreground/70">
                    Reichsapfelstraße 12<br />
                    65201 Wiesbaden
                  </p>
                  <a
                    href="https://maps.google.com/?q=Reichsapfelstraße+12,+65201+Wiesbaden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm mt-2 inline-block select-none"
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
                  <h3 className="text-foreground mb-2 select-none">Telefon</h3>
                  <a
                    href="tel:061120779"
                    className="text-primary hover:text-primary/80 text-lg"
                  >
                    0611 - 20 779
                  </a>
                  <p className="text-foreground/70 text-sm mt-2 select-none">
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
                  <h3 className="text-foreground mb-3 select-none">Öffnungszeiten</h3>
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
                  <p className="text-primary text-sm mt-3 select-none">
                    Ohne Termin möglich – Termine bevorzugt
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="bg-card border-border p-6">
              <h3 className="text-foreground mb-4 select-none">Folgen Sie uns</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/Schiersteiner_Barbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="text-primary" size={20} />
                </a>
                <a
                  href="https://www.facebook.com/people/Schiersteiner-Barbershop/pfbid025iAjKc2YozoKGvXb3ui2SJzdeDXnNzNhJT8qDzS4BbCkjWKZCJSu7ErNcdJaJPn8l/"
                  target="_blank"
                  rel="noopener noreferrer"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.5!2d8.4659!3d50.0474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAyJzUwLjciTiA4wrAyNyU1Ni42IkU!5e0!3m2!1sen!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Schiersteiner Barbershop Location"
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
