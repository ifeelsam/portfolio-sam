import { GitHubIcon, XIcon } from "@/components/icons";
import { site } from "@/lib/site";

const links = [
  {
    label: "GitHub",
    href: site.github,
    description: `${site.repoCount}+ public repositories`,
    icon: GitHubIcon,
    accent: "border-pv-yellow hover:text-pv-yellow",
  },
  {
    label: "X (Twitter)",
    href: site.x,
    description: `@${site.handle}`,
    icon: XIcon,
    accent: "border-pv-cyan hover:text-pv-cyan",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden border-[3px] border-pv-yellow bg-pv-dark p-8 md:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-20 pv-grid-bg"
            aria-hidden
          />
          <p className="pv-label">Contact</p>
          <h2 className="pv-heading mt-3 text-3xl text-foreground md:text-4xl">
            Let&apos;s build
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Open to collaborations, hackathons, and interesting product work.
            Reach out on X or explore the code on GitHub.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 border-[3px] bg-muted/20 p-5 transition-colors ${link.accent}`}
                  style={{ boxShadow: "4px 4px 0 hsl(var(--border))" }}
                >
                  <span className="flex h-11 w-11 items-center justify-center border-2 border-current">
                    <link.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-sm uppercase text-foreground">
                      {link.label}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {link.description}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-muted-foreground">
            Full color reference in{" "}
            <a href="#palette" className="font-bold text-pv-cyan hover:text-pv-yellow">
              palette
            </a>{" "}
            · theme from{" "}
            <a
              href="https://www.pikavault.xyz/"
              className="font-bold text-pv-yellow hover:text-pv-cyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              PikaVault
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
