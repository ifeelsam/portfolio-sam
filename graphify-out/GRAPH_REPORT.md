# Graph Report - portfolio-sam  (2026-05-26)

## Corpus Check
- 24 files · ~5,437 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 94 nodes · 149 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `55b3e088`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]

## God Nodes (most connected - your core abstractions)
1. `site` - 8 edges
2. `Section()` - 6 edges
3. `Portfolio brand` - 5 edges
4. `Sam — Developer Portfolio` - 5 edges
5. `PikaVault brand palette (portfolio)` - 5 edges
6. `GitHubIcon()` - 4 edges
7. `XIcon()` - 4 edges
8. `OrgLogo()` - 4 edges
9. `Header()` - 3 edges
10. `Hero()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (14 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (7): code:bash (npm install), code:bash (npm run build), Customize, Deploy, Develop, Links, Sam — Developer Portfolio

### Community 1 - "Community 1"
Cohesion: 0.17
Nodes (14): Avatar(), channels, Contact(), links, Footer(), Header(), nav, SocialPills() (+6 more)

### Community 2 - "Community 2"
Cohesion: 0.4
Nodes (3): geistMono, geistSans, metadata

### Community 4 - "Community 4"
Cohesion: 0.22
Nodes (9): Card rarity, Code, Core brand, Palette, PikaVault brand palette (portfolio), Portfolio brand, Semantic (shadcn), Typography (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.4
Nodes (4): Palette(), paletteSwatches, PikavaultColor, pikavaultPalette

### Community 7 - "Community 7"
Cohesion: 0.2
Nodes (8): Projects(), Experience, featuredHero, featuredProjects, featuredSecondary, moreProjects, Project, ProjectStatus

### Community 14 - "Community 14"
Cohesion: 0.24
Nodes (7): About(), Proof(), Section(), SectionProps, proofStats, skills, stack

### Community 15 - "Community 15"
Cohesion: 0.29
Nodes (5): Experience(), OrgLogo(), OrgLogoProps, sizes, experiences

## Knowledge Gaps
- **27 isolated node(s):** `config`, `eslintConfig`, `nextConfig`, `metadata`, `channels` (+22 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `site` connect `Community 1` to `Community 14`, `Community 7`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **What connects `config`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _27 weakly-connected nodes found - possible documentation gaps or missing edges._