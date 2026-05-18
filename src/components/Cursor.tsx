"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isHoveringRef = useRef(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const handleHover = (e: MouseEvent) => {
      const hovering = !!(e.target as HTMLElement).closest("a, button");
      isHoveringRef.current = hovering;
      setIsHovering(hovering);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", handleHover);

    let animationId: number;
    const render = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.1);
      if (ringRef.current) {
        const s = isHoveringRef.current ? 1.3 : 1;
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${s})`;
      }
      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", handleHover);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  return (
    <>
      {/* Precise center dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`rounded-full bg-rust transition-all duration-200 ease-out ${
            isHovering ? "w-3 h-3" : "w-1.5 h-1.5"
          }`}
        />
      </div>

      {/* Rotating text ring — positioned by JS, rotated by CSS */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-[120px] h-[120px] pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          style={{ animation: "cursor-spin 12s linear infinite" }}
        >
          <defs>
            <path
              id="cursor-circle"
              d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
            />
          </defs>
          <text
            fontSize="8"
            fontFamily="var(--font-dm-mono)"
            letterSpacing="3"
            fill={isHovering ? "rgba(232,64,48,0.95)" : "rgba(255,255,255,0.55)"}
          >
            <textPath href="#cursor-circle">
              AVAILABLE FOR WORK · TENA GOPREGHA ·
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
}
