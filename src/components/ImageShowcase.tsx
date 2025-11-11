import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { useCallback, useRef } from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type SectionProps = {
  image: string;
  heading: string;
  subheading: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  reverse?: boolean;
};

const SpotlightSection = ({
  image,
  heading,
  subheading,
  onPrimaryClick,
  onSecondaryClick,
  reverse,
}: SectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useTransform(mouseX, [0, 1], [0, 1]); // noop to keep motion values alive
  void opacity; // silence linter

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { current } = ref;
      if (!current) return;
      const rect = current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      current.style.setProperty("--cursor-x", `${e.clientX - rect.left}px`);
      current.style.setProperty("--cursor-y", `${e.clientY - rect.top}px`);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.section
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
      style={
        {
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0"
        style={
          {
            background:
              "radial-gradient(600px circle at var(--cursor-x, -1000px) var(--cursor-y, -1000px), rgba(255,255,255,0.08), rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.75) 60%)",
            transition: "background 120ms ease-out",
          } as React.CSSProperties
        }
      />

      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div
          className={`text-left max-w-2xl ${reverse ? "ml-auto" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-widest text-background/70 mb-3"
          >
            [SHOWCASE]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="font-display font-black text-4xl md:text-6xl text-background leading-tight"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="font-mono text-base md:text-lg text-background/80 mt-4"
          >
            {subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Button
              size="lg"
              onClick={onPrimaryClick}
              className="bg-background text-foreground hover:bg-background/90 border-4 border-background font-display font-bold text-lg px-8 group"
            >
              VIEW PROJECTS
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onSecondaryClick}
              className="border-4 border-background bg-transparent hover:bg-background hover:text-foreground font-display font-bold text-lg px-8 text-background"
            >
              CONTACT
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export const ImageShowcase = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <SpotlightSection
        image={img1}
        heading="Building impactful digital experiences"
        subheading="Full-stack solutions with a focus on clean architecture and delightful UX."
        onPrimaryClick={() => scrollTo("#projects")}
        onSecondaryClick={() => scrollTo("#contact")}
      />
      <SpotlightSection
        image={img2}
        heading="Scalable systems, precise execution"
        subheading="From backend services to polished interfaces, engineered for performance."
        onPrimaryClick={() => scrollTo("#projects")}
        onSecondaryClick={() => scrollTo("#contact")}
        reverse
      />
    </div>
  );
};

export default ImageShowcase;


