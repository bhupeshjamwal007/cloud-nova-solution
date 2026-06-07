"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
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

  return (
    <nav className="fixed top-0 w-full px-[5%] py-6 flex justify-between items-center z-50 bg-gradient-to-b from-[#030303e6] to-transparent">
      <Link href="/" className="font-bold text-2xl tracking-[2px] flex items-center gap-4 hover:opacity-80 transition-opacity">
        <img src="/assets/logo.png" alt="Logo" className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
        CLOUD NOVA SOLUTIONS
      </Link>
      <ul className="flex list-none gap-8">
        {[
          { label: "Services", href: "/#services" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Contact Us", href: "/contact" }
        ].map((item) => (
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
    </nav>
  );
}
