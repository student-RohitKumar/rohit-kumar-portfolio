import Link from "next/link";

const links = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/rohit-kumar-437514330/" },
  { label: "GITHUB", href: "https://github.com/student-RohitKumar" },
  { label: "NEXTAITODAY", href: "https://www.nextaitoday.in/" },
];

export function LinksSection() {
  return (
    <section className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        {links.map((link) => (
          <Link key={link.label} href={link.href} target="_blank" rel="noreferrer" className="link-line flex w-fit items-center gap-3 text-2xl text-zinc-100 sm:text-3xl" data-cursor-label="OPEN">
            <span>{link.label}</span>
            <span aria-hidden>↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
