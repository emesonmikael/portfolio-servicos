import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

/**
 * Footer Component
 * Design: Elegância Corporativa Moderna
 * - Layout em colunas com informações organizadas
 * - Links de navegação
 * - Redes sociais
 * - Copyright
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-playfair font-bold">P</span>
              </div>
              <span className="font-playfair font-bold text-lg">Portfolio</span>
            </div>
            <p className="text-sm text-white/70 font-lato leading-relaxed">
              Soluções integradas para seu negócio. Eletricidade, TI, Web e Blockchain.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-white">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors font-lato">
                  Serviços Elétricos
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors font-lato">
                  Manutenção de TI
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors font-lato">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors font-lato">
                  Web3 e Blockchain
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-white">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/70 hover:text-accent transition-colors font-lato">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors font-lato">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors font-lato">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors font-lato">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-white">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@portfolio.com" className="text-white/70 hover:text-accent transition-colors font-lato">
                  contato@portfolio.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+5511999999999" className="text-white/70 hover:text-accent transition-colors font-lato">
                  (11) 9 9999-9999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 font-lato">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-white/60 font-lato">
            &copy; {currentYear} Portfolio de Serviços. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
