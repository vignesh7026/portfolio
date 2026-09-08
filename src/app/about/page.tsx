"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, GraduationCap, Calendar, Briefcase, ExternalLink, Bot, Sparkles, Code2, Layers } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import Link from "next/link";

// 3 Custom Slide Mockups for Carousel
const slides = [
  {
    title: "Agentic AI & Autonomous Workflows",
    desc: "Architecting autonomous agents with tool calling, recovery loops, and dynamic LLM reasoning pipelines.",
    gradient: "from-emerald-500/25 via-neutral-900 to-black",
    decor: (
      <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pointer-events-none">
        <pre className="text-[10px] text-emerald-400 font-mono leading-tight">
          {`const agent = new AutonomousAgent({
  tools: [razorpayWebhook, dunningEngine],
  retryPolicy: "exponential_backoff",
  onFailure: async (tx) => await agent.recover(tx)
});`}
        </pre>
      </div>
    )
  },
  {
    title: "Full-Stack Web Engineering",
    desc: "Building high-performance applications with Next.js, TypeScript, PostgreSQL, and scalable REST APIs.",
    gradient: "from-cyan-500/20 via-neutral-900 to-black",
    decor: (
      <div className="absolute inset-0 flex items-center justify-center opacity-25 select-none pointer-events-none">
        <pre className="text-[10px] text-cyan-400 font-mono leading-tight">
          {`export async function GET(req: Request) {
  const telemetry = await db.query.pulseMetrics();
  return Response.json({ success: true, telemetry });
}`}
        </pre>
      </div>
    )
  },
  {
    title: "UI/UX & Motion Design",
    desc: "Designing high-conversion design systems in Figma and implementing fluid micro-interactions with Tailwind and Framer Motion.",
    gradient: "from-purple-500/20 via-neutral-900 to-black",
    decor: (
      <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pointer-events-none">
        <div className="relative w-36 h-36 border border-purple-500/20 rounded-full flex items-center justify-center">
          <div className="w-24 h-24 border border-dashed border-purple-500/30 rounded-full flex items-center justify-center animate-spin-slow" />
          <div className="absolute w-3 h-3 bg-purple-500 rounded-full top-0" />
          <div className="absolute w-3 h-3 bg-green-500 rounded-full bottom-0" />
        </div>
      </div>
    )
  }
];

// Timeline details
const timelineItems = [
  {
    year: "2025",
    role: "Web Development Intern",
    company: "8Queens Software Technology",
    location: "Chennai, TN (Remote)",
    desc: "Engineered responsive user interfaces for enterprise dashboards. Integrated PostgreSQL databases and designed RESTful endpoints. Optimized SQL queries to improve system response times by 30%.",
    tech: ["HTML5", "CSS3", "JavaScript", "MySQL", "REST APIs"]
  },
  {
    year: "2025",
    role: "UI/UX Design Intern",
    company: "Infonel Technologies",
    location: "Tirunelveli, TN (Hybrid)",
    desc: "Designed end-to-end healthcare interface experiences in Figma. Created user flows, interactive wireframes, and prototypes. Evaluated usability feedback to refine onboarding funnels.",
    tech: ["Figma", "Wireframing", "Prototyping", "Usability Testing"]
  }
];

// Certifications
const certifications = [
  "Agentic AI & LLM Systems Engineering",
  "Full Stack Web Development",
  "PostgreSQL (PSQL) Database Administration",
  "UI/UX Design Internship Certification",
  "Web Development Internship Certification",
  "UiPath Robotic Process Automation (RPA)",
];

export default function About() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-28">
      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-green-500 uppercase flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            About Me
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI Full Stack Developer & Agentic Engineer.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-neutral-300 text-lg leading-relaxed font-normal">
              Hi, I'm <strong className="text-white">Vigneshwaran</strong> — an AI Full Stack Developer & Agentic AI Engineer based in Bengaluru. I engineer intelligent autonomous agent workflows, full-stack web applications, and intuitive UI/UX experiences.
            </p>
            <p className="text-neutral-400 text-base leading-relaxed mt-4">
              I specialize in bridging powerful LLM architectures with production-grade backends (Next.js, TypeScript, Python, PostgreSQL) and slick frontend design systems. Whether it's automated payment recovery engines for Razorpay or real-time developer telemetry, I focus on scalable, maintainable, and high-impact software.
            </p>
          </div>

          {/* Education Mini Card */}
          <div id="education" className="rounded-2xl border border-neutral-900 bg-neutral-950/70 p-6 space-y-4 shadow-lg">
            <div className="flex items-center gap-2.5 text-green-400">
              <GraduationCap className="h-5 w-5" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Education</h3>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-base font-bold text-white leading-snug">
                BCA (Bachelor of Computer Applications)
              </h4>
              <p className="text-xs text-neutral-400">
                Christ (Deemed to be University), Bengaluru
              </p>
              <div className="flex items-center gap-1 text-[11px] text-neutral-500 font-medium pt-2">
                <Calendar className="h-3 w-3" />
                <span>2024 — 2027 (Expected)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Slide Image/Mockup Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
            Specializations & Craft
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-neutral-900 bg-neutral-950 text-neutral-400 hover:text-white hover:border-neutral-800 transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-neutral-900 bg-neutral-950 text-neutral-400 hover:text-white hover:border-neutral-800 transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950/60 p-8 flex flex-col justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 bg-gradient-to-br ${slides[carouselIndex].gradient} flex flex-col justify-between p-8`}
            >
              {slides[carouselIndex].decor}

              <div className="relative z-10 space-y-2 max-w-xl mt-auto">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {slides[carouselIndex].title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {slides[carouselIndex].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === carouselIndex ? "w-6 bg-green-500" : "w-1.5 bg-neutral-700"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-green-500 uppercase flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" />
            Experience
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Internships & Professional Work
          </h2>
        </div>

        <div className="space-y-6 relative border-l border-neutral-900 ml-3 pl-6">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="relative space-y-2 group">
              {/* Bullet point indicator */}
              <div className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-neutral-800 border-2 border-black group-hover:bg-green-500 transition-colors" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-green-500 bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 rounded-full">
                  {item.year}
                </span>
                <span className="text-xs text-neutral-500">{item.location}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                  {item.role}
                </h3>
                <h4 className="text-sm font-semibold text-neutral-400">{item.company}</h4>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium text-neutral-500 bg-neutral-950 border border-neutral-900 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5" />
            Certifications
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Verified Credentials & Training
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-900 bg-neutral-950/40 p-5 flex items-center gap-3.5 hover:border-neutral-800 transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 text-green-500">
                <Award className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold text-neutral-300">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
