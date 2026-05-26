import { SocialPills } from "@/components/header";
import { site } from "@/lib/site";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="px-6 pb-10 pt-10 md:px-8 md:pb-12 md:pt-12">
      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-lg font-bold text-foreground"
          aria-hidden
        >
          {site.name.charAt(0)}
        </div>
        <div className="min-w-0 pt-0.5">
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            {site.name}
          </h1>
          <p className="text-sm text-muted-foreground">{site.title}</p>
        </div>
      </div>

      <p className="site-body mt-8 max-w-xl">{site.tagline}</p>

      <p className="mt-5 text-sm text-muted-foreground">
        Currently building{" "}
        <a
          href={site.building.href}
          className="site-link font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.building.label}
        </a>
        <span className="text-muted-foreground/70">
          {" "}
          — {site.building.description}
        </span>
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href="#work" className="site-btn-primary">
          View selected work
          <ArrowDown className="h-4 w-4" />
        </a>
        <a href={site.email} className="site-btn-secondary">
          <Mail className="h-4 w-4" />
          Send email
        </a>
      </div>

      <div className="mt-8">
        <p className="site-label mb-3">Elsewhere</p>
        <SocialPills />
      </div>
    </section>
  );
}
