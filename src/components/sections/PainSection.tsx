import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, TrendingDown, DollarSign, Frown } from "lucide-react";

const painPoints = [
  { icon: Clock, label: "14h/dia", desc: "trabalhando sem parar" },
  { icon: TrendingDown, label: "Desvalorizado", desc: "clientes acham caro" },
  { icon: DollarSign, label: "Renda baixa", desc: "para tanta responsabilidade" },
  { icon: Frown, label: "2h/dia", desc: "com a família" },
];

const PainSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className={`lg:w-1/2 space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Você Está Cansado de Ser{" "}
              <span className="text-gradient-warm">Invisível</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Você estudou anos para isso. Passou no CRC. Abriu seu escritório com sonhos de liberdade financeira e tempo com a família. Mas a realidade foi diferente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Você virou um <strong className="text-foreground">funcionário mal pago da sua própria empresa</strong>. Trabalha mais que qualquer gerente de banco, ganha menos que muitos deles e, pior: ninguém valoriza seu trabalho.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              O cliente só te liga para reclamar de imposto ou pedir desconto. O governo muda uma regra e você corre atrás. Você é o primeiro a chegar e o último a sair. Não vê seus filhos crescerem.
            </p>
            <p className="text-xl font-bold text-[hsl(var(--ccd-cyan))]">
              Você não é ruim em contabilidade. Você está jogando o jogo errado.
            </p>
          </div>

          <div className={`lg:w-1/2 grid grid-cols-2 gap-6 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            {painPoints.map((item, i) => (
              <div
                key={item.label}
                className={`bg-gradient-card rounded-2xl p-6 border border-[hsl(var(--ccd-red)/0.2)] hover:border-[hsl(var(--ccd-red)/0.5)] transition-all duration-300`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <item.icon className="w-8 h-8 text-[hsl(var(--ccd-red))] mb-3" />
                <div className="text-2xl font-bold text-[hsl(var(--ccd-red))]">{item.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
