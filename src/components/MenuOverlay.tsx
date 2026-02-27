'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    number: '.1',
    label: 'X Social',
    href: 'https://x.com/advisory_deca4',
    hoverClass: 'hover:text-[#5e0ecd]',
    numberHoverClass: 'group-hover:text-white/50',
    labelHoverClass: 'group-hover:opacity-80',
  },
];

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const openTimer = setTimeout(() => {
        setIsMounted(true);
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(openTimer);
    }
    if (isMounted) {
      const closeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 0);
      const unmountTimer = setTimeout(() => {
        setIsMounted(false);
      }, 700);
      return () => {
        clearTimeout(closeTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [isOpen, isMounted]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-[100] bg-white/98 top-0 right-0 bottom-0 left-0 backdrop-blur-xl items-center justify-center ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      id="fullscreen-menu"
    >
      {/* Corner Decorations */}
      <div className="pointer-events-none w-full h-full absolute top-0 right-0 bottom-0 left-0">
        <div className="absolute top-8 left-8 w-8 h-8 md:w-12 md:h-12 border-t border-l border-black/10" />
        <div className="absolute top-8 right-8 w-8 h-8 md:w-12 md:h-12 border-t border-r border-black/10" />
        <div className="absolute bottom-8 left-8 w-8 h-8 md:w-12 md:h-12 border-b border-l border-black/10" />
        <div className="absolute bottom-8 right-8 w-8 h-8 md:w-12 md:h-12 border-b border-r border-black/10" />
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 md:top-12 md:right-12 flex items-center mr-4 mt-4 gap-3 hover:text-gray-900 transition-colors font-mono text-xs uppercase tracking-widest text-gray-600 pointer-events-auto mt-2 md:mt-0"
      >
        <span>Close</span>
        <Icon icon="solar:close-circle-linear" width={20} height={20} strokeWidth={1.5} />
      </button>

      {/* Navigation */}
      <nav className="flex flex-col gap-8 md:gap-12 z-10 w-full max-w-4xl pr-8 pl-8 items-start">
        <div
          className={`h-px w-12 bg-gray-500 mb-2 menu-item transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        />
        {menuItems.map((item, index) => {
          return (
            <a
              key={item.number}
              href={item.href}
              onClick={handleClose}
              target="_blank"
              rel="noopener noreferrer"
              className={`group text-[42px] md:text-[62px] lg:text-[78px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] menu-item flex items-center gap-6 hover:translate-x-4 font-light text-gray-900 tracking-tighter font-space-mono w-full ${item.hoverClass} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + (index + 1) * 100}ms` }}
            >
              <span
                className={`font-mono text-lg md:text-xl text-gray-400 transition-colors duration-500 w-12 ${item.numberHoverClass}`}
              >
                {item.number}
              </span>
              <span className={`transition-all duration-500 ${item.labelHoverClass}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
