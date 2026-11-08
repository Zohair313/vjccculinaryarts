"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Founder", href: "#founder" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 45);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.8, ease: "power3.out" }
    );
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        role="navigation"
        aria-label="Main navigation"
        style={{ opacity: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#eef5ef]/95 backdrop-blur-md border-b border-[rgba(176,31,36,0.12)] shadow-[0_4px_30px_rgba(16,40,29,0.05)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            className="flex items-center gap-3 leading-none group"
            aria-label="VJCC Home"
          >
            <Image
              src="/vjcc-logo.jpg"
              alt="VJCC Culinary Arts logo"
              width={120}
              height={99}
              priority
              className="w-11 h-11 object-contain rounded bg-white border border-[rgba(176,31,36,0.14)] shadow-sm transition-transform duration-500 group-hover:scale-105"
            />
            <span className="flex flex-col">
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  color: "#b01f24",
                }}
              >
                VJCC
              </span>
              <span
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#5d7d6d",
                  fontWeight: 600,
                  marginTop: "2px",
                }}
              >
                Culinary Arts · Dubai
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-9" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative text-sm font-medium tracking-wide group transition-colors duration-300 ${
                    active === link.href
                      ? "text-[#b01f24]"
                      : "text-[#245040] hover:text-[#b01f24]"
                  }`}
                  style={{ fontFamily: "var(--font-dm), sans-serif", background: "none", border: "none" }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#b01f24] transition-all duration-300 ${
                      active === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="hidden lg:flex w-9 h-9 items-center justify-center text-[#48685a] hover:text-[#b01f24] transition-colors"
              style={{ background: "none", border: "none" }}
            >
              <Search size={17} />
            </button>
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#courses");
              }}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[#f7fbf7] font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:brightness-110 hover:shadow-[0_4px_20px_rgba(176,31,36,0.35)]"
              style={{
                fontFamily: "var(--font-dm), sans-serif",
                background: "linear-gradient(135deg, #b01f24 0%, #d0302f 100%)",
                borderRadius: "3px",
              }}
            >
              Enroll Now
            </a>
            {/* Mobile menu toggle */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#b01f24]"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none" }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`fixed inset-0 z-40 bg-[#eef5ef] flex flex-col justify-center px-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-3xl font-display text-[#10281d] hover:text-[#b01f24] transition-colors text-left"
                style={{ fontFamily: "var(--font-playfair), serif", background: "none", border: "none" }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a
            href="#courses"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#courses");
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-[#f7fbf7] font-semibold text-xs tracking-wider uppercase"
            style={{
              fontFamily: "var(--font-dm), sans-serif",
              background: "#b01f24",
              borderRadius: "3px",
            }}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </>
  );
}
