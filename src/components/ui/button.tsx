import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-white shadow-[0_10px_30px_-12px_rgba(15,29,53,.65)] hover:-translate-y-0.5 hover:bg-[#162b4c]",
        secondary:
          "border border-slate-300 bg-white text-navy hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50",
        gradient:
          "bg-[linear-gradient(115deg,#1bbbc7,#7b5cff)] text-white shadow-[0_12px_28px_-13px_rgba(80,94,230,.75)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-13px_rgba(80,94,230,.85)]",
        ghost: "text-navy hover:bg-slate-100",
      },
      size: {
        default: "h-11",
        lg: "h-13 px-6 text-[15px]",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
