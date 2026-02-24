import { useState } from "react";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    allergies: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-4">
            Tack!
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground font-light mt-8">
            Vi har tagit emot ditt svar. Vi ser fram emot att fira tillsammans!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-4">
            OSA
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground font-light mt-8">
            Vänligen meddela oss senast den 1 maj 2027.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="rsvp-name" className="block text-sm text-muted-foreground mb-2 font-light">
              Namn
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-b border-border bg-transparent py-2 text-foreground font-light focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-3 font-light">
              Kommer du?
            </label>
            <div className="flex gap-6">
              {["Ja, jag kommer!", "Tyvärr kan jag inte"].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value={option}
                    required
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-sm text-foreground font-light">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="rsvp-allergies" className="block text-sm text-muted-foreground mb-2 font-light">
              Allergier / specialkost
            </label>
            <input
              id="rsvp-allergies"
              type="text"
              value={formData.allergies}
              onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
              className="w-full border-b border-border bg-transparent py-2 text-foreground font-light focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="rsvp-message" className="block text-sm text-muted-foreground mb-2 font-light">
              Meddelande till brudparet
            </label>
            <textarea
              id="rsvp-message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border-b border-border bg-transparent py-2 text-foreground font-light focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase font-body hover:opacity-90 transition-opacity rounded-sm"
            >
              Skicka svar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
