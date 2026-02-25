'use client';

import { useCallback } from 'react';
import { Icon } from '@iconify/react';
import { useScroll } from '@/hooks/useScroll';

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const scrollY = useScroll();

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <header
      className={`fixed flex transition-all duration-500 w-full z-50 pointer-events-auto px-6 md:px-12 top-0 right-0 left-0 items-center justify-between border-b ${
        scrollY > 50
          ? 'bg-[#050505]/90 backdrop-blur-md py-4 md:py-5 border-white/10'
          : 'bg-transparent pt-10 md:pt-12 pb-6 border-transparent'
      }`}
      id="main-header"
    >
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={handleScrollToTop}
      >
        <div className="overflow-hidden transition-all duration-300 group w-32 h-12 relative">
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/736b594f-61e0-4347-9dd2-43ca7ab6296a_320w.png"
            className="transition-all duration-500 w-full  sm:h-12 h-8 sm:mt-0 mt-1 object-contain invert brightness-0 group-hover:invert-0 group-hover:brightness-100" 
            alt="Deca4 Logo"
          />
        </div>
      </div>
      <button
        className="flex items-center gap-3 hover:text-[#00A99D] transition-colors font-mono text-xs uppercase tracking-widest text-white/70 sm:mr-0 mr-4 -mt-6"
        onClick={onMenuToggle}
      >
        <span>Menu</span>
        <Icon icon="solar:hamburger-menu-linear" width={20} height={20} strokeWidth={1.5} />
      </button>
    </header>
  );
}
