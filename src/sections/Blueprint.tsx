"use client";

import Image from "next/image";
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
      className="relative bg-black py-12 text-white sm:py-18 lg:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030303] to-black opacity-80" />
      <div className="absolute inset-0 border-y-2 border-[#ff9302]/20 sm:border-y-4" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-10 lg:flex-row lg:items-center lg:gap-14">
        <div
          className={`relative w-full overflow-hidden rounded-[32px] border-4 border-[#ff9302] bg-black/70 shadow-[0_0_60px_rgba(255,147,2,0.25)] lg:w-[52%] lg:-ml-12 xl:-ml-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: isVisible ? '0.05s' : '0s' }}
        >
          <Image
            src="/images/kimochi.gif"
            alt="Tygo Blueprint Preview"
            width={960}
            height={1080}
            className="h-full w-full object-cover"
            unoptimized
            priority
          />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border-2 border-[#ff9302]/50 bg-black/70 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.25em] text-white/90">
            Jungle Ops Visual Log
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 text-center sm:text-left lg:w-[48%]">
          <div className={`space-y-3 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.15s' : '0s' }}>
            <span className="inline-flex items-center justify-center gap-2 self-center rounded-full border-3 border-[#ff9302] bg-black/60 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-white glow-border-strong sm:self-start sm:border-4 sm:px-6 sm:py-2 sm:text-xs sm:tracking-[0.35em]">
              BLUEPRINT
            </span>
            <h2 className="text-3xl font-black uppercase text-[#FF8B00] sm:text-4xl lg:text-5xl glow-text-strong">
              TYGO Blueprint
            </h2>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 glow-text sm:text-sm sm:tracking-[0.2em] lg:text-base lg:tracking-[0.25em]">
              THE COMPLETE STRATEGIC PLAN FOR JUNGLE DOMINATION.
            </p>
          </div>

          <div className={`flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-start ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.25s' : '0s' }}>
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-3 rounded-full border-3 border-[#ff9302] bg-black/70 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-y-2 sm:w-auto sm:px-8 sm:py-4 sm:text-base sm:tracking-[0.25em]"
              style={{
                boxShadow: '0 0 20px rgba(255, 147, 2, 0.4), 0 0 40px rgba(255, 147, 2, 0.2), inset 0 0 20px rgba(255, 147, 2, 0.15)',
              }}
            >
              <FaEye className="text-lg sm:text-xl" />
              <span>View Blueprint</span>
            </a>

            <button
              onClick={handleDownload}
              className="group flex w-full items-center justify-center gap-3 rounded-full border-3 border-[#ff9302] bg-black/70 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-y-2 sm:w-auto sm:px-8 sm:py-4 sm:text-base sm:tracking-[0.25em]"
              style={{
                boxShadow: '0 0 20px rgba(255, 147, 2, 0.4), 0 0 40px rgba(255, 147, 2, 0.2), inset 0 0 20px rgba(255, 147, 2, 0.15)',
              }}
            >
              <FaDownload className="text-lg sm:text-xl" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className={`rounded-2xl border-3 border-[#ff9302] bg-black/70 px-6 py-5 text-left shadow-[0_0_40px_rgba(255,147,2,0.25)] sm:px-8 sm:py-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.35s' : '0s' }}>
            <div className="flex items-center gap-4">
              <FaFilePdf className="text-5xl text-[#FF8B00] glow-text-strong sm:text-6xl" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-white/80 sm:text-sm">
                  TYGO STRATEGIC BLUEPRINT, ART DIRECTION & EXECUTION PLAN
                </p>
                {/* <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 sm:text-xs">
                  TYGO STRATEGIC BLUEPRINT, ART DIRECTION & EXECUTION PLAN
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

