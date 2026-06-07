"use client";
import React from "react";

export default function StickyScrollGallery() {
  return (
    <div className="w-full relative bg-transparent z-20">
      <div className="wrapper">
        {/* Intro text */}
        <section className="text-white h-screen w-full grid place-content-center sticky top-0 bg-transparent z-10">
          <h2 className="magic-text z-10 text-center tracking-tight leading-[120%] mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-[#00e5ff] text-center z-10 font-bold uppercase tracking-widest">
            Scroll down to explore 👇
          </p>
        </section>
      </div>

      <section className="text-white w-full bg-transparent relative z-20">
        <div className="grid grid-cols-12 gap-6 max-w-[1400px] mx-auto px-[5%] pb-20">
          {/* Left Column (Scrolls normally) */}
          <div className="grid gap-6 col-span-4 mt-20">
            {[
              "/assets/portfolio_left_1.png",
              "/assets/portfolio_left_2.png",
              "/assets/portfolio_left_3.png",
              "/assets/portfolio_left_4.png",
              "/assets/portfolio_left_5.png",
            ].map((src, i) => {
              const isVideo = src.match(/\.(mp4|webm|ogg)$/i);
              const className = "transition-all duration-300 w-full h-[24rem] xl:h-[30rem] align-bottom object-cover rounded-xl border border-white/10 hover:border-[#00e5ff]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]";
              return (
                <figure key={i} className="w-full">
                  {isVideo ? (
                    <video src={src} autoPlay loop muted playsInline className={className} />
                  ) : (
                    <img src={src} alt={`Portfolio Left ${i}`} className={className} />
                  )}
                </figure>
              );
            })}
          </div>

          {/* Middle Column (Sticky) */}
          <div className="sticky top-[10vh] h-[80vh] w-full col-span-4 gap-6 grid grid-rows-3 pt-4">
            {[
              "/assets/portfolio_video_1.mp4",
              "/assets/portfolio_video_2.mp4",
              "/assets/portfolio_video_3.mp4",
            ].map((src, i) => {
              const isVideo = src.match(/\.(mp4|webm|ogg)$/i);
              const className = "transition-all duration-300 h-full w-full align-bottom object-cover rounded-xl border border-white/10 hover:border-[#ff00ea]/50 hover:shadow-[0_0_30px_rgba(255,0,234,0.3)]";
              return (
                <figure key={i} className="w-full h-full">
                  {isVideo ? (
                    <video src={src} autoPlay loop muted playsInline className={className} />
                  ) : (
                    <img src={src} alt={`Portfolio Sticky ${i}`} className={className} />
                  )}
                </figure>
              );
            })}
          </div>

          {/* Right Column (Scrolls normally, offset) */}
          <div className="grid gap-6 col-span-4 mt-40">
            {[
              "/assets/portfolio_right_1.png",
              "/assets/portfolio_right_2.png",
              "/assets/portfolio_right_3.png",
              "/assets/portfolio_right_4.png",
            ].map((src, i) => {
              const isVideo = src.match(/\.(mp4|webm|ogg)$/i);
              const className = "transition-all duration-300 w-full h-[24rem] xl:h-[30rem] align-bottom object-cover rounded-xl border border-white/10 hover:border-[#00e5ff]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]";
              return (
                <figure key={i} className="w-full">
                  {isVideo ? (
                    <video src={src} autoPlay loop muted playsInline className={className} />
                  ) : (
                    <img src={src} alt={`Portfolio Right ${i}`} className={className} />
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
