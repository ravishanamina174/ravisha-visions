import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen lg:pl-20 py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2">ABOUT</p>
          <h2 className="font-display font-black text-5xl md:text-6xl">A little about me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="lg:col-span-2 bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-start gap-3 mb-4">
              <User className="h-6 w-6 text-primary" />
              <h3 className="font-display text-2xl font-bold">Who I am</h3>
            </div>
            <div className="space-y-4 text-base leading-7 text-foreground/80">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis,
                tortor non laoreet elementum, enim risus imperdiet augue, vitae dapibus nulla
                est vitae nibh. Cras id metus in arcu posuere dictum.
              </p>
              <p>
                Nullam volutpat, justo ac interdum sodales, lorem nibh convallis erat, sed
                ultrices leo risus at risus. Curabitur fermentum, mauris eu posuere pulvinar,
                dolor justo ornare nibh, non mattis risus eros non mi.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-8 h-max"
          >
            <div className="flex items-start gap-3 mb-4">
              <Target className="h-6 w-6 text-accent" />
              <h3 className="font-display text-2xl font-bold">What drives me</h3>
            </div>
            <p className="text-base leading-7 text-foreground/80">
              Building useful, reliable products with a calm UI. I care about clarity,
              performance, and details that make interfaces feel effortless.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
