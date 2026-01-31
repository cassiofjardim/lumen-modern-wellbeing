import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import lumenLogo from "@/assets/lumen-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "A Lumen", href: "#sobre" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Quem Somos", href: "#equipe" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20 px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={lumenLogo} alt="Lumen" className="w-10 h-10 object-contain" />
            <span
              className={`text-xl font-semibold transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Lumen
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#cst" className="btn-cta px-5 py-2.5 text-sm">
              Treinamento CST
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background">
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cst"
                onClick={() => setIsMenuOpen(false)}
                className="btn-cta px-5 py-3 text-center mt-2"
              >
                Treinamento CST
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
