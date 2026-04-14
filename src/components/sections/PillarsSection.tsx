import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, TrendingUp, Users, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Posicionamento Premium",
    desc: "Saia da guerra de preços. Aprenda a se posicionar como consultor estratégico e atrair clientes que pagam pelo seu valor, não pelo seu tempo.",
    color: "var(--ccd-cyan)",
  },
  {
    icon: TrendingUp,
    title: "Modelo de Negócio Escalável",
    desc: "Transforme seu escritório de centro de custo em uma máquina de lucro. Precificação baseada em valor, não em horas.",
    color: "var(--ccd-orange)",
  },
  {
    icon: Lightbulb,
    title: "Contabilidade Consultiva",
    desc: "Domine as técnicas para entregar insights que empresários realmente precisam. Torne-se indispensável.",
    color: "var(--ccd-purple)",
  },
  {
    icon: Users,
    title: "Comunidade & Mentoria",
    desc: "Acesso direto a Anderson Maisse e 2.000+ contadores que já fizeram a transição. Networking que gera resultados.",
    color: "var(--ccd-cyan)",
  },
];

const PillarsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pilares" ref={ref} className="relative py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full border border-[hsl(var(--ccd-cyan)/0.3)] bg-[hsl(var(--ccd-cyan)/0.05)] text-[hsl(var(--ccd-cyan))] text-sm font-semibold tracking-widest uppercase mb-6">
            O MÉTODO CCD
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Os 4 Pilares da{" "}
            <span className="text-gradient-cyan">Transformação</span>
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
              <div className={`w-14 h-14 rounded-2xl bg-[hsl(${pillar.color}/0.1)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <pillar.icon className={`w-7 h-7 text-[hsl(${pillar.color})]`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
