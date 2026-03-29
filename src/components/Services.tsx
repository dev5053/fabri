import { Shirt, Sparkles, Scissors, Clock } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Dry Cleaning",
    description: "Gentle, eco-friendly solvents that preserve fabric quality and color vibrancy.",
    price: "From $8.99",
  },
  {
    icon: Sparkles,
    title: "Wash & Press",
    description: "Professional laundering with expert pressing for a crisp, polished look.",
    price: "From $4.99",
  },
  {
    icon: Scissors,
    title: "Alterations",
    description: "Precision tailoring and repairs by experienced seamstresses.",
    price: "From $12.99",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Drop off before 10 AM, pick up by 5 PM. Perfect for last-minute needs.",
    price: "50% surcharge",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary" id="services">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-accent font-body font-semibold tracking-widest uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Our Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-accent font-body font-bold text-sm">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
