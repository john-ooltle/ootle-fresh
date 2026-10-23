import { ServicePage } from "../components/ServicePage";

const url = "https://www.ootle.io/marketing-operating-system";
export const metadata = {
  title: "AI Marketing Operating System",
  description: "Build a business-specific AI marketing operating system with structured knowledge, repeatable workflows, human review and team handover.",
  alternates: { canonical: "/marketing-operating-system" },
  openGraph: { title: "AI Marketing Operating System | Ootle", description: "Build a business-specific AI marketing operating system with structured knowledge, repeatable workflows, human review and team handover.", url, type: "website" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": url + "#service",
  name: "AI Marketing Operating System",
  serviceType: "AI Marketing Operating System",
  description: "Build a business-specific AI marketing operating system with structured knowledge, repeatable workflows, human review and team handover.",
  url,
  provider: { "@id": "https://www.ootle.io/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
};

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <ServicePage kind="marketing-operating-system" />
  </>;
}
