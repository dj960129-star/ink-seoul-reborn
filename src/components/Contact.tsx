import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
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
          Book Your Session
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body text-background/70 mb-12 max-w-2xl mx-auto"
        >
          상담 및 예약은 카카오톡 또는 인스타그램 DM으로 문의해주세요.
          원하시는 디자인과 부위, 사이즈를 함께 알려주시면 
          빠른 상담이 가능합니다.
        </motion.p>

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
            <span className="text-caption">Location</span>
          </div>
          <p className="text-body text-background/80">
            서울특별시 마포구 홍대입구역 인근
          </p>
          <p className="text-sm text-background/50 mt-2">
            정확한 위치는 예약 확정 시 안내드립니다
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;