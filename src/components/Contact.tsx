import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";
import { useT } from "@/i18n/useT";
import BookingForm from "./BookingForm";

const Contact = () => {
  const { t } = useT();

  return (
    <section id="contact" className="section-padding bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-subheading text-primary mb-4"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-heading mb-8"
        >
          {t("booking.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body text-background/70 mb-12 max-w-2xl mx-auto whitespace-pre-line"
        >
          {t("booking.desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-4xl mx-auto"
        >
          <BookingForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center gap-6 mb-16"
        >
          <a
            href="https://pf.kakao.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 text-sm tracking-widest uppercase border border-background bg-transparent text-background transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <MessageCircle size={18} />
            KakaoTalk
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 text-sm tracking-widest uppercase border border-background bg-transparent text-background transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <Instagram size={18} />
            Instagram
          </a>
          <a
            href="mailto:info@inkavenuetattoo.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 text-sm tracking-widest uppercase border border-background bg-transparent text-background transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <Mail size={18} />
            Email
          </a>
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-12 border-t border-background/20"
        >
          <div className="flex items-center justify-center gap-2 text-background/60 mb-4">
            <MapPin size={16} />
            <span className="text-caption">{t("location.label")}</span>
          </div>
          <p className="text-body text-background/80">
            {t("location.area")}
          </p>
          <p className="text-sm text-background/50 mt-2">
            {t("location.notice")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;