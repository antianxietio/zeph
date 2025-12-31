"use client";

import React from "react";
import { Twitter, Linkedin, Instagram, Github, Mail } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Timeline", href: "#timeline" },
  { name: "Register", href: "#register" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@zeph.texus.edu", label: "Email" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms of Service", href: "#terms" },
  { name: "Code of Conduct", href: "#conduct" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Clearer Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('https://wallpapershome.com/images/wallpapers/underwater-wallpaper-3840x2160-cetacean-aquatic-18612.jpg')",
          filter: "brightness(0.85) contrast(1.15) saturate(1.2)",
        }}
      />

      {/* Strong Contrast Overlay */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-cyan-300 drop-shadow-[0_2px_12px_rgba(34,211,238,0.6)]">
              ZEPH
            </h2>
            <p className="text-slate-100 text-sm leading-relaxed drop-shadow-md">
              SDG-focused hackathon driving innovation for a sustainable future
              at Texus ’26
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-cyan-400/60 shadow-lg" />
              <span className="text-cyan-200 text-sm font-semibold">
                Registration Open
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-100 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">
              Connect With Us
            </h3>
            <p className="text-slate-100 text-sm mb-6">
              Stay updated with the latest announcements
            </p>

            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 hover:border-cyan-300 transition-all shadow-xl"
                  >
                    <Icon className="w-5 h-5 text-white hover:text-cyan-300 transition-colors" />
                  </a>
                );
              })}
            </div>

            <a
              href="mailto:hello@zeph.texus.edu"
              className="text-cyan-300 hover:text-cyan-200 text-sm font-medium"
            >
              hello@zeph.texus.edu
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/30 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-200 text-sm text-center md:text-left">
            © 2025 Zeph Hackathon •{" "}
            <span className="text-cyan-300 font-semibold">Texus ’26</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-slate-200 hover:text-cyan-300 text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* SDG Badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-cyan-400/40 rounded-full px-5 py-2.5 shadow-2xl">
            <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse shadow-cyan-400/60 shadow-lg" />
            <span className="text-cyan-100 text-sm font-medium">
              Aligned with UN Sustainable Development Goals
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
