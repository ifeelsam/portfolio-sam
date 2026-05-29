"use client";

import { OrgLogo } from "@/components/org-logo";
import { Section } from "@/components/section";
import { experiences, proofStats, site } from "@/lib/site";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

function githubGraphUrl(handle: string, dark: boolean) {
  if (dark) {
    return `https://github-readme-activity-graph.vercel.app/graph?username=${handle}&theme=react&bg_color=101010&color=525252&line=737373&point=f5f5f5&area=true&hide_border=true`;
  }
  return `https://github-readme-activity-graph.vercel.app/graph?username=${handle}&theme=react&bg_color=f5f5f5&color=9ca3af&line=6b7280&point=111111&area=true&hide_border=true`;
}

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="experience"
      label="01 — Experience"
      title="Background & proof of work"
      intro="Ecosystem roles, grants, and a track record of shipping in public."
      className="site-divider px-6 md:px-8"
    >
      <div className="overflow-hidden rounded-xl border border-border bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={githubGraphUrl(site.handle, isDark)}
          alt={`GitHub contribution activity for ${site.handle}`}
          className="h-auto w-full"
          loading="lazy"
        />
      </div>

      <ul className="mt-8 space-y-3">
        {experiences.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <li
              key={item.org}
              className={`site-experience-card overflow-hidden rounded-xl border transition-all duration-200 ${
                isOpen
                  ? "border-border bg-muted shadow-[0_4px_12px_hsl(0_0%_0%/var(--shadow-strength))]"
                  : "border-border bg-muted/60 hover:border-muted-foreground/30 hover:bg-muted"
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
