import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="lg:pl-20 py-12 px-6 bg-foreground text-background border-t-4 border-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center md:text-left"
          >
            <div className="font-display font-black text-4xl mb-2">
              RAVISHA ABEYSEKARA
            </div>
            <div className="font-mono text-xs text-background/60">
              © {new Date().getFullYear()} — ALL RIGHTS RESERVED
            </div>
          </motion.div>

          {/* Center - Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-md"
          >
            <div className="font-mono text-sm text-background/80 italic">
              "Building digital experiences that matter, one line of code at a time."
            </div>
          </motion.div>

          {/* Right - Back to Top */}
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90 text-primary-foreground border-4 border-background w-16 h-16 flex items-center justify-center transition-colors"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 pt-8 border-t-2 border-background/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-background/60">
              DESIGNED & DEVELOPED WITH PRECISION
            </div>
            <div className="flex items-center gap-6 font-mono text-xs text-background/60">
              <span>REACT</span>
              <span>•</span>
              <span>TYPESCRIPT</span>
              <span>•</span>
              <span>TAILWIND</span>
              <span>•</span>
              <span>FRAMER MOTION</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
