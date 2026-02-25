'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Icon } from '@iconify/react';
import { Header } from '@/components/Header';
import { MenuOverlay } from '@/components/MenuOverlay';
import { Footer } from '@/components/Footer';
import { CornerDecorations } from '@/components/CornerDecorations';
import { UnicornBackground } from '@/components/UnicornBackground';

export default function NotFound() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Unicorn Studio Background */}
      <UnicornBackground />

      {/* Corner Decorations */}
      <CornerDecorations />

      {/* Header */}
      <Header onMenuToggle={handleMenuToggle} />

      {/* Fullscreen Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={handleMenuClose} />

      {/* Main 404 Content */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-6 md:px-24 pt-32 pb-16">
        <div className="flex flex-col items-center text-center w-full">
          <div className="group flex gap-4 mb-8 items-center cursor-default">
            <div className="h-px w-10 bg-gray-500 group-hover:bg-[#00A99D] transition-colors duration-500"></div>
            <span className="group-hover:text-[#00A99D] uppercase transition-colors duration-500 text-sm text-gray-500 tracking-[0.2em] font-mono">
              Error 404
            </span>
            <div className="h-px w-10 bg-gray-500 group-hover:bg-[#00A99D] transition-colors duration-500"></div>
          </div>

          <h1 className="text-[62px] md:text-[94px] lg:text-[125px] leading-[1.05] font-light text-white tracking-tighter mb-8">
            Page Not
            <br />
            <span className="hover:opacity-100 hover:text-[#00A99D] transition-all duration-500 cursor-default font-semibold opacity-50">
              Available.
            </span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto mb-12">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link
            href="/"
            className="group flex gap-4 hover:bg-white hover:text-black transition-all duration-300 uppercase cursor-pointer text-sm text-white tracking-widest font-mono bg-white/5 border-white/20 border py-5 px-10 backdrop-blur-sm items-center justify-center w-fit"
          >
            <span>Return to main page</span>
            <Icon
              icon="solar:arrow-right-linear"
              width={20}
              height={20}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-24">
        <Footer />
      </div>
    </div>
  );
}
