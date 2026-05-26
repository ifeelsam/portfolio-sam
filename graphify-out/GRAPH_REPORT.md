# Graph Report - portfolio-sam  (2026-05-26)

## Corpus Check
- 20 files · ~3,015 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 59 nodes · 75 edges · 12 communities (8 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `88e4b97e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `site` - 5 edges
2. `PikaVault brand palette (portfolio)` - 5 edges
3. `Sam — Developer Portfolio` - 5 edges
4. `GitHubIcon()` - 4 edges
5. `XIcon()` - 3 edges
6. `Projects()` - 2 edges
7. `Hero()` - 2 edges
8. `Palette()` - 2 edges
9. `Contact()` - 2 edges
10. `Footer()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (12 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (7): code:bash (npm install), code:bash (npm run build), Customize, Deploy, Develop, Links, Sam — Developer Portfolio

### Community 1 - "Community 1"
Cohesion: 0.36
Nodes (6): links, Header(), nav, GitHubIcon(), XIcon(), site

### Community 2 - "Community 2"
Cohesion: 0.4
Nodes (3): geistMono, geistSans, metadata

### Community 3 - "Community 3"
Cohesion: 0.22
Nodes (8): About(), Contact(), Footer(), Hero(), Projects(), featuredProjects, Project, skills

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (5): Card rarity, Code, Core brand, PikaVault brand palette (portfolio), Semantic (shadcn)

### Community 5 - "Community 5"
Cohesion: 0.4
Nodes (4): Palette(), paletteSwatches, PikavaultColor, pikavaultPalette

## Knowledge Gaps
- **20 isolated node(s):** `config`, `eslintConfig`, `nextConfig`, `metadata`, `links` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `config`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._