"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function FloatingMascot() {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find hero section
    const heroSection = document.querySelector("section.galaxy-bg");
    if (!heroSection) return;

    heroRef.current = heroSection as HTMLElement;

    // Create Intersection Observer to detect when hero section is passed
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When hero section is out of view (scrolled past), show mascot
          if (!entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0, // Trigger when any part leaves viewport
        rootMargin: "-100px 0px 0px 0px", // Trigger slightly before fully out
      }
    );

    observerRef.current.observe(heroSection);

    return () => {
      if (observerRef.current && heroSection) {
        observerRef.current.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 z-40 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          left: '50%',
          transform: isVisible 
            ? 'translate(-50%, 0)' 
            : 'translate(-50%, 100%)',
        }}
      >
        {/* Mobile: center bottom - Mobile size (diperbesar) */}
        <div className="md:hidden relative w-56 h-56 sm:w-64 sm:h-64">
          <Image
            src="/images/mascot.gif"
            alt="$TYGO mascot waiting"
            width={400}
            height={400}
            unoptimized
            className="w-full h-full object-contain"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255, 147, 2, 0.6)) drop-shadow(0 0 40px rgba(255, 147, 2, 0.3))",
            }}
          />
        </div>
      </div>
      
      {/* Desktop: left bottom - Larger size */}
      <div
        className={`hidden md:block fixed bottom-0 left-0 z-40 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-full"
        }`}
      >
        <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
          <Image
            src="/images/mascot.gif"
            alt="$TYGO mascot waiting"
            width={400}
            height={400}
            unoptimized
            className="w-full h-full object-contain"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255, 147, 2, 0.6)) drop-shadow(0 0 40px rgba(255, 147, 2, 0.3))",
            }}
          />
        </div>
      </div>
    </>
  );
}

