import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import coffeeLatte from "@/assets/coffee-latte.jpg";
import hotChocolate from "@/assets/hot-chocolate.jpg";
import coldBrew from "@/assets/cold-brew.jpg";
import cafeDesserts from "@/assets/cafe-desserts.jpg";
import cafeSandwich from "@/assets/cafe-sandwich.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Classic Latte",
    description: "Smooth espresso with velvety steamed milk and beautiful latte art",
    price: 149,
    image: coffeeLatte,
    category: "Coffee",
    badge: "Bestseller",
  },
  {
    name: "Belgian Hot Chocolate",
    description: "Rich, creamy hot chocolate topped with fluffy whipped cream",
    price: 179,
    image: hotChocolate,
    category: "Beverages",
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped for 20 hours, smooth and refreshingly bold",
    price: 189,
    image: coldBrew,
    category: "Coffee",
    badge: "Popular",
  },
  {
    name: "Chocolate Croissant",
    description: "Buttery, flaky croissant filled with premium dark chocolate",
    price: 129,
    image: cafeDesserts,
    category: "Pastries",
  },
  {
    name: "Grilled Panini",
    description: "Crispy grilled panini with fresh veggies and mozzarella",
    price: 249,
    image: cafeSandwich,
    category: "Food",
    badge: "Chef's Pick",
  },
  {
    name: "Affogato",
    description: "Vanilla gelato drowned in a shot of hot espresso",
    price: 199,
    image: cafeInterior,
    category: "Desserts",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const MenuSection = () => {
  return (
    <section id="menu" className="py-20 lg:py-32 bg-cafe-cream">
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
            Our Menu
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Popular <span className="text-cafe-mocha">Highlights</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From perfectly brewed coffees to delicious bites — discover our
            customer favorites crafted with love.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Card
                variant="elevated"
                className="h-full overflow-hidden group bg-background"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-4 right-4 bg-cafe-caramel text-cafe-foam text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      {item.badge}
                    </span>
                  )}
                  
                  {/* Category */}
                  <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <CardContent className="pt-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-cafe-caramel font-bold text-lg whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-cafe-mocha font-semibold hover:text-cafe-caramel transition-colors group"
          >
            View Full Menu
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
