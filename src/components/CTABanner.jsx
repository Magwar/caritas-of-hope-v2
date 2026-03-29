import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--color-magenta)" }}>
      {/* Background accents */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10 bg-white" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-10 bg-white" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl lg:text-5xl text-white mb-6 leading-tight">
          Be Part of the Story
        </h2>
        <p className="text-pink-100 font-body text-lg leading-relaxed mb-10">
          Whether you volunteer, donate, or simply spread the word — every
          action creates a ripple of hope in someone's life. Join us today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/register"
            className="px-8 py-3.5 rounded-md font-body font-semibold text-sm
                       bg-white hover:bg-gray-50 transition-colors duration-200"
            style={{ color: "var(--color-magenta)" }}>
            Volunteer With Us
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-md font-body font-semibold text-sm text-white
                       border border-white/40 hover:border-white hover:bg-white/10
                       transition-all duration-200">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}