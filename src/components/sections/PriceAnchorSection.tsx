import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const priceItems = [
  { label: "17 Módulos de Contabilidade Consultiva", value: "R$ 5.000" },
  { label: "Mentorias ao Vivo Semanais", value: "R$ 3.000" },
  { label: "Ferramentas e Templates", value: "R$ 2.000" },
  { label: "Comunidade e Networking", value: "R$ 4.000" },
  { label: "Certificação CCD", value: "R$ 1.500" },
  { label: "Suporte Dedicado", value: "R$ 2.000" },
];

const PriceAnchorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const total = "R$ 17.500";

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 leading-tight">
            Se você comprasse cada <span className="text-gradient-cyan">componente separadamente</span>...
          </h2>

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
              Total: <span className="text-[hsl(var(--ccd-orange))]">{total}</span>
            </div>
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
