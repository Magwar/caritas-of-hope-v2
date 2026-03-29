import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-(--color-blue)">
      {/* Layered geometric background */}
      <div
        ref={heroRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden>
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "var(--color-magenta)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full opacity-15"
          style={{ background: "var(--color-green)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,0.6) 40px, rgba(255,255,255,0.6) 41px)`,
          }}
        />
        <div
          className="absolute top-24 left-1/2 w-48 h-48 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: "var(--color-magenta)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div>
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="w-8 h-0.5 rounded-full"
              style={{ background: "var(--color-magenta)" }}
            />
            <span
              className="text-xs font-body font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--color-magenta)" }}>
              Caritas of Hope
            </span>
          </div>

          <h1
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-white mb-6"
            style={{ animation: "fadeUp 0.7s ease both" }}>
            Transforming
            <br />
            <span style={{ color: "var(--color-magenta)" }}>Lives</span>
            <br />
            Together
          </h1>

          <p
            className="text-lg text-blue-200 font-body leading-relaxed max-w-md mb-10"
            style={{ animation: "fadeUp 0.7s 0.15s ease both" }}>
            Empowering communities through compassion, education, and purposeful
            action — one life at a time.
          </p>

          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "fadeUp 0.7s 0.3s ease both" }}>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-body font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
              style={{ background: "var(--color-magenta)" }}>
              Get Involved
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
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-body font-semibold text-sm text-white border border-white/30 hover:border-white/70 transition-all duration-200 hover:-translate-y-0.5">
              Explore Programs
            </Link>
          </div>
        </div>

        {/* Right — stat cards */}
        <div
          className="hidden lg:grid grid-cols-2 gap-4"
          style={{ animation: "fadeUp 0.7s 0.45s ease both" }}>
          {[
            { value: "2023", label: "Founded", color: "var(--color-magenta)" },
            {
              value: "5+",
              label: "Active Programs",
              color: "var(--color-green)",
            },
            {
              value: "100+",
              label: "Lives Impacted",
              color: "var(--color-magenta)",
            },
            {
              value: "Nairobi",
              label: "Based in Kenya",
              color: "var(--color-green)",
            },
          ].map(({ value, label, color }) => (
            <div
              key={label}
              className="rounded-xl p-6 border border-white/10"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
              }}>
              <div
                className="font-display font-bold text-3xl mb-1"
                style={{ color }}>
                {value}
              </div>
              <div className="text-sm text-blue-200 font-body">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-70 transition-opacity"
        style={{ animation: "bounce 2s infinite" }}>
        <span className="text-xs text-white font-body tracking-widest uppercase">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
