"use client";

import ComicMarquee from "@/components/ComicMarquee";
import CosmicWavePattern from "@/components/CosmicWavePattern";
import AuroraComponent from "@/components/AuroraComponent";
import GalaxyPattern from "@/components/GalaxyPattern";
import Image from "next/image";
import Link from "next/link";
import {
  FaTelegram,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";

const socials = [
  { name: "Telegram", href: "https://t.me/", icon: FaTelegram },
  { name: "Twitter", href: "https://twitter.com/", icon: FaXTwitter },
  { name: "YouTube", href: "https://youtube.com/", icon: FaYoutube },
  { name: "TikTok", href: "https://www.tiktok.com/", icon: FaTiktok },
  { name: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
];

export function Hero() {
  return (
    <>
      <section id="hero" className="relative w-full overflow-hidden lg:min-h-screen galaxy-bg">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent z-0" /> */}
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent z-0" />
        {/* Cosmic Wave Pattern - Abstract dense waves */}
        {/* <CosmicWavePattern /> */}
        {/* <AuroraComponent/> */}
        <GalaxyPattern />
        

        <div style={{padding: '0px' }} className="lg:mt-4 mt-28 sm:mt-18 md:mt-28 relative mx-auto flex w-full flex-col-reverse items-center justify-center gap-0 px-4 pt-4 pb-0 text-center sm:gap-2 sm:px-8 sm:pt-6 sm:pb-0 md:gap-0 md:max-lg:flex-col-reverse lg:flex-row lg:min-h-screen lg:items-end lg:justify-center lg:gap-[clamp(2rem,4vw,4.5rem)] lg:px-[clamp(1.5rem,4vw,4rem)] lg:pb-0 lg:text-left">
          {/* Mascot - Left Side (second on mobile, left on desktop) */}
          <div 
            className="flex w-full justify-center -mt-4 md:-mt-4 lg:w-auto lg:justify-center lg:self-end fade-in-up"
            style={{ animationDelay: '1.8s' }}
          >
            <Image
              src="/images/mascot.gif"
              alt="$TYGO mascot"
              width={900}
              height={900}
              unoptimized
              priority
              className="h-auto w-[320px] sm:w-[440px] md:w-[520px] lg:w-[clamp(700px,48vw,1200px)]"
            />
          </div>

          {/* Text Content - Right Side (first on mobile, right on desktop) */}
          <div className="relative w-full max-w-xl -mb-2 md:-mb-2 lg:w-auto lg:max-w-[clamp(28rem,32vw,38rem)] lg:-translate-x-[clamp(1.5rem,8vw,4.5rem)] lg:self-end lg:mb-12 z-10">
            <div className="relative rounded-2xl px-3 py-3 sm:rounded-2xl sm:px-4 sm:py-4 md:rounded-2xl md:px-3 md:py-3 lg:rounded-[28px] lg:px-6 lg:py-12  ">
              <h1
                className="space-y-0 font-black leading-[0.94] sm:space-y-0 md:space-y-0 lg:space-y-2 glow-text-subtle fade-in-up"
                style={{ 
                  fontSize: "clamp(3.5rem, 12vw, 8.4rem)", 
                  letterSpacing: "0.045em", 
                  color: "#ff9302",
                  animationDelay: '0.8s'
                }}
              >
                <span className="block">TYGO</span>
              </h1>
              <p 
                className="mt-1.5 text-center text-base font-black leading-tight text-white glow-text sm:mt-1.5 sm:leading-tight md:mt-1.5 md:leading-tight md:text-base lg:mt-5 lg:text-left lg:text-[1.25rem] lg:leading-relaxed xl:text-[1.55rem] fade-in-up"
                style={{ animationDelay: '1.0s' }}
              >
                WILD DEGEN BORN IN THE CRYPTO JUNGLE
              </p>
              <div className="mt-3 space-y-6 sm:mt-3 sm:space-y-6 md:mt-3 md:space-y-6 lg:mt-6 lg:space-y-4">
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://pump.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border-3 border-[#ff9302] px-6 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#ff9302] glow-border-strong glow-hover transition-all duration-200 hover:translate-y-2 sm:px-8 sm:py-3 sm:text-base sm:tracking-[0.3em] fade-in-up"
                    style={{
                      background: 'linear-gradient(135deg, rgba(26, 77, 46, 0.9) 0%, rgba(40, 100, 60, 0.85) 50%, rgba(26, 77, 46, 0.9) 100%)',
                      boxShadow: '0 0 20px rgba(255, 147, 2, 0.4), 0 0 40px rgba(255, 147, 2, 0.2), inset 0 0 20px rgba(255, 147, 2, 0.15)',
                      animationDelay: '1.2s'
                    }}
                  >
                    Buy $TYGO
                  </a>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 sm:mt-4 sm:gap-2 md:mt-4 md:gap-2 lg:mt-6 lg:gap-3 lg:justify-start">
                  {socials.map(({ name, href, icon: Icon }, index) => (
                    <Link
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border-3 border-[#ff9302] bg-black/60 backdrop-blur-sm text-[#ff9302] glow-border glow-hover transition-all duration-200 hover:translate-y-2 sm:h-12 sm:w-12 sm:rounded-2xl sm:border-4 fade-in-up"
                      aria-label={name}
                      style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                    >
                      <Icon className="text-lg sm:text-xl" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComicMarquee />
    </>
  );
}

export default Hero;