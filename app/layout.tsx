import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const title = `${site.name} — AI product × engineering`;
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s — ${site.name}` },
  description: site.statement,
  openGraph: { title, description: site.statement, type: "website", url: site.url },
  twitter: { card: "summary", title, description: site.statement },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Greater Noida", addressCountry: "IN" },
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-bg focus:p-2">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <footer className="border-t border-line py-8 text-center text-xs text-muted">© {new Date().getFullYear()} {site.name}</footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
