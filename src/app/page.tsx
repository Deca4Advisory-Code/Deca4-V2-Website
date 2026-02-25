'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { Header } from '@/components/Header';
import { MenuOverlay } from '@/components/MenuOverlay';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ClientsPartners } from '@/components/ClientsPartners';
import { CoreOfferings } from '@/components/CoreOfferings';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CornerDecorations } from '@/components/CornerDecorations';
import { UnicornBackground, initUnicornStudio } from '@/components/UnicornBackground';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Initialize Unicorn Studio when component mounts
    initUnicornStudio();
  }, []);

  return (
    <>
      {/* Unicorn Studio Background */}
      <UnicornBackground />

      {/* Unicorn Studio Script Loader */}
      <Script
        id="unicorn-studio-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){
              if(!window.UnicornStudio){
                window.UnicornStudio={isInitialized:!1};
                var i=document.createElement("script");
                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
                i.onload=function(){
                  window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
                };
                (document.head || document.body).appendChild(i)
              }
            }();
          `,
        }}
      />

      {/* Corner Decorations */}
      <CornerDecorations />

      {/* Header */}
      <Header onMenuToggle={handleMenuToggle} />

      {/* Fullscreen Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={handleMenuClose} />

      {/* Main Content */}
      <div className="flex flex-col md:px-24 md:pt-8 md:pb-8 z-10 w-full max-w-7xl mx-auto pt-8 pr-8 pb-8 pl-8 relative">
        <Hero />
        <About />
        <ClientsPartners />
        <CoreOfferings />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
