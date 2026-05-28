"use client";

import { CommandPaletteTrigger } from "@/components/command-palette";
import { ScrollProgress } from "@/components/scroll-progress";
import { site } from "@/lib/site";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="flex h-14 items-center justify-between gap-3 px-6 md:px-8">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-foreground"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <CommandPaletteTrigger />
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-muted-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <ScrollProgress />

      {open && (
        <nav className="border-t border-border px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-sm font-medium text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
