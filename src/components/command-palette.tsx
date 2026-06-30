"use client";

import {
  allProjects,
  featuredProjects,
  projectPath,
  site,
} from "@/lib/site";
import { ArrowUpRight, Mail, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type PaletteItem = {
  id: string;
  label: string;
  hint?: string;
  href: string;
  external?: boolean;
  /** Internal app route — navigated via the router rather than hash scroll. */
  route?: boolean;
  group: string;
};

const sectionItems: PaletteItem[] = [
  {
    id: "experience",
    label: "Experience",
    hint: "Background & GitHub activity",
    href: "#experience",
    group: "Sections",
  },
  {
    id: "projects",
    label: "Projects",
    hint: "Featured work",
    href: "#projects",
    group: "Sections",
  },
  { id: "about", label: "About", hint: "How I work", href: "#about", group: "Sections" },
  { id: "contact", label: "Contact", hint: "Get in touch", href: "#contact", group: "Sections" },
];

const linkItems: PaletteItem[] = [
  { id: "github", label: "GitHub", hint: site.handle, href: site.github, external: true, group: "Links" },
  { id: "x", label: "X", hint: `@${site.handle}`, href: site.x, external: true, group: "Links" },
  { id: "email", label: "Email", hint: "Send a message", href: site.email, group: "Links" },
  {
    id: "mortem-labs",
    label: "Mortem Labs",
    hint: "Currently building",
    href: site.building.href,
    external: true,
    group: "Links",
  },
];

function projectToItem(project: (typeof featuredProjects)[number]): PaletteItem {
  return {
    id: project.slug,
    label: project.name,
    hint: project.tags.slice(0, 2).join(" · "),
    href: projectPath(project.slug),
    route: true,
    group: "Projects",
  };
}

const allItems: PaletteItem[] = [
  ...sectionItems,
  ...allProjects.map(projectToItem),
  ...linkItems,
];

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;
    return allItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint?.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q),
    );
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, PaletteItem[]>();
    for (const item of filtered) {
      const list = map.get(item.group) ?? [];
      list.push(item);
      map.set(item.group, list);
    }
    return map;
  }, [filtered]);

  const flatFiltered = filtered;

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery("");
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        if (!open) {
          setQuery("");
          setActiveIndex(0);
        }
        return;
      }

      if (e.key === "/" && !open) {
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
          return;
        }
        e.preventDefault();
        openPalette();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, openPalette]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }

      if (flatFiltered.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % flatFiltered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + flatFiltered.length) % flatFiltered.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = flatFiltered[activeIndex];
        if (item) {
          if (item.external) {
            window.open(item.href, "_blank", "noopener,noreferrer");
          } else if (item.route) {
            router.push(item.href);
          } else {
            document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
          }
          close();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, flatFiltered, activeIndex, close, router]);

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  if (!open) return null;

  let runningIndex = 0;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-[hsl(var(--overlay)/0.45)] px-4 pt-[min(20vh,8rem)] backdrop-blur-sm"
      onClick={close}
      role="presentation"
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-[hsl(0_0%_0%/var(--shadow-strength))]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to section, project, or link…"
            className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            aria-autocomplete="list"
            aria-controls="command-palette-list"
          />
          <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[0.625rem] font-medium text-muted-foreground sm:inline">
            esc
          </kbd>
        </div>

        <div
          id="command-palette-list"
          ref={listRef}
          className="max-h-72 overflow-y-auto p-2"
          role="listbox"
        >
          {flatFiltered.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">No matches</p>
          ) : (
            Array.from(grouped.entries()).map(([group, items]) => (
              <div key={group} className="mb-1">
                <p className="px-3 py-1.5 text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground">
                  {group}
                </p>
                <ul>
                  {items.map((item) => {
                    const index = runningIndex++;
                    const active = index === activeIndex;
                    return (
                      <li key={item.id} role="option" aria-selected={active}>
                        <a
                          data-index={index}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                            active
                              ? "bg-muted text-foreground"
                              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                          }`}
                          onClick={(e) => {
                            if (item.route) {
                              e.preventDefault();
                              router.push(item.href);
                            } else if (!item.external) {
                              e.preventDefault();
                              document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                            }
                            close();
                          }}
                          onMouseEnter={() => setActiveIndex(index)}
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            {item.id === "email" && <Mail className="h-3.5 w-3.5 shrink-0" />}
                            <span className="truncate font-medium">{item.label}</span>
                          </span>
                          <span className="flex shrink-0 items-center gap-2">
                            {item.hint && (
                              <span className="hidden truncate text-xs text-muted-foreground sm:inline">
                                {item.hint}
                              </span>
                            )}
                            {item.external && (
                              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                            )}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[0.625rem] text-muted-foreground">
          <span>
            <kbd className="rounded border border-border px-1 py-0.5">↑</kbd>{" "}
            <kbd className="rounded border border-border px-1 py-0.5">↓</kbd> navigate
          </span>
          <span>
            <kbd className="rounded border border-border px-1 py-0.5">↵</kbd> open
          </span>
        </div>
      </div>
    </div>
  );
}

export function CommandPaletteTrigger() {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
  }, []);

  const open = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: isMac, ctrlKey: !isMac }));
  };

  return (
    <button
      type="button"
      onClick={open}
      className="hidden items-center gap-2 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-muted-foreground hover:text-foreground md:flex"
      aria-label="Open command palette"
    >
      <Search className="h-3.5 w-3.5" />
      <span>Jump to…</span>
      <kbd className="rounded border border-border px-1 py-0.5 text-[0.625rem] font-medium">
        {isMac ? "⌘K" : "Ctrl K"}
      </kbd>
    </button>
  );
}
