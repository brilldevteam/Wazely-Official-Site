"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  /**
   * Scatter the direct children in from alternating sides so they settle into
   * place one after another as the group scrolls through the viewport.
   */
  stagger?: boolean;
};

export function ScrollReveal({
  children,
  className,
  direction = "up",
  stagger = false,
}: ScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = rootRef.current;
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    element.classList.add("scroll-reveal-js");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add("scroll-reveal-visible");
        observer.unobserve(element);
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    const frame = window.requestAnimationFrame(() => observer.observe(element));

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn(
        stagger
          ? "scroll-reveal-stagger"
          : ["scroll-reveal", `scroll-reveal-${direction}`],
        className,
      )}
    >
      {children}
    </div>
  );
}
