import React from 'react';
import { Card } from './ui/card';
import { Star } from 'lucide-react';

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
    image: 'https://images.unsplash.com/photo-1747832512459-5566e6d0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY3ODk4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: '15+ Jahre Erfahrung',
    specialization: 'Klassische Herrenschnitte & Bartpflege',
    description: 'Spezialist für traditionelle Barbier-Kunst und moderne Herrenfrisuren. Perfektionist in der Rasur.',
  },
  {
    id: '2',
    name: 'Anna Schmidt',
    role: 'Senior Stylist',
    image: 'https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjY4NDE4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    experience: '12+ Jahre Erfahrung',
    specialization: 'Damenfrisuren & Colorationen',
    description: 'Expertin für Colorationen, Balayage und kreative Damenschnitte. Individuelle Beratung.',
  },
  {
    id: '3',
    name: 'Thomas Müller',
    role: 'Barber & Stylist',
    image: 'https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjY4NDE4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-primary/50"></div>
            <span className="px-4 text-primary uppercase tracking-widest text-sm">
              Unser Team
            </span>
            <div className="h-px w-12 bg-primary/50"></div>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Unsere Barber
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
          <Card className="inline-block bg-card/50 border-primary/30 px-8 py-6 max-w-3xl">
            <p className="text-foreground/80 leading-relaxed">
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
