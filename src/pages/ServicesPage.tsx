import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-primary">
        <Navbar />
      </div>
      <div className="pt-8">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
