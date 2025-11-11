import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "text-primary",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    color: "text-accent",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Languages",
    color: "text-secondary",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    title: "Tools",
    color: "text-primary",
    skills: ["Git", "GitHub", "Vercel", "Cloudflare", "AWS S3"],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen lg:pl-20 py-28 px-6 bg-background">

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-10"
        >
          <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2">SKILLS</p>
          <h2 className="font-display font-black text-5xl md:text-6xl">What I work with</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold">{category.title}</h3>
                  <span className={`font-mono text-xs ${category.color}`}>core tools</span>
                </div>

                <ul className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.04 }}
                      className="px-3 py-1.5 rounded-full border border-border bg-background text-sm font-medium"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            Constantly learning and refining my toolkit.
          </p>
        </div>
      </div>
    </section>
  );
};
