import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen lg:pl-20 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-mono text-sm tracking-widest text-muted-foreground"
              >
                [DEVELOPER_PORTFOLIO_2025]
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display font-bold text-6xl md:text-8xl leading-none"
              >
                RAVISHA
                <br />
                <span className="text-primary">ABEYSEKARA</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent" />
                <p className="font-mono text-lg text-foreground/80 pl-4">
                  Software Engineering Undergraduate
                  <br />
                  Full-Stack Developer | MERN Stack Dev
                </p>
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="bg-foreground text-background hover:bg-foreground/90 border-4 border-foreground font-display font-bold text-lg px-8 group"
              >
                VIEW PROJECTS
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-4 border-foreground bg-transparent hover:bg-foreground hover:text-background font-display font-bold text-lg px-8"
              >
                CONTACT
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/blog")}
                className="border-4 border-foreground bg-transparent hover:bg-foreground hover:text-background font-display font-bold text-lg px-8"
              >
                BLOG
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 pt-4"
            >
              <motion.a
                whileHover={{ y: -4 }}
                href="https://github.com/ravishanamina174"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                href="https://linkedin.com/in/ravisha-abeysekara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                href="mailto:raveeshanamina48@gmail.com"
                className="w-12 h-12 bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-mono text-xs tracking-widest text-muted-foreground"
        >
          ↓ SCROLL
        </motion.div>
      </motion.div>
    </section>
  );
};
