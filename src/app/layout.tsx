import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ifeelsam",
  description:
    "Portfolio of Sam (@ifeelsam) — web3, AI agents, TypeScript, and Android. CipherScore, PikaVault, and open source.",
  openGraph: {
    title: "Sam, Developer & Builder",
    description:
      "Building at the intersection of web3, AI agents, and polished interfaces.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ifeelsam",
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
