"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0, rotate: -8 },
      { scale: 1, opacity: 1, rotate: 0, duration: 0.6, ease: "back.out(1.7)" }
    )
      .to(lineRef.current, {
      scaleX: 1,
      duration: 1.1,
      ease: "power3.inOut",
    }, "-=0.2")
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }, "-=0.3")
      .to([lineRef.current, textRef.current], {
        opacity: 0,
        duration: 0.3,
        delay: 0.25,
      })
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      });
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="loader-overlay"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <div ref={logoRef} style={{ opacity: 0 }}>
          <Image
            src="/vjcc-logo.jpg"
            alt="VJCC Culinary Arts"
            width={120}
            height={99}
            priority
            className="w-16 h-16 object-contain rounded bg-white border border-[rgba(176,31,36,0.15)] shadow-sm p-1"
          />
        </div>
        <div
          ref={lineRef}
          style={{
            width: "200px",
            height: "1.5px",
            background: "linear-gradient(90deg, transparent, #b01f24, transparent)",
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />
        <div
          ref={textRef}
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "0.85rem",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#b01f24",
            opacity: 0,
            transform: "translateY(8px)",
          }}
        >
          VJCC CULINARY
        </div>
      </div>
    </div>
  );
}
