import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">
                About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display font-bold text-4xl md:text-5xl"
            >
              Building the Future,{" "}
              <span className="text-gradient">One Line at a Time</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Software Engineering undergraduate at{" "}
              <span className="text-foreground font-semibold">SLTC Research University</span>{" "}
              (2023–2027), specializing in building scalable full-stack applications.
            </p>

            <p>
              I'm passionate about creating{" "}
              <span className="text-foreground font-semibold">clean user experiences</span>,{" "}
              <span className="text-foreground font-semibold">modular architecture</span>, and
              solving complex technical challenges. My expertise lies in React, Next.js, and the
              MERN stack, where I craft polished interfaces that feel alive with interaction.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or writing about my development journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="pt-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-2xl opacity-20" />
              <div className="relative backdrop-blur-sm bg-card/50 border border-border rounded-2xl p-8">
                <p className="text-2xl font-display font-semibold text-gradient">
                  "Code is poetry written in logic."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
