"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const heroLines = [
  "$TYGO • WILD DEGEN BORN IN THE CRYPTO JUNGLE •",
  "ALWAYS HUNTING GAINS • FOMO INTO FORTUNE •",
  "ART, ANIMATION, AND CHAOS ON SOLANA •",
];

const ComicMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-4 sm:py-5">
      {/* <div className="absolute inset-0 translate-y-1 scale-[0.99] bg-black/80 backdrop-blur-sm sm:translate-y-2 sm:scale-[0.98]" aria-hidden /> */}
      <div className="relative bg-[#ff9302]/20 backdrop-blur-md border-y-2 border-[#ff9302]/50 glow-border py-3 sm:py-4">
        <Marquee gradient={false} speed={55} className="uppercase">
          <div className="flex items-center gap-4 px-4 text-base font-black tracking-[0.15em] text-white sm:gap-6 sm:px-6 sm:text-lg sm:tracking-[0.22em] md:gap-8 md:px-8 md:text-2xl md:tracking-[0.28em] lg:text-3xl lg:tracking-[0.3em] font-freeman">
            {heroLines.map((line, index) => (
              <span key={index} className="flex items-center gap-4">
                <Image
                  src="/images/mascot.gif"
                  alt="TYGO icon"
                  width={36}
                  height={36}
                  className="rounded-full border-2 border-[#ff9302] sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  unoptimized
                />
                {line}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ComicMarquee;
