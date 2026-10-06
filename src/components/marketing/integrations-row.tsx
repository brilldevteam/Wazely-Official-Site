"use client";

import { Boxes, Globe2, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { siteConfig } from "@/data/site";

const integrations = [
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Facebook", slug: "facebook" },
  { name: "Instagram", slug: "instagram" },
  { name: "Telegram", slug: "telegram" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "Stripe", slug: "stripe" },
  { name: "PayPal", slug: "paypal" },
] as const;

const stats = [
  {
    icon: Boxes,
    value: "2",
    label: "Focused products, CRM and ERP",
  },
  {
    icon: Globe2,
    value: String(siteConfig.targetMarkets.length),
    label: "GCC markets served",
  },
  {
    icon: Sparkles,
    value: "1",
    label: "Free AI color toolkit included",
  },
] as const;

function IconRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
      aria-hidden={ariaHidden}
    >
      {integrations.map((item) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={item.name}
          src={`https://cdn.simpleicons.org/${item.slug}`}
          alt={ariaHidden ? "" : item.name}
          width={28}
          height={28}
          loading="lazy"
          className="h-7 w-auto shrink-0"
        />
      ))}
    </div>
  );
}

export function IntegrationsRow() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (
      !track ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track.classList.add("is-playing");
          observer.unobserve(track);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="page-shell">
        <ScrollReveal className="grid gap-8 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="text-teal flex size-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                <Icon aria-hidden="true" size={22} />
              </span>
              <p>
                <span className="text-navy text-3xl font-bold tracking-tight">
                  {value}
                </span>
                <span className="mt-0.5 block text-sm leading-5 text-slate-500">
                  {label}
                </span>
              </p>
            </div>
          ))}
        </ScrollReveal>

        <div className="mt-14 border-t border-slate-200 pt-14 sm:mt-16 sm:pt-16">
          <ScrollReveal className="text-center">
            <p className="text-sm font-medium text-slate-500">
              Connects with the tools your team already uses
            </p>
          </ScrollReveal>
          <div className="marquee-track-wrapper mt-9">
            <div ref={trackRef} className="marquee-track">
              <IconRow />
              <IconRow ariaHidden />
              <IconRow ariaHidden />
              <IconRow ariaHidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
