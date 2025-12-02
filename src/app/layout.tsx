import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import FlareCursor from "@/components/FlareCursor";

export const metadata: Metadata = {
  title: "$TYGO — Wild Degen of Solana",
  description:
    "$TYGO the Tiger is the fearless Solana mascot fusing meme energy, art, and daily animation into unstoppable jungle hype.",
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Freeman&family=Luckiest+Guy&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#020807] text-white antialiased">
        <FlareCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
