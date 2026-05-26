"use client";

import { OrgLogo } from "@/components/org-logo";
import { Section } from "@/components/section";
import { experiences } from "@/lib/site";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function ExperienceBadge({ label }: { label: string }) {
  const lower = label.toLowerCase();
  if (lower.includes("grant") || lower.includes("fellowship")) {
    return (
      <span className="rounded-full border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-foreground/80">
        {label}
      </span>
    );
  }
  if (lower === "live") {
    return <span className="site-badge-live">{label}</span>;
  }
  return (
    <span className="rounded-full border border-border px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground">
      {label}
    </span>
  );
}

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="experience"
      label="03 — Experience"
      title="Where I've been building"
      intro="Roles and projects that shaped how I work — product-first, ship in public."
      className="site-divider px-6 md:px-8"
    >
      <ul className="space-y-3">
        {experiences.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <li
              key={item.org}
              className={`site-experience-card overflow-hidden rounded-xl border transition-all duration-200 ${
                isOpen
                  ? "border-foreground/15 bg-muted/30 shadow-lg shadow-black/20"
                  : "border-border bg-muted/10 hover:border-foreground/10 hover:bg-muted/20"
              }`}
            >
              <button
                type="button"
                className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <OrgLogo
                  src={item.logo}
                  alt={item.org}
                  shape={item.logoShape}
                />

                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-foreground">{item.org}</span>
                    {item.badge && <ExperienceBadge label={item.badge} />}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {item.role}
                  </span>
                </span>

                <span className="flex shrink-0 items-center gap-3">
                  <span className="hidden text-xs text-muted-foreground sm:block">
                    {item.period}
                    {item.location ? ` · ${item.location}` : ""}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-border/80 px-4 pb-5 pt-4 sm:px-5 sm:pl-[4.75rem]">
                  <p className="text-sm text-muted-foreground sm:hidden">
                    {item.period}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  <p className="site-body mt-2 text-sm">{item.detail}</p>
                  {item.href && (
                    <a
                      href={item.href}
                      className="site-link mt-3 inline-block text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View {item.org === "Open source" ? "GitHub" : "project"}
                    </a>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
