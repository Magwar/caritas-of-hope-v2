const values = [
  {
    title: "Compassion",
    description: "We lead with empathy and care in everything we do.",
    color: "var(--color-magenta)",
  },
  {
    title: "Dignity",
    description: "Every person deserves to be treated with respect and honour.",
    color: "var(--color-blue)",
  },
  {
    title: "Integrity",
    description:
      "We are transparent, honest, and accountable in all our actions.",
    color: "var(--color-green)",
  },
  {
    title: "Community",
    description:
      "We believe in the power of people coming together for a shared purpose.",
    color: "var(--color-magenta)",
  },
  {
    title: "Excellence",
    description: "We pursue the highest standards in everything we deliver.",
    color: "var(--color-blue)",
  },
  {
    title: "Hope",
    description: "We believe in a better future for every person we serve.",
    color: "var(--color-green)",
  },
];

export default function VisionMission() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              label: "Our Vision",
              heading:
                "A world where every person lives with dignity and hope.",
              body: "We envision thriving, self-sufficient communities across Kenya where no one is left behind — where education, health, and opportunity are accessible to all, regardless of background or circumstance.",
              color: "var(--color-magenta)",
            },
            {
              label: "Our Mission",
              heading:
                "Transforming lives through compassion, programs, and community.",
              body: "Our mission is to empower vulnerable individuals and communities in Kenya through targeted programs in education, health, youth development, agriculture, and women's empowerment — restoring dignity and creating lasting change.",
              color: "var(--color-blue)",
            },
          ].map(({ label, heading, body, color }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-10 border border-gray-100 hover:shadow-md
                         transition-shadow duration-300">
              <div
                className="w-12 h-1 rounded-full mb-6"
                style={{ background: color }}
              />
              <p
                className="text-xs font-body font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color }}>
                {label}
              </p>
              <h3 className="font-display text-2xl text-(--color-blue) leading-snug mb-4">
                {heading}
              </h3>
              <p className="text-gray-500 font-body leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
            What Guides Us
          </p>
          <h2 className="font-display text-4xl text-(--color-blue)">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {values.map(({ title, description, color }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 border border-gray-100
                         hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4
                           text-white font-display font-bold text-lg"
                style={{ background: color }}>
                {title[0]}
              </div>
              <h3 className="font-display text-lg text-(--color-blue) mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}