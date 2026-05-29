"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export function HeroToolbar() {
  return (
    <div className="absolute right-6 top-6 md:right-3 md:top-4">
      <ThemeToggle />
    </div>
  );
}
