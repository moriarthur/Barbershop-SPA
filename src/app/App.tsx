import React, { useState, useEffect, Component } from 'react';
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
import { Legal } from './components/Legal';

// Error Boundary for debugging
class ErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('ErrorBoundary caught:', error);
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[100dvh] bg-background flex items-center justify-center text-foreground p-4">
          <div className="text-center">
            <h2 className="text-xl mb-4">Etwas ist schiefgelaufen</h2>
            <p className="text-muted-foreground mb-4">{this.state.error?.message}</p>
            <p className="text-xs text-muted-foreground mb-4">Error: {String(this.state.error)}</p>
            <button onClick={() => window.location.reload()} className="text-primary hover:underline">
              Seite neu laden
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

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
      fastScrollTo(0);
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

  // Custom smooth scroll with faster duration (~400ms instead of browser's ~800ms)
  const fastScrollTo = (targetY: number, duration = 400) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smooth but quick deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startY + distance * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollToSection = (section: string) => {
    if (section === 'home') {
      fastScrollTo(0);
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80; // Account for fixed navigation
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        fastScrollTo(offsetPosition);
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

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['home', 'about', 'services', 'barbers', 'gallery', 'contact'];
          const navOffset = 100; // Account for fixed navigation
          const scrollPosition = window.scrollY + navOffset;

          // Find which section we're currently in
          let activeSection = 'home';

          for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i]);
            if (element) {
              const sectionTop = element.offsetTop;
              if (scrollPosition >= sectionTop) {
                activeSection = sections[i];
                break;
              }
            }
          }

          setCurrentSection(activeSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBookingOpen]);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <Navigation onNavigate={handleNavigate} currentSection={currentSection} />

      {legalPage && (
        <ErrorBoundary>
          <Legal type={legalPage} onClose={handleCloseLegal} />
        </ErrorBoundary>
      )}

      {isBookingOpen ? (
        <ErrorBoundary>
          <Booking
            preselectedService={selectedService}
            preselectedCategory={selectedCategory}
            onClose={handleCloseBooking}
            onOpenLegal={handleOpenLegal}
          />
        </ErrorBoundary>
      ) : (
        <>
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