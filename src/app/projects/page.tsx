import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/footer";
import { OrgLogo } from "@/components/org-logo";
import { SiteShell } from "@/components/site-shell";
import { allProjects, projectPath, site } from "@/lib/site";

const description =
  "Projects by Sam (@ifeelsam) — full-stack Solana engineering, AI agent observability, privacy-preserving finance, and open source.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects · Sam (@${site.handle})`,
    description,
    url: `${site.url}/projects`,
    siteName: "Sam — ifeelsam",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects · Sam (@${site.handle})`,
    description,
    creator: "@ifeelsam",
  },
};

export default function ProjectsIndexPage() {
  return (
    <SiteShell>
      <section className="px-6 py-10 md:px-8 md:py-12">
        <Link
          href="/"
          className="site-link inline-flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>

        <header className="mb-8 mt-8">
          <p className="site-label">All work</p>
          <h1 className="site-section-title mt-2">Projects</h1>
          <p className="site-body mt-3 max-w-lg">{description}</p>
        </header>

        <ul className="divide-y divide-border rounded-xl border border-border">
          {allProjects.map((project) => (
            <li key={project.slug}>
              <Link
                href={projectPath(project.slug)}
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
                  <span className="font-medium text-foreground">{project.name}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </span>
                </span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </SiteShell>
  );
}
