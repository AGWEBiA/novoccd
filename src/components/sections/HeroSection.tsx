import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative lg:min-h-screen flex items-center overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-[hsl(187_100%_50%/0.05)] blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-[hsl(270_70%_55%/0.05)] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className={`lg:w-[60%] space-y-6 md:space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="inline-block px-4 py-2 rounded-full border border-[hsl(var(--ccd-cyan)/0.3)] bg-[hsl(var(--ccd-cyan)/0.05)]">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[hsl(var(--ccd-cyan))]">
                COMUNIDADE DE CONTADORES DIGITAIS
              </span>
            </div>

            <h1 className="text-[2.25rem] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight">
              <span className="text-foreground">A Contabilidade</span>
              <br />
              <span className="text-foreground">Tradicional </span>
              <span className="text-gradient-warm">Morreu.</span>
              <br />
              <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl">Você Ainda Está Enterrado Nela?</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              Enquanto a maioria dos contadores briga por preço e trabalha 14 horas por dia, um grupo seleto está faturando até{" "}
              <span className="text-[hsl(var(--ccd-cyan))] font-semibold">8x mais</span>, trabalhando menos e sendo tratado como verdadeiros consultores.
            </p>

            <p className="text-base md:text-lg text-[hsl(var(--ccd-cyan))] font-semibold">
              São mais de R$ 15.000.000 milhões de reais de resultados gerados por membros do CCD.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="#oferta"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-bold rounded-xl bg-[hsl(var(--ccd-cyan))] text-[hsl(var(--ccd-dark))] hover:brightness-110 transition-all animate-pulse-glow text-center leading-tight"
              >
                QUERO SAIR DO OPERACIONAL AGORA
              </a>
              <a
                href="#pilares"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold rounded-xl border-2 border-[hsl(var(--ccd-cyan)/0.4)] text-foreground hover:bg-[hsl(var(--ccd-cyan)/0.1)] transition-all"
              >
                Conheça o Método
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Acesso imediato • 17 módulos de aceleração • Comunidade de 2.000+ contadores • Garantia de 7 dias
            </p>
          </div>

          <div className={`w-full lg:w-[40%] ${isVisible ? "animate-fade-in-right stagger-2" : "opacity-0"}`}>
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="animate-float">
                <div className="relative bg-gradient-card rounded-3xl p-6 sm:p-8 border border-[hsl(var(--ccd-cyan)/0.2)] glow-cyan">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className="text-6xl sm:text-7xl md:text-8xl font-black text-gradient-cyan">8x</div>
                    <div className="text-sm sm:text-base text-foreground font-semibold px-2">Mais faturamento é a média dos contadores que fazem parte do CCD</div>
                    <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--ccd-cyan)/0.5)] to-transparent" />
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(var(--ccd-cyan))]">
                      R$ 15.000.000+
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground">em resultados gerados por membros do CCD</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-[hsl(var(--ccd-cyan)/0.2)] rounded-xl rotate-12 animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[hsl(var(--ccd-orange)/0.2)] rounded-full animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
