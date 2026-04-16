import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-10 md:py-14 bg-gradient-dark">
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
            Eu sei que você pode estar pensando: "Será que isso funciona para mim?"
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ótima pergunta. E é por isso que eu vou tirar todo o risco da sua decisão.
          </p>

          <p className="text-xl text-foreground font-bold">
            Você tem 7 dias de garantia incondicional.
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Clique no botão abaixo. Faça sua inscrição. Entre na plataforma. Baixe os scripts. Acesse a comunidade.
            Assista às mentorias. Converse com os membros. Se em 7 dias você achar que o CCD não é a ferramenta certa
            para escalar o seu escritório, você aperta um botão e eu devolvo{" "}
            <strong className="text-foreground">cada centavo do seu dinheiro</strong>.
          </p>

          <p className="text-xl font-bold text-[hsl(var(--ccd-cyan))]">
            Sem perguntas. Sem burocracia. Sem ressentimentos.
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
