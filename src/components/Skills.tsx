import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Wrench, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Shadcn UI", level: 90 },
      { name: "Java", level: 75 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: [
      { name: "Vercel", level: 90 },
      { name: "Render", level: 85 },
      { name: "Cloudflare R2", level: 80 },
      { name: "AWS S3", level: 78 },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">
            Tech Stack
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
              className="backdrop-blur-sm bg-card/50 border border-border rounded-3xl p-8 hover-lift hover-glow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
