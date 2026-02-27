'use client';

import { Icon } from '@iconify/react';

export function About() {
  return (
    <section className="flex flex-col w-full min-h-[80vh] justify-center relative pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <div className="group flex items-center gap-5 mb-8 w-fit cursor-default">
            <div className="h-px w-10 bg-gray-500 group-hover:bg-[#430098] transition-colors duration-500" />
            <span className="font-mono text-sm text-gray-500 group-hover:text-[#5e0ecd] tracking-[0.2em] uppercase transition-colors duration-500">
              Who We Are
            </span>
          </div>
          <h2 className="group text-[47px] md:text-[78px] lg:text-[94px] leading-tight cursor-default font-light text-gray-900 tracking-tighter font-space-mono w-fit mb-8">
            About
            <br />
          </h2>
          <div className="flex transition-all duration-1000 ease-in-out mt-4 items-center">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/736b594f-61e0-4347-9dd2-43ca7ab6296a_320w.png"
              className="transition-all duration-700 cursor-none md:h-16 w-auto h-12 hover:opacity-70"
              alt="DECA4 Brand Logo"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 border-black/10 border-l pl-10">
          <p className="text-[21px] md:text-[23px] leading-relaxed font-light text-gray-600 mb-10">
            DECA4 brings together
            <span className="text-gray-900">
              {' thought leaders '}
            </span>
            and
            <span className="text-gray-900">
              {' innovators '}
            </span>
            to identify how clients can leverage Blockchain & AI in their business.
          </p>
          <p className="text-[21px] md:text-[23px] leading-relaxed font-light text-gray-600 mb-10">
            With
            <span className="text-gray-900">
              {' experts '}
            </span>
            from software development and consulting, legal, marketing,
            educational, business development organizations, we are ideally
            positioned to assist you in building a
            <span className="text-gray-900">
              {' Blockchain & AI solution '}
            </span>
            which suits your needs.
          </p>
          
        </div>
      </div>
    </section>
  );
}
