import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b-4 border-foreground py-12 px-6 bg-muted"
      >
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 font-mono font-bold hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK TO HOME
          </Button>

          <div className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
            [BLOG_&_WRITINGS]
          </div>
          <h1 className="font-display font-black text-7xl md:text-9xl leading-none">
            TECH
            <br />
            <span className="text-primary">BLOG</span>
          </h1>
          <p className="font-mono text-sm text-foreground/60 mt-6 max-w-2xl">
            Thoughts on software development, architecture decisions, and lessons learned from building real-world applications.
          </p>
        </div>
      </motion.div>

      {/* Blog Posts */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group cursor-pointer"
              >
                <div className="bg-muted border-4 border-foreground brutalist-shadow-sm hover:brutalist-shadow transition-all p-8">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Left - Content */}
                    <div className="lg:col-span-8 space-y-4">
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

                      <h2 className="font-display font-black text-3xl md:text-4xl group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Right - CTA */}
                    <div className="lg:col-span-4 flex lg:justify-end">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-foreground text-background border-4 border-foreground w-32 h-32 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors"
                      >
                        <ArrowUpRight className="h-12 w-12" />
                      </motion.div>
                    </div>
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
