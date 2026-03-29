import { Link } from "react-router-dom";

export default function AboutSummary() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
            Who We Are
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue) leading-tight mb-6">
            Compassion in Action,
            <br />
            Hope in Every Step
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            Caritas of Hope is a nonprofit organization founded in September
            2023 in Nairobi, Kenya. We exist to serve the most vulnerable in our
            communities — through education, psychosocial support, skills
            training, and programs that restore dignity and open doors to a
            better future.
          </p>
          <p className="text-gray-600 font-body leading-relaxed mb-8">
            Rooted in compassion and driven by purpose, every program we run is
            designed to create lasting change — not just for individuals, but
            for entire families and communities.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-body font-semibold
                       text-sm text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "var(--color-blue)" }}>
            Learn More About Us
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

        {/* Right — founder card */}
        <div className="relative hidden lg:block">
          <div
            className="absolute -top-6 -left-6 w-full h-full rounded-2xl"
            style={{ background: "var(--color-magenta)", opacity: 0.08 }}
          />
          <div className="relative rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
            {/* Founder headshot placeholder */}
            {/* When ready, replace the div below with:
                <img src="/images/founder.jpg" alt="Founder, Caritas of Hope"
                     className="w-full h-72 object-cover object-top" /> */}
            <div
              className="w-full h-72 flex flex-col items-center justify-center gap-3"
              style={{ background: "var(--color-blue)" }}>
              <div className="relative">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)" }}>
                  <svg
                    className="w-12 h-12"
                    fill="rgba(255,255,255,0.4)"
                    viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ background: "var(--color-magenta)" }}>
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              </div>
              <span
                className="text-xs font-body tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.4)" }}>
                Founder's photo coming soon
              </span>
            </div>

            {/* Quote */}
            <div className="p-8">
              <div
                className="w-12 h-1 rounded-full mb-5"
                style={{ background: "var(--color-magenta)" }}
              />
              <blockquote className="font-display text-xl text-(--color-blue) leading-snug mb-6">
                "We believe every person deserves dignity, opportunity, and a
                community that cares."
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold font-display"
                  style={{ background: "var(--color-magenta)" }}>
                  F
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-(--color-blue)">
                    Founder Name
                  </p>
                  <p className="text-xs text-gray-400 font-body">
                    Founder & Executive Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}