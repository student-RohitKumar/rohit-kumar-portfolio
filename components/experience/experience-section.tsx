export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl space-y-20">
        <header data-reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Experience</p>
          <h2 className="mt-4 text-4xl text-white sm:text-5xl">From documents to production AI.</h2>
        </header>

        <article data-reveal className="grid gap-8 border-l border-white/10 pl-6 md:grid-cols-5 md:pl-8">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">2025 → Present</p>
            <h3 className="mt-3 text-2xl text-white">AI Engineer</h3>
            <p className="mt-1 text-zinc-400">CourtKachahri</p>
          </div>
          <ul className="space-y-3 text-zinc-300 md:col-span-3">
            <li>Custom production RAG pipeline with Voyage embeddings and MongoDB Atlas vector search.</li>
            <li>LLM reranking, conversation memory, and query reliability enhancements.</li>
            <li>Node.js/Express backend, production REST APIs, async jobs, and debugging pipelines.</li>
            <li>Security architecture and production reliability hardening.</li>
          </ul>
        </article>

        <article data-reveal className="grid gap-8 border-l border-white/10 pl-6 md:grid-cols-5 md:pl-8">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">2024</p>
            <h3 className="mt-3 text-2xl text-white">Virtual Lab Intern</h3>
            <p className="mt-1 text-zinc-400">IIT Kanpur</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-zinc-300">Built a browser-based conductometric titration simulation for digital lab learning.</p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-500">JavaScript · HTML5 · CSS3</p>
          </div>
        </article>
      </div>
    </section>
  );
}
