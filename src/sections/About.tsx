"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden galaxy-bg"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-30"
        src="/videos/fight_tygo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-purple-900/40 via-blue-900/30 to-black/80"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[9] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
      <div className="relative z-20 mx-auto flex w-full max-w-6xl px-4 py-10 sm:px-10 sm:py-16 lg:max-w-7xl lg:px-12 lg:py-20">
        <div className="grid w-full gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            <h2 className="text-4xl font-black uppercase text-[#FF8B00] sm:text-5xl lg:text-7xl glow-text-strong">
              About $TYGO
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg font-bold leading-relaxed text-white glow-text sm:text-xl lg:text-2xl">
                In the heart of the crypto jungle, <span className="text-[#FF8B00] glow-text-strong">$TYGO</span> the Tiger was born. A wild degen beast who lives on the edge and thrives in the chaos of Solana. He loves to trade and gamble, always chasing the next big opportunity, his favorite thing in the world is money.
              </p>
              <p className="text-base leading-relaxed text-white/90 glow-text sm:text-lg lg:text-xl">
                Fast, fearless, and always hungry for more, a beast who turns FOMO into fortune, fear into fuel, and roars when others panic.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {/* Combined Card - Contract Address & Money Tygo Image */}
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-[#ff9302] bg-black/60 backdrop-blur-md p-4 sm:p-5 lg:p-6 glow-border-strong glow-hover transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px]">
                {/* Contract Address Section */}
                <div className="w-full space-y-2 sm:space-y-3">
                  <p className="text-xs font-black uppercase tracking-wider text-white/70 sm:text-sm glow-text">Contract Address</p>
                  <div className="flex flex-col gap-2 rounded-lg border-2 sm:border-3 border-[#ff9302] bg-[#FF8B00]/20 backdrop-blur-sm p-3 sm:p-4 glow-border">
                    <code className="flex-1 overflow-x-auto break-all text-xs font-bold text-white glow-text sm:text-sm lg:text-base">
                      TyG0xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
                    </code>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('TyG0xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX');
                      }}
                      className="w-full shrink-0 rounded border-2 border-[#ff9302] bg-[#ff9302]/30 backdrop-blur-sm px-4 py-2 text-sm font-black uppercase text-white glow-border glow-hover transition-all hover:translate-x-[2px] hover:translate-y-[2px] sm:w-auto sm:border-3"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                
                {/* Money Tygo Image */}
                <div className="relative w-full">
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                    <Image
                      src="/images/money_tygo.jpg"
                      alt="Money Tygo"
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-10 lg:items-start lg:gap-12">
            <div className="w-full space-y-6 sm:space-y-8">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 lg:gap-8">
                <div className="flex flex-1 flex-col items-center gap-3 text-center sm:items-start sm:gap-4 sm:pt-6 sm:text-left lg:pt-14">
                  <h3 className="text-3xl font-black uppercase text-[#FF8B00] sm:text-4xl lg:text-5xl glow-text-strong">
                    Mission
                  </h3>
                  <p className="text-base font-semibold leading-relaxed text-white glow-text sm:text-lg lg:text-xl">
                    Turn <span className="text-[#FF8B00] glow-text-strong">$TYGO</span> into the most viral mascot on Solana—bridging
                    memes, animation, dan mainstream culture.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-0">
                  <div className="relative w-32 sm:w-40 lg:w-60">
                    <Image
                      src="/images/troll_tygo.gif"
                      alt="Troll Tygo"
                      width={240}
                      height={240}
                      unoptimized
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Mobile Only - Stacked Rotated GIFs */}
                  <div className="lg:hidden flex flex-col gap-1 items-center">
                    <div className="relative w-28 -rotate-12 -ml-6">
                      <Image
                        src="/images/chemical_tygo.gif"
                        alt="Chemical Tygo"
                        width={140}
                        height={140}
                        unoptimized
                        className="w-full h-auto "
                      />
                    </div>
                    <div className="relative w-28 rotate-12 -mr-6">
                      <Image
                        src="/images/dance_tygo.gif"
                        alt="Dance Tygo"
                        width={140}
                        height={140}
                        unoptimized
                        className="w-full h-auto "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 text-sm sm:space-y-4 sm:text-base lg:text-lg">
                <li className="flex items-start gap-3 rounded-xl border-3 border-[#ff9302] bg-[#FF8B00]/20 backdrop-blur-md p-4 text-white glow-border glow-hover sm:gap-4 sm:rounded-2xl sm:border-4 sm:p-5">
                  <span className="mt-1 inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-[#ff9302] bg-[#ff9302] glow-border-strong sm:h-4 sm:w-4">
                  </span>
                  <p className="font-black leading-relaxed text-white glow-text">
                    Daily art drops, lore and animated shorts that feed the cult.
                  </p>
                </li>
                <li className="flex items-start gap-3 rounded-xl border-3 border-black bg-[#FF8B00] p-4 text-black outline outline-2 outline-white sm:gap-4 sm:rounded-2xl sm:border-4 sm:p-5 sm:outline-[3px]">
                  <span className="mt-1 inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white sm:h-4 sm:w-4">
                  </span>
                  <p className="font-black leading-relaxed text-black" style={{ textShadow: '-1px 0 #ffffff, 1px 0 #ffffff, 0 -1px #ffffff, 0 1px #ffffff' }}>
                    Original IP designed for collabs, merch, and media expansion.
                  </p>
                </li>
                <li className="flex items-start gap-3 rounded-xl border-3 border-black bg-[#FF8B00] p-4 text-black outline outline-2 outline-white sm:gap-4 sm:rounded-2xl sm:border-4 sm:p-5 sm:outline-[3px]">
                  <span className="mt-1 inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white sm:h-4 sm:w-4">
                  </span>
                  <p className="font-black leading-relaxed text-black" style={{ textShadow: '-1px 0 #ffffff, 1px 0 #ffffff, 0 -1px #ffffff, 0 1px #ffffff' }}>
                    A bridge between meme energy and mainstream attention.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}