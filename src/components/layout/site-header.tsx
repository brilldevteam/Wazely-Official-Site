import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "@/components/layout/brand-logo";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { NavigationLink } from "@/components/layout/navigation-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="page-shell flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Wazely home"
          className="shrink-0 rounded-sm focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-4 focus-visible:outline-none"
        >
          <BrandLogo preload />
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-0.5 lg:flex"
        >
          {navigation.map((item) => (
            <NavigationLink
              key={item.label}
              item={item}
              className="hover:text-navy rounded-full px-3 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:outline-none"
            />
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5">
          <ThemeToggle />
          <div className="hidden lg:block">
            <Button asChild variant="gradient">
              <Link href={siteConfig.demoUrl}>
                Book a demo <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </Button>
          </div>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
