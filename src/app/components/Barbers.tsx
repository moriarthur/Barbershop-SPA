import React from 'react';
import { Card } from './ui/card';
import { Star } from 'lucide-react';
import marco from '../../assets/barbers/marco.webp';
import anna from '../../assets/barbers/anna.webp';
import thomas from '../../assets/barbers/thomas.webp';

interface Barber {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
  specialization: string;
  description: string;
}

const barbers: Barber[] = [
  {
    id: '1',
    name: 'Marco Weber',
    role: 'Master Barber',
    image: marco,
    experience: '15+ Jahre Erfahrung',
    specialization: 'Klassische Herrenschnitte & Bartpflege',
    description: 'Spezialist für traditionelle Barbier-Kunst und moderne Herrenfrisuren. Perfektionist in der Rasur.',
  },
  {
    id: '2',
    name: 'Anna Schmidt',
    role: 'Senior Stylist',
    image: anna,
    experience: '12+ Jahre Erfahrung',
    specialization: 'Damenfrisuren & Colorationen',
    description: 'Expertin für Colorationen, Balayage und kreative Damenschnitte. Individuelle Beratung.',
  },
  {
    id: '3',
    name: 'Thomas Müller',
    role: 'Barber & Stylist',
    image: thomas,
    experience: '8+ Jahre Erfahrung',
    specialization: 'Moderne Styles & Trends',
    description: 'Junger Profi mit Gespür für aktuelle Trends. Spezialisiert auf moderne Fades und Texturschnitte.',
  },
];

export function Barbers() {
  return (
    <section id="barbers" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 select-none">
            <div className="h-px w-12 bg-primary/50"></div>
            <span className="px-4 text-primary uppercase tracking-widest text-sm">
              Unser Team
            </span>
            <div className="h-px w-12 bg-primary/50"></div>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground select-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Unsere Barber
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto select-none">
            Erfahrene Profis mit Leidenschaft für perfekte Schnitte und individuelle Beratung.
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber) => (
            <Card
              key={barber.id}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={barber.image}
                  alt={barber.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>

                {/* Role Badge */}
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {barber.role}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl text-foreground mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {barber.name}
                </h3>

                <div className="flex items-center space-x-2 text-primary text-sm mb-3">
                  <Star size={14} fill="currentColor" />
                  <span>{barber.experience}</span>
                </div>

                <div className="mb-3">
                  <span className="text-sm text-primary/80">{barber.specialization}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {barber.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Message */}
        <div className="mt-16 text-center">
          <Card className="inline-block bg-card/50 border-primary/30 px-8 py-4 max-w-3xl select-none">
            <p className="text-sm text-muted-foreground">
              Unser Team kombiniert traditionelles Handwerk mit modernem Know-how.
              Jeder Barber bringt seine einzigartigen Fähigkeiten und Erfahrungen ein,
              um Ihnen den perfekten Look zu verleihen.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
