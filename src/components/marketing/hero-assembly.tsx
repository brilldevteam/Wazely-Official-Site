"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const IMG_W = 1672;
const IMG_H = 940;

type Piece = {
  name: string;
  src: string;
  /** Native-pixel rectangle in the source screenshot — also its resting slot. */
  rect: { left: number; top: number; width: number; height: number };
  /** Scattered start position, in % of the frame (negative / >100 hangs it
      off the edge). Percentages scale with the frame, so "half off the
      edge" holds at any screen width — no viewport math needed. */
  from: { left: number; top: number };
  /** Base rotation in deg; a small random jitter is added at runtime. */
  fr: number;
  /** 0–1 stagger — higher lands later. */
  delay: number;
};

const pieces: Piece[] = [
  // --- left border, scattered top-to-bottom at random-looking heights ---
  {
    name: "logo",
    src: "/screenshots/parts/logo.png",
    rect: { left: 8, top: 12, width: 170, height: 46 },
    from: { left: -14, top: -16 },
    fr: -16,
    delay: 0,
  },
  // leaf-green welcome card — fully off the left edge
  {
    name: "welcome",
    src: "/screenshots/parts/green-welcome.png",
    rect: { left: 258, top: 145, width: 448, height: 222 },
    from: { left: -42, top: 6 },
    fr: -14,
    delay: 0.02,
  },
  // the menu — fully off the left edge. Kept first in line (delay 0) since
  // it has the farthest to travel of any piece.
  {
    name: "sidebar",
    src: "/screenshots/parts/sidebar-menu.png",
    rect: { left: 0, top: 58, width: 230, height: 880 },
    from: { left: -38, top: 36 },
    fr: -8,
    delay: 0,
  },
  {
    name: "contacts",
    src: "/screenshots/parts/stat-contacts.png",
    rect: { left: 727, top: 258, width: 217, height: 96 },
    from: { left: -24, top: 58 },
    fr: -13,
    delay: 0.18,
  },
  // huge chart can't fully clear the frame, but it still enters from the left
  {
    name: "chart",
    src: "/screenshots/parts/chart-growth.png",
    rect: { left: 260, top: 377, width: 1382, height: 371 },
    from: { left: -20, top: 78 },
    fr: -6,
    delay: 0.05,
  },
  {
    name: "flows",
    src: "/screenshots/parts/stat-flows.png",
    rect: { left: 960, top: 258, width: 217, height: 96 },
    from: { left: -22, top: 96 },
    fr: 11,
    delay: 0.22,
  },

  // --- right border, scattered top-to-bottom at random-looking heights ---
  {
    name: "ai-agents",
    src: "/screenshots/parts/stat-ai-agents.png",
    rect: { left: 727, top: 146, width: 217, height: 97 },
    from: { left: 92, top: -18 },
    fr: -12,
    delay: 0.12,
  },
  {
    name: "sent",
    src: "/screenshots/parts/stat-sent.png",
    rect: { left: 960, top: 146, width: 217, height: 97 },
    from: { left: 84, top: 4 },
    fr: 12,
    delay: 0.14,
  },
  {
    name: "received",
    src: "/screenshots/parts/stat-received.png",
    rect: { left: 1193, top: 146, width: 216, height: 97 },
    from: { left: 96, top: 28 },
    fr: -11,
    delay: 0.16,
  },
  {
    name: "chats",
    src: "/screenshots/parts/stat-chats.png",
    rect: { left: 1425, top: 146, width: 217, height: 97 },
    from: { left: 100, top: 50 },
    fr: 16,
    delay: 0.2,
  },
  {
    name: "campaigns",
    src: "/screenshots/parts/stat-campaigns.png",
    rect: { left: 1425, top: 258, width: 217, height: 96 },
    from: { left: 98, top: 72 },
    fr: 14,
    delay: 0.28,
  },
  {
    name: "templates",
    src: "/screenshots/parts/stat-templates.png",
    rect: { left: 1193, top: 258, width: 216, height: 96 },
    from: { left: 90, top: 94 },
    fr: -12,
    delay: 0.25,
  },
];

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

export function HeroAssembly() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-piece]"));

    // One-time random tilt so every load looks a little different.
    for (const el of els) {
      const base = Number(el.dataset.fr) || 0;
      const jitter = (Math.random() * 2 - 1) * 9;
      el.style.setProperty("--fr", `${(base + jitter).toFixed(1)}deg`);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.style.setProperty("--p", "1"));
      return;
    }

    let raf = 0;
    const SPAN = 0.72;

    const render = () => {
      raf = 0;
      // Hero's height is set by its content, not the viewport, so the scroll
      // budget for the assembly is a flat distance rather than a fraction of
      // innerHeight. Any scroll still moves it (no dead zone) and it settles
      // well before the hero scrolls out of view.
      const dist = 620;
      const master = Math.min(1, Math.max(0, window.scrollY / dist));

      for (const el of els) {
        const delay = Number(el.dataset.delay) || 0;
        const local = Math.min(
          1,
          Math.max(0, (master - delay * (1 - SPAN)) / SPAN),
        );
        const eased = 1 - Math.pow(1 - local, 2.2);
        el.style.setProperty("--p", eased.toFixed(4));
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="hero-assembly relative mx-auto mt-14 max-w-[1280px] sm:mt-18"
    >
      <div className="hero-halo" aria-hidden="true" />

      {/* overflow is visible so scattered pieces can float outside the frame;
          only the base screenshot itself is clipped to the rounded corners. */}
      <figure className="browser-frame relative rounded-[18px] border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(16,33,58,.38)]">
        <div
          className="flex h-8 items-center gap-1.5 rounded-t-[17px] border-b border-slate-200 bg-slate-50 px-3"
          aria-hidden="true"
        >
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="size-2 rounded-full bg-slate-300" />
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-b-[17px]">
            <Image
              src="/screenshots/crm-dashboard-base.png"
              alt="Wazely CRM dashboard showing customer and campaign activity"
              width={IMG_W}
              height={IMG_H}
              priority
              sizes="(max-width: 1320px) 94vw, 1280px"
              className="block h-auto w-full"
            />
          </div>

          {pieces.map((piece) => (
            <Image
              key={piece.name}
              data-piece={piece.name}
              data-delay={piece.delay}
              data-fr={piece.fr}
              alt=""
              aria-hidden="true"
              src={piece.src}
              width={piece.rect.width}
              height={piece.rect.height}
              loading="eager"
              className="hero-assembly-piece"
              style={
                {
                  width: pct(piece.rect.width, IMG_W),
                  height: "auto",
                  "--to-left": pct(piece.rect.left, IMG_W),
                  "--to-top": pct(piece.rect.top, IMG_H),
                  "--from-left": `${piece.from.left}%`,
                  "--from-top": `${piece.from.top}%`,
                  "--fr": `${piece.fr}deg`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </figure>
    </div>
  );
}
