import { Link } from "react-router-dom";

const programs = [
  {
    title: "Education & Literacy",
    description:
      "Equipping children and adults with the knowledge and skills to build a brighter future through access to quality education.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    color: "var(--color-blue)",
    slug: "education-literacy",
  },
  {
    title: "Health & Wellness",
    description:
      "Promoting physical and mental wellbeing through community health outreach, awareness campaigns, and psychosocial support.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    color: "var(--color-magenta)",
    slug: "health-wellness",
  },
  {
    title: "Youth Empowerment",
    description:
      "Inspiring the next generation through mentorship, leadership training, and opportunities that unlock their full potential.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
    color: "var(--color-green)",
    slug: "youth-empowerment",
  },
  {
    title: "Agriculture & Food Security",
    description:
      "Supporting families with sustainable farming practices, food assistance, and training to achieve long-term food security.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    color: "var(--color-green)",
    slug: "agriculture-food-security",
  },
  {
    title: "Women Empowerment",
    description:
      "Championing the rights, voices, and opportunities of women through skills development, advocacy, and economic inclusion.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    color: "var(--color-magenta)",
    slug: "women-empowerment",
  },
];

export default function ProgramsHighlights() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue) mb-4">
            Our Programs
          </h2>
          <p className="text-gray-500 font-body max-w-xl mx-auto leading-relaxed">
            Five focused programs, one shared mission — to uplift, empower, and
            restore hope in the communities we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ title, description, icon, color, slug }) => (
            <div
              key={slug}
              className="group bg-white rounded-2xl p-8 border border-gray-100
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white
                           transition-transform duration-300 group-hover:scale-110"
                style={{ background: color }}>
                {icon}
              </div>
              <h3 className="font-display text-xl text-(--color-blue) mb-3">
                {title}
              </h3>
              <p className="text-sm text-gray-500 font-body leading-relaxed mb-6">
                {description}
              </p>
              <Link
                to={`/programs/${slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-body font-semibold
                           transition-colors duration-200"
                style={{ color }}>
                Learn More
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
              </Link>
            </div>
          ))}

          {/* See all card */}
          <Link
            to="/programs"
            className="rounded-2xl p-8 flex flex-col items-center justify-center text-center
                       border-2 border-dashed border-gray-200 hover:border-(--color-magenta)
                       hover:bg-rose-50 transition-all duration-300 group">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4
                         bg-gray-100 group-hover:bg-(--color-magenta) transition-colors duration-300">
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <h3 className="font-display text-lg text-(--color-blue) mb-2">
              See All Programs
            </h3>
            <p className="text-sm text-gray-400 font-body mb-4">
              Explore everything we do in detail
            </p>
            <span className="text-sm font-body font-semibold text-(--color-magenta)">
              View Programs →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}