"use client";

import { useState } from "react";
import { cn, asset } from "@/lib/utils";
import { X } from "lucide-react";

export default function OrbitalSystem() {
  const [modalData, setModalData] = useState<{ title: string; desc: string } | null>(null);
  const isPaused = modalData !== null;

  return (
    <>
      <div className="relative w-full h-[600px] flex justify-center items-center mt-8 scale-75 md:scale-100">
        {/* Center Circle */}
        <div 
          className="absolute top-1/2 left-1/2 w-[120px] h-[120px] rounded-full bg-[radial-gradient(circle_at_center,#fff,#00e5ff)] flex justify-center items-center shadow-[0_0_50px_#00e5ff] z-10 font-bold text-black"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <span className="text-center text-sm">CLOUD NOVA</span>
        </div>

        <div
          className="absolute top-1/2 left-1/2 border border-white/10 rounded-full w-[300px] h-[300px] pointer-events-none"
          style={{ transform: "translate(-50%, -50%)", animation: `spin 20s linear infinite`, animationPlayState: isPaused ? "paused" : "running" }}
        >
          <div
            className="absolute top-0 left-1/2 cursor-pointer group pointer-events-auto"
            style={{ transform: "translate(-50%, -50%)", animation: `anti-spin 20s linear infinite`, animationPlayState: isPaused ? "paused" : "running" }}
            onClick={() => setModalData({ title: "Web Development", desc: "We create high-performance, cinematic websites leveraging modern stacks to deliver unparalleled user experiences." })}
          >
            <img src={asset("/assets/web.png")} alt="Web Dev" className="w-[70px] h-[70px] rounded-full object-cover border-2 border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.5)] group-hover:scale-125 group-hover:shadow-[0_0_40px_rgba(0,229,255,1)] transition-all" />
          </div>
        </div>

        <div
          className="absolute top-1/2 left-1/2 border border-white/10 rounded-full w-[450px] h-[450px] pointer-events-none"
          style={{ transform: "translate(-50%, -50%)", animation: `spin 30s linear infinite`, animationPlayState: isPaused ? "paused" : "running" }}
        >
          <div
            className="absolute top-0 left-1/2 cursor-pointer group pointer-events-auto"
            style={{ transform: "translate(-50%, -50%)", animation: `anti-spin 30s linear infinite`, animationPlayState: isPaused ? "paused" : "running" }}
            onClick={() => setModalData({ title: "Mobile App Development", desc: "Native and cross-platform mobile applications designed with stunning UI/UX that engage users and drive business growth." })}
          >
            <img src={asset("/assets/app.png")} alt="App Dev" className="w-[70px] h-[70px] rounded-full object-cover border-2 border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.5)] group-hover:scale-125 group-hover:shadow-[0_0_40px_rgba(0,229,255,1)] transition-all" />
          </div>
        </div>

        <div
          className="absolute top-1/2 left-1/2 border border-white/10 rounded-full w-[600px] h-[600px] pointer-events-none"
          style={{ transform: "translate(-50%, -50%)", animation: `spin 40s linear infinite`, animationPlayState: isPaused ? "paused" : "running" }}
        >
          <div
            className="absolute top-0 left-1/2 cursor-pointer group pointer-events-auto"
            style={{ transform: "translate(-50%, -50%)", animation: `anti-spin 40s linear infinite`, animationPlayState: isPaused ? "paused" : "running" }}
            onClick={() => setModalData({ title: "Cloud & AI Solutions", desc: "Scalable, secure, and robust enterprise software, cloud architecture, and AI-driven solutions." })}
          >
            <img src={asset("/assets/software.png")} alt="Software Dev" className="w-[70px] h-[70px] rounded-full object-cover border-2 border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.5)] group-hover:scale-125 group-hover:shadow-[0_0_40px_rgba(0,229,255,1)] transition-all" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={cn(
          "fixed inset-0 z-[1000] flex justify-center items-center bg-black/80 backdrop-blur-sm transition-opacity duration-300",
          modalData ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setModalData(null)}
      >
        <div
          className={cn(
            "relative bg-[#141414e6] border border-white/20 p-8 md:p-12 rounded-2xl w-[90%] max-w-[600px] mx-4 text-center transition-transform duration-500 overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.2)]",
            modalData ? "translate-y-0" : "translate-y-[50px]"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => setModalData(null)} className="absolute top-4 right-5 text-white hover:text-white/70 z-10">
            <X size={24} />
          </button>
          <h2 className="text-3xl mb-4 text-[#00e5ff] relative z-10">{modalData?.title}</h2>
          <p className="text-[#ccc] text-lg relative z-10 leading-relaxed">{modalData?.desc}</p>
        </div>
      </div>
    </>
  );
}
