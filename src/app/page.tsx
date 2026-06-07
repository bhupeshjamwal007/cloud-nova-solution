import { TextRevealByWord } from "@/components/ui/text-reveal";
import OrbitalSystem from "@/components/OrbitalSystem";
import StickyScrollGallery from "@/components/ui/sticky-scroll";

export default function Home() {
  return (
    <main className="scroll-container relative z-10 w-full">
      {/* Section 1: Hero */}
      <section id="hero" className="min-h-screen w-full flex items-center px-[10%]">
        <div className="max-w-[800px]">
          <h1 className="magic-text font-heading mb-4 leading-tight">Cloud Nova Solutions</h1>
          <p className="text-xl text-[#ccc] font-light leading-relaxed">
            A technology-driven company specializing in modern website development, mobile applications, cloud solutions, and AI-powered digital transformation. We believe in transforming your ideas to digital growth.
            <br />
            <br />
            <span className="text-[#00e5ff] font-bold tracking-wide">THINK ➡️ INNOVATE ➡️ BUILD ➡️ SCALE ➡️ GROWTH</span>
          </p>
          <div className="mt-12 flex flex-col items-start gap-2">
            <span className="text-xs uppercase tracking-[2px] text-white/50">Begin Journey</span>
            <div className="w-[1px] h-[40px] bg-white/20 relative overflow-hidden arrow-anim"></div>
          </div>
        </div>
      </section>

      {/* Section 2: About / Mission & Vision */}
      <section id="about" className="min-h-screen w-full flex items-center justify-end px-[10%]">
        <div className="max-w-[800px] w-full bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-400 hover:-translate-y-[10px] hover:shadow-[0_30px_60px_rgba(0,229,255,0.2)] hover:border-[#00e5ff]/30">
          <h2 className="magic-text-secondary font-heading mb-8 leading-tight">Mission and Vision</h2>
          
          <h3 className="text-[#00e5ff] text-xl mb-2 font-bold">Our Mission</h3>
          <p className="text-[#ccc] text-base mb-6">
            At CLOUD NOVA SOLUTION, our aim is to empower businesses with innovative websites, mobile applications, cloud technologies, and AI-driven solutions that accelerate digital growth and transform ideas into reality. Transforming Ideas Into Scalable Solutions.
          </p>
          
          <h3 className="text-[#00e5ff] text-xl mb-2 font-bold">Our Vision</h3>
          <p className="text-[#ccc] text-base">
            Empowering business through intelligent technology and innovating beyond possibilities.
          </p>
        </div>
      </section>

      {/* Section 3: Services (Orbital Animation) */}
      <section id="services" className="min-h-screen w-full flex items-center justify-center px-[5%] md:px-[10%] py-20 relative overflow-hidden">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center">
          <h2 className="magic-text font-heading text-center mb-16">Our Services</h2>
          <OrbitalSystem />
        </div>
      </section>

      {/* Section 4 & 5: Why Choose Us & Process */}
      <section id="why-us-process" className="min-h-screen w-full flex items-center justify-center px-[10%]">
        <div className="max-w-[1200px] w-full flex flex-wrap gap-8 justify-between">
          <div className="flex-1 min-w-[300px] bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-400 hover:-translate-y-[10px] hover:shadow-[0_30px_60px_rgba(0,229,255,0.2)] hover:border-[#00e5ff]/30">
            <h2 className="magic-text-secondary font-heading mb-8 text-[clamp(2rem,4vw,3.5rem)] leading-tight">Why Choose Us</h2>
            <ul className="list-none space-y-4">
              <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00e5ff]"><strong className="text-[#00e5ff]">Innovation:</strong> We use the latest technologies to build modern digital experiences.</li>
              <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00e5ff]"><strong className="text-[#00e5ff]">Client Focused:</strong> Every project is tailored to meet your business goals.</li>
              <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00e5ff]"><strong className="text-[#00e5ff]">Performance Driven:</strong> Fast, secure, and optimized solutions for maximum efficiency.</li>
              <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00e5ff]"><strong className="text-[#00e5ff]">Reliable Support:</strong> We provide continuous 24X7 support and maintenance after deployment.</li>
            </ul>
          </div>

          <div className="flex-1 min-w-[300px] bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-400 hover:-translate-y-[10px] hover:shadow-[0_30px_60px_rgba(0,229,255,0.2)] hover:border-[#00e5ff]/30">
            <h2 className="magic-text-secondary font-heading mb-8 text-[clamp(2rem,4vw,3.5rem)] leading-tight">How We Work</h2>
            <ul className="list-none space-y-4">
              <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00e5ff]"><strong className="text-[#00e5ff]">Planning & Strategy:</strong> Understanding your business goals and project requirements.</li>
              <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00e5ff]"><strong className="text-[#00e5ff]">Design & Development:</strong> Creating visually stunning and high-performance digital products.</li>
              <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00e5ff]"><strong className="text-[#00e5ff]">Testing & Optimization:</strong> Ensuring security, speed, and seamless functionality.</li>
              <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00e5ff]"><strong className="text-[#00e5ff]">Deployment & Support:</strong> Launching and maintaining reliable solutions for long-term success.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Text Reveal Integration */}
      <section className="w-full">
        <TextRevealByWord text="Cloud Nova Solutions will change the way you design and build the web." />
      </section>

      {/* Section 6: Portfolio / Sticky Scroll Gallery */}
      <section id="portfolio" className="w-full relative z-20">
        <StickyScrollGallery />
      </section>

    </main>
  );
}
