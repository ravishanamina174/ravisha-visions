import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const courses = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Software Architecture & Design",
  "Business Analysis & Requirements",
  "Software Engineering Methods",
  "Database Management Systems",
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="min-h-screen lg:pl-20 py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
            [ACADEMIC_BACKGROUND]
          </div>
          <h2 className="font-display font-black text-6xl md:text-8xl leading-none">
            Education
            <span className="text-primary"> Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-12">
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-1 bg-foreground/20" />

          {/* University */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="relative mb-12"
          >
            <div className="absolute -left-1.5 md:-left-0.5 top-2 w-4 h-4 rounded-full bg-primary border-2 border-foreground" />
            <div className="bg-muted/60 backdrop-blur border-4 border-foreground p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="hidden md:block">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-black text-2xl md:text-3xl">
                    SLTC RESEARCH <span className="text-primary">UNIVERSITY</span>
                  </h3>
                  <div className="font-mono text-sm text-muted-foreground">
                    2023 — 2027 • Undergraduate Program
                  </div>
                  <div className="font-mono text-sm font-bold text-foreground">
                    BSc (Hons) Software Engineering
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                <div className="bg-primary text-primary-foreground border-4 border-foreground text-center py-3">
                  <div className="font-display font-black text-2xl">4</div>
                  <div className="font-mono text-[10px] tracking-widest opacity-80">YEARS</div>
                </div>
                <div className="bg-accent text-accent-foreground border-4 border-foreground text-center py-3">
                  <div className="font-display font-black text-2xl">2027</div>
                  <div className="font-mono text-[10px] tracking-widest opacity-80">GRADUATE</div>
                </div>
                <div className="bg-secondary text-secondary-foreground border-4 border-foreground text-center py-3">
                  <div className="font-display font-black text-2xl">MERN</div>
                  <div className="font-mono text-[10px] tracking-widest opacity-80">STACK</div>
                </div>
                <div className="bg-foreground text-background border-4 border-foreground text-center py-3">
                  <div className="font-display font-black text-2xl">SE</div>
                  <div className="font-mono text-[10px] tracking-widest opacity-80">FOCUS</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="relative"
          >
            <div className="absolute -left-1.5 md:-left-0.5 top-2 w-4 h-4 rounded-full bg-accent border-2 border-foreground" />
            <div className="bg-background border-4 border-foreground p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-8 w-8 text-accent" />
                <h4 className="font-display font-black text-2xl">Relevant Coursework</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {courses.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35 + index * 0.06 }}
                    className="group flex items-start gap-3 p-4 border-2 border-foreground hover:bg-muted transition-colors"
                  >
                    <div className="font-display font-black text-xl text-muted-foreground group-hover:text-primary transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="font-mono text-sm font-bold text-foreground pt-1">
                      {course}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
