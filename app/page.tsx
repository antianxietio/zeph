"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/navbar";
import HackathonHero from "./components/Hero";
import HackathonTracks from "./components/Tracks";

// IMPORTANT: client-only Galaxy
const Galaxy = dynamic(() => import("./components/galaxy"), {
  ssr: false,
});

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

    // Load custom font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const moonTranslateY =
    windowHeight > 0
      ? Math.max(-50, 50 - (scrollY / windowHeight) * 100)
      : 50;

  // Parallax effect for title
  const titleOpacity = Math.max(0, 1 - scrollY / (windowHeight * 0.5));
  const titleTranslateY = scrollY * 0.3;

  return (
    <main className="w-full bg-black text-white">
      <section className="relative h-screen overflow-hidden">
        {/* 🌌 Galaxy background */}
        <div className="absolute inset-0 z-0">
          <Galaxy
            transparent={false}
            twinkleIntensity={0.3}
            rotationSpeed={0.05}
            starSpeed={0.1}
            speed={0.1}
            mouseInteraction={false}
            mouseRepulsion={false}
          />
        </div>

        {/* 🌕 Moon */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-bottom transition-transform duration-100 ease-linear"
          style={{
            backgroundImage: "url('/assets/moon.png')",
            transform: `translateY(${moonTranslateY}%)`,
          }}
        />

        {/* Premium Navbar */}
    <Navbar/>
        {/* Hero Title with animations */}
        <div 
          className="relative z-20 flex h-full flex-col items-center justify-center -mt-32"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
          }}
        >
          <div className="relative">
            {/* Background glow layers */}
            <h1 
              className="absolute inset-0 text-[12rem] font-black blur-3xl opacity-40"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '-0.02em' }}
              aria-hidden="true"
            >
              ZEPH
            </h1>
            <h1 
              className="absolute inset-0 text-[12rem] font-black blur-xl opacity-60"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '-0.02em' }}
              aria-hidden="true"
            >
              ZEPH
            </h1>
            
            {/* Main text */}
            <h1 
              className={`relative text-[12rem] font-black bg-gradient-to-b from-white via-white to-white/90 bg-clip-text text-transparent transition-opacity duration-1000 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: '-0.02em',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
              }}
            >
              ZEPH
            </h1>
          </div>
          

          {/* Scroll indicator */}
          <div 
            className={`absolute bottom-12 flex flex-col items-center gap-3 transition-all duration-1000 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-xs font-light tracking-widest text-white/40">
              SCROLL
            </span>
            <div className="h-12 w-6 rounded-full border border-white/20 p-1">
              <div className="h-2 w-2 mx-auto rounded-full bg-white/40 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <HackathonHero/>

      <HackathonTracks/>
    </main>
  );
}