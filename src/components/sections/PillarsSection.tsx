import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, TrendingUp, Settings, Globe, Brain } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Vendas High Ticket",
    subtitle: "De 'Gerador de Guias' para 'Vendedor de Valor'",
    desc: "Um contador que vende preço ganha R$ 500 por cliente. Um contador que vende valor ganha R$ 5.000. Mesma empresa. Mesma complexidade.",
    items: [
      "Identificar clientes que têm dinheiro e querem pagar bem",
      "Apresentar serviços de forma que o cliente veja valor",
      "Fechar contratos de alto valor sem competir por preço",
      "Aumentar margem de lucro em até 500%",
    ],
    color: "var(--ccd-cyan)",
  },
  {
    icon: TrendingUp,
    title: "Engenharia de Equipes",
    subtitle: "De Executor para Líder",
    desc: "Enquanto você estiver fazendo o operacional, você é um funcionário. Enquanto você tiver uma equipe fazendo o operacional, você é um empresário.",
    items: [
      "Contratar as pessoas certas",
      "Treinar equipe para executar melhor que você",
      "Delegar sem perder o controle",
      "Sair do operacional e focar no estratégico",
    ],
    result: "Mais tempo. Mais dinheiro. Mais vida.",
    color: "var(--ccd-orange)",
  },
  {
    icon: Settings,
    title: "Fábrica de Processos",
    subtitle: "De Manual para Automático",
    desc: "Processos manuais = Erros. Erros = Retrabalho. Retrabalho = Perda de tempo e dinheiro.",
    items: [
      "Mapear todos os processos do escritório",
      "Automatizar o que pode ser automatizado",
      "Eliminar retrabalho que consome 40% do tempo",
      "Reduzir erros operacionais em até 90%",
    ],
    result: "Mais eficiência. Menos caos. Mais lucro.",
    color: "var(--ccd-purple)",
  },
  {
    icon: Globe,
    title: "Escala Nacional",
    subtitle: "De Local para Nacional",
    desc: "Por que se limitar à sua cidade? A contabilidade digital não tem fronteiras geográficas.",
    items: [
      "Atender clientes de todo o Brasil",
      "Crescer sem aumentar complexidade",
      "Dominar nichos lucrativos em diferentes regiões",
      "Criar negócio previsível e escalável",
    ],
    result: "Faturamento infinito. Negócio que cresce sozinho.",
    color: "var(--ccd-cyan)",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    subtitle: "De Trabalho Manual para Automação Inteligente",
    desc: "IA não substitui o contador. IA potencializa o contador. Automatize tarefas repetitivas, entregue análises avançadas e atenda mais clientes com a mesma equipe.",
    items: [
      "Agentes de IA para classificação e conciliação automática",
      "Sistemas de IA para análise fiscal e tributária em segundos",
      "Automação de relatórios gerenciais personalizados",
      "Chatbots inteligentes para atendimento ao cliente 24/7",
    ],
    result: "Mais produtividade. Menos trabalho operacional. Clientes mais satisfeitos.",
    color: "var(--ccd-purple)",
  },
];

const PillarsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pilares" ref={ref} className="relative py-10 md:py-14 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full border border-[hsl(var(--ccd-cyan)/0.3)] bg-[hsl(var(--ccd-cyan)/0.05)] text-[hsl(var(--ccd-cyan))] text-sm font-semibold tracking-widest uppercase mb-6">
            SUA JORNADA DE TRANSFORMAÇÃO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Os 5 Pilares da{" "}
            <span className="text-gradient-cyan">Aceleração</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group bg-gradient-card rounded-3xl p-8 border border-[hsl(${pillar.color}/0.2)] hover:border-[hsl(${pillar.color}/0.5)] hover:glow-cyan transition-all duration-500 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              } ${i % 2 === 1 ? "md:translate-y-8" : ""}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-[hsl(${pillar.color}/0.1)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <pillar.icon className={`w-7 h-7 text-[hsl(${pillar.color})]`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{pillar.title}</h3>
              <p className={`text-sm font-semibold text-[hsl(${pillar.color})] mb-3`}>{pillar.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{pillar.desc}</p>
              <ul className="space-y-2 mb-4">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className={`text-[hsl(${pillar.color})] mt-0.5`}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {pillar.result && (
                <p className={`text-sm font-bold text-[hsl(${pillar.color})]`}>
                  Resultado: {pillar.result}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
