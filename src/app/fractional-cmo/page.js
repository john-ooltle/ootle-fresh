import { ServicePage } from "../components/ServicePage";

const url = "https://www.ootle.io/fractional-cmo";
export const metadata = {
  title: "Fractional CMO Services",
  description: "Senior marketing leadership for growing businesses. Commercial strategy, acquisition priorities, hands-on direction and accountability without a full-time CMO.",
  alternates: { canonical: "/fractional-cmo" },
  openGraph: { title: "Fractional CMO Services | Ootle", description: "Senior marketing leadership for growing businesses. Commercial strategy, acquisition priorities, hands-on direction and accountability without a full-time CMO.", url, type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Ootle — Senior marketing leadership and smarter execution" }] },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": url + "#service",
  name: "Fractional CMO",
  serviceType: "Fractional CMO",
  description: "Senior marketing leadership for growing businesses. Commercial strategy, acquisition priorities, hands-on direction and accountability without a full-time CMO.",
  url,
  provider: { "@id": "https://www.ootle.io/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
};

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <ServicePage kind="fractional-cmo" />
  </>;
}
