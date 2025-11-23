"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type AnimationType = "falling" | "zoom";

interface FallingTygoProps {
  trigger: boolean;
  animationType?: AnimationType;
  onComplete?: () => void;
}

export default function FallingTygo({ trigger, animationType = "falling", onComplete }: FallingTygoProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("top");

  useEffect(() => {
    if (trigger) {
      if (animationType === "zoom") {
        // Zoom animation - no direction needed
        setIsVisible(true);
        const timer = setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 3000); // Zoom animation duration
        return () => clearTimeout(timer);
      } else {
        // Falling animation - random direction
        const directions: ("top" | "bottom" | "left" | "right")[] = ["top", "bottom", "left", "right"];
        const randomDir = directions[Math.floor(Math.random() * directions.length)];
        setDirection(randomDir);
        setIsVisible(true);

        const timer = setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 2500); // Falling animation duration

        return () => clearTimeout(timer);
      }
    }
  }, [trigger, animationType, onComplete]);

  if (!isVisible) return null;

  // Calculate animation classes and styles based on animation type
  const getAnimationClass = () => {
    if (animationType === "zoom") {
      return "zoom-from-center";
    }
    
    switch (direction) {
      case "top":
        return "fall-from-top";
      case "bottom":
        return "fall-from-bottom";
      case "left":
        return "fall-from-left";
      case "right":
        return "fall-from-right";
    }
  };

  const getPositionStyle = () => {
    if (animationType === "zoom") {
      return {
        top: "50%",
        left: "50%",
        width: "200px",
        height: "200px",
      };
    }
    
    // Falling animation styles
    const baseSize = "clamp(150px, 20vw, 300px)";
    
    switch (direction) {
      case "top":
        return {
          top: "-200px",
          left: "50%",
          width: baseSize,
          height: baseSize,
        };
      case "bottom":
        return {
          bottom: "-200px",
          left: "50%",
          width: baseSize,
          height: baseSize,
        };
      case "left":
        return {
          left: "-200px",
          top: "50%",
          width: baseSize,
          height: baseSize,
        };
      case "right":
        return {
          right: "-200px",
          top: "50%",
          width: baseSize,
          height: baseSize,
        };
    }
  };

  return (
    <div
      className={`fixed z-[9999] pointer-events-none ${getAnimationClass()}`}
      style={getPositionStyle()}
    >
      <div className="relative w-full h-full filter drop-shadow-[0_0_20px_rgba(255,147,2,0.8)]">
        <Image
          src="/images/girl_tygo.gif"
          alt="Falling Tygo"
          width={200}
          height={200}
          unoptimized
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

