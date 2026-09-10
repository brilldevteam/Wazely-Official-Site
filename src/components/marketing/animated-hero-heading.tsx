import { Fragment, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

const defaultWords = [
  "Turn",
  "every",
  "customer",
  "conversation",
  "into",
  "growth.",
];

const growthColors = [
  { light: "#08aebc", dark: "#45e4ed" },
  { light: "#20a6ca", dark: "#58d3ef" },
  { light: "#399bd8", dark: "#70bef7" },
  { light: "#568de2", dark: "#8da7fb" },
  { light: "#747be7", dark: "#a790f8" },
  { light: "#9669e3", dark: "#c17aef" },
  { light: "#b25cdb", dark: "#ed8ee7" },
];

type AnimatedHeroHeadingProps = {
  words?: string[];
  gradientWord?: string;
  ariaLabel?: string;
  className?: string;
  breakBeforeWord?: string;
};

export function AnimatedHeroHeading({
  words = defaultWords,
  gradientWord = "growth.",
  ariaLabel = "Turn every customer conversation into growth.",
  className,
  breakBeforeWord,
}: AnimatedHeroHeadingProps = {}) {
  let characterIndex = 0;

  return (
    <h1
      aria-label={ariaLabel}
      className={cn(
        "text-navy hero-heading mx-auto mt-6 max-w-[1280px] text-[clamp(2.4rem,5vw,4.5rem)] leading-[.98] font-semibold tracking-[-.05em] text-balance",
        className,
      )}
    >
      {words.map((word) => {
        const isGradient = word === gradientWord;

        return (
          <Fragment key={word}>
            {word === breakBeforeWord ? (
              <br aria-hidden="true" className="hidden sm:block" />
            ) : null}
            <span
              aria-hidden="true"
              className={cn("hero-word", isGradient && "hero-word-gradient")}
            >
              {[...word].map((character, wordCharacterIndex) => {
                const index = characterIndex++;
                const color = isGradient
                  ? growthColors[wordCharacterIndex % growthColors.length]
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
          </Fragment>
        );
      })}
    </h1>
  );
}
