import Image from "next/image";
import type { Publication } from "../data/profile";

export default function PubCard({ pub }: { pub: Publication }) {
  return (
    <a
      href={pub.url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl p-[1px] bg-gradient-to-tr
                 from-blue-500/35 via-fuchsia-500/20 to-cyan-400/35
                 hover:from-blue-500/60 hover:via-fuchsia-500/35 hover:to-cyan-400/60
                 transition-all duration-300"
    >
      <div className="rounded-2xl bg-[#1E1E2F] border border-gray-700/70 shadow-soft h-full">
        <div className="flex gap-4 p-4">
          {pub.image && (
            <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-visible ring-1 ring-gray-700/60">
              <Image
                src={pub.image}
                alt={pub.title}
                fill
                className="object-cover rounded-lg pub-zoom"
                sizes="64px"
                priority={pub.featured}
              />
            </div>
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {pub.featured && (
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40">
                  Featured
                </span>
              )}
              {pub.venue && <span className="text-xs text-gray-400">{pub.venue}</span>}
              {pub.year && <span className="text-xs text-gray-500">• {pub.year}</span>}
            </div>
            <h4 className="font-semibold text-white leading-snug line-clamp-2">{pub.title}</h4>
            {pub.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {pub.tags.slice(0, 3).map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-full border border-gray-600/70 text-[11px] text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </a>
  );
}
