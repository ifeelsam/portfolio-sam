import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/footer";
import { GitHubIcon } from "@/components/icons";
import { OrgLogo } from "@/components/org-logo";
import { SiteShell } from "@/components/site-shell";
import {
  allProjects,
  getProjectBySlug,
  projectPath,
  site,
  type Project,
} from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allProjects.map((project) => ({ slug: project.slug }));
}

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  building: "Building",
  archived: "Archived",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const description = project.overview ?? project.description;
  const canonical = projectPath(project.slug);

  return {
    title: project.name,
    description,
    keywords: [project.name, ...project.tags, project.language ?? ""].filter(
      Boolean,
    ),
    alternates: { canonical },
    openGraph: {
      title: `${project.name} · Sam (@${site.handle})`,
      description,
      url: `${site.url}${canonical}`,
      siteName: "Sam — ifeelsam",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} · Sam (@${site.handle})`,
      description,
      creator: "@ifeelsam",
    },
  };
}

function StatusBadge({ status }: { status: Project["status"] }) {
  if (status === "live") {
    return (
      <span className="rounded border border-live/30 bg-live/10 px-1.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-live">
        {statusLabel[status]}
      </span>
    );
  }
  return (
    <span
      className={`rounded border border-border px-1.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider ${
        status === "archived" ? "text-muted-foreground/60" : "text-muted-foreground"
      }`}
    >
      {statusLabel[status]}
    </span>
  );
}

function repoFromHref(href: string) {
  try {
    return new URL(href).pathname.replace(/^\//, "") || href;
  } catch {
    return href;
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = allProjects.filter((item) => item.slug !== project.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.overview ?? project.description,
    url: `${site.url}${projectPath(project.slug)}`,
    codeRepository: project.href,
    ...(project.demo ? { sameAs: [project.demo] } : {}),
    ...(project.language ? { programmingLanguage: project.language } : {}),
    keywords: project.tags.join(", "),
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="px-6 py-10 md:px-8 md:py-12">
        <Link
          href="/#projects"
          className="site-link inline-flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        <header className="mt-8 flex items-start gap-4">
          {project.logo && (
            <OrgLogo
              src={project.logo}
              alt={project.name}
              size="lg"
              shape={project.logoShape}
            />
          )}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h1 className="site-section-title">{project.name}</h1>
              <StatusBadge status={project.status} />
            </div>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {repoFromHref(project.href)}
              {project.language ? ` · ${project.language}` : ""}
            </p>
          </div>
        </header>

        <p className="site-body mt-6 max-w-xl text-base leading-relaxed">
          {project.overview ?? project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Visit demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/40"
          >
            <GitHubIcon className="h-4 w-4" />
            View source
          </a>
          {project.x && (
            <a
              href={project.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Follow on X
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
          <div>
            <dt className="site-label">Status</dt>
            <dd className="mt-1.5 text-sm text-foreground">{statusLabel[project.status]}</dd>
          </div>
          {project.language && (
            <div>
              <dt className="site-label">Language</dt>
              <dd className="mt-1.5 text-sm text-foreground">{project.language}</dd>
            </div>
          )}
          <div className="col-span-2 sm:col-span-1">
            <dt className="site-label">Tags</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        {related.length > 0 && (
          <section className="site-divider mt-12 pt-8">
            <p className="site-label mb-4">More projects</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={projectPath(item.slug)}
                    className="group flex items-center gap-3 rounded-lg border border-border px-3 py-3 transition-colors hover:bg-muted/30"
                  >
                    {item.logo && (
                      <OrgLogo
                        src={item.logo}
                        alt={item.name}
                        size="sm"
                        shape={item.logoShape}
                      />
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <Footer />
    </SiteShell>
  );
}
