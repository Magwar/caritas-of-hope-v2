import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/blog", label: "Blog" },
  { to: "/trainings", label: "Trainings" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300
        ${scrolled ? "shadow-md" : "shadow-none"}
      `}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-(--color-magenta)" />

      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex flex-col leading-none group"
        >
          <span
            className="font-display font-bold text-xl tracking-tight text-(--color-blue)
                       group-hover:text-(--color-magenta) transition-colors duration-200"
          >
            Caritas
          </span>
          <span className="text-xs font-body font-medium tracking-[0.18em] uppercase text-(--color-magenta)">
            of Hope
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={({ isActive }) => `
                  relative px-3 py-2 text-sm font-body font-medium rounded-md
                  transition-colors duration-150
                  ${
                    isActive
                      ? "text-(--color-magenta)"
                      : "text-(--color-blue) hover:text-(--color-magenta) hover:bg-rose-50"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-(--color-magenta) rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <Link
              to="/portal"
              className="px-4 py-2 text-sm font-medium font-body rounded-md
                         bg-(--color-blue) text-white
                         hover:bg-(--color-magenta) transition-colors duration-200"
            >
              My Portal
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium font-body text-(--color-blue)
                           hover:text-(--color-magenta) transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium font-body rounded-md
                           bg-(--color-magenta) text-white
                           hover:opacity-90 transition-opacity duration-200"
              >
                Get Involved
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10
                     gap-1.5 rounded-md hover:bg-gray-100 transition-colors"
        >
          <span
            className={`block w-5 h-0.5 bg-(--color-blue) rounded transition-all duration-300
                            ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-(--color-blue) rounded transition-all duration-300
                            ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-(--color-blue) rounded transition-all duration-300
                            ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100
          ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={({ isActive }) => `
                  block px-3 py-2.5 text-sm font-body font-medium rounded-md
                  transition-colors duration-150
                  ${
                    isActive
                      ? "text-(--color-magenta) bg-rose-50"
                      : "text-(--color-blue) hover:text-(--color-magenta) hover:bg-rose-50"
                  }
                `}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="px-6 pb-5 flex flex-col gap-2">
          {user ? (
            <Link
              to="/portal"
              onClick={closeMenu}
              className="text-center px-4 py-2.5 text-sm font-medium font-body rounded-md
                         bg-(--color-blue) text-white hover:bg-(--color-magenta) transition-colors"
            >
              My Portal
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeMenu}
                className="text-center px-4 py-2.5 text-sm font-medium font-body rounded-md
                           border border-(--color-blue) text-(--color-blue)
                           hover:border-(--color-magenta) hover:text-(--color-magenta) transition-colors"
              >
                Login
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-center px-4 py-2.5 text-sm font-medium font-body rounded-md
                           bg-(--color-magenta) text-white hover:opacity-90 transition-opacity"
              >
                Get Involved
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
