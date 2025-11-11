import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";
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
    <section id="contact" className="min-h-screen lg:pl-20 py-28 px-6 bg-background">

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-10"
        >
          <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2">CONTACT</p>
          <h2 className="font-display font-black text-5xl md:text-6xl">Let’s get in touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Contact details</h3>
                <p className="text-foreground/80">
                  Prefer email? I usually reply within a day. For quick questions, socials work too.
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:raveeshanamina48@gmail.com" className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">raveeshanamina48@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+0000000000" className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+00 000 000 000</p>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 hover:bg-muted transition"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <div className="text-sm">
                      <p className="text-muted-foreground">{s.label}</p>
                      <p className="font-medium">{s.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-medium">Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border border-border focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Your name"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border border-border focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">Message</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border border-border focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[140px] resize-y"
                    placeholder="How can I help?"
                  />
                </div>
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
