'use client';

import { Icon } from '@iconify/react';

export function Hero() {
  const handleCalendlyClick = () => {
    window.location.href = 'https://calendly.com/sam-deca4/30min';
  };

  return (
    <section className="flex flex-col min-h-screen w-full relative justify-center">
      {/* Label */}
      <div className="group flex gap-4 md:mb-12 cursor-default w-fit mb-6 items-center">
        <div className="h-px w-10 bg-gray-500 group-hover:bg-[#00A99D] transition-colors duration-500" />
        <span className="group-hover:text-[#00A99D] uppercase transition-colors duration-500 text-sm text-gray-500 tracking-[0.2em] font-mono">
          Strategic Technology Advisory
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-[70px] md:text-[108px] lg:text-[140px] font-light text-gray-900 tracking-tighter leading-[1.02] mb-8">
        <span className="text-gray-900">
          From Strategy
        </span>
        <br />
        <span className="hover:opacity-100 hover:text-[#00A99D] transition-all duration-500 cursor-pointer hover-shake font-semibold">
          To Production
        </span>
      </h1>

      {/* Description */}
      <div className="max-w-2xl border-black/10 border-l mb-10 pt-2 pb-2 pl-8">
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
          Bringing together the leading Blockchain & AI experts in the market to design
          and deliver cutting edge solutions.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 w-fit">
        <button
          onClick={handleCalendlyClick}
          className="group flex gap-4 hover:bg-[#00A99D] hover:text-white transition-all duration-300 uppercase cursor-pointer text-sm text-gray-700 tracking-widest font-mono bg-transparent border-black/10 border pt-5 pr-10 pb-5 pl-10 backdrop-blur-sm gap-x-4 gap-y-4 items-center justify-center"
        >
          <span>Talk to us</span>
          <Icon
            icon="solar:arrow-right-linear"
            width={20}
            height={20}
            strokeWidth={1.5}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
        <button className="group flex items-center justify-center gap-4 px-10 py-5 border border-transparent hover:border-black/10 transition-all duration-300 font-mono text-sm uppercase tracking-widest text-gray-500 hover:text-gray-900">
          <span>Agents (soon)</span>
        </button>
      </div>
    </section>
  );
}
