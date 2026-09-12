"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const finePointerDesktop = useMediaQuery("(pointer: fine) and (min-width: 1024px)");
  const [activeLabel, setActiveLabel] = useState("");
  const enabled = finePointerDesktop && !reducedMotion;

  useEffect(() => {
    if (!enabled) return;

    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const handleMove = (event: MouseEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);
    };

    const targets = document.querySelectorAll<HTMLElement>("a, button, [data-cursor-label]");
    const enterHandlers = Array.from(targets).map((target) => {
      const label = target.dataset.cursorLabel ?? "EXPLORE";
      const onEnter = () => {
        cursor.dataset.active = "true";
        setActiveLabel(label);
      };
      const onLeave = () => {
        cursor.dataset.active = "false";
        setActiveLabel("");
      };
      target.addEventListener("mouseenter", onEnter);
      target.addEventListener("mouseleave", onLeave);
      return { target, onEnter, onLeave };
    });

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      enterHandlers.forEach(({ target, onEnter, onLeave }) => {
        target.removeEventListener("mouseenter", onEnter);
        target.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div id="custom-cursor" aria-hidden className="pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2">
      <div className="cursor-shell">
        <span className="cursor-label">{activeLabel}</span>
      </div>
    </div>
  );
}
