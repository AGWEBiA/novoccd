import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Mas eu não tenho tempo para fazer um curso",
    answer:
      "Não é um curso. É uma ferramenta que você usa quando precisa. Você acessa quando quer. Não tem prazos. Não tem aulas ao vivo obrigatórias. Você controla o ritmo.",
  },
  {
    question: "Sou recém-formado/iniciante. Serve para mim?",
    answer:
      "Serve perfeitamente. Na verdade, é melhor. Você vai começar do jeito certo, sem os vícios da contabilidade tradicional. Você vai estruturar um negócio escalável desde o dia zero.",
  },
  {
    question: "E se eu não conseguir aplicar?",
    answer:
      "A comunidade está lá para isso. Você não está sozinho. Tem 2.000+ contadores que já resolveram o que você está enfrentando. A resposta está a um post de distância.",
  },
  {
    question: "Quanto tempo até eu ver resultados?",
    answer:
      "Nossos membros veem os primeiros resultados em 4 semanas. Alguns em 2 semanas. Depende de quanto você se dedica. Mas a maioria vê movimento rápido.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Perguntas <span className="text-gradient-cyan">Frequentes</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-gradient-card rounded-2xl border border-border px-6 data-[state=open]:border-[hsl(var(--ccd-cyan)/0.3)]"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[hsl(var(--ccd-cyan))] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
