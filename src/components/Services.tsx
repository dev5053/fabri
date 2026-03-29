import { Shirt, Sparkles, Scissors, Clock } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Fall & Pico",
    description: "Expert fall and pico work with precision finishing for all fabric types.",
    price: "₹80",
  },
  {
    icon: Sparkles,
    title: "Saree Polishing",
    description: "Restore your saree's original sheen and crispness with professional polishing.",
    price: "₹60",
  },
  {
    icon: Scissors,
    title: "Pre-Folding",
    description: "Neat, crease-free folding to keep your garments ready to wear or store.",
    price: "₹30",
  },
  {
    icon: Shirt,
    title: "Dry Cleaning",
    description: "Gentle, eco-friendly solvents that preserve fabric quality and color vibrancy.",
    price: "₹80",
  },
  {
    icon: Clock,
    title: "Same Day Delivery",
    description: "Need it fast? Get your garments cleaned and delivered the same day.",
    price: "50% extra",
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
