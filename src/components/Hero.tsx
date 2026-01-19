import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop"
          alt="Tattoo Studio"
          className="h-full w-full object-cover"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-background">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-subheading mb-6"
        >
          Seoul, Korea
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-display text-center px-4"
        >
          INK AVENUE
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-subheading mt-6 text-background/80"
        >
          Tattoo Studio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <a href="#booking" className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90">
            BOOK NOW
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-background/50"
        />
      </motion.div>
    </section>
  );
};

export default Hero;