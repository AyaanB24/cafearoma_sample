import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe-clean.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cozy cafe interior with warm lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-cafe-cream/20 backdrop-blur-sm text-cafe-cream px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-cafe-caramel rounded-full animate-pulse" />
            <span className="text-sm font-medium">Open Daily • 7 AM - 10 PM</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cafe-cream leading-tight mb-6"
          >
            Where Every Sip
            <br />
            <span className="text-cafe-caramel">Feels Like Home</span> ☕
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-cafe-latte text-lg md:text-xl mb-8 leading-relaxed max-w-lg"
          >
            Escape the ordinary. Immerse yourself in the aroma of freshly brewed
            perfection, handcrafted with love in every cup.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="accent" size="xl" className="text-cafe-foam">
              <MapPin className="w-5 h-5 mr-2" />
              Visit Us Today
            </Button>
            <a href="#menu">
              <Button
                variant="heroOutline"
                size="xl"
                className="border-cafe-cream/30 text-cafe-cream hover:bg-cafe-cream/10"
              >
                View Menu
              </Button>
            </a>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-6 mt-12 text-cafe-latte text-sm"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Quick Service</span>
            </div>
            <div className="w-1 h-1 bg-cafe-latte/50 rounded-full" />
            <span>Free WiFi</span>
            <div className="w-1 h-1 bg-cafe-latte/50 rounded-full" />
            <span>Pet Friendly</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-cafe-cream/50 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-cafe-cream/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
