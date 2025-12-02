"use client";

import React, { useState, useEffect, useRef } from "react";

function FlareCursor() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const isClickingRef = useRef(false);
  const CURSOR_SIZE = 20; // Half of 40px cursor size

  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${x - CURSOR_SIZE}px, ${y - CURSOR_SIZE}px, 0)`;
    }
    if (rippleRef.current && isClickingRef.current) {
      rippleRef.current.style.transform = `translate3d(${x - 30}px, ${y - 30}px, 0)`;
    }
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleMouseDown = () => {
    isClickingRef.current = true;
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    isClickingRef.current = false;
    setIsClicking(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isClicking ? "clicking" : ""}`}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <img
          src="/images/cursor.png"
          alt="cursor"
          className="cursor-image"
          onError={(e) => {
            console.error("Failed to load cursor image");
          }}
        />
      </div>
      {isClicking && (
        <div
          ref={rippleRef}
          className="cursor-click-ripple"
        />
      )}
    </>
  );
}

export default FlareCursor;

