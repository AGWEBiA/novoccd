import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const priceItems = [
  { label: "Consultoria de Vendas", value: "R$ 5.000 a R$ 10.000" },
  { label: "Consultoria de Processos", value: "R$ 3.000 a R$ 7.000" },
  { label: "Consultoria de Equipes", value: "R$ 4.000 a R$ 8.000" },
  { label: "Consultoria de Escala", value: "R$ 5.000 a R$ 10.000" },
  
  { label: "Comunidade e Networking", value: "R$ 2.000 a R$ 5.000/ano" },
];

const PriceAnchorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 leading-tight">
            Se Você Fosse Contratar Tudo Isso{" "}
            <span className="text-gradient-cyan">Separadamente</span>, Quanto Pagaria?
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Deixa eu quebrar isso para você:
          </p>

          <div className="space-y-4 mb-12">
            {priceItems.map((item, i) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-4 border-b border-border"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-muted-foreground">{item.label}</span>
                <span className="text-[hsl(var(--ccd-orange))] font-bold text-lg">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              Total: <span className="text-[hsl(var(--ccd-orange))]">R$ 20.000 a R$ 43.000</span>
            </div>
            <p className="text-muted-foreground text-lg">
              E você ainda estaria sozinho. Sem comunidade. Sem suporte constante. Sem acesso a outras pessoas que já resolveram seus problemas.
            </p>
            <div className="text-4xl md:text-5xl font-black text-gradient-warm">
              Mas você não vai pagar nada disso.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceAnchorSection;
