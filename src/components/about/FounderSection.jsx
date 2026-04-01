export default function FounderSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
            Leadership
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue)">
            Meet Our Founder
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ background: "var(--color-magenta)", opacity: 0.08 }}
            />
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Replace with real photo when available */}
              {/* <img src="/images/founder.jpg" alt="Founder"
                      className="w-full h-96 object-cover object-top" /> */}
              <div
                className="w-full h-96 flex flex-col items-center justify-center gap-4"
                style={{ background: "var(--color-blue)" }}>
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)" }}>
                  <svg
                    className="w-14 h-14"
                    fill="rgba(255,255,255,0.4)"
                    viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <span
                  className="text-xs font-body tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Founder's photo coming soon
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div
              className="w-12 h-1 rounded-full mb-6"
              style={{ background: "var(--color-magenta)" }}
            />
            <h3 className="font-display text-3xl text-(--color-blue) mb-1">
              Founder Name
            </h3>
            <p
              className="text-sm font-body font-semibold mb-6"
              style={{ color: "var(--color-magenta)" }}>
              Founder & Executive Director
            </p>
            <p className="text-gray-600 font-body leading-relaxed mb-4">
              Placeholder — add the founder's biography here. Share their
              background, what inspired them to start Caritas of Hope, and what
              drives their passion for community transformation.
            </p>
            <p className="text-gray-600 font-body leading-relaxed mb-8">
              Placeholder — a second paragraph about their journey, experience,
              and vision for the organization's future.
            </p>
            <blockquote
              className="border-l-4 pl-5 font-display text-xl text-(--color-blue) leading-snug italic"
              style={{ borderColor: "var(--color-magenta)" }}>
              "Add a powerful founder quote here that captures the heart of
              Caritas of Hope."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}