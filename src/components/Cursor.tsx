"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", handleHover);

    let animationId: number;
    const render = () => {
      // Lerp for smooth ring lag
      const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
      
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
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
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-[12px] h-[12px] bg-rust rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out hidden md:block ${
          isHovering ? "scale-[1.66]" : "scale-100"
        } ${isVisible ? "opacity-100" : "opacity-0"}`}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-[36px] h-[36px] border-[1.5px] border-rust rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-opacity duration-300 ${isHovering ? "scale-75" : "scale-100"} ${isVisible ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}
