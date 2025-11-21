"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaCoins, FaFire, FaBolt, FaLock } from "react-icons/fa6";
import { SiSolana } from "react-icons/si";

type TokenStat = {
  icon: React.ReactNode;
  label: string;
  value: string;
  caption?: string;
};

const tokenStats: TokenStat[] = [
  {
    icon: <FaCoins className="text-2xl lg:text-4xl" />,
    label: "SUPPLY",
    value: "1B",
    caption: "1 BILLION",
  },
  {
    icon: <FaFire className="text-2xl lg:text-4xl" />,
    label: "LP",
    value: "BURNED",
  },
  {
    icon: <SiSolana className="text-2xl lg:text-4xl" />,
    label: "NETWORK",
    value: "SOLANA",
  },
  {
    icon: <FaLock className="text-2xl lg:text-4xl" />,
    label: "CONTRACT",
    value: "RENOUNCED",
  },
];

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="relative galaxy-bg text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 via-[#FF8B00]/20 to-transparent z-0" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 lg:gap-12 px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-20">
        
        {/* Header */}
        <div className="space-y-2 lg:space-y-4 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 lg:gap-3 self-center rounded-full border-2 lg:border-4 border-[#ff9302] bg-black/60 backdrop-blur-md px-4 lg:px-6 py-1.5 lg:py-2 text-[10px] lg:text-xs font-black tracking-[0.25em] lg:tracking-[0.35em] text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] sm:self-start">
            <Image src="/images/logo.jpg" alt="Logo" width={16} height={16} className="h-4 w-4 lg:h-5 lg:w-5 rounded-full object-cover" /> TYGONOMICS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black uppercase leading-tight glow-text-strong">
            Jungle Math That Never Folds
          </h2>
          <p className="text-[10px] sm:text-xs lg:text-base font-semibold uppercase tracking-[0.15em] lg:tracking-[0.25em] text-white/80 glow-text">
            BUILT FOR SPEED, LOCKED FOR CULTURE.
          </p>
        </div>

        {/* Token Stats - Compact 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {tokenStats.map((stat) => (
            <div
              key={stat.label}
              className="group flex transform flex-col gap-2 lg:gap-4 rounded-2xl lg:rounded-3xl border-2 lg:border-4 border-[#ff9302] bg-black/60 backdrop-blur-md p-3 lg:p-6 glow-border glow-hover transition-all duration-200 lg:-translate-x-2 lg:-translate-y-2 hover:translate-x-0 hover:translate-y-0"
            >
              <span className="text-xl lg:text-3xl text-[#ff9302] glow-text">{stat.icon}</span>
              <p className="text-[9px] lg:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.35em] text-white/70 glow-text">
                {stat.label}
              </p>
              <p className="text-sm lg:text-2xl font-black uppercase leading-tight text-[#ff9302] glow-text-strong">{stat.value}</p>
              {stat.caption && (
                <p className="text-[8px] lg:text-xs font-black uppercase tracking-[0.15em] lg:tracking-[0.25em] text-white/60 glow-text">
                  {stat.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Combined Pumpfun Launch & Buy Back Card */}
        <div className="flex flex-col gap-4 lg:gap-6 rounded-2xl lg:rounded-3xl border-2 lg:border-4 border-[#ff9302] bg-black/60 backdrop-blur-md p-4 lg:p-8 text-white glow-border-strong glow-hover transition-all duration-200 lg:-translate-x-2 lg:-translate-y-2 hover:translate-x-0 hover:translate-y-0">
          
          {/* Pumpfun Info Section */}
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-14 h-14 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl border-2 border-[#ff9302] bg-[#FF8B00]/30 backdrop-blur-sm flex items-center justify-center overflow-hidden glow-border-strong">
              <FaBolt className="text-3xl sm:text-2xl lg:text-3xl text-[#ff9302] glow-text" />
            </div>
            <div className="space-y-1.5 lg:space-y-3 flex-1 w-full sm:w-auto">
              <span className="inline-flex items-center gap-2 text-base sm:text-sm lg:text-lg font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[#ff9302] glow-text-strong">
                Pumpfun Launch
              </span>
              <p className="text-xs sm:text-[10px] lg:text-sm font-semibold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-white/80 glow-text">
                CREATOR REWARDS USED FOR:
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 rounded-xl lg:rounded-2xl border-2 lg:border-4 border-[#ff9302] bg-[#FF8B00]/20 backdrop-blur-sm p-3 sm:p-4 lg:p-5 text-white glow-border glow-hover transition-all duration-200 -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0">
            <div className="flex-shrink-0 flex items-center justify-center">
              <FaBolt className="text-2xl sm:text-xl lg:text-2xl text-[#ff9302] glow-text" />
            </div>
            <p className="text-sm sm:text-xs lg:text-base font-black uppercase leading-relaxed flex-1 glow-text">
              FUND THE ANIMATION STUDIO
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl lg:rounded-2xl border-2 lg:border-4 border-[#ff9302] bg-black/80 backdrop-blur-md text-[#FF8B00] p-4 sm:p-5 lg:p-6 glow-border-strong glow-hover transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] overflow-hidden"
          >
            <div className="flex items-center gap-3 sm:gap-3 lg:gap-4 flex-1 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full bg-[#FF8B00]/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden flex-shrink-0 glow-border">
                <Image src="/images/logo.jpg" alt="Logo" fill className="object-cover rounded-full" sizes="(min-width:1024px) 3.5rem, 2.5rem" />
              </div>
              <div className="space-y-1 flex-1 min-w-0">
                <h3 className="text-base sm:text-sm lg:text-lg font-black uppercase leading-tight text-[#ff9302] glow-text-strong">
                  Buy Back $TYGO on Pumpfun
                </h3>
                <p className="text-xs sm:text-[10px] lg:text-xs font-semibold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-white/80 glow-text">
                  TAP TO ROAR WITH THE TREASURY.
                </p>
              </div>
            </div>
            <span className="flex-shrink-0 w-full sm:w-auto text-center sm:text-left rounded-full border-2 lg:border-4 border-[#FF8B00] bg-[#FF8B00]/30 backdrop-blur-sm px-4 lg:px-5 py-2 sm:py-1.5 lg:py-2 text-sm sm:text-xs lg:text-sm font-black uppercase tracking-[0.2em] lg:tracking-[0.25em] text-white glow-border glow-hover transition-all duration-200 group-hover:translate-x-[2px] group-hover:translate-y-[2px] lg:group-hover:translate-x-[3px] lg:group-hover:translate-y-[3px]">
              ↗ Enter Pumpfun
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TokenomicsSection;