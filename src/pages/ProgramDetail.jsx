import { useParams, Link } from "react-router-dom";
import { programs } from "../data/programs";
import CTABanner from "../components/CTABanner";

const icons = {
  "education-literacy": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  "health-wellness": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  "youth-empowerment": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  "agriculture-food-security": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  "women-empowerment": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
};

export default function ProgramDetail() {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="font-display text-3xl text-(--color-blue)">Program not found</h1>
        <Link to="/programs" className="text-sm font-body font-semibold text-(--color-magenta) hover:underline">
          ← Back to Programs
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ background: "var(--color-blue)" }}>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: program.color }} />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: "var(--color-green)" }} />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(-55deg, transparent, transparent 40px,
              rgba(255,255,255,0.6) 40px, rgba(255,255,255,0.6) 41px)`,
          }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-body text-blue-300
                       hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Programs
          </Link>

          <div className="flex items-center gap-5 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shrink-0"
              style={{ background: program.color }}
            >
              {icons[program.slug]}
            </div>
            <div>
              <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase mb-1"
                style={{ color: program.color }}>
                Program
              </p>
              <h1 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight">
                {program.title}
              </h1>
            </div>
          </div>

          <p className="text-blue-200 font-body text-lg italic">{program.tagline}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: "linear-gradient(to bottom, transparent, white)" }} />
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <div>
              <div className="w-12 h-1 rounded-full mb-6" style={{ background: program.color }} />
              <h2 className="font-display text-3xl text-(--color-blue) mb-4">Overview</h2>
              <p className="text-gray-600 font-body leading-relaxed text-lg">{program.description}</p>
            </div>

            {/* Objectives */}
            <div>
              <h2 className="font-display text-3xl text-(--color-blue) mb-6">Our Objectives</h2>
              <ul className="space-y-4">
                {program.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center
                                 text-white text-xs font-bold shrink-0 mt-0.5"
                      style={{ background: program.color }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-gray-600 font-body leading-relaxed">{obj}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div>
              <h2 className="font-display text-3xl text-(--color-blue) mb-6">What We Do</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.activities.map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50"
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: program.color }} />
                    <p className="text-sm text-gray-600 font-body">{activity}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Get involved card */}
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: program.color }}
            >
              <h3 className="font-display text-2xl mb-3">Get Involved</h3>
              <p className="text-sm opacity-80 font-body leading-relaxed mb-6">
                Want to support this program? Volunteer your time, donate, or partner with us.
              </p>
              <Link
                to="/register"
                className="block text-center px-5 py-3 rounded-md bg-white font-body font-semibold
                           text-sm transition-opacity hover:opacity-90"
                style={{ color: program.color }}
              >
                Volunteer Now
              </Link>
              <Link
                to="/contact"
                className="block text-center px-5 py-3 rounded-md border border-white/40
                           font-body font-semibold text-sm text-white mt-3
                           hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Other programs */}
            <div className="rounded-2xl p-6 border border-gray-100 bg-gray-50">
              <h3 className="font-display text-lg text-(--color-blue) mb-4">Other Programs</h3>
              <ul className="space-y-3">
                {programs
                  .filter((p) => p.slug !== slug)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/programs/${p.slug}`}
                        className="flex items-center gap-2 text-sm font-body text-gray-600
                                   hover:text-(--color-magenta) transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                        {p.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}