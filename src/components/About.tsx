import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen lg:pl-20 py-32 px-6 bg-muted relative overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0 bg-foreground opacity-5 skew-element" />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="lg:col-span-4"
          >
            <div className="sticky top-32">
              <div className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
                [ABOUT_ME]
              </div>
              <h2 className="font-display font-black text-7xl md:text-8xl leading-none">
                WHO
                <br />
                <span className="text-primary">I AM</span>
              </h2>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mt-8 w-16 h-16 border-4 border-accent"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="bg-background border-4 border-foreground brutalist-shadow-sm p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Code2 className="h-8 w-8 text-primary flex-shrink-0" />
                <p className="font-mono text-lg leading-relaxed text-foreground/80">
                  Software Engineering undergraduate at <span className="font-bold text-foreground">SLTC Research University (2023–2027)</span> building scalable full-stack applications with precision and passion.
                </p>
              </div>

              <div className="h-1 w-full bg-primary my-8" />

              <div className="flex items-start gap-4">
                <Sparkles className="h-8 w-8 text-accent flex-shrink-0" />
                <p className="font-mono text-lg leading-relaxed text-foreground/80">
                  Passionate about <span className="font-bold text-foreground">clean UX, modular architecture</span>, and solving complex technical challenges. I specialize in React, Next.js, and the MERN stack, delivering polished interfaces that feel <span className="font-bold text-foreground">alive</span>.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary border-4 border-foreground p-6 text-center"
              >
                <div className="font-display font-black text-4xl text-primary-foreground">2+</div>
                <div className="font-mono text-xs text-primary-foreground/80 mt-2">YEARS CODING</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-accent border-4 border-foreground p-6 text-center"
              >
                <div className="font-display font-black text-4xl text-accent-foreground">10+</div>
                <div className="font-mono text-xs text-accent-foreground/80 mt-2">PROJECTS BUILT</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-secondary border-4 border-foreground p-6 text-center col-span-2 md:col-span-1"
              >
                <div className="font-display font-black text-4xl text-secondary-foreground">∞</div>
                <div className="font-mono text-xs text-secondary-foreground/80 mt-2">LEARNING CURVE</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
