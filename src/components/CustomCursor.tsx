"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        ringX = mouseX;
        ringY = mouseY;
      }

      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    let animationFrameId: number;
    const animate = () => {
      if (isVisible) {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        gsap.set(ring, { x: ringX, y: ringY });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const onHoverIn = () => {
      ring.classList.add("cursor-hover");
    };
    const onHoverOut = () => {
      ring.classList.remove("cursor-hover");
    };

    const interactables = document.querySelectorAll("a, button, input, select, [data-cursor]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onHoverIn);
      el.addEventListener("mouseleave", onHoverOut);
    });

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverIn);
        el.removeEventListener("mouseleave", onHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
    </>
  );
}
