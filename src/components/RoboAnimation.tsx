import { motion } from "framer-motion";

export const Robo = () => {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.svg
        width="300"
        height="400"
        viewBox="0 0 300 400"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotateY: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ perspective: "1000px" }}
      >
        {/* Body - Black */}
        <rect x="90" y="80" width="120" height="160" fill="#000000" strokeWidth="2" stroke="#00ff00" />

        {/* Head - Black */}
        <rect x="105" y="30" width="90" height="80" fill="#000000" strokeWidth="2" stroke="#00ff00" rx="5" />

        {/* Left Eye - Yellow */}
        <circle cx="130" cy="60" r="12" fill="#ffff00" opacity="0.9" />
        <circle cx="130" cy="60" r="8" fill="#ffff00" />

        {/* Right Eye - Yellow */}
        <circle cx="170" cy="60" r="12" fill="#ffff00" opacity="0.9" />
        <circle cx="170" cy="60" r="8" fill="#ffff00" />

        {/* Mouth - Red */}
        <line x1="130" y1="95" x2="170" y2="95" stroke="#ff0000" strokeWidth="2" />

        {/* Left Antenna - Red */}
        <line x1="115" y1="30" x2="110" y2="0" stroke="#ff0000" strokeWidth="3" strokeLinecap="round" />
        <circle cx="110" cy="0" r="4" fill="#ff0000" />

        {/* Right Antenna - Green */}
        <line x1="185" y1="30" x2="190" y2="0" stroke="#00ff00" strokeWidth="3" strokeLinecap="round" />
        <circle cx="190" cy="0" r="4" fill="#00ff00" />

        {/* Left Arm - Red */}
        <rect x="40" y="120" width="50" height="30" fill="#ff0000" strokeWidth="2" stroke="#ff0000" rx="4" />

        {/* Right Arm - Green */}
        <rect x="210" y="120" width="50" height="30" fill="#00ff00" strokeWidth="2" stroke="#00ff00" rx="4" />

        {/* Left Hand - Red */}
        <circle cx="35" cy="135" r="12" fill="#ff0000" strokeWidth="2" stroke="#ff0000" />

        {/* Right Hand - Green */}
        <circle cx="265" cy="135" r="12" fill="#00ff00" strokeWidth="2" stroke="#00ff00" />

        {/* Chest Accent - Yellow */}
        <rect x="115" y="110" width="70" height="50" fill="#ffff00" strokeWidth="2" stroke="#ffff00" opacity="0.9" />

        {/* Left Leg - Red */}
        <rect x="110" y="240" width="25" height="100" fill="#ff0000" strokeWidth="2" stroke="#ff0000" rx="4" />

        {/* Right Leg - Green */}
        <rect x="165" y="240" width="25" height="100" fill="#00ff00" strokeWidth="2" stroke="#00ff00" rx="4" />

        {/* Left Foot - Red */}
        <rect x="100" y="340" width="45" height="20" fill="#ff0000" strokeWidth="2" stroke="#ff0000" rx="3" />

        {/* Right Foot - Green */}
        <rect x="155" y="340" width="45" height="20" fill="#00ff00" strokeWidth="2" stroke="#00ff00" rx="3" />

        {/* Glow Effect */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glowing edges - Yellow */}
        <circle cx="130" cy="60" r="14" fill="none" stroke="#ffff00" strokeWidth="1" opacity="0.5" filter="url(#glow)" />
        <circle cx="170" cy="60" r="14" fill="none" stroke="#ffff00" strokeWidth="1" opacity="0.5" filter="url(#glow)" />
      </motion.svg>
    </motion.div>
  );
};
