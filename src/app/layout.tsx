import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Sam (@ifeelsam) is a full-stack Solana engineer building Mortem — agent trading observability. Arcium Fellow, 2× Superteam grant recipient. Work spans privacy-preserving finance, AI agents, and TypeScript/Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sam (@ifeelsam) — Full-stack Solana Engineer & Builder",
    template: "%s · Sam (@ifeelsam)",
  },
  description,
  keywords: [
    "Sam",
    "ifeelsam",
    "Solana engineer",
    "Solana developer",
    "full-stack engineer",
    "AI agents",
    "web3 developer",
    "Mortem",
    "Arcium Fellowship",
    "Superteam",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Sam", url: site.url }],
  creator: "Sam",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sam (@ifeelsam) — Full-stack Solana Engineer & Builder",
    description,
    url: site.url,
    siteName: "Sam — ifeelsam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam (@ifeelsam) — Full-stack Solana Engineer & Builder",
    description,
    creator: "@ifeelsam",
    site: "@ifeelsam",
  },
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
