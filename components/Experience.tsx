import { profile } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="container py-10">
      <h2 className="h2 mb-6">Experience</h2>
      <div className="grid gap-6">
        {profile.experience.map((exp, idx) => (
          <article key={idx} className="card p-6">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h3 className="text-xl font-semibold">
                {exp.role} — {exp.company}
              </h3>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
