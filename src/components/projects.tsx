import { featuredProjects } from "@/lib/site";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 border-t-[3px] border-pv-cyan py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="pv-label">Selected work</p>
          <h2 className="pv-heading mt-3 text-3xl text-foreground md:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            A sample of what I&apos;ve shipped — DeFi, privacy tooling, AI
            observability, and mobile. More on{" "}
            <a
              href="https://github.com/ifeelsam"
              className="font-bold text-pv-yellow underline-offset-4 hover:text-pv-cyan hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => {
            const borderClass = [
              "pv-border-legendary hover:border-pv-cyan",
              "pv-border-rare hover:border-pv-pink",
              "pv-border-epic hover:border-pv-yellow",
              "pv-border-uncommon hover:border-pv-orange",
              "pv-border-ultra hover:border-pv-green-alt",
              "pv-border-common hover:border-pv-cyan",
            ][i % 6];

            return (
            <li key={project.name}>
              <article
                className={`group flex h-full flex-col border-[3px] bg-pv-dark p-6 transition-colors pv-card-hover ${borderClass}`}
                style={{
                  boxShadow: `6px 6px 0 ${["#f6ff00", "#00f5ff", "#ff2d55", "#00ff88", "#ff6b35", "#ffffff"][i % 6]}22`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg uppercase tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 border-2 border-transparent p-1 text-muted-foreground transition-colors group-hover:border-pv-yellow group-hover:text-pv-yellow"
                    aria-label={`${project.name} on GitHub`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.language && (
                    <span className="border border-pv-yellow bg-pv-yellow/10 px-2 py-0.5 font-display text-[0.6rem] uppercase tracking-wider text-pv-yellow">
                      {project.language}
                    </span>
                  )}
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2 py-0.5 text-xs font-bold uppercase text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-bold text-pv-cyan transition-colors hover:text-pv-yellow"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live demo
                  </a>
                )}
              </article>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
