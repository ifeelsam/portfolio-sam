import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-pv-yellow py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p className="font-display text-xs uppercase tracking-widest">
          © {year} {site.name}
        </p>
        <p className="text-xs font-bold uppercase tracking-wide">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pv-cyan transition-colors hover:text-pv-yellow"
          >
            github.com/{site.handle}
          </a>
          <span className="mx-2 text-pv-pink">·</span>
          <a
            href={site.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pv-cyan transition-colors hover:text-pv-yellow"
          >
            x.com/{site.handle}
          </a>
        </p>
      </div>
    </footer>
  );
}
