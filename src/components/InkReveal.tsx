"use client";

import { useEffect, useRef, useCallback } from "react";

export function InkReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        // Phase 1: apply the SVG filter (blurry/distorted)
        el.classList.add("is-filtered");
        el.style.opacity = "1";

        // Phase 2: after a short delay, remove filter for clean reveal
        const timeout = setTimeout(() => {
          el.classList.remove("is-filtered");
          el.classList.add("is-visible");
        }, 100);

        el.dataset.timeout = String(timeout);
      }
    }
  }, []);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll(".ink-anim");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    });

    elements.forEach((el, index) => {
      // Stagger the animation delays
      (el as HTMLElement).style.transitionDelay = `${index * 0.08}s`;
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        const timeout = (el as HTMLElement).dataset.timeout;
        if (timeout) clearTimeout(Number(timeout));
      });
      observer.disconnect();
    };
  }, [handleIntersection]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
