/**
 * PikaVault color palette — sourced from ifeelsam/pika-fe + pikavault.xyz
 * @see app/globals.css for CSS variables
 * @see tailwind.config.ts in pika-fe
 */

export const pikavaultPalette = {
  /** Core brand (tailwind `pikavault.*`) */
  brand: {
    yellow: "#F6FF00",
    pink: "#FF2D55",
    cyan: "#00F5FF",
    dark: "#0A0A0A",
  },

  /** shadcn / app globals.css HSL tokens */
  semantic: {
    background: "#0A0A0A",
    foreground: "#FFFFFF",
    primary: "#F6FF00",
    primaryForeground: "#0A0A0A",
    secondary: "#FF2D55",
    secondaryForeground: "#FFFFFF",
    accent: "#00F5FF",
    accentForeground: "#0A0A0A",
    muted: "#262626",
    mutedForeground: "#B3B3B3",
    border: "#333333",
    destructive: "#FF0000",
  },

  /** Card rarity borders (components/pika-card.tsx) */
  rarity: {
    common: "#FFFFFF",
    uncommon: "#00FF88",
    rare: "#00F5FF",
    epic: "#FF2D55",
    ultraRare: "#FF6B35",
    legendary: "#F6FF00",
  },

  /** UI accents (globals.css cursors, process steps) */
  ui: {
    green: "#00FF85",
    greenAlt: "#00FF88",
    orange: "#FF6B35",
    black: "#000000",
    white: "#FFFFFF",
  },
} as const;

/** Flat list for swatches / docs */
export const paletteSwatches = [
  { name: "Yellow", role: "Primary / Legendary", hex: pikavaultPalette.brand.yellow },
  { name: "Cyan", role: "Accent / Rare", hex: pikavaultPalette.brand.cyan },
  { name: "Pink", role: "Secondary / Epic", hex: pikavaultPalette.brand.pink },
  { name: "Green", role: "Process / Uncommon", hex: pikavaultPalette.ui.greenAlt },
  { name: "Orange", role: "Ultra Rare", hex: pikavaultPalette.ui.orange },
  { name: "Dark", role: "Background", hex: pikavaultPalette.brand.dark },
  { name: "White", role: "Foreground / Common", hex: pikavaultPalette.ui.white },
  { name: "Border", role: "Borders & chrome", hex: pikavaultPalette.semantic.border },
  { name: "Muted", role: "Surfaces", hex: pikavaultPalette.semantic.muted },
] as const;

export type PikavaultColor = keyof typeof pikavaultPalette.brand;
