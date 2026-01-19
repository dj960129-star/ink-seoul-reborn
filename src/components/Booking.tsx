import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { useT } from "@/i18n/useT";

const Booking = () => {
  const { t } = useT();

  return (
    <section id="booking" className="section-padding bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-heading mb-6"
        >
          {t("booking.cta.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-body text-muted-foreground mb-12 whitespace-pre-line"
        >
          {t("booking.cta.desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://open.kakao.com/o/example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest uppercase bg-foreground text-background transition-all duration-300 hover:bg-foreground/90"
          >
            <MessageCircle size={18} />
            KakaoTalk
          </a>
          <a
            href="https://www.instagram.com/ink_avenue/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest uppercase border border-foreground text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            <Instagram size={18} />
            Instagram DM
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
