"use client";

import { Check, Globe2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { BrowserFrame } from "@/components/marketing/browser-frame";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { solutionTabs } from "@/data/solutions-showcase";
import { cn } from "@/lib/utils";

function TabIndicator({
  tab,
  isActive,
}: {
  tab: (typeof solutionTabs)[number];
  isActive: boolean;
}) {
  const Icon = tab.icon;
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 border-b-2 px-4 py-3 text-left transition-colors duration-300",
        isActive
          ? "border-teal bg-cyan-50 text-navy"
          : "border-transparent text-slate-500",
      )}
    >
      <Icon
        aria-hidden="true"
        size={17}
        className={isActive ? "text-teal shrink-0" : "shrink-0 text-slate-400"}
      />
      <p
        className={cn(
          "text-sm font-semibold",
          isActive ? "text-navy" : "text-slate-500",
        )}
      >
        {tab.tabLabel}
      </p>
    </div>
  );
}

function TabPanel({ tab }: { tab: (typeof solutionTabs)[number] }) {
  return (
    <div>
      <div className="grid items-center gap-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 sm:p-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:p-7">
        <div>
          <p className="eyebrow">{tab.eyebrow}</p>
          <h3 className="text-navy mt-3 text-lg font-semibold tracking-tight sm:text-xl lg:text-2xl">
            {tab.headline}
          </h3>
          <p className="mt-2.5 max-w-md text-sm leading-5.5 text-slate-600 sm:leading-6">
            {tab.description}
          </p>
          <ul className="mt-3 grid gap-1.5">
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
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <BrowserFrame
          src={tab.image}
          alt={tab.imageAlt}
          width={tab.imageWidth}
          height={tab.imageHeight}
          sizes="(max-width: 1024px) 94vw, 44vw"
        />
      </div>
      <div className="bg-cyan-50 mt-4 flex flex-col items-center justify-between gap-4 rounded-[26px] border border-cyan-100 px-6 py-6 sm:flex-row sm:px-8">
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

  return (
    <section id="solutions" className="bg-soft scroll-mt-24">
      <div className="page-shell section-space pb-0">
        <ScrollReveal className="max-w-3xl">
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
          <p className="section-copy mt-5 max-w-2xl">
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
      <div className="bg-soft sticky top-[4.5rem] z-10 border-y border-slate-200">
        <div className="page-shell">
          <div className="grid sm:grid-cols-3">
            {solutionTabs.map((tab, index) => (
              <TabIndicator
                key={tab.id}
                tab={tab}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="page-shell pb-20">
        {solutionTabs.map((tab, index) => (
          <div
            key={tab.id}
            ref={(el) => {
              panelRefs.current[index] = el;
            }}
            data-index={index}
            className="pt-16 sm:pt-24"
          >
            <TabPanel tab={tab} />
          </div>
        ))}
      </div>
    </section>
  );
}
