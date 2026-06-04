import { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import logoSvg from '../../assets/optimized/barbershop-logo.svg';

interface NavigationProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export function Navigation({ onNavigate, currentSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Über uns' },
    { id: 'services', label: 'Leistungen' },
    { id: 'barbers', label: 'Unser Team' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'contact', label: 'Kontakt' },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
    // Return focus to menu button after closing
    setTimeout(() => menuButtonRef.current?.focus(), 100);
  };

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    // Focus first menu item when opening
    if (newIsOpen) {
      setTimeout(() => firstMenuItemRef.current?.focus(), 100);
    }
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setTimeout(() => menuButtonRef.current?.focus(), 100);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Trap focus within mobile menu
      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'button, a[href], input, select, textarea'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleTab);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', handleTab);
      };
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20">
          {/* Logo — left */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center group cursor-pointer hover:opacity-80 transition-opacity justify-self-start"
            aria-label="Zur Startseite"
          >
            <img
              src={logoSvg}
              alt="Barbershop Logo"
              className="h-20 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation — center */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`transition-colors cursor-pointer select-none ${
                  currentSection === item.id
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
                aria-label={`Navigiere zu ${item.label}`}
                aria-current={currentSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Booking Button — right */}
          <div className="hidden md:flex justify-end">
            <Button
              onClick={() => handleNavigate('booking')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer select-none"
            >
              Termin buchen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="md:hidden p-2 select-none rounded-lg hover:bg-primary/10 active:bg-primary/20 transition-colors justify-self-end"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            <div className={isOpen ? 'text-primary' : 'text-foreground'}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden py-4 space-y-4 border-t border-border"
            role="menu"
            aria-label="Hauptnavigation"
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                ref={index === 0 ? firstMenuItemRef : undefined}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left py-2 transition-colors select-none ${
                  currentSection === item.id
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
                role="menuitem"
                aria-label={`Navigiere zu ${item.label}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavigate('booking')}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 select-none"
              role="menuitem"
            >
              Termin buchen
            </Button>
            <a
              href="tel:+491234567890"
              className="flex items-center justify-center space-x-2 w-full py-3 text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
              role="menuitem"
            >
              <Phone size={18} />
              <span>+49-123-4567890</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
