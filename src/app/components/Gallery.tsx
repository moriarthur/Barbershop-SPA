import React from 'react';
import interior2 from '../../assets/optimized/Interior_2.webp';
import interior from '../../assets/gallery/interior.webp';
import cutting from '../../assets/gallery/cutting.webp';
import beard from '../../assets/gallery/beard.webp';
import fade from '../../assets/gallery/fade.webp';
import storefront from '../../assets/gallery/storefront.webp';
import shave from '../../assets/gallery/shave.webp';
import scissors from '../../assets/gallery/scissors.webp';
import chair from '../../assets/gallery/chair.webp';

const galleryImages = [
  {
    url: interior2,
    alt: 'Barbershop Interior',
  },
  {
    url: interior,
    alt: 'Klassisches Barbershop Ambiente',
  },
  {
    url: storefront,
    alt: 'Barbershop Fassade',
  },
  {
    url: scissors,
    alt: 'Haarschneideschere',
  },
  {
    url: cutting,
    alt: 'Haarschnitt bei der Arbeit',
  },
  {
    url: beard,
    alt: 'Bartpflege und Styling',
  },
  {
    url: shave,
    alt: 'Traditionelle Nassrasur',
  },
  {
    url: fade,
    alt: 'Modernes Fade Ergebnis',
  },
  {
    url: chair,
    alt: 'Barberstuhl',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 select-none">
            <div className="h-px w-12 bg-primary/50"></div>
            <span className="px-4 text-primary uppercase tracking-widest text-sm">
              Einblicke
            </span>
            <div className="h-px w-12 bg-primary/50"></div>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Unsere Galerie
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Entdecken Sie unser stilvolles Ambiente und unsere Arbeiten.
            Tradition trifft Moderne in jedem Detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-4">
            Folgen Sie uns für mehr Einblicke und Inspiration
          </p>
          <a
            href="https://instagram.com/Schiersteiner_Barbershop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer"
          >
            <span>@Schiersteiner_Barbershop →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
