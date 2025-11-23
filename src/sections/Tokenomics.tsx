"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaCoins, FaFire, FaBolt, FaLock } from "react-icons/fa6";
import { SiSolana } from "react-icons/si";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useFallingTygo } from "@/contexts/FallingTygoContext";

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

// Interactive GIF Component with Click Animation
function PumpfunGif({ onCountChange }: { onCountChange?: (count: number) => void }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const { triggerFalling } = useFallingTygo();

  const handleClick = () => {
    setIsClicking(true);
    setIsMoving(true);
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (onCountChange) onCountChange(newCount);
    
    // Trigger zoom animation every 100 clicks
    if (newCount % 100 === 0) {
      triggerFalling("zoom");
    }
    // Trigger falling animation every 10 clicks (but not at multiples of 100)
    else if (newCount % 10 === 0) {
      triggerFalling("falling");
    }
    
    // Random movement - bisa horizontal atau vertical
    const directions = [
      { x: 30, y: 0 },      // Right
      { x: -30, y: 0 },     // Left
      { x: 0, y: 30 },      // Down
      { x: 0, y: -30 },     // Up
      { x: 25, y: 25 },     // Diagonal down-right
      { x: -25, y: 25 },    // Diagonal down-left
      { x: 25, y: -25 },    // Diagonal up-right
      { x: -25, y: -25 },   // Diagonal up-left
    ];
    
    const randomDir = directions[Math.floor(Math.random() * directions.length)];
    
    setPosition(randomDir);
    
    // Return to center after animation
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
      setTimeout(() => setIsMoving(false), 200);
    }, 300);
    
    // Reset click effect
    setTimeout(() => {
      setIsClicking(false);
    }, 200);
  };

  return (
    <div 
      className="group relative w-full h-full min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] rounded-xl lg:rounded-2xl border-2 lg:border-4 border-[#ff9302] bg-black/40 backdrop-blur-sm overflow-hidden glow-border cursor-pointer transition-all duration-300 hover:border-[#ff9302] hover:shadow-[0_0_40px_rgba(255,147,2,0.6),0_0_80px_rgba(255,147,2,0.3)] select-none"
      onClick={handleClick}
      style={{
        transform: isClicking ? 'scale(0.95)' : 'scale(1)',
        boxShadow: isClicking 
          ? '0 0 60px rgba(255, 147, 2, 1), 0 0 100px rgba(255, 147, 2, 0.8), 0 0 140px rgba(255, 147, 2, 0.6), inset 0 0 40px rgba(255, 147, 2, 0.3)'
          : undefined,
        borderColor: isClicking ? '#ff9302' : '#ff9302',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF8B00]/20 via-transparent to-[#FF8B00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
      
      {/* Click ripple effect */}
      {isClicking && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div 
            className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-[#ff9302] opacity-60"
            style={{
              transform: 'translate(-50%, -50%)',
              animation: 'ripple 0.6s ease-out',
            }}
          />
        </div>
      )}
      
      {/* Click pulse effect */}
      {isClicking && (
        <div 
          className="absolute inset-0 border-4 border-[#ff9302] rounded-xl lg:rounded-2xl z-20 pointer-events-none"
          style={{
            animation: 'pulse-border 0.3s ease-out',
          }}
        />
      )}
      
      {/* GIF Container with click animation */}
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-5 lg:p-6">
        <div 
          className="relative w-full flex-1 flex items-center justify-center transform transition-all duration-300 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) ${isMoving ? 'rotate(15deg) scale(1.15)' : 'rotate(0deg) scale(1)'}`,
          }}
        >
          <Image
            src="/images/fire_tygo.gif"
            alt="Fire Tygo - Click me!"
            width={300}
            height={300}
            unoptimized
            className="w-full h-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] object-contain transition-all duration-300 group-hover:brightness-110"
          />
        </div>
        
        {/* Tap hint text - Inside card, below GIF */}
        <div className="w-full text-center mt-3 sm:mt-4 z-20 pb-2">
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-[0.25em] transition-all duration-300 ${
            clickCount > 0 && clickCount % 100 === 0 
              ? 'text-[#ff9302] scale-110 animate-pulse' 
              : clickCount > 0 && clickCount % 10 === 0 
              ? 'text-[#ff9302] scale-105' 
              : clickCount > 0 
              ? 'text-[#ff9302]' 
              : 'text-white'
          }`} style={{
            textShadow: clickCount === 0
              ? '0 0 15px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.5)'
              : clickCount % 100 === 0 
              ? '0 0 30px rgba(255, 147, 2, 1), 0 0 60px rgba(255, 147, 2, 0.8), 0 0 90px rgba(255, 147, 2, 0.6)'
              : '0 0 10px rgba(255, 147, 2, 0.6), 0 0 20px rgba(255, 147, 2, 0.4)'
          }}>
            {clickCount > 0 && clickCount % 100 === 0 
              ? 'MEGA BOOM!' 
              : clickCount > 0 && clickCount % 10 === 0 
              ? 'SURPRISE!' 
              : clickCount > 0 
              ? 'BOOM!' 
              : 'TAP TYGO'}
          </p>
        </div>
      </div>
      
      
      {/* Glow particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff9302] rounded-full blur-sm animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#ff9302] rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#ff9302] rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.6s' }} />
      </div>
    </div>
  );
}

export function TokenomicsSection() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
  });
  const [clickCount, setClickCount] = useState(0);

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      id="tokenomics"
      className="relative galaxy-bg text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 via-[#FF8B00]/20 to-transparent z-0" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 lg:gap-12 px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-20">
        
        {/* Header */}
        <div className={`space-y-2 lg:space-y-4 text-center sm:text-left ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.1s' : '0s' }}>
          <span className="inline-flex items-center gap-2 lg:gap-3 self-center rounded-full border-2 lg:border-4 border-[#ff9302] bg-black/60 backdrop-blur-md px-4 lg:px-6 py-1.5 lg:py-2 text-[10px] lg:text-xs font-black tracking-[0.25em] lg:tracking-[0.35em] text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] sm:self-start">
            <Image src="/images/logo.jpg" alt="Logo" width={16} height={16} className="h-4 w-4 lg:h-5 lg:w-5 rounded-full object-cover" /> TYGONOMICS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black uppercase leading-tight glow-text-strong">
            THE NUMBERS BEHIND THE ROAR. 
          </h2>
          <p className="text-[10px] sm:text-xs lg:text-base font-semibold uppercase tracking-[0.15em] lg:tracking-[0.25em] text-white/80 glow-text">
            EVERYTHING YOU NEED TO KNOW.
          </p>
        </div>

        {/* Token Stats - Compact 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {tokenStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group flex transform flex-col gap-2 lg:gap-4 rounded-2xl lg:rounded-3xl border-2 lg:border-4 border-[#ff9302] bg-black/60 backdrop-blur-md p-3 lg:p-6 glow-border glow-hover transition-all duration-200 lg:-translate-x-2 lg:-translate-y-2 hover:translate-x-0 hover:translate-y-0 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : '0s' }}
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

        {/* Combined Pumpfun Launch & Interactive GIF - Single Section */}
        <div className={`relative rounded-2xl lg:rounded-3xl border-2 lg:border-4 border-[#ff9302] bg-black/60 backdrop-blur-md overflow-hidden glow-border-strong glow-hover transition-all duration-300 lg:-translate-x-2 lg:-translate-y-2 hover:translate-x-0 hover:translate-y-0 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.6s' : '0s' }}>
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF8B00]/10 via-black/60 to-[#FF8B00]/10 opacity-50" />
          
          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 p-4 lg:p-8">
            
            {/* Left Side - Pumpfun Info & Content */}
            <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-6 text-white">
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

            {/* Right Side - Interactive Clickable GIF */}
            <div className="lg:col-span-2 flex items-center justify-center relative">
              <PumpfunGif onCountChange={setClickCount} />
            </div>
          </div>
        </div>
        
        {/* Count Display & Easter Egg Hint - Below Card */}
        <div className={`mt-4 lg:mt-6 text-center space-y-3 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.7s' : '0s' }}>
          {/* Count Display */}
          {clickCount > 0 && (
            <div className="space-y-2">
              <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-[0.25em] transition-all duration-300 ${
                clickCount % 100 === 0 
                  ? 'text-white scale-110' 
                  : 'text-white/90'
              }`} style={{
                textShadow: clickCount % 100 === 0
                  ? '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)'
                  : '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)'
              }}>
                TAPPED: {clickCount}
              </p>
              {clickCount % 100 === 0 && (
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black uppercase tracking-[0.3em] text-[#ff9302] animate-pulse">
                  CENTURY MILESTONE!
                </p>
              )}
            </div>
          )}

          {/* Easter Egg Hint */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold uppercase tracking-[0.2em] text-white/60 glow-text">
            Keep tapping to discover the hidden easter egg
          </p>
        </div>
      </div>
    </section>
  );
}

export default TokenomicsSection;