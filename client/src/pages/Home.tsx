import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Design: Elegância Corporativa Moderna
 * 
 * Estrutura:
 * 1. Header - Navegação fixa
 * 2. Hero - Seção de impacto com CTA
 * 3. Services - Grade de serviços com imagens
 * 4. About - Informações sobre a empresa
 * 5. CTA - Chamada para ação com contato
 * 6. Footer - Rodapé com links e informações
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
