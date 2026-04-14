const FooterSection = () => {
  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-4 text-center space-y-3">
        <p className="text-muted-foreground text-sm">
          Transformamos conhecimento em negócios lucrativos
        </p>
        <p className="text-sm">
          Venha ser um Expert AG WEBi —{" "}
          <a
            href="https://www.agwebi.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors"
          >
            www.agwebi.com.br
          </a>
        </p>
        <p className="text-muted-foreground text-xs pt-4">
          ©2026 Anderson Maisse - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
