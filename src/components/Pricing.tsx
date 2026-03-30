import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Wash",
    price: "₹49",
    unit: "per kg",
    features: [
      "Wash & fold",
      "48-hour turnaround",
      "Free pickup & delivery",
      "Eco-friendly detergent",
    ],
  },
  {
    name: "Premium Care",
    price: "₹99",
    unit: "per piece",
    popular: true,
    features: [
      "Dry cleaning",
      "24-hour turnaround",
      "Free pickup & delivery",
      "Stain treatment included",
      "Hanger packaging",
    ],
  },
  {
    name: "Express Service",
    price: "₹149",
    unit: "per piece",
    features: [
      "Same-day delivery",
      "Dry cleaning & ironing",
      "Free pickup & delivery",
      "Premium hanger packaging",
      "Priority scheduling",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-accent font-body font-semibold tracking-widest uppercase text-sm mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Simple & Affordable
          </h2>
          <p className="text-muted-foreground font-body mt-4 text-lg">
            Quality garment care that fits your budget.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 border transition-shadow hover:shadow-lg ${
                plan.popular
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                  : "bg-card text-foreground border-border"
              }`}
            >
              {plan.popular && (
                <span className="inline-block bg-accent text-accent-foreground text-xs font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold">{plan.price}</span>
                <span className={`font-body text-sm ml-1 ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.unit}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-body text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-accent" : "text-accent"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
