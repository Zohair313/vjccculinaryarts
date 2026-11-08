"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactVisit() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const banner = containerRef.current?.querySelector(".contact-banner");

      if (banner) {
        gsap.fromTo(
          banner,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: { trigger: banner, start: "top 85%" },
          }
        );
      }

      const details = containerRef.current?.querySelectorAll(".contact-detail");
      if (details && details.length > 0) {
        gsap.fromTo(
          details,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: ".contact-banner", start: "top 75%" },
          }
        );
      }

      const map = containerRef.current?.querySelector(".map-wrap");
      if (map) {
        gsap.fromTo(
          map,
          { y: 26, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: { trigger: map, start: "top 92%" },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="contact"
      className="section-pad relative overflow-hidden section-pattern pattern-grid"
      aria-label="Visit and Contact"
      style={{ background: "#eef5ef" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className="contact-banner relative rounded border border-[rgba(176,31,36,0.2)] p-8 md:p-14 lg:p-16 overflow-hidden shadow-[0_15px_40px_rgba(16,40,29,0.05)]"
          style={{
            background: "linear-gradient(135deg, #e4f0e6 0%, #d5e7d8 100%)",
            opacity: 0,
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-0 w-[450px] h-[450px] pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(176,31,36,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="tag-pill">Personalized Studio Tours</span>
              <h2
                className="mt-6 mb-6"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  color: "#10281d",
                }}
              >
                Embark Upon Your{" "}
                <span className="shimmer-text" style={{ color: "#b01f24" }}>
                  Culinary Destiny
                </span>
              </h2>
              <p
                className="max-w-xl text-base leading-relaxed text-[#3a5a4b] mb-10"
                style={{ fontFamily: "var(--font-dm), sans-serif" }}
              >
                Experience our commercial kitchen stations firsthand. Meet our master chefs, discuss certification pathways, and review detailed class curriculums.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-[rgba(176,31,36,0.15)]">
                <div className="contact-detail flex items-start gap-3.5">
                  <MapPin className="text-[#b01f24] mt-1 shrink-0" size={18} />
                  <div>
                    <h3 className="text-sm font-bold text-[#10281d]">Location</h3>
                    <p className="text-xs text-[#48685a] mt-1">
                      Al Barsha South / Dubai Studio City, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="contact-detail flex items-start gap-3.5">
                  <Phone className="text-[#b01f24] mt-1 shrink-0" size={18} />
                  <div>
                    <h3 className="text-sm font-bold text-[#10281d]">Inquiries</h3>
                    <p className="text-xs text-[#48685a] mt-1">
                      +971 50 123 4567 / info@vjccculinaryarts.com
                    </p>
                  </div>
                </div>

                <div className="contact-detail flex items-start gap-3.5">
                  <Clock className="text-[#b01f24] mt-1 shrink-0" size={18} />
                  <div>
                    <h3 className="text-sm font-bold text-[#10281d]">Atelier Hours</h3>
                    <p className="text-xs text-[#48685a] mt-1">
                      Mon – Sat: 9:00 AM – 7:30 PM
                    </p>
                  </div>
                </div>

                <div className="contact-detail flex items-start gap-3.5">
                  <Mail className="text-[#b01f24] mt-1 shrink-0" size={18} />
                  <div>
                    <h3 className="text-sm font-bold text-[#10281d]">Accreditation</h3>
                    <p className="text-xs text-[#48685a] mt-1">
                      KHDA Approved & Globally Certified
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="map-wrap mt-8">
                <div className="map-frame">
                  <iframe
                    title="VJCC Culinary Arts studio location map"
                    src="https://www.google.com/maps?q=Dubai%20Studio%20City%2C%20Dubai%2C%20UAE&z=13&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4">
                    <div>
                      <p
                        className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-[#46a873]"
                        style={{ fontFamily: "var(--font-dm), sans-serif" }}
                      >
                        Visit the atelier
                      </p>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        Al Barsha South · Dubai Studio City
                      </p>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Dubai+Studio+City+Dubai+UAE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-white/95 text-[#b01f24] text-[0.68rem] font-bold uppercase tracking-wider hover:bg-[#b01f24] hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "var(--font-dm), sans-serif" }}
                    >
                      Directions
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="lg:col-span-5 bg-white rounded border border-[rgba(16,40,29,0.08)] p-8 shadow-[0_15px_40px_rgba(16,40,29,0.06)]">
              <h3
                className="text-xl font-bold text-[#10281d] mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Request Course Prospectus
              </h3>
              <p className="text-xs text-[#48685a] mb-6">
                Receive comprehensive schedules, fee structures, and syllabus tracks.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#245040] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-[#eef5ef] border border-[rgba(16,40,29,0.12)] rounded px-4 py-2.5 text-sm text-[#10281d] placeholder-[#5d7d6d] focus:outline-none focus:border-[#b01f24] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#245040] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="sarah@example.com"
                    className="w-full bg-[#eef5ef] border border-[rgba(16,40,29,0.12)] rounded px-4 py-2.5 text-sm text-[#10281d] placeholder-[#5d7d6d] focus:outline-none focus:border-[#b01f24] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#245040] mb-1.5">
                    Program Track
                  </label>
                  <select
                    className="w-full bg-[#eef5ef] border border-[rgba(16,40,29,0.12)] rounded px-4 py-2.5 text-sm text-[#10281d] focus:outline-none focus:border-[#b01f24] transition-colors"
                  >
                    <option value="baking">French Patisserie & Viennoiserie (KHDA)</option>
                    <option value="world">World Gastronomy Exploration</option>
                    <option value="indian">Haute Royal Indian Cookery</option>
                    <option value="junior">Junior Chef Academy (Kids & Teens)</option>
                    <option value="events">Private Concept Dinner / Corporate Retreat</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded text-[#f7fbf7] font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:brightness-110 hover:shadow-[0_4px_20px_rgba(176,31,36,0.35)]"
                  style={{
                    background: "linear-gradient(135deg, #b01f24 0%, #d0302f 100%)",
                  }}
                >
                  Download Prospectus
                  <ArrowRight size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
