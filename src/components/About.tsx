import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-subheading text-muted-foreground mb-8"
        >
          About Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-heading mb-12"
        >
          Where Art Meets Skin
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-body text-muted-foreground"
        >
          <p>
            INK AVENUE는 서울 홍대에 위치한 프라이빗 타투 스튜디오입니다. 
            각 아티스트의 독창적인 스타일과 세심한 디테일로 
            당신만의 특별한 작품을 만들어드립니다.
          </p>
          <p>
            우리는 타투가 단순한 그림이 아닌, 
            개인의 이야기와 감정을 담은 예술이라고 믿습니다.
            철저한 위생 관리와 편안한 환경에서 
            최상의 경험을 제공합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col md:flex-row justify-center gap-12 md:gap-24"
        >
          <div>
            <p className="text-4xl font-light mb-2">10+</p>
            <p className="text-caption text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-light mb-2">5,000+</p>
            <p className="text-caption text-muted-foreground">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-light mb-2">4</p>
            <p className="text-caption text-muted-foreground">Expert Artists</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;