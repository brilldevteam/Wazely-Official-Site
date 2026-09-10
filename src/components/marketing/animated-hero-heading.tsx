import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

const words = ["Turn", "every", "customer", "conversation", "into", "growth."];

const growthColors = [
  { light: "#08aebc", dark: "#45e4ed" },
  { light: "#20a6ca", dark: "#58d3ef" },
  { light: "#399bd8", dark: "#70bef7" },
  { light: "#568de2", dark: "#8da7fb" },
  { light: "#747be7", dark: "#a790f8" },
  { light: "#9669e3", dark: "#c17aef" },
  { light: "#b25cdb", dark: "#ed8ee7" },
];

export function AnimatedHeroHeading() {
  let characterIndex = 0;

  return (
    <h1
      aria-label="Turn every customer conversation into growth."
      className="text-navy hero-heading mx-auto mt-6 max-w-5xl text-[clamp(2.65rem,6.5vw,5.75rem)] leading-[.96] font-semibold tracking-[-.055em] text-balance"
    >
      {words.map((word) => {
        const isGrowth = word === "growth.";

        return (
          <span
            aria-hidden="true"
            className={cn("hero-word", isGrowth && "hero-word-gradient")}
            key={word}
          >
            {[...word].map((character, wordCharacterIndex) => {
              const index = characterIndex++;
              const color = isGrowth
                ? growthColors[wordCharacterIndex]
                : undefined;

              return (
                <span
                  className="hero-char"
                  key={`${word}-${index}`}
                  style={
                    {
                      "--char-delay": `${100 + index * 27}ms`,
                      "--char-color": color?.light,
                      "--char-color-dark": color?.dark,
                    } as CSSProperties
                  }
                >
                  {character}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
