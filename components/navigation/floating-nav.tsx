"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full px-5 py-5 transition-all duration-700 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-sm">
        <Link href="#top" className="text-sm tracking-[0.3em] text-zinc-200 focus-visible:outline-offset-4" data-cursor-label="OPEN">
          RK
        </Link>
        <ul className="flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-zinc-300 sm:gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-white focus-visible:text-white" data-cursor-label="OPEN">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
