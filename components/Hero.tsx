import Image from "next/image";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="container pt-16 pb-8">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <h1 className="h1">{profile.name}</h1>
          <p className="mt-3 text-xl text-gray-700">{profile.tagline}</p>
          <p className="mt-5 text-gray-600 max-w-2xl">
            PhD candidate in Computer Science at the University of Dayton focusing on
            adversarial robustness in reinforcement learning, deep learning for temporal
            data, and end-to-end ML systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="badge" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="badge" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="badge" href={`mailto:${profile.email}`}>Email</a>
            <span className="badge">{profile.location}</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Headshot */}
          <div className="card p-3 flex items-center justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="/avatar.png"            /* put file at public/avatar.png */
                alt={`${profile.name} headshot`}
                fill
                priority
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 12rem, 14rem"
              />
            </div>
          </div>

          {/* At a glance */}
          <div className="card p-6">
            <h3 className="h2">At a glance</h3>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
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
