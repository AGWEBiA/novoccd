import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className={`max-w-3xl mx-auto text-center space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="w-24 h-24 rounded-full bg-[hsl(var(--ccd-cyan)/0.1)] border-2 border-[hsl(var(--ccd-cyan)/0.3)] flex items-center justify-center mx-auto animate-float">
            <Shield className="w-12 h-12 text-[hsl(var(--ccd-cyan))]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black">
            Risco <span className="text-gradient-cyan">Zero</span>. Aceleração{" "}
            <span className="text-gradient-cyan">Garantida</span>.
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Você tem <strong className="text-foreground">7 dias</strong> para acessar todo o conteúdo, participar da comunidade,
            assistir às mentorias. Se por qualquer motivo sentir que não é para você,
            basta solicitar o reembolso e devolvemos <strong className="text-foreground">100% do seu investimento</strong>.
            Sem perguntas, sem burocracia.
          </p>

          <div className="inline-block px-6 py-3 rounded-full border border-[hsl(var(--ccd-cyan)/0.3)] bg-[hsl(var(--ccd-cyan)/0.05)] text-[hsl(var(--ccd-cyan))] font-semibold">
            Garantia incondicional de 7 dias
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
