import { Check } from "lucide-react";

import { BrowserFrame } from "@/components/marketing/browser-frame";
import { cn } from "@/lib/utils";

type FeatureShowcaseProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

export function FeatureShowcase({
  eyebrow,
  title,
  description,
  points,
  image,
  imageAlt,
  imagePosition = "left",
}: FeatureShowcaseProps) {
  return (
    <section className="section-space overflow-hidden">
      <div
        className={cn(
          "page-shell grid items-center gap-12 lg:gap-18",
          imagePosition === "left"
            ? "lg:grid-cols-[1.2fr_.8fr]"
            : "lg:grid-cols-[.8fr_1.2fr]",
        )}
      >
        <BrowserFrame
          src={image}
          alt={imageAlt}
          width={1680}
          height={944}
          className={cn(imagePosition === "right" && "lg:order-2")}
        />
        <div
          className={cn("max-w-xl", imagePosition === "right" && "lg:order-1")}
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
        </div>
      </div>
    </section>
  );
}
