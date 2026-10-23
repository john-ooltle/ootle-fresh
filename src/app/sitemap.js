const origin = "https://www.ootle.io";
export default function sitemap() {
  return [
    { url: `${origin}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${origin}/fractional-cmo`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${origin}/marketing-operating-system`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${origin}/marketing-consultancy`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
