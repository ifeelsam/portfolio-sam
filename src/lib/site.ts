export const site = {
  name: "Sam",
  handle: "ifeelsam",
  title: "Full-stack Solana engineer & builder",
  tagline:
    "I build products where privacy, on-chain systems, and polished interfaces meet — from credit scoring APIs to vault frontends and agent tooling.",
  building: {
    label: "PikaVault",
    href: "https://www.pikavault.xyz/",
    description: "vault frontend — wallet flows, deposits, production UI",
  },
  github: "https://github.com/ifeelsam",
  x: "https://x.com/ifeelsam",
  email: "mailto:hello@ifeelsam.dev",
  repoCount: 103,
  memberSince: "2023",
} as const;

export type ProjectStatus = "live" | "building" | "archived";

export type Project = {
  name: string;
  description: string;
  href: string;
  demo?: string;
  language?: string;
  tags: string[];
  status: ProjectStatus;
  highlight?: string;
};

export const featuredHero: Project = {
  name: "CipherScore",
  description:
    "Decentralized, privacy-first credit scoring — verifiable scores without exposing raw financial data.",
  href: "https://github.com/ifeelsam/CipherScore",
  demo: "https://cipherscore.xyz",
  language: "TypeScript",
  tags: ["Web3", "Privacy", "API"],
  status: "live",
  highlight: "Start here — the problem I'm most focused on solving.",
};

export const featuredSecondary: Project[] = [
  {
    name: "Pika Vault",
    description: "Vault frontend with wallet flows and production-ready deposits.",
    href: "https://github.com/ifeelsam/pika-fe",
    demo: "https://www.pikavault.xyz",
    language: "TypeScript",
    tags: ["DeFi", "Next.js"],
    status: "live",
  },
  {
    name: "Vynix",
    description: "RWA marketplace for collectibles with a modern trading UI.",
    href: "https://github.com/ifeelsam/Vynix",
    demo: "https://vynix-prod.vercel.app",
    language: "TypeScript",
    tags: ["RWA", "Marketplace"],
    status: "live",
  },
  {
    name: "Tracer",
    description: "Observability and debugging for TypeScript AI agents on EVM.",
    href: "https://github.com/ifeelsam/Tracer",
    language: "TypeScript",
    tags: ["AI Agents", "EVM"],
    status: "live",
  },
];

export const moreProjects: Project[] = [
  {
    name: "OuterTune",
    description: "Material 3 Android music player — local files and YouTube Music.",
    href: "https://github.com/ifeelsam/OuterTune",
    language: "Kotlin",
    tags: ["Android", "Open Source"],
    status: "live",
  },
  {
    name: "Oliver",
    description: "Web3 platform on Arc Network.",
    href: "https://github.com/ifeelsam/oliver",
    language: "TypeScript",
    tags: ["Web3", "Arc"],
    status: "archived",
  },
  {
    name: "Kord",
    description: "Protocol documentation and developer experience site.",
    href: "https://github.com/ifeelsam/Kord-docs",
    demo: "https://kord-protocol.vercel.app",
    language: "TypeScript",
    tags: ["Docs", "Protocol"],
    status: "live",
  },
  {
    name: "Wisp",
    description: "Lightweight web app with a focused, minimal UX.",
    href: "https://github.com/ifeelsam/wisp",
    demo: "https://whispx.vercel.app",
    language: "TypeScript",
    tags: ["Product", "Web"],
    status: "live",
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  location?: string;
  href?: string;
  detail: string;
};

export const experiences: Experience[] = [
  {
    org: "Superteam",
    role: "Member · 2× grant recipient",
    period: "2024 — Present",
    location: "Remote",
    href: "https://superteam.fun",
    detail:
      "Active in the Solana ecosystem through projects, collaborations, and community initiatives — awarded two Superteam grants.",
  },
  {
    org: "Solana Turbin3",
    role: "Cohort graduate",
    period: "2024",
    location: "Remote",
    href: "https://turbin3.org",
    detail:
      "Completed the Turbin3 builder cohort — Solana architecture, runtime internals, and shipping to mainnet.",
  },
  {
    org: "PikaVault",
    role: "Frontend engineer",
    period: "2024 — Present",
    location: "Remote",
    href: "https://www.pikavault.xyz/",
    detail:
      "Wallet flows, deposit UX, and a production Next.js frontend for a live vault product.",
  },
  {
    org: "CipherScore",
    role: "Founding builder",
    period: "2024 — Present",
    location: "Remote",
    href: "https://cipherscore.xyz",
    detail:
      "Privacy-first credit scoring API — verifiable scores without exposing raw financial data.",
  },
  {
    org: "Open source",
    role: "Maintainer & contributor",
    period: "2023 — Present",
    location: "Remote",
    href: "https://github.com/ifeelsam",
    detail:
      "103+ public repos spanning DeFi, AI agent observability, Android (OuterTune), and protocol docs.",
  },
];

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Solana",
  "EVM",
  "Kotlin",
  "Rust",
  "Tailwind",
] as const;

export const proofStats = [
  { label: "Public repos", value: "103+" },
  { label: "GitHub since", value: site.memberSince },
  { label: "Live demos", value: "6" },
] as const;
