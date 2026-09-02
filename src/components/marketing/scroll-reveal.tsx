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
  return (
    <div
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
