import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

/**
 * CTA Section Component
 * Design: Elegância Corporativa Moderna
 * - Fundo com gradiente elegante
 * - Tipografia grande e impactante
 * - Múltiplas opções de contato
 * - Botões destacados
 */

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
              Pronto para Começar com Emeson Mikael?
            </h2>
            <p className="text-lg text-white/90 font-lato leading-relaxed">
              Entre em contato conosco hoje mesmo e descubra como podemos transformar seus projetos em realidade.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
            <a
              href="https://wa.me/5584999558001"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 border border-white/30"
            >
              <Phone className="w-5 h-5 text-white" />
              <div className="text-left">
                <p className="text-sm text-white/80 font-lato">WhatsApp</p>
                <p className="text-white font-lato font-medium">(84) 99955-8001</p>
              </div>
            </a>

            <a
              href="https://wa.me/5584999558001"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 border border-white/30"
            >
              <Mail className="w-5 h-5 text-white" />
              <div className="text-left">
                <p className="text-sm text-white/80 font-lato">Localização</p>
                <p className="text-white font-lato font-medium">Marcelino Vieira - RN</p>
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/5584999558001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-lato font-medium group"
              >
                Falar com Emeson
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://wa.me/5584999558001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-lato font-medium"
              >
                Orçamento
              </Button>
            </a>
          </div>

          {/* Trust Message */}
          <p className="text-sm text-white/70 font-lato pt-4">
            Sítio Vaca Morta, Marcelino Vieira - RN | Resposta rápida via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
