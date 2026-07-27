"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Copy, Check } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/BrandIcons";

const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Android Developer",
  "Python Developer",
];

export default function HomeHero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
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
  const titleText = "Full Stack Developer. Building from Bengaluru.";
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
      {/* Small New badge ticker text above hero */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-950/80 px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:text-white transition-all">
          <span className="inline-flex items-center rounded-full bg-green-500 px-2 py-0.5 mr-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-black">New</span>
          <span>Open to internships & freelance work!</span>
        </span>
      </motion.div>

      {/* Large animated headline */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1000px] text-4xl sm:text-5xl md:text-6xl lg:text-[2.8rem] font-heading font-bold leading-[1.08] tracking-tight text-white py-2"
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            variants={wordVariants}
            className={`inline-block mr-[0.25em] last:mr-0 ${
              word.includes("Bengaluru.") ? "text-green-500" : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subheading with rotating tagline */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm sm:text-base md:text-lg text-neutral-400 font-label tracking-tight">
        <span className="text-white">Hi, I'm Vigneshwaran</span>
        <span className="inline-flex relative group">
          <Link href="/about" className="p-0 bg-transparent hover:bg-transparent">
            <div className="h-10 w-10 rounded-full overflow-hidden border border-neutral-800/80 shadow-sm hover:border-green-500/60 transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110">
              <img
                src="/vignesh.jpg"
                alt="Vigneshwaran G"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>
        </span>
        <div className="relative h-7 min-w-[200px] overflow-hidden text-center sm:text-left flex items-center justify-center sm:justify-start">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentRoleIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute font-semibold text-white border-b border-green-500 pb-0.5 whitespace-nowrap"
            >
              {roles[currentRoleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        {/* Let's Connect */}
        <Link
          href="https://linkedin.com/in/vigneshwaran-g-496141319"
          target="_blank"
          className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-green-500/40 hover:glow-green"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Let's Connect</span>
          </div>
        </Link>

        {/* Email Pill */}
        <button
          onClick={handleCopyEmail}
          className="group flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-950/80 px-6 py-2 text-sm font-medium text-neutral-300 hover:border-neutral-700 hover:text-white transition-all cursor-pointer relative"
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
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-14 relative z-10"
      >
        <div className="mx-auto flex h-[58px] w-max justify-center gap-2.5 p-2 rounded-full border border-neutral-900 bg-neutral-950/60 px-3 backdrop-blur-xl items-center shadow-md">
          {/* LinkedIn Link */}
          <Link
            href="https://linkedin.com/in/vigneshwaran-g-496141319"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </Link>

          {/* GitHub Link */}
          <Link
            href="https://github.com/vignesh7026"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </Link>

          {/* Twitter Link */}
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-300"
            aria-label="Twitter"
          >
            <TwitterIcon className="h-5 w-5" />
          </Link>

          {/* Instagram Link */}
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 flex flex-col items-center gap-2 text-neutral-500 hover:text-green-500 transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById("bento-grid")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4.5 w-4.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
