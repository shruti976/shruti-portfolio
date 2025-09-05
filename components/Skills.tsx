import { profile } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="container py-10">
      <h2 className="h2 mb-6">Skills</h2>
      <div className="card p-6">
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((s, i) => (
            <span key={i} className="badge">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
