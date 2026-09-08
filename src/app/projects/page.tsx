"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  ArrowUpRight, 
  Activity, 
  Droplet, 
  ShieldAlert, 
  Compass,
  Bot,
  Film,
  Calendar,
  Layers,
  Users,
  Sparkles,
  Search,
  CheckCircle2,
  Cpu
} from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category: string;
  filterCategory: "all" | "ai" | "web" | "systems";
  featured?: boolean;
  desc: string;
  highlight: string;
  tech: string[];
  icon: React.ReactNode;
  gradient: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Revenue Recovery Agent (Razorpay)",
    category: "Agentic AI / Fintech",
    filterCategory: "ai",
    featured: true,
    highlight: "Autonomous Agent Loops & Dunning Automation",
    desc: "Autonomous AI agent system for Razorpay failed payment recovery, intelligent dunning schedules, customer recovery triggers, and real-time transaction health telemetry.",
    tech: ["TypeScript", "Next.js", "Razorpay APIs", "Autonomous Agents", "Tailwind CSS"],
    icon: <Bot className="h-8 w-8 text-emerald-400" />,
    gradient: "from-emerald-500/25 via-emerald-950/40 to-black",
    githubUrl: "https://github.com/vignesh7026/razorpay",
    liveUrl: "https://revenue-recovery-frontend-e5jh.onrender.com/"
  },
  {
    id: 2,
    title: "Cine Pathos",
    category: "Web Application / Entertainment",
    filterCategory: "web",
    featured: true,
    highlight: "Dynamic Cinematic Marquee & Motion Canvas",
    desc: "Immersive cinematic storytelling platform & dynamic marquee entertainment experience exploring emotional movie arcs, curations, and high-performance interactive media showcases.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "TMDB APIs"],
    icon: <Film className="h-8 w-8 text-purple-400" />,
    gradient: "from-purple-500/25 via-purple-950/40 to-black",
    githubUrl: "https://github.com/vignesh7026/cine-pathos",
    liveUrl: "https://marquee-cine.vercel.app/"
  },
  {
    id: 3,
    title: "Repo Pulse",
    category: "Developer Tools / Analytics",
    filterCategory: "web",
    featured: true,
    highlight: "Real-time Repository Telemetry & Velocity",
    desc: "Comprehensive GitHub repository health & developer pulse analytics dashboard tracking contributor velocity, commit frequencies, pull request turnarounds, and release metrics.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "GitHub API", "Data Viz"],
    icon: <Activity className="h-8 w-8 text-cyan-400" />,
    gradient: "from-cyan-500/25 via-cyan-950/40 to-black",
    githubUrl: "https://github.com/vignesh7026/repo-pulse",
    liveUrl: "https://frontend-pink-sigma-52.vercel.app/"
  },
  {
    id: 4,
    title: "Eco Twin AI (Climate Monitoring)",
    category: "Machine Learning / IoT",
    filterCategory: "ai",
    featured: true,
    highlight: "Digital Twin Sensor Streaming & Risk Forecasts",
    desc: "AI-driven environmental digital twin and climate monitoring system utilizing sensor streams and meteorological APIs for anomaly detection, real-time alerting, and disaster risk forecasting.",
    tech: ["JavaScript", "Python", "Climate APIs", "Digital Twin Modeling", "Cloud Triggers"],
    icon: <ShieldAlert className="h-8 w-8 text-teal-400" />,
    gradient: "from-teal-500/20 via-teal-950/40 to-black",
    githubUrl: "https://github.com/vignesh7026/eco-twin-ai-powered-monitoring-environment",
    liveUrl: "https://ecotwin-monitoring.vercel.app/"
  },
  {
    id: 5,
    title: "Venpura Oil Official Website",
    category: "Web Application / Brand",
    filterCategory: "web",
    highlight: "Production E-Commerce & Micro-Interactions",
    desc: "Production brand web platform and showcase for a cold-pressed organic oil business featuring sleek dark aesthetics, interactive micro-interactions, responsive design, and product catalogs.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Responsive Design", "UI/UX"],
    icon: <Droplet className="h-8 w-8 text-amber-400" />,
    gradient: "from-amber-500/20 via-amber-950/40 to-black",
    githubUrl: "https://github.com/vignesh7026/venpura",
    liveUrl: "https://venpura.vercel.app"
  },
  {
    id: 6,
    title: "LeadDesk Mini (CRM Pipeline)",
    category: "Web Application / CRM",
    filterCategory: "web",
    highlight: "Multi-stage Deal Pipelines & Follow-up Triggers",
    desc: "Lightweight customer relationship management & lead capture dashboard for tracking sales pipelines, lead conversions, interaction logs, and automated follow-ups.",
    tech: ["JavaScript", "React.js", "Node.js", "Express", "REST APIs"],
    icon: <Users className="h-8 w-8 text-rose-400" />,
    gradient: "from-rose-500/20 via-rose-950/40 to-black",
    githubUrl: "https://github.com/vignesh7026/leaddesk-mini",
    liveUrl: "https://leaddesk-mini-cblc.onrender.com/"
  },
  {
    id: 7,
    title: "Campus Placement Scheduler",
    category: "Algorithms / Automation",
    filterCategory: "systems",
    highlight: "Slot Conflict Resolution Engine",
    desc: "Automated campus recruitment drive scheduler and conflict resolution engine streamlining interview slot allocations, company schedules, and student eligibility queues.",
    tech: ["Python", "Scheduling Algorithms", "Data Modeling", "Automation Engine"],
    icon: <Calendar className="h-8 w-8 text-indigo-400" />,
    gradient: "from-indigo-500/20 via-indigo-950/40 to-black",
    githubUrl: "https://github.com/vignesh7026/placement-scheduler"
  },
  {
    id: 8,
    title: "Identity Reconciliation Engine",
    category: "Backend / Data Systems",
    filterCategory: "systems",
    highlight: "Graph Clustering & Contact Point Mapping",
    desc: "High-throughput identity reconciliation service that maps multiple contact points across web orders, clustering primary and secondary customer profiles dynamically.",
    tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Entity Matching"],
    icon: <Layers className="h-8 w-8 text-blue-400" />,
    gradient: "from-blue-500/20 via-blue-950/40 to-black",
    githubUrl: "https://github.com/vignesh7026/zamazon-identity-reconciliation"
  },
  {
    id: 9,
    title: "Python Detective Adventure",
    category: "Interactive App / Game",
    filterCategory: "ai",
    highlight: "Branching Mystery Narrative State Engine",
    desc: "Interactive text-adventure branching mystery puzzle game built with Streamlit. Features stateful session tracking, dynamic narrative decision trees, and inventory management.",
    tech: ["Python", "Streamlit", "Session State", "Narrative Trees"],
    icon: <Compass className="h-8 w-8 text-orange-400" />,
    gradient: "from-orange-500/20 via-orange-950/40 to-black",
    githubUrl: "https://github.com/vignesh7026/detective-game"
  }
];

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "Agentic AI & ML" },
  { id: "web", label: "Full Stack Web" },
  { id: "systems", label: "Systems & Algorithms" }
] as const;

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = activeFilter === "all" || p.filterCategory === activeFilter;
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const liveProjectsCount = projects.filter((p) => Boolean(p.liveUrl)).length;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  } as const;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-12">
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1 text-xs font-bold text-green-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Agentic Systems & Software Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Projects & Case Studies
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            A curated showcase of autonomous AI agents, production web platforms, analytics engines, and system architectures built with modern engineering standards.
          </p>
        </div>

        {/* Quick telemetry counter banner */}
        <div className="flex items-center gap-4 bg-neutral-950/80 border border-neutral-850 p-4 rounded-2xl shadow-md">
          <div className="text-center px-2">
            <span className="text-2xl font-extrabold text-green-400 block">{projects.length}</span>
            <span className="text-[11px] text-neutral-400 uppercase font-semibold tracking-wider">Repositories</span>
          </div>
          <div className="h-8 w-px bg-neutral-800" />
          <div className="text-center px-2">
            <span className="text-2xl font-extrabold text-white block">{liveProjectsCount}</span>
            <span className="text-[11px] text-neutral-400 uppercase font-semibold tracking-wider">Live Deployments</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-y border-neutral-900 py-4">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-green-500 text-black shadow-lg shadow-green-500/25"
                  : "bg-neutral-950 border border-neutral-850 text-neutral-400 hover:text-white hover:border-neutral-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search by tech or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-neutral-950 border border-neutral-850 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-green-500/60 focus:ring-1 focus:ring-green-500/40 transition-all"
          />
        </div>
      </div>

      {/* Grid List */}
      <motion.div
        key={`${activeFilter}-${searchQuery}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              className={`group rounded-3xl border ${
                project.featured 
                  ? "border-green-500/40 bg-neutral-950/80 shadow-xl shadow-green-500/5 hover:border-green-400/80" 
                  : "border-neutral-900 bg-neutral-950/50 hover:border-neutral-700"
              } overflow-hidden flex flex-col justify-between transition-all duration-300 relative glow-hover`}
            >
              <div>
                {/* Image Preview Gradient Box */}
                <div className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden border-b border-neutral-900`}>
                  {/* Floating Icon animation */}
                  <div className="relative p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 group-hover:scale-110 group-hover:border-green-500/40 transition-all duration-500 animate-float shadow-2xl">
                    {project.icon}
                  </div>
                  
                  {/* Visual grid overlay */}
                  <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />
                  
                  {/* Category chip */}
                  <span className="absolute left-4 bottom-4 text-[10px] uppercase font-bold tracking-widest bg-black/90 backdrop-blur-md border border-neutral-800 text-neutral-300 px-3 py-1 rounded-full shadow-md">
                    {project.category}
                  </span>

                  {/* Top Badges */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5">
                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1 text-[9px] uppercase font-bold tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    )}
                    {project.featured && (
                      <span className="text-[9px] uppercase font-extrabold tracking-wider bg-green-500/20 text-green-300 border border-green-500/50 px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-sm">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Description Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-semibold text-green-400/90 tracking-tight block">
                    {project.highlight}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Tech tag cloud and Action Links */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold text-neutral-400 bg-black/80 border border-neutral-900 px-2.5 py-0.5 rounded-md group-hover:border-neutral-800 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="border-t border-neutral-900/90 pt-4 flex items-center justify-between gap-3">
                  {/* GitHub Repo Link */}
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>Codebase</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>

                  {/* Live Website Link if available */}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 hover:text-black hover:bg-green-400 bg-green-500/10 border border-green-500/40 px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-sm"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Glowing spot background hover */}
              <div className="absolute inset-0 bg-radial-gradient from-green-500/10 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 rounded-3xl border border-neutral-900 bg-neutral-950/40 p-8">
          <p className="text-neutral-400 text-base">No projects found matching "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveFilter("all");
            }}
            className="mt-4 px-4 py-2 bg-green-500 text-black text-xs font-bold rounded-full cursor-pointer hover:bg-green-400 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
