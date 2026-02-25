interface Client {
  name: string;
  logo: string;
  metric: string;
}

interface Partner {
  name: string;
  logo: string;
  role: string;
  siteUrl: string;
}

const clients: Client[] = [
  {
    name: 'Technical Study',
    logo: '/images/clients/tdra.png',
    metric: '11 mil UAE Pass users',
  },
  {
    name: 'Strategic Advisory',
    logo: '/images/clients/Emirates_logo.svg.png',
    metric: 'NFT, Metaverse and Digital Collectibles Study',
  },
  {
    name: 'Development and Advisory',
    logo: '/images/clients/difc.png',
    metric: 'Pioneered Digital Asset Wills product',
  },
  {
    name: 'Implementation Partner',
    logo: '/images/clients/rak-government-seeklogo.png',
    metric: 'Tokenising Land Registry',
  },
];

const partners: Partner[] = [
  {
    name: 'Avalanche',
    logo: '/images/partners/av.png',
    role: 'Technology Partner',
    siteUrl: 'https://www.avax.network',
  },
  {
    name: 'Hedera',
    logo: '/images/partners/hedera.png',
    role: 'Technology Partner',
    siteUrl: 'https://hedera.com',
  },
  {
    name: 'Curio',
    logo: '/images/partners/curio.png',
    role: 'Advisory Partner',
    siteUrl: 'https://curio.io',
  },
  {
    name: 'BizGov',
    logo: '/images/partners/biz.png',
    role: 'GovTech Partner',
    siteUrl: 'https://www.bizgov.net/',
  },
];

export function ClientsPartners() {
  return (
    <section className="flex flex-col min-h-[80vh] w-full pt-36 relative gap-x-16 gap-y-16 justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 gap-x-16 gap-y-16 items-start">
        {/* Left Column: Text Information */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col">
          <div className="group flex gap-5 cursor-default w-fit mb-8 gap-x-5 gap-y-5 items-center">
            <div className="h-px group-hover:bg-[#430098] transition-colors duration-500 bg-gray-500 w-10" />
            <span className="group-hover:text-[#5e0ecd] uppercase transition-colors duration-500 text-sm text-gray-500 tracking-[0.2em] font-mono">
              Who We Work With
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-tight font-medium text-white tracking-tight font-space-mono mb-6">
            Trusted by<br />Industry Leaders
          </h2>
          <p className="text-lg text-white/50 font-light leading-relaxed mb-8">
            We partner with the most ambitious organizations globally, delivering noticeable results and scaling ecosystems with an excellent team of experts.
          </p>
        </div>

        {/* Right Column: Logos */}
        <div className="lg:col-span-8 flex flex-col gap-20">
          {/* Clients Section */}
          <div>
            <div className="group flex items-center gap-4 mb-10 w-fit cursor-default">
              <div className="h-px w-8 bg-gray-500 group-hover:bg-[#00A99D] transition-colors duration-500" />
              <span className="group-hover:text-[#00A99D] uppercase transition-colors duration-500 text-sm text-gray-500 tracking-[0.2em] font-mono">
                Our Clients
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#050505] hover:border-[#00A99D]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(0,169,157,0.3)] flex flex-col items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative z-10 h-24 w-full flex items-center justify-center mb-4">
                    <img
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      className="max-h-20 max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <div className="h-16 flex flex-col items-center justify-start w-full text-center">
                    <h3 className="text-white/60 group-hover:text-white font-semibold tracking-tight text-sm sm:text-base transition-colors duration-300 mb-1">
                      {client.name}
                    </h3>
                    <p className="text-[#00A99D] font-mono text-[10px] sm:text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                      {client.metric}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="">
            <div className="group flex items-center gap-4 mb-10 w-fit cursor-default">
              <div className="h-px w-8 bg-gray-500 group-hover:bg-[#5e0ecd] transition-colors duration-500" />
              <span className="group-hover:text-[#5e0ecd] uppercase transition-colors duration-500 text-sm text-gray-500 tracking-[0.2em] font-mono">
                Our Partners
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group relative p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#050505] hover:border-[#5e0ecd]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(94,14,205,0.3)] flex flex-col items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5e0ecd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="relative z-10 max-h-16 max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="h-12 flex flex-col items-center justify-start overflow-hidden w-full text-center relative z-10 mt-4">
                    <h3 className="text-white/60 group-hover:text-white font-semibold tracking-tight text-sm sm:text-base transition-colors duration-300">
                      {partner.role}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
