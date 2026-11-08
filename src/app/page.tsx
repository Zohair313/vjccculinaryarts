"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "@/components/CustomCursor";
import SitePatterns from "@/components/SitePatterns";
import CountUps from "@/components/CountUps";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Courses from "@/components/Courses";
import ConceptEvents from "@/components/ConceptEvents";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactVisit from "@/components/ContactVisit";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <SitePatterns />
      <CountUps />
      <Loader />
      <div className="min-h-screen bg-[#eef5ef] text-[#10281d] selection:bg-[#b01f24]/20 selection:text-[#b01f24]">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Founder />
          <Courses />
          <ConceptEvents />
          <Testimonials />
          <Gallery />
          <ContactVisit />
        </main>
        <Footer />
      </div>
    </>
  );
}
