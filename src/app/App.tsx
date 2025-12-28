import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Barbers } from './components/Barbers';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Booking } from './components/Booking';
import { Reviews } from './components/Reviews';
import { FloatingActionButton } from './components/FloatingActionButton';
import { PromoBanner } from './components/PromoBanner';
import { Legal } from './components/Legal';

interface Service {
  name: string;
  price: string;
  duration: string;
}

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [legalPage, setLegalPage] = useState<'impressum' | 'datenschutz' | 'agb' | null>(null);

  // Scroll to section
  const handleNavigate = (section: string) => {
    setCurrentSection(section);

    if (section === 'booking') {
      setIsBookingOpen(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Close booking if open
      if (isBookingOpen) {
        setIsBookingOpen(false);
        setSelectedService(null);
        setSelectedCategory(null);

        // Wait for DOM to update before scrolling
        setTimeout(() => {
          scrollToSection(section);
        }, 100);
      } else {
        scrollToSection(section);
      }
    }
  };

  const scrollToSection = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80; // Account for fixed navigation
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleBookService = (service: Service, category: string) => {
    setSelectedService(service);
    setSelectedCategory(category);
    setIsBookingOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
    setSelectedCategory(null);
    handleNavigate('home');
  };

  const handleOpenLegal = (type: 'impressum' | 'datenschutz' | 'agb') => {
    setLegalPage(type);
  };

  const handleCloseLegal = () => {
    setLegalPage(null);
  };

  // Detect current section on scroll
  useEffect(() => {
    if (isBookingOpen) return;

    const handleScroll = () => {
      const sections = ['home', 'services', 'barbers', 'gallery', 'contact'];
      
      for (const section of sections) {
        if (section === 'home') {
          if (window.scrollY < 300) {
            setCurrentSection('home');
            return;
          }
        } else {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setCurrentSection(section);
              return;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBookingOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onNavigate={handleNavigate} currentSection={currentSection} />

      {legalPage && (
        <Legal type={legalPage} onClose={handleCloseLegal} />
      )}

      {isBookingOpen ? (
        <Booking
          preselectedService={selectedService}
          preselectedCategory={selectedCategory}
          onClose={handleCloseBooking}
          onOpenLegal={handleOpenLegal}
        />
      ) : (
        <>
          <PromoBanner onBookNow={() => handleNavigate('booking')} />
          <Hero onBookNow={() => handleNavigate('booking')} />
          <About />
          <Services onBookService={handleBookService} />
          <Barbers />
          <Gallery />
          <Contact />
          <Reviews onBookNow={() => handleNavigate('booking')} />
          <Footer onOpenLegal={handleOpenLegal} />
          <FloatingActionButton onBookNow={() => handleNavigate('booking')} />
        </>
      )}
    </div>
  );
}