import { Link } from "react-router-dom";
import { team } from "../data/team";
import CTABanner from "../components/CTABanner";

function ManagementCard({ name, role, bio, initial, color }) {
  return (
    <div
      className="group bg-white rounded-2xl border border-gray-100
                    hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Photo placeholder */}
      <div
        className="w-full h-52 flex flex-col items-center justify-center gap-3"
        style={{ background: color }}>
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center
                     text-white font-display font-bold text-3xl"
          style={{ background: "rgba(255,255,255,0.2)" }}>
          {initial}
        </div>
        <span
          className="text-xs font-body tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          Photo coming soon
        </span>
      </div>

      <div className="p-7">
        <h3 className="font-display text-xl text-(--color-blue) mb-1">
          {name}
        </h3>
        <p className="text-sm font-body font-semibold mb-4" style={{ color }}>
          {role}
        </p>
        <p className="text-sm text-gray-500 font-body leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

function StaffCard({ name, role, initial, color }) {
  return (
    <div
      className="group flex items-center gap-4 bg-white rounded-2xl p-5
                    border border-gray-100 hover:shadow-md hover:-translate-y-0.5
                    transition-all duration-300">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center
                   text-white font-display font-bold text-xl shrink-0
                   group-hover:scale-105 transition-transform duration-300"
        style={{ background: color }}>
        {initial}
      </div>
      <div>
        <h3 className="font-body font-semibold text-(--color-blue) text-sm">
          {name}
        </h3>
        <p className="text-xs text-gray-400 font-body mt-0.5">{role}</p>
      </div>
    </div>
  );
}

function VolunteerCard({ name, role, initial, color }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center
                   text-white font-display font-bold text-xl mb-3 shadow-sm
                   group-hover:scale-105 transition-transform duration-300"
        style={{ background: color }}>
        {initial}
      </div>
      <h3 className="font-body font-semibold text-sm text-(--color-blue)">
        {name}
      </h3>
      <p className="text-xs text-gray-400 font-body mt-0.5">{role}</p>
    </div>
  );
}

export default function Team() {
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
            The People
          </p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
            Meet Our Team
          </h1>
          <p className="text-blue-200 font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Behind every program and every life changed is a dedicated team of
            professionals and volunteers united by one shared mission.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "linear-gradient(to bottom, transparent, white)",
          }}
        />
      </section>

      {/* Management */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
              Leadership
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue) mb-4">
              Management Team
            </h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto leading-relaxed">
              Experienced leaders driving the vision and strategy of Caritas of
              Hope.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.management.map((member) => (
              <ManagementCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
              Our People
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue) mb-4">
              Staff Members
            </h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto leading-relaxed">
              Dedicated professionals working on the ground across all five
              programs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.staff.map((member) => (
              <StaffCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
              Community
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue) mb-4">
              Our Volunteers
            </h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto leading-relaxed">
              The heartbeat of Caritas of Hope — passionate individuals giving
              their time and skills to serve others.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {team.volunteers.map((member) => (
              <VolunteerCard key={member.name} {...member} />
            ))}
          </div>

          {/* Join as volunteer CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 font-body mb-4">
              Want to join our volunteer team?
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md
                         font-body font-semibold text-sm text-white
                         hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "var(--color-magenta)" }}>
              Volunteer With Us
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

      <CTABanner />
    </div>
  );
}