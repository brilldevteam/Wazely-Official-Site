"use client";

import { motion } from "framer-motion";
import { Check, Globe2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { BrowserFrame } from "@/components/marketing/browser-frame";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { solutionTabs } from "@/data/solutions-showcase";
import { cn } from "@/lib/utils";

// Each tab gets its own accent, echoing the color story already established
// for the matching product card in ProductsSection (green/CRM, purple/ERP,
// orange/Color), so the tab bar, the panel, and the product grid all read as
// one connected identity rather than a flat, single-color UI. The panel and
// icon badge also carry a soft neumorphic shadow pair (a light highlight on
// one corner, a muted tinted shadow on the other) instead of a hard border,
// so they read as soft, tactile surfaces rather than flat outlined boxes.
const tabThemes: Record<
  string,
  {
    panelBorder: string;
    panelBg: string;
    panelShadow: string;
    iconBadge: string;
    iconShadow: string;
    chipBorder: string;
    watermark: string;
    indicatorBg: string;
    indicatorBorder: string;
    indicatorText: string;
    bannerBg: string;
    bannerBorder: string;
  }
> = {
  conversations: {
    panelBorder: "border-emerald-300 dark:border-emerald-800/50",
    panelBg:
      "bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-[#0b1526] dark:to-[#0b2826]",
    panelShadow:
      "shadow-[10px_10px_30px_-14px_rgba(5,150,105,0.35),-10px_-10px_28px_-16px_rgba(255,255,255,0.95)] dark:shadow-[10px_10px_30px_-16px_rgba(0,0,0,0.55),-8px_-8px_24px_-18px_rgba(16,185,129,0.14)]",
    iconBadge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    iconShadow:
      "shadow-[4px_4px_10px_-4px_rgba(5,150,105,0.4),-4px_-4px_10px_-4px_rgba(255,255,255,0.9)] dark:shadow-[4px_4px_10px_-4px_rgba(0,0,0,0.5),-3px_-3px_8px_-4px_rgba(16,185,129,0.12)]",
    chipBorder: "border-emerald-300/70 dark:border-emerald-800/50",
    watermark: "text-emerald-600/[0.08] dark:text-emerald-400/[0.08]",
    indicatorBg: "bg-emerald-100 dark:bg-emerald-950/40",
    indicatorBorder: "border-emerald-500 dark:border-emerald-400",
    indicatorText: "text-emerald-700 dark:text-emerald-300",
    bannerBg:
      "bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-[#0b1526] dark:to-[#0b2826]",
    bannerBorder: "border-emerald-300 dark:border-emerald-800/50",
  },
  accounting: {
    panelBorder: "border-purple-300 dark:border-purple-800/50",
    panelBg:
      "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-[#0b1526] dark:to-[#241a3d]",
    panelShadow:
      "shadow-[10px_10px_30px_-14px_rgba(147,51,234,0.32),-10px_-10px_28px_-16px_rgba(255,255,255,0.95)] dark:shadow-[10px_10px_30px_-16px_rgba(0,0,0,0.55),-8px_-8px_24px_-18px_rgba(168,85,247,0.14)]",
    iconBadge:
      "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300",
    iconShadow:
      "shadow-[4px_4px_10px_-4px_rgba(147,51,234,0.38),-4px_-4px_10px_-4px_rgba(255,255,255,0.9)] dark:shadow-[4px_4px_10px_-4px_rgba(0,0,0,0.5),-3px_-3px_8px_-4px_rgba(168,85,247,0.12)]",
    chipBorder: "border-purple-300/70 dark:border-purple-800/50",
    watermark: "text-purple-600/[0.08] dark:text-purple-400/[0.08]",
    indicatorBg: "bg-purple-100 dark:bg-purple-950/40",
    indicatorBorder: "border-purple-500 dark:border-purple-400",
    indicatorText: "text-purple-700 dark:text-purple-300",
    bannerBg:
      "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-[#0b1526] dark:to-[#241a3d]",
    bannerBorder: "border-purple-300 dark:border-purple-800/50",
  },
  brand: {
    panelBorder: "border-orange-300 dark:border-orange-800/50",
    panelBg:
      "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b1526] dark:to-[#2b1a12]",
    panelShadow:
      "shadow-[10px_10px_30px_-14px_rgba(234,88,12,0.32),-10px_-10px_28px_-16px_rgba(255,255,255,0.95)] dark:shadow-[10px_10px_30px_-16px_rgba(0,0,0,0.55),-8px_-8px_24px_-18px_rgba(251,146,60,0.14)]",
    iconBadge:
      "bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300",
    iconShadow:
      "shadow-[4px_4px_10px_-4px_rgba(234,88,12,0.38),-4px_-4px_10px_-4px_rgba(255,255,255,0.9)] dark:shadow-[4px_4px_10px_-4px_rgba(0,0,0,0.5),-3px_-3px_8px_-4px_rgba(251,146,60,0.12)]",
    chipBorder: "border-orange-300/70 dark:border-orange-800/50",
    watermark: "text-orange-600/[0.08] dark:text-orange-400/[0.08]",
    indicatorBg: "bg-orange-100 dark:bg-orange-950/40",
    indicatorBorder: "border-orange-500 dark:border-orange-400",
    indicatorText: "text-orange-700 dark:text-orange-300",
    bannerBg:
      "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b1526] dark:to-[#2b1a12]",
    bannerBorder: "border-orange-300 dark:border-orange-800/50",
  },
};

function TabIndicator({
  tab,
  isActive,
  onClick,
}: {
  tab: (typeof solutionTabs)[number];
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = tab.icon;
  const theme = tabThemes[tab.id];
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex w-full items-center gap-2.5 px-4 py-3 text-left"
    >
      {isActive && (
        <motion.div
          layoutId="active-tab-indicator"
          className={cn(
            "absolute inset-0 border-b-2",
            theme.indicatorBg,
            theme.indicatorBorder,
          )}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
        />
      )}
      <Icon
        aria-hidden="true"
        size={17}
        className={cn(
          "relative z-10 shrink-0 transition-colors duration-300",
          isActive ? theme.indicatorText : "text-slate-400",
        )}
      />
      <p
        className={cn(
          "relative z-10 text-sm font-semibold transition-colors duration-300",
          isActive ? "text-navy" : "text-slate-500",
        )}
      >
        {tab.tabLabel}
      </p>
    </button>
  );
}

function TabPanel({ tab }: { tab: (typeof solutionTabs)[number] }) {
  const Icon = tab.icon;
  const theme = tabThemes[tab.id];
  return (
    <div>
      <div
        className={cn(
          "glow-border relative grid items-center gap-6 overflow-hidden rounded-[28px] border p-5 sm:p-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:p-8",
          theme.panelBorder,
          theme.panelBg,
          theme.panelShadow,
        )}
      >
        <Icon
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-10 -right-10 size-56 rotate-12",
            theme.watermark,
          )}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-xl",
                theme.iconBadge,
                theme.iconShadow,
              )}
            >
              <Icon aria-hidden="true" size={17} />
            </span>
            <p className="eyebrow">{tab.eyebrow}</p>
          </div>
          <h3 className="text-navy mt-4 text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
            {tab.headline}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-5.5 text-slate-600 sm:leading-6">
            {tab.description}
          </p>
          <ul className="mt-4 grid gap-1.5">
            {tab.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2.5 text-sm leading-5 text-slate-700"
              >
                <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Check aria-hidden="true" size={11} strokeWidth={2.5} />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-4 border-t border-slate-200 pt-4">
            {tab.chipGroups.map((group) => (
              <div key={group.label}>
                <p className="text-[10px] font-semibold tracking-[.1em] text-slate-400 uppercase">
                  {group.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "neu-chip rounded-full border bg-white px-3 py-1.5 text-xs font-medium text-slate-600",
                        theme.chipBorder,
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glow-border glow-border-active relative z-10 rounded-[18px]">
          <BrowserFrame
            src={tab.image}
            alt={tab.imageAlt}
            width={tab.imageWidth}
            height={tab.imageHeight}
            sizes="(max-width: 1024px) 94vw, 44vw"
          />
        </div>
      </div>
      <div
        className={cn(
          "mt-4 flex flex-col items-center justify-between gap-4 rounded-[26px] border px-6 py-6 sm:flex-row sm:px-8",
          theme.bannerBg,
          theme.bannerBorder,
        )}
      >
        <p className="text-navy text-center text-base font-semibold sm:text-left">
          {tab.bannerText}
        </p>
        <Button
          asChild
          variant="primary"
          size="default"
          className="shrink-0"
        >
          <Link href={tab.ctaHref}>{tab.ctaLabel}</Link>
        </Button>
      </div>
    </div>
  );
}

export function SolutionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number(
            (entry.target as HTMLElement).dataset.index ?? 0,
          );
          setActiveIndex(index);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    const targets = panelRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const scrollToTab = (index: number) => {
    panelRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="solutions" className="grid-texture bg-soft scroll-mt-24">
      <div className="page-shell section-space relative z-10 pb-0">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
            <span className="text-teal flex size-6 items-center justify-center rounded-full bg-cyan-50">
              <Globe2 aria-hidden="true" size={13} />
            </span>
            <span className="text-navy text-sm font-semibold">
              {siteConfig.targetMarkets.length}
            </span>
            <span className="text-sm text-slate-500">GCC markets served</span>
          </div>
          <h2 className="section-title mt-4">
            Customer work and business operations, clearly connected.
          </h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Wazely gives teams focused tools for the relationships and
            operations that keep a business moving, without forcing
            everything into one oversized product.
          </p>
        </ScrollReveal>
      </div>

      {/* Pinned under the header so it's always visible, but it only ever
          reflects scroll position: the active pill updates as each panel
          below scrolls through view. The panels themselves are normal
          in-flow content, not pinned. */}
      <div className="bg-soft sticky top-[4.5rem] z-20 border-y border-slate-200">
        <div className="page-shell">
          <div className="grid sm:grid-cols-3">
            {solutionTabs.map((tab, index) => (
              <TabIndicator
                key={tab.id}
                tab={tab}
                isActive={index === activeIndex}
                onClick={() => scrollToTab(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="page-shell relative z-10 pb-20">
        {solutionTabs.map((tab, index) => (
          <div
            key={tab.id}
            ref={(el) => {
              panelRefs.current[index] = el;
            }}
            data-index={index}
            className="scroll-mt-[4.5rem] pt-16 sm:pt-24"
          >
            <TabPanel tab={tab} />
          </div>
        ))}
      </div>
    </section>
  );
}
