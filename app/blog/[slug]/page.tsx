import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

interface Post {
  title: string;
  slug: { current: string };
  coverImage?: object;
  excerpt?: string;
  publishedAt?: string;
  body?: object[];
}

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title, slug, coverImage, excerpt, publishedAt, body
    }`,
    { slug }
  );
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`
  );
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen pt-32 pb-24">
        {/* Cover image */}
        {post.coverImage && (
          <div className="relative h-[50vh] w-full mb-16">
            <Image
              src={urlFor(post.coverImage).width(1600).height(900).url()}
              alt={post.title}
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#C9A96E] text-xs tracking-widest uppercase mb-10 hover:text-white transition-colors duration-300"
          >
            ← Back to Insights
          </Link>

          {post.publishedAt && (
            <p className="text-[#C9A96E] text-xs tracking-widest uppercase mb-4">
              {new Date(post.publishedAt).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}

          <h1
            className="text-white text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] mb-10"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {post.title}
          </h1>

          <div className="w-16 h-px bg-[#C9A96E] mb-10" />

          {/* Body */}
          {post.body && (
            <div className="prose prose-invert prose-lg max-w-none
              prose-headings:font-light prose-headings:text-white
              prose-p:text-[#888] prose-p:leading-8
              prose-a:text-[#C9A96E] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-li:text-[#888]
              prose-blockquote:border-l-[#C9A96E] prose-blockquote:text-[#666]">
              <PortableText value={post.body as never[]} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
