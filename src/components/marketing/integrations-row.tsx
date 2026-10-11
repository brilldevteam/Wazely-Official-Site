"use client";

import { animate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { siteConfig } from "@/data/site";

const integrations = [
  { name: "WhatsApp", slug: "whatsapp", color: "#25D366" },
  { name: "Facebook", slug: "facebook", color: "#1877F2" },
  { name: "Instagram", slug: "instagram", color: "#E1306C" },
  { name: "Telegram", slug: "telegram", color: "#229ED9" },
  { name: "Google Sheets", slug: "googlesheets", color: "#0F9D58" },
  { name: "Stripe", slug: "stripe", color: "#635BFF" },
  { name: "PayPal", slug: "paypal", color: "#0070BA" },
] as const;

const stats = [
  {
    image: "/stat-icons/products.png",
    imageAlt: "",
    imageWidth: 422,
    imageHeight: 480,
    value: 2,
    label: "Focused products, CRM and ERP",
  },
  {
    image: "/stat-icons/markets.png",
    imageAlt: "",
    imageWidth: 480,
    imageHeight: 441,
    value: siteConfig.targetMarkets.length,
    label: "GCC markets served",
  },
  {
    image: "/stat-icons/toolkit.png",
    imageAlt: "",
    imageWidth: 429,
    imageHeight: 480,
    value: 1,
    label: "Free AI color toolkit included",
  },
] as const;

function CountUpNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (
      !isInView ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const controls = animate(0, value, {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

function IconRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
      aria-hidden={ariaHidden}
    >
      {integrations.map((item) => (
        <div
          key={item.name}
          className="flex h-20 shrink-0 items-center gap-3 rounded-[26px] border border-slate-200 bg-white px-6 shadow-[-4px_-4px_18px_-10px_rgba(8,174,188,.4),4px_4px_18px_-10px_rgba(120,89,232,.4),0_22px_50px_-28px_rgba(15,29,53,.45)] transition-transform duration-300 hover:-translate-y-1.5 sm:h-24 sm:gap-4 sm:px-7"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://cdn.simpleicons.org/${item.slug}`}
            alt=""
            width={36}
            height={36}
            loading="lazy"
            className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
          />
          <span
            className="text-lg font-semibold whitespace-nowrap sm:text-xl"
            style={{ color: item.color }}
          >
            {item.name}
          </span>
        </div>
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
      { threshold: 0 },
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="grid-texture bg-white py-16 sm:py-20">
      <div className="page-shell relative z-10">
        <ScrollReveal className="grid gap-8 sm:grid-cols-3 sm:justify-items-center">
          {stats.map(({ image, imageAlt, imageWidth, imageHeight, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <Image
                src={image}
                alt={imageAlt}
                aria-hidden="true"
                width={imageWidth}
                height={imageHeight}
                className="h-20 w-auto shrink-0 object-contain sm:h-24"
              />
              <p>
                <span className="text-navy text-3xl font-bold tracking-tight">
                  <CountUpNumber value={value} />
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
          <div className="marquee-track-wrapper mt-9 py-6 sm:py-8">
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
