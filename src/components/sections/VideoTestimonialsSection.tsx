import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const videos = [
  { id: "7J-DIUGUpfQ", title: "Depoimento de aluno do CCD" },
  { id: "STJVUHrbxhk", title: "Depoimento de aluno do CCD" },
  { id: "q75kB_M_ci0", title: "Depoimento de aluno do CCD" },
  { id: "iAezB6xcdm8", title: "Depoimento de aluno do CCD" },
  { id: "qiuZcIJwIXA", title: "Depoimento de aluno do CCD" },
];

const VideoTestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-10 md:py-14 bg-[hsl(0_0%_2%)]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-10 max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            O que dizem os <span className="text-gradient-cyan">alunos do CCD</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            O CCD foi desenhado para te dar o direcionamento necessário para{" "}
            <span className="text-foreground font-bold">acelerar seus resultados e multiplicar seu faturamento.</span>{" "}
            Quem seguiu a metodologia, teve seus resultados transformados.
          </p>
        </div>

        {/* Vídeo destaque */}
        <div className={`max-w-3xl mx-auto mb-8 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-[hsl(var(--ccd-cyan)/0.3)] shadow-2xl glow-cyan">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videos[0].id}`}
              title={videos[0].title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Grid com os outros 4 vídeos */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto ${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}>
          {videos.slice(1).map((video) => (
            <div
              key={video.id}
              className="relative aspect-video rounded-xl overflow-hidden border border-[hsl(var(--ccd-cyan)/0.2)] hover:border-[hsl(var(--ccd-cyan)/0.5)] transition-colors"
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 ${isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"}`}>
          <p className="text-lg md:text-xl font-bold text-foreground max-w-2xl mx-auto">
            Você pode ser o próximo a ter esses resultados e mudar a sua vida.{" "}
            <span className="text-[hsl(var(--ccd-cyan))]">A questão é: você quer?</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
