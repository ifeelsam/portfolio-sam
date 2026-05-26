export const site = {
  name: "Sam",
  handle: "ifeelsam",
  title: "Full-stack Solana engineer & builder",
  tagline:
    "I build products where privacy, on-chain systems, and polished interfaces meet, from agent observability on Solana to RWA and protocol tooling.",
  building: {
    label: "Mortem",
    href: "https://www.mortemlabs.com/",
    logo: "/logos/mortem.svg",
    logoShape: "square" as const,
    description:
      "catch bad agent trading decisions, trace failures, fix the logic",
  },
  github: "https://github.com/ifeelsam",
  x: "https://x.com/ifeelsam",
  avatar: "/avatar.jpg",
  email: "mailto:sanskarsharma9005@gmail.com",
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
  logo?: string;
  logoShape?: "circle" | "square";
};

export const featuredHero: Project = {
  name: "Mortem Protocol",
  description:
    "Helps Solana trading teams catch bad agent decisions, trace what caused them, and fix the logic before the same loss repeats.",
  href: "https://github.com/mortemlabs/mortem-protocol",
  demo: "https://www.mortemlabs.com",
  language: "TypeScript",
  tags: ["Solana", "AI Agents", "Protocol"],
  status: "building",
  highlight: "Start here — what I'm building right now.",
  logo: "/logos/mortem.svg",
  logoShape: "square",
};

export const featuredSecondary: Project[] = [
  {
    name: "CipherScore",
    description:
      "Decentralized, privacy-first credit scoring — verifiable scores without exposing raw financial data.",
    href: "https://github.com/ifeelsam/CipherScore",
    demo: "https://cipherscore.xyz",
    language: "TypeScript",
    tags: ["Web3", "Privacy", "API"],
    status: "live",
    logo: "/logos/cipherscore.png",
  },
  {
    name: "Pika Vault",
    description: "Vault frontend with wallet flows and production-ready deposits.",
    href: "https://github.com/ifeelsam/pika-fe",
    demo: "https://www.pikavault.xyz",
    language: "TypeScript",
    tags: ["DeFi", "Next.js"],
    status: "live",
    logo: "/logos/pikavault.png",
  },
  {
    name: "Vynix",
    description: "RWA marketplace for collectibles with a modern trading UI.",
    href: "https://github.com/ifeelsam/Vynix",
    demo: "https://vynix-prod.vercel.app",
    language: "TypeScript",
    tags: ["RWA", "Marketplace"],
    status: "live",
    logo: "/logos/vynix.png",
  },
  {
    name: "Tracer",
    description: "Observability and debugging for TypeScript AI agents on EVM.",
    href: "https://github.com/ifeelsam/Tracer",
    language: "TypeScript",
    tags: ["AI Agents", "EVM"],
    status: "live",
    logo: "/logos/github.png",
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
  logo: string;
  badge?: string;
  logoShape?: "circle" | "square";
};

export const experiences: Experience[] = [
  {
    org: "Mortem Labs",
    role: "Builder · mortem-protocol",
    period: "2025 — Present",
    location: "Remote",
    href: "https://www.mortemlabs.com",
    logo: "/logos/mortem.svg",
    badge: "Building",
    logoShape: "square",
    detail:
      "Building Mortem — agent observability for Solana trading teams. Trace bad decisions, prove root cause, patch the logic before capital gets buried.",
  },
  {
    org: "Superteam",
    role: "Member · 2× grant recipient",
    period: "2024 — Present",
    location: "Remote",
    href: "https://superteam.fun",
    logo: "/logos/superteam.png",
    badge: "2× grants",
    detail:
      "Active in the Solana ecosystem through projects, collaborations, and community initiatives — awarded two Superteam grants.",
  },
  {
    org: "Arcium",
    role: "Fellowship recipient",
    period: "Jul — Aug 2025",
    location: "Remote",
    href: "https://www.arcium.com",
    logo: "/logos/arcium.png",
    badge: "Fellowship",
    detail:
      "Selected for the Arcium Fellowship — built privacy-preserving applications on Solana using confidential MPC, with mentorship from the Arcium team.",
  },
  {
    org: "Solana Turbin3",
    role: "Cohort graduate",
    period: "2024",
    location: "Remote",
    href: "https://turbin3.org",
    logo: "/logos/turbin3.png",
    detail:
      "Completed the Turbin3 builder cohort — Solana architecture, runtime internals, and shipping to mainnet.",
  },
  {
    org: "PikaVault",
    role: "Frontend engineer",
    period: "2024 — Present",
    location: "Remote",
    href: "https://www.pikavault.xyz/",
    logo: "/logos/pikavault.png",
    badge: "Live",
    detail:
      "Wallet flows, deposit UX, and a production Next.js frontend for a live vault product.",
  },
  {
    org: "CipherScore",
    role: "Founding builder",
    period: "2024 — Present",
    location: "Remote",
    href: "https://cipherscore.xyz",
    logo: "/logos/cipherscore.png",
    badge: "Live",
    detail:
      "Privacy-first credit scoring API — verifiable scores without exposing raw financial data.",
  },
  {
    org: "Open source",
    role: "Maintainer & contributor",
    period: "2023 — Present",
    location: "Remote",
    href: "https://github.com/ifeelsam",
    logo: "/logos/github.png",
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
