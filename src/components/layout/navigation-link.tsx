"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import type { NavigationItem } from "@/data/navigation";

type NavigationLinkProps = {
  item: NavigationItem;
  className: string;
  onSelect?: () => void;
};

export function NavigationLink({
  item,
  className,
  onSelect,
}: NavigationLinkProps) {
  const pathname = usePathname();

  if ("sectionId" in item) {
    const isHomepage = pathname === "/";
    const sectionId = item.sectionId;
    const href = `${isHomepage ? "" : "/"}#${sectionId}`;

    function handleSectionClick(event: MouseEvent<HTMLAnchorElement>) {
      if (!isHomepage) {
        onSelect?.();
        return;
      }

      event.preventDefault();
      onSelect?.();
      window.history.replaceState(null, "", `#${sectionId}`);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "auto"
              : "smooth",
            block: "start",
          });
        });
      });
    }

    return (
      <a href={href} className={className} onClick={handleSectionClick}>
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onSelect}>
      {item.label}
    </Link>
  );
}
