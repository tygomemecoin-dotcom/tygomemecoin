"use client";

import { useEffect, useState } from "react";

export default function AuroraComponent() {
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

  // Base width for default size (1528px as requested)
  const BASE_WIDTH = 1528;
  const BASE_HEIGHT = 800;
  
  // Original SVG constants scaled to 1528px width
  // Original was 1422px, so scale factor = 1528 / 1422 = 1.0745
  const SCALE_FACTOR = BASE_WIDTH / 1422;
  const ORIGINAL_CONTROL1_X = 355.5 * SCALE_FACTOR;
  const ORIGINAL_CONTROL1_Y = -100;
  const ORIGINAL_MID_X = 711 * SCALE_FACTOR;
  const ORIGINAL_MID_Y = 400;
  const ORIGINAL_CONTROL2_X = 1066.5 * SCALE_FACTOR;
  const ORIGINAL_CONTROL2_Y = 900;
  
  // Original Y values with increased spacing (take every other one for more spacing)
  // Original: 528, 506, 484, 462, 440, 418, 396, 374, 352, 330, 308, 286, 264, 242, 220, 198, 176, 154, 132, 110, 88, 66, 44
  // With more spacing: take every 2nd value and add some extra spacing
  const ORIGINAL_Y_VALUES = [
    528, 484, 440, 396, 352, 308, 264, 220, 176, 132, 88, 44
  ];
  
  // Original opacity values (matching the selected Y values)
  const ORIGINAL_OPACITIES = [
    0.21, 0.39, 0.12, 0.61, 0.55, 0.08, 0.36, 0.12, 0.09, 0.16, 0.34, 0.65
  ];

  // Calculate responsive viewBox
  const getViewBox = () => {
    const width = dimensions.width;
    
    // Mobile: fixed size, zoom to left
    if (width < 768) {
      return { width: BASE_WIDTH, height: BASE_HEIGHT };
    }
    
    // Tablet: slight scale
    if (width < 1024) {
      return { width: BASE_WIDTH * 1.2, height: BASE_HEIGHT };
    }
    
    // Desktop: scale based on width
    const scale = Math.max(1, width / BASE_WIDTH);
    return { width: BASE_WIDTH * scale, height: BASE_HEIGHT };
  };

  const { width: viewBoxWidth, height: viewBoxHeight } = getViewBox();
  
  // Determine preserveAspectRatio
  const preserveAspectRatio = dimensions.width < 768 
    ? "xMinYMid slice" // Mobile: zoom to left, fixed size
    : "none"; // Desktop: stretch to fit

  // Scale control points based on viewBox width
  const scaleX = (x: number) => (x / BASE_WIDTH) * viewBoxWidth;
  
  // Calculate responsive stroke width and opacity
  const getResponsiveValues = () => {
    const width = dimensions.width;

    // Mobile: < 640px
    if (width < 640) {
      return {
        strokeWidth: 1.5,
        opacityMultiplier: 0.8,
      };
    }
    // Tablet: 640px - 1024px
    if (width < 1024) {
      return {
        strokeWidth: 1.8,
        opacityMultiplier: 0.9,
      };
    }
    // Desktop: >= 1024px
    return {
      strokeWidth: 2,
      opacityMultiplier: 1,
    };
  };

  const { strokeWidth, opacityMultiplier } = getResponsiveValues();
  
  // Scale control points based on current viewBox width
  const controlPoint1X = scaleX(ORIGINAL_CONTROL1_X);
  const controlPoint1Y = ORIGINAL_CONTROL1_Y;
  const midPointX = scaleX(ORIGINAL_MID_X);
  const midPointY = ORIGINAL_MID_Y;
  const controlPoint2X = scaleX(ORIGINAL_CONTROL2_X);
  const controlPoint2Y = ORIGINAL_CONTROL2_Y;
  
  // Generate waves with increased spacing
  const generateWaves = () => {
    return ORIGINAL_Y_VALUES.map((originalY, index) => {
      const opacity = (ORIGINAL_OPACITIES[index] * opacityMultiplier).toFixed(2);
      
      return {
        y: originalY,
        opacity: parseFloat(opacity),
      };
    });
  };

  const waves = generateWaves();

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60" 
      preserveAspectRatio={preserveAspectRatio}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      style={{ zIndex: 0 }}
    >
      <defs>
        {/* Orange gradient matching theme */}
        <linearGradient 
          x1="50%" 
          y1="0%" 
          x2="50%" 
          y2="100%" 
          id="aurora-gradient"
        >
          <stop 
            stopColor="rgba(255, 147, 2, 0.9)" 
            stopOpacity="1" 
            offset="0%"
          />
          <stop 
            stopColor="rgba(255, 147, 2, 0.4)" 
            stopOpacity="1" 
            offset="100%"
          />
        </linearGradient>
        
        {/* Glow filter for aurora waves */}
        <filter id="aurora-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <g 
        strokeWidth={strokeWidth} 
        stroke="url(#aurora-gradient)" 
        fill="none" 
        strokeLinecap="round"
        filter="url(#aurora-glow)"
      >
        {waves.map((wave, index) => {
          // Generate path with scaled control points
          // Format: M 0 Y Q control1X control1Y midX midY Q control2X control2Y endX Y
          const path = `M 0 ${wave.y} Q ${controlPoint1X} ${controlPoint1Y} ${midPointX} ${midPointY} Q ${controlPoint2X} ${controlPoint2Y} ${viewBoxWidth} ${wave.y}`;
          return (
            <path
              key={`wave-${index}`}
              d={path}
              opacity={wave.opacity}
            />
          );
        })}
      </g>
    </svg>
  );
}
