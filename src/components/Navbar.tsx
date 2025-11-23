"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Buy", href: "#buy-tygo" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "How to Buy", href: "#how-to-buy" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-transparent">
      <div className="relative mt-4 w-full px-3 sm:px-6 overflow-visible">
        {/* <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-black" aria-hidden /> */}
        <nav className="relative flex w-full items-center justify-between rounded-2xl border-4 border-[#ff9302] bg-black/80 backdrop-blur-md px-4 py-2.5 text-white glow-border-strong max-[360px]:px-3 lg:px-5 lg:py-3">
          <div className="flex min-w-0 items-center gap-2 lg:gap-3">
            <div 
              className="flex h-9 w-9 items-center justify-center rounded-full border-3 border-[#ff9302] bg-[#ff9302]/30 backdrop-blur-sm glow-border-strong sm:h-10 sm:w-10 lg:h-11 lg:w-11 shrink-0 fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              <Image
                src="/images/logo.jpg"
                alt="$TYGO logo"
                width={30}
                height={30}
                className="h-6 w-6 rounded-full object-cover sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                priority
              />
            </div>
            <span 
              className="truncate text-base font-black uppercase tracking-[0.2em] max-[360px]:tracking-[0.12em] sm:text-lg sm:tracking-[0.3em] lg:text-xl lg:tracking-[0.4em] font-luckiest text-[#ff9302]  fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              $TYGO
            </span>
          </div>

          <div className="hidden items-center gap-3 text-xs font-black uppercase tracking-[0.25em] xl:gap-4 xl:text-sm xl:tracking-[0.3em] 2xl:gap-5 2xl:tracking-[0.35em] lg:flex font-freeman">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap rounded-full border-2 border-[#ff9302] bg-black/60 backdrop-blur-sm px-3 py-1.5 text-white glow-border glow-hover transition-all duration-200 hover:translate-y-2 xl:px-4 xl:py-2 2xl:px-5 fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://pump.fun"
              className="whitespace-nowrap rounded-full border-3 border-[#ff9302] bg-[#1a4d2e]/80 backdrop-blur-sm px-4 py-1.5 text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-y-2 font-freeman xl:px-5 xl:py-2 2xl:px-6 fade-in-up"
              target="_blank"
              rel="noreferrer"
              style={{ animationDelay: `${0.3 + navLinks.length * 0.1}s` }}
            >
              Buy $TYGO
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-full border-2 border-[#ff9302] bg-black/60 backdrop-blur-sm p-2 text-white glow-border glow-hover transition-all duration-200 hover:translate-y-2 fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </nav>

        <div
          className={`relative mt-2 px-3 lg:hidden transition-all duration-300 ease-out ${
            open
              ? "opacity-100 translate-y-0 max-h-[500px] pointer-events-auto"
              : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-black max-[360px]:translate-x-1 max-[360px]:translate-y-1" aria-hidden />
          <div className={`relative overflow-hidden rounded-2xl border-4 border-[#ff9302] bg-black/80 backdrop-blur-md p-3 glow-border-strong transition-all duration-300 ${open ? "scale-100" : "scale-[0.98]"}`}>
            <div className="grid grid-cols-2 gap-2 font-freeman">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-xl border-2 border-[#ff9302] bg-black/60 backdrop-blur-sm px-3 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-white glow-border glow-hover transition-all duration-200 hover:translate-y-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://pump.fun"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="col-span-2 flex items-center justify-center rounded-xl border-3 border-[#ff9302] bg-[#1a4d2e]/80 backdrop-blur-sm px-3 py-2 text-xs font-black uppercase tracking-[0.25em] text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-y-2"
              >
                Buy $TYGO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

