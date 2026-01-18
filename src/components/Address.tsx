import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Address = () => {
  return (
    <section id="address" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-subheading text-primary text-center mb-4"
        >
          Find Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-heading text-center mb-16"
        >
          Address
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-muted/50 flex items-center justify-center"
          >
            <div className="text-center text-muted-foreground">
              <MapPin size={48} className="mx-auto mb-4 text-primary" />
              <p className="text-sm tracking-wide">Map will be displayed here</p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-light tracking-wide mb-2">Location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  123 Tattoo Street, Gangnam-gu<br />
                  Seoul, South Korea 06000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-light tracking-wide mb-2">Hours</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tuesday - Saturday: 12:00 PM - 9:00 PM<br />
                  Sunday - Monday: Closed<br />
                  <span className="text-sm italic">By appointment only</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-light tracking-wide mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  +82 10-1234-5678
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-light tracking-wide mb-2">Email</h3>
                <p className="text-muted-foreground">
                  hello@inkavenue.com
                </p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase border border-primary bg-transparent text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Address;
