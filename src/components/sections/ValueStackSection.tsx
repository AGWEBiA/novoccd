import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, Video, Wrench, MessageCircle, Award, Headphones } from "lucide-react";

const items = [
  { icon: BookOpen, title: "17 Módulos Completos", desc: "Do básico ao avançado em contabilidade consultiva" },
  { icon: Video, title: "Mentorias ao Vivo", desc: "Sessões semanais com Anderson Maisse" },
  { icon: Wrench, title: "Ferramentas Prontas", desc: "Planilhas, contratos, scripts de vendas" },
  { icon: MessageCircle, title: "Comunidade Exclusiva", desc: "Networking com 2.000+ contadores" },
  { icon: Award, title: "Certificação CCD", desc: "Selo reconhecido no mercado" },
  { icon: Headphones, title: "Suporte Dedicado", desc: "Equipe pronta para tirar dúvidas" },
];

const ValueStackSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full border border-[hsl(var(--ccd-cyan)/0.3)] bg-[hsl(var(--ccd-cyan)/0.05)] text-[hsl(var(--ccd-cyan))] text-sm font-semibold tracking-widest uppercase mb-6">
            TUDO QUE VOCÊ RECEBE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Um Arsenal Completo Para Sua{" "}
            <span className="text-gradient-cyan">Transformação</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group bg-gradient-card rounded-2xl p-6 border border-border hover:border-[hsl(var(--ccd-cyan)/0.4)] transition-all duration-300 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--ccd-cyan)/0.1)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-[hsl(var(--ccd-cyan))]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
