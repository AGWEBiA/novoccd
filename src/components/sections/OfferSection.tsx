import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OfferSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="oferta" ref={ref} className="relative py-24 md:py-32 bg-gradient-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[hsl(187_100%_50%/0.03)] blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-2xl mx-auto ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
          <div className="bg-gradient-card rounded-3xl p-10 md:p-14 border-2 border-[hsl(var(--ccd-cyan)/0.3)] glow-cyan-intense text-center space-y-8">
            <span className="inline-block px-4 py-2 rounded-full border border-[hsl(var(--ccd-cyan)/0.3)] bg-[hsl(var(--ccd-cyan)/0.05)] text-[hsl(var(--ccd-cyan))] text-sm font-semibold tracking-widest uppercase">
              OFERTA ESPECIAL
            </span>

            <div>
              <div className="text-2xl text-muted-foreground line-through mb-2">R$ 3.997,00</div>
              <div
                className="text-6xl md:text-7xl lg:text-8xl font-black text-[hsl(var(--ccd-cyan))] leading-none"
                style={{ textShadow: "0 0 40px hsl(187 100% 50% / 0.4)" }}
              >
                R$ 1.897
              </div>
              <div className="text-xl text-muted-foreground mt-3">
                ou <span className="text-foreground font-bold">12x de R$ 189,70</span>
              </div>
            </div>

            <a
              href="https://pay.hotmart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 rounded-xl text-xl font-black bg-gradient-to-r from-[hsl(var(--ccd-cyan))] to-[hsl(var(--ccd-purple))] text-[hsl(var(--ccd-dark))] hover:brightness-110 transition-all animate-pulse-glow"
            >
              ENTRAR AGORA NO CCD →
            </a>

            <p className="text-sm text-muted-foreground">
              Pagamento seguro • Acesso imediato • 7 dias de garantia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
