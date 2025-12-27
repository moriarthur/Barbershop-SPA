import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface Service {
  name: string;
  description?: string;
  price: string;
  duration: string;
}

interface ServicesProps {
  onBookService: (service: Service, category: string) => void;
}

export function Services({ onBookService }: ServicesProps) {
  const gentlemenServices: Service[] = [
    { name: 'Trockenhaarschnitt', price: '18€', duration: '30 Min' },
    { name: 'Waschen, Schneiden, Föhnen & Stylen', price: '20€', duration: '45 Min' },
    { name: 'Schneiden, Rasieren, Föhnen & Stylen', price: '30€', duration: '60 Min' },
    { name: 'Bartformrasur / Nassrasur', price: '15€', duration: '30 Min' },
    { name: 'Kinder bis 12 Jahre', price: '15€', duration: '30 Min' },
    { name: 'Augenbrauen zupfen', price: '12€', duration: '15 Min' },
    { name: 'Heißwachs Ohren u. Nase', price: '8€', duration: '15 Min' },
    { name: 'Kopfmassage', price: '15€', duration: '20 Min' },
    { name: 'Gesichtskur', description: 'Maske, Dampfbad, Massage', price: '20€', duration: '30 Min' },
    { name: 'Premium-Paket', description: 'Waschen, Schneiden, Bartrasur, Augenbrauen zupfen, Föhnen & Stylen', price: '40€', duration: '90 Min' },
  ];

  const ladiesServices: Service[] = [
    { name: 'Waschen/Föhnen', price: 'ab 21€', duration: '30 Min' },
    { name: 'Waschen/Schneiden/Föhnen', price: 'ab 36,75€', duration: '60 Min' },
    { name: 'Coloration', price: 'ab 31,50€', duration: '90 Min' },
    { name: 'Gloss', price: 'ab 20,25€', duration: '45 Min' },
    { name: 'Neufärbung', price: 'ab 35,25€', duration: '90 Min' },
    { name: 'Effektsträhnen', price: 'ab 21,75€', duration: '60 Min' },
    { name: 'Strähnen am Oberkopf', price: 'ab 33€', duration: '75 Min' },
    { name: 'Strähnen komplett', price: 'ab 44,25€', duration: '120 Min' },
    { name: 'Balayage (mittellänges Haar)', description: 'inkl. Pflege und Gloss', price: 'ab 105€', duration: '150 Min' },
    { name: 'Balayage (langes Haar)', description: 'inkl. Pflege und Gloss', price: 'ab 120€', duration: '180 Min' },
    { name: 'Intensivpflege', price: '12,38€', duration: '20 Min' },
    { name: 'Dauerwelle', price: 'ab 49,50€', duration: '120 Min' },
    { name: 'Hochsteckfrisur', price: 'ab 35,25€', duration: '60 Min' },
    { name: 'Flechtfrisur', price: 'ab 13,50€', duration: '30 Min' },
    { name: 'Augenbrauen zupfen', price: '7,50€', duration: '15 Min' },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-primary/50"></div>
            <span className="px-4 text-primary uppercase tracking-widest text-sm">
              Unsere Leistungen
            </span>
            <div className="h-px w-12 bg-primary/50"></div>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Services & Preise
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Transparente Preise für erstklassige Dienstleistungen. 
            Wir bieten professionelles Handwerk für Damen und Herren.
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs defaultValue="gentlemen" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="gentlemen" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Gentlemen
            </TabsTrigger>
            <TabsTrigger value="ladies" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Ladies
            </TabsTrigger>
          </TabsList>

          {/* Gentlemen Services */}
          <TabsContent value="gentlemen" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gentlemenServices.map((service, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-foreground mb-1">
                        {service.name}
                      </h3>
                      {service.description && (
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-primary">{service.price}</div>
                      <div className="text-xs text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                  <Button
                    onClick={() => onBookService(service, 'gentlemen')}
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10"
                    size="sm"
                  >
                    Buchen
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Ladies Services */}
          <TabsContent value="ladies" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ladiesServices.map((service, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-foreground mb-1">
                        {service.name}
                      </h3>
                      {service.description && (
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-primary">{service.price}</div>
                      <div className="text-xs text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                  <Button
                    onClick={() => onBookService(service, 'ladies')}
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10"
                    size="sm"
                  >
                    Buchen
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Note */}
        <div className="mt-12 text-center">
          <Card className="inline-block bg-card/50 border-primary/30 px-8 py-4">
            <p className="text-sm text-muted-foreground">
              Alle Preise verstehen sich inklusive MwSt. • Terminvereinbarung empfohlen
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
