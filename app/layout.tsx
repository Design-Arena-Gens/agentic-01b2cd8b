import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Argus Trading Ops",
  description: "Real-time command center for autonomous trading bots",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} bg-background`}>{children}</body>
    </html>
  );
}
