const ScheduleSection = () => {
  const events = [
    { time: "14:30", label: "Vigsel", description: "Gamla Uppsala kyrka" },
    { time: "16:00", label: "Mingel", description: "Välkomstdrink & mingel på Ulva Kvarn" },
    { time: "18:00", label: "Middag", description: "Mat & dryck på Restaurang Ulva" },
    { time: "Efter middagen", label: "Fest", description: "" },
  ];

  return (
    <section className="py-16 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-4">
          Dagens schema
        </h2>
        <div className="section-divider" />
        <div className="mt-10 md:mt-12 space-y-8 md:space-y-10">
          {events.map((event) => (
            <div key={event.label} className="flex items-start gap-5 sm:gap-8 text-left max-w-sm w-full mx-auto">
              <span className="text-base sm:text-lg font-light text-muted-foreground w-20 sm:w-24 shrink-0 pt-0.5">
                {event.time}
              </span>
              <div>
                <h3 className="text-lg font-display text-foreground">{event.label}</h3>
                <p className="text-sm text-muted-foreground font-light mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
