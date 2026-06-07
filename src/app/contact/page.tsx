import React from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center pt-32 pb-20 px-[5%]">
      {/* Radial spotlight behind the form */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[100vmin] w-[100vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.05),transparent_60%)] blur-[50px] -z-10"
      />
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Contact Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="magic-text font-heading text-5xl md:text-7xl mb-6">
              Let's Build The Future
            </h1>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Whether you have a specific project in mind, need expert advice, or simply want to say hello, our team is ready to listen and deliver cutting-edge solutions.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00e5ff]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email</p>
                <a href="mailto:hello@cloudnovasolutions.com" className="text-lg text-white hover:text-[#00e5ff] transition-colors">hello@cloudnovasolutions.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00e5ff]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Phone</p>
                <a href="tel:+15551234567" className="text-lg text-white hover:text-[#00e5ff] transition-colors">+1 (555) 123-4567</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00e5ff]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">HQ Office</p>
                <p className="text-lg text-white">123 Innovation Drive, Tech City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
