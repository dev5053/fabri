import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-primary py-6">
        <Navbar />
      </div>
      <div className="container pt-4">
        <Button asChild variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
          <Link to="/"><ArrowLeft className="w-4 h-4" /> Back to Home</Link>
        </Button>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
