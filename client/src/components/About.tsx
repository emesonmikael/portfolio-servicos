import { CheckCircle2 } from "lucide-react";

/**
 * About Section Component
 * Design: Elegância Corporativa Moderna
 * - Layout assimétrico com conteúdo à esquerda
 * - Lista de benefícios com ícones
 * - Tipografia hierárquica clara
 * - Whitespace generoso
 */

const highlights = [
  "Profissional certificado e experiente",
  "Soluções customizadas para cada cliente",
  "Atendimento rápido e eficiente",
  "Garantia de qualidade em todos os serviços",
  "Tecnologia de ponta e inovação",
  "Suporte contínuo após entrega",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
                Por Que Nos Escolher?
              </h2>
              <p className="text-lg text-muted-foreground font-lato leading-relaxed">
                Com mais de uma década de experiência em múltiplas áreas, oferecemos soluções integradas que combinam conhecimento técnico profundo com atendimento personalizado.
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-lato">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="space-y-1">
                <p className="text-3xl font-playfair font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground font-lato">Projetos Concluídos</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-playfair font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground font-lato">Clientes Satisfeitos</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-playfair font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground font-lato">Anos de Experiência</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-border space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-playfair font-bold text-foreground">
                  Expertise Diversificada
                </h3>
                <p className="text-muted-foreground font-lato leading-relaxed">
                  Nossa equipe domina múltiplas disciplinas, permitindo oferecer soluções holísticas que integram diferentes áreas de conhecimento.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <p className="font-playfair font-bold text-primary text-sm">Infraestrutura</p>
                  <p className="text-xs text-muted-foreground font-lato mt-1">Elétrica e TI</p>
                </div>
                <div className="bg-accent/5 rounded-lg p-4 border border-accent/10">
                  <p className="font-playfair font-bold text-accent text-sm">Desenvolvimento</p>
                  <p className="text-xs text-muted-foreground font-lato mt-1">Web e Blockchain</p>
                </div>
                <div className="bg-blue-500/5 rounded-lg p-4 border border-blue-500/10">
                  <p className="font-playfair font-bold text-blue-600 text-sm">Inovação</p>
                  <p className="text-xs text-muted-foreground font-lato mt-1">Smart Contracts</p>
                </div>
                <div className="bg-purple-500/5 rounded-lg p-4 border border-purple-500/10">
                  <p className="font-playfair font-bold text-purple-600 text-sm">Suporte</p>
                  <p className="text-xs text-muted-foreground font-lato mt-1">24/7 Disponível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
