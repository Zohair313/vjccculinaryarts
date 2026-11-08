"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Culinary Entrepreneur · Dubai",
    rating: 5,
    text: "Enrolling at VJCC transformed my approach to gastronomy. Chef Vandana combines rigorous classical precision with unmatched warmth. I launched my boutique bakery right after graduating.",
  },
  {
    name: "Ayesha Al Mansoori",
    role: "French Patisserie Graduate · Abu Dhabi",
    rating: 5,
    text: "The viennoiserie atelier exceeded every expectation. The commercial ovens and specialized marble tempering tables are world-standard. A truly elite culinary education.",
  },
  {
    name: "Meena Kapoor",
    role: "Corporate Executive · DIFC Dubai",
    rating: 5,
    text: "We hosted an executive culinary retreat for 35 corporate partners. Flawlessly orchestrated, exquisite wines, and a masterclass experience our executives still rave about.",
  },
  {
    name: "Fatima Rahman",
    role: "International Student · Jumeirah",
    rating: 5,
    text: "Relocating from abroad, VJCC immediately felt like a community of masters. The deep dive into international cuisine traditions set a lifelong foundation for my culinary career.",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const heading = containerRef.current?.querySelector(".test-heading");
      const cards = containerRef.current?.querySelectorAll(".test-card");

      if (heading) {
        gsap.fromTo(heading, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power4.out",
          scrollTrigger: { trigger: heading, start: "top 85%" },
        });
      }

      const banner = containerRef.current?.querySelector(".rating-banner");
      if (banner) {
        gsap.fromTo(banner, { y: 26, opacity: 0, scale: 0.98 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: banner, start: "top 88%" },
        });
        const stars = banner.querySelectorAll("svg");
        gsap.fromTo(stars, { scale: 0, rotate: -30, opacity: 0 }, {
          scale: 1, rotate: 0, opacity: 1, duration: 0.45, stagger: 0.07,
          ease: "back.out(2.2)", delay: 0.15,
          scrollTrigger: { trigger: banner, start: "top 88%" },
        });
      }

      if (cards && cards.length > 0) {
        gsap.fromTo(cards, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: { trigger: ".test-grid", start: "top 80%" },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="section-pad relative section-pattern pattern-grid"
      aria-label="Student testimonials"
      style={{ background: "#eef5ef" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14">
          <span className="tag-pill">Alumni Voices</span>
          <h2
            className="test-heading mt-6"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 4.2vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#10281d",
              opacity: 0,
            }}
          >
            <span data-count="12000" data-suffix="+">12,000+</span> Journeys Shaped by{" "}
            <span className="shimmer-text" style={{ color: "#b01f24" }}>
              Excellence
            </span>
          </h2>
        </div>

        {/* Rating banner */}
        <div
          className="rating-banner flex flex-wrap items-center gap-6 mb-12 p-6 rounded border border-[rgba(176,31,36,0.15)] bg-white shadow-[0_8px_30px_rgba(16,40,29,0.04)]"
        >
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={18} fill="#2e7d52" color="#2e7d52" />
            ))}
          </div>
          <div
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "2.1rem",
              fontWeight: 800,
              color: "#b01f24",
            }}
          >
            <span data-count="4.9" data-decimals="1">4.9</span> / 5.0
          </div>
          <div
            style={{
              fontFamily: "var(--font-dm), sans-serif",
              fontSize: "0.88rem",
              color: "#3a5a4b",
            }}
          >
            Average Rating across all professional diplomas · Over{" "}
            <span data-count="1400" data-suffix="+">1,400+</span> Verified Reviews
          </div>
        </div>

        {/* Cards grid */}
        <div className="test-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="test-card flex flex-col gap-5 p-7 rounded border border-[rgba(16,40,29,0.08)] bg-white shadow-[0_4px_20px_rgba(16,40,29,0.03)] transition-all duration-300 hover:border-[rgba(176,31,36,0.25)] hover:-translate-y-1.5"
              style={{ opacity: 0 }}
            >
              <Quote size={24} color="#b01f24" className="opacity-30" />
              <p
                style={{
                  fontFamily: "var(--font-dm), sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  color: "#3a5a4b",
                  flex: 1,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <footer>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={12} fill="#2e7d52" color="#2e7d52" />
                  ))}
                </div>
                <cite style={{ fontStyle: "normal" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-dm), sans-serif",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#10281d",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm), sans-serif",
                      fontSize: "0.76rem",
                      color: "#b01f24",
                      fontWeight: 600,
                      marginTop: "2px",
                    }}
                  >
                    {t.role}
                  </div>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
