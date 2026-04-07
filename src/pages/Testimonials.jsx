import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";
import CTABanner from "../components/CTABanner";

const metrics = [
  {
    value: 500,
    suffix: "+",
    label: "Lives Reached",
    color: "var(--color-magenta)",
  },
  {
    value: 5,
    suffix: "",
    label: "Active Programs",
    color: "var(--color-green)",
  },
  {
    value: 50,
    suffix: "+",
    label: "Volunteers",
    color: "var(--color-magenta)",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years of Service",
    color: "var(--color-green)",
  },
];

// Animated counter hook
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function Counter({ value, suffix, label, color, animate }) {
  const count = useCounter(value, 1800, animate);
  return (
    <div className="text-center">
      <div
        className="font-display font-bold text-5xl lg:text-6xl mb-2"
        style={{ color }}>
        {animate ? count : 0}
        {suffix}
      </div>
      <div className="text-blue-200 font-body text-sm">{label}</div>
    </div>
  );
}

export default function Testimonials() {
  const metricsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Trigger counter animation when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 },
    );
    if (metricsRef.current) observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 bg-(--color-blue) overflow-hidden">
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
            Impact Stories
          </p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
            Changing Lives Together
          </h1>
          <p className="text-blue-200 font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Every story here represents a real person whose life has been
            touched by compassion, community, and purposeful action.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "linear-gradient(to bottom, transparent, white)",
          }}
        />
      </section>

      {/* Testimonials grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
              Voices
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue) mb-4">
              Stories of Hope
            </h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto leading-relaxed">
              In their own words — the people whose lives have been changed by
              Caritas of Hope programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(
              ({ quote, name, role, program, color, initial }) => (
                <div
                  key={name}
                  className="group bg-gray-50 rounded-2xl p-8 border border-gray-100
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                           flex flex-col">
                  {/* Program tag */}
                  <div className="mb-5">
                    <span
                      className="text-xs font-body font-semibold tracking-wider uppercase
                               px-2.5 py-1 rounded-full"
                      style={{
                        background: `color-mix(in srgb, ${color} 12%, white)`,
                        color,
                      }}>
                      {program}
                    </span>
                  </div>

                  {/* Quote mark */}
                  <div
                    className="font-display text-5xl leading-none mb-3"
                    style={{ color }}>
                    "
                  </div>

                  <p className="text-gray-600 font-body leading-relaxed flex-1 mb-8">
                    {quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center
                               text-white text-sm font-bold font-display shrink-0"
                      style={{ background: color }}>
                      {initial}
                    </div>
                    <div>
                      <p className="text-sm font-body font-semibold text-(--color-blue)">
                        {name}
                      </p>
                      <p className="text-xs text-gray-400 font-body">{role}</p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Animated impact metrics */}
      <section
        ref={metricsRef}
        className="py-24 bg-(--color-blue) relative overflow-hidden">
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
              By The Numbers
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-blue-200 font-body max-w-xl mx-auto leading-relaxed">
              Every number tells a story of a life transformed.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric) => (
              <Counter key={metric.label} {...metric} animate={animate} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
            Be Part of It
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue) mb-6">
            Your Story Could Be Next
          </h2>
          <p className="text-gray-500 font-body leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you volunteer, donate, or simply spread the word — you have
            the power to change someone's story. Join us today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3.5 rounded-md font-body font-semibold text-sm
                         text-white hover:opacity-90 hover:-translate-y-0.5
                         transition-all duration-200"
              style={{ background: "var(--color-magenta)" }}>
              Volunteer With Us
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-md font-body font-semibold text-sm
                         text-(--color-blue) border border-(--color-blue)
                         hover:bg-(--color-blue) hover:text-white transition-all duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}