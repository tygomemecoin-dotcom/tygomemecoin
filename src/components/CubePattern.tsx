"use client";

import { useEffect, useState } from "react";

export default function CubePattern() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    // Set initial dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial
    updateDimensions();

    // Add event listener
    window.addEventListener("resize", updateDimensions);

    // Cleanup
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate responsive values based on screen width
  const getResponsiveValues = () => {
    const width = dimensions.width;

    // Mobile: < 640px - smaller cubes
    if (width < 640) {
      return {
        patternSize: 30,
        cubeSize: 13,
        scale: 1.2,
        strokeWidth: 0.6,
      };
    }
    // Tablet: 640px - 1024px - medium cubes
    if (width < 1024) {
      return {
        patternSize: 35,
        cubeSize: 15,
        scale: 1.4,
        strokeWidth: 0.7,
      };
    }
    // Desktop: 1024px - 1280px - larger cubes
    if (width < 1280) {
      return {
        patternSize: 40,
        cubeSize: 18,
        scale: 1.7,
        strokeWidth: 0.8,
      };
    }
    // Large Desktop: >= 1280px - largest cubes
    return {
      patternSize: 45,
      cubeSize: 20,
      scale: 2.0,
      strokeWidth: 0.9,
    };
  };

  const { patternSize, cubeSize, scale, strokeWidth } = getResponsiveValues();
  const centerOffset = patternSize / 2;
  // Calculate proportional offsets for cube faces
  const topOffset = 2;
  const rightOffsetX = centerOffset * 0.22;
  const rightOffsetY = centerOffset * 0.55;
  const leftOffset = centerOffset;

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60" 
      preserveAspectRatio="none" 
      viewBox="0 0 800 800"
      style={{ zIndex: 0 }}
    >
      <defs>
        <pattern 
          id="cube-pattern" 
          width={patternSize} 
          height={patternSize} 
          patternUnits="userSpaceOnUse" 
          patternTransform={`translate(0 0) scale(${scale}) rotate(45) skewX(0) skewY(0)`}
        >
          {/* Cube face 1 - Top (brightest) */}
          <rect 
            width={cubeSize} 
            height={cubeSize} 
            transform={`matrix(0.866025 0.5 -0.866025 0.5 ${centerOffset} ${topOffset})`}
            fill="rgba(255, 147, 2, 0.35)"
            stroke="rgba(255, 147, 2, 0.9)"
            strokeWidth={strokeWidth}
          />
          {/* Cube face 2 - Right (medium) */}
          <rect 
            width={cubeSize} 
            height={cubeSize} 
            transform={`matrix(0.866025 0.5 -2.20305e-08 1 ${rightOffsetX} ${rightOffsetY})`}
            fill="rgba(255, 147, 2, 0.28)"
            stroke="rgba(255, 147, 2, 0.85)"
            strokeWidth={strokeWidth}
          />
          {/* Cube face 3 - Left (darkest) */}
          <rect 
            width={cubeSize} 
            height={cubeSize} 
            transform={`matrix(0.866025 -0.5 2.20305e-08 1 ${leftOffset} ${leftOffset})`}
            fill="rgba(255, 147, 2, 0.22)"
            stroke="rgba(255, 147, 2, 0.8)"
            strokeWidth={strokeWidth}
          />
        </pattern>
        
        {/* Glow filter for cube pattern */}
        <filter id="cube-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Pattern background */}
      <rect 
        width="100%" 
        height="100%" 
        fill="url(#cube-pattern)"
        filter="url(#cube-glow)"
      />
    </svg>
  );
}

