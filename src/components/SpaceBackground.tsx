"use client";

import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Array<{ x: number; y: number; size: number; speed: number; opacity: number }> = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.15 + 0.05,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      ctx.fillStyle = "#ffffff";
      stars.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move stars slowly downwards to match grid forward speed
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none bg-black overflow-hidden select-none">
      {/* Stars Starfield Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full opacity-60" />

      {/* 3D Perspective Grid Layer */}
      <div 
        className="absolute inset-0 block h-full w-full"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <div 
          className="absolute w-[160rem] aspect-square origin-center animate-grid-scroll"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotateX(60deg) rotateY(0deg) rotateZ(0deg) scale(1.8)",
            transformStyle: "preserve-3d",
            backgroundImage: `repeating-linear-gradient(
              to right,
              rgba(156, 163, 175, 0.09) 0px,
              rgba(156, 163, 175, 0.09) 1px,
              transparent 1px,
              transparent 60px
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(156, 163, 175, 0.09) 0px,
              rgba(156, 163, 175, 0.09) 1px,
              transparent 1px,
              transparent 60px
            )`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Soft radial fade to background at the horizon */}
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "radial-gradient(circle at center, transparent 20%, #000000 80%)",
          }}
        />
      </div>
    </div>
  );
}
