import { MapPin } from "lucide-react";

const VenueSection = () => {
  const venues = [
    {
      title: "Vigsel",
      name: "Gamla Uppsala kyrka",
      address: "Disavägen 8, 754 40 Uppsala",
      mapUrl: "https://maps.google.com/maps?q=Gamla+Uppsala+kyrka,+Disav%C3%A4gen+8,+754+40+Uppsala&hl=sv&z=15&output=embed",
    },
    {
      title: "Fest",
      name: "Ulva Kvarn",
      address: "Ulva kvarn, 755 93 Uppsala",
      mapUrl: "https://maps.google.com/maps?q=Ulva+kvarn,+755+93+Uppsala&hl=sv&z=15&output=embed",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-4">
          Platser
        </h2>
        <div className="section-divider" />
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {venues.map((venue) => (
            <div key={venue.title} className="text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                {venue.title}
              </p>
              <h3 className="text-xl font-display text-foreground mb-2">{venue.name}</h3>
              <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <p className="text-sm font-light">{venue.address}</p>
              </div>
              <div className="aspect-video rounded-sm overflow-hidden border border-border">
                <iframe
                  src={venue.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Karta till ${venue.name}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
