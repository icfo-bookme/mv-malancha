export default function robots() {
  const origin = new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mvmalancha.com",
  ).origin;

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${origin}/sitemap.xml`,
  };
}
