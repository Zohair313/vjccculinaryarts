"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Layers, Star, Heart } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: Target,
    title: "Culinary Vision",
    desc: "Make professional culinary education accessible, engaging & deeply rewarding — empowering confident career chefs and culinary creators.",
  },
  {
    icon: Layers,
    title: "Mastery Method",
    desc: "Rigorous hands-on practice under master supervision in specialized, commercial-grade professional kitchen studios.",
  },
  {
    icon: Star,
    title: "Global Pedigree",
    desc: "Honored with 175+ international accolades and author of award-winning Gourmand World cookbooks featuring 5,000+ proprietary recipes.",
  },
  {
    icon: Heart,
    title: "Food Wellbeing",
    desc: "Cultivating profound nutrition knowledge, organic flavor balancing, and international culinary wellness for everyday life.",
  },
];

const whyChoose = [
  "Direct instruction under award-winning chef Vandana Jain & master chefs",
  "86+ KHDA-accredited certifications across patisserie, bakery & international cuisines",
  "Dedicated corporate team bonding ateliers & bespoke private culinary evenings",
  "State-of-the-art kitchen studios conveniently located in central Dubai",
  "Flexible masterclass schedules tailored for working professionals and amateurs",
  "Signature Junior Chef Academy for young talents (ages 6 to 16)",
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const eyebrow = containerRef.current?.querySelector(".about-eyebrow");
      const heading = containerRef.current?.querySelector(".about-heading");
      const pillarsEl = containerRef.current?.querySelectorAll(".pillar-card");
      const pillarIcons = containerRef.current?.querySelectorAll(".pillar-icon");
      const whyItems = containerRef.current?.querySelectorAll(".why-item");
      const divider = containerRef.current?.querySelector(".divider-line");
      const whyImg = containerRef.current?.querySelector(".why-img-wrap");

      const eyebrowTrigger = containerRef.current?.querySelector(".about-header");

      if (eyebrow) {
        gsap.fromTo(
          eyebrow,
          { y: -14, scale: 0.92, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.8)",
            scrollTrigger: { trigger: eyebrowTrigger, start: "top 85%" },
          }
        );
      }

      if (heading) {
        gsap.fromTo(
          heading,
          { yPercent: 55, opacity: 0, filter: "blur(14px)" },
          {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "power4.out",
            scrollTrigger: { trigger: heading, start: "top 88%" },
          }
        );
      }

      if (divider && heading) {
        gsap.fromTo(
          divider,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: { trigger: heading, start: "top 80%" },
          }
        );
      }

      if (pillarsEl && pillarsEl.length > 0) {
        gsap.fromTo(
          pillarsEl,
          { y: 48, opacity: 0, rotateX: 14, transformPerspective: 800 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: { trigger: ".pillars-grid", start: "top 80%" },
          }
        );
      }

      if (pillarIcons && pillarIcons.length > 0) {
        gsap.fromTo(
          pillarIcons,
          { scale: 0.5, rotate: -18, opacity: 0 },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "back.out(2)",
            delay: 0.25,
            clearProps: "transform",
            scrollTrigger: { trigger: ".pillars-grid", start: "top 80%" },
          }
        );
      }

      if (whyImg) {
        gsap.fromTo(
          whyImg,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".why-choose", start: "top 80%" },
          }
        );
      }

      if (whyItems && whyItems.length > 0) {
        gsap.fromTo(
          whyItems,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: ".why-choose", start: "top 80%" },
          }
        );
      }

      // Slow drift on the studio photograph
      const whyImgEl = containerRef.current?.querySelector<HTMLElement>(".why-img-wrap img");
      if (whyImgEl) {
        gsap.fromTo(
          whyImgEl,
          { yPercent: -4, scale: 1.12 },
          {
            yPercent: 4,
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: ".why-choose",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="section-pad relative overflow-hidden section-pattern pattern-dots pattern-glow"
      aria-label="About VJCC"
      style={{ background: "#eef5ef" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header — Asymmetric 7/5 */}
        <div className="about-header grid lg:grid-cols-[7fr_5fr] gap-12 mb-20 items-end">
          <div>
            <span className="tag-pill about-eyebrow shadow-sm" style={{ opacity: 0 }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e7d52] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2e7d52]" />
              </span>
              Pioneering Culinary Arts
            </span>
            <h2
              className="about-heading mt-6"
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
              Where Passion Meets{" "}
              <span
                className="shimmer-text"
                style={{
                  background: "linear-gradient(135deg, #b01f24 0%, #d0302f 50%, #2e7d52 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Haute Craft
              </span>
            </h2>
            <div
              className="divider-line mt-6"
              style={{
                width: "90px",
                height: "2px",
                background: "#b01f24",
                transformOrigin: "left center",
                transform: "scaleX(0)",
              }}
            />
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm), sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.8,
                color: "#3a5a4b",
              }}
            >
              Whether mastering classical French patisserie, artisan sourdoughs, or regional gastronomy, VJCC provides over <strong style={{ color: "#b01f24" }}><span className="about-cert-count" data-count="86" data-suffix="+">86+</span> certified pathways</strong>. From culinary aspirants and career switchers to brides and kids, our kitchen is a sanctuary of practical excellence.
            </p>
          </div>
        </div>

        {/* 4 Pillars — Light Porcelain Bento Grid */}
        <div
          className="pillars-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="pillar-card card-glow group flex flex-col gap-5 p-8 transition-all duration-500 rounded border border-[rgba(16,40,29,0.08)] bg-white shadow-[0_8px_30px_rgba(16,40,29,0.04)] hover:shadow-[0_16px_40px_rgba(176,31,36,0.12)] hover:-translate-y-1.5"
                style={{ opacity: 0 }}
              >
                <div
                  className="pillar-icon w-12 h-12 flex items-center justify-center rounded transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: "rgba(46,125,82,0.09)",
                    border: "1px solid rgba(46,125,82,0.2)",
                  }}
                >
                  <Icon size={20} color="#2e7d52" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#10281d",
                      marginBottom: "10px",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm), sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      color: "#48685a",
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose VJCC Card with Studio Picture */}
        <div className="why-choose rounded border border-[rgba(176,31,36,0.15)] bg-[#dcebdd] p-8 md:p-12 overflow-hidden shadow-[0_12px_35px_rgba(16,40,29,0.04)]">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 why-img-wrap relative h-72 sm:h-80 lg:h-96 rounded overflow-hidden border border-[rgba(176,31,36,0.2)] shadow-md group">
              <Image
                src="/pic/whychoose.jpg"
                alt="VJCC Culinary Training Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[0.7rem] uppercase tracking-wider font-semibold bg-[#b01f24]/90 px-3 py-1 rounded backdrop-blur-sm">
                  Excellence in Action
                </span>
                <p className="text-sm font-semibold mt-2">Hands-on Professional Kitchens</p>
              </div>
            </div>

            {/* List Column */}
            <div className="lg:col-span-7">
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                  fontWeight: 800,
                  color: "#10281d",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                Why Study at{" "}
                <span style={{ color: "#b01f24" }}>
                  VJCC?
                </span>
              </h3>

              <ul className="grid sm:grid-cols-2 gap-4" role="list">
                {whyChoose.map((item, i) => (
                  <li
                    key={i}
                    className="why-item flex items-start gap-3.5"
                    style={{ opacity: 0 }}
                  >
                    <span
                      className="flex-shrink-0 mt-2"
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#b01f24",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-dm), sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: 1.65,
                        color: "#18382a",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
