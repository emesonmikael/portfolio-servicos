import { Card } from "@/components/ui/card";
import { Zap, Cpu, Code, Coins, FileText, Wrench } from "lucide-react";

/**
 * Services Section Component
 * Design: Elegância Corporativa Moderna
 * - Grid 3 colunas com cards elegantes
 * - Ícones minimalistas
 * - Descrições claras e concisas
 * - Hover effects sutis
 */

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
}

const services: Service[] = [
  {
    id: "electrical",
    title: "Serviços Elétricos",
    description: "Instalação, manutenção e reparo de sistemas elétricos residenciais e comerciais com segurança e eficiência.",
    icon: <Zap className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663507731884/7jkF3aZWqeRde9QyQP4VfR/services-electrical-mAjsubnSK6uNX7uVxXYhQ2.webp",
    color: "from-blue-50 to-blue-100",
  },
  {
    id: "it-maintenance",
    title: "Manutenção de Computadores",
    description: "Diagnóstico, reparo e otimização de computadores, notebooks e periféricos com tecnologia de ponta.",
    icon: <Cpu className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663507731884/7jkF3aZWqeRde9QyQP4VfR/services-tech-8SW7L38H36aB3MnGQQgUcm.webp",
    color: "from-emerald-50 to-emerald-100",
  },
  {
    id: "web-dev",
    title: "Desenvolvimento Web",
    description: "Criação de websites e aplicações web modernas, responsivas e otimizadas para conversão.",
    icon: <Code className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663507731884/7jkF3aZWqeRde9QyQP4VfR/services-web-dev-L3aNZCuDtygUYghTaSjHUG.webp",
    color: "from-purple-50 to-purple-100",
  },
  {
    id: "web3",
    title: "Web3 e Blockchain",
    description: "Desenvolvimento de soluções blockchain, smart contracts e aplicações descentralizadas.",
    icon: <Coins className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663507731884/7jkF3aZWqeRde9QyQP4VfR/services-web3-GLWcYjGo3pWs9fwsm49WRK.webp",
    color: "from-teal-50 to-teal-100",
  },
  {
    id: "smart-contracts",
    title: "Smart Contracts",
    description: "Criação e auditoria de contratos inteligentes seguros e eficientes em múltiplas blockchains.",
    icon: <FileText className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663507731884/7jkF3aZWqeRde9QyQP4VfR/services-web3-GLWcYjGo3pWs9fwsm49WRK.webp",
    color: "from-orange-50 to-orange-100",
  },
  {
    id: "token-creation",
    title: "Criação de Tokens",
    description: "Desenvolvimento de tokens ERC-20, ERC-721 e outros padrões com funcionalidades customizadas.",
    icon: <Wrench className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663507731884/7jkF3aZWqeRde9QyQP4VfR/services-web3-GLWcYjGo3pWs9fwsm49WRK.webp",
    color: "from-pink-50 to-pink-100",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground font-lato leading-relaxed">
            Oferecemos uma gama completa de serviços profissionais para atender todas as suas necessidades, desde infraestrutura elétrica até soluções blockchain de ponta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border bg-white"
            >
              {/* Service Image */}
              <div className={`h-48 bg-gradient-to-br ${service.color} overflow-hidden relative`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Service Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground font-lato leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/5584999558001?text=Olá%20Emeson!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-lato font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-2 pt-2"
                >
                  Saiba mais
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
