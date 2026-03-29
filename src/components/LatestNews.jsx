import { Link } from "react-router-dom";

const posts = [
  {
    title: "Launching Our New Agriculture Program in Kiambu",
    excerpt:
      "We are excited to announce the expansion of our food security initiative to reach more families in the Kiambu region.",
    date: "March 15, 2025",
    category: "Programs",
    slug: "agriculture-program-kiambu",
    color: "var(--color-green)",
  },
  {
    title: "Women Empowerment Workshop — 40 Graduates",
    excerpt:
      "Forty incredible women completed our skills training program this month. Each one is now equipped to build a sustainable livelihood.",
    date: "February 28, 2025",
    category: "Impact",
    slug: "women-empowerment-graduates",
    color: "var(--color-magenta)",
  },
  {
    title: "Health Outreach Reaches 200 Households",
    excerpt:
      "Our health and wellness team conducted a community outreach drive covering over 200 households across three neighbourhoods.",
    date: "January 20, 2025",
    category: "Health",
    slug: "health-outreach-200-households",
    color: "var(--color-blue)",
  },
];

export default function LatestNews() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
              Latest
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue)">
              News & Updates
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-body font-semibold
                       text-(--color-blue) hover:text-(--color-magenta) transition-colors shrink-0">
            View all posts
            <svg
              className="w-4 h-4"
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
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(({ title, excerpt, date, category, slug, color }) => (
            <Link
              key={slug}
              to={`/blog/${slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              {/* Color bar */}
              <div className="h-1.5 w-full" style={{ background: color }} />

              <div className="p-7">
                {/* Category + date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: `color-mix(in srgb, ${color} 12%, white)`,
                      color,
                    }}>
                    {category}
                  </span>
                  <span className="text-xs text-gray-400 font-body">
                    {date}
                  </span>
                </div>

                <h3
                  className="font-display text-lg text-(--color-blue) leading-snug mb-3
                               group-hover:text-(--color-magenta) transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 font-body leading-relaxed mb-5">
                  {excerpt}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-sm font-body font-semibold
                             transition-colors duration-200"
                  style={{ color }}>
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
  );
}