import { Car, BedDouble, Phone, Mic, Heart } from "lucide-react";

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
  ];

  return (
    <section className="py-16 md:py-32 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-4">
          Praktisk information
        </h2>
        <div className="section-divider" />
        <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-10">
          {sections.map((section) => (
            <div key={section.title} className="text-center">
              <section.icon className="w-5 h-5 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-foreground mb-3">{section.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          ))}
          <div className="text-center">
            <Phone className="w-5 h-5 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-lg text-foreground mb-3">Kontakt</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Har ni frågor? Tveka inte att höra av er till oss.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mt-3">
              Gustav:{" "}
              <a href="tel:+46705638822" className="text-primary underline underline-offset-2">
                +46 70 563 88 22
              </a>
              <br />
              My:{" "}
              <a href="tel:+46723875787" className="text-primary underline underline-offset-2">
                +46 72 387 57 87
              </a>
            </p>
          </div>
        </div>
        <div className="mt-16 md:mt-20 text-center">
          <Mic className="w-5 h-5 text-primary mx-auto mb-4" strokeWidth={1.5} />
          <h3 className="font-display text-lg text-foreground mb-3">Tal & Toastmadames</h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
            Våra toastmadames heter Maja och Henny. Önskar du att hålla tal under kvällen eller vill komma i kontakt med dem mejlar du:{" "}
            <a href="mailto:Maja.ramstrom02@gmail.com" className="text-primary underline underline-offset-2 break-words">
              Maja.ramstrom02@gmail.com
            </a>
          </p>
        </div>
        <div className="mt-16 md:mt-20 text-center">
          <Heart className="w-5 h-5 text-primary mx-auto mb-4" strokeWidth={1.5} />
          <h3 className="font-display text-lg text-foreground mb-3">Barn & vuxenfest</h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
            Vi ber om förståelse för att festen på kvällen är för vuxna. Barn under 15 år är varmt välkomna att vara med under vigseln i kyrkan, men inte på festen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfoSection;
