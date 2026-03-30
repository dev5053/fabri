import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("pickup_requests").insert({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      message: formData.message.trim() || null,
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Pickup Request Sent!",
      description: "We'll get back to you shortly to confirm your pickup.",
    });
    setFormData({ name: "", phone: "", address: "", message: "" });
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-accent font-body font-semibold tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Request a Pickup
          </h2>
          <p className="text-muted-foreground font-body mt-4 text-lg">
            Fill out the form below and we'll schedule a convenient pickup time for you.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-card rounded-xl p-8 shadow-lg space-y-5"
        >
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
              Your Name
            </label>
            <Input
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
              Phone Number
            </label>
            <Input
              required
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
              Pickup Address
            </label>
            <Input
              required
              placeholder="Your full address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
              Additional Notes
            </label>
            <Textarea
              placeholder="Any special instructions or garment details..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base py-5"
          >
            {loading ? "Sending..." : "Schedule Pickup"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
