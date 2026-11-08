"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BookOpen, Users } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Award,
    title: (
      <>
        <span data-count="175" data-suffix="+">175+</span> International Accolades
      </>
    ),
    desc: "Vandana Jain is a world-renowned masterchef, culinary authority, and television mentor with over 5,000+ proprietary creations across global cuisines.",
  },
  {
    icon: BookOpen,
    title: "Double Gourmand World Award Winner",
    desc: "Celebrated author of 6 bestselling culinary works, winner of two prestigious Gourmand World Cookbook Awards available internationally on Amazon.",
  },
  {
    icon: Users,
    title: (
      <>
        Educator of <span data-count="12000" data-suffix="+">12,000+</span> Alumni
      </>
    ),
    desc: "Spearheaded 86+ KHDA-certified programs across 7 global cuisine categories, empowering future executive chefs and culinary entrepreneurs.",
  },
];

export default function Founder() {
  const containerRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (imgRef.current) {
          gsap.fromTo(
            imgRef.current,
            { clipPath: "inset(0 100% 0 0)", scale: 1.05 },
            {
              clipPath: "inset(0 0% 0 0)",
              scale: 1,
              duration: 1.3,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
              },
            }
          );
        }

        const items = textRef.current?.querySelectorAll(".reveal-item");
        if (items && items.length > 0) {
          gsap.fromTo(
            items,
            { x: 40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: textRef.current,
                start: "top 75%",
              },
            }
          );
        }

        const portrait = containerRef.current?.querySelector<HTMLElement>(".founder-portrait img");
        if (portrait) {
          gsap.fromTo(
            portrait,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });

      const badge = containerRef.current?.querySelector<HTMLElement>(".founder-badge");
      if (badge) {
        gsap.to(badge, {
          y: -9,
          repeat: -1,
          yoyo: true,
          duration: 3.2,
          ease: "sine.inOut",
        });
      }

      mm.add("(max-width: 1023px)", () => {
        const items = textRef.current?.querySelectorAll(".reveal-item");
        if (items && items.length > 0) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
              },
            }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="founder"
      className="section-pad relative overflow-hidden section-pattern pattern-grid"
      aria-label="Meet our founder"
      style={{ background: "#dcebdd" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Asymmetric 5/7 Split */}
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
          
          {/* Image Slot Column with Real meet.jpg */}
          <div
            ref={imgRef}
            className="founder-portrait relative"
            aria-hidden="true"
          >
            <div
              className="relative w-full aspect-[3/4] overflow-hidden rounded border border-[rgba(176,31,36,0.2)] shadow-[0_15px_40px_rgba(16,40,29,0.08)] group"
            >
              <Image
                src="/pic/meet.jpg"
                alt="Chef Vandana Jain, Founder of VJCC"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div
              className="founder-badge"
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "-1.2rem",
                background: "linear-gradient(135deg, #b01f24 0%, #d0302f 100%)",
                borderRadius: "3px",
                padding: "1.25rem 1.6rem",
                boxShadow: "0 15px 35px rgba(176,31,36,0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  color: "#f7fbf7",
                  lineHeight: 1,
                }}
              >
                <span data-count="28" data-suffix="+">28+</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm), sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(247,251,247,0.85)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginTop: "4px",
                }}
              >
                Years of Mastery
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div ref={textRef}>
            <div className="reveal-item" style={{ opacity: 0 }}>
              <span className="tag-pill">Visionary Founder & Masterchef</span>
            </div>

            <h2
              className="reveal-item mt-6 mb-2"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.6rem, 4.8vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "#10281d",
                opacity: 0,
              }}
            >
              Vandana{" "}
              <span className="shimmer-text" style={{ color: "#b01f24" }}>
                Jain
              </span>
            </h2>

            <p
              className="reveal-item mb-10"
              style={{
                fontFamily: "var(--font-dm), sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "#3a5a4b",
                maxWidth: "500px",
                opacity: 0,
              }}
            >
              An icon of culinary innovation, renowned television host, and pioneer of KHDA-certified cooking schools in Dubai. Chef Vandana combines classical gastronomy with modern culinary flair to inspire learners across the globe.
            </p>

            <div className="flex flex-col gap-4">
              {achievements.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="reveal-item flex gap-5 p-5 rounded border border-[rgba(16,40,29,0.06)] bg-white shadow-[0_4px_20px_rgba(16,40,29,0.03)] hover:border-[rgba(176,31,36,0.25)] transition-all"
                    style={{ opacity: 0 }}
                  >
                    <div
                      className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded"
                      style={{
                        background: "rgba(176,31,36,0.08)",
                        border: "1px solid rgba(176,31,36,0.18)",
                      }}
                    >
                      <Icon size={19} color="#b01f24" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-dm), sans-serif",
                          fontSize: "0.9375rem",
                          fontWeight: 700,
                          color: "#10281d",
                          marginBottom: "4px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-dm), sans-serif",
                          fontSize: "0.84rem",
                          lineHeight: 1.65,
                          color: "#48685a",
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
