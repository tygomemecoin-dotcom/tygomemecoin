"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type ExchangeItem = {
  name: string;
  href: string;
  icon?: string;
  maxWidth?: number;
  emphasize?: boolean;
};

const exchanges: ExchangeItem[] = [
  { name: "DEXSCREENER", href: "https://dexscreener.com/solana/styu36bega5evsdcu6p66tskr6inmpna4gszseinehz", icon: "/images/logo/dexscreener.png", maxWidth: 200 },
  { name: "DEXTOOLS", href: "https://www.dextools.io/app/en/solana/pair-explorer/sTYU36bEGA5eVsDCU6P66tskR6iNMPnA4gSZseiNEHz?t=1764640571311", icon: "/images/logo/dextools.png", maxWidth: 200 },
  { name: "JUPITER", href: "https://jup.ag/?buy=uwYoqVUs1QacagLYZTPK9eFwjwptpmgV4vA1poKpump", icon: "/images/logo/jupiter.png", maxWidth: 260 },
  { name: "PUMPFUN", href: "https://pump.fun/coin/uwYoqVUs1QacagLYZTPK9eFwjwptpmgV4vA1poKpump", icon: "/images/logo/pumpfun.png", maxWidth: 320 },
  { name: "OKX DEX", href: "https://web3.okx.com/es-es/dex-swap?chain=solana,solana&token=11111111111111111111111111111111,uwYoqVUs1QacagLYZTPK9eFwjwptpmgV4vA1poKpump", icon: "/images/logo/okx.png", maxWidth: 260 },
  // { name: "GATE IO", href: "https://www.gate.io", icon: "/images/logo/gateio.png" },
  // { name: "KUCOIN", href: "https://www.kucoin.com", icon: "/images/logo/kucoin.png" },
  // { name: "REVOLUT", href: "https://www.revolut.com", icon: "/images/logo/revoult.png", maxWidth: 220 },
  // { name: "LBANK", href: "https://www.lbank.com", icon: "/images/logo/lbank.png", maxWidth: 260 },
  // { name: "COINBASE", href: "https://www.coinbase.com", icon: "/images/logo/coinbase.png" },
  // { name: "BINANCE", href: "https://www.binance.com", icon: "/images/logo/binance.png", maxWidth: 260 },
];

function ExchangeCard({ exchange, isVisible, delay }: { exchange: ExchangeItem; isVisible: boolean; delay: number }) {
  return (
    <a
      href={exchange.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-16 items-center justify-center rounded-full transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none sm:h-20 lg:h-24 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: isVisible ? `${delay}s` : '0s' }}
    >
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-3 border-[#ff9302] bg-[#FF8B00]/30 backdrop-blur-sm px-3 glow-border glow-hover transition-shadow hover:shadow-none sm:px-4 lg:px-6"
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-full"
          aria-hidden="true"
        />
        {exchange.icon ? (
          <div
            className="relative h-full w-full"
            style={{ maxWidth: (exchange.maxWidth ?? 220) + "px", minWidth: "80px" }}
          >
            <Image
              src={exchange.icon}
              alt={`${exchange.name} logo`}
              fill
              sizes="(min-width:1024px) 260px, (min-width:640px) 200px, 160px"
              unoptimized
              className="object-contain drop-shadow-[0_0_14px_rgba(0,0,0,0.25)]"
            />
          </div>
        ) : (
          <span className="relative text-xs font-black uppercase tracking-[0.2em] text-white glow-text sm:text-sm sm:tracking-[0.25em] lg:text-base">
            {exchange.name}
          </span>
        )}
      </div>
    </a>
  );
}

export default function BuyPortalSection() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
  });

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      id="buy-tygo"
      className="relative galaxy-bg py-10 text-white sm:py-14 lg:py-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent z-0" />
      <div className="absolute inset-0 border-y-3 border-[#ff9302]/30 sm:border-y-4" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:gap-8 sm:px-6 md:px-10 lg:gap-10 lg:px-12">
        <div className={`flex flex-col text-center sm:text-left ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.1s' : '0s' }}>
          <h2 className="text-3xl font-black uppercase text-[#FF8B00] sm:text-4xl lg:text-6xl glow-text-strong">
            BUY TYGO ON
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {exchanges.map((exchange, index) => (
            <ExchangeCard key={exchange.name} exchange={exchange} isVisible={isVisible} delay={0.2 + index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}