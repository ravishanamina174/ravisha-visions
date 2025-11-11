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
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-40 h-40 border-4 border-secondary opacity-20"
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
            [ACADEMIC_BACKGROUND]
          </div>
          <h2 className="font-display font-black text-7xl md:text-9xl leading-none">
            EDU
            <span className="text-primary">CATION</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - University Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-muted border-4 border-foreground brutalist-shadow p-8 md:p-12">
              <GraduationCap className="h-16 w-16 text-primary mb-6" />
              
              <h3 className="font-display font-black text-4xl mb-4">
                SLTC RESEARCH
                <br />
                <span className="text-primary">UNIVERSITY</span>
              </h3>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-foreground">BSc (Hons) Software Engineering</div>
                    <div className="text-muted-foreground">Undergraduate Program</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-foreground">2023 — 2027</div>
                    <div className="text-muted-foreground">Expected Graduation</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-primary border-4 border-foreground p-4 text-center">
                  <div className="font-display font-black text-3xl text-primary-foreground">4</div>
                  <div className="font-mono text-xs text-primary-foreground/80 mt-1">YEARS</div>
                </div>
                <div className="bg-accent border-4 border-foreground p-4 text-center">
                  <div className="font-display font-black text-3xl text-accent-foreground">2027</div>
                  <div className="font-mono text-xs text-accent-foreground/80 mt-1">GRADUATE</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Coursework */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-background border-4 border-foreground p-8 md:p-12 h-full">
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="h-12 w-12 text-accent" />
                <h4 className="font-display font-black text-3xl">
                  RELEVANT
                  <br />
                  COURSEWORK
                </h4>
              </div>

              <div className="space-y-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="group flex items-start gap-4 p-4 border-2 border-foreground hover:bg-muted transition-colors cursor-default"
                  >
                    <div className="font-display font-black text-2xl text-muted-foreground group-hover:text-primary transition-colors">
                      0{index + 1}
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
