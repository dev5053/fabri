import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-background mb-4">Garment Care Studio</h3>
            <p className="text-background/60 font-body text-sm leading-relaxed">
              Premium dry cleaning and garment care, serving your community with excellence since 2010.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-background/60">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                123 Main Street, Suite 100
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                hello@garmentcarestudio.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">Hours</h4>
            <ul className="space-y-3 font-body text-sm text-background/60">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent" />
                Mon – Fri: 7 AM – 7 PM
              </li>
              <li className="pl-7">Sat: 8 AM – 5 PM</li>
              <li className="pl-7">Sun: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 font-body text-sm">
            © 2026 Garment Care Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
