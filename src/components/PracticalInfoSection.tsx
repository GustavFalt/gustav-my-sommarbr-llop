import { Car, BedDouble, Phone } from "lucide-react";

const PracticalInfoSection = () => {
  const sections = [
    {
      icon: Car,
      title: "Parkering",
      text: "Parkering vid Gamla Uppsala kyrka finns i anslutning till Gamla Uppsala högar eller vid Odinsborg.\n\nVid Ulva Kvarn finns möjlighet att parkera på markerade platser. På gräsplanen väster om kvarnen finns det gott om plats.",
    },
    {
      icon: BedDouble,
      title: "Boende",
      text: "Uppsala erbjuder flera hotell och boenden. Vi rekommenderar att boka i god tid då det är högsäsong.",
    },
    {
      icon: Phone,
      title: "Kontakt",
      text: "Har ni frågor? Tveka inte att höra av er till oss.\n\nGustav: +46 70 563 88 22\nMy: +46 72 387 57 87",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-4">
          Praktisk information
        </h2>
        <div className="section-divider" />
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {sections.map((section) => (
            <div key={section.title} className="text-center">
              <section.icon className="w-5 h-5 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-foreground mb-3">{section.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfoSection;
