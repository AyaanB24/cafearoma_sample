import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-cafe-caramel/20 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-cafe-cream/10 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Coffee Cup Emoji */}
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="inline-block text-6xl mb-6"
          >
            ☕
          </motion.span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground mb-6">
            Your Next Favorite Café Is
            <span className="block text-cafe-caramel">
              Just Around the Corner
            </span>
          </h2>

          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Stop scrolling. Start sipping. We're waiting to serve you the
            perfect cup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              size="xl"
              className="text-cafe-foam group"
              onClick={() =>
                window.open("https://maps.google.com/?q=12.9,77.6", "_blank")
              }
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() =>
                window.open("tel:12345", "_self")
              }
            >
              Call to Reserve
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
