import React from 'react';
import interior2 from '../../assets/Interior_2.webp';

const galleryImages = [
  {
    url: interior2,
    alt: 'Classic Barbershop Interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjY4NDE4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Barber Cutting Hair',
  },
  {
    url: 'https://images.unsplash.com/photo-1706765779515-40038dafd7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwdG9vbHMlMjB2aW50YWdlfGVufDF8fHx8MTc2Njg2MTY2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Barbershop Tools',
  },
  {
    url: 'https://images.unsplash.com/photo-1747832512459-5566e6d0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY3ODk4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Professional Barber',
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
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground select-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Unsere Galerie
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto select-none">
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
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-4 select-none">
            Folgen Sie uns für mehr Einblicke und Inspiration
          </p>
          <a
            href="https://instagram.com/Schiersteiner_Barbershop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer select-none"
          >
            <span>@Schiersteiner_Barbershop →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
