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
    { name: '[Herren Service Name 1]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Herren Service Name 2]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Herren Service Name 3]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Herren Service Name 4]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Herren Service Name 5]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Herren Service Name 6]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Herren Service Name 7]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Herren Service Name 8]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Herren Service Name 9]', description: '[Optionale Beschreibung]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Herren Service Name 10]', description: '[Optionale Beschreibung]', price: '[Preis]€', duration: '[Dauer]' },
  ];

  const ladiesServices: Service[] = [
    { name: '[Damen Service Name 1]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 2]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 3]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 4]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 5]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 6]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 7]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 8]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 9]', description: '[Optionale Beschreibung]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 10]', description: '[Optionale Beschreibung]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 11]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 12]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 13]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 14]', price: '[Preis]€', duration: '[Dauer]' },
    { name: '[Damen Service Name 15]', price: '[Preis]€', duration: '[Dauer]' },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 select-none">
            <div className="h-px w-12 bg-primary/50"></div>
            <span className="px-4 text-primary uppercase tracking-widest text-sm">
              Unsere Leistungen
            </span>
            <div className="h-px w-12 bg-primary/50"></div>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground select-none"
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
            <TabsTrigger value="gentlemen" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer transition-all duration-300 select-none">
              Gentlemen
            </TabsTrigger>
            <TabsTrigger value="ladies" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer transition-all duration-300 select-none">
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
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 select-none"
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
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 select-none"
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
