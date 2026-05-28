"use client";

import { OrgLogo } from "@/components/org-logo";
import { Section } from "@/components/section";
import { experiences, proofStats, site } from "@/lib/site";
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
      label="01 — Experience"
      title="Background & proof of work"
      intro="Ecosystem roles, grants, and a track record of shipping in public."
      className="site-divider px-6 md:px-8"
    >
      <div className="overflow-hidden rounded-xl border border-border bg-muted/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${site.handle}&theme=react&bg_color=0d0d0d&color=525252&line=737373&point=ffffff&area=true&hide_border=true`}
          alt={`GitHub contribution activity for ${site.handle}`}
          className="h-auto w-full"
          loading="lazy"
        />
      </div>

      <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-border py-6">
        {proofStats.map((stat) => (
          <div key={stat.label}>
            <dt className="site-label">{stat.label}</dt>
            <dd className="mt-1 text-lg font-bold tracking-tight text-foreground">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-8 space-y-3">
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
                      View {item.org === "Open source" ? "GitHub" : "more"}
                    </a>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <p className="site-body mt-6 text-sm">
        Full commit history on{" "}
        <a
          href={site.github}
          className="site-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}
