const isProduction = process.env.VERCEL_ENV === "production";
export default function robots() {
  return {
    rules: isProduction ? [{ userAgent: "*", allow: "/" }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: "https://www.ootle.io/sitemap.xml",
    host: "https://www.ootle.io",
  };
}
