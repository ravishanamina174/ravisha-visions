import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "MEBIUS",
    subtitle: "Digital Shopping Ecosystem",
    description:
      "Full-stack e-commerce platform with admin dashboard, Stripe payments, Clerk authentication, and AWS S3 storage. Built with clean architecture principles and modular design.",
    demo: "https://my-react-node-app.vercel.app",
    repo: "https://github.com/ravishanamina174/my-react-node-app",
    tags: ["Node.js", "TypeScript", "MongoDB", "React", "Stripe"],
    color: "bg-primary",
    number: "01",
  },
  {
    title: "PARKNET",
    subtitle: "Smart Parking Management System",
    description:
      "IoT-integrated parking solution with real-time availability tracking, Google Maps integration, and OAuth authentication. Features protected routes and optimized state management.",
    demo: "https://parknet-smarter-cities.vercel.app",
    repo: "https://github.com/ravishanamina174/parknet-smarter-cities",
    tags: ["React", "TypeScript", "Tailwind", "Google Maps", "IoT"],
    color: "bg-accent",
    number: "02",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen lg:pl-20 py-32 px-6 bg-muted relative overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0 bg-foreground opacity-5 -skew-element" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <div className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
            [SELECTED_WORKS]
          </div>
          <h2 className="font-display font-black text-7xl md:text-9xl leading-none">
            FEATURED
            <br />
            <span className="text-primary">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Project Number & Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`lg:col-span-7 relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative bg-background border-4 border-foreground brutalist-shadow overflow-hidden">
                    {/* Large Project Number Background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <span className="font-display font-black text-[20rem] leading-none">
                        {project.number}
                      </span>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
                      <div className={`absolute inset-0 ${project.color} opacity-20`} />
                      <span className="relative z-10 font-display font-black text-6xl text-foreground/30">
                        {project.title}
                      </span>

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-foreground/90 flex items-center justify-center gap-6"
                      >
                        <Button
                          size="lg"
                          onClick={() => window.open(project.demo, "_blank")}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold border-0"
                        >
                          <ExternalLink className="mr-2 h-5 w-5" />
                          LIVE DEMO
                        </Button>
                        <Button
                          size="lg"
                          onClick={() => window.open(project.repo, "_blank")}
                          className="bg-background hover:bg-background/90 text-foreground font-display font-bold border-4 border-background"
                        >
                          <Github className="mr-2 h-5 w-5" />
                          CODE
                        </Button>
                      </motion.div>
                    </div>

                    {/* Project Number Badge */}
                    <div className={`absolute top-4 right-4 ${project.color} text-background border-4 border-foreground w-16 h-16 flex items-center justify-center font-display font-black text-2xl`}>
                      {project.number}
                    </div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div>
                    <h3 className="font-display font-black text-5xl mb-2">
                      {project.title}
                    </h3>
                    <p className={`font-mono text-sm ${project.color === 'bg-primary' ? 'text-primary' : 'text-accent'}`}>
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="bg-background border-4 border-foreground p-6">
                    <p className="font-mono text-sm leading-relaxed text-foreground/80">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-foreground text-background font-mono text-xs font-bold border-2 border-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => window.open(project.demo, "_blank")}
                      className="flex items-center gap-2 font-mono text-sm font-bold text-foreground hover:text-primary transition-colors"
                    >
                      VIEW PROJECT
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => window.open(project.repo, "_blank")}
                      className="flex items-center gap-2 font-mono text-sm font-bold text-foreground hover:text-primary transition-colors"
                    >
                      VIEW CODE
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
