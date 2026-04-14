import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, Wrench, Users } from "lucide-react";

const pillarsData = [
  {
    icon: Zap,
    number: "1",
    title: "O Método Validado",
    desc: "O passo a passo exato que já foi testado e aprovado por mais de 2.000 contadores. Não é teoria. É prática.",
    items: [
      "Precificar seus serviços de forma que o cliente veja valor",
      "Captar clientes qualificados que não pedem desconto",
      "Demitir os clientes 'sanguessugas' que sugam sua energia",
      "Estruturar um negócio que funciona sem você presente 24/7",
      "Escalar nacionalmente, atendendo clientes de todo o Brasil",
    ],
  },
  {
    icon: Wrench,
    number: "2",
    title: "A Ferramenta de Aceleração",
    desc: "Nós não te deixamos sozinho. Você recebe tudo pronto. É literalmente copiar, colar e lucrar.",
    items: [
      "Scripts de vendas que convertem",
      "Modelos de contratos profissionais",
      "Planilhas de precificação",
      "Processos mapeados e automações",
      "Templates de apresentação para clientes",
    ],
  },
  {
    icon: Users,
    number: "3",
    title: "A Comunidade de Elite",
    desc: "Você nunca mais vai tomar uma decisão sozinho. O networking aqui gera negócios todos os dias.",
    items: [
      "Travou em um processo? A comunidade resolve em minutos",
      "Precisa de estratégia? Tem alguém que já fez",
      "Parcerias, indicações e até fusões pela comunidade",
      "Resoluções de problemas em tempo real",
      "Suporte constante 24/7",
    ],
  },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-4xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full border border-[hsl(var(--ccd-cyan)/0.3)] bg-[hsl(var(--ccd-cyan)/0.05)] text-[hsl(var(--ccd-cyan))] text-sm font-semibold tracking-widest uppercase mb-6">
            A SOLUÇÃO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Comunidade de Contadores Digitais:{" "}
            <span className="text-gradient-cyan">A Ferramenta de Aceleração</span> Que Transforma Contadores em Consultores em{" "}
            <span className="text-gradient-warm">4 Semanas</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            O CCD não é um curso. Cursos ensinam teoria. Você não precisa de mais teoria. O CCD é um{" "}
            <strong className="text-foreground">ecossistema vivo de implementação</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillarsData.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`bg-gradient-card rounded-3xl p-8 border border-[hsl(var(--ccd-cyan)/0.2)] hover:border-[hsl(var(--ccd-cyan)/0.5)] hover:glow-cyan transition-all duration-500 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--ccd-cyan)/0.1)] flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-[hsl(var(--ccd-cyan))]" />
                </div>
                <span className="text-4xl font-black text-[hsl(var(--ccd-cyan)/0.3)]">{pillar.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{pillar.desc}</p>
              <ul className="space-y-2">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-[hsl(var(--ccd-cyan))] mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
