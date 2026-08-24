import { useState } from "react";
import { Menu, X } from "lucide-react";

const WeddingNav = () => {
  const [open, setOpen] = useState(false);

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
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); }}
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
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          className="md:hidden -mr-2 p-2 text-foreground"
        >
          {open ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
          <div className="px-6 py-2 flex flex-col">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="py-3 text-left text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors font-body border-b border-border/40 last:border-b-0"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default WeddingNav;
