"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    title: "Artisan French Viennoiserie & Entremets",
    category: "Patisserie Atelier",
    span: "col-span-12 md:col-span-8 h-80 md:h-96",
    image: "/pic/bday7.jpg",
  },
  {
    title: "Accredited Chef Diplomas & Graduation",
    category: "KHDA Dubai Certification",
    span: "col-span-12 md:col-span-4 h-80 md:h-96",
    image: "/pic/certi1.jpg",
  },
  {
    title: "International Master Recognition",
    category: "Global Honors",
    span: "col-span-12 md:col-span-4 h-80",
    image: "/pic/certi2.jpg",
  },
  {
    title: "Live Kitchen Demonstrations & Tastings",
    category: "Studio Experience",
    span: "col-span-12 md:col-span-4 h-80",
    image: "/pic/WhatsAppImage2026-08-18at11.11.12AM_1.jpg",
  },
  {
    title: "Gourmand World Award-Winning Studio",
    category: "Culinary Heritage",
    span: "col-span-12 md:col-span-4 h-80",
    image: "/pic/main-img-vjcc.jpg",
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const heading = containerRef.current?.querySelector(".gallery-heading");
      const items = containerRef.current?.querySelectorAll(".gallery-card");

      if (heading) {
        gsap.fromTo(
          heading,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: { trigger: heading, start: "top 85%" },
          }
        );
      }

      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { scale: 0.96, opacity: 0, y: 30 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: ".gallery-grid", start: "top 80%" },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="section-pad-lg relative section-pattern pattern-dots"
      aria-label="Studio Gallery"
      style={{ background: "#eef5ef" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-[650px]">
            <span className="tag-pill">Atelier Showcase</span>
            <h2
              className="gallery-heading mt-6"
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
              Scenes from the{" "}
              <span className="shimmer-text" style={{ color: "#b01f24" }}>
                Culinary Studio
              </span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/vjcc_culinaryarts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded border border-[rgba(176,31,36,0.25)] bg-white text-[#10281d] hover:text-[#b01f24] hover:border-[#b01f24] transition-all text-xs font-semibold uppercase tracking-wider w-fit shadow-sm"
            style={{ fontFamily: "var(--font-dm), sans-serif" }}
          >
            <svg
              className="w-4 h-4 text-[#b01f24]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @vjcc_culinaryarts
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Gallery Bento with Real Images */}
        <div className="gallery-grid grid grid-cols-12 gap-5">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`gallery-card group relative rounded overflow-hidden border border-[rgba(16,40,29,0.08)] hover:border-[rgba(176,31,36,0.3)] transition-all duration-500 shadow-[0_8px_25px_rgba(16,40,29,0.04)] ${item.span}`}
              style={{ opacity: 0 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col justify-end text-white">
                <span
                  className="text-xs font-bold uppercase tracking-widest text-[#46a873] mb-1.5"
                  style={{ fontFamily: "var(--font-dm), sans-serif" }}
                >
                  {item.category}
                </span>
                <h3
                  className="text-lg md:text-xl font-bold text-white group-hover:text-[#46a873] transition-colors"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
