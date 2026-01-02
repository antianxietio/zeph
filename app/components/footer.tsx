import React from "react";
import { Twitter, Linkedin, Instagram, Github, Mail } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Venue", href: "#venue" },
  { name: "Register", href: "#register" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-transparent" id="footer">
      
      {/* Background – FADE IN AT TOP */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.7) 18%,
              rgba(0,0,0,0.35) 35%,
              rgba(0,0,0,0.15) 55%,
              rgba(0,0,0,0) 100%
            ),
            url('https://wallpapershome.com/images/pages/pic_h/18612.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="relative">
              
              {/* Glow Layers */}
              <h1
                className="absolute inset-0 text-[6rem] font-black blur-3xl opacity-40"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                aria-hidden
              >
                ZYPH ’26
              </h1>
              <h1
                className="absolute inset-0 text-[6rem] font-black blur-xl opacity-60"
                style={{ fontFamily: "'Teko', sans-serif" }}
                aria-hidden
              >
                ZYPH ’26
              </h1>

              {/* Main Text */}
              <h1
                className="relative text-[6rem] font-black bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/90"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  filter:
                    "drop-shadow(0 4px 8px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.3))",
                }}
              >
                ZYPH ’26
              </h1>
            </div>

            <p className="text-base text-white/50 leading-relaxed">
              Code for the planet. Build solutions that address the UN's 17
              Sustainable Development Goals.
            </p>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-white rounded-full" />
                <div className="absolute inset-0 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-40" />
              </div>
              <span className="text-sm text-white/70 font-semibold uppercase tracking-wider">
                Registration Open
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-6">
              Connect
            </h3>

            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <Icon className="w-5 h-5 text-white/60 hover:text-white" />
                  </a>
                );
              })}
            </div>

            <div className="space-y-2">
              <p className="text-sm text-white/50">Get in touch</p>
              <a
                href="mailto:hello@zyph.srm.edu"
                className="text-base text-white/70 hover:text-white flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                hello@zyph.srm.edu
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-white/50">
            © 2025 ZYPH Hackathon. All rights reserved.
          </div>

          <div className="flex gap-8">
            <a href="#privacy" className="text-sm text-white/50 hover:text-white">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-white/50 hover:text-white">
              Terms
            </a>
            <a
              href="#conduct"
              className="text-sm text-white/50 hover:text-white"
            >
              Code of Conduct
            </a>
          </div>
        </div>

        {/* SDG Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-sm text-white/60 font-medium">
              Aligned with UN Sustainable Development Goals
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
