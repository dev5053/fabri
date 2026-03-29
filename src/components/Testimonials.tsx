import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Business Executive",
    text: "The quality is outstanding. My suits have never looked better, and the pickup service saves me so much time.",
  },
  {
    name: "James Rodriguez",
    role: "Wedding Planner",
    text: "I trust them with delicate fabrics and wedding dresses. They handle everything with exceptional care.",
  },
  {
    name: "Emily Chen",
    role: "Busy Mom",
    text: "Game-changer for our family. Reliable, affordable, and everything comes back perfectly pressed.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-accent font-body font-semibold tracking-widest uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/85 font-body leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="text-primary-foreground font-body font-semibold">{t.name}</p>
                <p className="text-primary-foreground/50 font-body text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
