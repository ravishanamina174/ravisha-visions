import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "I'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "raveeshanamina48@gmail.com",
      href: "mailto:raveeshanamina48@gmail.com",
      color: "bg-primary",
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      value: "ravisha-abeysekara",
      href: "https://linkedin.com/in/ravisha-abeysekara",
      color: "bg-accent",
    },
    {
      icon: Github,
      label: "GITHUB",
      value: "ravishanamina174",
      href: "https://github.com/ravishanamina174",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="contact" className="min-h-screen lg:pl-20 py-32 px-6 bg-muted relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-20 w-32 h-32 bg-primary/20"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-accent/20"
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
            [GET_IN_TOUCH]
          </div>
          <h2 className="font-display font-black text-7xl md:text-9xl leading-none">
            LET'S
            <br />
            <span className="text-primary">CONNECT</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-background border-4 border-foreground brutalist-shadow p-8">
              <h3 className="font-display font-black text-3xl mb-8">
                SEND MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-xs font-bold text-foreground mb-2 block">
                    [NAME]
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-4 border-foreground focus-visible:ring-0 focus-visible:ring-offset-0 font-mono"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs font-bold text-foreground mb-2 block">
                    [EMAIL]
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-4 border-foreground focus-visible:ring-0 focus-visible:ring-offset-0 font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs font-bold text-foreground mb-2 block">
                    [MESSAGE]
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-4 border-foreground focus-visible:ring-0 focus-visible:ring-offset-0 font-mono min-h-[150px] resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 border-4 border-foreground brutalist-shadow-sm font-display font-bold text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="block group"
              >
                <div className="bg-background border-4 border-foreground brutalist-shadow-sm p-6 hover:brutalist-shadow transition-all">
                  <div className="flex items-start gap-6">
                    <div className={`${social.color} w-16 h-16 flex items-center justify-center flex-shrink-0`}>
                      <social.icon className="h-8 w-8 text-background" />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-xs font-bold text-muted-foreground mb-2">
                        {social.label}
                      </div>
                      <div className="font-mono text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {social.value}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="bg-primary border-4 border-foreground p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-secondary rounded-full"
                />
                <span className="font-display font-black text-xl text-primary-foreground">
                  CURRENTLY AVAILABLE
                </span>
              </div>
              <p className="font-mono text-sm text-primary-foreground/80">
                Open for collaborations, freelance projects, and full-time opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
