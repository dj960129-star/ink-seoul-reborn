import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Fine Line", "Black Work", "Watercolor", "Traditional"];

const works = [
  { id: 1, category: "Fine Line", image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1974&auto=format&fit=crop" },
  { id: 2, category: "Black Work", image: "https://images.unsplash.com/photo-1590246814883-55516d8c2afd?q=80&w=1974&auto=format&fit=crop" },
  { id: 3, category: "Watercolor", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, category: "Traditional", image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1974&auto=format&fit=crop" },
  { id: 5, category: "Fine Line", image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop" },
  { id: 6, category: "Black Work", image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop" },
  { id: 7, category: "Watercolor", image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop" },
  { id: 8, category: "Traditional", image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=2070&auto=format&fit=crop" },
  { id: 9, category: "Fine Line", image: "https://images.unsplash.com/photo-1604941455555-4f09cf25c3cb?q=80&w=1974&auto=format&fit=crop" },
  { id: 10, category: "Black Work", image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=2070&auto=format&fit=crop" },
  { id: 11, category: "Watercolor", image: "https://images.unsplash.com/photo-1594164771371-21eb50d8f71b?q=80&w=1974&auto=format&fit=crop" },
  { id: 12, category: "Traditional", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=2070&auto=format&fit=crop" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks = activeCategory === "All" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-subheading text-primary text-center mb-4"
        >
          Our Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-heading text-center mb-12"
        >
          Portfolio
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-caption pb-2 border-b transition-all duration-300 ${
                activeCategory === category 
                  ? "border-primary text-primary" 
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden cursor-pointer"
              >
                <img
                  src={work.image}
                  alt={`Tattoo work ${work.id}`}
                  className="h-full w-full object-cover img-hover"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-center justify-center">
                  <span className="text-background text-caption opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {work.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase border border-primary bg-transparent text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View More on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;