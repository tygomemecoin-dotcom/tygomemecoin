"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type HowToBuyStep = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const steps: HowToBuyStep[] = [
  {
    title: "Download the Pump.fun app",
    description: "Available on iOS and Android — the easiest way to buy new Solana gems.",
  },
  {
    title: "Create your account",
    description: "Follow the onboarding flow and lock in your wallet credentials.",
  },
  {
    title: "Deposit SOL (Solana)",
    description: "Use Apple Pay, Revolut, or any available method to add funds instantly.",
  },
  {
    title: "Search for $TYGO",
    description: "Copy and paste \"TYGO\" or the contract address into the search bar.",
  },
  {
    title: "Swap your SOL for $TYGO",
    description: "Confirm the trade and wait a few seconds for it to process.",
  },
  {
    title: "Congrats!",
    description:
      "You’re officially a $TYGO holder, part of the wildest jungle on Solana — now sit tight and ride the gains.",
    icon: <FaCheckCircle className="text-[#16a34a]" />,
  },
];

export function HowToBuySection() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
  });

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      id="how-to-buy"
      className="relative galaxy-bg text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 via-[#FF8B00]/20 to-transparent z-0" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:gap-12 sm:px-10 lg:px-12 lg:py-20 max-[320px]:gap-6 max-[320px]:px-3 max-[320px]:py-10">
        <div className={`space-y-3 text-center sm:space-y-4 sm:text-left ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.1s' : '0s' }}>
          <span className="inline-flex items-center gap-3 self-center rounded-full border-4 border-[#ff9302] bg-black/60 backdrop-blur-md px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] sm:self-start">
            <Image src="/images/logo.jpg" alt="Logo" width={16} height={16} className="h-4 w-4 rounded-full object-cover" /> HOW TO BUY $TYGO
          </span>
          <h2 className="text-3xl font-black uppercase max-[360px]:text-2xl sm:text-4xl lg:text-6xl glow-text-strong">
            HOW TO BUY $TYGO
          </h2>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 glow-text sm:text-sm lg:text-base">
            FAST, FUN, AND SOLANA-SLICK.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 max-[360px]:grid-cols-1 max-[360px]:gap-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`group flex transform flex-col gap-2 rounded-3xl border-4 border-[#ff9302] bg-black/60 backdrop-blur-md p-3 text-white glow-border glow-hover transition-all duration-200 -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 sm:gap-4 sm:p-6 max-[360px]:rounded-2xl max-[360px]:border-3 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : '0s' }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#ff9302] bg-[#FF8B00]/30 backdrop-blur-sm text-xl font-black text-[#ff9302] glow-border-strong max-[320px]:h-10 max-[320px]:w-10 max-[320px]:border-3">
                {step.icon ? step.icon : index + 1}
              </span>
              <div className="space-y-2">
                <h3 className="text-base font-black uppercase tracking-[0.15em] sm:text-xl max-[360px]:text-sm glow-text-strong">{step.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70 glow-text sm:text-sm max-[360px]:text-[11px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToBuySection;
