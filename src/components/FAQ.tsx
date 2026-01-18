import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by contacting us via email, Instagram DM, or KakaoTalk. We recommend sending reference images and a brief description of your desired tattoo."
  },
  {
    question: "What should I do to prepare for my tattoo session?",
    answer: "Get a good night's sleep, eat a proper meal before your appointment, stay hydrated, and avoid alcohol for at least 24 hours prior. Wear comfortable clothing that allows easy access to the area being tattooed."
  },
  {
    question: "How much does a tattoo cost?",
    answer: "Pricing varies based on size, complexity, placement, and the time required. We provide custom quotes after consultation. Minimum charge starts from ₩100,000."
  },
  {
    question: "How long does a tattoo take to heal?",
    answer: "Initial healing takes about 2-3 weeks, but complete healing of all skin layers can take up to 6 months. We provide detailed aftercare instructions after each session."
  },
  {
    question: "Can I bring my own design?",
    answer: "Absolutely! We welcome reference images and custom design ideas. Our artists will work with you to create a unique piece that fits your vision and works well as a tattoo."
  },
  {
    question: "Do you do cover-ups?",
    answer: "Yes, we specialize in cover-up tattoos. Please send photos of your existing tattoo so we can assess the best approach for your cover-up design."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-subheading text-primary text-center mb-4"
        >
          Common Questions
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-heading text-center mb-16"
        >
          FAQ
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 px-6 bg-background"
              >
                <AccordionTrigger className="text-left text-base font-light tracking-wide hover:text-primary hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
