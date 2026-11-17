import Image from "next/image";
import Link from "next/link";
import blogPosts from "@/data/blogPosts";
import BlogContent from "./BlogContent";

const BlogSection = () => (
  <section className="py-12" aria-labelledby="blog-heading">
    <h2 id="blog-heading" className="text-4xl font-bold text-center text-red-700 mb-10">MV Malancha Travel Guides</h2>
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.id} lang={post.language || "en"} className="flex flex-col bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition-all duration-300">
            <Link href={`/blog/${post.slug}`} className="relative block w-full aspect-square" aria-label={`Read ${post.title}`}>
              <Image src={post.image} alt={post.title} fill sizes="(min-width: 1536px) 480px, (min-width: 1280px) 395px, (min-width: 1024px) 310px, (min-width: 768px) 352px, (min-width: 640px) 608px, calc(100vw - 32px)" className="object-cover" />
            </Link>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-xl text-gray-950 font-semibold mb-2"><Link href={`/blog/${post.slug}`} className="hover:text-blue-800">{post.title}</Link></h3>
              <BlogContent className="text-gray-700 text-sm leading-relaxed mb-5 [&_p]:mb-3 [&_strong]:font-bold [&_a]:text-blue-800 [&_a]:underline" html={post.excerpt} />
              <Link href={`/blog/${post.slug}`} className="mt-auto w-fit text-sm font-semibold text-blue-800 hover:underline" aria-label={`Read guide: ${post.title}`}>Read guide →</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
