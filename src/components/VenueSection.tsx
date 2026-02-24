import { MapPin } from "lucide-react";

const VenueSection = () => {
  const venues = [
    {
      title: "Vigsel",
      name: "Gamla Uppsala kyrka",
      address: "Disavägen 8, 754 40 Uppsala",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d17.6369!3d59.8983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fcb01dbeb3d05%3A0x5c293d0fc3e9e17c!2sGamla%20Uppsala%20kyrka!5e0!3m2!1ssv!2sse!4v1700000000000",
    },
    {
      title: "Fest",
      name: "Ulva Kvarn",
      address: "Ulva 15, 755 93 Uppsala",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d17.6!3d59.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fcb9e8e7b1a1d%3A0x2cf5a2e55b14c0a0!2sUlva%20Kvarn!5e0!3m2!1ssv!2sse!4v1700000000000",
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
