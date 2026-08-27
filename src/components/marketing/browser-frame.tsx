import Image from "next/image";

import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function BrowserFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes = "(max-width: 1024px) 94vw, 58vw",
}: BrowserFrameProps) {
  return (
    <figure
      className={cn(
        "browser-frame overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(16,33,58,.38)]",
        className,
      )}
    >
      <div
        className="flex h-8 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3"
        aria-hidden="true"
      >
        <span className="size-2 rounded-full bg-slate-300" />
        <span className="size-2 rounded-full bg-slate-300" />
        <span className="size-2 rounded-full bg-slate-300" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    </figure>
  );
}
