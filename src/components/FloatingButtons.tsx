import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Call Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <a href="tel:12345">
                <Button
                  variant="floating"
                  size="iconLg"
                  className="bg-cafe-mocha hover:bg-cafe-mocha/90 shadow-elevated"
                >
                  <Phone className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <a
                href="https://wa.me/12345?text=Hi!%20I'd%20like%20to%20know%20more%20about%20Café%20Aroma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="floating"
                  size="iconLg"
                  className="bg-green-600 hover:bg-green-700 shadow-elevated"
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-elevated transition-all duration-300 ${
          isExpanded
            ? "bg-foreground text-background rotate-0"
            : "bg-cafe-caramel text-cafe-foam"
        }`}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>

      {/* Pulse Animation */}
      {!isExpanded && (
        <motion.div
          className="absolute inset-0 w-14 h-14 rounded-full bg-cafe-caramel -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          style={{ bottom: 0, right: 0 }}
        />
      )}
    </div>
  );
};
