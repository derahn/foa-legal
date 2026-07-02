import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: object;
  publishedAt?: string;
}

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, coverImage, publishedAt
    }`
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase">
              Insights & Updates
            </span>
          </div>
          <h1
            className="text-white text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] mb-20"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Legal{" "}
            <em className="text-[#C9A96E] not-italic">Insights.</em>
          </h1>

          {posts.length === 0 ? (
            <p className="text-[#555] text-sm">No posts published yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E1E]">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-colors duration-300 group block"
                >
                  {post.coverImage && (
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={urlFor(post.coverImage).width(600).height(400).url()}
                        alt={post.title}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    {post.publishedAt && (
                      <p className="text-[#C9A96E] text-xs tracking-widest uppercase mb-3">
                        {new Date(post.publishedAt).toLocaleDateString("en-CA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    )}
                    <h2
                      className="text-white text-xl font-light mb-3 group-hover:text-[#C9A96E] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-[#666] text-sm leading-7 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="inline-block mt-5 text-[#C9A96E] text-xs tracking-widest uppercase border-b border-[#C9A96E33] pb-0.5">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
