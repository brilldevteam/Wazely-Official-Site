import Image from "next/image";

type BrandLogoProps = {
  preload?: boolean;
};

export function BrandLogo({ preload = false }: BrandLogoProps) {
  return (
    <span className="relative block h-8 w-[162px]">
      <Image
        src="/wazely-logo.svg"
        alt="Wazely"
        width={162}
        height={32}
        preload={preload}
        className="brand-logo-base h-auto w-full"
      />
      <Image
        src="/wazely-logo.svg"
        alt=""
        aria-hidden="true"
        width={162}
        height={32}
        className="brand-logo-mark pointer-events-none absolute inset-0 hidden h-auto w-full dark:block"
      />
    </span>
  );
}
