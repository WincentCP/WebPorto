"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointer = pointerRef.current;
    if (!pointer) return;

    // Only show on desktop (CSS handles hiding via media query)
    const handleMouseMove = (e: MouseEvent) => {
      pointer.style.left = `${e.clientX}px`;
      pointer.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={pointerRef} className="custom-pointer">
      <div className="custom-pointer__dot" />
    </div>
  );
}
