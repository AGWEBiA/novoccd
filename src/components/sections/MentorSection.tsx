import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import andersonImg from "@/assets/anderson-maisse.webp";

const MentorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-10 md:py-14 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Conheça seu <span className="text-gradient-cyan">mentor</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          <div className={`lg:col-span-2 flex justify-center ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(var(--ccd-cyan)/0.3)] to-[hsl(var(--ccd-orange)/0.3)] rounded-3xl blur-2xl" />
              <img
                src={andersonImg}
                alt="Anderson Maisse, criador da metodologia CCD"
                loading="lazy"
                width={1024}
                height={1024}
                className="relative rounded-3xl border-2 border-[hsl(var(--ccd-cyan)/0.3)] shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>

          <div className={`lg:col-span-3 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <p>
              De <span className="text-foreground font-bold">80 clientes em 2018</span> para mais de{" "}
              <span className="text-[hsl(var(--ccd-cyan))] font-bold">1.200 em 2024</span>, Anderson Maisse transformou a AM Contabilidade Online em um dos{" "}
              <span className="text-foreground font-bold">2% maiores escritórios contábeis do Brasil</span>, com faturamento anual próximo a{" "}
              <span className="text-[hsl(var(--ccd-orange))] font-bold">R$ 5 milhões</span> e margem líquida de{" "}
              <span className="text-[hsl(var(--ccd-orange))] font-bold">40%</span>.
            </p>
            <p>
              Criador da metodologia <span className="text-foreground font-bold">Contabilidade Digital (CCD)</span>, já impactou mais de{" "}
              <span className="text-[hsl(var(--ccd-cyan))] font-bold">2.500 alunos</span>,{" "}
              <span className="text-[hsl(var(--ccd-cyan))] font-bold">300 contadores mentorados</span> e{" "}
              <span className="text-[hsl(var(--ccd-cyan))] font-bold">2.000 profissionais</span> em palestras pelo país.
            </p>
            <p>
              Anderson prova que o modelo digital permite{" "}
              <span className="text-foreground font-bold">crescer mais, lucrar mais e conquistar liberdade.</span>
            </p>
            <p className="text-foreground font-semibold border-l-4 border-[hsl(var(--ccd-cyan))] pl-4">
              Quem aprende o método passa a ser protagonista de um negócio lucrativo, previsível e escalável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
