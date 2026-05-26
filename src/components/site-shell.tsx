import { Header } from "@/components/header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-dot-grid min-h-full px-4 py-6 md:px-6 md:py-10">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
