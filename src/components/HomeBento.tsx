"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Bot, Cpu, Sparkles, Terminal, Code2 } from "lucide-react";
import { GithubIcon, FigmaIcon } from "@/components/BrandIcons";

// Tech stack items with custom colored dots
const techStackRow1 = [
  { name: "Agentic AI & LLMs", color: "bg-green-400" },
  { name: "Next.js 15+", color: "bg-white" },
  { name: "TypeScript", color: "bg-blue-400" },
  { name: "Python", color: "bg-yellow-400" },
  { name: "React.js", color: "bg-cyan-400" },
  { name: "Node.js", color: "bg-emerald-500" },
  { name: "Tailwind CSS", color: "bg-sky-400" },
  { name: "Razorpay APIs", color: "bg-blue-500" },
];

const techStackRow2 = [
  { name: "PostgreSQL", color: "bg-indigo-400" },
  { name: "MySQL", color: "bg-blue-400" },
  { name: "Autonomous Agents", color: "bg-emerald-400" },
  { name: "FastAPI / Express", color: "bg-teal-400" },
  { name: "Framer Motion", color: "bg-pink-400" },
  { name: "Java", color: "bg-orange-500" },
  { name: "REST APIs", color: "bg-emerald-300" },
];

const techStackRow3 = [
  { name: "Git / GitHub", color: "bg-white" },
  { name: "Figma UI/UX", color: "bg-pink-500" },
  { name: "Streamlit", color: "bg-red-400" },
  { name: "Cloud Triggers", color: "bg-yellow-500" },
  { name: "Android Studio", color: "bg-green-400" },
  { name: "Data Modeling", color: "bg-purple-400" },
  { name: "Responsive Systems", color: "bg-teal-400" },
];

// Tools with hover effects
const tools = [
  {
    name: "Cursor / AI",
    desc: "Agentic Coding",
    color: "group-hover:border-blue-500 group-hover:bg-blue-500/5",
    icon: (
      <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10c2.8 0 5.3-1.1 7.1-3l-2.1-2.1a7 7 0 0 1-5 2.1 7 7 0 0 1-7-7 7 7 0 0 1 7-7 7 7 0 0 1 5 2.1l2.1-2.1A10 10 0 0 0 12 2z" />
        <path d="M19 5l-7 7h5v5l7-7h-5V5z" />
      </svg>
    )
  },
  {
    name: "GitHub",
    desc: "CI/CD & Source",
    color: "group-hover:border-white group-hover:bg-white/5",
    icon: <GithubIcon className="h-6 w-6 text-white" />
  },
  {
    name: "Figma",
    desc: "Design Systems",
    color: "group-hover:border-pink-500 group-hover:bg-pink-500/5",
    icon: <FigmaIcon className="h-6 w-6 text-pink-500" />
  },
  {
    name: "VS Code",
    desc: "Core Dev",
    color: "group-hover:border-emerald-500 group-hover:bg-emerald-500/5",
    icon: (
      <svg className="h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.984 6.386a.601.601 0 0 0-.214-.383L20.17 3.32a.602.602 0 0 0-.756.038l-7.79 6.223-3.64-2.73a.603.603 0 0 0-.726.006l-6.85 5.138a.602.602 0 0 0-.012.966l6.85 5.138a.602.602 0 0 0 .725.006l3.642-2.73 7.79 6.222a.602.602 0 0 0 .755.038l3.6-2.684a.602.602 0 0 0 .215-.383V6.386zM15.42 12l-5.61-4.207L16 3.966v8.034zm0 0v8.034l-6.19-3.827L15.42 12z" />
      </svg>
    )
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Aravind Swamy",
    handle: "@aravind_tech",
    avatar: "from-green-400 to-emerald-600",
    quote: "Working with Vigneshwaran was smooth — clean code, fast turnaround, and an impressive attention to UI details and autonomous workflows. Highly recommended!"
  },
  {
    name: "Sanjana Roy",
    handle: "@sanjana_designs",
    avatar: "from-blue-400 to-indigo-600",
    quote: "Vignesh converted our Figma wireframes into a fully responsive frontend in record time. His knowledge of AI integrations and UI layouts is exceptional."
  },
  {
    name: "Karthik P.",
    handle: "@karthik_codes",
    avatar: "from-yellow-400 to-orange-600",
    quote: "Exceptional problem-solving skills! He built full-stack solutions and optimized database queries with incredible architectural clarity."
  }
];

// Capabilities tag cloud
const capabilities = [
  { name: "Agentic AI Systems", size: "text-lg", opacity: "opacity-100", weight: "font-bold", accent: true },
  { name: "Autonomous Agents", size: "text-base", opacity: "opacity-100", weight: "font-bold", accent: true },
  { name: "Full Stack Apps", size: "text-lg", opacity: "opacity-100", weight: "font-bold", accent: true },
  { name: "Next.js / React", size: "text-base", opacity: "opacity-95", weight: "font-semibold" },
  { name: "REST & Graph APIs", size: "text-base", opacity: "opacity-90", weight: "font-semibold" },
  { name: "UI/UX Design", size: "text-base", opacity: "opacity-95", weight: "font-semibold" },
  { name: "Database Engineering", size: "text-sm", opacity: "opacity-85", weight: "font-medium" },
  { name: "Payment Integrations", size: "text-sm", opacity: "opacity-90", weight: "font-medium" },
  { name: "Real-time Telemetry", size: "text-xs", opacity: "opacity-80", weight: "font-normal" },
  { name: "Production Optimization", size: "text-sm", opacity: "opacity-85", weight: "font-medium" }
];

// Custom Globe Component using Canvas
function SpinningGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;
    let textureLoaded = false;
    let textureWidth = 0;
    let textureHeight = 0;
    let textureData: Uint8ClampedArray | null = null;
    let spherePixels: Array<{ canvasX: number; canvasY: number; lat: number; lon_base: number; dz: number }> = [];

    const img = new Image();
    img.src = "/earth-map.jpg";

    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");

    img.onload = () => {
      textureWidth = 360;
      textureHeight = 180;
      offscreenCanvas.width = textureWidth;
      offscreenCanvas.height = textureHeight;
      if (offscreenCtx) {
        offscreenCtx.drawImage(img, 0, 0, textureWidth, textureHeight);
        textureData = offscreenCtx.getImageData(0, 0, textureWidth, textureHeight).data;
        textureLoaded = true;
      }
    };

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const w = (rect?.width || 250) * window.devicePixelRatio;
      const h = (rect?.width || 250) * window.devicePixelRatio;
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      spherePixels = [];
      const width = w;
      const height = h;
      const radius = Math.min(width, height) * 0.42;
      const cx = width / 2;
      const cy = height / 2;

      for (let y = Math.floor(cy - radius); y <= Math.ceil(cy + radius); y++) {
        for (let x = Math.floor(cx - radius); x <= Math.ceil(cx + radius); x++) {
          const dx = (x - cx) / radius;
          const dy = (y - cy) / radius;
          const distSq = dx * dx + dy * dy;
          if (distSq <= 1.0) {
            const dz = Math.sqrt(1.0 - distSq);
            const lat = Math.asin(dy);
            const lon_base = Math.atan2(dx, dz);
            spherePixels.push({
              canvasX: x,
              canvasY: y,
              lat,
              lon_base,
              dz,
            });
          }
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawGlobe = () => {
      const width = canvas.width;
      const height = canvas.height;
      const radius = Math.min(width, height) * 0.42;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.85, cx, cy, radius * 1.25);
      glowGrad.addColorStop(0, "rgba(34, 197, 94, 0.08)");
      glowGrad.addColorStop(1, "rgba(34, 197, 94, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      rotation += 0.005;

      if (textureLoaded && textureData && spherePixels.length > 0) {
        const frameData = ctx.createImageData(width, height);
        const data = frameData.data;

        for (let i = 0; i < spherePixels.length; i++) {
          const pixel = spherePixels[i];
          const lon = pixel.lon_base - rotation;
          
          let normLon = lon;
          while (normLon < 0) normLon += Math.PI * 2;
          while (normLon >= Math.PI * 2) normLon -= Math.PI * 2;

          const tx = Math.floor((normLon / (Math.PI * 2)) * textureWidth) % textureWidth;
          const ty = Math.floor(((pixel.lat + Math.PI / 2) / Math.PI) * textureHeight) % textureHeight;

          const texIdx = (ty * textureWidth + tx) * 4;
          const texR = textureData[texIdx];
          const texG = textureData[texIdx + 1];
          const texB = textureData[texIdx + 2];

          const shading = 0.35 + 0.65 * pixel.dz;
          const rim = Math.pow(1.0 - pixel.dz, 3);

          const r = Math.min(255, Math.round(texR * shading));
          const g = Math.min(255, Math.round(texG * shading + rim * 45));
          const b = Math.min(255, Math.round(texB * shading));

          const canvasIdx = (pixel.canvasY * width + pixel.canvasX) * 4;
          data[canvasIdx] = r;
          data[canvasIdx + 1] = g;
          data[canvasIdx + 2] = b;
          data[canvasIdx + 3] = 255;
        }

        ctx.putImageData(frameData, 0, 0);

        const sphereGrad = ctx.createRadialGradient(cx - radius / 3, cy - radius / 3, radius * 0.1, cx, cy, radius);
        sphereGrad.addColorStop(0, "rgba(34, 197, 94, 0.05)");
        sphereGrad.addColorStop(0.7, "rgba(0, 0, 0, 0.2)");
        sphereGrad.addColorStop(1, "rgba(0, 0, 0, 0.8)");
        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(34, 197, 94, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.strokeStyle = "rgba(34, 197, 94, 0.25)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();

        const latitudeOffsets = [-0.7, -0.4, -0.1, 0.2, 0.5, 0.8];
        latitudeOffsets.forEach((latOffset) => {
          const r = radius * Math.sqrt(1 - latOffset * latOffset);
          const y = cy + radius * latOffset;
          ctx.beginPath();
          ctx.ellipse(cx, y, r, r * 0.25, 0, 0, Math.PI * 2);
          ctx.stroke();
        });

        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3 + rotation;
          const xOffset = Math.sin(angle) * radius;
          if (Math.cos(angle) > 0) {
            ctx.beginPath();
            ctx.ellipse(cx, cy, Math.abs(xOffset), radius, 0, -Math.PI / 2, Math.PI / 2);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[240px] mx-auto flex items-center justify-center">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default function HomeBento() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  return (
    <section id="bento-grid" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 diagonal-grid">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Tech Stack Marquee Card (colspan 2 in desktop) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-2 rounded-3xl border border-neutral-900 bg-neutral-950/70 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-neutral-800 transition-all duration-300"
        >
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest text-green-500 uppercase flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Engineering Arsenal
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mt-1 mb-4">
                Tech Stack & Autonomous Tools
              </h3>
            </div>
          </div>

          {/* Marquee Rows */}
          <div className="relative flex flex-col gap-4 py-4 overflow-hidden select-none pause-marquee">
            {/* Row 1: Left scrolling */}
            <div className="flex w-max gap-3 animate-marquee">
              {[...techStackRow1, ...techStackRow1].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-neutral-850 bg-black/90 px-4 py-2 text-sm font-medium text-neutral-300 hover:border-green-500/40 hover:text-white transition-colors"
                >
                  <span className={`h-2 w-2 rounded-full ${tech.color}`} />
                  {tech.name}
                </div>
              ))}
            </div>

            {/* Row 2: Right scrolling */}
            <div className="flex w-max gap-3 animate-marquee-reverse">
              {[...techStackRow2, ...techStackRow2].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-neutral-850 bg-black/90 px-4 py-2 text-sm font-medium text-neutral-300 hover:border-green-500/40 hover:text-white transition-colors"
                >
                  <span className={`h-2 w-2 rounded-full ${tech.color}`} />
                  {tech.name}
                </div>
              ))}
            </div>

            {/* Row 3: Left scrolling */}
            <div className="flex w-max gap-3 animate-marquee">
              {[...techStackRow3, ...techStackRow3].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-neutral-850 bg-black/90 px-4 py-2 text-sm font-medium text-neutral-300 hover:border-green-500/40 hover:text-white transition-colors"
                >
                  <span className={`h-2 w-2 rounded-full ${tech.color}`} />
                  {tech.name}
                </div>
              ))}
            </div>

            {/* Gradient masks on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10" />
          </div>
          
          <div className="absolute inset-0 bg-radial-gradient from-green-500/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Card 2: Uses Tools Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl border border-neutral-900 bg-neutral-950/70 p-8 flex flex-col justify-between h-full overflow-hidden relative group hover:border-neutral-800 transition-all duration-300 text-center"
        >
          {/* 4 Square Rounded Icons at the Top */}
          <div className="flex items-center gap-4 my-6 justify-center w-full">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="w-14 h-14 sm:w-16 sm:h-16 aspect-square rounded-2xl border border-neutral-900 bg-[#0c0d10] hover:bg-[#15161c] flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-green-500/40 shadow-sm cursor-pointer group/tile"
                title={tool.name}
              >
                {tool.icon}
              </div>
            ))}
          </div>

          {/* Texts at the Bottom */}
          <div className="mt-auto pt-2">
            <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase block">
              Workflow & Stack
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              AI-Augmented Dev Tooling
            </h3>
          </div>
        </motion.div>

        {/* Card 3: Timezone Flexible / Globe Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl border border-neutral-900 bg-neutral-950/70 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-neutral-800 transition-all duration-300"
        >
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              Global Collaboration
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white mt-2">
              Building Worldwide
            </h3>
          </div>

          <div className="flex items-center justify-center my-4 relative">
            <SpinningGlobe />
          </div>

          <p className="text-neutral-400 text-xs tracking-tight relative z-10 mt-2">
            Based in Bengaluru (GMT+5:30), collaborating seamlessly with teams across US, Europe, and Asia.
          </p>
        </motion.div>

        {/* Card 4: Testimonials Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl border border-neutral-900 bg-neutral-950/70 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-neutral-800 transition-all duration-300"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-green-500 uppercase">
              Feedback & Impact
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white mt-2">
              What collaborators say
            </h3>
          </div>

          {/* Overlapping Slider Deck */}
          <div className="relative h-48 my-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {testimonials.map((t, idx) => {
                if (idx !== activeTestimonial) return null;
                return (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-x-0 p-5 rounded-2xl border border-neutral-900 bg-black/90 flex flex-col justify-between gap-4 h-full shadow-lg shadow-black/80 glow-hover transition-all cursor-pointer"
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  >
                    <p className="text-neutral-300 text-xs italic leading-relaxed line-clamp-4">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full bg-gradient-to-tr ${t.avatar}`} />
                      <div>
                        <h4 className="text-xs font-bold text-white">{t.name}</h4>
                        <span className="text-[10px] text-neutral-500">{t.handle}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 justify-center mt-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeTestimonial ? "w-4 bg-green-500" : "w-1.5 bg-neutral-800"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Card 5: Capabilities Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl border border-neutral-900 bg-neutral-950/70 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-neutral-800 transition-all duration-300"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              Core Capabilities
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white mt-2 mb-4">
              What I Build
            </h3>
          </div>

          {/* Cloud Tag list */}
          <div className="flex flex-wrap gap-2 my-2 content-center items-center">
            {capabilities.map((cap, idx) => (
              <motion.span
                key={cap.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.3 }}
                className={`inline-block px-3 py-1.5 rounded-full border border-neutral-900 bg-black/80 ${cap.size} ${cap.weight} ${
                  cap.accent 
                    ? "text-green-400 border-green-500/20 hover:border-green-500/50 hover:glow-green" 
                    : "text-neutral-400 hover:text-white"
                } transition-all duration-200 cursor-default`}
              >
                {cap.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
