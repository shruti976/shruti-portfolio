import Image from "next/image";
import { profile, publications } from "../data/profile";
import PubCard from "./PubCard";

export default function Hero() {
  const sorted = [
    ...publications.filter((p) => p.featured),
    ...publications.filter((p) => !p.featured),
  ].slice(0, 4); // show 4 on top

  return (
    <section className="container pt-14 pb-6">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {/* LEFT */}
        <div className="md:col-span-2">
          <h1 className="h1">{profile.name}</h1>
          <p className="mt-2 text-xl text-gray-300">{profile.tagline}</p>

          {/* Email - tighter margin (clickable) */}
          <a
            className="mt-1 inline-block text-gray-400 hover:text-gray-200 underline decoration-gray-600/60 decoration-dotted"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>

          <p className="mt-4 text-white-300/80 max-w-2xl">
            PhD candidate in Computer Science at the University of Dayton
            focusing on adversarial robustness in reinforcement learning,
            deep learning for temporal data, and end-to-end ML systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="badge"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="badge"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="badge" href={`mailto:${profile.email}`}>
              Email
            </a>
            <span className="badge">{profile.location}</span>
          </div>

          {/* FANCY selected publications (cards + hover zoom) */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-3">
              Selected publications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {sorted.map((p, i) => (
                <PubCard key={i} pub={p} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="card p-3 flex items-center justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="/avatar.png"
                alt={`${profile.name} headshot`}
                fill
                priority
                className="rounded-full object-cover ring-2 ring-gray-700"
                sizes="(max-width: 768px) 12rem, 14rem"
              />
            </div>
          </div>

          <div className="card p-6">
            <h3 className="h2">At a glance</h3>
            <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
              <li>RL adversarial defenses (Gym: LunarLander, BipedalWalker)</li>
              <li>Deep learning for time series (LSTM)</li>
              <li>Recommender systems (KNN/SVD)</li>
              <li>Computer vision (OpenCV, dlib)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
