import { motion } from "framer-motion";
import { Coffee, Sofa, IndianRupee, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import coffeeLatte from "@/assets/coffee-latte.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import cafeDesserts from "@/assets/cafe-desserts.jpg";
import cafeStaff from "@/assets/cafe-staff.jpg";

const features = [
  {
    icon: Coffee,
    title: "Freshly Brewed",
    description:
      "Every cup is crafted from hand-selected beans, roasted to perfection and brewed fresh just for you.",
    image: coffeeLatte,
  },
  {
    icon: Sofa,
    title: "Cozy Ambience",
    description:
      "Sink into our comfortable seating, surrounded by warm lighting and the gentle hum of good conversations.",
    image: cafeInterior,
  },
  {
    icon: IndianRupee,
    title: "Affordable Luxury",
    description:
      "Premium quality without the premium price. Experience cafe culture that doesn't break the bank.",
    image: cafeDesserts,
  },
  {
    icon: Heart,
    title: "Friendly Staff",
    description:
      "Our baristas don't just make coffee — they make your day. Genuine smiles and warm hospitality.",
    image: cafeStaff,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const WhyUsSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
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
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Why Customers <span className="text-cafe-mocha">Love Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            More than just a café — we're your daily escape, your comfort zone,
            your go-to place for moments that matter.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card
                variant="elevated"
                className="h-full overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-cafe-caramel flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-cafe-foam" />
                  </div>
                </div>

                <CardContent className="pt-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
