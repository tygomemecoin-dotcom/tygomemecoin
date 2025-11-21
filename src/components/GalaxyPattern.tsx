"use client";

import { useEffect, useState } from "react";

export default function GalaxyPattern() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Generate random star positions
  const generateStars = (count: number, size: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * size + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }
    return stars;
  };

  // Deteksi mobile
  const isMobile = dimensions.width < 768;
  
  // Increase star density - lebih padat dan ramai, kurangi di mobile
  const smallStars = generateStars(isMobile ? 100 : 300, 1.5);
  const mediumStars = generateStars(isMobile ? 60 : 180, 2.5);
  const largeStars = generateStars(isMobile ? 20 : 60, 4);
  const extraSmallStars = generateStars(isMobile ? 70 : 200, 0.8);

  // Nebula cloud positions - lebih banyak nebula
  const nebulaClouds = [
    { cx: dimensions.width * 0.2, cy: dimensions.height * 0.3, r: dimensions.width * 0.15, opacity: 0.12 },
    { cx: dimensions.width * 0.8, cy: dimensions.height * 0.7, r: dimensions.width * 0.12, opacity: 0.1 },
    { cx: dimensions.width * 0.5, cy: dimensions.height * 0.8, r: dimensions.width * 0.1, opacity: 0.08 },
    { cx: dimensions.width * 0.15, cy: dimensions.height * 0.75, r: dimensions.width * 0.08, opacity: 0.09 },
    { cx: dimensions.width * 0.85, cy: dimensions.height * 0.25, r: dimensions.width * 0.09, opacity: 0.11 },
    { cx: dimensions.width * 0.35, cy: dimensions.height * 0.15, r: dimensions.width * 0.07, opacity: 0.1 },
    { cx: dimensions.width * 0.65, cy: dimensions.height * 0.55, r: dimensions.width * 0.11, opacity: 0.09 },
    { cx: dimensions.width * 0.25, cy: dimensions.height * 0.5, r: dimensions.width * 0.06, opacity: 0.08 },
    { cx: dimensions.width * 0.75, cy: dimensions.height * 0.4, r: dimensions.width * 0.08, opacity: 0.1 },
    { cx: dimensions.width * 0.45, cy: dimensions.height * 0.65, r: dimensions.width * 0.09, opacity: 0.09 },
  ];

  // Spiral arms for galaxy effect
  const generateSpiralArm = (centerX: number, centerY: number, startAngle: number, turns: number, points: number) => {
    const arm = [];
    const maxRadius = Math.max(dimensions.width, dimensions.height) * 0.6;
    
    for (let i = 0; i <= points; i++) {
      const t = i / points;
      const angle = startAngle + turns * 2 * Math.PI * t;
      const radius = maxRadius * t * (0.3 + 0.7 * t);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      arm.push({ x, y, opacity: 0.15 * (1 - t) });
    }
    return arm;
  };

  const centerX = dimensions.width * 0.5;
  const centerY = dimensions.height * 0.5;
  // More spiral arms for denser pattern
  const spiralArm1 = generateSpiralArm(centerX, centerY, 0, 2, 50);
  const spiralArm2 = generateSpiralArm(centerX, centerY, Math.PI, 2, 50);
  const spiralArm3 = generateSpiralArm(centerX, centerY, Math.PI / 2, 1.5, 40);
  const spiralArm4 = generateSpiralArm(centerX, centerY, -Math.PI / 2, 1.5, 40);
  const spiralArm5 = generateSpiralArm(centerX, centerY, Math.PI / 4, 1.8, 45);
  const spiralArm6 = generateSpiralArm(centerX, centerY, -Math.PI / 4, 1.8, 45);
  const spiralArm7 = generateSpiralArm(centerX, centerY, (3 * Math.PI) / 4, 1.6, 42);
  const spiralArm8 = generateSpiralArm(centerX, centerY, -(3 * Math.PI) / 4, 1.6, 42);

  // Generate shooting stars - arah tetap dari kiri atas ke kanan bawah, posisi optimal untuk semua layout
  const generateShootingStars = () => {
    const stars = [];
    const count = 5; // 9 shooting stars
    
    for (let i = 0; i < count; i++) {
      // Start dari kiri (luar layar) dengan posisi Y yang tersebar merata
      const startX = -120; // Mulai dari luar layar kiri
      
      // Sebarkan posisi Y secara merata di seluruh tinggi layar bagian atas (10% - 45%)
      const startYRange = dimensions.height * 0.35; // Range 35% dari tinggi
      const startYBase = dimensions.height * 0.1; // Mulai dari 10% dari atas
      const startY = startYBase + (i / (count - 1)) * startYRange + (Math.random() * dimensions.height * 0.05);
      
      // End di kanan (luar layar)
      const endX = dimensions.width + 120;
      
      // End Y tersebar di bagian bawah layar (55% - 90%)
      // Mengikuti arah diagonal yang konsisten dari kiri atas ke kanan bawah
      const endYRange = dimensions.height * 0.35; // Range 35% dari tinggi
      const endYBase = dimensions.height * 0.55; // Mulai dari 55% dari atas
      const endY = endYBase + (i / (count - 1)) * endYRange + (Math.random() * dimensions.height * 0.08);
      
      stars.push({
        id: i + 1,
        startX,
        startY: Math.max(0, Math.min(dimensions.height * 0.5, startY)), // Clamp di bagian atas
        endX,
        endY: Math.max(dimensions.height * 0.5, Math.min(dimensions.height, endY)), // Clamp di bagian bawah
        delay: i * 3, // Stagger delay lebih lama
      });
    }
    
    return stars;
  };
  
  const shootingStars = generateShootingStars();

  return (
    <>
      <style jsx global>{`
        @keyframes shootingStarFade {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-65" 
        preserveAspectRatio="none" 
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        style={{ zIndex: 0 }}
      >
        <defs>
          {/* Orange gradient for nebula clouds */}
          <radialGradient id="nebula-gradient-1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#ff9302" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ff9302" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ff9302" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="nebula-gradient-2" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#ff9302" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#ff9302" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ff9302" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="nebula-gradient-3" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#ff9302" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ff9302" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ff9302" stopOpacity="0" />
          </radialGradient>

          {/* Linear gradient for shooting star trail - smooth dari bintang ke belakang */}
          <linearGradient id="shooting-star-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff9302" stopOpacity="1" />
            <stop offset="15%" stopColor="#ff9302" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#ff9302" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#ff9302" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#ff9302" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ff9302" stopOpacity="0" />
          </linearGradient>
          

          {/* Glow filter for stars */}
          <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Stronger glow for shooting stars */}
          <filter id="shooting-star-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Glow filter for spiral arms */}
          <filter id="spiral-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

      {/* Nebula clouds - opacity ditingkatkan */}
      {nebulaClouds.map((cloud, index) => {
        let gradientId = "nebula-gradient-1";
        if (index % 3 === 1) gradientId = "nebula-gradient-2";
        if (index % 3 === 2) gradientId = "nebula-gradient-3";
        return (
          <circle
            key={`nebula-${index}`}
            cx={cloud.cx}
            cy={cloud.cy}
            r={cloud.r}
            fill={`url(#${gradientId})`}
            opacity={cloud.opacity * 1.4}
          />
        );
      })}

      {/* Spiral galaxy arms - lebih banyak spiral, opacity ditingkatkan */}
      <g stroke="#ff9302" fill="none" strokeWidth="1.5" filter="url(#spiral-glow)" opacity="0.75">
        {spiralArm1.map((point, i) => {
          if (i === 0) return null;
          const prevPoint = spiralArm1[i - 1];
          return (
            <line
              key={`spiral1-${i}`}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              opacity={point.opacity}
            />
          );
        })}
        {spiralArm2.map((point, i) => {
          if (i === 0) return null;
          const prevPoint = spiralArm2[i - 1];
          return (
            <line
              key={`spiral2-${i}`}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              opacity={point.opacity}
            />
          );
        })}
        {spiralArm3.map((point, i) => {
          if (i === 0) return null;
          const prevPoint = spiralArm3[i - 1];
          return (
            <line
              key={`spiral3-${i}`}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              opacity={point.opacity * 0.7}
            />
          );
        })}
        {spiralArm4.map((point, i) => {
          if (i === 0) return null;
          const prevPoint = spiralArm4[i - 1];
          return (
            <line
              key={`spiral4-${i}`}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              opacity={point.opacity * 0.7}
            />
          );
        })}
        {spiralArm5.map((point, i) => {
          if (i === 0) return null;
          const prevPoint = spiralArm5[i - 1];
          return (
            <line
              key={`spiral5-${i}`}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              opacity={point.opacity * 0.65}
            />
          );
        })}
        {spiralArm6.map((point, i) => {
          if (i === 0) return null;
          const prevPoint = spiralArm6[i - 1];
          return (
            <line
              key={`spiral6-${i}`}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              opacity={point.opacity * 0.65}
            />
          );
        })}
        {spiralArm7.map((point, i) => {
          if (i === 0) return null;
          const prevPoint = spiralArm7[i - 1];
          return (
            <line
              key={`spiral7-${i}`}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              opacity={point.opacity * 0.6}
            />
          );
        })}
        {spiralArm8.map((point, i) => {
          if (i === 0) return null;
          const prevPoint = spiralArm8[i - 1];
          return (
            <line
              key={`spiral8-${i}`}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              opacity={point.opacity * 0.6}
            />
          );
        })}
      </g>

      {/* Extra small stars - untuk kepadatan, opacity ditingkatkan */}
      {extraSmallStars.map((star, index) => (
        <circle
          key={`extra-small-star-${index}`}
          cx={star.x}
          cy={star.y}
          r={star.size}
          fill="#ff9302"
          opacity={star.opacity * 0.7}
        />
      ))}

      {/* Large stars - opacity ditingkatkan */}
      {largeStars.map((star, index) => (
        <circle
          key={`large-star-${index}`}
          cx={star.x}
          cy={star.y}
          r={star.size}
          fill="#ff9302"
          opacity={star.opacity * 1.2}
          filter="url(#star-glow)"
        />
      ))}

      {/* Medium stars - opacity ditingkatkan */}
      {mediumStars.map((star, index) => (
        <circle
          key={`medium-star-${index}`}
          cx={star.x}
          cy={star.y}
          r={star.size}
          fill="#ff9302"
          opacity={star.opacity * 1.0}
          filter="url(#star-glow)"
        />
      ))}

      {/* Small stars - opacity ditingkatkan */}
      {smallStars.map((star, index) => (
        <circle
          key={`small-star-${index}`}
          cx={star.x}
          cy={star.y}
          r={star.size}
          fill="#ff9302"
          opacity={star.opacity * 0.8}
        />
      ))}

      {/* Additional sparkle effect - lebih banyak sparkle, opacity ditingkatkan */}
      {Array.from({ length: 50 }).map((_, index) => {
        const x = Math.random() * dimensions.width;
        const y = Math.random() * dimensions.height;
        return (
          <g key={`sparkle-${index}`} transform={`translate(${x}, ${y})`}>
            <line
              x1="0"
              y1="-3"
              x2="0"
              y2="3"
              stroke="#ff9302"
              strokeWidth="1"
              opacity="0.85"
              filter="url(#star-glow)"
            />
            <line
              x1="-3"
              y1="0"
              x2="3"
              y2="0"
              stroke="#ff9302"
              strokeWidth="1"
              opacity="0.85"
              filter="url(#star-glow)"
            />
          </g>
        );
      })}

      {/* Shooting stars - arah dari kiri atas ke kanan bawah, tanpa ekor */}
      {shootingStars.map((star) => {
        const dx = star.endX - star.startX;
        const dy = star.endY - star.startY;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        return (
          <g key={`shooting-star-${star.id}`}>
            {/* Group utama dengan transform - rotate dulu, lalu translate */}
            <g transform={`rotate(${angle})`}>
              {/* Bintang - tanpa ekor */}
              <circle
                cx="0"
                cy="0"
                r="8"
                fill="#ff9302"
                filter="url(#shooting-star-glow)"
              >
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="8s"
                  repeatCount="indefinite"
                  begin={`${star.delay}s`}
                />
              </circle>
              
              {/* Inner glow untuk bintang */}
              <circle
                cx="0"
                cy="0"
                r="5"
                fill="#ffffff"
                opacity="0.95"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.95;0.95;0"
                  dur="8s"
                  repeatCount="indefinite"
                  begin={`${star.delay}s`}
                />
              </circle>
              
              {/* Transform translate - bintang bergerak lebih lambat */}
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`${star.startX},${star.startY}; ${star.endX},${star.endY}`}
                dur="8s"
                repeatCount="indefinite"
                begin={`${star.delay}s`}
                additive="sum"
              />
            </g>
          </g>
        );
      })}
    </svg>
    </>
  );
}

