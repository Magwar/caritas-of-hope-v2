const milestones = [
  {
    date: "September 20, 2023",
    title: "Caritas of Hope Founded",
    description:
      "Caritas of Hope was officially established in Nairobi, Kenya with a vision to serve the most vulnerable in our communities through compassion and purposeful action.",
    color: "var(--color-magenta)",
  },
  {
    date: "January 7, 2025",
    title: "Program Expansion",
    description:
      "We expanded our reach and operations, growing our team and deepening our presence in underserved communities across the region.",
    color: "var(--color-blue)",
  },
  {
    date: "May 8, 2025",
    title: "Five Programs Launched",
    description:
      "All five flagship programs — Education & Literacy, Health & Wellness, Youth Empowerment, Agriculture & Food Security, and Women Empowerment — officially launched.",
    color: "var(--color-green)",
  },
];

export default function OrgHistory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
            Our Journey
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue) mb-4">
            How We Got Here
          </h2>
          <p className="text-gray-500 font-body max-w-xl mx-auto leading-relaxed">
            Every great mission has a beginning. Here's ours.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100
                         md:-translate-x-0.5"
          />

          <div className="space-y-12">
            {milestones.map(({ date, title, description, color }, index) => (
              <div
                key={date}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16
                            ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-4 border-white
                             -translate-x-1.5 md:-translate-x-2 shadow-md z-10 mt-1"
                  style={{ background: color }}
                />

                {/* Date — hidden on mobile, shown on desktop opposite side */}
                <div
                  className={`hidden md:flex md:w-1/2 items-start
                                 ${index % 2 === 0 ? "justify-end pr-16 pt-0.5" : "justify-start pl-16 pt-0.5"}`}>
                  <span className="text-sm font-body font-semibold text-gray-400">
                    {date}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2
                                 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                  <span className="text-xs font-body font-semibold text-gray-400 block mb-2 md:hidden">
                    {date}
                  </span>
                  <div
                    className="bg-gray-50 rounded-2xl p-7 border border-gray-100
                                  hover:shadow-md transition-shadow duration-300">
                    <div
                      className="w-10 h-1 rounded-full mb-4"
                      style={{ background: color }}
                    />
                    <h3 className="font-display text-xl text-(--color-blue) mb-3">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-500 font-body leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}