import { ServicePage } from "../components/ServicePage";

const url = "https://www.ootle.io/marketing-consultancy";
export const metadata = {
  title: "Marketing Consultancy Services",
  description: "Practical marketing consultancy covering SEO, paid acquisition, analytics, conversion, lifecycle marketing and commercial strategy.",
  alternates: { canonical: "/marketing-consultancy" },
  openGraph: { title: "Marketing Consultancy Services | Ootle", description: "Practical marketing consultancy covering SEO, paid acquisition, analytics, conversion, lifecycle marketing and commercial strategy.", url, type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Ootle — Senior marketing leadership and smarter execution" }] },
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

const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ootle.io/" },
  { "@type": "ListItem", position: 2, name: schema.name, item: url },
] };

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumbs]).replace(/</g, "\\u003c") }} />
    <ServicePage kind="marketing-consultancy" />
  </>;
}
