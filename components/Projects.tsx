import { profile } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="container py-10">
      <h2 className="h2 mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {profile.projects.map((p, idx) => (
          <article key={idx} className="card p-6">
            <h3 className="text-xl font-semibold text-white">{p.name}</h3>
            <p className="mt-2 text-gray-300">{p.description}</p>
            <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
