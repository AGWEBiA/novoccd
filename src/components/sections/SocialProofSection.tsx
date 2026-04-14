import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { Star, Users, CheckCircle, MessageCircle } from "lucide-react";

const testimonials = [
  { name: "João", role: "Escritório Contábil", text: "Saí de R$ 5.000 para R$ 50.000 de faturamento mensal em 6 meses. O CCD mudou completamente meu negócio." },
  { name: "Maria", role: "Contadora Consultiva", text: "Demiti 30% dos meus clientes 'sanguessugas' e aumentei o faturamento em 40%. Trabalho menos e ganho mais." },
  { name: "Pedro", role: "Escritório Digital", text: "Estruturei uma equipe e saí do operacional em 4 meses. Agora foco no estratégico e meu negócio cresce sozinho." },
  { name: "Ana", role: "Contadora - SP", text: "Dominei 3 nichos diferentes e triplicei meus clientes. O networking na comunidade é incrível." },
  { name: "Lucas", role: "Contador Digital - MG", text: "Implementei automações e ganhei 20 horas por semana. Minha qualidade de vida mudou completamente." },
];

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const revenue = useCountUp(3192750, 2500, 0, isVisible);

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Apenas em 2024, Nossos Membros Geraram
          </h2>
        </div>

        <div className={`text-center mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-6xl md:text-7xl lg:text-[120px] font-black text-[hsl(var(--ccd-cyan))] leading-none" style={{ textShadow: "0 0 60px hsl(187 100% 50% / 0.3)" }}>
            R$ {revenue.toLocaleString("pt-BR")}
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4">
            em faturamento extra
          </p>
        </div>

        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Isso não é teoria. Isso não é promessa. Isso é o que aconteceu quando contadores comuns aplicaram o método CCD.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20 ${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}>
          {[
            { icon: Users, value: "2.000+", label: "Contadores Transformados" },
            { icon: CheckCircle, value: "4 semanas", label: "Primeiros resultados" },
            { icon: Star, value: "97%", label: "Taxa de satisfação" },
            { icon: MessageCircle, value: "24/7", label: "Comunidade ativa" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gradient-card rounded-2xl p-6 border border-[hsl(var(--ccd-orange)/0.2)] text-center">
              <stat.icon className="w-8 h-8 text-[hsl(var(--ccd-orange))] mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={`text-center mb-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-xl font-bold text-foreground">
            Eles não são mais inteligentes que você. Eles apenas tiveram acesso ao{" "}
            <span className="text-[hsl(var(--ccd-cyan))]">método certo</span> no momento certo.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto ${isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"}`}>
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gradient-card rounded-2xl p-5 border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[hsl(var(--ccd-cyan))] text-[hsl(var(--ccd-cyan))]" />
                ))}
              </div>
              <p className="text-muted-foreground mb-3 italic text-sm leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
