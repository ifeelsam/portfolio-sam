"use client";

import { GitHubIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Palette", href: "#palette" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[3px] border-pv-yellow bg-pv-dark/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-sm tracking-widest text-pv-yellow transition-colors hover:text-pv-cyan"
        >
          {site.handle.toUpperCase()}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-pv-cyan"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pv-btn-outline py-2 text-xs"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="border-2 border-pv-yellow p-2 text-pv-yellow md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t-[3px] border-pv-cyan bg-pv-dark px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block font-bold uppercase tracking-wide text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-pv-yellow"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
