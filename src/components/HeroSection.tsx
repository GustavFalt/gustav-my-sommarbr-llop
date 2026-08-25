import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: "center 35%" }}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 text-center px-6 py-12 sm:px-10 md:px-16 md:py-16 mx-4 animate-fade-in bg-foreground/45 backdrop-blur-sm rounded-2xl max-w-2xl">
        <p className="text-sm tracking-[0.3em] uppercase text-background/90 mb-4 md:mb-6 font-body">
          Vi gifter oss
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-normal italic text-background mb-6 whitespace-nowrap">
          Gustav & My
        </h1>
        <div className="section-divider !bg-background/60" />
        <p className="text-lg md:text-xl text-background font-light tracking-wide">
          24 juli 2027
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
