import { skills } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t-[3px] border-pv-pink py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="pv-label">About</p>
            <h2 className="pv-heading mt-3 text-3xl text-foreground md:text-4xl">
              How I work
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Sam — building in public as{" "}
                <span className="font-bold text-pv-yellow">@ifeelsam</span> on
                GitHub and X. I gravitate toward hard problems: privacy-preserving
                finance, agent observability on chain, and interfaces with
                neo-brutalist energy (like{" "}
                <a
                  href="https://www.pikavault.xyz/"
                  className="font-bold text-pv-cyan hover:text-pv-yellow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PikaVault
                </a>
                ).
              </p>
              <p>
                Recent work spans CipherScore (decentralized credit scoring),
                vault and RWA frontends, Android with OuterTune, and tooling
                like Tracer for debugging AI agents on EVM. I ship with
                TypeScript and Next.js first, and go deeper into Kotlin or Rust
                when the product demands it.
              </p>
            </div>
          </div>

          <div className="pv-box pv-box-pink p-6">
            <h3 className="pv-label text-pv-pink">Skills & focus</h3>
            <ul className="mt-6 space-y-6">
              {skills.map((group) => (
                <li key={group.category}>
                  <p className="font-display text-sm uppercase tracking-wide text-pv-yellow">
                    {group.category}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-2 border-border bg-muted/40 px-3 py-1.5 text-sm font-bold text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
