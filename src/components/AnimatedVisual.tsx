import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const AnimatedVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 500;
    canvas.height = 500;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;

      // Clear canvas
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Center
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw animated orbs
      const drawOrb = (
        x: number,
        y: number,
        radius: number,
        color: string,
        timeOffset: number
      ) => {
        const scale = 1 + Math.sin(time + timeOffset) * 0.3;
        const opacity = 0.3 + Math.cos(time + timeOffset) * 0.2;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * scale);
        gradient.addColorStop(0, `${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")}`);
        gradient.addColorStop(0.5, `${color}${Math.round(opacity * 100).toString(16).padStart(2, "0")}`);
        gradient.addColorStop(1, `${color}00`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * scale, 0, Math.PI * 2);
        ctx.fill();
      };

      // Draw orbits
      ctx.strokeStyle = "rgba(20, 184, 136, 0.1)";
      ctx.lineWidth = 1;
      
      // Orbit 1
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      ctx.stroke();

      // Orbit 2
      ctx.beginPath();
      ctx.arc(centerX, centerY, 140, 0, Math.PI * 2);
      ctx.stroke();

      // Orbit 3
      ctx.beginPath();
      ctx.arc(centerX, centerY, 180, 0, Math.PI * 2);
      ctx.stroke();

      // Moving particles on orbits
      const drawParticle = (distance: number, speed: number, color: string) => {
        const angle = time * speed;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      };

      drawParticle(80, 2, "#14b8a6");
      drawParticle(140, -1.5, "#eab308");
      drawParticle(180, 1.2, "#ef4444");

      // Central orbs
      drawOrb(centerX, centerY, 40, "#14b8a6", 0);
      drawOrb(centerX - 60, centerY - 40, 30, "#eab308", Math.PI / 2);
      drawOrb(centerX + 70, centerY + 50, 25, "#ef4444", Math.PI);

      // Draw connecting lines
      ctx.strokeStyle = "rgba(20, 184, 136, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX - 60, centerY - 40);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + 70, centerY + 50);
      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex items-center justify-end pr-40"
    >
      <div className="relative">
        {/* Canvas only - no background */}
        <canvas
          ref={canvasRef}
          className="relative z-10"
          style={{ 
            filter: "drop-shadow(0 0 30px rgba(20, 184, 136, 0.3))",
            background: "transparent"
          }}
        />
      </div>
    </motion.div>
  );
};
