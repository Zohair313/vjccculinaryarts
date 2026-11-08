"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Clock, Users, Award } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    category: "Patisserie & Bakery",
    tag: "Flagship",
    title: "10-Day Professional Baking & Pastry",
    desc: "Master classical entremets, laminated croissants, artisan sourdoughs, and mirror glazes in commercial baking ateliers.",
    duration: "10 Days",
    level: "All Skill Levels",
    cert: "KHDA Certified",
    image: "/pic/10-DayCulinaryArtsProgramme-Baking_Page_1.jpg",
  },
  {
    category: "Global Gastronomy",
    tag: "High Demand",
    title: "12-Day World Cooking Masterclass",
    desc: "Journey across Mediterranean, Italian, Japanese, and Levantine cuisines with master knife work and flavor extraction.",
    duration: "12 Days",
    level: "Beginner – Advanced",
    cert: "KHDA Certified",
    image: "/pic/12-DayCulinaryArtsProgramme-Cooking_Page_2.jpg",
  },
  {
    category: "Intensive Culinary",
    tag: "Signature",
    title: "18-Day Comprehensive Chef Course",
    desc: "From complex regional classics to contemporary culinary science. Proprietary spice roasting and tandoor secrets.",
    duration: "18 Days",
    level: "All Skill Levels",
    cert: "KHDA Certified",
    image: "/pic/18-DayCulinaryArtsProgramme-CookingCourse_1__Page_1.jpg",
  },
  {
    category: "Baking Essentials",
    tag: "Popular",
    title: "5-Day Intensive Baking Atelier",
    desc: "A fast-track patisserie course covering artisan breads, delicate sponges, frostings, and cafe-style pastries.",
    duration: "5 Days",
    level: "Beginners Welcome",
    cert: "KHDA Certified",
    image: "/pic/5-DayCulinaryArtsProgramme-Baking_Page_1.jpg",
  },
  {
    category: "Advanced Patisserie",
    tag: "Mastery",
    title: "Advanced French Bakery Techniques",
    desc: "Specialized focus on viennoiserie lamination, high-hydration brioches, tarts, and modern plating textures.",
    duration: "10 Days",
    level: "Intermediate – Pro",
    cert: "Diploma Accredited",
    image: "/pic/10-DayCulinaryArtsProgramme-Baking_Page_2.jpg",
  },
  {
    category: "Haute Cooking",
    tag: "Executive",
    title: "Executive Master Cooking Program",
    desc: "In-depth sauce work, butchery precision, molecular balancing, and commercial kitchen management.",
    duration: "18 Days",
    level: "Aspiring Chefs",
    cert: "KHDA Certified",
    image: "/pic/18-DayCulinaryArtsProgramme-CookingCourse_1__Page_2.jpg",
  },
];

export default function Courses() {
  const containerRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(
    () => {
      const heading = containerRef.current?.querySelector(".courses-heading");
      const cards = containerRef.current?.querySelectorAll(".course-card");

      if (heading) {
        gsap.fromTo(
          heading,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: { trigger: heading, start: "top 85%" },
          }
        );
      }

      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".courses-grid", start: "top 80%" },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="courses"
      className="section-pad-lg relative section-pattern pattern-dots"
      aria-label="Our courses"
      style={{ background: "#eef5ef" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-[620px]">
            <span className="tag-pill">Accredited Curricula</span>
            <h2
              className="courses-heading mt-6"
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
              Masterclasses Built for{" "}
              <span className="shimmer-text" style={{ color: "#b01f24" }}>
                Every Ambition
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:gap-5 text-[#b01f24] flex-shrink-0"
            style={{ fontFamily: "var(--font-dm), sans-serif" }}
          >
            Browse All <span data-count="86" data-suffix="+">86+</span> Courses
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Course Cards with Real Course Images */}
        <div className="courses-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <article
              key={i}
              className="course-card card-glow group relative overflow-hidden flex flex-col rounded border border-[rgba(16,40,29,0.08)] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(176,31,36,0.25)]"
              style={{
                opacity: 0,
                boxShadow: hovered === i ? "0 20px 40px rgba(176,31,36,0.1)" : "0 8px 25px rgba(16,40,29,0.04)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image Banner */}
              <div
                className="relative w-full overflow-hidden bg-[#cfe3d3]"
                style={{ height: "230px" }}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4">
                  <span className="tag-pill" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>
                    {course.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                <div
                  style={{
                    fontFamily: "var(--font-dm), sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "#b01f24",
                    marginBottom: "8px",
                  }}
                >
                  {course.category}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#10281d",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {course.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm), sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    color: "#3a5a4b",
                    flex: 1,
                  }}
                >
                  {course.desc}
                </p>

                {/* Metadata */}
                <div
                  className="flex flex-wrap gap-4 mt-6 pt-5"
                  style={{ borderTop: "1px solid rgba(16,40,29,0.06)" }}
                >
                  <div className="flex items-center gap-2">
                    <Clock size={14} color="#b01f24" />
                    <span style={{ fontFamily: "var(--font-dm), sans-serif", fontSize: "0.8rem", color: "#48685a" }}>
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} color="#b01f24" />
                    <span style={{ fontFamily: "var(--font-dm), sans-serif", fontSize: "0.8rem", color: "#48685a" }}>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={14} color="#b01f24" />
                    <span style={{ fontFamily: "var(--font-dm), sans-serif", fontSize: "0.8rem", color: "#48685a" }}>
                      {course.cert}
                    </span>
                  </div>
                </div>

                {/* Enrollment CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-wider text-[#b01f24] group-hover:gap-4 transition-all duration-300"
                  style={{ fontFamily: "var(--font-dm), sans-serif" }}
                >
                  Enroll Now <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
