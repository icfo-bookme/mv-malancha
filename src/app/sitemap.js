import blogPosts from "@/data/blogPosts";

export default function sitemap() {
  const origin = new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mvmalancha.com",
  ).origin;
  const pages = ["/", "/ticket", "/schedule", "/payment", "/contact", "/get-a-call"];

  return [...pages, ...blogPosts.map(({ slug }) => `/blog/${slug}`)].map(
    (path) => ({ url: new URL(path, origin).href }),
  );
}
