# Graph Report - portfolio-sam  (2026-07-01)

## Corpus Check
- 37 files · ~90,666 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 212 nodes · 353 edges · 18 communities (12 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e2cc10b4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]

## God Nodes (most connected - your core abstractions)
1. `site` - 18 edges
2. `projectPath()` - 11 edges
3. `Components` - 8 edges
4. `Section()` - 7 edges
5. `OrgLogo()` - 7 edges
6. `allProjects` - 7 edges
7. `GitHubIcon()` - 6 edges
8. `Portfolio brand` - 6 edges
9. `XIcon()` - 5 edges
10. `featuredProjects` - 5 edges

## Surprising Connections (you probably didn't know these)
- `projectToItem()` --calls--> `projectPath()`  [EXTRACTED]
  src/components/command-palette.tsx → src/lib/site.ts
- `generateMetadata()` --calls--> `getProjectBySlug()`  [EXTRACTED]
  src/app/projects/[slug]/page.tsx → src/lib/site.ts
- `generateMetadata()` --calls--> `projectPath()`  [EXTRACTED]
  src/app/projects/[slug]/page.tsx → src/lib/site.ts
- `ProjectPage()` --calls--> `getProjectBySlug()`  [EXTRACTED]
  src/app/projects/[slug]/page.tsx → src/lib/site.ts
- `ProjectPage()` --calls--> `projectPath()`  [EXTRACTED]
  src/app/projects/[slug]/page.tsx → src/lib/site.ts

## Communities (18 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (7): code:bash (npm install), code:bash (npm run build), Customize, Deploy, Develop, Links, Sam — Developer Portfolio

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (16): Avatar(), channels, links, nav, SocialPills(), HeroToolbar(), GitHubIcon(), XIcon() (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (8): geistMono, geistSans, inter, metadata, size, Footer(), site, metadata

### Community 3 - "Community 3"
Cohesion: 0.13
Nodes (14): allItems, CommandPaletteTrigger(), linkItems, PaletteItem, sectionItems, Work(), allProjects, Experience (+6 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (13): Always dark, Card rarity, Code, Core brand, Dark, Light (default), Palette, PikaVault brand palette (portfolio) (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.4
Nodes (4): Palette(), paletteSwatches, PikavaultColor, pikavaultPalette

### Community 6 - "Community 6"
Cohesion: 0.22
Nodes (9): CommandPalette(), CursorSpotlight(), Header(), buildMandalaDots(), Dot, mandalaDots, polar(), ring() (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.14
Nodes (14): About(), Contact(), Experience(), githubGraphUrl(), Hero(), JsonLd(), Projects(), Proof() (+6 more)

### Community 14 - "Community 14"
Cohesion: 0.05
Nodes (38): Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors, Components (+30 more)

### Community 15 - "Community 15"
Cohesion: 0.12
Nodes (18): projectToItem(), featuredNames, FeaturedProjects(), ProjectRow(), repoFromHref(), Tab, OrgLogo(), OrgLogoProps (+10 more)

## Knowledge Gaps
- **78 isolated node(s):** `config`, `eslintConfig`, `nextConfig`, `size`, `size` (+73 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `site` connect `Community 2` to `Community 1`, `Community 3`, `Community 7`, `Community 15`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Why does `projectPath()` connect `Community 15` to `Community 2`, `Community 3`, `Community 7`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `config`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _78 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._
- **Should `Community 7` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._