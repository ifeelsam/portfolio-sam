"use client";

import { Section } from "@/components/section";
import { experiences } from "@/lib/site";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
      <ul className="divide-y divide-border rounded-xl border border-border">
        {experiences.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <li key={item.org}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/20"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="min-w-0">
                  <span className="block font-bold text-foreground">
                    {item.org}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {item.role}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-3 text-right">
                  <span className="hidden text-xs text-muted-foreground sm:block">
                    {item.period}
                    {item.location ? ` · ${item.location}` : ""}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-border px-5 pb-5 pt-4">
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
                      View project
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
