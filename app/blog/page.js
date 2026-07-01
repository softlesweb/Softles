import Link from "next/link";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import Footer from "../components/Footer";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc){
        _id,
        title,
        publishedAt,
        slug,
        excerpt,
        mainImage,
        body
    }
    `);

  const [featured, ...rest] = posts || [];

  return (
    <>
    <section className="softles-section-primary" id="blog">
      <div className="service-page-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">From The Blog</span>
          </div>
          <h2 className="service-section-heading text-[#FFFFFF]">
            Insights & Updates
          </h2>
          <p className="softles-section-copy mx-auto">
            Notes on Shopify, design, and development — written as we build, not
            after.
          </p>
        </div>

        {/* Featured Post */}
        {featured && (
          <Link
            href={`/blog/${featured.slug?.current}`}
            className="softles-card group grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden mb-10"
          >
            <div className="relative w-full h-64 md:h-full min-h-[280px] overflow-hidden">
              {featured.mainImage && (
                <img
                  src={urlFor(featured.mainImage).width(900).height(700).url()}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181B23] via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10">
              <div className="inline-flex items-center gap-2 mb-4 w-fit">
                <span className="w-8 h-0.5 bg-[#DC4242]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#DC4242] font-bold">
                  Latest
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] leading-tight mb-4 group-hover:text-[#DC4242] transition-colors duration-300">
                {featured.title}
              </h3>

              {featured.excerpt && (
                <p className="text-[#BCC1CA]/80 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
              )}

              <div className="flex items-center gap-4">
                <time className="text-xs uppercase tracking-wider text-[#BCC1CA] border border-[#2a2e40] rounded-full px-3 py-1">
                  {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span className="text-sm font-bold text-[#DC4242] inline-flex items-center gap-1">
                  Read Article
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Grid of remaining posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              href={`/blog/${post.slug?.current}`}
              key={post._id}
              className="softles-card group flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-48 overflow-hidden">
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(500).height(320).url()}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="flex flex-col flex-1 p-6">
                <time className="text-xs uppercase tracking-wider text-[#BCC1CA] mb-3">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>

                <h3 className="text-lg font-bold text-[#FFFFFF] leading-snug mb-3 group-hover:text-[#DC4242] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="text-[#BCC1CA]/80 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                <span className="mt-auto text-sm font-bold text-[#DC4242] inline-flex items-center gap-1 w-fit">
                  Read Article
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {posts && posts.length === 0 && (
          <div className="softles-card flex flex-col items-center justify-center text-center py-16 px-6">
            <p className="text-[#FFFFFF] font-bold text-lg mb-2">
              No posts yet
            </p>
            <p className="text-[#BCC1CA]/80 text-sm max-w-md">
              New articles will show up here as soon as we publish them.
            </p>
          </div>
        )}
      </div>
    </section>
    <Footer />
    </>
  );
}
