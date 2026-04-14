import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle } from "lucide-react";

const traps = [
  {
    title: "Vender conformidade, não resultado",
    desc: "O cliente não quer saber se você apurou o imposto corretamente. Ele quer saber como ganhar mais dinheiro.",
  },
  {
    title: "Trabalhar por volume, não por valor",
    desc: "Quanto mais clientes, mais trabalho. Quanto mais trabalho, menos tempo. Quanto menos tempo, mais estresse. E a margem? Diminui.",
  },
  {
    title: "Ser um executor, não um estrategista",
    desc: "Você executa o que o governo obriga. Você não cria valor. Você apenas cumpre obrigações.",
  },
];

const IdentificationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              O Sistema Tradicional Não Falhou.{" "}
              <span className="text-[hsl(var(--ccd-red))]">Ele Funcionou Exatamente Como Foi Projetado:</span>{" "}
              <span className="text-gradient-warm">Para Te Manter Preso.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A contabilidade tradicional foi construída para servir o governo, não para enriquecer você. Você aprendeu a:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {traps.map((trap, i) => (
              <div
                key={trap.title}
                className={`bg-gradient-card rounded-2xl p-8 border border-[hsl(var(--ccd-red)/0.2)] hover:border-[hsl(var(--ccd-red)/0.4)] transition-all duration-300 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <AlertTriangle className="w-8 h-8 text-[hsl(var(--ccd-red))] mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{trap.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{trap.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Enquanto isso, sistemas de <span className="text-[hsl(var(--ccd-cyan))] font-semibold">R$ 99 por mês</span> fazem o que você faz em horas. O mercado não precisa mais de "geradores de guias".
            </p>
            <p className="text-2xl md:text-3xl font-black text-foreground">
              O mercado precisa de <span className="text-gradient-cyan">Arquitetos de Negócios</span>.
            </p>
            <p className="text-xl font-bold text-[hsl(var(--ccd-cyan))]">
              E é exatamente isso que você vai se tornar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
