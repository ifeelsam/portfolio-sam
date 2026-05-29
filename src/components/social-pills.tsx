"use client";

import { GitHubIcon, XIcon } from "@/components/icons";
import { socialProfiles, type SocialProfile } from "@/lib/site";
import { MapPin } from "lucide-react";
import Image from "next/image";

const icons = {
  GitHub: GitHubIcon,
  X: XIcon,
} as const;

function SocialHoverCard({ profile }: { profile: SocialProfile }) {
  const Icon = icons[profile.platform];

  return (
    <div className="group/social relative">
      <a
        href={profile.href}
        target="_blank"
        rel="noopener noreferrer"
        className="site-pill"
        aria-describedby={`social-card-${profile.handle}-${profile.platform}`}
      >
        <Icon className="h-3.5 w-3.5" />
        {profile.platform}
      </a>

      <div
        id={`social-card-${profile.handle}-${profile.platform}`}
        role="tooltip"
        className="site-social-popover pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover/social:pointer-events-auto group-hover/social:opacity-100 group-focus-within/social:pointer-events-auto group-focus-within/social:opacity-100"
      >
        <div className="site-social-card w-[17.5rem] rounded-xl border border-border bg-card p-4 shadow-xl shadow-[hsl(0_0%_0%/var(--shadow-strength))]">
          <div className="flex items-start gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border">
              <Image
                src={profile.avatar}
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 pt-0.5">
              <p className="truncate font-bold text-foreground">
                {profile.name}
              </p>
              <p className="truncate text-sm text-muted-foreground">
                {profile.handle}
              </p>
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          {profile.location && (
            <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {profile.location}
            </p>
          )}

          {profile.stats && profile.stats.length > 0 && (
            <dl className="mt-4 flex gap-6 border-t border-border pt-4">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-sm font-bold text-foreground">
                    {stat.value}{" "}
                    <span className="font-normal text-muted-foreground">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}

export function SocialPills() {
  return (
    <div className="flex flex-wrap gap-2">
      {socialProfiles.map((profile) => (
        <SocialHoverCard key={profile.platform} profile={profile} />
      ))}
    </div>
  );
}
