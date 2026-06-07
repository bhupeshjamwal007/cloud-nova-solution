import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import AIChat from "@/components/AIChat";
import ThreeBackground from "@/components/ThreeBackground";
import SmoothScrolling from "@/components/SmoothScrolling";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Cloud Nova Solutions",
  description: "A technology-driven company specializing in modern website development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased bg-[#030303] text-[#f0f0f0]`}
      >
        <SmoothScrolling>
          <ThreeBackground />
          <Navbar />
          {children}
          <CinematicFooter />
          <AIChat />
        </SmoothScrolling>
      </body>
    </html>
  );
}
