import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Treinamento CST", href: "#cst" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Equipe", href: "#equipe" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20 px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-amber flex items-center justify-center">
              <span className="text-primary font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-semibold text-primary">Lumen</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#cst" className="btn-cta px-5 py-2.5 text-sm">
              Inscreva-se
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
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
                Inscreva-se
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
