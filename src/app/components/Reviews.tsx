import React from 'react';
import { Card } from './ui/card';
import { Star } from 'lucide-react';

interface ReviewsProps {
  onBookNow?: () => void;
}

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Michael K.',
    rating: 5,
    comment: 'Erstklassiger Service! Marco hat mir den besten Haarschnitt meines Lebens verpasst. Das Ambiente ist stilvoll und die Atmosphäre sehr entspannend.',
    service: 'Herrenschnitt & Bartpflege',
    date: 'Vor 2 Wochen',
  },
  {
    id: '2',
    name: 'Sarah M.',
    rating: 5,
    comment: 'Anna ist eine wahre Künstlerin! Meine Balayage ist perfekt geworden. Ich komme definitiv wieder. Sehr professionell und herzlich.',
    service: 'Balayage & Styling',
    date: 'Vor 1 Woche',
  },
  {
    id: '3',
    name: 'Thomas B.',
    rating: 5,
    comment: 'Traditionelles Handwerk auf höchstem Niveau. Die Nassrasur war ein absolutes Erlebnis. Kann ich jedem empfehlen!',
    service: 'Nassrasur',
    date: 'Vor 3 Wochen',
  },
  {
    id: '4',
    name: 'Julia W.',
    rating: 5,
    comment: 'Endlich ein Salon, wo man sich als Frau auch willkommen fühlt! Tolle Beratung, super Ergebnis. Preis-Leistung stimmt absolut.',
    service: 'Schneiden & Färben',
    date: 'Vor 1 Woche',
  },
];

export function Reviews({ onBookNow }: ReviewsProps) {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-primary/50"></div>
            <span className="px-4 text-primary uppercase tracking-widest text-sm">
              Kundenstimmen
            </span>
            <div className="h-px w-12 bg-primary/50"></div>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Was unsere Kunden sagen
          </h2>
          
          {/* Average Rating */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < averageRating ? 'text-primary fill-primary' : 'text-muted-foreground'}
                />
              ))}
            </div>
            <span className="text-foreground">
              {averageRating.toFixed(1)} von 5.0
            </span>
          </div>
          <p className="text-foreground/70">
            Basierend auf {reviews.length}+ Bewertungen
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="bg-card border-border p-6 hover:border-primary/50 transition-colors"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? 'text-primary fill-primary' : 'text-muted-foreground'}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "{review.comment}"
              </p>

              {/* Service */}
              <div className="text-sm text-primary/80 mb-3">
                {review.service}
              </div>

              {/* Author & Date */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground">{review.name}</span>
                <span className="text-muted-foreground">{review.date}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            Überzeugen Sie sich selbst von unserer Qualität
          </p>
          <button
            onClick={onBookNow}
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer select-none"
          >
            <span>Jetzt Termin buchen →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
