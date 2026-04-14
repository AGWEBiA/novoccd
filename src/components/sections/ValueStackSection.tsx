import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, Video, Wrench, MessageCircle, Award, Headphones, RefreshCw, Calendar } from "lucide-react";

const items = [
  { icon: BookOpen, title: "17 Módulos de Aceleração", desc: "Do Mindset à Contabilidade Digital Nichada — cada módulo é prático e aplicável" },
  { icon: Video, title: "Mentorias ao Vivo Semanais", desc: "Encontros com Anderson Maisse, Q&A, análise de casos reais e especialistas" },
  { icon: Wrench, title: "Ferramentas e Recursos Prontos", desc: "Scripts de vendas, contratos, planilhas de precificação, templates e automações" },
  { icon: MessageCircle, title: "Comunidade de Elite 24/7", desc: "Networking com 2.000+ contadores, resoluções em minutos, parcerias e indicações" },
  { icon: Award, title: "10 Bônus Exclusivos", desc: "Recursos extras que complementam cada etapa da sua transformação" },
  { icon: RefreshCw, title: "Atualizações Constantes", desc: "Novos conteúdos mensais, estratégias atualizadas e acesso vitalício às atualizações" },
  { icon: Headphones, title: "Suporte Dedicado", desc: "Equipe pronta para tirar dúvidas e te ajudar em cada passo" },
  { icon: Calendar, title: "Acesso por 12 Meses", desc: "Acesso total a tudo por um ano inteiro. Sem limite. Sem restrições." },
];

const ValueStackSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-4xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full border border-[hsl(var(--ccd-cyan)/0.3)] bg-[hsl(var(--ccd-cyan)/0.05)] text-[hsl(var(--ccd-cyan))] text-sm font-semibold tracking-widest uppercase mb-6">
            TUDO QUE VOCÊ RECEBE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Tudo o Que Você Precisa Para{" "}
            <span className="text-gradient-cyan">Dominar o Mercado Contábil</span>, em Um Só Lugar
          </h2>
          <p className="text-xl text-muted-foreground mt-6">
            Ao entrar na CCD, você recebe acesso imediato a:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group bg-gradient-card rounded-2xl p-6 border border-border hover:border-[hsl(var(--ccd-cyan)/0.4)] transition-all duration-300 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--ccd-cyan)/0.1)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-[hsl(var(--ccd-cyan))]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
