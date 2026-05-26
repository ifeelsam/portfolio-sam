import { GitHubIcon, XIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 pv-grid-bg" aria-hidden />
      <div className="pv-scan-line" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
            <p className="pv-label mb-4">Developer portfolio</p>
            <h1 className="pv-heading text-4xl text-foreground sm:text-5xl md:text-6xl">
              Hey, I&apos;m{" "}
              <span className="text-pv-yellow">{site.name}</span>
            </h1>
            <p className="mt-3 text-xl font-bold text-pv-cyan md:text-2xl">
              {site.title}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {site.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#work" className="pv-btn-primary">
                View work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pv-btn-outline"
              >
                <GitHubIcon className="h-4 w-4" />
                {site.repoCount}+ repos
              </a>
              <a
                href={site.x}
                target="_blank"
                rel="noopener noreferrer"
                className="pv-btn-outline"
              >
                <XIcon className="h-4 w-4" />
                @{site.handle}
              </a>
            </div>

            <dl className="mt-10 flex flex-wrap gap-6 border-t-[3px] border-border pt-8">
              {[
                { label: "GitHub since", value: site.memberSince },
                { label: "Public repos", value: String(site.repoCount) },
                { label: "Stack", value: "TS · Web3 · Android" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-[140px] border-2 border-border bg-muted/30 px-4 py-3"
                >
                  <dt className="pv-label text-[0.55rem] text-pv-pink">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-lg text-pv-yellow">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
        </div>
      </div>
    </section>
  );
}
