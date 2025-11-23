"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FaFilePdf, FaDownload, FaEye } from "react-icons/fa";

export default function BlueprintSection() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
  });

  const pdfPath = "/pdf/TYGO.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "TYGO_Blueprint.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      id="blueprint"
      className="relative galaxy-bg py-10 text-white sm:py-16 lg:py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent z-0" />
      <div className="absolute inset-0 border-y-3 border-[#ff9302]/30 sm:border-y-4" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:gap-12 sm:px-10 lg:px-12">
        <div className={`space-y-3 text-center sm:space-y-4 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.1s' : '0s' }}>
          <span className="inline-flex items-center gap-2 rounded-full border-3 border-[#ff9302] bg-black/60 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-white glow-border-strong sm:border-4 sm:px-6 sm:py-2 sm:text-xs sm:tracking-[0.35em]">
            BLUEPRINT
          </span>
          <h2 className="text-3xl font-black uppercase text-[#FF8B00] sm:text-4xl lg:text-6xl glow-text-strong">
            TYGO Blueprint
          </h2>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 glow-text sm:text-sm sm:tracking-[0.2em] lg:text-base lg:tracking-[0.25em]">
            THE COMPLETE STRATEGIC PLAN FOR JUNGLE DOMINATION.
          </p>
        </div>

        <div className={`flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:justify-center lg:gap-10 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.2s' : '0s' }}>
          {/* View PDF Button */}
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-full border-3 border-[#ff9302] bg-black/60 backdrop-blur-md px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-y-2 sm:gap-4 sm:border-4 sm:px-8 sm:py-4 sm:text-base sm:tracking-[0.25em]"
            style={{
              boxShadow: '0 0 20px rgba(255, 147, 2, 0.4), 0 0 40px rgba(255, 147, 2, 0.2), inset 0 0 20px rgba(255, 147, 2, 0.15)',
            }}
          >
            <FaEye className="text-lg sm:text-xl" />
            <span>View Blueprint</span>
          </a>

          {/* Download PDF Button */}
          <button
            onClick={handleDownload}
            className="group flex items-center justify-center gap-3 rounded-full border-3 border-[#ff9302] bg-black/60 backdrop-blur-md px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-y-2 sm:gap-4 sm:border-4 sm:px-8 sm:py-4 sm:text-base sm:tracking-[0.25em]"
            style={{
              boxShadow: '0 0 20px rgba(255, 147, 2, 0.4), 0 0 40px rgba(255, 147, 2, 0.2), inset 0 0 20px rgba(255, 147, 2, 0.15)',
            }}
          >
            <FaDownload className="text-lg sm:text-xl" />
            <span>Download PDF</span>
          </button>
        </div>

        {/* PDF Icon Display */}
        <div className={`flex justify-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.3s' : '0s' }}>
          <div className="relative rounded-2xl border-3 border-[#ff9302] bg-black/60 backdrop-blur-md p-6 glow-border-strong sm:rounded-3xl sm:border-4 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center">
              <FaFilePdf className="text-6xl text-[#FF8B00] glow-text-strong sm:text-7xl lg:text-8xl" />
            </div>
            <p className="mt-4 text-center text-xs font-black uppercase tracking-[0.2em] text-white/80 glow-text sm:text-sm sm:tracking-[0.25em]">
              TYGO Strategic Blueprint
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

