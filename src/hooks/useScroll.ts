'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * @returns {number} Current scroll Y position in pixels
 */
export function useScroll(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call initially to set the starting position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
}
