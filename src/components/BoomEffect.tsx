"use client";

import { useEffect, useState, useMemo } from "react";

interface BoomEffectProps {
  trigger: boolean;
  onComplete?: () => void;
}

export default function BoomEffect({ trigger, onComplete }: BoomEffectProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Generate random floating balls with direction - memoized
  const balls = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      size: Math.random() * 25 + 15,
      left: 50 + (Math.random() - 0.5) * 20,
      top: 50 + (Math.random() - 0.5) * 20,
      floatX: (Math.random() - 0.5) * 300,
      floatY: (Math.random() - 0.5) * 300,
      delay: Math.random() * 0.3,
      duration: Math.random() * 2 + 2.5,
    })), []
  );

  useEffect(() => {
    if (trigger) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [trigger, onComplete]);

  // Inject dynamic keyframes
  useEffect(() => {
    if (!isVisible) return;

    const styleId = 'boom-ball-keyframes';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    const keyframes = balls.map((ball) => `
      @keyframes floatBall${ball.id} {
        0% {
          transform: translate(0, 0) scale(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
        50% {
          transform: translate(${ball.floatX}px, ${ball.floatY}px) scale(1.2);
          opacity: 0.8;
        }
        100% {
          transform: translate(${ball.floatX * 1.5}px, ${ball.floatY * 1.5}px) scale(0);
          opacity: 0;
        }
      }
    `).join('');

    styleElement.textContent = keyframes;

    return () => {
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, [isVisible, balls]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
      {/* BOOM Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-boom-text">
        <h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black uppercase tracking-[0.1em] text-[#ff9302] glow-text-strong" style={{
          textShadow: `
            0 0 20px rgba(255, 147, 2, 0.8),
            0 0 40px rgba(255, 147, 2, 0.6),
            0 0 60px rgba(255, 147, 2, 0.4),
            0 0 80px rgba(255, 147, 2, 0.3)
          `
        }}>
          BOOM
        </h1>
      </div>

      {/* Floating Balls */}
      {balls.map((ball) => (
        <div
          key={ball.id}
          className="absolute rounded-full bg-[#ff9302]"
          style={{
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            left: `${ball.left}%`,
            top: `${ball.top}%`,
            animation: `floatBall${ball.id} ${ball.duration}s ease-out ${ball.delay}s forwards`,
            boxShadow: `0 0 ${ball.size * 2}px rgba(255, 147, 2, 0.9), 0 0 ${ball.size * 4}px rgba(255, 147, 2, 0.6)`,
          }}
        />
      ))}
    </div>
  );
}

