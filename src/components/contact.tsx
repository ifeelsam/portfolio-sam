import { GitHubIcon, XIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { site } from "@/lib/site";
import { Mail } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: "sanskarsharma9005@gmail.com",
    href: site.email,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: `@${site.handle} · ${site.repoCount}+ repos`,
    href: site.github,
    icon: GitHubIcon,
  },
  {
    label: "X",
    value: `@${site.handle}`,
    href: site.x,
    icon: XIcon,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's build"
      intro="Open to collaborations, hackathons, and interesting product work."
      className="site-divider px-6 md:px-8"
    >
      <ul className="divide-y divide-border rounded-xl border border-border">
        {channels.map((channel) => (
          <li key={channel.label}>
            <a
              href={channel.href}
              target={channel.label === "Email" ? undefined : "_blank"}
              rel={
                channel.label === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/20"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors group-hover:text-foreground">
                <channel.icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-medium text-foreground">
                  {channel.label}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {channel.value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
