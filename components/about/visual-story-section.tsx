import Image from "next/image";

const images = [
  { src: "/images/rohit-01.jpg", alt: "Rohit Kumar portrait one" },
  { src: "/images/rohit-02.jpg", alt: "Rohit Kumar portrait two" },
  { src: "/images/rohit-03.jpg", alt: "Rohit Kumar portrait three" },
];

export function VisualStorySection() {
  return (
    <section aria-label="Personal visual story" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-12">
        {images.map((image, index) => (
          <div
            key={image.src}
            data-reveal
            data-parallax
            className={`relative overflow-hidden rounded-sm border border-white/10 bg-zinc-900 ${index === 1 ? "md:col-span-5 md:translate-y-16" : "md:col-span-3"} ${index === 2 ? "md:col-span-4" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={1200}
              className="h-[52vh] w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
        <p data-reveal className="md:col-span-12 mt-4 text-right text-xs uppercase tracking-[0.25em] text-zinc-500">
          Systems. Products. Execution.
        </p>
      </div>
    </section>
  );
}
