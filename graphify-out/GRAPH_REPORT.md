# Graph Report - portfolio-sam  (2026-05-27)

## Corpus Check
- 26 files · ~7,209 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 109 nodes · 175 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4b277412`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 15|Community 15]]

## God Nodes (most connected - your core abstractions)
1. `site` - 9 edges
2. `Section()` - 6 edges
3. `Portfolio brand` - 5 edges
4. `Sam — Developer Portfolio` - 5 edges
5. `PikaVault brand palette (portfolio)` - 5 edges
6. `GitHubIcon()` - 4 edges
7. `XIcon()` - 4 edges
8. `OrgLogo()` - 4 edges
9. `Header()` - 3 edges
10. `featuredHero` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (14 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (7): code:bash (npm install), code:bash (npm run build), Customize, Deploy, Develop, Links, Sam — Developer Portfolio

### Community 1 - "Community 1"
Cohesion: 0.19
Nodes (12): Avatar(), channels, Contact(), links, nav, SocialPills(), GitHubIcon(), XIcon() (+4 more)

### Community 2 - "Community 2"
Cohesion: 0.4
Nodes (3): geistMono, geistSans, metadata

### Community 3 - "Community 3"
Cohesion: 0.22
Nodes (7): allItems, CommandPalette(), CommandPaletteTrigger(), linkItems, PaletteItem, sectionItems, featuredSecondary

### Community 4 - "Community 4"
Cohesion: 0.22
Nodes (9): Card rarity, Code, Core brand, Palette, PikaVault brand palette (portfolio), Portfolio brand, Semantic (shadcn), Typography (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.15
Nodes (11): CursorSpotlight(), Footer(), Header(), Hero(), Palette(), Projects(), SiteShell(), paletteSwatches (+3 more)

### Community 7 - "Community 7"
Cohesion: 0.15
Nodes (13): About(), Proof(), Section(), SectionProps, Work(), Experience, featuredHero, moreProjects (+5 more)

### Community 15 - "Community 15"
Cohesion: 0.29
Nodes (5): Experience(), OrgLogo(), OrgLogoProps, sizes, experiences

## Knowledge Gaps
- **32 isolated node(s):** `config`, `eslintConfig`, `nextConfig`, `metadata`, `channels` (+27 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `site` connect `Community 1` to `Community 3`, `Community 5`, `Community 7`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `config`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _32 weakly-connected nodes found - possible documentation gaps or missing edges._