export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-end md:items-center w-full font-mono text-xs uppercase tracking-widest mt-24 pt-12 pb-12 border-t border-black/10 gap-8">
      <div className="flex flex-col gap-2">
        <div className="group flex items-center gap-3 cursor-default">
          <span className="w-1.5 h-1.5 bg-[#00A99D] rounded-full animate-pulse shadow-[0_0_12px_#00A99D] transition-all duration-500" />
          <span className="text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
            System Active
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-gray-500 text-right">
        <span className="text-gray-900">Deca4 Advisory FZE</span>
        <span>
          Floor no. 04. Premises - Unit FZE 385, Building 14
          <br />
          Dubai World Trade Center, Sheikh Rashid Tower
          <br />
          Sheikh Zayed Road, Dubai, UAE
        </span>
      </div>
    </footer>
  );
}
