import { useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/blog";
import CTABanner from "../components/CTABanner";

const categories = ["All", ...new Set(posts.map((p) => p.category))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts.find((p) => p.featured);
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 bg-(--color-blue) overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "var(--color-magenta)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: "var(--color-green)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(-55deg, transparent, transparent 40px,
              rgba(255,255,255,0.6) 40px, rgba(255,255,255,0.6) 41px)`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-sm font-body font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "var(--color-magenta)" }}>
            Latest
          </p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
            News & Updates
          </h1>
          <p className="text-blue-200 font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Stories of impact, program updates, and insights from the field —
            straight from the Caritas of Hope team.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "linear-gradient(to bottom, transparent, white)",
          }}
        />
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured post */}
          {featured && (
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border
                         border-gray-100 hover:shadow-xl transition-all duration-300 mb-16">
              {/* Thumbnail placeholder */}
              <div
                className="h-64 lg:h-auto flex flex-col items-center justify-center gap-3 relative"
                style={{ background: featured.color }}>
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-body font-semibold tracking-wider uppercase
                                   px-3 py-1 rounded-full bg-white/20 text-white">
                    Featured
                  </span>
                </div>
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
                  Thumbnail coming soon
                </span>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-body font-semibold tracking-wider uppercase
                               px-2.5 py-1 rounded-full"
                    style={{
                      background: `color-mix(in srgb, ${featured.color} 12%, white)`,
                      color: featured.color,
                    }}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-400 font-body">
                    {featured.date}
                  </span>
                </div>
                <h2
                  className="font-display text-3xl text-(--color-blue) leading-snug mb-4
                             group-hover:text-(--color-magenta) transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="text-gray-500 font-body leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-sm font-body font-semibold"
                  style={{ color: featured.color }}>
                  Read Full Story
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          )}

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-body font-medium
                           transition-all duration-200"
                style={
                  activeCategory === cat
                    ? { background: "var(--color-blue)", color: "white" }
                    : { background: "#f3f4f6", color: "#374151" }
                }>
                {cat}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Thumbnail placeholder */}
                <div
                  className="h-44 flex flex-col items-center justify-center gap-2"
                  style={{ background: post.color }}>
                  <svg
                    className="w-8 h-8 opacity-30 text-white"
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
                    Thumbnail coming soon
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-body font-semibold tracking-wider uppercase
                                 px-2.5 py-1 rounded-full"
                      style={{
                        background: `color-mix(in srgb, ${post.color} 12%, white)`,
                        color: post.color,
                      }}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 font-body">
                      {post.date}
                    </span>
                  </div>
                  <h3
                    className="font-display text-lg text-(--color-blue) leading-snug mb-3
                               group-hover:text-(--color-magenta) transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-body leading-relaxed mb-4">
                    {post.excerpt.slice(0, 100)}...
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-body font-semibold"
                    style={{ color: post.color }}>
                    Read More
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}