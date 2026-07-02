import { CommandPalette } from "@/components/command-palette";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommandPalette />
      <div className="site-dot-grid relative z-10 min-h-full px-4 py-6 md:min-h-dvh md:px-6 md:pb-[30dvh] md:pt-[30dvh]">
        <div className="site-shell mx-auto max-w-2xl">
          <div className="site-dot-field site-dot-field-top" aria-hidden />
          <div className="site-dot-field site-dot-field-bottom" aria-hidden>
            <span className="site-dot-word">ifeelsam</span>
          </div>
          <div className="site-rail site-rail-left" aria-hidden />
          <div className="site-rail site-rail-right" aria-hidden />
          <div className="site-breakout-x site-breakout-x-top" aria-hidden />
          <div className="site-breakout-x site-breakout-x-bottom" aria-hidden />
          <div className="site-shell-surface relative rounded-xl bg-card">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
