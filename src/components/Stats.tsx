"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "12,000+", label: "Graduated Alumni", sub: "From 40+ Nationalities" },
  { value: "175+", label: "Culinary Honors", sub: "International Accolades" },
  { value: "28+", label: "Years of Heritage", sub: "Established in 1997" },
  { value: "86+", label: "Certified Programs", sub: "KHDA Dubai Accredited" },
];

export default function Stats() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll(".stat-card");
      if (!cards || cards.length === 0) return;

      gsap.fromTo(
        cards,
        { yPercent: 30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="stats"
      aria-label="Key statistics"
      className="relative py-20 section-pattern pattern-cross"
      style={{
        background: "#dcebdd",
        borderTop: "1px solid rgba(176,31,36,0.12)",
        borderBottom: "1px solid rgba(176,31,36,0.12)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card flex flex-col items-start lg:items-center p-8 lg:p-10 relative group"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(176,31,36,0.1)" : "none",
                opacity: 0,
              }}
            >
              {/* Number */}
              <div
                className="stat-value mb-2"
                data-count={stat.value.replace(/[^\d.]/g, "").replace(/,/g, "")}
                data-suffix={stat.value.replace(/[\d,.]+/, "")}
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: i % 2 === 0 ? "#b01f24" : "#2e7d52",
                }}
              >
                {stat.value}
              </div>
              {/* Label */}
              <div
                style={{
                  fontFamily: "var(--font-dm), sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "#10281d",
                  letterSpacing: "0.02em",
                }}
              >
                {stat.label}
              </div>
              {/* Sub */}
              <div
                style={{
                  fontFamily: "var(--font-dm), sans-serif",
                  fontSize: "0.78rem",
                  color: "#48685a",
                  marginTop: "4px",
                  letterSpacing: "0.02em",
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
