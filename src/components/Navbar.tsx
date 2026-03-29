import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import BrandName from "@/components/BrandName";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container flex items-center justify-between">
        <a href="/" className="text-4xl md:text-5xl text-primary-foreground">
          <BrandName />
        </a>
        <div className="hidden md:flex items-center gap-8 font-body text-sm text-primary-foreground/80">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#" className="hover:text-accent transition-colors">Pricing</a>
          <a href="#" className="hover:text-accent transition-colors">About</a>
          <a href="#" className="hover:text-accent transition-colors">Contact</a>
        </div>
        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold rounded-full gap-2">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">(555) 123-4567</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
