import { Avatar } from "@/components/avatar";
import { HeroToolbar } from "@/components/hero-toolbar";
import { OrgLogo } from "@/components/org-logo";
import { SocialPills } from "@/components/social-pills";
import { featuredProjects, site } from "@/lib/site";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-6 pb-10 pt-10 md:px-8 md:pb-5 md:pt-8">
      <HeroToolbar />
      <div className="flex items-start gap-5 pb-8">
        <Avatar />
        <div className="min-w-0 pt-1">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            {site.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{site.title}</p>
        </div>
      </div>

      <div className="site-divider pt-4 space-y-4">
        <p className="site-body max-w-xl">
          I&apos;m Sam, building in public as{" "}
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
        <p className="site-body max-w-xl">
          I'm currently building {" "}

          
          <a
            href={featuredProjects[0].x}
            className="site-link font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
          @{site.building.label}
          </a>, a platform meant to optimize agent trading decisions on Solana.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="site-btn-primary">
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
      </div>
    </section>
  );
}
