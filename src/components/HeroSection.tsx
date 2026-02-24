import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-body">
          Vi gifter oss
        </p>
        <h1 className="text-6xl md:text-8xl font-display font-normal italic text-foreground mb-6">
          Gustav & My
        </h1>
        <div className="section-divider" />
        <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
          24 juli 2027
        </p>
        <p className="mt-10 max-w-md mx-auto text-muted-foreground font-light leading-relaxed">
          Med glädje och kärlek bjuder vi in er att dela vår dag – en sommarkväll
          att minnas, omgiven av natur, nära och kära.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
