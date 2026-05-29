# Portfolio brand

Cal.com–inspired clean SaaS surface — white canvas, near-black primary actions, light-gray cards, and a dark footer anchor. Based on `Design.md`.

## Palette

### Light (default)

| Token | Value | Usage |
|-------|-------|--------|
| Canvas | `#ffffff` | Page background |
| Ink | `#111111` | Headlines, primary text, CTAs |
| Body | `#374151` | Running copy |
| Muted | `#6b7280` | Labels, secondary text |
| Surface card | `#f5f5f5` | Cards, feature blocks |
| Surface soft | `#f8f9fa` | Nav pill groups, soft fills |
| Hairline | `#e5e7eb` | Borders, dividers |
| Success / Live | `#10b981` | Status badge |
| Brand accent | `#3b82f6` | Inline links (sparingly) |

### Dark

| Token | Value | Usage |
|-------|-------|--------|
| Canvas | `#101010` | Page background |
| Card | `#1a1a1a` | Main content shell |
| Ink | `#fafafa` | Headlines, primary text |
| Muted | `#a1a1aa` | Secondary text |
| Primary CTA | `#fafafa` on `#111111` text | Inverted for contrast |

### Always dark

| Token | Value | Usage |
|-------|-------|--------|
| Footer | `#101010` | Footer band on every theme |
| On dark soft | `#a1a1aa` | Footer body copy |

## Typography

- **Sans / Display:** Inter — body, UI, and display substitute for Cal Sans
- Display: weight 600, negative letter-spacing (-0.03em to -0.04em)
- Body: weight 400, 15px base

## Shapes

- Buttons & inputs: 8px (`rounded-md`)
- Content cards: 12px (`rounded-xl`)
- Pills & avatars: full radius

## Voice

- Direct, first-person
- Numbered sections guide the reader: Proof → Work → Experience → About → Contact
- One hero project, then tiered depth

## Code

- CSS variables & theme: `src/app/globals.css`
- Theme toggle: `src/components/theme-toggle.tsx`
- Content & structure: `src/lib/site.ts`
