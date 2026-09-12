import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitkumar.dev"),
  title: "Rohit Kumar — AI Engineer",
  description:
    "Rohit Kumar is an AI Engineer building production RAG systems, AI-powered products and intelligent software experiences.",
  alternates: {
    canonical: "https://rohitkumar.dev/",
  },
  openGraph: {
    title: "Rohit Kumar — AI Engineer",
    description:
      "Rohit Kumar is an AI Engineer building production RAG systems, AI-powered products and intelligent software experiences.",
    url: "https://rohitkumar.dev/",
    siteName: "Rohit Kumar Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Kumar — AI Engineer",
    description:
      "Rohit Kumar is an AI Engineer building production RAG systems, AI-powered products and intelligent software experiences.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
