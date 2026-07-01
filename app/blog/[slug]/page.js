import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import { PortableText } from "@portabletext/react";
import Footer from "../../components/Footer";

export const revalidate = 60;

export default async function BlogDetail({ params }) {
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      mainImage,
      excerpt,
      body
    }
    `,
    {
      slug: params.slug,
    }
  );

  if (!post) {
    return (
      <>
        <section className="softles-section-primary py-20 text-center">
          <div className="max-w-md mx-auto px-4">
            <h2 className="text-white text-3xl font-bold mb-3 tracking-tight">
              Article Not Found
            </h2>
            <p className="text-[#BCC1CA] text-base">
              The article you are looking for does not exist or has been moved.
            </p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
    <section className="softles-section-primary py-12 md:py-24 bg-[#0f111a]">
      {/* Article Wrapper: Reading purpose ke liye perfect width (max-w-3xl) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* 1. Structure: Eyebrow + Title + Meta */}
        <header className="mt-10 md:mt-0 mb-8 md:mb-12 border-b border-[#2a2e40] pb-8">
          <div className="softles-eyebrow mb-4 flex items-center gap-2">
            <span className="softles-eyebrow-line h-[2px] w-6 bg-[#DC4242]" />
            <span className="softles-eyebrow-text text-xs uppercase tracking-widest font-bold text-[#DC4242]">
              Blog Article
            </span>
          </div>

          {/* Client Request: Title ki visibility max level par ki hai */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-[#BCC1CA]">
            <span className="font-medium">Published on</span>
            <time className="font-semibold text-white">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* 2. Structure: Featured Image (No Cards, No Backgrounds) */}
        {post.mainImage && (
          <div className="mb-10 md:mb-14 overflow-hidden rounded-xl">
            <img
              src={urlFor(post.mainImage).width(1200).height(675).url()} // Clean 16:9 Aspect Ratio
              alt={post.title}
              className="w-full h-auto max-h-[480px] object-cover"
            />
          </div>
        )}

        {/* 3. Structure: Main Content Area (No Background Cards) */}
        <div className="w-full">
          
          {/* Excerpt / Introduction */}
          {post.excerpt && (
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 border-l-4 border-[#DC4242] pl-6 italic opacity-90">
              {post.excerpt}
            </p>
          )} 

          {/* Rich Text Body with Clean Typography */}
          <div className="text-[#D1D5DB] text-base sm:text-lg leading-relaxed space-y-6
            [&>h2]:text-white [&>h2]:text-2xl sm:[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:pt-6 [&>h2]:pb-2 [&>h2]:tracking-tight
            [&>h3]:text-white [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:pt-4 [&>h3]:pb-1
            [&>p]:text-[#D1D5DB] [&>p]:leading-8
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2
            [&>a]:text-[#DC4242] [&>a]:underline [&>a]:font-medium">
            <PortableText value={post.body} />
          </div>

        </div>

      </article>
    </section>
    <Footer />
    </>
  );
}