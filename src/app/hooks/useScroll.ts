import { useState, useEffect, useRef } from 'react';

interface ScrollState {
  scrollY: number;
  isScrolled: boolean;
  footerOffset: number;
}

interface UseScrollReturn extends ScrollState {}

// Global scroll state shared across all components
let globalScrollY = 0;
let listeners = new Set<(state: ScrollState) => void>();
let rafId: number | null = null;
let ticking = false;

// Single scroll handler for the entire app
const scrollHandler = () => {
  if (!ticking) {
    rafId = requestAnimationFrame(() => {
      globalScrollY = window.scrollY;
      const footerOffset = calculateFooterOffset();

      // Check if footer is visible in viewport
      const footer = document.querySelector('footer');
      const windowHeight = window.innerHeight;
      let isFooterVisible = false;

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        isFooterVisible = footerRect.top < windowHeight;
      }

      const state: ScrollState = {
        scrollY: globalScrollY,
        isScrolled: globalScrollY > 200 && !isFooterVisible,
        footerOffset,
      };

      listeners.forEach((listener) => listener(state));
      ticking = false;
    });
    ticking = true;
  }
};

// Calculate the maximum allowed bottom position (vertical limit)
const calculateFooterOffset = (): number => {
  const defaultBottom = 24;

  // Find footer section
  const footer = document.querySelector('footer');
  if (!footer) return defaultBottom;

  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Only apply limit when footer is actually visible
  if (footerRect.top > windowHeight - 100) return defaultBottom;

  const isDesktop = window.innerWidth >= 768;
  const buttonsHeight = isDesktop ? 156 : 64;

  // Find footer logo and description text
  const footerLogo = footer.querySelector('img') as HTMLElement;
  const brandSection = footer.querySelector('.col-span-2.md\\:col-span-2') as HTMLElement;

  if (footerLogo && brandSection && footerRect.bottom > 0) {
    const logoRect = footerLogo.getBoundingClientRect();

    // Center buttons vertically between logo and description text
    const paragraphs = brandSection.querySelectorAll('p');
    if (paragraphs.length > 0) {
      const textRect = paragraphs[0].getBoundingClientRect();

      // Calculate midpoint between logo bottom and text top
      const logoBottom = logoRect.bottom;
      const textTop = textRect.top;
      const midpoint = (logoBottom + textTop) / 2;

      // Calculate offset so button center is at midpoint
      const offsetFromViewportBottom = windowHeight - midpoint - buttonsHeight / 2;
      return Math.max(defaultBottom, offsetFromViewportBottom);
    }
  }

  return defaultBottom;
};

// Initialize the global scroll listener once
let isInitialized = false;

export function useScroll(): UseScrollReturn {
  const [state, setState] = useState<ScrollState>(() => ({
    scrollY: globalScrollY,
    isScrolled: globalScrollY > 200,
    footerOffset: calculateFooterOffset(),
  }));

  if (!isInitialized) {
    window.addEventListener('scroll', scrollHandler, { passive: true });
    isInitialized = true;
  }

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      setState((prev) => ({ ...prev, footerOffset: calculateFooterOffset() }));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const listener = (newState: ScrollState) => {
      setState(newState);
    };

    listeners.add(listener);

    return () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        window.removeEventListener('scroll', scrollHandler);
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }
        isInitialized = false;
      }
    };
  }, []);

  return state;
}
