import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { Star, Users, CheckCircle } from "lucide-react";

const testimonials = [
  { name: "Carlos M.", role: "Contador - SP", text: "Saí de R$ 3.000/mês para R$ 25.000/mês em 6 meses. O CCD mudou minha forma de pensar sobre contabilidade." },
  { name: "Ana P.", role: "Escritório Contábil - MG", text: "Triplicei meu faturamento aplicando as técnicas de precificação por valor. Clientes me indicam sem eu pedir." },
  { name: "Roberto S.", role: "Contador Consultivo - RJ", text: "Larguei 30 clientes que pagavam pouco e foquei em 10 que pagam premium. Trabalho menos e ganho muito mais." },
];

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const revenue = useCountUp(3192750, 2500, 0, isVisible);

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        {/* Big number */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-6xl md:text-7xl lg:text-[120px] font-black text-[hsl(var(--ccd-cyan))] leading-none" style={{ textShadow: "0 0 60px hsl(187 100% 50% / 0.3)" }}>
            R$ {revenue.toLocaleString("pt-BR")}
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4">
            em faturamento extra gerado pelos membros em 2024
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20 ${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}>
          {[
            { icon: Users, value: "2.000+", label: "Membros Ativos" },
            { icon: CheckCircle, value: "4 semanas", label: "Para primeiros resultados" },
            { icon: Star, value: "97%", label: "Taxa de satisfação" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gradient-card rounded-2xl p-6 border border-[hsl(var(--ccd-orange)/0.2)] text-center">
              <stat.icon className="w-8 h-8 text-[hsl(var(--ccd-orange))] mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className={`grid md:grid-cols-3 gap-6 max-w-5xl mx-auto ${isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"}`}>
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gradient-card rounded-2xl p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(var(--ccd-cyan))] text-[hsl(var(--ccd-cyan))]" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
