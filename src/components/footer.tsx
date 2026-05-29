import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-divider site-footer px-6 py-8 md:px-8">
      <div className="flex flex-col items-start justify-between gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>© {year} {site.name}</p>
        <p className="text-xs">
          Built with Next.js ·{" "}
          <a
            href={site.github}
            className="site-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            source
          </a>
        </p>
      </div>
    </footer>
  );
}
