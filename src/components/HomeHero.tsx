"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Copy, Check, Sparkles, Bot, Cpu, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/BrandIcons";

const roles = [
  "AI Full Stack Developer",
  "Agentic AI Engineer",
  "Autonomous Agent Builder",
  "Full Stack Web Engineer",
  "UI/UX Designer",
];

const highlights = [
  { icon: <Bot className="h-3.5 w-3.5 text-green-400" />, label: "Agentic AI & LLMs" },
  { icon: <Cpu className="h-3.5 w-3.5 text-cyan-400" />, label: "Autonomous Workflows" },
  { icon: <Zap className="h-3.5 w-3.5 text-amber-400" />, label: "Full-Stack Scalability" },
];

export default function HomeHero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("user.vignesh7026@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Staggered letters variants
  const titleText = "AI Full Stack Developer & Agentic AI Engineer.";
  const words = titleText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  } as const;

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  } as const;

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[250px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Small New badge ticker text above hero */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-neutral-950/80 px-4 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-md shadow-lg shadow-green-500/10 hover:border-green-500/50 hover:text-white transition-all">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
            <span className="h-1.5 w-1.5 rounded-full bg-black animate-ping" />
            Active
          </span>
          <span className="text-neutral-200">Building Agentic Systems & Full Stack Apps</span>
        </div>
      </motion.div>

      {/* Large animated headline */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1050px] text-4xl sm:text-5xl md:text-6xl lg:text-[3.2rem] font-heading font-extrabold leading-[1.08] tracking-tight text-white py-2"
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            variants={wordVariants}
            className={`inline-block mr-[0.25em] last:mr-0 ${
              word.includes("AI") || word.includes("Agentic")
                ? "bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subheading with rotating tagline */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-sm sm:text-base md:text-lg text-neutral-400 font-label tracking-tight">
        <span className="text-white font-medium">Hi, I'm Vigneshwaran</span>
        <span className="inline-flex relative group">
          <Link href="/about" className="p-0 bg-transparent hover:bg-transparent">
            <div className="relative h-11 w-11 rounded-full overflow-hidden border-2 border-green-500/40 p-0.5 shadow-md shadow-green-500/20 hover:border-green-400 transition-all duration-300 group-hover:scale-110">
              <img
                src="/vignesh.jpg"
                alt="Vigneshwaran G"
                className="h-full w-full object-cover rounded-full"
              />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-black" />
            </div>
          </Link>
        </span>
        <div className="relative h-8 min-w-[240px] overflow-hidden text-center sm:text-left flex items-center justify-center sm:justify-start">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentRoleIndex}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute font-semibold text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text border-b-2 border-green-500 pb-0.5 whitespace-nowrap"
            >
              {roles[currentRoleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* High-tech feature highlights chips */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
      >
        {highlights.map((h, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950/70 border border-neutral-850 text-neutral-300 text-xs font-medium"
          >
            {h.icon}
            <span>{h.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Interactive CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        {/* Explore Projects Button */}
        <Link
          href="/projects"
          className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-black px-7 py-3 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25"
        >
          <Sparkles className="h-4 w-4" />
          <span>Explore Projects</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        {/* Connect Button */}
        <Link
          href="https://linkedin.com/in/vigneshwaran-g-496141319"
          target="_blank"
          className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-green-500/40 hover:bg-neutral-900"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Let's Connect</span>
          </div>
        </Link>

        {/* Email Pill */}
        <button
          onClick={handleCopyEmail}
          className="group flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-950/80 px-5 py-3 text-sm font-medium text-neutral-300 hover:border-neutral-700 hover:text-white transition-all cursor-pointer relative"
        >
          <span className="font-mono text-xs">user.vignesh7026@gmail.com</span>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 group-hover:text-white transition-colors">
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </div>
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: -40, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute top-0 right-4 bg-green-500 text-black font-semibold text-xs rounded-lg px-2.5 py-1 pointer-events-none shadow-lg shadow-green-500/20"
              >
                Copied!
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Social Media Links Floating Pill */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="mt-12 relative z-10"
      >
        <div className="mx-auto flex h-[54px] w-max justify-center gap-2.5 p-1.5 rounded-full border border-neutral-900 bg-neutral-950/70 px-3 backdrop-blur-xl items-center shadow-lg shadow-black/60">
          {/* LinkedIn Link */}
          <Link
            href="https://linkedin.com/in/vigneshwaran-g-496141319"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4.5 w-4.5" />
          </Link>

          {/* GitHub Link */}
          <Link
            href="https://github.com/vignesh7026"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4.5 w-4.5" />
          </Link>

          {/* Twitter Link */}
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105"
            aria-label="Twitter"
          >
            <TwitterIcon className="h-4.5 w-4.5" />
          </Link>

          {/* Instagram Link */}
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-4.5 w-4.5" />
          </Link>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-5 flex flex-col items-center gap-1.5 text-neutral-500 hover:text-green-500 transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById("bento-grid")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
