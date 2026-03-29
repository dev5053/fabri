const steps = [
  { number: "01", title: "Schedule", description: "Book a pickup online or by phone at a time that suits you." },
  { number: "02", title: "We Collect", description: "Our driver picks up your garments from your door." },
  { number: "03", title: "Service Processing", description: "Your chosen service gets processed with expert care and attention." },
  { number: "04", title: "Delivered", description: "Fresh garments returned to you, ready to wear." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-accent font-body font-semibold tracking-widest uppercase text-sm mb-3">
            Simple Process
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            How It Works
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground font-heading font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
