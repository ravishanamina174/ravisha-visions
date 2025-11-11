import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImg from "@/components/images/img2.jpg";

const blogPosts = [
  {
    title: "HOW I BUILT MY FULL-STACK E-COMMERCE APP",
    excerpt: "A deep dive into building Mebius - from architecture decisions to deployment strategies.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "FULL-STACK",
    color: "bg-primary",
  },
  {
    title: "LESSONS FROM MY FIRST BACKEND PROJECT",
    excerpt: "Key learnings and mistakes I made while building my first Node.js backend application.",
    date: "2024-02-20",
    readTime: "5 min read",
    category: "BACKEND",
    color: "bg-accent",
  },
  {
    title: "REACT PERFORMANCE OPTIMIZATION TECHNIQUES",
    excerpt: "Practical tips for making your React applications faster and more efficient.",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "FRONTEND",
    color: "bg-secondary",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background lg:pl-20">
      {/* Small Hero with Picture */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[38vh] md:h-[42vh] overflow-hidden"
        style={
          {
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          } as React.CSSProperties
        }
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-end pb-8">
          <div className="w-full">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6 font-mono font-bold hover:text-primary text-background"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              BACK TO HOME
            </Button>
            <div className="font-mono text-xs tracking-widest text-background/70 mb-2">
              [BLOG_&_WRITINGS]
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl text-background leading-none">
              Tech <span className="text-primary">Blog</span>
            </h1>
            <p className="font-mono text-sm text-background/80 mt-3 max-w-2xl">
              Thoughts on software development, architecture, and lessons from real projects.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Blog Posts */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer bg-muted border-4 border-foreground brutalist-shadow-sm hover:brutalist-shadow transition-all"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className={`${post.color} text-background px-4 py-1 font-mono text-xs font-bold`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <h2 className="font-display font-black text-3xl md:text-4xl group-hover:text-primary transition-colors mt-4">
                    {post.title}
                  </h2>

                  <p className="font-mono text-sm text-foreground/70 leading-relaxed mt-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex justify-end">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-foreground text-background border-4 border-foreground w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors"
                    >
                      <ArrowUpRight className="h-8 w-8" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-muted border-4 border-foreground p-8">
              <p className="font-mono text-lg">
                <span className="font-bold text-primary">{">"}</span> More articles coming soon...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
