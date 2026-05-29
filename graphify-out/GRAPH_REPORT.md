# Graph Report - portfolio-sam  (2026-05-29)

## Corpus Check
- 28 files · ~11,354 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 181 nodes · 277 edges · 15 communities (11 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4f561b08`
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

## God Nodes (most connected - your core abstractions)
1. `site` - 10 edges
2. `Components` - 8 edges
3. `Section()` - 7 edges
4. `Portfolio brand` - 6 edges
5. `GitHubIcon()` - 5 edges
6. `XIcon()` - 5 edges
7. `OrgLogo()` - 5 edges
8. `Sam — Developer Portfolio` - 5 edges
9. `Colors` - 5 edges
10. `Typography` - 5 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (15 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (7): code:bash (npm install), code:bash (npm run build), Customize, Deploy, Develop, Links, Sam — Developer Portfolio

### Community 1 - "Community 1"
Cohesion: 0.13
Nodes (15): Avatar(), channels, links, nav, SocialPills(), HeroToolbar(), GitHubIcon(), XIcon() (+7 more)

### Community 2 - "Community 2"
Cohesion: 0.33
Nodes (4): geistMono, geistSans, inter, metadata

### Community 3 - "Community 3"
Cohesion: 0.1
Nodes (20): About(), allItems, CommandPaletteTrigger(), linkItems, PaletteItem, sectionItems, Work(), allProjects (+12 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (13): Always dark, Card rarity, Code, Core brand, Dark, Light (default), Palette, PikaVault brand palette (portfolio) (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.16
Nodes (10): Contact(), FeaturedProjects(), Footer(), Hero(), Palette(), Projects(), paletteSwatches, PikavaultColor (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.2
Nodes (10): CommandPalette(), CursorSpotlight(), Header(), buildMandalaDots(), Dot, mandalaDots, polar(), ring() (+2 more)

### Community 7 - "Community 7"
Cohesion: 0.16
Nodes (12): Experience(), githubGraphUrl(), ProjectRow(), repoFromHref(), Tab, OrgLogo(), OrgLogoProps, sizes (+4 more)

### Community 14 - "Community 14"
Cohesion: 0.05
Nodes (38): Border Radius Scale, Brand & Accent, Breakpoints, Buttons, Cards & Containers, Collapsing Strategy, Colors, Components (+30 more)

## Knowledge Gaps
- **71 isolated node(s):** `config`, `eslintConfig`, `nextConfig`, `inter`, `metadata` (+66 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `site` connect `Community 1` to `Community 3`, `Community 5`, `Community 7`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `config`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _71 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 14` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._