import { Section } from "@/components/section";
import {
  featuredHero,
  featuredSecondary,
  moreProjects,
  type Project,
} from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

function StatusBadge({ status }: { status: Project["status"] }) {
  if (status === "live") {
    return <span className="site-badge-live">Live</span>;
  }
  if (status === "building") {
    return (
      <span className="rounded-full border border-border px-2 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wide text-muted-foreground">
        Building
      </span>
    );
  }
  return (
    <span className="rounded-full border border-border px-2 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wide text-muted-foreground/60">
      Archived
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="site-link font-medium"
        >
          Live demo
        </a>
      )}
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
      >
        Source
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

export function Work() {
  return (
    <Section
      id="work"
      label="02 — Work"
      title="What to look at first"
      intro="One flagship project, three strong follow-ups, then the rest if you want depth."
      className="site-divider px-6 md:px-8"
    >
      <article className="rounded-xl border border-border bg-muted/20 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight text-foreground">
            {featuredHero.name}
          </h3>
          <StatusBadge status={featuredHero.status} />
        </div>
        {featuredHero.highlight && (
          <p className="mt-2 text-sm font-medium text-foreground/80">
            {featuredHero.highlight}
          </p>
        )}
        <p className="site-body mt-4">{featuredHero.description}</p>
        <ProjectLinks project={featuredHero} />
      </article>

      <ul className="mt-6 space-y-4">
        {featuredSecondary.map((project) => (
          <li key={project.name}>
            <article className="rounded-xl border border-border p-5 transition-colors hover:bg-muted/20">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold tracking-tight text-foreground">
                  {project.name}
                </h3>
                <StatusBadge status={project.status} />
              </div>
              <p className="site-body mt-2 text-sm">{project.description}</p>
              <ProjectLinks project={project} />
            </article>
          </li>
        ))}
      </ul>

      {moreProjects.length > 0 && (
        <div className="mt-10">
          <p className="site-label mb-4">More projects</p>
          <ul className="divide-y divide-border rounded-xl border border-border">
            {moreProjects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.demo ?? project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-muted/20"
                >
                  <span>
                    <span className="block font-medium text-foreground">
                      {project.name}
                    </span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      {project.tags.join(" · ")}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
