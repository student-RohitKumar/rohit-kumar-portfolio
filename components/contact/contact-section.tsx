import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-24 pb-32 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-5xl">
        <h2 data-reveal className="text-4xl text-white sm:text-6xl">Let&apos;s build something interesting.</h2>
        <p data-reveal className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
          Available for AI Engineering, Software Engineering and high-impact product opportunities.
        </p>
        <div data-reveal className="mt-10 flex flex-col gap-5 text-lg text-zinc-100">
          <Link href="mailto:rohitcloud8543@gmail.com" className="link-line w-fit" data-cursor-label="OPEN">
            GET IN TOUCH ↗
          </Link>
          <Link href="https://www.linkedin.com/in/rohit-kumar-437514330/" target="_blank" rel="noreferrer" className="link-line w-fit" data-cursor-label="OPEN">
            LINKEDIN ↗
          </Link>
          <p className="text-sm text-zinc-500">rohitcloud8543@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
