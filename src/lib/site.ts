export const site = {
  name: "Sam",
  handle: "ifeelsam",
  title: "Full-stack Solana engineer & builder",
  url: "https://ifeelsam.dev",
  location: "India",
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
  repoCount: 104,
  memberSince: "2023",
} as const;

export type SocialStat = {
  label: string;
  value: string | number;
};

export type SocialProfile = {
  platform: "GitHub" | "X";
  href: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  location?: string;
  stats?: SocialStat[];
};

export const socialProfiles: SocialProfile[] = [
  {
    platform: "GitHub",
    href: "https://github.com/ifeelsam",
    name: "Sam",
    handle: "ifeelsam",
    avatar:
      "https://avatars.githubusercontent.com/u/140923981?v=4",
    bio: "If I can imagine it, I can build it.",
    stats: [
      { label: "Repositories", value: 104 },
      { label: "Followers", value: 12 },
    ],
  },
  {
    platform: "X",
    href: "https://x.com/ifeelsam",
    name: "Sam",
    handle: "ifeelsam",
    avatar: "/avatar.jpg",
    bio: "Full-stack Solana engineer — building Mortem, shipping in public.",
    location: "India",
  },
];

export type ProjectStatus = "live" | "building" | "archived";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  /** Longer, page-level summary used on the project's own page. */
  overview?: string;
  href: string;
  demo?: string;
  language?: string;
  tags: string[];
  status: ProjectStatus;
  logo?: string;
  x?: string;
  logoShape?: "circle" | "square";
  metrics?: ProjectMetric[];
};

export const featuredProjects: Project[] = [
  {
    slug: "mortem-protocol",
    name: "Mortem Protocol",
    description:
      "Catch bad agent trading decisions on Solana — trace failures, prove root cause, fix the logic.",
    overview:
      "Mortem Protocol is an observability and post-mortem layer for autonomous trading agents on Solana. It captures agent decisions, traces failures back to their root cause, and gives builders the tooling to prove what went wrong so the underlying logic can be fixed.",
    href: "https://github.com/mortemlabs/mortem-protocol",
    demo: "https://www.mortemlabs.com",
    language: "TypeScript",
    tags: ["Solana", "AI Agents", "Protocol"],
    status: "building",
    logo: "/logos/mortem.svg",
    logoShape: "square",
    x: "https://x.com/mortemlabs",
  },
  {
    slug: "cipherscore",
    name: "CipherScore",
    description:
      "Privacy-first credit scoring — verifiable scores without exposing raw financial data.",
    overview:
      "CipherScore is a privacy-first credit scoring system. It produces verifiable credit scores without exposing the underlying raw financial data, so lenders can trust a score while users keep their personal data private.",
    href: "https://github.com/ifeelsam/CipherScore",
    demo: "https://cipherscore.xyz",
    language: "TypeScript",
    tags: ["Web3", "Privacy", "API"],
    status: "live",
    logo: "/logos/cipherscore.png",
    x: "https://x.com/cipherscore",
    metrics: [
      { label: "Users signed up", value: "250+" },
      { label: "Proofs generated", value: "High volume" },
      { label: "X followers", value: "80+" },
    ],
  },
  {
    slug: "pikavault",
    name: "PikaVault",
    description: "Vault frontend with wallet flows and production-ready deposits.",
    overview:
      "PikaVault is a production-ready vault frontend with complete wallet connection flows and deposit handling, built for a smooth on-chain deposit experience.",
    href: "https://github.com/ifeelsam/pika-fe",
    demo: "https://www.pikavault.xyz",
    language: "TypeScript",
    tags: ["DeFi", "Next.js", "Anchor Lang"],
    status: "live",
    logo: "/logos/pikavault.png",
  },
  {
    slug: "avenox",
    name: "AvenoX",
    description:
      "Wallet-gated deployment dashboard on Sui — connect, deploy, and manage with Neon or Neo-Brutalism themes.",
    overview:
      "AvenoX is a wallet-gated deployment dashboard on Sui. Connect a wallet, then deploy and manage your projects from one place — with selectable Neon and Neo-Brutalism themes.",
    href: "https://github.com/ifeelsam/avenox",
    demo: "https://dash.avenox.xyz",
    language: "TypeScript",
    tags: ["Sui", "Next.js", "Dashboard"],
    status: "live",
    logo: "/logos/avenox.png",
    metrics: [
      {
        label: "Hackathon",
        value: "EthGlobal Delhi · Walrus bounty winner",
      },
    ],
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    slug: "vynix",
    name: "Vynix",
    description: "RWA marketplace for collectibles with a modern trading UI.",
    overview:
      "Vynix is a real-world-asset (RWA) marketplace for collectibles, pairing tokenized ownership with a modern trading interface.",
    href: "https://github.com/ifeelsam/Vynix",
    demo: "https://vynix-prod.vercel.app",
    language: "TypeScript",
    tags: ["RWA", "Marketplace"],
    status: "live",
    logo: "/logos/vynix.png",
  },
  {
    slug: "tracer",
    name: "Tracer",
    description: "Observability and debugging for TypeScript AI agents on EVM.",
    overview:
      "Tracer brings observability and debugging to TypeScript AI agents running on EVM chains, surfacing what an agent did and why.",
    href: "https://github.com/ifeelsam/Tracer",
    language: "TypeScript",
    tags: ["AI Agents", "EVM"],
    status: "live",
    logo: "/logos/github.png",
  },
  {
    slug: "outertune",
    name: "OuterTune",
    description: "Material 3 Android music player — local files and YouTube Music.",
    overview:
      "OuterTune is a Material 3 Android music player that plays both local files and YouTube Music in a single, modern interface.",
    href: "https://github.com/ifeelsam/OuterTune",
    language: "Kotlin",
    tags: ["Android", "Open Source"],
    status: "live",
    logo: "/logos/github.png",
  },
  {
    slug: "kord",
    name: "Kord",
    description: "Protocol documentation and developer experience site.",
    overview:
      "Kord is the documentation and developer-experience site for the Kord protocol, focused on clear, navigable protocol docs.",
    href: "https://github.com/ifeelsam/Kord-docs",
    demo: "https://kord-protocol.vercel.app",
    language: "TypeScript",
    tags: ["Docs", "Protocol"],
    status: "live",
    logo: "/logos/kord.png",
  },
  {
    slug: "wisp",
    name: "Wisp",
    description: "Lightweight web app with a focused, minimal UX.",
    overview:
      "Wisp is a lightweight web app built around a focused, minimal user experience.",
    href: "https://github.com/ifeelsam/wisp",
    demo: "https://whispx.vercel.app",
    language: "TypeScript",
    tags: ["Product", "Web"],
    status: "live",
    logo: "/logos/github.png",
  },
  {
    slug: "couchmatch",
    name: "CouchMatch",
    description:
      "Pick what to watch together — swipe, match, and stop arguing over the remote.",
    overview:
      "CouchMatch helps groups decide what to watch. Sign in, swipe through options, and match on something everyone wants to press play on.",
    href: "https://github.com/ifeelsam/CouchMatch",
    demo: "https://couchmatch.vercel.app",
    language: "TypeScript",
    tags: ["Product", "Next.js", "Supabase"],
    status: "live",
    logo: "/logos/github.png",
  },
  {
    slug: "oliver",
    name: "Oliver",
    description: "Web3 platform on Arc Network.",
    overview:
      "Oliver is a web3 platform built on the Arc Network. This project is archived.",
    href: "https://github.com/ifeelsam/oliver",
    language: "TypeScript",
    tags: ["Web3", "Arc"],
    status: "archived",
    logo: "/logos/github.png",
  },
];

/** Canonical path for a project's own page. */
export const projectPath = (slug: string) => `/projects/${slug}`;

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

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
    org: "Superteam",
    role: "Member · 2× grant recipient",
    period: "2024 — Present",
    location: "Remote",
    href: "https://in.superteam.fun/#members",
    logo: "/logos/superteam.png",
    badge: "2× grants",
    detail:
      "Active in the Solana ecosystem through projects, collaborations, and community initiatives — awarded two Superteam grants.",
  },
  {
    org: "Solana Turbin3",
    role: "Cohort graduate",
    period: "2024",
    location: "Remote",
    href: "https://github.com/ifeelsam/ifeelsam_pow",
    logo: "/logos/turbin3.png",
    detail:
      "Completed the Turbin3 builder cohort — Solana architecture, runtime internals, and shipping to mainnet.",
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
  { label: "Live demos", value: "8" },
] as const;
