/**
 * Unicorn Studio Background Component
 * Animated background using Unicorn Studio
 */

export const UNICORN_PROJECT_ID = 'vTTCp5g4cVl9nwjlT56Z';

/**
 * Unicorn Studio background component
 */
export function UnicornBackground() {
  return (
    <div className="aura-background-component opacity-50 w-full h-full fixed top-0 left-0 z-0 pointer-events-none">
      <div data-us-project={UNICORN_PROJECT_ID} className="absolute w-full h-full left-0 top-0" />
    </div>
  );
}

/**
 * Initialize Unicorn Studio background animation
 * This should be called from the page component after mount
 */
export function initUnicornStudio(): void {
  if (typeof window === 'undefined') return;

  // Check if UnicornStudio is already initialized
  if ((window as any).UnicornStudio?.isInitialized) {
    return;
  }

  // Create and inject the script if it doesn't exist
  if (!(window as any).UnicornStudio) {
    (window as any).UnicornStudio = { isInitialized: false };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
    script.onload = () => {
      if (!(window as any).UnicornStudio.isInitialized) {
        (window as any).UnicornStudio.init?.();
        (window as any).UnicornStudio.isInitialized = true;
      }
    };
    (document.head || document.body).appendChild(script);
  }
}
