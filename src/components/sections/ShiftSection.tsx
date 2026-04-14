import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const ShiftSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[hsl(187_100%_50%/0.03)] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full border border-[hsl(var(--ccd-cyan)/0.3)] bg-[hsl(var(--ccd-cyan)/0.05)] text-[hsl(var(--ccd-cyan))] text-sm font-semibold tracking-widest uppercase">
            A VIRADA
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            O Contador Que{" "}
            <span className="text-gradient-cyan">Fatura 12x Mais</span>
            <br />
            Não Trabalha Mais Horas...
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ele trabalha <strong className="text-foreground">diferente</strong>. Parou de vender conformidade
            e começou a vender <span className="text-[hsl(var(--ccd-cyan))] font-semibold">resultado</span>.
          </p>
        </div>

        <div className={`mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto ${isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"}`}>
          {/* Before */}
          <div className="bg-gradient-card rounded-3xl p-8 border border-[hsl(var(--ccd-red)/0.2)] relative">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[hsl(var(--ccd-red)/0.1)] text-[hsl(var(--ccd-red))] text-xs font-bold uppercase">Antes</div>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-center gap-2"><span className="text-[hsl(var(--ccd-red))]">✕</span> Cobra R$ 500/mês por empresa</p>
              <p className="flex items-center gap-2"><span className="text-[hsl(var(--ccd-red))]">✕</span> Trabalha 14h/dia</p>
              <p className="flex items-center gap-2"><span className="text-[hsl(var(--ccd-red))]">✕</span> Cliente reclama do preço</p>
              <p className="flex items-center gap-2"><span className="text-[hsl(var(--ccd-red))]">✕</span> Zero diferenciação</p>
              <p className="flex items-center gap-2"><span className="text-[hsl(var(--ccd-red))]">✕</span> Medo de ser substituído por IA</p>
            </div>
          </div>

          {/* After */}
          <div className="bg-gradient-card rounded-3xl p-8 border border-[hsl(var(--ccd-cyan)/0.3)] glow-cyan relative">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[hsl(var(--ccd-cyan)/0.1)] text-[hsl(var(--ccd-cyan))] text-xs font-bold uppercase">Depois</div>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-center gap-2"><span className="text-[hsl(var(--ccd-cyan))]">✓</span> <span className="text-foreground">Cobra R$ 3.000 a R$ 10.000/mês</span></p>
              <p className="flex items-center gap-2"><span className="text-[hsl(var(--ccd-cyan))]">✓</span> <span className="text-foreground">Trabalha 6-8h com qualidade</span></p>
              <p className="flex items-center gap-2"><span className="text-[hsl(var(--ccd-cyan))]">✓</span> <span className="text-foreground">Cliente valoriza e indica</span></p>
              <p className="flex items-center gap-2"><span className="text-[hsl(var(--ccd-cyan))]">✓</span> <span className="text-foreground">Posicionado como autoridade</span></p>
              <p className="flex items-center gap-2"><span className="text-[hsl(var(--ccd-cyan))]">✓</span> <span className="text-foreground">IA como aliada, não ameaça</span></p>
            </div>
          </div>
        </div>

        <div className={`mt-12 text-center ${isVisible ? "animate-fade-in-up stagger-4" : "opacity-0"}`}>
          <a href="#pilares" className="inline-flex items-center gap-2 text-[hsl(var(--ccd-cyan))] font-semibold text-lg hover:gap-4 transition-all">
            Descubra como <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;
