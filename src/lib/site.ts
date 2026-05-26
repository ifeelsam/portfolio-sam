export const site = {
  name: "Sam",
  handle: "ifeelsam",
  title: "Developer & Builder",
  tagline:
    "I build products at the intersection of web3, AI agents, and polished interfaces — from privacy-first APIs to Android apps and on-chain tooling.",
  github: "https://github.com/ifeelsam",
  x: "https://x.com/ifeelsam",
  repoCount: 103,
  memberSince: "2023",
} as const;

export type Project = {
  name: string;
  description: string;
  href: string;
  demo?: string;
  language?: string;
  tags: string[];
};

export const featuredProjects: Project[] = [
  {
    name: "CipherScore",
    description:
      "Decentralized, privacy-first credit scoring API — verifiable scores without exposing raw financial data.",
    href: "https://github.com/ifeelsam/CipherScore",
    demo: "https://cipherscore.xyz",
    language: "TypeScript",
    tags: ["Web3", "Privacy", "API"],
  },
  {
    name: "Pika Vault",
    description:
      "Frontend for a vault product — wallet flows, deposits, and a production-ready web experience.",
    href: "https://github.com/ifeelsam/pika-fe",
    demo: "https://www.pikavault.xyz",
    language: "TypeScript",
    tags: ["DeFi", "Next.js"],
  },
  {
    name: "Vynix",
    description:
      "RWA marketplace for collectibles — tokenized assets with a modern trading UI.",
    href: "https://github.com/ifeelsam/Vynix",
    demo: "https://vynix-prod.vercel.app",
    language: "TypeScript",
    tags: ["RWA", "Marketplace"],
  },
  {
    name: "Tracer",
    description:
      "Production-grade observability and debugging for TypeScript AI agents running on EVM chains.",
    href: "https://github.com/ifeelsam/Tracer",
    language: "TypeScript",
    tags: ["AI Agents", "EVM", "Observability"],
  },
  {
    name: "OuterTune",
    description:
      "Material 3 music player for Android with local files and YouTube Music support. Forked from InnerTune.",
    href: "https://github.com/ifeelsam/OuterTune",
    language: "Kotlin",
    tags: ["Android", "Open Source"],
  },
  {
    name: "Oliver",
    description: "Web3 platform built on Arc Network.",
    href: "https://github.com/ifeelsam/oliver",
    language: "TypeScript",
    tags: ["Web3", "Arc"],
  },
  {
    name: "Kord",
    description: "Protocol documentation and developer experience site.",
    href: "https://github.com/ifeelsam/Kord-docs",
    demo: "https://kord-protocol.vercel.app",
    language: "TypeScript",
    tags: ["Docs", "Protocol"],
  },
  {
    name: "Wisp",
    description: "Lightweight web app with a focused, minimal UX.",
    href: "https://github.com/ifeelsam/wisp",
    demo: "https://whispx.vercel.app",
    language: "TypeScript",
    tags: ["Product", "Web"],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Web3 & Backend",
    items: ["EVM", "Solana", "API Design", "Privacy / ZK patterns"],
  },
  {
    category: "Systems",
    items: ["Kotlin / Android", "Rust", "Node.js"],
  },
  {
    category: "Focus areas",
    items: ["AI agent tooling", "DeFi & vaults", "Developer experience"],
  },
];
