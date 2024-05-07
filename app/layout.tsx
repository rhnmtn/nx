import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import * as Craft from "@/components/craft/layout";
import Nav from "@/components/craft/section/nav";
import Footer from "@/components/craft/section/footer";

import "./globals.css";
import nimi from "@/nimi.config";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: nimi.site_title,
    default: `%s | ${nimi.site_name}`,
    absolute: `Anasayfa | ${nimi.site_name}`,
  },
  description: nimi.site_description,
  generator: nimi.site_name,
  applicationName: nimi.site_name,
  referrer: "origin-when-cross-origin",
  keywords: nimi.keywords,
  authors: nimi.authors,
  metadataBase: new URL(nimi.site_domain),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: nimi.site_title,
    description: nimi.site_description,
    url: nimi.site_domain,
    siteName: nimi.site_name,
    images: [
      {
        url: `${nimi.site_domain}/og.png`, // Must be an absolute URL
        width: 800,
        height: 600,
        alt: nimi.site_description,
      },
      {
        url: `${nimi.site_domain}/og-alt.png`, // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: nimi.site_description,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  //manifest: `${nimi.site_domain}/manifest.json`, // Must be an absolute URL
  twitter: {
    card: "summary_large_image",
    title: nimi.site_title,
    description: nimi.site_description,
    // siteId: "1467726470533754880",
    // creator: "@nextjs",
    images: [`${nimi.site_domain}/og.png`], // Must be an absolute URL
  },
  icons: {
    icon: [
      { url: "/favicon.svg" },
      new URL("/favicon.svg", "https://nimi.com.tr"),
      { url: "/favicon.svg", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Craft.Layout className={`${manrope.variable}`}>
      <Nav />
      {children}
      <Footer />
    </Craft.Layout>
  );
}
