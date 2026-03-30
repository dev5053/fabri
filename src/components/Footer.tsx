import { MapPin, Phone, Clock, Mail } from "lucide-react";
import BrandName from "@/components/BrandName";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl text-background mb-4"><BrandName /></h3>
            <p className="text-background/60 font-body text-sm leading-relaxed">
              Premium dry cleaning and garment care, serving your community with excellence since 2010.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-background/60">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                +91 9163755805
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                narsariadewansh51@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">Hours</h4>
            <ul className="space-y-3 font-body text-sm text-background/60">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent" />
                Mon – Fri: 10 AM – 9 PM
              </li>
              <li className="pl-7">Sat: 12 PM – 6 PM</li>
              <li className="pl-7">Sun: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 font-body text-sm">
            © 2026 FabriCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
