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
      {/* Background Image - Replace with your image URL */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://wallpapershome.com/images/pages/pic_h/18612.jpg')",
          opacity: 0.8,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <div className="relative">
            {/* Background glow layers */}
            <h1 
              className="absolute inset-0 text-[6rem] font-black blur-3xl opacity-40"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '-0.02em' }}
              aria-hidden="true"
            >
              ZYPH  '26
            </h1>
            <h1 
              className="absolute inset-0 text-[6rem] font-black blur-xl opacity-60"
              style={{ fontFamily: "'Teko', sans-serif", letterSpacing: '-0.02em' }}
              aria-hidden="true"
            >
              ZYPH  '26
            </h1>
            
            {/* Main text */}
            <h1 
              className={`relative text-[6rem] font-black bg-linear-to-b from-white via-white to-white/90 bg-clip-text text-transparent transition-opacity duration-1000 `}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: '-0.02em',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
              }}
            >
              ZYPH  '26
            </h1>
          </div>
              <p className="text-base text-white/50 leading-relaxed">
                Code for the planet. Build solutions that address the UN's 17 Sustainable Development Goals.
              </p>
            </div>
            
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

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
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
                    className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>

            <div className="space-y-2">
              <p className="text-sm text-white/50">Get in touch</p>
              <a
                href="mailto:hello@ZYPH .srm.edu"
                className="text-base text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                hello@ZYPH .srm.edu
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-white/50">
            © 2025 ZYPH  Hackathon. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#privacy" className="text-sm text-white/50 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-white/50 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#conduct" className="text-sm text-white/50 hover:text-white transition-colors">
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