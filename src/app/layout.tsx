import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://opensyte.org"),
  title: "Opensyte",
  description: "Manage your business 100x more easily",
  icons: [{ rel: "icon", url: "/icon-white.svg" }],
  keywords: [
    "react",
    "server",
    "components",
    "opensyte",
    "radix",
    "react.js",
    "next.js",
    "business",
    "management",
    "saas",
    "development",
    "developer",
    "software",
  ],
  authors: [
    {
      name: "Opensyte",
      url: "https://opensyte.org",
    },
  ],
  creator: "Opensyte",
  publisher: "Opensyte",
  openGraph: {
    title: "Opensyte",
    description: "Manage your business 100x more easily",
    url: "https://opensyte.org",
    siteName: "Opensyte",
    images: [
      {
        url: "https://opensyte.org/icon-with-text-white.svg",
        width: 1200,
        height: 630,
        alt: "Opensyte",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opensyte",
    description: "Manage your business 100x more easily",
    images: ["https://opensyte.org/icon-with-text-white.svg"],
    creator: "@opensyte",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
