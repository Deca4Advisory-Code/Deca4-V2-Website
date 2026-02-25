'use client';

import { useEffect, useState } from 'react';

/**
 * Unicorn Studio Background Component
 * Animated background using Unicorn Studio
 */

export const UNICORN_PROJECT_ID = 'vTTCp5g4cVl9nwjlT56Z';

/**
 * Unicorn Studio background component
 */
export function UnicornBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const init = () => {
      // Check if UnicornStudio is available
      if ((window as any).UnicornStudio) {
        // If already initialized, just re-init for new DOM elements
        if ((window as any).UnicornStudio.isInitialized) {
          (window as any).UnicornStudio.init?.();
        } else {
          // Initialize for the first time
          (window as any).UnicornStudio.init?.();
          (window as any).UnicornStudio.isInitialized = true;
        }
        
        // Add a small delay to allow canvas to render before showing
        setTimeout(() => {
          setIsLoaded(true);
        }, 100);
        
        return true;
      }
      return false;
    };

    // Try to initialize immediately
    if (!init()) {
      // If script is not yet loaded, poll for it
      const intervalId = setInterval(() => {
        if (init()) {
          clearInterval(intervalId);
        }
      }, 100);

      // Cleanup interval on unmount
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div 
      className={`aura-background-component w-full h-full fixed top-0 left-0 z-0 pointer-events-none transition-opacity duration-[4000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isLoaded ? 'opacity-50' : 'opacity-0'}`}
    >
      <div data-us-project={UNICORN_PROJECT_ID} className="absolute w-full h-full left-0 top-0" />
    </div>
  );
}

/**
 * Initialize Unicorn Studio background animation
 * @deprecated Initialization is now handled internally by the component
 */
export function initUnicornStudio(): void {
  // No-op for backward compatibility during refactor
}
