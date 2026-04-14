import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Gift, Clock, Zap } from "lucide-react";

const bonuses = [
  {
    icon: Gift,
    title: "Kit Captação de Clientes Premium",
    desc: "Templates de propostas, scripts de vendas e funis de captação prontos para usar.",
    value: "R$ 1.500",
  },
  {
    icon: Zap,
    title: "Masterclass: IA Para Contadores",
    desc: "Como usar inteligência artificial para automatizar processos e entregar mais valor.",
    value: "R$ 2.000",
  },
  {
    icon: Clock,
    title: "Sessão Estratégica Individual",
    desc: "1 hora com Anderson Maisse para montar seu plano de ação personalizado.",
    value: "R$ 3.000",
  },
];

const BonusSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Mas Espera...{" "}
            <span className="text-gradient-cyan">Tem Mais</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-4">Bônus exclusivos para quem entrar agora</p>
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
      </div>
    </section>
  );
};

export default BonusSection;
