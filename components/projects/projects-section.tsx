import Link from "next/link";

const courtFlow = [
  "Documents",
  "Chunking",
  "Voyage AI Embeddings",
  "MongoDB Atlas Vector Search",
  "LLM Reranking",
  "Conversation Memory",
  "Final Answer",
];

const courtTags = [
  "RAG architecture",
  "semantic retrieval",
  "vector search",
  "reranking",
  "query rewriting",
  "conversational memory",
  "production REST APIs",
  "Groq/Llama models",
];

export function ProjectsSection() {
  return (
    <section id="work" className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl space-y-28">
        <header data-reveal className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-zinc-500">Selected Work</p>
          <h2 className="text-4xl text-white sm:text-5xl">Production AI systems and products.</h2>
        </header>

        <article data-reveal className="space-y-8">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Project 01 · COURTKACHAHRI</p>
          <h3 className="text-3xl text-white sm:text-4xl">AI Engineer · Production RAG System</h3>
          <p className="max-w-3xl text-zinc-300">Built a custom RAG pipeline from scratch without LangChain/LlamaIndex.</p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-400">
            {courtFlow.map((step, idx) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span>{step}</span>
                {idx !== courtFlow.length - 1 && <span aria-hidden>→</span>}
              </span>
            ))}
          </div>
          <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-zinc-300">
            {courtTags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
          <p className="text-5xl font-medium text-white sm:text-7xl" data-count-to="1.09" data-decimal="2" data-suffix="M+">
            0
          </p>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">vectors migrated from Qdrant to MongoDB Atlas</p>
        </article>

        <section data-horizontal-section className="space-y-8 overflow-hidden">
          <div data-reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Project 02 · NEXTAITODAY</p>
            <h3 className="mt-4 text-3xl text-white sm:text-4xl">Founder · Full-Stack Engineer</h3>
            <p className="mt-4 max-w-3xl text-zinc-300">
              AI news/discovery platform for Indian developers/students/founders/enthusiasts, migrated from static HTML/JS to a full-stack Next.js system.
            </p>
          </div>
          <div data-reveal className="rounded-sm border border-white/10 bg-zinc-950 p-4">
            <div className="rounded-sm border border-white/10 p-3">
              <div className="mb-4 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <div data-parallax className="grid gap-3 sm:grid-cols-2">
                <div className="h-24 rounded bg-zinc-900" />
                <div className="h-24 rounded bg-zinc-900" />
                <div className="h-24 rounded bg-zinc-900" />
                <div className="h-24 rounded bg-zinc-900" />
              </div>
            </div>
          </div>
          <div data-horizontal-track className="flex gap-6 lg:w-[180%]">
            <div className="project-panel" data-cursor-label="VIEW">
              <h4 className="text-xl text-white">2,400+ weekly subscribers</h4>
              <p className="mt-3 text-zinc-400">Next.js · TypeScript · Supabase · PostgreSQL · Auth · AI Tool Finder</p>
            </div>
            <div className="project-panel">
              <p className="text-zinc-400">Groq API · Tool submission workflow · Admin approval · REST APIs · Technical SEO/AEO</p>
              <Link href="https://www.nextaitoday.in/" target="_blank" rel="noreferrer" className="link-line mt-8 inline-flex" data-cursor-label="OPEN">
                Visit NextAIToday →
              </Link>
            </div>
          </div>
        </section>

        <article data-reveal className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Project 03 · LAWEXPLAINER.AI</p>
            <h3 className="mt-4 text-3xl text-white">Plain-language legal AI assistant</h3>
            <p className="mt-4 text-zinc-300">AI legal assistant translating Indian legal codes into plain language.</p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-zinc-500">Python · Google Gemini API · Gradio · Hugging Face Spaces</p>
            <Link href="#contact" className="link-line mt-8 inline-flex" data-cursor-label="OPEN">
              View Project →
            </Link>
          </div>
          <div className="rounded-sm border border-white/10 bg-zinc-900 p-6">
            <div className="rounded-sm border border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">LawExplain AI</p>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <div className="h-2 w-3/4 rounded bg-zinc-700" />
                <div className="h-2 w-full rounded bg-zinc-700" />
                <div className="h-2 w-2/3 rounded bg-zinc-700" />
              </div>
            </div>
          </div>
        </article>

        <article data-reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Project 04 · AI EMPLOYEES (In Development)</p>
          <h3 className="mt-4 text-3xl text-white">Multi-agent orchestration beyond single-call RAG.</h3>
          <p className="mt-4 max-w-3xl text-zinc-300">
            A multi-agent orchestration system where one primary orchestrator coordinates specialized branch agents.
          </p>
          <div className="mt-8 grid gap-3 rounded-sm border border-white/10 p-6 text-sm uppercase tracking-[0.18em] text-zinc-300 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded border border-white/10 p-4 text-center">Orchestrator</div>
            <div className="rounded border border-white/10 p-4 text-center">Agent A</div>
            <div className="rounded border border-white/10 p-4 text-center">Agent B</div>
            <div className="rounded border border-white/10 p-4 text-center">Agent C</div>
            <div className="rounded border border-white/10 p-4 text-center">Agent D</div>
          </div>
        </article>
      </div>
    </section>
  );
}
