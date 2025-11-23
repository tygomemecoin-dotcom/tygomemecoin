"use client";

import { FaCheckCircle, FaBullseye, FaRocket, FaFire, FaBrain, FaGem, FaLaptop, FaPuzzlePiece, FaFilm, FaChartLine, FaVideo, FaMusic, FaTrophy } from "react-icons/fa";
import { GiGorilla, GiVolcano, GiGalaxy, GiBrickWall, GiBaseballBat } from "react-icons/gi";
import { PiDiscoBall } from "react-icons/pi";
import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type GoalItem = {
  icon: React.ReactNode;
  label: string;
};

const marketCapGoals: GoalItem[] = [
  { icon: <FaCheckCircle />, label: "$100K Market Cap" },
  { icon: <FaBullseye />, label: "$500K Market Cap" },
  { icon: <FaRocket />, label: "$1M Market Cap" },
  { icon: <FaFire />, label: "$5M Market Cap" },
  { icon: <FaBrain />, label: "$10M Market Cap" },
  { icon: <FaGem />, label: "$50M Market Cap" },
  { icon: <GiGorilla />, label: "$100M Market Cap" },
  { icon: <GiVolcano />, label: "$500M Market Cap" },
  { icon: <PiDiscoBall />, label: "$1B Market Cap" },
  { icon: <GiGalaxy />, label: "$5B Market Cap" },
];

const buildGoals: GoalItem[] = [
  { icon: <GiBrickWall />, label: "Establish main platforms (TG, X, IG, TT, YT, Website)" },
  { icon: <FaPuzzlePiece />, label: "DEX Screener listing" },
  { icon: <FaLaptop />, label: "CoinMarketCap official listing" },
  { icon: <FaPuzzlePiece />, label: "CoinGecko listing" },
  { icon: <FaFilm />, label: "Daily drawings & new art drops" },
  { icon: <FaFilm />, label: "Full-time animation team" },
  { icon: <GiBaseballBat />, label: "Yeti merch design & release" },
  { icon: <FaChartLine />, label: "100K Instagram followers" },
  { icon: <FaVideo />, label: "100K YouTube subscribers" },
  { icon: <FaMusic />, label: "100K TikTok followers" },
  { icon: <FaTrophy />, label: "Yeti Art Contests & creative bounties" },
];

function GoalList({ title, goals, isVisible, startDelay }: { title: string; goals: GoalItem[]; isVisible: boolean; startDelay: number }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-5">
      <h3 className={`inline-flex items-center gap-2 text-xl font-black uppercase tracking-[0.2em] text-[#FF8B00] sm:gap-3 sm:text-2xl lg:text-3xl lg:tracking-[0.25em] font-freeman glow-text-strong ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? `${startDelay}s` : '0s' }}>
        {title}
      </h3>
      <div className="space-y-2 sm:space-y-3">
        {goals.map((goal, index) => (
          <div
            key={goal.label}
            className={`group flex items-center gap-3 rounded-2xl border-3 border-[#ff9302] bg-black/60 backdrop-blur-md p-3 text-white glow-border glow-hover transition-all duration-200 hover:translate-y-2 sm:gap-4 sm:rounded-3xl sm:border-4 sm:p-4 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: isVisible ? `${startDelay + 0.1 + index * 0.05}s` : '0s' }}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#ff9302] bg-[#FF8B00]/30 backdrop-blur-sm text-xl text-[#ff9302] glow-border-strong sm:h-12 sm:w-12 sm:rounded-2xl sm:border-3 sm:text-2xl">
              {goal.icon}
            </span>
            <span className="flex-1 text-[10px] font-black uppercase leading-snug tracking-[0.15em] sm:text-xs sm:tracking-[0.2em] lg:text-sm lg:tracking-[0.25em] font-freeman glow-text">
              {goal.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
  });

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      id="roadmap"
      className="relative galaxy-bg py-10 text-white sm:py-16 lg:py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent z-0" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:gap-12 sm:px-10 lg:px-12">
        <div className={`space-y-3 text-center sm:space-y-4 sm:text-left ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.1s' : '0s' }}>
          <span className="inline-flex items-center gap-2 self-center rounded-full border-3 border-[#ff9302] bg-black/60 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] sm:self-start sm:gap-3 sm:border-4 sm:px-6 sm:py-2 sm:text-xs sm:tracking-[0.35em]">
            ROADMAP
          </span>
          <h2 className="text-3xl font-black uppercase text-[#FF8B00] sm:text-4xl lg:text-6xl glow-text-strong">
            The Jungle Expansion Plan
          </h2>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 glow-text sm:text-sm sm:tracking-[0.2em] lg:text-base lg:tracking-[0.25em]">
            FROM MARKET CAP MILESTONES TO FULL MEDIA DOMINATION.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-10 lg:grid-cols-2">
          <GoalList title="MARKET CAP GOALS" goals={marketCapGoals} isVisible={isVisible} startDelay={0.2} />
          <GoalList title="BUILD & EXPANSION GOALS" goals={buildGoals} isVisible={isVisible} startDelay={0.3} />
        </div>
      </div>
    </section>
  );
}