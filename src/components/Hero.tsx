"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown, Sparkles, Award, Star } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const statsPillRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgCardsRef = useRef<HTMLDivElement>(null);

  // Floating decorative badge refs
  const badge1Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const words = headlineRef.current?.querySelectorAll(".word");
      const heroCards = imgCardsRef.current?.querySelectorAll(".hero-img-card");

      // Floating gentle animation for badges
      gsap.to(badge1Ref.current, {
        y: -10,
        rotation: 1.5,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });

      mm.add("(min-width: 1024px)", () => {
        // Tag Pill bounce in
        if (pillRef.current) {
          gsap.fromTo(
            pillRef.current,
            { scale: 0.85, opacity: 0, y: -15 },
            { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)", delay: 1.2 }
          );
        }

        // Kinetic typography clip reveal
        if (words && words.length > 0) {
          gsap.fromTo(
            words,
            { yPercent: 120, rotateX: 30, opacity: 0 },
            {
              yPercent: 0,
              rotateX: 0,
              opacity: 1,
              duration: 1.15,
              stagger: 0.06,
              ease: "power4.out",
              delay: 1.35,
            }
          );
        }

        // Subtext fade slide
        if (subRef.current) {
          gsap.fromTo(
            subRef.current,
            { y: 25, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, delay: 1.85, ease: "power3.out" }
          );
        }

        // CTAs Spring entrance
        if (ctaRef.current) {
          gsap.fromTo(
            ctaRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 2.1, ease: "power3.out" }
          );
        }

        // Mini trust pill entrance
        if (statsPillRef.current) {
          gsap.fromTo(
            statsPillRef.current,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, delay: 2.3, ease: "power3.out" }
          );
        }

        // 3 Picture Cards staggered 3D tilt reveal
        if (heroCards && heroCards.length > 0) {
          gsap.fromTo(
            heroCards,
            { y: 80, opacity: 0, scale: 0.9, rotateY: 10 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateY: 0,
              duration: 1.2,
              stagger: 0.16,
              ease: "power3.out",
              delay: 1.5,
            }
          );

          // Scroll-driven multi-layer parallax
          gsap.to(heroCards[0], {
            yPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });

          if (heroCards[1]) {
            gsap.to(heroCards[1], {
              yPercent: -20,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }

          if (heroCards[2]) {
            gsap.to(heroCards[2], {
              yPercent: -6,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        }
      });

      mm.add("(max-width: 1023px)", () => {
        if (pillRef.current) {
          gsap.fromTo(pillRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 1.0 });
        }
        if (words && words.length > 0) {
          gsap.fromTo(
            words,
            { yPercent: 70, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.05, ease: "power3.out", delay: 1.1 }
          );
        }
        if (subRef.current) {
          gsap.fromTo(subRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 1.5 });
        }
        if (ctaRef.current) {
          gsap.fromTo(ctaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 1.7 });
        }
        if (heroCards && heroCards.length > 0) {
          gsap.fromTo(
            heroCards,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 1.3 }
          );
        }
      });

      if (scrollRef.current) {
        gsap.to(scrollRef.current, {
          y: 7,
          repeat: -1,
          yoyo: true,
          duration: 1.1,
          ease: "power1.inOut",
          delay: 2.5,
        });
      }

      // Pointer-driven depth on the showcase cards
      const showcase = imgCardsRef.current;
      const canHover = window.matchMedia("(pointer: fine)").matches;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (showcase && canHover && !prefersReduced) {
        const cardEls = showcase.querySelectorAll<HTMLElement>(".hero-img-card");
        const movers = Array.from(cardEls).map((el, i) => ({
          x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
          rotation: gsap.quickTo(el, "rotation", { duration: 1, ease: "power3.out" }),
          depth: [8, 16, 12][i] ?? 12,
        }));

        const onPointerMove = (e: MouseEvent) => {
          const rect = showcase.getBoundingClientRect();
          const nx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
          const ny = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
          movers.forEach((m) => {
            m.x(nx * m.depth);
            m.rotation(ny * 1.1);
          });
        };

        const onPointerLeave = () => {
          movers.forEach((m) => {
            m.x(0);
            m.rotation(0);
          });
        };

        showcase.addEventListener("mousemove", onPointerMove);
        showcase.addEventListener("mouseleave", onPointerLeave);

        return () => {
          showcase.removeEventListener("mousemove", onPointerMove);
          showcase.removeEventListener("mouseleave", onPointerLeave);
        };
      }
    },
    { scope: containerRef }
  );

  const headline = "Become an Expert Professional Chef";
  const words = headline.split(" ");

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden section-pattern pattern-dots pattern-glow"
      aria-label="Hero section"
      style={{ background: "#eef5ef", "--pattern-opacity": 0.55 } as React.CSSProperties}
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "radial-gradient(ellipse at 80% 30%, rgba(231,242,232,0.95) 0%, rgba(238,245,239,1) 75%)",
          }}
        />

        {/* Crimson Sunburst Glow */}
        <div
          className="absolute -top-24 right-1/4 w-[550px] h-[550px] rounded-full pointer-events-none opacity-30 blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(208,48,47,0.35) 0%, rgba(176,31,36,0.18) 55%, transparent 75%)",
            animationDuration: "6s",
          }}
        />

        {/* Subtle hairlines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "8%",
            width: "1px",
            background: "linear-gradient(to bottom, transparent, rgba(176,31,36,0.12), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: "8%",
            width: "1px",
            background: "linear-gradient(to bottom, transparent, rgba(176,31,36,0.12), transparent)",
          }}
        />
      </div>

      {/* Main Grid: Left Content + Right 3-Picture Showcase */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-36 pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7">
            {/* Tag Pill with Pulse Animation */}
            <div ref={pillRef} className="tag-pill mb-8 shadow-sm" style={{ opacity: 0 }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b01f24] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b01f24]" />
              </span>
              KHDA Approved Culinary Institute · Dubai
            </div>

            {/* Headline with Masked Kinetic Typography */}
            <h1
              ref={headlineRef}
              className="font-display mb-6"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.7rem, 5.5vw, 5.2rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "#10281d",
                perspective: "1000px",
              }}
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  style={{ display: "inline-block", overflow: "hidden", marginRight: "0.26em" }}
                >
                  <span className="word" style={{ display: "inline-block" }}>
                    {word === "Expert" || word === "Professional" || word === "Chef" ? (
                      <span
                        className="shimmer-text transition-all duration-300 hover:brightness-110"
                        style={{
                          background: "linear-gradient(135deg, #b01f24 0%, #d0302f 50%, #2e7d52 100%)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </span>
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p
              ref={subRef}
              style={{
                fontFamily: "var(--font-dm), sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "#3a5a4b",
                maxWidth: "520px",
                opacity: 0,
              }}
            >
              Dubai&apos;s most loved culinary institute — immersive, hands-on cooking and baking masterclasses led by award-winning chef Vandana Jain. Over 86+ certified courses designed for culinary careers and passionate gourmets.
            </p>

            {/* CTAs with Magnetic Spring Scale */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 mt-10"
              style={{ opacity: 0 }}
            >
              <a
                href="#courses"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 font-semibold text-xs tracking-wider uppercase text-[#f7fbf7] overflow-hidden rounded shadow-[0_4px_20px_rgba(176,31,36,0.3)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(176,31,36,0.45)] hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  fontFamily: "var(--font-dm), sans-serif",
                  background: "linear-gradient(135deg, #b01f24 0%, #d0302f 100%)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Explore Masterclasses
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:border-[#b01f24] hover:text-[#b01f24] hover:-translate-y-0.5 rounded shadow-sm"
                style={{
                  fontFamily: "var(--font-dm), sans-serif",
                  color: "#10281d",
                  border: "1.5px solid rgba(176,31,36,0.25)",
                  background: "#ffffff",
                }}
              >
                Schedule Studio Visit
              </a>
            </div>

            {/* Mini Trust Metrics Pill */}
            <div
              ref={statsPillRef}
              className="mt-10 flex items-center gap-6 pt-6 border-t border-[rgba(176,31,36,0.12)] max-w-lg"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2">
                <Award size={18} className="text-[#b01f24]" />
                <span className="text-xs font-semibold text-[#10281d]">
                  <span data-count="175" data-suffix="+">175+</span> Global Awards
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-[#2e7d52] fill-[#2e7d52]" />
                <span className="text-xs font-semibold text-[#10281d]">
                  <span data-count="4.9" data-decimals="1">4.9</span>/5 Rating (
                  <span data-count="1400" data-suffix="+">1,400+</span> Alumni)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3 Pictures Showcase with Floating Badges */}
          <div ref={imgCardsRef} className="lg:col-span-5 relative">
            
            {/* Floating Decorative Badge 1: Top Right */}
            <div
              ref={badge1Ref}
              className="absolute -top-5 -right-3 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[rgba(176,31,36,0.2)] shadow-[0_8px_25px_rgba(16,40,29,0.08)]"
            >
              <Sparkles size={14} className="text-[#2e7d52]" />
              <span className="text-xs font-bold text-[#10281d] tracking-wide">
                <span data-count="28" data-suffix="+">28+</span> Years of Heritage
              </span>
            </div>

            {/* Grid of 3 Cards */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Pic 1: Main Studio Highlight (Full Width) */}
              <div
                className="hero-img-card col-span-2 relative h-64 sm:h-72 rounded overflow-hidden border border-[rgba(176,31,36,0.2)] shadow-[0_15px_35px_rgba(16,40,29,0.08)] group transition-all duration-500 hover:shadow-[0_20px_45px_rgba(176,31,36,0.18)]"
                style={{ opacity: 0 }}
              >
                <Image
                  src="/pic/main-img-vjcc.jpg"
                  alt="VJCC Culinary Arts Studio Dubai"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold tracking-wider uppercase bg-[#b01f24]/90 backdrop-blur-sm px-3 py-1 rounded shadow-sm">
                    Studio Atelier
                  </span>
                  <span className="text-xs text-white/95 font-medium flex items-center gap-1">
                    Dubai, UAE
                  </span>
                </div>
              </div>

              {/* Pic 2: Master Chef Training */}
              <div
                className="hero-img-card relative h-48 sm:h-56 rounded overflow-hidden border border-[rgba(176,31,36,0.2)] shadow-[0_12px_30px_rgba(16,40,29,0.06)] group transition-all duration-500 hover:shadow-[0_16px_35px_rgba(176,31,36,0.15)]"
                style={{ opacity: 0 }}
              >
                <Image
                  src="/pic/WhatsAppImage2026-08-18at11.11.12AM_1.jpg"
                  alt="Hands-on Cooking & Baking Masterclass"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-tight">Master Training</p>
                  <span className="text-[0.68rem] text-white/85">Hands-on Practice</span>
                </div>
              </div>

              {/* Pic 3: Live Session with Vandana Jain */}
              <div
                className="hero-img-card relative h-48 sm:h-56 rounded overflow-hidden border border-[rgba(176,31,36,0.2)] shadow-[0_12px_30px_rgba(16,40,29,0.06)] group transition-all duration-500 hover:shadow-[0_16px_35px_rgba(176,31,36,0.15)]"
                style={{ opacity: 0 }}
              >
                <Image
                  src="/pic/WhatsAppImage2026-08-18at11.11.12AM_2.jpg"
                  alt="Chef Vandana Jain Live Session"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-tight">Vandana Jain</p>
                  <span className="text-[0.68rem] text-white/85">Celebrated Mentor</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator with Bounce Animation */}
      <div
        ref={scrollRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: "0.625rem",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "#5d7d6d",
            fontWeight: 600,
            fontFamily: "var(--font-dm), sans-serif",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={14} color="#b01f24" />
      </div>
    </section>
  );
}
