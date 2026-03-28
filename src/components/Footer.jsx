import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/trainings", label: "Trainings" },
  { to: "/blog", label: "News & Blog" },
  { to: "/team", label: "Our Team" },
  { to: "/testimonials", label: "Impact Stories" },
  { to: "/contact", label: "Contact Us" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-(--color-blue) text-white">
      {/* Top accent */}
      <div className="h-1 w-full bg-(--color-magenta)" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <span className="font-display font-bold text-2xl block leading-tight">
              Caritas
            </span>
            <span className="text-xs font-body font-medium tracking-[0.18em] uppercase text-(--color-magenta)">
              of Hope
            </span>
          </div>
          <p className="text-sm text-blue-200 font-body leading-relaxed mb-6">
            Transforming lives through compassion, community, and purposeful
            action.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center
                           text-blue-200 border border-blue-700
                           hover:text-white hover:border-(--color-magenta) hover:bg-(--color-magenta)
                           transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3
            className="font-display font-semibold text-sm uppercase tracking-widest
                         text-(--color-magenta) mb-5"
          >
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-blue-200 font-body hover:text-white
                             hover:translate-x-1 transition-all duration-150 inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3
            className="font-display font-semibold text-sm uppercase tracking-widest
                         text-(--color-magenta) mb-5"
          >
            Get Involved
          </h3>
          <ul className="space-y-2.5">
            {[
              { to: "/register", label: "Volunteer With Us" },
              { to: "/register", label: "Join as Staff" },
              { to: "/contact", label: "Partner With Us" },
              { to: "/contact", label: "Donate" },
              { to: "/trainings", label: "Attend a Training" },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-sm text-blue-200 font-body hover:text-white
                             hover:translate-x-1 transition-all duration-150 inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3
            className="font-display font-semibold text-sm uppercase tracking-widest
                         text-(--color-magenta) mb-5"
          >
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-blue-200 font-body">
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0">📍</span>
              <span>Nairobi, Kenya</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0">✉️</span>
              <a
                href="mailto:info@caritasofhope.org"
                className="hover:text-white transition-colors"
              >
                info@caritasofhope.org
              </a>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0">📞</span>
              <a
                href="tel:+254000000000"
                className="hover:text-white transition-colors"
              >
                +254 000 000 000
              </a>
            </li>
          </ul>

          {/* Newsletter teaser */}
          <div className="mt-6">
            <p className="text-xs text-blue-300 mb-2 font-body">
              Stay updated with our work
            </p>
            <Link
              to="/contact"
              className="inline-block px-4 py-2 text-xs font-medium font-body rounded-md
                         bg-(--color-magenta) text-white hover:opacity-90 transition-opacity"
            >
              Subscribe to Newsletter →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div
          className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row
                        items-center justify-between gap-2 text-xs text-blue-400 font-body"
        >
          <span>© {year} Caritas of Hope. All rights reserved.</span>
          <span className="flex gap-4">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
