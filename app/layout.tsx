import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Da Di Learning Studio",
  description:
    "Mandarin, Mindfulness, Mastery. Chinese enrichment for all ages.",
  keywords: [
    "Da Di",
    "Learning Studio",
    "Mandarin",
    "Chinese",
    "Mindfulness",
    "Enrichment",
    "Singapore",
    "Kids",
    "Teens",
    "Adults",
    "Language",
  ],
  openGraph: {
    title: "Da Di Learning Studio",
    description:
      "Mandarin, Mindfulness, Mastery. Chinese enrichment for all ages.",
    url: "https://dadilearning.com",
    siteName: "Da Di Learning Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Da Di Learning Studio Logo",
      },
    ],
    locale: "en_SG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
