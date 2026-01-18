import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Summer Flash Day Event",
    date: "2024-06-15",
    excerpt: "Join us for our annual summer flash day with exclusive designs at special prices.",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "New Artist Joining Our Team",
    date: "2024-05-20",
    excerpt: "We're excited to welcome a new talented artist specializing in fine line work.",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Studio Renovation Complete",
    date: "2024-04-10",
    excerpt: "Our newly renovated space offers an enhanced experience for all our clients.",
    image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=2070&auto=format&fit=crop"
  },
];

const News = () => {
  return (
    <section id="news" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-subheading text-primary text-center mb-4"
        >
          Latest Updates
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-heading text-center mb-16"
        >
          News
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover img-hover"
                />
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar size={14} />
                <span>{new Date(item.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              
              <h3 className="text-lg tracking-wide font-light mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
