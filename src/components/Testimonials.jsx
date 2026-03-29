const testimonials = [
  {
    quote:
      "Caritas of Hope gave my daughter access to education I could never have afforded. Today she reads and writes — that changes everything.",
    name: "Mary W.",
    role: "Parent, Education Program",
    initial: "M",
  },
  {
    quote:
      "Through the Women Empowerment program, I learned skills that helped me start my own small business. I now provide for my family.",
    name: "Aisha K.",
    role: "Women Empowerment Program",
    initial: "A",
  },
  {
    quote:
      "The health outreach team came to our village when no one else did. They didn't just treat us — they showed us we matter.",
    name: "James O.",
    role: "Health & Wellness Program",
    initial: "J",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-(--color-magenta) mb-3">
            Stories
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-(--color-blue) mb-4">
            Voices of Hope
          </h2>
          <p className="text-gray-500 font-body max-w-xl mx-auto leading-relaxed">
            Behind every program is a person whose life has been touched. Here
            are a few of their stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, role, initial }) => (
            <div
              key={name}
              className="rounded-2xl p-8 border border-gray-100 bg-gray-50
                         hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
              {/* Quote mark */}
              <div
                className="font-display text-5xl leading-none mb-4"
                style={{ color: "var(--color-magenta)" }}>
                "
              </div>
              <p className="text-gray-600 font-body leading-relaxed flex-1 mb-8">
                {quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center
                             text-white text-sm font-bold font-display shrink-0"
                  style={{ background: "var(--color-blue)" }}>
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
          ))}
        </div>
      </div>
    </section>
  );
}