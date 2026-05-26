import { paletteSwatches } from "@/lib/pikavault-palette";

export function Palette() {
  return (
    <section
      id="palette"
      className="scroll-mt-24 border-t-[3px] border-pv-green-alt py-16 md:py-20"
      aria-labelledby="palette-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="pv-label text-pv-green-alt">Design system</p>
        <h2
          id="palette-heading"
          className="pv-heading mt-3 text-2xl text-foreground md:text-3xl"
        >
          PikaVault palette
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Colors from{" "}
          <a
            href="https://github.com/ifeelsam/pika-fe"
            className="font-bold text-pv-yellow hover:text-pv-cyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            pika-fe
          </a>{" "}
          — brand, semantic tokens, and card rarity tiers.
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {paletteSwatches.map((swatch) => (
            <li key={swatch.hex}>
              <div
                className="border-[3px] border-border bg-pv-dark p-3 transition-colors hover:border-pv-yellow"
                style={{ boxShadow: `4px 4px 0 ${swatch.hex}33` }}
              >
                <div
                  className="aspect-square w-full border-2 border-foreground/20"
                  style={{ backgroundColor: swatch.hex }}
                  role="img"
                  aria-label={`${swatch.name} ${swatch.hex}`}
                />
                <p className="mt-3 font-display text-[0.65rem] uppercase tracking-wide text-foreground">
                  {swatch.name}
                </p>
                <p className="font-mono text-xs text-pv-cyan">{swatch.hex}</p>
                <p className="mt-1 text-[0.65rem] leading-snug text-muted-foreground">
                  {swatch.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
