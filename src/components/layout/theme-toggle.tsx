"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }: { className?: string }) {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";

    root.classList.toggle("dark", nextTheme === "dark");
    root.style.colorScheme = nextTheme;

    try {
      window.localStorage.setItem("wazely-theme", nextTheme);
    } catch {
      // The selected theme still applies when browser storage is unavailable.
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={className}
      aria-label="Toggle light and dark mode"
      onClick={toggleTheme}
    >
      <Sun aria-hidden="true" className="hidden dark:block" size={20} />
      <Moon aria-hidden="true" className="block dark:hidden" size={20} />
    </Button>
  );
}
