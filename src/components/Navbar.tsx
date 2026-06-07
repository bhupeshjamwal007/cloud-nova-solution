"use client";

import { useState } from "react";
import Link from "next/link";
import { asset, cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close menu on click
    
    // If it's a cross-page hash link (like /#services)
    if (href.startsWith("/#")) {
      const targetId = href.replace("/", "");
      if (pathname === "/") {
        // Already on home page, just smooth scroll to target
        lenis?.scrollTo(targetId);
      } else {
        // Navigate to home, Next.js will handle the hash jump
        router.push(href);
      }
    } 
    // If it's a same-page hash link (like #contact)
    else if (href.startsWith("#")) {
      lenis?.scrollTo(href);
    } 
    // Standard route navigation (like /portfolio)
    else {
      router.push(href);
    }
  };

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact Us", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 w-full px-[5%] py-4 md:py-6 flex flex-col md:flex-row justify-between md:items-center z-50 bg-gradient-to-b from-[#030303e6] to-transparent">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/" className="font-bold text-xl md:text-2xl tracking-[2px] flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity">
          <img src={asset("/assets/logo.png")} alt="Logo" className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
          <span className="hidden sm:block">CLOUD NOVA SOLUTIONS</span>
          <span className="block sm:hidden">CLOUD NOVA</span>
        </Link>
        <button 
          className="md:hidden text-white hover:text-[#00e5ff] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex list-none gap-8">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="text-white no-underline text-sm uppercase tracking-wide relative pb-1 transition-colors hover:text-[#00e5ff] group cursor-pointer"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00e5ff] transition-all duration-300 shadow-[0_0_10px_#00e5ff] group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "md:hidden flex flex-col items-center gap-6 overflow-hidden transition-all duration-300 ease-in-out bg-[#030303f2] backdrop-blur-md rounded-2xl mt-4 w-full",
        isMobileMenuOpen ? "max-h-[300px] py-6 border border-white/10" : "max-h-0 py-0 border-transparent opacity-0"
      )}>
        {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNav(e, item.href)}
            className="text-white no-underline text-lg uppercase tracking-wide relative pb-1 transition-colors hover:text-[#00e5ff]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
