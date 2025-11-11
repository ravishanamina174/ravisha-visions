import { motion } from "framer-motion";

export const AnimatedOrbs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex items-center justify-center"
    >
      <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit circles */}
        <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(20, 184, 136, 0.2)" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(20, 184, 136, 0.15)" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(20, 184, 136, 0.1)" strokeWidth="1.5" />

        {/* Central green orb */}
        <motion.circle
          cx="200"
          cy="200"
          r="35"
          fill="#14b8a6"
          opacity="0.9"
          animate={{
            r: [35, 40, 35],
            opacity: [0.9, 0.7, 0.9],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          filter="url(#glow)"
        />

        {/* Yellow orb - top left */}
        <motion.circle
          cx="140"
          cy="160"
          r="25"
          fill="#eab308"
          opacity="0.8"
          animate={{
            r: [25, 30, 25],
            opacity: [0.8, 0.6, 0.8],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
          filter="url(#glow)"
        />

        {/* Red orb - bottom right */}
        <motion.circle
          cx="270"
          cy="250"
          r="20"
          fill="#ef4444"
          opacity="0.85"
          animate={{
            r: [20, 25, 20],
            opacity: [0.85, 0.65, 0.85],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
          filter="url(#glow)"
        />

        {/* Connecting lines */}
        <line x1="200" y1="200" x2="140" y2="160" stroke="rgba(20, 184, 136, 0.2)" strokeWidth="1.5" />
        <line x1="200" y1="200" x2="270" y2="250" stroke="rgba(20, 184, 136, 0.2)" strokeWidth="1.5" />

        {/* Orbiting particles */}
        <motion.circle
          cx="280"
          cy="200"
          r="3"
          fill="#14b8a6"
          animate={{
            cx: [280, 240, 120, 80, 200, 280],
            cy: [200, 340, 340, 200, 60, 200],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <motion.circle
          cx="200"
          cy="80"
          r="3"
          fill="#eab308"
          animate={{
            cx: [200, 100, 100, 300, 300, 200],
            cy: [80, 120, 280, 280, 120, 80],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />

        <motion.circle
          cx="120"
          cy="200"
          r="3"
          fill="#ef4444"
          animate={{
            cx: [120, 300, 280, 150, 120],
            cy: [200, 150, 250, 280, 200],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </svg>
    </motion.div>
  );
};
