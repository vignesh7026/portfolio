"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, GraduationCap, Calendar, Briefcase, ExternalLink, GitBranch } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import Link from "next/link";

// 3 Custom Slide Mockups for Carousel
const slides = [
  {
    title: "Full-Stack Development",
    desc: "Architecting interactive web solutions with Next.js, Node.js, and relational databases.",
    gradient: "from-green-500/25 via-neutral-900 to-black",
    decor: (
      <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pointer-events-none">
        <pre className="text-[10px] text-green-500 font-mono leading-tight">
          {`const server = express();
server.use(cors());
server.get("/api/v1/projects", (req, res) => {
  db.query("SELECT * FROM projects", (err, data) => {
    res.json(data);
  });
});`}
        </pre>
      </div>
    )
  },
  {
    title: "Native Android Engineering",
    desc: "Developing native applications using Kotlin/Java, Android Studio, and Android SDK APIs.",
    gradient: "from-blue-500/20 via-neutral-900 to-black",
    decor: (
      <div className="absolute inset-0 flex items-center justify-center opacity-25 select-none pointer-events-none">
        <div className="border-2 border-dashed border-blue-500/30 rounded-2xl w-40 h-64 flex flex-col justify-between p-4 rotate-12">
          <div className="w-12 h-1.5 bg-blue-500/30 rounded-full mx-auto" />
          <div className="flex-1 flex items-center justify-center">
            <span className="text-xs text-blue-400 font-mono">App Activity</span>
          </div>
          <div className="h-6 bg-blue-500/20 rounded-lg" />
        </div>
      </div>
    )
  },
  {
    title: "UI/UX Design in Figma",
    desc: "Mapping experiences from quick napkin sketches and user flows to high-fidelity clickable wireframes.",
    gradient: "from-pink-500/20 via-neutral-900 to-black",
    decor: (
      <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pointer-events-none">
        <div className="relative w-36 h-36 border border-pink-500/20 rounded-full flex items-center justify-center">
          <div className="w-24 h-24 border border-dashed border-pink-500/30 rounded-full flex items-center justify-center animate-spin-slow" />
          <div className="absolute w-3 h-3 bg-pink-500 rounded-full top-0" />
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
    desc: "Designed the end-to-end healthcare interface for a 'Doctor Consulting App' in Figma. Created user flows, interactive wireframes, and prototypes. Evaluated usability feedback to refine the onboarding and scheduling funnels.",
    tech: ["Figma", "Wireframing", "Prototyping", "Usability Testing"]
  }
];

// Certifications
const certifications = [
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
          <span className="text-xs font-bold tracking-widest text-green-500 uppercase">
            About Me
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Crafting digital experiences.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-neutral-400 text-lg leading-relaxed">
              Hi, I'm Vigneshwaran — a BCA student passionate about full-stack development, UI/UX design, and Android app building. I focus on writing clean, maintainable code and designing user-first interfaces, from responsive web apps to interactive Streamlit tools.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mt-4">
              I am currently pursuing my degree in Bangalore, building projects that combine database organization with highly aesthetic frontends. I love solving challenges related to state management, backend normalization, and layouts that look pixel-perfect on any device.
            </p>
          </div>

          {/* Education Mini Card */}
          <div id="education" className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6 space-y-4">
            <div className="flex items-center gap-2.5 text-green-500">
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
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
      >
        <div className="relative h-72 sm:h-96 rounded-3xl border border-neutral-900 overflow-hidden bg-neutral-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 bg-gradient-to-br ${slides[carouselIndex].gradient} flex flex-col justify-end p-8 sm:p-12 relative`}
            >
              {slides[carouselIndex].decor}

              <div className="relative z-10 max-w-xl space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {slides[carouselIndex].title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  {slides[carouselIndex].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation */}
          <div className="absolute right-6 bottom-6 z-20 flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900 bg-black/85 text-neutral-400 hover:text-white transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900 bg-black/85 text-neutral-400 hover:text-white transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Experience Vertical Timeline Section */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
            History
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Career Timeline
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-neutral-900 ml-4 md:ml-6 space-y-12 py-4">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Pulsing indicator node */}
              <span className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full border border-neutral-950 bg-neutral-800 transition-all duration-300 group-hover:bg-green-500 group-hover:scale-125" />
              
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-green-500 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-neutral-400 font-semibold mt-0.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{item.company}</span>
                      <span className="text-neutral-700">&middot;</span>
                      <span className="text-neutral-500 text-xs font-normal">{item.location}</span>
                    </div>
                  </div>
                  <span className="inline-block text-xs font-bold bg-neutral-950 border border-neutral-900 text-green-500 px-3 py-1 rounded-full w-max">
                    {item.year}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold text-neutral-400 bg-neutral-950 border border-neutral-900 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GitHub Open Source & Stats Section */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-green-500 uppercase">
            GitHub Activities
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Open Source & Stats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-white font-semibold mb-4">
              <GithubIcon className="h-5 w-5 text-neutral-400" />
              <span>GitHub Profile Summary</span>
            </div>
            <div className="w-full flex items-center justify-center p-2 rounded-xl bg-black border border-neutral-950">
              <img
                src="https://github-readme-stats.vercel.app/api?username=vignesh7026&show_icons=true&theme=dark&bg_color=00000000&title_color=22c55e&icon_color=22c55e&text_color=ffffff&hide_border=true"
                alt="Vigneshwaran's GitHub Stats"
                className="w-full max-h-[175px] object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Card 2: Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-white font-semibold mb-4">
              <GitBranch className="h-5 w-5 text-neutral-400" />
              <span>Language Distribution</span>
            </div>
            <div className="w-full flex items-center justify-center p-2 rounded-xl bg-black border border-neutral-950">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=vignesh7026&layout=compact&theme=dark&bg_color=00000000&title_color=22c55e&text_color=ffffff&hide_border=true"
                alt="Vigneshwaran's Top Languages"
                className="w-full max-h-[175px] object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Card 3: Contributions Calendar (colspan 2 in desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between text-white font-semibold">
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-neutral-400" />
                Contributions Tracker
              </span>
              <Link 
                href="https://github.com/vignesh7026"
                target="_blank"
                className="text-neutral-500 hover:text-green-500 transition-colors text-xs flex items-center gap-1 font-medium"
              >
                View github.com/vignesh7026
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
            <div className="w-full bg-black border border-neutral-950 p-4 rounded-xl flex justify-center items-center overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/22c55e/vignesh7026"
                alt="Vigneshwaran's GitHub Contributions"
                className="max-w-[720px] w-full min-w-[500px] h-auto object-contain filter invert-0 brightness-110"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Strip / Section */}
      <section id="certifications" className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
            Credentials
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Professional Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              className="group rounded-xl border border-neutral-900 bg-neutral-950/60 p-4 flex items-center gap-3.5 hover:border-neutral-800 transition-all cursor-default"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 transition-transform group-hover:scale-115">
                <Award className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-neutral-300 leading-snug group-hover:text-white transition-colors">
                {cert}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
