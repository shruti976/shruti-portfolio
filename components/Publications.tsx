import { publications } from "../data/profile";

export default function Publications() {
  const featured = publications.find((p) => p.featured);
  const rest = publications.filter((p) => !p.featured);

  return (
    <section id="publications" className="container py-12">
      <h2 className="h2 mb-6">Publications</h2>

      {featured && (
        <a
          href={featured.url}
          target="_blank"
          rel="noreferrer"
          className="group block rounded-2xl p-[1px] bg-gradient-to-tr
                     from-blue-500/40 via-fuchsia-500/25 to-cyan-400/40
                     hover:from-blue-500/70 hover:via-fuchsia-500/35 hover:to-cyan-400/70
                     transition-all duration-300 mb-8"
        >
          <div className="rounded-2xl bg-[#1E1E2F] border border-gray-700/70 shadow-soft p-5">
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
              {featured.image && (
                <div className="relative md:w-80 overflow-visible">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-48 md:h-52 object-cover rounded-xl border border-gray-700/70 shadow-md pub-zoom"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40">
                    Featured
                  </span>
                  {featured.venue && <span className="text-xs text-gray-400">{featured.venue}</span>}
                  {featured.year && <span className="text-xs text-gray-500">• {featured.year}</span>}
                </div>
                <h3 className="text-xl font-semibold text-white">{featured.title}</h3>
                {featured.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {featured.tags.map((t, i) => (
                      <span key={i} className="badge border-gray-600 text-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </a>
      )}

      {rest.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8">
          {rest.map((p, idx) => (
            <a
              key={idx}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl p-[1px] bg-gradient-to-tr
                         from-blue-500/40 via-fuchsia-500/25 to-cyan-400/40
                         hover:from-blue-500/70 hover:via-fuchsia-500/35 hover:to-cyan-400/70
                         transition-all duration-300"
            >
              <div className="rounded-2xl bg-[#1E1E2F] border border-gray-700/70 shadow-soft p-5">
                {p.image && (
                  <div className="relative overflow-visible mb-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-44 object-cover rounded-xl border border-gray-700/70 shadow-md pub-zoom"
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {p.venue && <span className="text-xs text-gray-400">{p.venue}</span>}
                    {p.year && <span className="text-xs text-gray-500">• {p.year}</span>}
                  </div>
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  {p.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t, i) => (
                        <span key={i} className="badge border-gray-600 text-gray-200">{t}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
