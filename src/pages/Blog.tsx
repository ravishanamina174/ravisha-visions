import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    title: "How I built my full-stack e-commerce app",
    excerpt:
      "A deep dive into building Mebius, a complete digital shopping ecosystem with modern architecture, payment integration, and scalable backend design.",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["Full-Stack", "E-commerce", "MERN"],
  },
  {
    title: "Lessons from my first backend project",
    excerpt:
      "Key takeaways and challenges faced while developing my first production-ready backend system. From database design to API architecture.",
    date: "2024-02-20",
    readTime: "6 min read",
    tags: ["Backend", "Node.js", "Learning"],
  },
  {
    title: "Building responsive UIs with Tailwind CSS",
    excerpt:
      "My approach to creating beautiful, responsive interfaces using Tailwind CSS and modern design principles. Tips and tricks for clean code.",
    date: "2024-01-10",
    readTime: "5 min read",
    tags: ["Frontend", "CSS", "Design"],
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            <span className="text-gradient">Blog</span> & Writings
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on software development, web technologies, and lessons learned
            along the way.
          </p>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="h-full backdrop-blur-sm bg-card border border-border rounded-2xl p-6 hover-glow transition-all duration-300">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="font-display font-bold text-xl mb-3 group-hover:text-gradient transition-all">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="inline-block backdrop-blur-sm bg-card/50 border border-border rounded-2xl px-8 py-4">
              <p className="text-muted-foreground">
                More articles coming soon! Stay tuned for updates.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
