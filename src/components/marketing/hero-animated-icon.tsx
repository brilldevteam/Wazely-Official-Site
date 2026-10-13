import Image from "next/image";

type HeroAnimatedIconProps = { kind: "chat" | "dashboard" | "color" | "globe" };

export function HeroAnimatedIcon({ kind }: HeroAnimatedIconProps) {
  return <picture>
    <source media="(prefers-reduced-motion: reduce)" srcSet={`/animated-icons/hero-${kind}.png`} />
    <Image
      src={`/animated-icons/hero-${kind}.webp`}
      alt=""
      width={256}
      height={256}
      unoptimized
      draggable={false}
    />
  </picture>;
}
