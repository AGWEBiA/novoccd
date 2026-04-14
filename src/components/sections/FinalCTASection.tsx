import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[hsl(0_0%_2%)] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[hsl(187_100%_50%/0.05)] blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center space-y-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
            A Escolha é Sua.
            <br />
            <span className="text-gradient-cyan">E É Agora.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div className="space-y-3 text-muted-foreground">
              <p className="font-semibold text-foreground mb-4">Caminho 1: Não fazer nada</p>
              <p>→ Continuar trabalhando 14h/dia</p>
              <p>→ Cobrar R$ 500 e ouvir que é caro</p>
              <p>→ Ser substituído por IA em 3 anos</p>
              <p>→ Perder o trem da transformação</p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-[hsl(var(--ccd-cyan))] mb-4">Caminho 2: Entrar no CCD</p>
              <p className="text-foreground">→ Faturar 12x mais em meses</p>
              <p className="text-foreground">→ Trabalhar menos com mais lucro</p>
              <p className="text-foreground">→ Ser tratado como consultor</p>
              <p className="text-foreground">→ Construir liberdade real</p>
            </div>
          </div>

          <a
            href="#oferta"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-black rounded-xl bg-gradient-to-r from-[hsl(var(--ccd-cyan))] to-[hsl(var(--ccd-purple))] text-[hsl(var(--ccd-dark))] hover:brightness-110 transition-all animate-pulse-glow"
          >
            QUERO ENTRAR NO CCD AGORA →
          </a>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CCD - Comunidade de Contadores Digitais por Anderson Maisse. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
