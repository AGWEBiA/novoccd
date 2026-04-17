import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { Star, Users, CheckCircle, MessageCircle } from "lucide-react";

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const revenue = useCountUp(15000000, 2500, 0, isVisible);

  return (
    <section ref={ref} className="relative py-10 md:py-14 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Apenas em 2024, Nossos Membros Geraram
          </h2>
        </div>

        <div className={`text-center mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-black text-[hsl(var(--ccd-cyan))] leading-none break-words" style={{ textShadow: "0 0 60px hsl(187 100% 50% / 0.3)" }}>
            R$ {revenue.toLocaleString("pt-BR")}+
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4">
            em resultados gerados por membros do CCD
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

      </div>
    </section>
  );
};

export default SocialProofSection;
