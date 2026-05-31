export const site = {
  name: "Sam",
  handle: "ifeelsam",
  title: "Full-stack Solana engineer & builder",
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

export type Project = {
  name: string;
  description: string;
  href: string;
  demo?: string;
  language?: string;
  tags: string[];
  status: ProjectStatus;
  logo?: string;
  x?: string;
  logoShape?: "circle" | "square";
};

export const featuredProjects: Project[] = [
  {
    name: "Mortem Protocol",
    description:
      "Catch bad agent trading decisions on Solana — trace failures, prove root cause, fix the logic.",
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
    name: "CipherScore",
    description:
      "Privacy-first credit scoring — verifiable scores without exposing raw financial data.",
    href: "https://github.com/ifeelsam/CipherScore",
    demo: "https://cipherscore.xyz",
    language: "TypeScript",
    tags: ["Web3", "Privacy", "API"],
    status: "live",
    logo: "/logos/cipherscore.png",
  },
  {
    name: "PikaVault",
    description: "Vault frontend with wallet flows and production-ready deposits.",
    href: "https://github.com/ifeelsam/pika-fe",
    demo: "https://www.pikavault.xyz",
    language: "TypeScript",
    tags: ["DeFi", "Next.js", "Anchor Lang"],
    status: "live",
    logo: "/logos/pikavault.png",
  },
  {
    name: "AvenoX",
    description:
      "Wallet-gated deployment dashboard on Sui — connect, deploy, and manage with Neon or Neo-Brutalism themes.",
    href: "https://github.com/ifeelsam/avenox",
    demo: "https://dash.avenox.xyz",
    language: "TypeScript",
    tags: ["Sui", "Next.js", "Dashboard"],
    status: "live",
    logo: "/logos/avenox.png",
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
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
  {
    name: "OuterTune",
    description: "Material 3 Android music player — local files and YouTube Music.",
    href: "https://github.com/ifeelsam/OuterTune",
    language: "Kotlin",
    tags: ["Android", "Open Source"],
    status: "live",
    logo: "/logos/github.png",
  },
  {
    name: "Kord",
    description: "Protocol documentation and developer experience site.",
    href: "https://github.com/ifeelsam/Kord-docs",
    demo: "https://kord-protocol.vercel.app",
    language: "TypeScript",
    tags: ["Docs", "Protocol"],
    status: "live",
    logo: "/logos/kord.png",
  },
  {
    name: "Wisp",
    description: "Lightweight web app with a focused, minimal UX.",
    href: "https://github.com/ifeelsam/wisp",
    demo: "https://whispx.vercel.app",
    language: "TypeScript",
    tags: ["Product", "Web"],
    status: "live",
    logo: "/logos/github.png",
  },
  {
    name: "Oliver",
    description: "Web3 platform on Arc Network.",
    href: "https://github.com/ifeelsam/oliver",
    language: "TypeScript",
    tags: ["Web3", "Arc"],
    status: "archived",
    logo: "/logos/github.png",
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
  { label: "Live demos", value: "7" },
] as const;
