import { useState } from "react";
import { trainings } from "../data/trainings";
import { databases, COLLECTIONS, DB_ID } from "../api/appwrite";
import { ID } from "appwrite";
import CTABanner from "../components/CTABanner";

function SpotsBar({ spots, spotsRemaining }) {
  const filled = spots - spotsRemaining;
  const percent = Math.round((filled / spots) * 100);
  const full = spotsRemaining === 0;
  return (
    <div className="mt-3">
      <div className="flex justify-between text-xs font-body mb-1.5">
        <span className="text-gray-400">
          {full ? "Fully booked" : `${spotsRemaining} spots left`}
        </span>
        <span className="text-gray-400">
          {filled}/{spots} registered
        </span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percent}%`,
            background: full ? "#9ca3af" : "var(--color-magenta)",
          }}
        />
      </div>
    </div>
  );
}

function RegistrationModal({ training, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "public",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      await databases.createDocument(
        DB_ID,
        COLLECTIONS.trainings,
        ID.unique(),
        {
          trainingId: training.id,
          trainingTitle: training.title,
          name: form.name,
          email: form.email,
          phone: form.phone,
          role: form.role,
          registeredAt: new Date().toISOString(),
        },
      );
      setStatus("success");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-start justify-between">
          <div>
            <p
              className="text-xs font-body font-semibold tracking-wider uppercase mb-1"
              style={{ color: training.color }}>
              Register
            </p>
            <h3 className="font-display text-xl text-(--color-blue) leading-snug">
              {training.title}
            </h3>
            <p className="text-sm text-gray-400 font-body mt-1">
              {training.date} · {training.venue}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors mt-1 shrink-0">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {status === "success" ? (
            <div className="text-center py-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "var(--color-green)" }}>
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="font-display text-2xl text-(--color-blue) mb-2">
                You're registered!
              </h4>
              <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">
                Thank you, {form.name}. We'll send confirmation details to{" "}
                {form.email}.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-md font-body font-semibold text-sm text-white
                           hover:opacity-90 transition-opacity"
                style={{ background: "var(--color-blue)" }}>
                Done
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {error && (
                <p className="text-sm text-red-500 font-body bg-red-50 px-4 py-3 rounded-lg">
                  {error}
                </p>
              )}

              <div>
                <label className="block text-xs font-body font-semibold text-gray-600 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-body
                             focus:outline-none focus:border-(--color-blue) transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-gray-600 mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-body
                             focus:outline-none focus:border-(--color-blue) transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-gray-600 mb-1.5">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-body
                             focus:outline-none focus:border-(--color-blue) transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-gray-600 mb-1.5">
                  I am registering as
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-body
                             focus:outline-none focus:border-(--color-blue) transition-colors bg-white">
                  <option value="public">Member of the Public</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="staff">Staff Member</option>
                  <option value="partner">Partner Organisation</option>
                </select>
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-lg font-body font-semibold text-sm text-white
                           hover:opacity-90 transition-opacity disabled:opacity-60 mt-2"
                style={{ background: training.color }}>
                {status === "loading"
                  ? "Registering..."
                  : "Confirm Registration"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Trainings() {
  const [selectedTraining, setSelectedTraining] = useState(null);

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
            Learn & Grow
          </p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
            Trainings & Courses
          </h1>
          <p className="text-blue-200 font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Practical, community-focused training events open to staff,
            volunteers, and members of the public. Find one that's right for
            you.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "linear-gradient(to bottom, transparent, white)",
          }}
        />
      </section>

      {/* Trainings list */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {trainings.map((training) => {
              const full = training.spotsRemaining === 0;
              return (
                <div
                  key={training.id}
                  className="bg-white rounded-2xl border border-gray-100
                             hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Color bar */}
                  <div
                    className="h-1.5"
                    style={{ background: training.color }}
                  />

                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 justify-between">
                      {/* Left — details */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span
                            className="text-xs font-body font-semibold tracking-wider uppercase
                                       px-2.5 py-1 rounded-full"
                            style={{
                              background: `color-mix(in srgb, ${training.color} 12%, white)`,
                              color: training.color,
                            }}>
                            {training.program}
                          </span>
                          {full && (
                            <span
                              className="text-xs font-body font-semibold tracking-wider uppercase
                                           px-2.5 py-1 rounded-full bg-gray-100 text-gray-400">
                              Fully Booked
                            </span>
                          )}
                        </div>

                        <h2 className="font-display text-2xl text-(--color-blue) mb-4">
                          {training.title}
                        </h2>

                        <p className="text-sm text-gray-500 font-body leading-relaxed mb-5">
                          {training.description}
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-5 text-sm font-body text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <svg
                              className="w-4 h-4 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {training.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <svg
                              className="w-4 h-4 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {training.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <svg
                              className="w-4 h-4 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {training.venue}
                          </span>
                        </div>

                        <SpotsBar
                          spots={training.spots}
                          spotsRemaining={training.spotsRemaining}
                        />
                      </div>

                      {/* Right — CTA */}
                      <div className="lg:shrink-0 lg:w-40 flex lg:flex-col items-center gap-3">
                        <button
                          onClick={() => !full && setSelectedTraining(training)}
                          disabled={full}
                          className="w-full py-3 px-5 rounded-xl font-body font-semibold text-sm
                                     text-white transition-all duration-200
                                     disabled:opacity-40 disabled:cursor-not-allowed
                                     hover:opacity-90 hover:-translate-y-0.5"
                          style={{
                            background: full ? "#9ca3af" : training.color,
                          }}>
                          {full ? "Fully Booked" : "Register Now"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty state — for when Appwrite returns no trainings */}
          {trainings.length === 0 && (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-(--color-blue) mb-2">
                No upcoming trainings
              </h3>
              <p className="text-gray-400 font-body text-sm">
                Check back soon — new training events are added regularly.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABanner />

      {/* Registration modal */}
      {selectedTraining && (
        <RegistrationModal
          training={selectedTraining}
          onClose={() => setSelectedTraining(null)}
        />
      )}
    </div>
  );
}