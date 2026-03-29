import { Link } from "react-router-dom";

const metrics = [
  { value: "500+", label: "Lives Reached", icon: "❤️" },
  { value: "5", label: "Active Programs", icon: "🌱" },
  { value: "50+", label: "Volunteers", icon: "🤝" },
  { value: "3+", label: "Years of Service", icon: "📅" },
];

export default function ImpactMetrics() {
  return (
    <section className="py-24 bg-(--color-blue) relative overflow-hidden">
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
        style={{ background: "var(--color-magenta)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
        style={{ background: "var(--color-green)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
            Our Impact
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">
            Changing Lives, One Step at a Time
          </h2>
          <p className="text-blue-200 font-body max-w-xl mx-auto leading-relaxed">
            Every number represents a real person, a real family, a real story
            of hope restored.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map(({ value, label, icon }) => (
            <div
              key={label}
              className="rounded-2xl p-8 text-center border border-white/10
                         hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
              }}>
              <div className="text-3xl mb-3">{icon}</div>
              <div
                className="font-display font-bold text-4xl lg:text-5xl mb-2"
                style={{ color: "var(--color-magenta)" }}>
                {value}
              </div>
              <div className="text-sm text-blue-200 font-body">{label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-body font-semibold
                       text-white border-b border-white/30 hover:border-white pb-0.5
                       transition-colors duration-200">
            Read our impact stories
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
      </div>
    </section>
  );
}