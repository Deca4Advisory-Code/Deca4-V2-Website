'use client';

import { Icon } from '@iconify/react';

export function Contact() {
  return (
    <section className="flex flex-col min-h-[80vh] w-full pt-24 relative justify-center">
      <div className="flex flex-col text-center items-center">
        <Icon
          icon="solar:transfer-horizontal-outline"
          width={42}
          height={42}
          strokeWidth={1}
          className="text-gray-400 mb-10"
        />
        <h2 className="text-[62px] md:text-[94px] lg:text-[125px] font-light text-gray-900 tracking-tighter leading-[1.05] mb-8">
          Initiate
          <br />
          <span className="hover:text-[#00A99D] hover:opacity-100 transition-all duration-500 hover-shake cursor-pointer font-semibold opacity-60">
            Connection.
          </span>
        </h2>
        <div className="flex flex-col gap-8 mt-10 items-center">
          <a
            href="https://calendly.com/sam-deca4/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 hover:bg-white/90 transition-colors uppercase text-sm text-black tracking-widest font-mono bg-white pt-5 pr-12 pb-5 pl-12"
          >
            <span>Book a call</span>
            <Icon
              icon="solar:arrow-right-up-linear"
              width={20}
              height={20}
              strokeWidth={1.5}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <div className="uppercase leading-loose text-base text-gray-700 tracking-widest font-mono">
            From Strategy
            To Production
          </div>
        </div>
      </div>
    </section>
  );
}
