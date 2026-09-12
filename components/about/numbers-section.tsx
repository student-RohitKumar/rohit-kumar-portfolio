const numbers = [
  { value: "1.09", suffix: "M+", label: "vectors migrated", decimal: "2" },
  { value: "2400", suffix: "+", label: "weekly subscribers", decimal: "0" },
  { value: "3", suffix: "+", label: "production AI / product systems", decimal: "0" },
  { value: "2025", suffix: " →", label: "AI Engineering", decimal: "0" },
];

export function NumbersSection() {
  return (
    <section className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2">
        {numbers.map((item) => (
          <article key={item.label} data-reveal className="rounded-sm border border-white/10 p-7">
            <p className="text-5xl text-white sm:text-6xl" data-count-to={item.value} data-suffix={item.suffix} data-decimal={item.decimal}>
              0
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
