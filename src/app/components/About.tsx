import React from 'react';
import { Card } from './ui/card';
import { Award, Heart, Users, Clock } from 'lucide-react';
import interiorImage from '../../assets/optimized/Interior_2.webp';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Meisterhafte Qualität',
      description: 'Jahrelange Erfahrung und höchste Handwerkskunst für perfekte Ergebnisse.',
    },
    {
      icon: Heart,
      title: 'Mit Leidenschaft',
      description: 'Wir lieben was wir tun und das spüren Sie in jedem Schnitt.',
    },
    {
      icon: Users,
      title: 'For Ladies & Gentlemen',
      description: 'Ein Ort für alle – traditionell, modern und inklusiv.',
    },
    {
      icon: Clock,
      title: 'Zeit für Sie',
      description: 'Individuelle Beratung und entspannte Atmosphäre ohne Zeitdruck.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center mb-4 select-none">
              <div className="h-px w-12 bg-primary/50"></div>
              <span className="px-4 text-primary uppercase tracking-widest text-sm">
                Über uns
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl mb-6 text-foreground select-none"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Tradition trifft<br />
              <span className="text-primary">Perfektion</span>
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Willkommen im Schiersteiner Barbershop – Ihrem Premium-Salon für klassisches
                Barbier-Handwerk im Herzen von Wiesbaden-Schierstein.
              </p>
              <p>
                Seit Jahren steht unser Name für exzellente Schnitte, professionelle Bartpflege
                und erstklassige Damenfrisuren. Unser erfahrenes Team verbindet traditionelle
                Techniken mit modernem Styling-Know-how.
              </p>
              <p>
                In unserem stilvollen Ambiente mit warmen Holztönen, eleganten Lederelementen
                und goldenen Akzenten erleben Sie Barbier-Kultur, wie sie sein sollte:
                Persönlich. Professionell. Perfekt.
              </p>
              <p className="text-primary italic">
                "For Ladies & Gentlemen" ist nicht nur unser Motto – es ist unsere Philosophie.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={interiorImage}
                alt="Schiersteiner Barbershop Interior"
                width="1200"
                height="1500"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary rounded-lg opacity-50"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border p-6 text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
