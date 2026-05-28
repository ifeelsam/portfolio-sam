# Graph Report - portfolio-sam  (2026-05-28)

## Corpus Check
- 26 files · ~7,700 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 129 nodes · 219 edges · 15 communities (11 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f5cd0eb2`
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
- [[_COMMUNITY_Community 15|Community 15]]

## God Nodes (most connected - your core abstractions)
1. `site` - 10 edges
2. `Section()` - 7 edges
3. `GitHubIcon()` - 5 edges
4. `XIcon()` - 5 edges
5. `OrgLogo()` - 5 edges
6. `Portfolio brand` - 5 edges
7. `Sam — Developer Portfolio` - 5 edges
8. `PikaVault brand palette (portfolio)` - 5 edges
9. `featuredProjects` - 4 edges
10. `Header()` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (15 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (7): code:bash (npm install), code:bash (npm run build), Customize, Deploy, Develop, Links, Sam — Developer Portfolio

### Community 1 - "Community 1"
Cohesion: 0.15
Nodes (15): Avatar(), channels, links, nav, SocialPills(), GitHubIcon(), XIcon(), ScrollProgress() (+7 more)

### Community 2 - "Community 2"
Cohesion: 0.4
Nodes (3): geistMono, geistSans, metadata

### Community 3 - "Community 3"
Cohesion: 0.15
Nodes (9): allItems, CommandPaletteTrigger(), linkItems, PaletteItem, sectionItems, Work(), featuredHero, featuredSecondary (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.22
Nodes (9): Card rarity, Code, Core brand, Palette, PikaVault brand palette (portfolio), Portfolio brand, Semantic (shadcn), Typography (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.21
Nodes (7): Contact(), Footer(), Hero(), Palette(), paletteSwatches, PikavaultColor, pikavaultPalette

### Community 6 - "Community 6"
Cohesion: 0.23
Nodes (9): CommandPalette(), CursorSpotlight(), Header(), buildMandalaDots(), Dot, mandalaDots, polar(), ring() (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.15
Nodes (14): About(), Experience(), Projects(), Proof(), Section(), SectionProps, Experience, experiences (+6 more)

### Community 15 - "Community 15"
Cohesion: 0.2
Nodes (9): FeaturedProjects(), ProjectRow(), repoFromHref(), Tab, OrgLogo(), OrgLogoProps, sizes, allProjects (+1 more)

## Knowledge Gaps
- **36 isolated node(s):** `config`, `eslintConfig`, `nextConfig`, `metadata`, `Tab` (+31 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `site` connect `Community 1` to `Community 3`, `Community 5`, `Community 7`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `OrgLogo()` connect `Community 15` to `Community 1`, `Community 3`, `Community 7`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Why does `Section()` connect `Community 7` to `Community 1`, `Community 3`, `Community 15`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `config`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._