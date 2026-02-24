const RSVPSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-4">
            OSA
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground font-light mt-8">
            Vänligen meddela oss senast den 1 maj 2027.
          </p>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdJ9wlPkx3G-oY33ZqTRiyV_SDeZwKoDmZ0PjW5Fja1yYG33g/viewform?embedded=true"
            width="640"
            height="895"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full max-w-[640px]"
            title="OSA-formulär"
          >
            Läser in …
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
