const steps = [
  "Understand the problem",
  "Design the system",
  "Build the infrastructure",
  "Integrate intelligence",
  "Ship",
  "Debug what breaks",
  "Improve",
];

export function HowIBuildSection() {
  return (
    <section className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-5xl">
        <p data-reveal className="text-xs uppercase tracking-[0.25em] text-zinc-500">How I Build</p>
        <h2 data-reveal className="mt-4 text-4xl text-white sm:text-5xl">From idea → architecture → production.</h2>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step} data-reveal className="rounded-sm border border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-zinc-100">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
