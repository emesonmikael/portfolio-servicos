import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section Component
 * Design: Elegância Corporativa Moderna
 * - Imagem de fundo profissional
 * - Tipografia hierárquica (Playfair Display para título)
 * - Whitespace generoso
 * - CTA clara e destacada
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 md:py-32">
        {/* Conteúdo */}
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground leading-tight">
              Soluções Integradas para Seu Negócio
            </h1>
            <p className="text-lg text-muted-foreground font-lato leading-relaxed">
              Eletricidade, manutenção de computadores, desenvolvimento web, Web3, smart contracts e muito mais. Tudo em um único lugar, com profissionalismo e qualidade.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-lato font-medium group"
            >
              Explorar Serviços
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-lato font-medium"
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-2xl font-playfair font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground font-lato">Áreas de Especialidade</p>
            </div>
            <div>
              <p className="text-2xl font-playfair font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground font-lato">Satisfação Garantida</p>
            </div>
            <div>
              <p className="text-2xl font-playfair font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground font-lato">Suporte Disponível</p>
            </div>
          </div>
        </div>

        {/* Imagem Hero */}
        <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663507731884/7jkF3aZWqeRde9QyQP4VfR/hero-tech-services-jYpdezBDsbsRJVvW9mwrYk.webp"
            alt="Soluções Integradas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
