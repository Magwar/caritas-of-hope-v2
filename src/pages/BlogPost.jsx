import { useParams, Link } from "react-router-dom";
import { posts } from "../data/blog";
import CTABanner from "../components/CTABanner";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="font-display text-3xl text-(--color-blue)">
          Post not found
        </h1>
        <Link
          to="/blog"
          className="text-sm font-body font-semibold text-(--color-magenta) hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "var(--color-blue)" }}>
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: post.color }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(-55deg, transparent, transparent 40px,
              rgba(255,255,255,0.6) 40px, rgba(255,255,255,0.6) 41px)`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-body text-blue-300
                       hover:text-white transition-colors mb-8">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-body font-semibold tracking-wider uppercase
                         px-3 py-1 rounded-full"
              style={{
                background: `color-mix(in srgb, ${post.color} 25%, transparent)`,
                color: "white",
              }}>
              {post.category}
            </span>
            <span className="text-sm text-blue-300 font-body">{post.date}</span>
          </div>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-blue-200 font-body">By {post.author}</p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "linear-gradient(to bottom, transparent, white)",
          }}
        />
      </section>

      {/* Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Article */}
          <article className="lg:col-span-2">
            {/* Thumbnail placeholder */}
            <div
              className="w-full h-72 rounded-2xl flex flex-col items-center justify-center gap-3 mb-10"
              style={{ background: post.color }}>
              <svg
                className="w-12 h-12 opacity-30 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21zm10.5-11.25h.008v.008h-.008V9.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="text-xs text-white/50 font-body tracking-widest uppercase">
                Featured image coming soon
              </span>
            </div>

            {/* Body text */}
            <div className="prose prose-lg max-w-none font-body text-gray-600 leading-relaxed">
              {post.body.split("\n\n").map((para, i) => (
                <p key={i} className="mb-6">
                  {para}
                </p>
              ))}
            </div>

            {/* Share row */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
              <span className="text-sm text-gray-400 font-body">
                Share this post
              </span>
              <div className="flex gap-3">
                {["Facebook", "Twitter", "WhatsApp"].map((platform) => (
                  <button
                    key={platform}
                    className="px-4 py-2 rounded-md text-xs font-body font-semibold
                               bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Related posts */}
            <div className="rounded-2xl p-6 border border-gray-100 bg-gray-50">
              <h3 className="font-display text-lg text-(--color-blue) mb-5">
                Related Posts
              </h3>
              <div className="space-y-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-lg shrink-0"
                      style={{ background: p.color, opacity: 0.8 }}
                    />
                    <div>
                      <p
                        className="text-sm font-body font-medium text-(--color-blue) leading-snug
                                   group-hover:text-(--color-magenta) transition-colors">
                        {p.title}
                      </p>
                      <p className="text-xs text-gray-400 font-body mt-1">
                        {p.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="rounded-2xl p-6 border border-gray-100 bg-gray-50">
              <h3 className="font-display text-lg text-(--color-blue) mb-4">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...new Set(posts.map((p) => p.category))].map((cat) => (
                  <Link
                    key={cat}
                    to="/blog"
                    className="px-3 py-1.5 rounded-full text-xs font-body font-medium
                               bg-white border border-gray-200 text-gray-600
                               hover:border-(--color-magenta) hover:text-(--color-magenta)
                               transition-colors">
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}