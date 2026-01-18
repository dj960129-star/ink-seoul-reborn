import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const artists = [
  {
    name: "JIWON",
    style: "Fine Line · Minimal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    instagram: "https://instagram.com"
  },
  {
    name: "MINHO",
    style: "Black Work · Geometric",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    instagram: "https://instagram.com"
  },
  {
    name: "YUNA",
    style: "Watercolor · Illustrative",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    instagram: "https://instagram.com"
  },
  {
    name: "SEOJUN",
    style: "Traditional · Neo-Traditional",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    instagram: "https://instagram.com"
  }
];

const Artists = () => {
  return (
    <section id="artists" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-subheading text-primary text-center mb-4"
        >
          Our Team
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-heading text-center mb-16"
        >
          Artists
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="artist-card group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-full w-full object-cover img-hover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div className="pt-6 flex items-start justify-between">
                <div>
                  <h3 className="text-lg tracking-widest font-light group-hover:text-primary transition-colors duration-300">{artist.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{artist.style}</p>
                </div>
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={`${artist.name} Instagram`}
                >
                  <Instagram size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;