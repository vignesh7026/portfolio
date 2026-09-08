"use client";

import Link from "next/link";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-black pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Get in Touch CTA card */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-neutral-850 bg-neutral-950/70 p-8 sm:p-12 md:flex md:items-center md:justify-between dotted-grid shadow-xl shadow-black/80">
          <div className="relative z-10 space-y-4 md:max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1 text-xs font-semibold text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Open for Internships & Full-Time Roles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to engineer the future?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              I'm actively seeking AI full-stack developer & agentic AI engineering roles, internships, and high-impact freelance projects. Let's collaborate.
            </p>
          </div>
          <div className="relative z-10 mt-6 md:mt-0 flex flex-shrink-0">
            <Link
              href="mailto:user.vignesh7026@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-400 px-7 py-3.5 text-base font-bold text-black transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25"
            >
              <span>Get In Touch</span>
              <Mail className="h-4 w-4" />
            </Link>
          </div>
          {/* Subtle gradient light background glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
        </div>

        {/* Brand, Links and Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-green-500/30 bg-neutral-950 text-sm font-extrabold text-green-400">
                VG
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Vigneshwaran G.
              </span>
            </div>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              AI Full Stack Developer & Agentic AI Engineer building autonomous agents, scalable web applications, and intuitive interfaces from Bengaluru, India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-green-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-green-400 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-neutral-400 hover:text-green-400 text-sm transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-neutral-400 hover:text-green-400 text-sm transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
              Connect With Me
            </h3>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/vignesh7026"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900 bg-neutral-950 text-neutral-400 hover:border-neutral-800 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/vigneshwaran-g-496141319"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900 bg-neutral-950 text-neutral-400 hover:border-neutral-800 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:user.vignesh7026@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900 bg-neutral-950 text-neutral-400 hover:border-neutral-800 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-neutral-500 text-xs mt-2 flex items-center gap-1 font-mono">
              Bengaluru, Karnataka, India • GMT+5:30
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-neutral-500 text-xs">
            &copy; 2026 Vigneshwaran G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
