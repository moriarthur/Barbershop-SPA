import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export function Navigation({ onNavigate, currentSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Leistungen' },
    { id: 'barbers', label: 'Unser Team' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'contact', label: 'Kontakt' },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>SB</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-primary uppercase tracking-wider" style={{ fontSize: '0.75rem', fontFamily: 'Playfair Display, serif' }}>Schiersteiner</div>
              <div className="text-foreground" style={{ fontSize: '0.875rem', fontFamily: 'Playfair Display, serif' }}>Barbershop</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`transition-colors ${
                  currentSection === item.id
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavigate('booking')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Termin buchen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left py-2 transition-colors ${
                  currentSection === item.id
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavigate('booking')}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Termin buchen
            </Button>
            <a
              href="tel:061120779"
              className="flex items-center justify-center space-x-2 w-full py-3 text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Phone size={18} />
              <span>0611-20779</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
