import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import lumenLogo from "@/assets/lumen-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Treinamento CST", href: "#cst" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Equipe", href: "#equipe" },
  ];

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={lumenLogo} alt="Lumen" className="w-10 h-10 object-contain" />
              <span className="text-xl font-semibold text-primary-foreground">Lumen</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Ciência e tecnologia transformando a saúde mental no Brasil desde 2010.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-amber/20 flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-amber transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contato@lumen.com.br"
                  className="text-primary-foreground/70 hover:text-amber transition-colors text-sm"
                >
                  contato@lumen.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+552131234567"
                  className="text-primary-foreground/70 hover:text-amber transition-colors text-sm"
                >
                  (21) 3123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Rio de Janeiro, RJ - Brasil
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Newsletter</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Receba novidades sobre saúde mental e ciência.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-amber transition-colors"
              />
              <button
                type="submit"
                className="btn-cta py-3 text-sm justify-center"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Lumen Saúde Mental e Tecnologia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
