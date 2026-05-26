import { Section } from "@/components/section";
import { proofStats, site } from "@/lib/site";

export function Proof() {
  return (
    <Section
      id="proof"
      label="01 — Proof"
      title="Consistency >>> Hype"
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

      <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
        {proofStats.map((stat) => (
          <div key={stat.label}>
            <dt className="site-label">{stat.label}</dt>
            <dd className="mt-1 text-lg font-bold tracking-tight text-foreground">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="site-body mt-6 text-sm">
        Full history on{" "}
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
