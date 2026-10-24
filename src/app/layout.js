import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata = {
  metadataBase: new URL("https://www.ootle.io"),
  title: { default: "Ootle | Senior Marketing Leadership & Smarter Execution", template: "%s | Ootle" },
  description: "Ootle helps growing businesses connect senior marketing leadership, commercial strategy and practical AI-assisted marketing execution.",
  applicationName: "Ootle",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_GB", siteName: "Ootle",
    title: "Ootle | Senior Marketing Leadership & Smarter Execution",
    description: "Experienced marketing leadership, practical consultancy and AI-assisted workflows built around your business.",
    url: "https://www.ootle.io",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Ootle — Senior marketing leadership and smarter execution" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: isProduction, follow: isProduction, googleBot: { index: isProduction, follow: isProduction } },
};

const organisation = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.ootle.io/#organization",
  name: "Ootle",
  legalName: "Ootle Ltd",
  url: "https://www.ootle.io/",
  email: "hello@ootle.io",
  description: "UK marketing consultancy providing fractional CMO leadership, marketing consultancy and business-specific AI marketing operating systems.",
};
const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.ootle.io/#website",
  url: "https://www.ootle.io/",
  name: "Ootle",
  publisher: { "@id": "https://www.ootle.io/#organization" },
  inLanguage: "en-GB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organisation, website]).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
