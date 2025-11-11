import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Mebius",
    subtitle: "Digital Shopping Ecosystem",
    description:
      "Full-stack e-commerce platform with admin dashboard, Stripe payments, Clerk authentication, and AWS S3 storage. Built with clean architecture principles and modular design.",
    demo: "https://my-react-node-app.vercel.app",
    repo: "https://github.com/ravishanamina174/my-react-node-app",
    tags: ["Node.js", "TypeScript", "MongoDB", "React", "Stripe"],
    image: "/placeholder.svg", // User will replace this
  },
  {
    title: "ParkNet",
    subtitle: "Smart Parking Management System",
    description:
      "IoT-integrated parking solution with real-time availability tracking, Google Maps integration, and OAuth authentication. Features protected routes and optimized state management.",
    demo: "https://parknet-smarter-cities.vercel.app",
    repo: "https://github.com/ravishanamina174/parknet-smarter-cities",
    tags: ["React", "TypeScript", "Tailwind", "Google Maps", "IoT"],
    image: "/placeholder.svg", // User will replace this
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my latest work in full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="backdrop-blur-sm bg-card border border-border rounded-3xl overflow-hidden hover-lift hover-glow transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-display font-bold text-muted-foreground/20">
                      {project.title}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <Button
                      size="lg"
                      className="rounded-full"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full"
                      onClick={() => window.open(project.repo, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium text-sm">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted/50 text-foreground text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.repo, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
