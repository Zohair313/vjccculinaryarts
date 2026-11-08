"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".footer-col",
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 88%" },
        }
      );

      gsap.fromTo(
        ".footer-bottom",
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".footer-bottom", start: "top 95%" },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden pt-20 pb-12 border-t border-[rgba(176,31,36,0.15)] section-pattern pattern-diag"
      style={{ background: "#dcebdd" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[rgba(176,31,36,0.12)]">
          {/* Brand Col */}
          <div className="footer-col lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/vjcc-logo.jpg"
                alt="VJCC Culinary Arts logo"
                width={120}
                height={99}
                className="w-16 h-16 object-contain rounded bg-white border border-[rgba(176,31,36,0.14)] shadow-sm p-0.5"
              />
              <div className="flex flex-col leading-none">
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.85rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    color: "#b01f24",
                  }}
                >
                  VJCC
                </span>
                <span
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "#5d7d6d",
                    fontWeight: 600,
                    marginTop: "3px",
                  }}
                >
                  Culinary Arts · Dubai
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed text-[#3a5a4b] max-w-sm mb-6"
              style={{ fontFamily: "var(--font-dm), sans-serif" }}
            >
              Dubai&apos;s premier institute for culinary excellence and baking arts, founded by world-renowned masterchef Vandana Jain. Empowering over{" "}
              <span data-count="12000">12,000</span> alumni worldwide.
            </p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/vjcc_culinaryarts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[rgba(176,31,36,0.2)] bg-white flex items-center justify-center text-[#b01f24] hover:bg-[#b01f24] hover:text-white transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[rgba(176,31,36,0.2)] bg-white flex items-center justify-center text-[#b01f24] hover:bg-[#b01f24] hover:text-white transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-[rgba(176,31,36,0.2)] bg-white flex items-center justify-center text-[#b01f24] hover:bg-[#b01f24] hover:text-white transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col lg:col-span-2">
            <h4
              className="text-xs uppercase tracking-widest text-[#b01f24] font-bold mb-5"
              style={{ fontFamily: "var(--font-dm), sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#3a5a4b]">
              <li><a href="#hero" className="hover:text-[#b01f24] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#b01f24] transition-colors">About Institute</a></li>
              <li><a href="#courses" className="hover:text-[#b01f24] transition-colors">Masterclasses</a></li>
              <li><a href="#founder" className="hover:text-[#b01f24] transition-colors">Chef Vandana Jain</a></li>
              <li><a href="#events" className="hover:text-[#b01f24] transition-colors">Concept Events</a></li>
              <li><a href="#gallery" className="hover:text-[#b01f24] transition-colors">Studio Atelier</a></li>
            </ul>
          </div>

          {/* Program Tracks */}
          <div className="footer-col lg:col-span-3">
            <h4
              className="text-xs uppercase tracking-widest text-[#b01f24] font-bold mb-5"
              style={{ fontFamily: "var(--font-dm), sans-serif" }}
            >
              Curriculum Tracks
            </h4>
            <ul className="space-y-3 text-sm text-[#3a5a4b]">
              <li>French Patisserie & Viennoiserie (KHDA)</li>
              <li>World Gastronomy & Molecular Techniques</li>
              <li>Haute Royal Indian Cookery</li>
              <li>Junior Chef Culinary Academy</li>
              <li>Corporate Team Culinary Dinners</li>
              <li>Custom Bridal Masterclass Series</li>
            </ul>
          </div>

          {/* Accreditation */}
          <div className="footer-col lg:col-span-3">
            <h4
              className="text-xs uppercase tracking-widest text-[#b01f24] font-bold mb-5"
              style={{ fontFamily: "var(--font-dm), sans-serif" }}
            >
              Accreditation
            </h4>
            <p className="text-sm text-[#3a5a4b] leading-relaxed mb-4">
              All professional programs are certified under KHDA (Knowledge and Human Development Authority), Government of Dubai.
            </p>
            <div className="p-4 rounded border border-[rgba(176,31,36,0.2)] bg-white shadow-sm">
              <div className="text-xs text-[#b01f24] font-bold tracking-wide">
                GOVERNMENT RECOGNIZED
              </div>
              <div className="text-xs text-[#48685a] mt-1">
                Permit & Quality Certification Verified
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#48685a]">
          <div>
            &copy; 2026 VJCC Culinary Arts LLC. All rights reserved. Redesigned with bespoke luxury aesthetics.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#b01f24] transition-colors font-medium"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
