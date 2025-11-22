"use client";

export default function GridPattern() {
  return (
    <div 
      className="absolute inset-0 z-[8] pointer-events-none opacity-60"
      aria-hidden="true"
    >
      <svg 
        className="absolute inset-0 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="grid-pattern-about" 
            width="50" 
            height="50" 
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#ff9302"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </pattern>
          <filter id="grid-glow-about">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#grid-pattern-about)"
          filter="url(#grid-glow-about)"
        />
      </svg>
    </div>
  );
}

