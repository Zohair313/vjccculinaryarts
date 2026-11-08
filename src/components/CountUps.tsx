"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CountUps() {
  useGSAP(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-count]");

    elements.forEach((el) => {
      const target = parseFloat(el.dataset.count ?? "");
      if (Number.isNaN(target)) return;

      const decimals = Number(el.dataset.decimals ?? 0);
      const prefix = el.dataset.prefix ?? "";
      const suffix = el.dataset.suffix ?? "";
      const duration = Number(el.dataset.duration ?? 2);

      const format = (value: number) =>
        prefix +
        value.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) +
        suffix;

      el.textContent = format(0);

      const counter = { value: 0 };

      gsap.fromTo(
        counter,
        { value: 0 },
        {
          value: target,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = format(counter.value);
          },
          onComplete: () => {
            el.textContent = format(target);
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return null;
}
