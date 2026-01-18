import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Instagram, MessageCircle } from "lucide-react";

interface ActionButton {
  icon: React.ReactNode;
  label: string;
  href: string;
  bgColor: string;
}

const actionButtons: ActionButton[] = [
  {
    icon: <Instagram size={18} />,
    label: "Instagram",
    href: "https://instagram.com/inkavenue",
    bgColor: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 3c-4.97 0-9 3.582-9 8 0 2.52 1.328 4.77 3.427 6.283-.23 1.296-.698 2.574-1.427 3.717.996-.139 2.542-.544 4.09-1.444.618.107 1.258.163 1.91.163 4.97 0 9-3.582 9-8s-4.03-8-9-8z"/>
      </svg>
    ),
    label: "카카오톡",
    href: "https://pf.kakao.com/_example",
    bgColor: "bg-yellow-400 text-yellow-900",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    href: "https://wa.me/821012345678",
    bgColor: "bg-green-500",
  },
  {
    icon: <Phone size={18} />,
    label: "전화하기",
    href: "tel:+821012345678",
    bgColor: "bg-primary",
  },
];

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 bg-background border border-border rounded-2xl rounded-br-sm shadow-lg p-3 min-w-[180px]"
          >
            <div className="flex flex-col gap-2">
              {actionButtons.map((button, index) => (
                <motion.a
                  key={button.label}
                  href={button.href}
                  target={button.href.startsWith("http") ? "_blank" : undefined}
                  rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, ease: "easeOut" }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors duration-200 group"
                  aria-label={button.label}
                >
                  <span className={`w-9 h-9 rounded-full ${button.bgColor} text-white flex items-center justify-center transition-transform duration-200 group-hover:scale-105`}>
                    {button.icon}
                  </span>
                  <span className="text-sm font-light tracking-wide text-foreground">
                    {button.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={isOpen}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <MessageCircle size={22} className={isOpen ? "fill-current" : ""} />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
