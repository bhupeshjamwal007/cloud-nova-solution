"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0a0a0ae6] border-t border-white/10 px-[10%] pt-16 pb-8">
      <div className="flex justify-between flex-wrap gap-8 border-b border-white/5 pb-8 mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
            <h2 className="text-[#00e5ff] font-bold text-2xl mb-0">CLOUD NOVA</h2>
          </div>
          <p className="text-[#ccc]">Architects of the digital frontier.</p>
        </div>
        <div className="flex gap-8 items-center">
          {["Home", "Vision", "Services", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}`}
              className="text-[#ccc] uppercase text-sm tracking-wide transition-colors hover:text-[#ff00ea]"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-[#666]">
        <p>&copy; 2026 Cloud Nova Solution. All rights reserved.</p>
      </div>
    </footer>
  );
}
