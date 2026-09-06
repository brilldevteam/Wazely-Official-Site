import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

type BookDemoButtonProps = Pick<ButtonProps, "className" | "size" | "variant">;

type BookDemoLinkProps = BookDemoButtonProps & {
  href?: string;
};

export function BookDemoButton({
  className,
  size = "lg",
  variant = "gradient",
  href = siteConfig.demoUrl,
}: BookDemoLinkProps) {
  return (
    <Button asChild className={className} size={size} variant={variant}>
      <Link href={href}>
        Book a demo <ArrowUpRight aria-hidden="true" size={18} />
      </Link>
    </Button>
  );
}
