import { ServicePage } from "../components/ServicePage";

const url = "https://www.ootle.io/marketing-consultancy";
export const metadata = {
  title: "Marketing Consultancy Services",
  description: "Practical marketing consultancy covering SEO, paid acquisition, analytics, conversion, lifecycle marketing and commercial strategy.",
  alternates: { canonical: "/marketing-consultancy" },
  openGraph: { title: "Marketing Consultancy Services | Ootle", description: "Practical marketing consultancy covering SEO, paid acquisition, analytics, conversion, lifecycle marketing and commercial strategy.", url, type: "website" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": url + "#service",
  name: "Marketing Consultancy",
  serviceType: "Marketing Consultancy",
  description: "Practical marketing consultancy covering SEO, paid acquisition, analytics, conversion, lifecycle marketing and commercial strategy.",
  url,
  provider: { "@id": "https://www.ootle.io/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
};

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <ServicePage kind="marketing-consultancy" />
  </>;
}
