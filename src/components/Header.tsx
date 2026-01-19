import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { useT } from "@/i18n/useT";
import { languages, languageLabels, Language } from "@/i18n/translations";

const navLinks = [
  { key: "nav.home", href: "#" },
  { key: "nav.news", href: "#news" },
  { key: "nav.styles", href: "#styles" },
  { key: "nav.contact", href: "#contact" },
  { key: "nav.faq", href: "#faq" },
  { key: "nav.address", href: "#address" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useT();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-sm py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className={`text-xl tracking-[0.3em] font-light transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-background"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            INK AVENUE
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`link-underline text-caption transition-colors duration-300 hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-background"
                }`}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* Instagram + Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/ink_avenue/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`transition-opacity duration-300 hover:opacity-60 ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
            >
              <Instagram size={18} />
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-xs tracking-wider transition-all duration-300 ${
                    language === lang
                      ? "text-primary"
                      : isScrolled
                      ? "text-foreground/60 hover:text-foreground"
                      : "text-background/60 hover:text-background"
                  }`}
                >
                  {languageLabels[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-background"
            }`}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center">
                <span 
                  className="text-xl tracking-[0.3em] font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  INK AVENUE
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-heading hover:text-primary transition-colors duration-300"
                  >
                    {t(link.key)}
                  </motion.a>
                ))}

                {/* Mobile Instagram + Language */}
                <div className="flex items-center gap-6 mt-4">
                  <a
                    href="https://www.instagram.com/ink_avenue/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Instagram size={24} />
                  </a>
                  <div className="flex items-center gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-2 py-1 text-sm tracking-wider transition-colors duration-300 ${
                          language === lang
                            ? "text-primary"
                            : "text-foreground/60 hover:text-foreground"
                        }`}
                      >
                        {languageLabels[lang]}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;