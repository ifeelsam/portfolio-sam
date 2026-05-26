import { CommandPalette } from "@/components/command-palette";
import { Header } from "@/components/header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommandPalette />
      <div className="site-dot-grid relative z-10 min-h-full px-4 py-6 md:pb-6 md:pt-[30dvh] md:min-h-dvh md:px-6 md:pb-10 md:pt-[30dvh]">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
