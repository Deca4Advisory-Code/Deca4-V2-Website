import type { ReactElement } from 'react';

interface Offering {
  title: string;
  description: string;
  iconColor: 'teal' | 'purple';
  iconSvg: ReactElement;
}

const offerings: Offering[] = [
  {
    title: 'Strategic & Technology Advisory',
    description: 'Roadmaps, architecture, and operating models for blockchain & AI programs.',
    iconColor: 'teal',
    iconSvg: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.94 0 5.06 1.06 7 2a1 1 0 0 1 1 1v7z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Blockchain & AI Implementation',
    description: 'End-to-end delivery from prototypes to production-grade systems.',
    iconColor: 'purple',
    iconSvg: (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </>
    ),
  },
  {
    title: 'Government Digitisation Systems',
    description: 'Public sector platforms for digital identity, records, and services.',
    iconColor: 'teal',
    iconSvg: (
      <>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </>
    ),
  },
  {
    title: 'Early Stage Holistic Advisory',
    description: 'Market, product, and go-to-market support for early ventures.',
    iconColor: 'purple',
    iconSvg: (
      <>
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </>
    ),
  },
  {
    title: 'Enterprise Tokenisation',
    description: 'Asset tokenisation design, governance, and compliance enablement.',
    iconColor: 'teal',
    iconSvg: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
  },
  {
    title: 'AI Data Sovereignty Strategy',
    description: 'Data residency, security, and sovereign AI deployment planning.',
    iconColor: 'purple',
    iconSvg: (
      <>
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </>
    ),
  },
];

export function CoreOfferings() {
  return (
    <section className="flex flex-col min-h-[80vh] w-full pt-36 relative justify-center">
      <div className="group flex gap-5 cursor-default w-fit mb-10 gap-x-5 gap-y-5 items-center">
        <div className="h-px w-10 bg-gray-500 group-hover:bg-[#00A99D] transition-colors duration-500" />
        <span className="font-mono text-sm text-gray-500 group-hover:text-[#00A99D] tracking-[0.2em] uppercase transition-colors duration-500">
          Core Offerings
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/10 w-full border-white/10 border">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="group bg-[#050505] p-10 md:p-12 lg:p-14 hover:bg-white/[0.02] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-8 h-8 mb-8 block opacity-50 group-hover:opacity-100 transition-all duration-500 ${
                offering.iconColor === 'teal'
                  ? 'text-gray-500 group-hover:text-[#00A99D]'
                  : 'text-gray-500 group-hover:text-[#430098]'
              }`}
            >
              {offering.iconSvg}
            </svg>
            <h3 className="text-lg font-mono uppercase tracking-widest text-white mb-3">
              {offering.title}
            </h3>
            <p className="text-base text-white/40 font-light leading-relaxed">
              {offering.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
