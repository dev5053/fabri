import heroImage from "@/assets/hero-dry-cleaning.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Freshly pressed garments on a rack"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="container relative z-10 py-24">
        <div className="max-w-2xl space-y-6">
          <p className="text-accent font-body font-semibold tracking-widest uppercase text-sm">
            Premium Garment Care
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight">
            Impeccable Care for Your Finest Garments
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-lg leading-relaxed">
            Expert dry cleaning, pressing, and alterations with free pickup & delivery. 
            Because your clothes deserve the best.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8 py-6 rounded-full">
              Schedule Pickup
            </Button>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8 py-6 rounded-full">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
