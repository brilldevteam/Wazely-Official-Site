"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { NavigationLink } from "@/components/layout/navigation-link";
import { Button } from "@/components/ui/button";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu aria-hidden="true" size={22} />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-navy/35 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in fixed inset-0 z-50 backdrop-blur-sm" />
        <Dialog.Content className="theme-sheet data-[state=closed]:animate-slide-out data-[state=open]:animate-slide-in fixed inset-y-0 right-0 z-50 flex w-[min(92vw,390px)] flex-col bg-white p-6 shadow-2xl outline-none">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-navy text-lg font-semibold">
              Navigation
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close navigation menu"
              >
                <X aria-hidden="true" size={22} />
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Navigate the Wazely website.
          </Dialog.Description>
          <nav aria-label="Mobile navigation" className="mt-8 flex flex-col">
            {navigation.map((item) => (
              <NavigationLink
                key={item.label}
                item={item}
                onSelect={() => setOpen(false)}
                className="text-navy hover:text-teal flex min-h-13 items-center border-b border-slate-200 text-lg font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:outline-none"
              />
            ))}
          </nav>
          <div className="mt-7 flex items-center justify-between rounded-xl border border-slate-200 px-4 py-2">
            <span className="text-sm font-medium text-slate-600">
              Appearance
            </span>
            <ThemeToggle />
          </div>
          <Button
            asChild
            variant="gradient"
            size="lg"
            className="mt-auto w-full"
          >
            <Link href={siteConfig.crmUrl}>
              Explore Wazely CRM <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
