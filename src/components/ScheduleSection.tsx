const ScheduleSection = () => {
  const events = [
    { time: "15:00", label: "Vigsel", description: "Gamla Uppsala kyrka" },
    { time: "16:30", label: "Mingel", description: "Välkomstdrink & mingel" },
    { time: "18:00", label: "Middag", description: "Treretters middag" },
    { time: "21:00", label: "Fest", description: "Dans & firande" },
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-4">
          Dagens schema
        </h2>
        <div className="section-divider" />
        <div className="mt-12 space-y-10">
          {events.map((event) => (
            <div key={event.label} className="flex items-start gap-8 text-left max-w-sm mx-auto">
              <span className="text-lg font-light text-muted-foreground w-16 shrink-0 pt-0.5">
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
