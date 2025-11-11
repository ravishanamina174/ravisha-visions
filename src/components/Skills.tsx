import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "FRONTEND",
    color: "bg-primary",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "BACKEND",
    color: "bg-accent",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "PostgreSQL"],
  },
  {
    title: "LANGUAGES",
    color: "bg-secondary",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    title: "TOOLS",
    color: "bg-primary",
    skills: ["Git", "GitHub", "Vercel", "Cloudflare", "AWS S3"],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen lg:pl-20 py-32 px-6 bg-background relative overflow-hidden">
      {/* Geometric Decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rotate-45" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/10" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
            [TECHNICAL_SKILLS]
          </div>
          <h2 className="font-display font-black text-7xl md:text-9xl leading-none mb-8">
            TECH
            <br />
            <span className="text-primary">STACK</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="bg-muted border-4 border-foreground overflow-hidden">
                {/* Header */}
                <div className={`${category.color} border-b-4 border-foreground p-6`}>
                  <h3 className="font-display font-black text-3xl text-background">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="p-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-sm font-bold text-foreground">
                          {skill}
                        </span>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "auto" } : {}}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                          className="font-mono text-xs text-muted-foreground"
                        >
                          [{Math.floor(Math.random() * 20) + 80}%]
                        </motion.div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-background border-2 border-foreground overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${Math.floor(Math.random() * 20) + 80}%` } : {}}
                          transition={{ 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                          className={`h-full ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-foreground text-background border-4 border-foreground brutalist-shadow px-8 py-4">
            <p className="font-mono text-lg font-bold">
              {">"} ALWAYS LEARNING. ALWAYS BUILDING. ALWAYS SHIPPING.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
