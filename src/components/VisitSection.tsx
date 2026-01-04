import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123, Cafe Street, Koramangala", "Bangalore, Karnataka 560034"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon - Fri: 7:00 AM - 10:00 PM", "Sat - Sun: 8:00 AM - 11:00 PM"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["12345", "67890"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@cafearoma.in", "reservations@cafearoma.in"],
  },
];

export const VisitSection = () => {
  return (
    <section id="visit" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-cafe-caramel font-medium tracking-wider uppercase text-sm">
            Find Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Visit <span className="text-cafe-mocha">Café Aroma</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're conveniently located in the heart of Koramangala. Drop by for
            your daily dose of caffeine and warmth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-warm h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Café Aroma Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                variant="warm"
                className="hover:shadow-warm transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-cafe-caramel/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-cafe-caramel" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Get Directions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="hero"
            size="xl"
            onClick={() =>
              window.open(
                "https://maps.google.com/?q=12.9,77.6",
                "_blank"
              )
            }
          >
            <MapPin className="w-5 h-5 mr-2" />
            Get Directions
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
