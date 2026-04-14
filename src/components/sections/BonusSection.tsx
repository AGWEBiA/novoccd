import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, FileText, MessageSquare } from "lucide-react";

const bonuses = [
  {
    icon: Search,
    title: "Análise de Perfil Contábil",
    desc: "Uma análise completa do seu escritório para identificar exatamente onde você está deixando dinheiro na mesa e qual é o seu maior ponto de alavancagem.",
    value: "R$ 1.500",
  },
  {
    icon: FileText,
    title: "Masterclass: Os 5 Scripts de Vendas Que Convertem",
    desc: "Os 5 scripts que nossos membros usam para fechar clientes High Ticket. Prontos para usar. Prontos para copiar.",
    value: "R$ 2.000",
  },
  {
    icon: MessageSquare,
    title: "Acesso ao Grupo VIP de WhatsApp",
    desc: "Acesso ao grupo exclusivo onde os contadores mais avançados trocam estratégias e resolvem problemas em tempo real.",
    value: "R$ 1.000",
  },
];

const BonusSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Mas Espera...{" "}
            <span className="text-gradient-cyan">Tem Mais.</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Para quem entrar AGORA, você recebe 3 bônus exclusivos que desaparecem assim que a oferta fecha:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bonuses.map((bonus, i) => (
            <div
              key={bonus.title}
              className={`bg-gradient-card rounded-2xl p-8 border border-[hsl(var(--ccd-orange)/0.2)] hover:border-[hsl(var(--ccd-orange)/0.5)] transition-all duration-300 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <bonus.icon className="w-10 h-10 text-[hsl(var(--ccd-orange))] mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">{bonus.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{bonus.desc}</p>
              <div className="text-[hsl(var(--ccd-orange))] font-bold text-lg glow-orange inline-block px-3 py-1 rounded-lg bg-[hsl(var(--ccd-orange)/0.1)]">
                Valor: {bonus.value}
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-block px-6 py-3 rounded-full border border-[hsl(var(--ccd-orange)/0.3)] bg-[hsl(var(--ccd-orange)/0.05)]">
            <span className="text-[hsl(var(--ccd-orange))] font-bold text-xl">Total em Bônus: R$ 4.500</span>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            Esses bônus desaparecem assim que a oferta fecha. Essa oportunidade é limitada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
