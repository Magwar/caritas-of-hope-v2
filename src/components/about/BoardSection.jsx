const boardMembers = [
  { name: "Board Member One",   role: "Chairperson",          initial: "B" },
  { name: "Board Member Two",   role: "Vice Chairperson",     initial: "B" },
  { name: "Board Member Three", role: "Secretary",            initial: "B" },
  { name: "Board Member Four",  role: "Treasurer",            initial: "B" },
  { name: "Board Member Five",  role: "Board Member",         initial: "B" },
  { name: "Board Member Six",   role: "Board Member",         initial: "B" },
];

const colors = [
  "var(--color-blue)",
  "var(--color-magenta)",
  "var(--color-green)",
  "var(--color-blue)",
  "var(--color-magenta)",
  "var(--color-green)",
];

export default function BoardSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
            Governance
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue) mb-4">
            Board of Directors
          </h2>
          <p className="text-gray-500 font-body max-w-xl mx-auto leading-relaxed">
            Our board brings together experienced leaders united by a shared commitment
            to the mission of Caritas of Hope.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {boardMembers.map(({ name, role, initial }, index) => (
            <div
              key={name}
              className="flex flex-col items-center text-center group"
            >
              {/* Photo placeholder */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center
                           text-white font-display font-bold text-2xl mb-4 shadow-md
                           group-hover:scale-105 transition-transform duration-300"
                style={{ background: colors[index] }}
              >
                {initial}
              </div>
              <h3 className="font-body font-semibold text-sm text-(--color-blue) mb-1">{name}</h3>
              <p className="text-xs text-gray-400 font-body">{role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}