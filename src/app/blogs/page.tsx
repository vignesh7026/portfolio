"use client";

import { motion } from "framer-motion";
import { BookOpen, Newspaper, Sparkles, Send } from "lucide-react";
import { useState } from "react";

export default function Blogs() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-12 flex-grow flex flex-col justify-center">
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-green-500 uppercase">
          Writing
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          The Developer Journal
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          Articles about full-stack engineering, native Android app development guides, database designs, and interactive UI/UX reviews.
        </p>
      </div>

      {/* Premium Empty State */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-neutral-900 bg-neutral-950/40 p-8 sm:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden dotted-grid min-h-[400px]"
      >
        {/* Decorative background glow */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" />

        {/* Floating animated icon */}
        <div className="relative mb-6">
          <div className="absolute -inset-1.5 rounded-2xl bg-green-500/20 blur-lg animate-pulse" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-800 bg-black text-green-500 animate-float">
            <BookOpen className="h-7 w-7" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-md space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Articles launching soon
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            I'm currently drafting technical deep-dives on Android's MediaPlayer architecture, SQL normalization guidelines, and React transitions.
          </p>
        </div>

        {/* Email Subscribe / Waitlist form */}
        <form onSubmit={handleSubscribe} className="relative z-10 mt-10 w-full max-w-sm flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-grow rounded-full border border-neutral-900 bg-black/85 px-4.5 py-3 text-sm text-white placeholder-neutral-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-colors"
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-1.5 rounded-full bg-green-500 hover:bg-green-600 px-5 py-3 text-sm font-semibold text-black transition-all hover:scale-102 hover:glow-green cursor-pointer"
          >
            {subscribed ? "Subscribed!" : "Notify Me"}
            {!subscribed && <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />}
          </button>
        </form>

        {subscribed && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-xs text-green-500 font-semibold tracking-wide"
          >
            Awesome! You've been added to the notification list.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
