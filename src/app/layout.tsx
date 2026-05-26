import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam — Developer & Builder",
  description:
    "Portfolio of Sam (@ifeelsam) — web3, AI agents, TypeScript, and Android. CipherScore, PikaVault, and open source.",
  openGraph: {
    title: "Sam — Developer & Builder",
    description:
      "Building at the intersection of web3, AI agents, and polished interfaces.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ifeelsam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
