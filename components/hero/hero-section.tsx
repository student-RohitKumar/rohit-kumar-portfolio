export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-[92vh] flex-col justify-end px-6 pb-14 pt-28 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <p data-reveal className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-400">
          AI Engineer
        </p>
        <h1 className="hero-title text-white">
          <span data-reveal className="block overflow-hidden">ROHIT</span>
          <span data-reveal className="block overflow-hidden">KUMAR</span>
        </h1>
        <p data-reveal className="mt-8 max-w-2xl text-2xl leading-tight text-zinc-100 sm:text-3xl">
          I build AI systems that actually ship.
        </p>
        <p data-reveal className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          Final-year B.Tech IT student building production RAG systems, AI-powered products, and full-stack experiences.
        </p>
        <ul data-reveal className="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-[0.15em] text-zinc-300">
          <li className="chip">Kanpur, India</li>
          <li className="chip">AI Engineer</li>
          <li className="chip">Founder — NextAIToday</li>
        </ul>
      </div>
      <p data-reveal className="mt-16 text-xs uppercase tracking-[0.25em] text-zinc-500">
        Scroll to explore ↓
      </p>
    </section>
  );
}
