import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-10 md:py-14 bg-gradient-dark overflow-hidden">
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

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Você pode fechar essa página e voltar para a sua rotina de 14 horas de trabalho, brigando por preço, perdendo clientes para quem cobra mais barato...
          </p>

          <p className="text-xl text-foreground font-semibold max-w-3xl mx-auto">
            Ou você pode clicar no botão abaixo, entrar para a Comunidade de Contadores Digitais e se tornar o{" "}
            <span className="text-[hsl(var(--ccd-cyan))]">Arquiteto de Negócios</span> que tem liberdade de tempo, dinheiro e vida.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div className="space-y-3 text-muted-foreground">
              <p className="font-semibold text-[hsl(var(--ccd-red))] mb-4">Caminho 1: Não fazer nada</p>
              <p>→ Continuar trabalhando 14h/dia</p>
              <p>→ Brigar por preço todos os dias</p>
              <p>→ Perder clientes para quem cobra barato</p>
              <p>→ Ficar preso no operacional para sempre</p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-[hsl(var(--ccd-cyan))] mb-4">Caminho 2: Entrar no CCD</p>
              <p className="text-foreground">→ Faturar até 8x mais</p>
              <p className="text-foreground">→ Trabalhar menos com mais lucro</p>
              <p className="text-foreground">→ Ser tratado como consultor estratégico</p>
              <p className="text-foreground">→ Construir liberdade real de vida</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-2xl font-black text-foreground">Qual você escolhe?</p>
            <p className="text-lg text-muted-foreground italic">
              Clique no botão. Eu te espero do outro lado, na mesa dos campeões.
            </p>
          </div>

          <a
            href="#oferta"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-black rounded-xl bg-gradient-to-r from-[hsl(var(--ccd-cyan))] to-[hsl(var(--ccd-purple))] text-[hsl(var(--ccd-dark))] hover:brightness-110 transition-all animate-pulse-glow"
          >
            QUERO ENTRAR PARA A ELITE CONTÁBIL AGORA →
          </a>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Comunidade de Contadores Digitais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
