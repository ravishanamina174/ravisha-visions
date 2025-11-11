import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Software Architecture",
    "Business Analysis",
    "Software Engineering Methods",
    "Database Management Systems",
  ];

  return (
    <section id="education" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">
            Academic Background
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-sm bg-card border border-border rounded-3xl p-8 md:p-12 hover-glow"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="font-display font-bold text-3xl mb-2">
                  SLTC Research University
                </h3>
                <p className="text-xl text-primary font-semibold">
                  BSc (Hons) Software Engineering
                </p>
                <p className="text-muted-foreground mt-1">2023 – 2027</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-foreground">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Relevant Coursework:</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {courses.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                      <span className="text-muted-foreground">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
