"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "Concept Birthday & Private Cooking Parties",
    desc: "Intimate celebration ateliers and multi-course culinary experiences for birthdays, bachelorettes, and milestone moments.",
    tag: "Celebrations",
    details: "Custom Guests · Curated Menus",
    image: "/pic/bday1.jpg",
  },
  {
    title: "Executive Corporate Team Masterclasses",
    desc: "High-energy culinary team bonding, interactive mystery-box challenges, and private dinner masterclasses in a luxury studio.",
    tag: "Corporate Retreat",
    details: "10–30 Guests · Bespoke Degustation",
    image: "/pic/bday4.jpg",
  },
  {
    title: "Live Master Demonstrations & Tastings",
    desc: "Observe live technique demonstrations by masterchef Vandana Jain, exploring proprietary flavor balance and recipe secrets.",
    tag: "Live Ateliers",
    details: "Studio Theatre · Tasting Flight",
    image: "/pic/bday6.jpg",
  },
];

export default function ConceptEvents() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const heading = containerRef.current?.querySelector(".events-heading");
      const cards = containerRef.current?.querySelectorAll(".event-card");

      if (heading) {
        gsap.fromTo(heading, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power4.out",
          scrollTrigger: { trigger: heading, start: "top 85%" },
        });
      }

      if (cards && cards.length > 0) {
        gsap.fromTo(cards, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".events-grid", start: "top 80%" },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="events"
      className="section-pad-lg relative overflow-hidden section-pattern pattern-diag pattern-glow"
      aria-label="Concept events"
      style={{ background: "#dcebdd" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="grid lg:grid-cols-[6fr_6fr] gap-12 items-end mb-16">
          <div>
            <span className="tag-pill">
              <Sparkles size={13} color="#b01f24" />
              Gastronomic Moments
            </span>
            <h2
              className="events-heading mt-6"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.5rem, 5vw, 4.6rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "#10281d",
                opacity: 0,
              }}
            >
              Exclusive Events &{" "}
              <span style={{ color: "#b01f24" }}>
                Culinary Salons
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-5">
            <p style={{ fontFamily: "var(--font-dm), sans-serif", fontSize: "1.0625rem", lineHeight: 1.75, color: "#3a5a4b" }}>
              Beyond curriculum programs, VJCC hosts immersive culinary evenings, chef tables, and corporate degustations designed for discerning connoisseurs.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:gap-5 text-[#b01f24] w-fit"
              style={{ fontFamily: "var(--font-dm), sans-serif" }}
            >
              Discover Concept Events <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Events Grid with Real bday Event Photos */}
        <div className="events-grid grid lg:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <article
              key={i}
              className="event-card group relative overflow-hidden rounded border border-[rgba(16,40,29,0.08)] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(176,31,36,0.25)] shadow-[0_8px_30px_rgba(16,40,29,0.04)] hover:shadow-[0_20px_40px_rgba(176,31,36,0.1)]"
              style={{ opacity: 0 }}
            >
              {/* Image Banner */}
              <div className="relative w-full overflow-hidden bg-[#cfe3d3]" style={{ height: "290px" }}>
                <Image
                  src={ev.image}
                  alt={ev.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4">
                  <span className="tag-pill" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>
                    {ev.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.32rem",
                    fontWeight: 700,
                    color: "#10281d",
                    marginBottom: "10px",
                    lineHeight: 1.25,
                  }}
                >
                  {ev.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm), sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    color: "#3a5a4b",
                    marginBottom: "18px",
                  }}
                >
                  {ev.desc}
                </p>
                <div
                  className="flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(16,40,29,0.06)", paddingTop: "18px" }}
                >
                  <span style={{ fontFamily: "var(--font-dm), sans-serif", fontSize: "0.8rem", color: "#48685a" }}>
                    {ev.details}
                  </span>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b01f24] group-hover:gap-3 transition-all duration-300"
                    style={{ fontFamily: "var(--font-dm), sans-serif" }}
                    aria-label={`Reserve for ${ev.title}`}
                  >
                    Reserve <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
