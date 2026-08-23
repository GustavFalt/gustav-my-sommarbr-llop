import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/60 to-foreground/70" />
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <p className="text-sm tracking-[0.3em] uppercase text-background/80 mb-6 font-body">
          Vi gifter oss
        </p>
        <h1 className="text-6xl md:text-8xl font-display font-normal italic text-background mb-6 drop-shadow-lg">
          Gustav & My
        </h1>
        <div className="section-divider !bg-background/60" />
        <p className="text-lg md:text-xl text-background/90 font-light tracking-wide drop-shadow-md">
          24 juli 2027
        </p>
        <p className="mt-10 max-w-md mx-auto text-background/80 font-light leading-relaxed drop-shadow-md">
          Med glädje och kärlek bjuder vi in er att dela vår dag – en sommarkväll
          att minnas, omgiven av natur, nära och kära.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
