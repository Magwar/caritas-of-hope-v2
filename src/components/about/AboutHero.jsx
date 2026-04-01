export default function AboutHero() {
  return (
    <section className="relative py-28 bg-(--color-blue) overflow-hidden">
      {/* Background accents */}
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
          Who We Are
        </p>
        <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
          About Caritas of Hope
        </h1>
        <p className="text-blue-200 font-body text-lg leading-relaxed max-w-2xl mx-auto">
          A nonprofit born out of compassion, built on purpose, and committed to
          transforming lives across communities in Kenya — one person at a time.
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{ background: "linear-gradient(to bottom, transparent, white)" }}
      />
    </section>
  );
}