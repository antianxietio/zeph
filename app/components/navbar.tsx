"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "works", "services", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2 pt-6" : "py-3 sm:py-4"
        }`}
      >
        <div className="flex justify-center items-center px-3 sm:px-6 lg:px-8 w-full mx-auto relative">
          {/* Logo - Outside on the left */}
          <Link href="/" className="group flex items-center gap-2 sm:gap-3 z-50 absolute left-3 sm:left-6 lg:left-8">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-white/40 blur-md group-hover:opacity-70 transition-opacity" />
              <div className="relative flex w-20 h-20 items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-black ring-1 ring-white/20">
                <img
                  src="assets/logo.jpeg"
                  alt="ZYPH  Logo"
                  className="w-full h-full rounded-full p-1 bg-gradient-to-br from-black to-gray-900"
                />
              </div>
            </div>
            
          </Link>

          {/* Center Navbar Container */}
          <div className="relative max-w-3xl">
            {/* Glow */}
            <div className="absolute -inset-[2px] rounded-full opacity-50">
              <div className="absolute inset-0 rounded-full bg-white/30 blur-xl animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-white/20 blur-lg" />
            </div>

            {/* Navbar container */}
            <div
              className={`relative rounded-full border border-white/20 backdrop-blur-xl transition-all duration-500 ${
                isScrolled
                  ? "bg-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                  : "bg-black/40 shadow-[0_16px_32px_rgba(59,130,246,0.2)]"
              }`}
            >
              <div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  isScrolled ? "px-4 py-2" : "px-5 sm:px-6 py-3 sm:py-4"
                }`}
              >
                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                  {[
                    { url: "/", label: "Roadmap" },
                    { url: "/#about", label: "About" },
                    { url: "/#venue", label: "Venue" },
                    { url: "/#footer", label: "Contact" },
                  ].map((item) => (
                    <a
                      key={item.url}
                      href={`${item.url}`}
                      className={`relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl transition-all duration-300 ${
                        activeSection === item.url.slice(1)
                          ? "text-white bg-white/10 shadow-[0_0_16px_rgba(255,255,255,0.2)]"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}

                  {/* Register Now CTA btn */}
                  <a
                    href="/register"
                    className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white p-[1px] shadow-[0_0_16px_rgba(255,255,255,0.3)] hover:shadow-[0_0_24px_rgba(255,255,255,0.5)] transition-all duration-300 ml-2"
                  >
                    <div className="relative rounded-lg sm:rounded-xl bg-white px-4 sm:px-6 py-2 text-[0.7rem] sm:text-xs md:text-sm font-semibold text-black">
                      <span className="relative z-10">Register Now</span>
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-gray-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </a>
                </nav>

                {/* Mobile menu btn */}
                <button
                  className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 right-0 z-40 pt-20">
            <div className="px-4">
              <div className="relative rounded-2xl border border-gray-200/30 backdrop-blur-xl bg-white/85 shadow-[0_16px_32px_rgba(0,0,0,0.12)]">
                {/* Mobile menu glow */}
                <div className="absolute -inset-[2px] rounded-2xl opacity-60">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/15 via-blue-500/25 to-indigo-400/15 blur-xl" />
                </div>

                <div className="relative p-6">
                  <nav className="flex flex-col gap-4">
                    {[
                      { url: "/", label: "Home" },
                      { url: "/#about", label: "About" },
                      { url: "/portfolio", label: "Portfolio" },
                      { url: "/services", label: "Services" },
                    ].map((item, index) => (
                      <a
                        key={item.url}
                        href={item.url}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`relative px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                          activeSection === item.url.slice(1)
                            ? "text-white bg-white/10 shadow-[0_0_16px_rgba(59,130,246,0.3)]"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: isMobileMenuOpen
                            ? "slideInFromTop 0.3s ease-out forwards"
                            : "none",
                        }}
                      >
                        {item.label}
                      </a>
                    ))}

                    {/* Mobile Contact Button */}
                    <a
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-[1px] shadow-[0_0_16px_rgba(59,130,246,0.4)] mt-4"
                      style={{
                        animationDelay: "400ms",
                        animation: isMobileMenuOpen
                          ? "slideInFromTop 0.3s ease-out forwards"
                          : "none",
                      }}
                    >
                      <div className="relative rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white text-center">
                        <span className="relative z-10">Contact Us</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu backdrop */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
}