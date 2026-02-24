const WeddingNav = () => {
  const links = [
    { label: "Schema", href: "#schema" },
    { label: "Platser", href: "#platser" },
    { label: "Klädkod", href: "#kladkod" },
    { label: "Presenter", href: "#presenter" },
    { label: "OSA", href: "#osa" },
    { label: "Info", href: "#info" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-display italic text-foreground text-lg"
        >
          G & M
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default WeddingNav;
