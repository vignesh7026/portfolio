"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  ArrowUpRight, 
  Activity, 
  Music, 
  ShoppingBag, 
  Server, 
  Droplet, 
  ShieldAlert, 
  Compass,
  FileCode2
} from "lucide-react";
import { GithubIcon, FigmaIcon } from "@/components/BrandIcons";
import Link from "next/link";

// 7 Projects lists
const projects = [
  {
    id: 1,
    title: "Doctor Consulting App (UI/UX)",
    category: "UI/UX Design",
    desc: "Designed end-to-end healthcare user experience including user onboarding, real-time doctor search, appointment booking calendars, and in-app video consultation flows. Evaluated and refined using wireframes and usability testing.",
    tech: ["Figma", "User Research", "Wireframing", "Interactive Prototypes"],
    icon: <Activity className="h-8 w-8 text-pink-500" />,
    gradient: "from-pink-500/10 via-neutral-900 to-black",
    link: "https://figma.com/@vignesh7026", // Figma placeholder
    type: "figma"
  },
  {
    id: 2,
    title: "Android Music Player",
    category: "Mobile Application",
    desc: "Built a native Android music player with background audio playback capabilities utilizing the MediaPlayer API. Features custom song list sorting using RecyclerView and structured runtime media storage permissions.",
    tech: ["Java", "Android Studio", "MediaPlayer API", "RecyclerView", "XML"],
    icon: <Music className="h-8 w-8 text-blue-500" />,
    gradient: "from-blue-500/10 via-neutral-900 to-black",
    link: "https://github.com/vignesh7026/android-music-player",
    type: "github"
  },
  {
    id: 3,
    title: "Full Stack E-Commerce Platform",
    category: "Web Application",
    desc: "Developed a robust e-commerce RESTful backend. Created normal form database schema mapping for products, carts, and user profiles. Integrated searching, pagination, and multi-tier category filters.",
    tech: ["Node.js", "Express.js", "MySQL", "REST APIs", "Auth"],
    icon: <ShoppingBag className="h-8 w-8 text-green-500" />,
    gradient: "from-green-500/10 via-neutral-900 to-black",
    link: "https://github.com/vignesh7026",
    type: "github"
  },
  {
    id: 4,
    title: "Student & Inventory Management System",
    category: "Desktop Application",
    desc: "Designed a secure CRUD-based inventory software using MVC architectural pattern. Supports batch entry inserts, parameterized query security, and multi-relational SQL Server views.",
    tech: ["C#", ".NET", "SQL Server", "MVC Architecture", "Entity Framework"],
    icon: <Server className="h-8 w-8 text-purple-500" />,
    gradient: "from-purple-500/10 via-neutral-900 to-black",
    link: "https://github.com/vignesh7026",
    type: "github"
  },
  {
    id: 5,
    title: "Venpura Oil Website",
    category: "Web Frontend",
    desc: "Created a modern responsive web presentation for Venpura Oil business. Designed custom hover micro-interactions, responsive grids, and clean cross-browser flex layouts.",
    tech: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    icon: <Droplet className="h-8 w-8 text-yellow-500" />,
    gradient: "from-yellow-500/10 via-neutral-900 to-black",
    link: "https://github.com/vignesh7026",
    type: "globe"
  },
  {
    id: 6,
    title: "Eco Sentinel AI",
    category: "Machine Learning / Cloud",
    desc: "Constructed a real-time climate forecasting disaster predictor utilizing multiple meteorological climate APIs. Integrates a lightweight alert chatbot using cloud database triggers.",
    tech: ["Python", "Climate APIs", "Cloud Databases", "Chatbot Alerting"],
    icon: <ShieldAlert className="h-8 w-8 text-emerald-500" />,
    gradient: "from-emerald-500/10 via-neutral-900 to-black",
    link: "https://github.com/vignesh7026",
    type: "github"
  },
  {
    id: 7,
    title: "Python Detective Game",
    category: "Interactive Application",
    desc: "Developed a text-adventure branching mystery puzzle game in Streamlit. Configured stateful tracking using Streamlit Session State triggers, enabling choices and inventories.",
    tech: ["Python", "Streamlit", "Session State Tracking", "Narrative Mapping"],
    icon: <Compass className="h-8 w-8 text-amber-500" />,
    gradient: "from-amber-500/10 via-neutral-900 to-black",
    link: "https://github.com/vignesh7026",
    type: "github"
  }
];

export default function Work() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  } as const;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-12">
      {/* Intro Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold tracking-widest text-green-500 uppercase">
          Work Showcase
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Selected Projects & Case Studies
        </h1>
        <p className="text-neutral-400 text-lg leading-relaxed">
          Explore a selection of my coding applications, systems architectures, and UI designs. Projects cover web technologies, native mobile development, and data integrations.
        </p>
      </div>

      {/* Grid List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group rounded-3xl border border-neutral-900 bg-neutral-950/40 overflow-hidden flex flex-col justify-between hover:border-neutral-800 transition-all duration-300 relative glow-hover"
          >
            <div>
              {/* Image Preview Gradient Box */}
              <div className={`relative h-44 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden border-b border-neutral-900`}>
                {/* Floating Icon animation */}
                <div className="relative p-5 rounded-2xl bg-neutral-950/60 border border-neutral-900 group-hover:scale-110 transition-transform duration-500 animate-float">
                  {project.icon}
                </div>
                
                {/* Visual grid overlay */}
                <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />
                
                {/* Category chip */}
                <span className="absolute left-4 bottom-4 text-[10px] uppercase font-bold tracking-widest bg-black border border-neutral-850 text-neutral-400 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Description Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-green-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed line-clamp-4">
                  {project.desc}
                </p>
              </div>
            </div>

            {/* Tech tag cloud and View Link */}
            <div className="p-6 pt-0 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-bold text-neutral-500 bg-black/60 border border-neutral-900 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="border-t border-neutral-900 pt-4 flex items-center justify-end">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-green-500 transition-colors"
                >
                  <span>
                    {project.type === "figma" ? "View Prototype" : project.type === "globe" ? "View Website" : "View Codebase"}
                  </span>
                  {project.type === "figma" ? (
                    <FigmaIcon className="h-4 w-4 text-neutral-400 group-hover/link:text-green-500 transition-colors" />
                  ) : project.type === "globe" ? (
                    <Globe className="h-4 w-4 text-neutral-400 group-hover/link:text-green-500 transition-colors" />
                  ) : (
                    <GithubIcon className="h-4 w-4 text-neutral-400 group-hover/link:text-green-500 transition-colors" />
                  )}
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Glowing spot background hover */}
            <div className="absolute inset-0 bg-radial-gradient from-green-500/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
