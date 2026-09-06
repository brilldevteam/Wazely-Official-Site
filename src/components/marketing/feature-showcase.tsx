import { Check } from "lucide-react";

import { BrowserFrame } from "@/components/marketing/browser-frame";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { cn } from "@/lib/utils";

type FeatureShowcaseProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  imageWidth?: number;
  imageHeight?: number;
};

export function FeatureShowcase({
  eyebrow,
  title,
  description,
  points,
  image,
  imageAlt,
  imagePosition = "left",
  imageWidth = 1680,
  imageHeight = 944,
}: FeatureShowcaseProps) {
  return (
    <section className="overflow-hidden pt-8 pb-20 sm:py-16 lg:py-[clamp(5rem,9vw,8.5rem)]">
      {/* On mobile the screenshot sits at the end of the section: a tight gap
          above it (grid gap) pulls it up against its own copy, and a large
          bottom padding gives it clear breathing room before the next
          section. Desktop side-by-side layout is unchanged via lg:order-*. */}
      <div
        className={cn(
          "page-shell grid items-center gap-8 sm:gap-14 lg:gap-18",
          imagePosition === "left"
            ? "lg:grid-cols-[1.2fr_.8fr]"
            : "lg:grid-cols-[.8fr_1.2fr]",
        )}
      >
        <ScrollReveal
          direction={imagePosition}
          className={cn(
            "order-2",
            imagePosition === "right" ? "lg:order-2" : "lg:order-1",
          )}
        >
          <BrowserFrame
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        </ScrollReveal>
        <ScrollReveal
          direction={imagePosition === "left" ? "right" : "left"}
          className={cn(
            "order-1 max-w-xl",
            imagePosition === "right" ? "lg:order-1" : "lg:order-2",
          )}
        >
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-5">{description}</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-6 text-slate-700"
              >
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Check aria-hidden="true" size={13} strokeWidth={2.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
