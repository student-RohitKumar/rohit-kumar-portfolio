"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const mm = gsap.matchMedia();

    const revealAnimations = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    revealAnimations.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        },
      );
    });

    const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-parallax]");
    parallaxElements.forEach((el) => {
      gsap.to(el, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    const metrics = gsap.utils.toArray<HTMLElement>("[data-count-to]");
    metrics.forEach((metric) => {
      const countTo = Number(metric.dataset.countTo ?? 0);
      const prefix = metric.dataset.prefix ?? "";
      const suffix = metric.dataset.suffix ?? "";
      const decimal = Number(metric.dataset.decimal ?? 0);
      const state = { value: 0 };

      gsap.to(state, {
        value: countTo,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: metric,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          metric.textContent = `${prefix}${state.value.toFixed(decimal)}${suffix}`;
        },
      });
    });

    mm.add("(min-width: 1024px)", () => {
      const horizontalSection = document.querySelector<HTMLElement>("[data-horizontal-section]");
      const horizontalTrack = document.querySelector<HTMLElement>("[data-horizontal-track]");
      if (!horizontalSection || !horizontalTrack) return;

      const travel = horizontalTrack.scrollWidth - horizontalSection.clientWidth;
      if (travel <= 0) return;

      gsap.to(horizontalTrack, {
        x: -travel,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSection,
          start: "top top",
          end: `+=${travel}`,
          pin: true,
          scrub: 1,
        },
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [reducedMotion]);

  return null;
}
