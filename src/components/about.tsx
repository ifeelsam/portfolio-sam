import { Section } from "@/components/section";
import { site, stack } from "@/lib/site";

export function About() {
  return (
    <Section
      id="about"
      label="04 — About"
      title="How I work"
      className="site-divider px-6 md:px-8"
    >
      <div className="space-y-4 site-body max-w-xl">
        <p>
          I&apos;m Sam — building in public as{" "}
          <a
            href={site.x}
            className="site-link font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            @{site.handle}
          </a>
          . I gravitate toward hard problems: privacy-preserving finance, agent
          observability on chain, and interfaces that feel intentional.
        </p>
        <p>
          I ship with TypeScript and Next.js first, and go deeper into Kotlin or
          Rust when the product demands it. Less noise, more finished work.
        </p>
      </div>

      <div className="mt-8">
        <p className="site-label mb-3">Stack</p>
        <ul className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
