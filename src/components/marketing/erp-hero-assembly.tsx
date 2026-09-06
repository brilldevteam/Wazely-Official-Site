"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const IMG_W = 1920;
const IMG_H = 950;

type Piece = {
  name: string;
  rect: { left: number; top: number; width: number; height: number };
  from: { left: number; top: number };
  rotation: number;
  delay: number;
};

const pieces: Piece[] = [
  {
    name: "brand",
    rect: { left: 0, top: 0, width: 255, height: 56 },
    from: { left: -16, top: -12 },
    rotation: -14,
    delay: 0,
  },
  {
    name: "sidebar",
    rect: { left: 0, top: 56, width: 255, height: 894 },
    from: { left: -34, top: 36 },
    rotation: -7,
    delay: 0,
  },
  {
    name: "clients",
    rect: { left: 280, top: 116, width: 386, height: 126 },
    from: { left: -28, top: 6 },
    rotation: -13,
    delay: 0.06,
  },
  {
    name: "vendors",
    rect: { left: 690, top: 116, width: 386, height: 126 },
    from: { left: 92, top: -18 },
    rotation: 12,
    delay: 0.12,
  },
  {
    name: "customer-payment",
    rect: { left: 1100, top: 116, width: 386, height: 126 },
    from: { left: 88, top: 10 },
    rotation: -11,
    delay: 0.17,
  },
  {
    name: "vendor-payment",
    rect: { left: 1510, top: 116, width: 386, height: 126 },
    from: { left: 98, top: 34 },
    rotation: 14,
    delay: 0.22,
  },
  {
    name: "customer-chart",
    rect: { left: 280, top: 266, width: 796, height: 330 },
    from: { left: -42, top: 61 },
    rotation: -8,
    delay: 0.08,
  },
  {
    name: "vendor-chart",
    rect: { left: 1100, top: 266, width: 796, height: 330 },
    from: { left: 84, top: 58 },
    rotation: 8,
    delay: 0.14,
  },
  {
    name: "recent-revenue",
    rect: { left: 280, top: 621, width: 796, height: 329 },
    from: { left: -38, top: 94 },
    rotation: 7,
    delay: 0.2,
  },
  {
    name: "recent-expenses",
    rect: { left: 1100, top: 621, width: 796, height: 329 },
    from: { left: 88, top: 92 },
    rotation: -9,
    delay: 0.26,
  },
];

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

export function ErpHeroAssembly() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-erp-piece]"),
    );

    for (const element of elements) {
      const base = Number(element.dataset.rotation) || 0;
      const jitter = (Math.random() * 2 - 1) * 7;
      element.style.setProperty(
        "--rotation",
        `${(base + jitter).toFixed(1)}deg`,
      );
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.style.setProperty("--p", "1"));
      return;
    }

    let animationFrame = 0;
    const span = 0.72;

    const render = () => {
      animationFrame = 0;
      const master = Math.min(1, Math.max(0, window.scrollY / 620));

      for (const element of elements) {
        const delay = Number(element.dataset.delay) || 0;
        const local = Math.min(
          1,
          Math.max(0, (master - delay * (1 - span)) / span),
        );
        const eased = 1 - Math.pow(1 - local, 2.2);
        element.style.setProperty("--p", eased.toFixed(4));
      }
    };

    const onScroll = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="erp-hero-assembly relative mx-auto mt-14 max-w-[1280px] sm:mt-18"
    >
      <div className="hero-halo" aria-hidden="true" />
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
              src="/screenshots/erp/dashboard-base.png"
              alt="Wazely ERP dashboard showing financial and operational activity"
              width={IMG_W}
              height={IMG_H}
              priority
              sizes="(max-width: 1320px) 94vw, 1280px"
              className="erp-assembly-base block h-auto w-full"
            />
          </div>
          {pieces.map((piece) => (
            <div
              key={piece.name}
              data-erp-piece={piece.name}
              data-delay={piece.delay}
              data-rotation={piece.rotation}
              className="erp-assembly-piece"
              aria-hidden="true"
              style={
                {
                  width: pct(piece.rect.width, IMG_W),
                  height: pct(piece.rect.height, IMG_H),
                  "--to-left": pct(piece.rect.left, IMG_W),
                  "--to-top": pct(piece.rect.top, IMG_H),
                  "--from-left": `${piece.from.left}%`,
                  "--from-top": `${piece.from.top}%`,
                  "--rotation": `${piece.rotation}deg`,
                } as CSSProperties
              }
            >
              <Image
                src="/screenshots/erp/dashboard.png"
                alt=""
                width={IMG_W}
                height={IMG_H}
                loading="eager"
                sizes="(max-width: 1320px) 94vw, 1280px"
                className="erp-assembly-crop"
                style={{
                  width: `${(IMG_W / piece.rect.width) * 100}%`,
                  left: `${-(piece.rect.left / piece.rect.width) * 100}%`,
                  top: `${-(piece.rect.top / piece.rect.height) * 100}%`,
                }}
              />
            </div>
          ))}
        </div>
      </figure>
    </div>
  );
}
