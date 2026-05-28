"use client";

import { OrgLogo } from "@/components/org-logo";
import { Section } from "@/components/section";
import {
  allProjects,
  featuredProjects,
  type Project,
} from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Tab = "featured" | "all";

function StatusBadge({ status }: { status: Project["status"] }) {
  if (status === "live") {
    return (
      <span className="rounded border border-live/30 bg-live/10 px-1.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-live">
        Live
      </span>
    );
  }
  if (status === "building") {
    return (
      <span className="rounded border border-border px-1.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground">
        Building
      </span>
    );
  }
  return (
    <span className="rounded border border-border px-1.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground/60">
      Archived
    </span>
  );
}

function repoFromHref(href: string) {
  try {
    const path = new URL(href).pathname.replace(/^\//, "");
    return path || href;
  } catch {
    return href;
  }
}

function ProjectRow({ project }: { project: Project }) {
  const url = project.demo ?? project.href;

  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start gap-4 rounded-lg px-2 py-4 transition-colors hover:bg-muted/25 sm:px-3"
      >
        {project.logo && (
          <OrgLogo
            src={project.logo}
            alt={project.name}
            size="sm"
            shape={project.logoShape}
          />
        )}

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-medium text-foreground transition-colors group-hover:text-foreground">
              {project.name}
            </span>
            <StatusBadge status={project.status} />
          </span>
          <span className="mt-1 block font-mono text-xs text-muted-foreground">
            {repoFromHref(project.href)}
            {project.language ? ` · ${project.language}` : ""}
            {project.tags.length > 0 ? ` · ${project.tags.slice(0, 2).join(" · ")}` : ""}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </span>
        </span>

        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      </a>
    </li>
  );
}

export function FeaturedProjects() {
  const [tab, setTab] = useState<Tab>("featured");
  const projects = tab === "featured" ? featuredProjects : allProjects;

  return (
    <Section
      id="projects"
      label="02 — Featured work"
      title="Selected projects"
      intro="Highlights from what I've shipped — toggle for the full list."
      className="site-divider px-6 md:px-8"
    >
      <div className="mb-4 inline-flex rounded-lg border border-border bg-muted/20 p-1">
        {(
          [
            ["featured", "Featured"],
            ["all", "All projects"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              tab === value
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="divide-y divide-border rounded-xl border border-border">
        {projects.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </ul>

      <p className="site-body mt-4 text-xs">
        {featuredProjects.length} featured · {allProjects.length} total
      </p>
    </Section>
  );
}
