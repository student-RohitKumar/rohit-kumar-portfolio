const skillGroups = [
  {
    title: "AI / ML",
    items: ["RAG", "LLM APIs", "Vector Embeddings", "Semantic Search", "Reranking", "Prompt Engineering", "AI Agents"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Async Jobs", "Rate Limiting", "Retry Backoff"],
  },
  {
    title: "Databases",
    items: ["MongoDB Atlas", "PostgreSQL", "Supabase", "Qdrant"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Google Search Console"],
  },
];

export function SkillsSection() {
  return (
    <section className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <header data-reveal className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Skills</p>
          <h2 className="mt-4 text-4xl text-white sm:text-5xl">Interactive engineering ecosystem.</h2>
        </header>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} data-reveal className="rounded-sm border border-white/10 bg-zinc-950/80 p-5 transition-colors duration-300 hover:border-zinc-400/50">
              <h3 className="text-sm uppercase tracking-[0.24em] text-zinc-400">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-zinc-200">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
