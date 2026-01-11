import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div 
            className="text-2xl tracking-[0.3em] font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            INK AVENUE
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:info@inkavenuetattoo.com"
              className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50 tracking-wider">
          <p>© {currentYear} INK AVENUE TATTOO. ALL RIGHTS RESERVED.</p>
          <p>SEOUL, KOREA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;