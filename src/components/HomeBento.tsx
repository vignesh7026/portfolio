"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone } from "lucide-react";
import { GithubIcon, FigmaIcon } from "@/components/BrandIcons";

// Tech stack items with custom colored dots
const techStackRow1 = [
  { name: "React.js", color: "bg-cyan-400" },
  { name: "Next.js", color: "bg-white" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "Express.js", color: "bg-gray-400" },
  { name: "Tailwind CSS", color: "bg-sky-400" },
  { name: "Vite", color: "bg-purple-400" },
  { name: "HTML5/CSS3", color: "bg-orange-500" },
  { name: "JavaScript", color: "bg-yellow-400" },
];

const techStackRow2 = [
  { name: "MySQL", color: "bg-blue-400" },
  { name: "PostgreSQL", color: "bg-indigo-400" },
  { name: "SQL Server", color: "bg-red-500" },
  { name: "Java", color: "bg-orange-600" },
  { name: "Python", color: "bg-yellow-500" },
  { name: "C#", color: "bg-violet-500" },
  { name: "Kotlin", color: "bg-purple-500" },
];

const techStackRow3 = [
  { name: "Android Studio", color: "bg-green-400" },
  { name: "Figma", color: "bg-pink-500" },
  { name: "Git", color: "bg-orange-400" },
  { name: "GitHub", color: "bg-white" },
  { name: "REST APIs", color: "bg-emerald-400" },
  { name: "AWS Basics", color: "bg-yellow-600" },
  { name: "Responsive Design", color: "bg-teal-400" },
];

// Tools with hover effects
const tools = [
  {
    name: "VS Code",
    desc: "Coding Environment",
    color: "group-hover:border-blue-500 group-hover:bg-blue-500/5",
    icon: (
      <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.984 6.386a.601.601 0 0 0-.214-.383L20.17 3.32a.602.602 0 0 0-.756.038l-7.79 6.223-3.64-2.73a.603.603 0 0 0-.726.006l-6.85 5.138a.602.602 0 0 0-.012.966l6.85 5.138a.602.602 0 0 0 .725.006l3.642-2.73 7.79 6.222a.602.602 0 0 0 .755.038l3.6-2.684a.602.602 0 0 0 .215-.383V6.386zM15.42 12l-5.61-4.207L16 3.966v8.034zm0 0v8.034l-6.19-3.827L15.42 12z" />
      </svg>
    )
  },
  {
    name: "GitHub",
    desc: "Version Control",
    color: "group-hover:border-white group-hover:bg-white/5",
    icon: <GithubIcon className="h-6 w-6 text-white" />
  },
  {
    name: "Figma",
    desc: "UI/UX Design",
    color: "group-hover:border-pink-500 group-hover:bg-pink-500/5",
    icon: <FigmaIcon className="h-6 w-6 text-pink-500" />
  },
  {
    name: "Android Studio",
    desc: "Mobile Apps",
    color: "group-hover:border-green-500 group-hover:bg-green-500/5",
    icon: <Smartphone className="h-6 w-6 text-green-500" />
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Aravind Swamy",
    handle: "@aravind_tech",
    avatar: "from-green-400 to-emerald-600",
    quote: "Working with Vigneshwaran was smooth — clean code, fast turnaround, and an impressive attention to UI details. Highly recommended!"
  },
  {
    name: "Sanjana Roy",
    handle: "@sanjana_designs",
    avatar: "from-blue-400 to-indigo-600",
    quote: "Vignesh converted our Figma wireframes into a fully responsive frontend in record time. His knowledge of mobile layouts is solid."
  },
  {
    name: "Karthik P.",
    handle: "@karthik_codes",
    avatar: "from-yellow-400 to-orange-600",
    quote: "Exceptional problem-solving skills! He debugged and optimized our MySQL database queries, improving performance by nearly 40%."
  }
];

// Capabilities tag cloud
const capabilities = [
  { name: "Websites", size: "text-lg", opacity: "opacity-100", weight: "font-bold" },
  { name: "Landing Pages", size: "text-base", opacity: "opacity-90", weight: "font-semibold" },
  { name: "Portfolios", size: "text-sm", opacity: "opacity-80", weight: "font-medium" },
  { name: "Admin Panels", size: "text-base", opacity: "opacity-95", weight: "font-semibold" },
  { name: "Full Stack Apps", size: "text-lg", opacity: "opacity-100", weight: "font-bold", accent: true },
  { name: "REST APIs", size: "text-base", opacity: "opacity-90", weight: "font-semibold" },
  { name: "UI/UX Design", size: "text-lg", opacity: "opacity-100", weight: "font-bold", accent: true },
  { name: "Optimization", size: "text-sm", opacity: "opacity-75", weight: "font-medium" },
  { name: "SEO Ready", size: "text-xs", opacity: "opacity-70", weight: "font-normal" },
  { name: "Responsive Design", size: "text-base", opacity: "opacity-95", weight: "font-semibold" },
  { name: "Bug Fixes", size: "text-sm", opacity: "opacity-80", weight: "font-medium" },
  { name: "Feature Additions", size: "text-xs", opacity: "opacity-70", weight: "font-normal" },
  { name: "Long-Term Support", size: "text-sm", opacity: "opacity-85", weight: "font-medium" }
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

    // Load the texture image
    const img = new Image();
    img.src = "/earth-map.jpg";

    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");

    img.onload = () => {
      // Scale down texture size for performance
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

      // Rebuild the sphere LUT (Lookup Table) on resize
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

      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Draw background glow
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

        // Loop through all pixels in the lookup table
        for (let i = 0; i < spherePixels.length; i++) {
          const pixel = spherePixels[i];
          const lon = pixel.lon_base - rotation;
          
          // Normalize lon to [0, 2pi]
          let normLon = lon;
          while (normLon < 0) normLon += Math.PI * 2;
          while (normLon >= Math.PI * 2) normLon -= Math.PI * 2;

          const tx = Math.floor((normLon / (Math.PI * 2)) * textureWidth) % textureWidth;
          const ty = Math.floor(((pixel.lat + Math.PI / 2) / Math.PI) * textureHeight) % textureHeight;

          const texIdx = (ty * textureWidth + tx) * 4;
          const texR = textureData[texIdx];
          const texG = textureData[texIdx + 1];
          const texB = textureData[texIdx + 2];

          // 3D Lighting & shading (Lambertian diffuse shading based on dz)
          const shading = 0.35 + 0.65 * pixel.dz;

          // Rim glow effect (green tint around the edges where dz approaches 0)
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

        // Overlay a semi-transparent sphere gradient for extra depth
        const sphereGrad = ctx.createRadialGradient(cx - radius / 3, cy - radius / 3, radius * 0.1, cx, cy, radius);
        sphereGrad.addColorStop(0, "rgba(34, 197, 94, 0.05)");
        sphereGrad.addColorStop(0.7, "rgba(0, 0, 0, 0.2)");
        sphereGrad.addColorStop(1, "rgba(0, 0, 0, 0.8)");
        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw glowing outline
        ctx.strokeStyle = "rgba(34, 197, 94, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        // Fallback wireframe globe if texture hasn't loaded yet
        ctx.strokeStyle = "rgba(34, 197, 94, 0.25)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Latitudes
        const latitudeOffsets = [-0.7, -0.4, -0.1, 0.2, 0.5, 0.8];
        latitudeOffsets.forEach((latOffset) => {
          const r = radius * Math.sqrt(1 - latOffset * latOffset);
          const y = cy + radius * latOffset;
          ctx.beginPath();
          ctx.ellipse(cx, y, r, r * 0.25, 0, 0, Math.PI * 2);
          ctx.stroke();
        });

        // Longitudes
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

  // Auto cycle testimonials
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
          className="md:col-span-2 rounded-3xl border border-neutral-900 bg-neutral-950/60 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-neutral-800 transition-all duration-300"
        >
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-green-500 uppercase">
              Skills & Tech
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white mt-2 mb-6">
              Tech Stack
            </h3>
          </div>

          {/* Marquee Rows */}
          <div className="relative flex flex-col gap-4 py-4 overflow-hidden select-none pause-marquee">
            {/* Row 1: Left scrolling */}
            <div className="flex w-max gap-3 animate-marquee">
              {[...techStackRow1, ...techStackRow1].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-neutral-900 bg-black px-4 py-2 text-sm font-medium text-neutral-300 hover:border-neutral-800 hover:text-white transition-colors"
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
                  className="flex items-center gap-2 rounded-full border border-neutral-900 bg-black px-4 py-2 text-sm font-medium text-neutral-300 hover:border-neutral-800 hover:text-white transition-colors"
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
                  className="flex items-center gap-2 rounded-full border border-neutral-900 bg-black px-4 py-2 text-sm font-medium text-neutral-300 hover:border-neutral-800 hover:text-white transition-colors"
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
          className="rounded-3xl border border-neutral-900 bg-neutral-950/60 p-8 flex flex-col justify-between h-full overflow-hidden relative group hover:border-neutral-800 transition-all duration-300 text-center"
        >
          {/* 4 Square Rounded Icons at the Top */}
          <div className="flex items-center gap-4 my-6 justify-center w-full">
            {/* Tile 1: Raycast */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 aspect-square rounded-2xl border border-neutral-900 bg-[#161210] hover:bg-[#201814] flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-[#c88d72]/40 shadow-sm cursor-pointer group/tile">
              <svg className="h-7 w-7 text-[#c88d72] transition-transform duration-300 group-hover/tile:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1zM3 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1zM5.636 5.636a1 1 0 0 1 1.414 0l2.828 2.828a1 1 0 1 1-1.414 1.414L5.636 7.05a1 1 0 0 1 0-1.414zm9.9 9.9a1 1 0 0 1 1.414 0l2.828 2.828a1 1 0 1 1-1.414 1.414l-2.828-2.828a1 1 0 0 1 0-1.414zM8.464 15.536a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 1 1-1.414-1.414l2.828-2.828a1 1 0 0 1 1.414 0zm9.9-9.9a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 1 1-1.414-1.414l2.828-2.828a1 1 0 0 1 1.414 0z" />
              </svg>
            </div>

            {/* Tile 2: ChatGPT */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 aspect-square rounded-2xl border border-neutral-900 bg-white hover:bg-neutral-100 flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-white shadow-sm cursor-pointer group/tile">
              <svg className="h-7 w-7 text-black transition-transform duration-300 group-hover/tile:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.3,10.1a5.3,5.3,0,0,0-1.2-3.2,5.2,5.2,0,0,0-3.3-1.9,5.7,5.7,0,0,0-1-.1A5.3,5.3,0,0,0,12,6.5a5.3,5.3,0,0,0-3.8-1.6A5.2,5.2,0,0,0,4.9,6.8a5.3,5.3,0,0,0-1.2,3.2,5.2,5.2,0,0,0,1.9,3.3,5.7,5.7,0,0,0,.1,1,5.3,5.3,0,0,0,1.6,3.8,5.3,5.3,0,0,0,1.6,3.8,5.2,5.2,0,0,0,3.3,1.9h1a5.3,5.3,0,0,0,3.8-1.6,5.3,5.3,0,0,0,3.8,1.6,5.2,5.2,0,0,0,3.3-1.9,5.3,5.3,0,0,0,1.2-3.2,5.2,5.2,0,0,0-1.9-3.3,5.7,5.7,0,0,0-.1-1A5.3,5.3,0,0,0,21.3,10.1ZM12,18a3.3,3.3,0,0,1-2.3-.9l3.3-1.9,3.3,1.9A3.3,3.3,0,0,1,12,18Z" />
              </svg>
            </div>

            {/* Tile 3: Cursor */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 aspect-square rounded-2xl border border-neutral-900 bg-[#07090e] hover:bg-[#0c0f17] flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-blue-500/20 shadow-sm cursor-pointer group/tile">
              <svg className="h-7 w-7 transition-transform duration-300 group-hover/tile:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10c2.8 0 5.3-1.1 7.1-3l-2.1-2.1a7 7 0 0 1-5 2.1 7 7 0 0 1-7-7 7 7 0 0 1 7-7 7 7 0 0 1 5 2.1l2.1-2.1A10 10 0 0 0 12 2z" fill="url(#cursorGradient)" />
                <path d="M19 5l-7 7h5v5l7-7h-5V5z" fill="url(#cursorGradient)" />
              </svg>
            </div>

            {/* Tile 4: Wireframe Box */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 aspect-square rounded-2xl border border-neutral-900 bg-[#0d0d0f] hover:bg-[#141417] flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-neutral-700 shadow-sm cursor-pointer group/tile">
              <svg className="h-7 w-7 text-white transition-transform duration-300 group-hover/tile:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 7v10" />
                <path d="M12 12v10" />
                <path d="M22 7v10" />
              </svg>
            </div>
          </div>

          {/* Texts at the Bottom */}
          <div className="mt-auto pt-2">
            <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase block">
              Uses
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              Check out my favorite tools
            </h3>
          </div>
        </motion.div>

        {/* Card 3: Timezone Flexible / Globe Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl border border-neutral-900 bg-neutral-950/60 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-neutral-800 transition-all duration-300"
        >
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              Flexible with Timezones
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white mt-2">
              Building globally
            </h3>
          </div>

          <div className="flex items-center justify-center my-4 relative">
            <SpinningGlobe />
          </div>

          <p className="text-neutral-400 text-xs tracking-tight relative z-10 mt-2">
            Based in Bengaluru (GMT+5:30), but highly adaptive to sync and coordinate with teams across US, Europe, and Asia.
          </p>
        </motion.div>

        {/* Card 4: Testimonials Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl border border-neutral-900 bg-neutral-950/60 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-neutral-800 transition-all duration-300"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-green-500 uppercase">
              Testimonials
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white mt-2">
              What others say
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
                    className="absolute inset-x-0 p-5 rounded-2xl border border-neutral-900 bg-black/80 flex flex-col justify-between gap-4 h-full shadow-lg shadow-black/60 glow-hover transition-all cursor-pointer"
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
          className="rounded-3xl border border-neutral-900 bg-neutral-950/60 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-neutral-800 transition-all duration-300"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              Capabilities
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white mt-2 mb-4">
              What I do
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
                className={`inline-block px-3 py-1.5 rounded-full border border-neutral-900 bg-black/60 ${cap.size} ${cap.weight} ${
                  cap.accent 
                    ? "text-green-500 border-green-500/10 hover:border-green-500/30 hover:glow-green" 
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
