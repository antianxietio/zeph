"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Navbar from "./components/navbar";
import HackathonHero from "./components/Hero";
import HackathonTracks from "./components/Tracks";
import Timeline from "./components/Timeline";
import HackathonCountdown from "./components/counter";
import LocationDetails from "./components/location";
import Footer from "./components/footer";

// Client-only galaxy (future use)
const Galaxy = dynamic(() => import("./components/galaxy"), {
  ssr: false,
});

// 🌗 Environment transition component
function EnvironmentTransition({ image }: { image: string }) {
  return (
    <div
      className="relative -mt-[25vh] h-[50vh] w-full bg-cover bg-top z-30 pointer-events-none"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWindowHeight(window.innerHeight);

    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    // Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // 🌕 Moon parallax
  const moonTranslateY =
    windowHeight > 0
      ? Math.max(-50, 50 - (scrollY / windowHeight) * 100)
      : 50;

  const titleOpacity = Math.max(0, 1 - scrollY / (windowHeight * 0.5));
  const titleTranslateY = scrollY * 0.3;

  return (
    <main className="w-full bg-black text-white overflow-x-hidden">

      {/* ===================== SPACE ===================== */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Galaxy reserved */}
        {/* <Galaxy /> */}

        {/* Moon */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-bottom transition-transform duration-100 ease-linear"
          style={{
            backgroundImage: "url('/assets/moon.png')",
            transform: `translateY(${moonTranslateY}%)`,
          }}
        />

        <Navbar />

        {/* Hero */}
        <div
          className="relative z-20 flex h-full flex-col items-center justify-center -mt-32"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
          }}
        >
          <div className="relative">
            <h1
              className="absolute inset-0 text-[12rem] font-black blur-3xl opacity-40"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              aria-hidden
            >
              ZEPH '26
            </h1>

            <h1
              className="relative text-[12rem] font-black bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/80"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                filter:
                  "drop-shadow(0 4px 8px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.3))",
              }}
            >
              ZEPH '26
            </h1>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 flex flex-col items-center gap-3">
            <span className="text-xs tracking-widest text-white/40">
              SCROLL
            </span>
            <div className="h-12 w-6 rounded-full border border-white/20 p-1">
              <div className="h-2 w-2 mx-auto rounded-full bg-white/40 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPACE → SKY TRANSITION ===== */}
      <EnvironmentTransition image="/assets/space-sky.png" />

      {/* ================= SKY / LAND ================= */}
      <section className="relative bg-[#0a1a2f] overflow-hidden">
        <HackathonHero />
        <HackathonTracks />
        <Timeline />
        <HackathonCountdown />
      </section>
      {/* ================= SEA ================= */}
      <section className="relative bg-[#020d14] overflow-hidden">
        <LocationDetails />
        <Footer />
      </section>

    </main>
  );
}
